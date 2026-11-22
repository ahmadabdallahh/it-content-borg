"use client";

import { useState } from "react";
import { QUIZ } from "@/lib/cyber-data";
import { useLang } from "@/components/chrome";
import Reveal from "@/components/page-chrome";

/*
  Self-check quiz section: radio options, correct/wrong marking,
  score pill in the header, check/retry buttons and status message.
  Language switch resets selections (same as the original renderQuiz()).
*/
export default function QuizSection() {
  const lang = useLang();
  const [answers, setAnswers] = useState<(number | null)[]>(
    QUIZ.map(() => null),
  );
  const [checked, setChecked] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const score = QUIZ.reduce((acc, q, i) => acc + (answers[i] === q.a ? 1 : 0), 0);

  const retry = () => {
    setAnswers(QUIZ.map(() => null));
    setAttempts((a) => a + 1);
    setChecked(false);
  };

  const msg =
    lang === "en"
      ? score === QUIZ.length
        ? "Perfect. All five chapter topics are yours."
        : score >= Math.ceil(QUIZ.length * 0.75)
          ? "Strong pass. Revisit the rows you missed above."
          : score >= Math.ceil(QUIZ.length * 0.5)
            ? "Good progress. Reread the CIA tabs and attack types, then retry."
            : "Start over: work through the chapter cards top to bottom, then retry."
      : score === QUIZ.length
        ? "ممتاز. موضوعات الفصل الخمسة أصبحت لك."
        : score >= Math.ceil(QUIZ.length * 0.75)
          ? "نجاح قوي. راجع الصفوف التي أخطأت فيها أعلاه."
          : score >= Math.ceil(QUIZ.length * 0.5)
            ? "تقدم جيد. أعد قراءة تبويبات CIA وأنواع الهجمات ثم حاول مجددًا."
            : "ابدأ من جديد: اقرأ بطاقات الفصل من أعلى لأسفل ثم حاول مجددًا.";

  return (
    <Reveal className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
      <section aria-labelledby="quizTitle">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 id="quizTitle" className="text-xl font-extrabold">
          <span className="en-text">Comprehensive quiz</span>
          <span className="ar-text">اختبار شامل</span>
        </h4>
        <span className="font-code text-xs font-bold px-2.5 py-1 rounded-full bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10">
          {checked ? score : 0} / {QUIZ.length}
        </span>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
        <span className="en-text">
          16 questions across all five chapter topics. Answer everything, then
          check your score.
        </span>
        <span className="ar-text">
          ١٦ سؤالًا تغطي موضوعات الفصل الخمسة. أجب عن الكل ثم تحقق من نتيجتك.
        </span>
      </p>
      <div className="mt-4 space-y-5" key={`${lang}-${attempts}`}>
        {QUIZ.map((q, i) => (
          <fieldset key={i}>
            <legend className="font-bold text-sm mb-2">
              <span className="font-code text-ember dark:text-orange-300 me-1">
                Q{i + 1}
              </span>
              {lang === "en" ? q.q_en : q.q_ar}
            </legend>
            {(lang === "en" ? q.o_en : q.o_ar).map((o, j) => {
              const stateCls =
                checked && answers[i] !== null
                  ? j === q.a
                    ? "correct"
                    : answers[i] === j
                      ? "wrong"
                      : ""
                  : "";
              return (
                <label
                  key={j}
                  data-q={i}
                  data-o={j}
                  className={`opt ${stateCls} flex items-center gap-2.5 rounded-xl border border-stone-200 dark:border-white/10 px-3 py-2.5 mt-2 cursor-pointer text-sm transition min-h-[44px]`}
                >
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={j}
                    className="accent-[#c2410c] w-4 h-4 shrink-0"
                    checked={answers[i] === j}
                    onChange={() =>
                      setAnswers((a) => a.map((x, k) => (k === i ? j : x)))
                    }
                  />
                  {o}
                </label>
              );
            })}
          </fieldset>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="min-h-[44px] px-5 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-sm transition"
        >
          <span className="en-text">Check answers</span>
          <span className="ar-text">تحقق من الإجابات</span>
        </button>
        <button
          type="button"
          onClick={retry}
          className="min-h-[44px] px-5 rounded-xl font-bold text-sm transition border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20"
        >
          <span className="en-text">Retry</span>
          <span className="ar-text">إعادة</span>
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-3 text-sm font-bold">
        {checked ? msg : ""}
      </p>
      </section>
    </Reveal>
  );
}
