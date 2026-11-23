import type { Metadata } from "next";
import { ResourceCard } from "@/components/resource-card";
import LectureQuizPage from "@/components/cyber/lecture-quiz-page";
import Lecture3QuestionBank from "@/components/cyber/lecture3-question-bank";

export const metadata: Metadata = {
  title: "Lecture 3 Quiz: Classical Encryption/Decryption Techniques",
  description:
    "Fifty bilingual Lecture 3 questions split into ten checked sets: encryption types, characterization, substitution families, the Vigenère cipher, Playfair and transposition. Instant feedback and a final result screen.",
};

export default function CyberLecture3QuizPage() {
  return (
    <LectureQuizPage
      backFallback="/cyber/lecture-3"
      title={
        <>
          CyberSec_Lec3_Quiz
          <span className="text-ember dark:text-orange-300">.html</span>
        </>
      }
      eyebrow="LECTURE 3 · CLASSICAL ENCRYPTION / DECRYPTION · QUIZ"
      heroBody={
        <>
          <span className="en-text">
            Work through encryption types, characterization, the substitution
            families, Vigenère arithmetic, Playfair rules and transposition.
            Check each answer for a right/wrong verdict and a short reason, then
            see the full result.
          </span>
          <span className="ar-text">
            مرّ على أنواع التشفير والتوصيف وعائلات الإحلال وحسابات فينير وقواعد
            بليفير والتبديل. تحقق من كل إجابة لتعرف إن كانت صحيحة وسببها، ثم
            شاهد النتيجة الكاملة.
          </span>
        </>
      }
      quiz={<Lecture3QuestionBank />}
      resources={
        <>
          <ResourceCard
            href="/cyber/lecture-3"
            badge="CS"
            en="Back to Lecture 3"
            ar="العودة إلى المحاضرة الثالثة"
            dEn="Reread the Vigenère worked example, the Playfair matrix and the transposition grid."
            dAr="أعد قراءة مثال فينير المحلول ومصفوفة بليفير وشبكة التبديل."
            metaEn="chapter 2 · notes"
            metaAr="الفصل ٢ · الملاحظات"
          />
          <ResourceCard
            href="/cyber/lecture-2/quiz"
            badge="50"
            en="Lecture 2 quiz · 50 questions"
            ar="اختبار المحاضرة ٢ · ٥٠ سؤالًا"
            dEn="The earlier substitution and Caesar question bank."
            dAr="بنك أسئلة الإحلال وقيصر السابق."
            metaEn="10 sets · result"
            metaAr="١٠ مجموعات · نتيجة"
          />
        </>
      }
      footer={
        <>
          Lecture 3 Quiz · Classical Encryption / Decryption Techniques · Borg
          El Arab Technological University
        </>
      }
    />
  );
}
