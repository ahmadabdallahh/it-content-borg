import type { CSSProperties } from "react";
import Link from "next/link";
import { type AnswerState, SET_SIZE, type QuizLang } from "@/lib/quiz-utils";

export const QUIZ_FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

type QuizProgressBarProps = {
  value: number;
  total: number;
  timing?: "header" | "result";
};

export function QuizProgressBar({ value, total, timing = "header" }: QuizProgressBarProps) {
  const durationClass = timing === "result" ? "duration-700" : "duration-500";
  return (
    <div
      className="mt-4 h-2 rounded-full bg-stone-200 dark:bg-white/10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`h-full rounded-full bg-ember transition-[width] ${durationClass}`}
        style={{ width: `${(value / total) * 100}%` } as CSSProperties}
      />
    </div>
  );
}

type QuestionSetTabsProps<T extends { id: number }> = {
  sets: T[][];
  results: Record<number, AnswerState>;
  currentIndex: number;
  showResult: boolean;
  onChoose: (index: number) => void;
  lang: QuizLang;
  unlocked?: number;
};

export function QuestionSetTabs<T extends { id: number }>({
  sets,
  results,
  currentIndex,
  showResult,
  onChoose,
  lang,
  unlocked,
}: QuestionSetTabsProps<T>) {
  return (
    <div
      role="group"
      aria-label={lang === "en" ? "Question sets" : "مجموعات الأسئلة"}
      className="mt-3 flex flex-wrap gap-1.5"
    >
      {sets.map((set, i) => {
        const done = set.every((q) => results[q.id]);
        const setScore = set.filter((q) => results[q.id]?.correct).length;
        return (
          <button
            key={i}
            type="button"
            disabled={unlocked !== undefined && i > unlocked}
            onClick={() => onChoose(i)}
            aria-current={!showResult && currentIndex === i ? "step" : undefined}
            className={`min-h-[40px] min-w-[44px] px-2.5 rounded-lg font-code text-xs font-bold border transition disabled:opacity-40 disabled:cursor-not-allowed ${
              !showResult && currentIndex === i
                ? "bg-ember text-white border-ember dark:bg-orange-700 dark:border-orange-700"
                : done
                  ? "border-emerald-500/50 bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300"
                  : "border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-white/5 text-stone-600 dark:text-stone-300 hover:border-ember"
            } ${QUIZ_FOCUS}`}
          >
            {i + 1}
            {done && <span className="ms-1 opacity-80">{setScore}/{set.length}</span>}
          </button>
        );
      })}
    </div>
  );
}

type QuizResultCardProps<T extends { id: number }> = {
  title: string;
  score: number;
  total: number;
  verdict: string;
  sets: T[][];
  results: Record<number, AnswerState>;
  wrongQuestions: T[];
  lang: QuizLang;
  backHref: string;
  onRetryAll: () => void;
  onReviewWrong: () => void;
  onChooseSet: (index: number) => void;
};

export function QuizResultCard<T extends { id: number }>({
  title,
  score,
  total,
  verdict,
  sets,
  results,
  wrongQuestions,
  lang,
  backHref,
  onRetryAll,
  onReviewWrong,
  onChooseSet,
}: QuizResultCardProps<T>) {
  return (
    <div key="result" className="mt-5 lec2-score-pop">
      <div className="rounded-2xl border border-ember/40 dark:border-orange-300/40 bg-ember/5 dark:bg-orange-300/5 p-6 text-center">
        <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
          {title}
        </p>
        <p className="text-5xl font-extrabold mt-2">
          <span className="text-ember dark:text-orange-300">{score}</span>
          <span className="text-2xl text-stone-400 dark:text-stone-500">
            /{total}
          </span>
        </p>
        <div className="mx-auto mt-3 h-2 w-full max-w-sm rounded-full bg-stone-200 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-ember transition-[width] duration-700"
            style={{ width: `${(score / total) * 100}%` } as CSSProperties}
          />
        </div>
        <p className="mt-3 text-sm font-semibold text-stone-700 dark:text-stone-200">
          {verdict}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={onRetryAll}
            className={`min-h-[44px] px-5 rounded-xl bg-ember hover:bg-orange-700 active:scale-[.98] text-white font-bold text-sm transition ${QUIZ_FOCUS}`}
          >
            <span className="en-text">Retry all 50</span>
            <span className="ar-text">إعادة الخمسين</span>
          </button>
          <button
            type="button"
            disabled={wrongQuestions.length === 0}
            onClick={onReviewWrong}
            className={`min-h-[44px] px-5 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed ${QUIZ_FOCUS}`}
          >
            <span className="en-text">Review wrong ({wrongQuestions.length})</span>
            <span className="ar-text">راجع الأخطاء ({wrongQuestions.length})</span>
          </button>
          <Link
            href={backHref}
            className={`min-h-[44px] px-5 inline-flex items-center rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] font-bold text-sm transition hover:border-ember ${QUIZ_FOCUS}`}
          >
            <span className="en-text">Back to lecture</span>
            <span className="ar-text">العودة إلى المحاضرة</span>
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {sets.map((set, i) => {
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

      {wrongQuestions.length > 0 && (
        <div className="mt-4 rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] p-4">
          <h5 className="font-extrabold text-sm">
            <span className="en-text">Questions to revisit</span>
            <span className="ar-text">أسئلة تحتاج مراجعة</span>
          </h5>
          <ol className="mt-2 flex flex-wrap gap-1.5">
            {wrongQuestions.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => onChooseSet(Math.floor((q.id - 1) / SET_SIZE))}
                  className={`font-code text-xs font-bold px-2 py-1 rounded-lg bg-red-50 dark:bg-red-400/10 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-400/30 hover:bg-red-100 dark:hover:bg-red-400/20 ${QUIZ_FOCUS}`}
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
}
