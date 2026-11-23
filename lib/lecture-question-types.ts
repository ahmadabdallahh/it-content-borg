export type LectureLocalizedText = {
  en: string;
  ar: string;
};

export type LectureObjectiveQuestion = {
  id: number;
  kind: "mcq" | "tf";
  section_en: string;
  section_ar: string;
  q_en: string;
  q_ar: string;
  options: LectureLocalizedText[];
  answer: number;
  why_en: string;
  why_ar: string;
};

export type LectureShortQuestion = {
  id: number;
  kind: "short";
  section_en: string;
  section_ar: string;
  q_en: string;
  q_ar: string;
  answer_en: string;
  answer_ar: string;
  accept_en: string[][];
  accept_ar: string[][];
  why_en: string;
  why_ar: string;
};

export type LectureQuestion = LectureObjectiveQuestion | LectureShortQuestion;
