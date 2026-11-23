import type { LectureShortQuestion } from "./lecture-question-types";

export const SET_SIZE = 5;

export type QuizLang = "en" | "ar";

export type AnswerState = {
  correct: boolean;
  picked?: number;
  text?: string;
};

export type ShortAnswerTargets = Pick<LectureShortQuestion, "accept_en" | "accept_ar">;

export type ScoreTier = "perfect" | "strong" | "progress" | "review";

/* Arabic diacritics and letter variants folded so short answers stay forgiving. */
export function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .replace(/[−–—]/g, "-")
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, " ")
    .trim();
}

export function shortAnswerCorrect(
  q: ShortAnswerTargets,
  value: string,
  lang: QuizLang,
) {
  const answer = normalizeAnswer(value);
  const groups = lang === "en" ? q.accept_en : q.accept_ar;
  return groups.every((group) =>
    group.some((token) => answer.includes(normalizeAnswer(token))),
  );
}

export function splitQuestionSets<T extends { id: number }>(questions: T[]) {
  return Array.from({ length: Math.ceil(questions.length / SET_SIZE) }, (_, i) =>
    questions.slice(i * SET_SIZE, (i + 1) * SET_SIZE),
  );
}

export function scoreTier(score: number, total: number): ScoreTier {
  if (score === total) return "perfect";
  if (score >= 40) return "strong";
  if (score >= 25) return "progress";
  return "review";
}
