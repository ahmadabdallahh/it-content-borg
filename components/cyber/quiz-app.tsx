"use client";

import { useMemo, useState } from "react";
import { QUIZ_APP } from "@/lib/cyber-data";
import { useLang } from "@/components/chrome";

/*
  Full quiz flow: start screen → one question at a time with a progress bar →
  result screen with score, verdict and a per-question review.
  Purely client-side: answers live in memory only, nothing is submitted,
  and option text renders as plain text nodes (no HTML injection surface).
*/

type Phase = "start" | "question" | "result";

const FOCUSV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

export default function QuizApp() {
  const lang = useLang();
  const ar = lang === "ar";
  const [phase, setPhase] = useState<Phase>("start");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const total = QUIZ_APP.length;
  const score = useMemo(
    () => QUIZ_APP.reduce((acc, q, i) => acc + (answers[i] === q.a ? 1 : 0), 0),
    [answers],
  );
  const pct = Math.round((score / total) * 100);

  const verdict = ar
    ? pct === 100
      ? "علامة كاملة. الشيفرة الكلاسيكية كلها أصبحت لك."
      : pct >= 80
        ? "ممتاز. راجع الأسئلة التي أخطأت فيها فقط."
        : pct >= 50
          ? "جيد. أعد قراءة بطاقات الشيفرة ثم حاول مجددًا."
          : "ابدأ من المحاضرات — كل سؤال هنا له بطاقة في الصفحتين."
    : pct === 100
      ? "Full marks. Every classical cipher is yours."
      : pct >= 80
        ? "Strong pass. Review only the questions you missed."
        : pct >= 50
          ? "Getting there. Reread the cipher cards, then retry."
          : "Start from the lectures — every question here maps to a card.";

  const start = () => {
    setAnswers(QUIZ_APP.map(() => null));
    setCurrent(0);
    setPhase("question");
  };

  const pick = (option: number) => {
    setAnswers((old) => {
      const next = [...old];
      next[current] = option;
      return next;
    });
  };

  const answered = answers[current] !== null;
  const isLast = current === total - 1;
  const q = QUIZ_APP[current];

  const next = () => {
    if (!answered) return;
    if (isLast) setPhase("result");
    else setCurrent((c) => c + 1);
  };

  const chip =
    "font-code text-xs font-bold px-2.5 py-1 rounded-full border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10";

  return (
    <div>
      {/* START */}
      {phase === "start" && (
        <div className="text-center py-6">
          <p className="font-code text-6xl font-extrabold text-ember dark:text-orange-300">
            {total}
          </p>
          <p className="text-sm font-semibold text-stone-600 dark:text-stone-300 mt-1">
            <span className="en-text">questions · Lectures 1 &amp; 2 · one try at a time</span>
            <span className="ar-text">سؤالًا · المحاضرتان الأولى والثانية · محاولة واحدة لكل سؤال</span>
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-[52ch] mx-auto mt-4">
            <span className="en-text">
              No sign-in, nothing stored. Answer each question, see your result
              and a full review at the end.
            </span>
            <span className="ar-text">
              بلا تسجيل ولا تخزين. أجب عن كل سؤال وشاهد نتيجتك ومراجعة كاملة في النهاية.
            </span>
          </p>
          <button
            type="button"
            onClick={start}
            className={`mt-6 min-h-[48px] px-7 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift ${FOCUSV}`}
          >
            <span className="en-text">Start the quiz</span>
            <span className="ar-text">ابدأ الاختبار</span>
          </button>
        </div>
      )}

      {/* QUESTION */}
      {phase === "question" && (
        <div>
          {/* Progress */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className={chip}>
              <span className="en-text">
                Q{current + 1} / {total}
              </span>
              <span className="ar-text">
                س{current + 1} / {total}
              </span>
            </span>
            <span className={chip}>
              <span className="en-text">{score} correct so far</span>
              <span className="ar-text">{score} صحيحة حتى الآن</span>
            </span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={current + 1}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label={ar ? "التقدم في الاختبار" : "Quiz progress"}
            className="h-1.5 rounded-full bg-stone-900/10 dark:bg-white/10 overflow-hidden"
          >
            <div
              className="h-full bg-ember dark:bg-orange-300 transition-all duration-300"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>

          {/* Options */}
          <fieldset className="mt-5">
            <legend className="font-bold text-base mb-3">
              <span className="font-code text-ember dark:text-orange-300 me-1">
                Q{current + 1}
              </span>
              {ar ? q.q_ar : q.q_en}
            </legend>
            <div className="space-y-2">
              {(ar ? q.o_ar : q.o_en).map((o, j) => {
                const selected = answers[current] === j;
                return (
                  <label
                    key={j}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 cursor-pointer text-sm transition min-h-[44px] hover:border-ember/60 dark:hover:border-orange-300/60 ${FOCUSV} ${
                      selected
                        ? "border-ember dark:border-orange-300 bg-ember/10 dark:bg-orange-300/10 font-bold"
                        : "border-stone-200 dark:border-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${current}`}
                      checked={selected}
                      onChange={() => pick(j)}
                      className="accent-ember dark:accent-orange-300"
                    />
                    <span>{o}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Next / finish */}
          <div className="flex items-center justify-between gap-3 mt-5">
            <button
              type="button"
              onClick={start}
              className="text-sm font-semibold text-stone-500 dark:text-stone-400 hover:text-ember dark:hover:text-orange-300 transition min-h-[44px] px-2"
            >
              <span className="en-text">← Restart</span>
              <span className="ar-text">← إعادة البدء</span>
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!answered}
              className={`min-h-[48px] px-6 rounded-xl font-bold text-[15px] transition active:scale-[.98] ${
                answered
                  ? "bg-ember hover:bg-orange-700 text-white shadow-lift"
                  : "bg-stone-900/10 dark:bg-white/10 text-stone-500 dark:text-stone-400 cursor-not-allowed"
              } ${FOCUSV}`}
            >
              {isLast ? (
                <>
                  <span className="en-text">See result</span>
                  <span className="ar-text">شاهد النتيجة</span>
                </>
              ) : (
                <>
                  <span className="en-text">Next →</span>
                  <span className="ar-text">التالي →</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* RESULT */}
      {phase === "result" && (
        <div aria-live="polite">
          <div className="text-center py-4">
            <p className="font-code text-6xl font-extrabold text-ember dark:text-orange-300">
              {score}/{total}
            </p>
            <p className="font-code text-sm font-bold text-stone-500 dark:text-stone-400 mt-1">
              {pct}%
            </p>
            <p className="text-base font-bold mt-3 max-w-[52ch] mx-auto">{verdict}</p>
          </div>

          {/* Review */}
          <ol className="mt-4 space-y-2.5 text-sm">
            {QUIZ_APP.map((rq, i) => {
              const ok = answers[i] === rq.a;
              const chosen = answers[i];
              return (
                <li
                  key={i}
                  className={`rounded-xl border p-3 ${
                    ok
                      ? "border-emerald-500/50 bg-emerald-500/5"
                      : "border-red-400/50 bg-red-400/5"
                  }`}
                >
                  <p className="font-bold flex gap-2">
                    <span
                      className={ok ? "text-emerald-600 dark:text-emerald-300" : "text-red-500 dark:text-red-400"}
                      aria-hidden="true"
                    >
                      {ok ? "✓" : "✗"}
                    </span>
                    <span className="sr-only">{ok ? "correct" : "wrong"}</span>
                    <span>{ar ? rq.q_ar : rq.q_en}</span>
                  </p>
                  {!ok && (
                    <p className="mt-1 ps-6 text-stone-600 dark:text-stone-300">
                      <span className="en-text">
                        Your answer: {(chosen !== null ? (ar ? rq.o_ar[chosen] : rq.o_en[chosen]) : "—")}.
                        Correct: {(ar ? rq.o_ar[rq.a] : rq.o_en[rq.a])}.
                      </span>
                      <span className="ar-text">
                        إجابتك: {(chosen !== null ? (ar ? rq.o_ar[chosen] : rq.o_en[chosen]) : "—")}. الصحيحة: {(ar ? rq.o_ar[rq.a] : rq.o_en[rq.a])}.
                      </span>
                    </p>
                  )}
                  {rq.e_en && rq.e_ar && (
                    <p className="mt-1 ps-6 text-stone-600 dark:text-stone-300">
                      <span className="en-text">{rq.e_en}</span>
                      <span className="ar-text">{rq.e_ar}</span>
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="flex justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={start}
              className={`min-h-[48px] px-7 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift ${FOCUSV}`}
            >
              <span className="en-text">Retry the quiz</span>
              <span className="ar-text">أعد المحاولة</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
