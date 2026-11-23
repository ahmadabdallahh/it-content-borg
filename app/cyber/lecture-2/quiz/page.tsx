import type { Metadata } from "next";
import { ResourceCard } from "@/components/resource-card";
import LectureQuizPage from "@/components/cyber/lecture-quiz-page";
import Lecture2QuestionBank from "@/components/cyber/lecture2-question-bank";

export const metadata: Metadata = {
  title: "Lecture 2 Quiz: Classical Encryption Techniques",
  description:
    "Fifty bilingual Lecture 2 questions split into ten checked sets: definitions, symmetric cipher model, cipher families, operations and Caesar shifts. Instant feedback and a final result screen.",
};

export default function CyberLecture2QuizPage() {
  return (
    <LectureQuizPage
      backFallback="/cyber/lecture-2"
      title={
        <>
          CyberSec_Lec2_Quiz
          <span className="text-ember dark:text-orange-300">.html</span>
        </>
      }
      eyebrow="LECTURE 2 · CLASSICAL ENCRYPTION · QUIZ"
      heroBody={
        <>
          <span className="en-text">
            Work through definitions, the symmetric cipher model, substitution
            families, transformation operations and Caesar shifts. Answer all
            five questions in a set, then check the set for right/wrong verdicts
            and short reasons.
          </span>
          <span className="ar-text">
            مرّ على التعريفات والنموذج المتماثل وعائلات الإحلال وعمليات التحويل
            وإزاحات قيصر. أجب عن الأسئلة الخمسة في كل مجموعة، ثم تحقق من
            المجموعة لتعرف الصحيح من الخطأ وسبب كل إجابة.
          </span>
        </>
      }
      quiz={<Lecture2QuestionBank />}
      resources={
        <>
          <ResourceCard
            href="/cyber/lecture-2"
            badge="CS"
            en="Back to Lecture 2"
            ar="العودة إلى المحاضرة الثانية"
            dEn="Reread the animated cipher models, Caesar wheel and worked examples."
            dAr="أعد قراءة النماذج المتحركة للشيفرة وعجلة قيصر والأمثلة المحلولة."
            metaEn="chapter 2 · notes"
            metaAr="الفصل ٢ · الملاحظات"
          />
          <ResourceCard
            href="/cyber/quiz"
            badge="?"
            en="Full quiz app · Lectures 1 & 2"
            ar="تطبيق الاختبار الكامل · المحاضرتان ١ و٢"
            dEn="Mixed 12-question quiz across security and classical ciphers, with a full review."
            dAr="اختبار مختلط من ١٢ سؤالًا بين الأمن والشيفرة الكلاسيكية مع مراجعة كاملة."
            metaEn="12 questions · review"
            metaAr="١٢ سؤالًا · مراجعة"
          />
        </>
      }
      footer={
        <>
          Lecture 2 Quiz · Classical Encryption Techniques · Borg El Arab
          Technological University
        </>
      }
    />
  );
}
