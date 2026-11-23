import type { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources from "@/components/resource-card";

type LectureQuizPageProps = {
  backFallback: string;
  title: ReactNode;
  eyebrow: string;
  heroBody: ReactNode;
  quiz: ReactNode;
  resources: ReactNode;
  footer: ReactNode;
};

export default function LectureQuizPage({
  backFallback,
  title,
  eyebrow,
  heroBody,
  quiz,
  resources,
  footer,
}: LectureQuizPageProps) {
  return (
    <>
      <a
        href="#quiz"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to quiz</span>
        <span className="ar-text">تخطَّ إلى الاختبار</span>
      </a>

      <SiteHeader badge="CS" backFallback={backFallback} title={title} />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              {eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Fifty questions, ten short sets.</span>
              <span className="ar-text">خمسون سؤالًا في عشر مجموعات قصيرة.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[62ch] mt-4">
              {heroBody}
            </p>
            <p className="font-code text-xs font-bold text-ember dark:text-orange-300 mt-3">
              10 SETS × 5 QUESTIONS · EN/AR · INSTANT FEEDBACK
            </p>
          </Reveal>
        </div>

        {/* Quiz */}
        <div id="quiz" className="scroll-mt-24">
          {quiz}
        </div>

        {/* Resources */}
        <Resources>{resources}</Resources>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        {footer}
      </footer>
    </>
  );
}
