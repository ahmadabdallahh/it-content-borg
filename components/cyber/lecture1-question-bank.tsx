"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/components/chrome";
import {
  LECTURE1_QUESTION_BANK,
  type BankQuestion,
  type ObjectiveQuestion,
} from "@/lib/lecture1-question-bank";

type Mode = "mcq" | "tf" | "short";

// Published UI keeps 47 / 22 / 10 / 15 and offsets 26 / 36 even though the bank holds 44 items.
const MODES: { key: Mode; en: string; ar: string; count: number }[] = [
  { key: "mcq", en: "Multiple choice", ar: "اختيار من متعدد", count: 22 },
  { key: "tf", en: "True / False", ar: "صح / خطأ", count: 10 },
  { key: "short", en: "Short answer", ar: "إجابة قصيرة", count: 15 },
];

const isObjective = (q: BankQuestion): q is ObjectiveQuestion =>
  q.kind !== "short";

const numberFor = (q: BankQuestion, index: number) => {
  if (q.kind === "mcq") return index + 1;
  if (q.kind === "tf") return 26 + index;
  return 36 + index;
};

/*
  Full Lecture 1 question bank from docs/Question.md. Objective modes are
  auto-graded; short answers open from a details panel so learners can try
  first and reveal the model answer when ready.
*/
export default function Lecture1QuestionBank() {
  const lang = useLang();
  const [mode, setMode] = useState<Mode>("mcq");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [revealAll, setRevealAll] = useState(false);

  const questions = useMemo(
    () => LECTURE1_QUESTION_BANK.filter((q) => q.kind === mode),
    [mode],
  );

  const objectiveQuestions = questions.filter(isObjective);
  const answered = objectiveQuestions.filter(
    (q) => answers[numberFor(q, questions.indexOf(q))] !== undefined,
  ).length;
  const allAnswered = objectiveQuestions.length === 0 || answered === objectiveQuestions.length;
  const score = objectiveQuestions.reduce(
    (sum, q) =>
      sum + (answers[numberFor(q, questions.indexOf(q))] === q.answer ? 1 : 0),
    0,
  );

  const selectMode = (next: Mode) => {
    setMode(next);
    setAnswers({});
    setChecked(false);
    setRevealAll(false);
  };

  return (
    <section
      aria-labelledby="bankTitle"
      className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
            QUESTION BANK · docs/Question.md
          </p>
          <h4 id="bankTitle" className="text-xl font-extrabold mt-1">
            <span className="en-text">Every Lecture 1 question, in one place</span>
            <span className="ar-text">كل أسئلة المحاضرة الأولى في مكان واحد</span>
          </h4>
        </div>
        <p className="font-code text-xs font-bold px-2.5 py-1 rounded-full bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10">
          47 {lang === "en" ? "questions" : "سؤالًا"}
        </p>
      </div>

      <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
        <span className="en-text">
          22 multiple choice, 10 true/false and 15 short-answer prompts taken
          from the Lecture 1 question sheet.
        </span>
        <span className="ar-text">
          ٢٢ سؤال اختيار من متعدد، و١٠ أسئلة صح/خطأ، و١٥ سؤال إجابة قصيرة من
          ورقة أسئلة المحاضرة الأولى.
        </span>
      </p>

      <div
        className="mt-4 flex flex-wrap gap-1.5 rounded-xl bg-stone-900/[.04] dark:bg-white/5 p-1"
        role="tablist"
        aria-label={lang === "en" ? "Question types" : "أنواع الأسئلة"}
      >
        {MODES.map((m) => (
          <button
            key={m.key}
            type="button"
            role="tab"
            aria-selected={mode === m.key}
            onClick={() => selectMode(m.key)}
            className={`min-h-[44px] px-3 rounded-lg text-sm font-bold transition ${
              mode === m.key
                ? "bg-ember text-white shadow-soft dark:bg-orange-700"
                : "text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-white/10"
            }`}
          >
            <span className="en-text">{m.en}</span>
            <span className="ar-text">{m.ar}</span>
            <span className="font-code text-xs opacity-80 ms-1">({m.count})</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-5" key={mode}>
        {mode === "short" ? (
          <>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setRevealAll((v) => !v)}
                className="min-h-[44px] px-4 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 font-bold text-sm transition"
              >
                {revealAll ? (
                  <>
                    <span className="en-text">Hide all answers</span>
                    <span className="ar-text">إخفاء كل الإجابات</span>
                  </>
                ) : (
                  <>
                    <span className="en-text">Reveal all answers</span>
                    <span className="ar-text">إظهار كل الإجابات</span>
                  </>
                )}
              </button>
            </div>
            <ol className="mt-3 space-y-2.5">
              {questions.map((q, i) => (
                <li
                  key={numberFor(q, i)}
                  className="rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.02] dark:bg-black/20"
                >
                  <details open={revealAll}>
                    <summary className="cursor-pointer list-none min-h-[44px] px-3 py-2.5 flex items-center gap-3 font-bold text-sm">
                      <span className="font-code text-ember dark:text-orange-300 shrink-0">
                        Q{numberFor(q, i)}
                      </span>
                      <span>{lang === "en" ? q.q_en : q.q_ar}</span>
                      <span aria-hidden="true" className="ms-auto text-ember dark:text-orange-300">
                        +
                      </span>
                    </summary>
                    <p className="px-3 pb-3 ps-10 text-sm leading-relaxed text-stone-700 dark:text-stone-200 border-t border-stone-200 dark:border-white/10 pt-2.5">
                      {q.kind === "short" &&
                        (lang === "en" ? q.answer_en : q.answer_ar)}
                    </p>
                  </details>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-code text-xs font-bold text-stone-500 dark:text-stone-400">
                {answered} / {objectiveQuestions.length}{" "}
                {lang === "en" ? "answered" : "تمت الإجابة"}
              </p>
              {checked && (
                <p className="font-code text-xs font-bold text-ember dark:text-orange-300">
                  {score} / {objectiveQuestions.length}{" "}
                  {lang === "en" ? "correct" : "صحيح"}
                </p>
              )}
            </div>
            <div className="mt-3 space-y-5">
              {questions.map((q, i) => {
                if (!isObjective(q)) return null;
                const qNo = numberFor(q, i);
                const picked = answers[qNo];
                return (
                  <fieldset key={qNo}>
                    <legend className="font-bold text-sm mb-2">
                      <span className="font-code text-ember dark:text-orange-300 me-1">
                        Q{qNo}
                      </span>
                      {lang === "en" ? q.q_en : q.q_ar}
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((option, j) => {
                        const stateCls =
                          checked && picked !== undefined
                            ? j === q.answer
                              ? "correct"
                              : picked === j
                                ? "wrong"
                                : ""
                            : "";
                        return (
                          <label
                            key={j}
                            className={`opt flex items-center gap-2.5 rounded-xl border border-stone-200 dark:border-white/10 px-3 py-2.5 cursor-pointer text-sm transition min-h-[44px] ${stateCls}`}
                          >
                            <input
                              type="radio"
                              name={`bank-q${qNo}`}
                              value={j}
                              className="accent-[#c2410c] w-4 h-4 shrink-0"
                              checked={picked === j}
                              onChange={() =>
                                setAnswers((a) => ({ ...a, [qNo]: j }))
                              }
                            />
                            <span>{lang === "en" ? option.en : option.ar}</span>
                          </label>
                        );
                      })}
                    </div>
                    {checked && picked !== q.answer && (
                      <p className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-2">
                        {lang === "en" ? "Correct answer: " : "الإجابة الصحيحة: "}
                        <span className="text-ember dark:text-orange-300">
                          {lang === "en"
                            ? q.options[q.answer].en
                            : q.options[q.answer].ar}
                        </span>
                      </p>
                    )}
                  </fieldset>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <button
                type="button"
                disabled={!allAnswered}
                onClick={() => setChecked(true)}
                className="min-h-[44px] px-5 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span className="en-text">Check answers</span>
                <span className="ar-text">تحقق من الإجابات</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setChecked(false);
                }}
                className="min-h-[44px] px-5 rounded-xl font-bold text-sm transition border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20"
              >
                <span className="en-text">Retry</span>
                <span className="ar-text">إعادة</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
