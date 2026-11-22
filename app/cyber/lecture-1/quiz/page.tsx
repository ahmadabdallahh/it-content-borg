import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import QuizSection from "@/components/cyber/quiz";

export const metadata: Metadata = {
  title: "Lecture 1 Quiz: Introduction to Cyber Security",
  description:
    "Comprehensive 16-question quiz on Lecture 1: security fundamentals, CIA triad, attacks, the network security model, categories, importance and threat types. Bilingual EN/AR.",
};

export default function CyberLecture1QuizPage() {
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
        backFallback="/cyber/lecture-1"
        title={
          <>
            CyberSec_Lec1_Quiz
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              LECTURE 1 · CHAPTER ONE · QUIZ
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Test yourself on the introduction.</span>
              <span className="ar-text">اختبر نفسك في المقدمة.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                Sixteen questions covering all five chapter topics — CIA,
                attacks, the network security model, categories and threats.
                Score at the end, retry any time.
              </span>
              <span className="ar-text">
                ستة عشر سؤالًا تغطي موضوعات الفصل الخمسة — CIA والهجمات ونموذج
                أمن الشبكة والتصنيفات والتهديدات. النتيجة في النهاية وإعادة في
                أي وقت.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Quiz */}
        <div id="quiz" className="scroll-mt-24">
          <QuizSection />
        </div>

        {/* Resources */}
        <Resources>
          <ResourceCard
            href="/cyber/lecture-1"
            badge="CS"
            en="Back to Lecture 1"
            ar="العودة إلى المحاضرة الأولى"
            dEn="Reread the chapter cards, the CIA tabs and the network security model."
            dAr="أعد قراءة بطاقات الفصل وتبويبات CIA ونموذج أمن الشبكة."
            metaEn="chapter 1 · notes"
            metaAr="الفصل ١ · الملاحظات"
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
        Lecture 1 Quiz · Introduction to Cyber Security · Borg El Arab
        Technological University
      </footer>
    </>
  );
}
