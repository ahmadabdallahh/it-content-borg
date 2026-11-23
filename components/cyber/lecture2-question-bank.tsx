"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { useLang } from "@/components/chrome";
import {
  LECTURE2_QUESTION_BANK,
  type L2Question,
} from "@/lib/lecture2-question-bank";
import {
  type AnswerState,
  SET_SIZE,
  scoreTier,
  shortAnswerCorrect,
  splitQuestionSets,
} from "@/lib/quiz-utils";

const SETS = splitQuestionSets(LECTURE2_QUESTION_BANK);
const LAST_SET = SETS.length - 1;

const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

/*
  Lecture 2 quiz: ten sets of five. The student answers all five, then checks
  the whole set. Feedback appears per question; wrong answers can be retried.
*/
export default function Lecture2QuestionBank() {
  const lang = useLang();
  const [setIndex, setSetIndex] = useState(0);
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [texts, setTexts] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, AnswerState>>({});
  const [showResult, setShowResult] = useState(false);
  const [run, setRun] = useState(1);
  const [unlocked, setUnlocked] = useState(0);

  const currentSet = SETS[setIndex];
  const checkedCount = Object.keys(results).length;
  const score = Object.values(results).filter((r) => r.correct).length;
  const currentChecked = currentSet.filter((q) => results[q.id]).length;
  const setComplete = currentChecked === currentSet.length;
  const currentAnswered = currentSet.every((q) =>
    results[q.id] ||
    (q.kind === "short" ? !!(texts[q.id] ?? "").trim() : picks[q.id] !== undefined),
  );
  const setReady = currentAnswered && !setComplete;
  const checkedButWrong = LECTURE2_QUESTION_BANK.filter(
    (q) => results[q.id] && !results[q.id].correct,
  );

  const checkSet = () => {
    if (!setReady) return;
    const updates: Record<number, AnswerState> = {};
    currentSet.forEach((q) => {
      if (results[q.id]) return;
      if (q.kind === "short") {
        const answer = (texts[q.id] ?? "").trim();
        if (answer) {
          updates[q.id] = { correct: shortAnswerCorrect(q, answer, lang), text: answer };
        }
        return;
      }
      const picked = picks[q.id];
      if (picked !== undefined) {
        updates[q.id] = { correct: picked === q.answer, picked };
      }
    });
    if (!Object.keys(updates).length) return;
    setResults((prev) => ({ ...prev, ...updates }));
    setUnlocked((u) => Math.max(u, Math.min(setIndex + 1, LAST_SET)));
  };

  const retryOne = (id: number) => {
    setResults((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setPicks((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setTexts((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const retryAll = () => {
    setPicks({});
    setTexts({});
    setResults({});
    setSetIndex(0);
    setShowResult(false);
    setRun((r) => r + 1);
    setUnlocked(0);
  };

  const chooseSet = (index: number) => {
    if (index < 0 || index > unlocked) return;
    setSetIndex(index);
    setShowResult(false);
  };

  const goNext = () => {
    if (!setComplete) return;
    if (setIndex === LAST_SET) setShowResult(true);
    else setSetIndex((i) => i + 1);
  };

  const reviewWrong = () => {
    const first = checkedButWrong[0];
    if (!first) return;
    const targetSet = Math.floor((first.id - 1) / SET_SIZE);
    setSetIndex(targetSet);
    setShowResult(false);
    requestAnimationFrame(() =>
      document
        .getElementById(`l2-q-${first.id}`)
        ?.scrollIntoView({ block: "center", behavior: "smooth" }),
    );
  };

  const tier = scoreTier(score, LECTURE2_QUESTION_BANK.length);
  const verdict =
    lang === "en"
      ? tier === "perfect"
        ? "Perfect run. You own the classical cipher model."
        : tier === "strong"
          ? "Strong pass. Review the misses, then try again."
          : tier === "progress"
            ? "Good progress. Recheck the Caesar formulas and cipher families."
            : "Reread the lecture cards, then reset and work set by set."
      : tier === "perfect"
        ? "نتيجة كاملة. النموذج الكلاسيكي أصبح لك."
        : tier === "strong"
          ? "نجاح قوي. راجع الأخطاء ثم حاول مجددًا."
          : tier === "progress"
            ? "تقدم جيد. أعد فحص صيغ قيصر وعائلات الشيفرة."
            : "اقرأ بطاقات المحاضرة ثم ابدأ من جديد مجموعة بمجموعة.";

  const renderQuestion = (q: L2Question) => {
    const result = results[q.id];
    const section = lang === "en" ? q.section_en : q.section_ar;
    const prompt = lang === "en" ? q.q_en : q.q_ar;
    const why = lang === "en" ? q.why_en : q.why_ar;
    const stateBorder = result
      ? result.correct
        ? "border-emerald-500/60 dark:border-emerald-400/50 bg-emerald-50/40 dark:bg-emerald-400/5"
        : "border-red-500/60 dark:border-red-400/50 bg-red-50/40 dark:bg-red-400/5"
      : "border-stone-200 dark:border-white/10 bg-stone-900/[.02] dark:bg-black/20";

    return (
      <article
        key={q.id}
        id={`l2-q-${q.id}`}
        className={`scroll-mt-28 rounded-xl border p-4 transition ${stateBorder}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-code text-[11px] font-bold text-ember dark:text-orange-300">
            Q{q.id} · {section}
          </p>
          {result && (
            <p
              className={`font-code text-[11px] font-bold ${result.correct ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}`}
            >
              {result.correct ? (
                <>
                  <span className="en-text">✓ Correct</span>
                  <span className="ar-text">✓ صحيح</span>
                </>
              ) : (
                <>
                  <span className="en-text">✕ Wrong</span>
                  <span className="ar-text">✕ خطأ</span>
                </>
              )}
            </p>
          )}
        </div>

        <h5 className="font-bold text-sm leading-relaxed mt-1.5">{prompt}</h5>

        {q.kind === "short" ? (
          <div className="mt-3">
            <label className="sr-only" htmlFor={`l2-answer-${q.id}`}>
              {lang === "en" ? `Your answer for question ${q.id}` : `إجابتك للسؤال ${q.id}`}
            </label>
            <textarea
              id={`l2-answer-${q.id}`}
              rows={2}
              value={texts[q.id] ?? ""}
              disabled={!!result}
              onChange={(e) =>
                setTexts((prev) => ({ ...prev, [q.id]: e.target.value }))
              }
              placeholder={lang === "en" ? "Type your answer…" : "اكتب إجابتك…"}
              className={`w-full rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] px-3 py-2 text-sm ${FOCUS} disabled:opacity-75`}
            />
          </div>
        ) : (
          <fieldset className="mt-3">
            <legend className="sr-only">{prompt}</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((option, index) => {
                const stateCls = result
                  ? index === q.answer
                    ? "correct"
                    : picks[q.id] === index
                      ? "wrong"
                      : ""
                  : "";
                return (
                  <label
                    key={index}
                    className={`opt flex items-center gap-2.5 rounded-xl border border-stone-200 dark:border-white/10 px-3 py-2.5 cursor-pointer text-sm transition min-h-[44px] ${stateCls}`}
                  >
                    <input
                      type="radio"
                      name={`l2-q-${q.id}`}
                      value={index}
                      checked={picks[q.id] === index}
                      disabled={!!result}
                      onChange={() =>
                        setPicks((prev) => ({ ...prev, [q.id]: index }))
                      }
                      className="accent-[#c2410c] w-4 h-4 shrink-0"
                    />
                    <span>{lang === "en" ? option.en : option.ar}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}

        {result && !result.correct && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => retryOne(q.id)}
              className={`min-h-[44px] px-4 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 font-bold text-sm transition ${FOCUS}`}
            >
              <span className="en-text">Try again</span>
              <span className="ar-text">حاول مجددًا</span>
            </button>
          </div>
        )}

        {result && (
          <div
            role="status"
            aria-live="polite"
            className="mt-3 rounded-lg border border-stone-200 dark:border-white/10 bg-white/70 dark:bg-black/20 p-3 text-sm"
          >
            {q.kind === "short" && (
              <p className="font-semibold mb-1">
                <span className="en-text">Model answer: </span>
                <span className="ar-text">الإجابة النموذجية: </span>
                <span className="text-ember dark:text-orange-300">
                  {lang === "en" ? q.answer_en : q.answer_ar}
                </span>
              </p>
            )}
            {!result.correct && q.kind !== "short" && (
              <p className="font-semibold mb-1">
                <span className="en-text">Correct answer: </span>
                <span className="ar-text">الإجابة الصحيحة: </span>
                <span className="text-ember dark:text-orange-300">
                  {lang === "en"
                    ? q.options[q.answer].en
                    : q.options[q.answer].ar}
                </span>
              </p>
            )}
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{why}</p>
          </div>
        )}
      </article>
    );
  };

  const renderResult = () => (
    <div key="result" className="mt-5 lec2-score-pop">
      <div className="rounded-2xl border border-ember/40 dark:border-orange-300/40 bg-ember/5 dark:bg-orange-300/5 p-6 text-center">
        <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
          FINAL RESULT · LECTURE 2
        </p>
        <p className="text-5xl font-extrabold mt-2">
          <span className="text-ember dark:text-orange-300">{score}</span>
          <span className="text-2xl text-stone-400 dark:text-stone-500">
            /{LECTURE2_QUESTION_BANK.length}
          </span>
        </p>
        <div className="mx-auto mt-3 h-2 w-full max-w-sm rounded-full bg-stone-200 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-ember transition-[width] duration-700"
            style={
              {
                width: `${(score / LECTURE2_QUESTION_BANK.length) * 100}%`,
              } as CSSProperties
            }
          />
        </div>
        <p className="mt-3 text-sm font-semibold text-stone-700 dark:text-stone-200">
          {verdict}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={retryAll}
            className={`min-h-[44px] px-5 rounded-xl bg-ember hover:bg-orange-700 active:scale-[.98] text-white font-bold text-sm transition ${FOCUS}`}
          >
            <span className="en-text">Retry all 50</span>
            <span className="ar-text">إعادة الخمسين</span>
          </button>
          <button
            type="button"
            disabled={checkedButWrong.length === 0}
            onClick={reviewWrong}
            className={`min-h-[44px] px-5 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed ${FOCUS}`}
          >
            <span className="en-text">Review wrong ({checkedButWrong.length})</span>
            <span className="ar-text">راجع الأخطاء ({checkedButWrong.length})</span>
          </button>
          <Link
            href="/cyber/lecture-2"
            className={`min-h-[44px] px-5 inline-flex items-center rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] font-bold text-sm transition hover:border-ember ${FOCUS}`}
          >
            <span className="en-text">Back to lecture</span>
            <span className="ar-text">العودة إلى المحاضرة</span>
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {SETS.map((set, i) => {
          const setScore = set.filter((q) => results[q.id]?.correct).length;
          return (
            <div
              key={i}
              className="rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] p-3 text-center"
            >
              <p className="font-code text-[10px] text-stone-500 dark:text-stone-400">
                SET {i + 1}
              </p>
              <p className="font-extrabold text-lg text-ember dark:text-orange-300">
                {setScore}/{set.length}
              </p>
            </div>
          );
        })}
      </div>

      {checkedButWrong.length > 0 && (
        <div className="mt-4 rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] p-4">
          <h5 className="font-extrabold text-sm">
            <span className="en-text">Questions to revisit</span>
            <span className="ar-text">أسئلة تحتاج مراجعة</span>
          </h5>
          <ol className="mt-2 flex flex-wrap gap-1.5">
            {checkedButWrong.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => chooseSet(Math.floor((q.id - 1) / SET_SIZE))}
                  className={`font-code text-xs font-bold px-2 py-1 rounded-lg bg-red-50 dark:bg-red-400/10 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-400/30 hover:bg-red-100 dark:hover:bg-red-400/20 ${FOCUS}`}
                >
                  Q{q.id}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );

  return (
    <section
      id="lecture2-quiz-card"
      aria-labelledby="l2QuizTitle"
      className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
            LECTURE 2 · 50 QUESTIONS · 10 SETS
          </p>
          <h4 id="l2QuizTitle" className="text-xl font-extrabold mt-1">
            <span className="en-text">Classical ciphers, checked set by set</span>
            <span className="ar-text">الشيفرة الكلاسيكية، تحقق منها مجموعة بمجموعة</span>
          </h4>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-[62ch]">
            <span className="en-text">
              Answer all five questions, then check the set for instant
              feedback. The final screen scores all fifty.
            </span>
            <span className="ar-text">
              أجب عن الأسئلة الخمسة، ثم تحقق من المجموعة لتحصل على تغذية فورية.
              وتظهر النتيجة النهائية بعد الخمسين.
            </span>
          </p>
        </div>
        <div className="text-end">
          <p className="font-code text-xs font-bold px-2.5 py-1 rounded-full bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10">
            {score} / {LECTURE2_QUESTION_BANK.length}
          </p>
          <p className="font-code text-[10px] text-stone-500 dark:text-stone-400 mt-1">
            {checkedCount} {lang === "en" ? "checked" : "تم فحصها"}
          </p>
        </div>
      </div>

      <div
        className="mt-4 h-2 rounded-full bg-stone-200 dark:bg-white/10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full rounded-full bg-ember transition-[width] duration-500"
          style={
            {
              width: `${(checkedCount / LECTURE2_QUESTION_BANK.length) * 100}%`,
            } as CSSProperties
          }
        />
      </div>

      <div
        role="group"
        aria-label={lang === "en" ? "Question sets" : "مجموعات الأسئلة"}
        className="mt-3 flex flex-wrap gap-1.5"
      >
        {SETS.map((set, i) => {
          const done = set.every((q) => results[q.id]);
          const setScore = set.filter((q) => results[q.id]?.correct).length;
          return (
            <button
              key={i}
              type="button"
              disabled={i > unlocked}
              onClick={() => chooseSet(i)}
              aria-current={!showResult && setIndex === i ? "step" : undefined}
              className={`min-h-[40px] min-w-[44px] px-2.5 rounded-lg font-code text-xs font-bold border transition disabled:opacity-40 disabled:cursor-not-allowed ${
                !showResult && setIndex === i
                  ? "bg-ember text-white border-ember dark:bg-orange-700 dark:border-orange-700"
                  : done
                    ? "border-emerald-500/50 bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300"
                    : "border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-white/5 text-stone-600 dark:text-stone-300 hover:border-ember"
              } ${FOCUS}`}
            >
              {i + 1}
              {done && <span className="ms-1 opacity-80">{setScore}/{set.length}</span>}
            </button>
          );
        })}
      </div>

      {showResult ? (
        renderResult()
      ) : (
        <div key={`${lang}-${setIndex}-${run}`} className="mt-5 lec2-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-code text-xs font-bold text-stone-500 dark:text-stone-400">
              SET {setIndex + 1} / {SETS.length} · Q{currentSet[0].id}–Q
              {currentSet[currentSet.length - 1].id}
            </p>
            <p className="font-code text-xs font-bold text-ember dark:text-orange-300">
              {currentChecked}/{currentSet.length}{" "}
              {lang === "en" ? "checked" : "تم فحصها"}
            </p>
          </div>

          <div className="mt-3 space-y-4">{currentSet.map(renderQuestion)}</div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={!setReady}
              onClick={checkSet}
              className={`min-h-[44px] px-5 rounded-xl bg-ember hover:bg-orange-700 active:scale-[.98] text-white font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed ${FOCUS}`}
            >
              <span className="en-text">Check answers</span>
              <span className="ar-text">تحقق من الإجابات</span>
            </button>
            <p className="font-code text-[11px] font-semibold text-stone-500 dark:text-stone-400">
              {setComplete ? (
                <>
                  <span className="en-text">
                    Set checked · retry wrong answers if needed
                  </span>
                  <span className="ar-text">
                    تم فحص المجموعة · أعد الإجابة عن الأخطاء إن وجدت
                  </span>
                </>
              ) : currentAnswered ? (
                <>
                  <span className="en-text">Ready to check</span>
                  <span className="ar-text">جاهز للفحص</span>
                </>
              ) : (
                <>
                  <span className="en-text">Answer all five to check</span>
                  <span className="ar-text">أجب عن الخمسة للفحص</span>
                </>
              )}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              disabled={setIndex === 0}
              onClick={() => chooseSet(setIndex - 1)}
              className={`min-h-[44px] px-4 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed ${FOCUS}`}
            >
              <span className="en-text">Previous set</span>
              <span className="ar-text">المجموعة السابقة</span>
            </button>
            <button
              type="button"
              disabled={!setComplete}
              onClick={goNext}
              className={`min-h-[44px] px-5 rounded-xl bg-ember hover:bg-orange-700 active:scale-[.98] text-white font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed ${FOCUS}`}
            >
              {setIndex === LAST_SET ? (
                <>
                  <span className="en-text">Show result</span>
                  <span className="ar-text">اعرض النتيجة</span>
                </>
              ) : (
                <>
                  <span className="en-text">Next set</span>
                  <span className="ar-text">المجموعة التالية</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={retryAll}
              className={`min-h-[44px] px-4 rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] hover:border-ember font-bold text-sm transition ${FOCUS}`}
            >
              <span className="en-text">Retry all</span>
              <span className="ar-text">إعادة الكل</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
