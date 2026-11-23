/*
  Lecture 3 question bank from docs/lec-3.md.
  50 bilingual questions split into ten sets of five by the quiz component.
  Source: Chapter 2 — Classical Encryption/Decryption Techniques:
  encryption types, substitution families, the Vigenère cipher, the Playfair
  cipher and transposition ciphers.
*/

import type {
  LectureObjectiveQuestion,
  LectureQuestion,
  LectureShortQuestion,
} from "./lecture-question-types";

import { LECTURE3_QUESTIONS_SET_01 } from "./lecture3-question-bank/set-01";
import { LECTURE3_QUESTIONS_SET_02 } from "./lecture3-question-bank/set-02";
import { LECTURE3_QUESTIONS_SET_03 } from "./lecture3-question-bank/set-03";
import { LECTURE3_QUESTIONS_SET_04 } from "./lecture3-question-bank/set-04";
import { LECTURE3_QUESTIONS_SET_05 } from "./lecture3-question-bank/set-05";
import { LECTURE3_QUESTIONS_SET_06 } from "./lecture3-question-bank/set-06";
import { LECTURE3_QUESTIONS_SET_07 } from "./lecture3-question-bank/set-07";
import { LECTURE3_QUESTIONS_SET_08 } from "./lecture3-question-bank/set-08";
import { LECTURE3_QUESTIONS_SET_09 } from "./lecture3-question-bank/set-09";
import { LECTURE3_QUESTIONS_SET_10 } from "./lecture3-question-bank/set-10";

export type L3ObjectiveQuestion = LectureObjectiveQuestion;
export type L3ShortQuestion = LectureShortQuestion;
export type L3Question = LectureQuestion;

export const LECTURE3_QUESTION_BANK: L3Question[] = [...LECTURE3_QUESTIONS_SET_01, ...LECTURE3_QUESTIONS_SET_02, ...LECTURE3_QUESTIONS_SET_03, ...LECTURE3_QUESTIONS_SET_04, ...LECTURE3_QUESTIONS_SET_05, ...LECTURE3_QUESTIONS_SET_06, ...LECTURE3_QUESTIONS_SET_07, ...LECTURE3_QUESTIONS_SET_08, ...LECTURE3_QUESTIONS_SET_09, ...LECTURE3_QUESTIONS_SET_10];
