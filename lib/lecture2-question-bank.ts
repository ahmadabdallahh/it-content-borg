/*
  Lecture 2 question bank from docs/lec-2.md.
  50 bilingual questions split into ten sets of five by the quiz component.
  Source stops after the Caesar exercise, so the bank stays inside that range.
*/

import type {
  LectureObjectiveQuestion,
  LectureQuestion,
  LectureShortQuestion,
} from "./lecture-question-types";
import { LECTURE2_QUESTIONS_SET_01 } from "./lecture2-question-bank/set-01";
import { LECTURE2_QUESTIONS_SET_02 } from "./lecture2-question-bank/set-02";
import { LECTURE2_QUESTIONS_SET_03 } from "./lecture2-question-bank/set-03";
import { LECTURE2_QUESTIONS_SET_04 } from "./lecture2-question-bank/set-04";
import { LECTURE2_QUESTIONS_SET_05 } from "./lecture2-question-bank/set-05";
import { LECTURE2_QUESTIONS_SET_06 } from "./lecture2-question-bank/set-06";
import { LECTURE2_QUESTIONS_SET_07 } from "./lecture2-question-bank/set-07";
import { LECTURE2_QUESTIONS_SET_08 } from "./lecture2-question-bank/set-08";
import { LECTURE2_QUESTIONS_SET_09 } from "./lecture2-question-bank/set-09";
import { LECTURE2_QUESTIONS_SET_10 } from "./lecture2-question-bank/set-10";

export type L2ObjectiveQuestion = LectureObjectiveQuestion;
export type L2ShortQuestion = LectureShortQuestion;
export type L2Question = LectureQuestion;

export const LECTURE2_QUESTION_BANK: L2Question[] = [...LECTURE2_QUESTIONS_SET_01, ...LECTURE2_QUESTIONS_SET_02, ...LECTURE2_QUESTIONS_SET_03, ...LECTURE2_QUESTIONS_SET_04, ...LECTURE2_QUESTIONS_SET_05, ...LECTURE2_QUESTIONS_SET_06, ...LECTURE2_QUESTIONS_SET_07, ...LECTURE2_QUESTIONS_SET_08, ...LECTURE2_QUESTIONS_SET_09, ...LECTURE2_QUESTIONS_SET_10];
