import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import Lecture3QuestionBank from "@/components/cyber/lecture3-question-bank";

export const metadata: Metadata = {
  title: "Lecture 3 Quiz: Classical Encryption/Decryption Techniques",
  description:
    "Fifty bilingual Lecture 3 questions split into ten checked sets: encryption types, characterization, substitution families, the Vigenère cipher, Playfair and transposition. Instant feedback and a final result screen.",
};

export default function CyberLecture3QuizPage() {
  return (
    <>
      <a
        href="#quiz"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to quiz</span>
        <span className="ar-text">تخطَّ إلى الاختبار</span>
      </a>

      <SiteHeader
        badge="CS"
        backFallback="/cyber/lecture-3"
        title={
          <>
            CyberSec_Lec3_Quiz
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              LECTURE 3 · CLASSICAL ENCRYPTION / DECRYPTION · QUIZ
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Fifty questions, ten short sets.</span>
              <span className="ar-text">خمسون سؤالًا في عشر مجموعات قصيرة.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[62ch] mt-4">
              <span className="en-text">
                Work through encryption types, characterization, the substitution
                families, Vigenère arithmetic, Playfair rules and transposition.
                Check each answer for a right/wrong verdict and a short reason,
                then see the full result.
              </span>
              <span className="ar-text">
                مرّ على أنواع التشفير والتوصيف وعائلات الإحلال وحسابات فينير
                وقواعد بليفير والتبديل. تحقق من كل إجابة لتعرف إن كانت صحيحة
                وسببها، ثم شاهد النتيجة الكاملة.
              </span>
            </p>
            <p className="font-code text-xs font-bold text-ember dark:text-orange-300 mt-3">
              10 SETS × 5 QUESTIONS · EN/AR · INSTANT FEEDBACK
            </p>
          </Reveal>
        </div>

        {/* Quiz */}
        <div id="quiz" className="scroll-mt-24">
          <Lecture3QuestionBank />
        </div>

        {/* Resources */}
        <Resources>
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
        </Resources>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Lecture 3 Quiz · Classical Encryption / Decryption Techniques · Borg El
        Arab Technological University
      </footer>
    </>
  );
}
