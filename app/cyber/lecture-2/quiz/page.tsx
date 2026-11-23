import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import Lecture2QuestionBank from "@/components/cyber/lecture2-question-bank";

export const metadata: Metadata = {
  title: "Lecture 2 Quiz: Classical Encryption Techniques",
  description:
    "Fifty bilingual Lecture 2 questions split into ten checked sets: definitions, symmetric cipher model, cipher families, operations and Caesar shifts. Instant feedback and a final result screen.",
};

export default function CyberLecture2QuizPage() {
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
        backFallback="/cyber/lecture-2"
        title={
          <>
            CyberSec_Lec2_Quiz
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              LECTURE 2 · CLASSICAL ENCRYPTION · QUIZ
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Fifty questions, ten short sets.</span>
              <span className="ar-text">خمسون سؤالًا في عشر مجموعات قصيرة.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[62ch] mt-4">
              <span className="en-text">
                Work through definitions, the symmetric cipher model,
                substitution families, transformation operations and Caesar
                shifts. Answer all five questions in a set, then check the set
                for right/wrong verdicts and short reasons.
              </span>
              <span className="ar-text">
                مرّ على التعريفات والنموذج المتماثل وعائلات الإحلال وعمليات
                التحويل وإزاحات قيصر. أجب عن الأسئلة الخمسة في كل مجموعة، ثم
                تحقق من المجموعة لتعرف الصحيح من الخطأ وسبب كل إجابة.
              </span>
            </p>
            <p className="font-code text-xs font-bold text-ember dark:text-orange-300 mt-3">
              10 SETS × 5 QUESTIONS · EN/AR · INSTANT FEEDBACK
            </p>
          </Reveal>
        </div>

        {/* Quiz */}
        <div id="quiz" className="scroll-mt-24">
          <Lecture2QuestionBank />
        </div>

        {/* Resources */}
        <Resources>
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
        </Resources>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Lecture 2 Quiz · Classical Encryption Techniques · Borg El Arab
        Technological University
      </footer>
    </>
  );
}
