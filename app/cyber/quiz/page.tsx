import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import QuizApp from "@/components/cyber/quiz-app";

export const metadata: Metadata = {
  title: "Quiz: Classical Encryption — Lectures 1 & 2",
  description:
    "Full self-test on the Cyber Security course: security fundamentals plus classical encryption. 12 questions, one at a time, result and review at the end. Bilingual EN/AR.",
};

export default function CyberQuizPage() {
  return (
    <>
      <Link
        href="#quiz"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to quiz</span>
        <span className="ar-text">تخطَّ إلى الاختبار</span>
      </Link>

      <SiteHeader
        badge="CS"
        backFallback="/cyber"
        title={
          <>
            CyberSec_Quiz
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              BORG EL ARAB TECHNOLOGICAL UNIVERSITY · SELF-TEST
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Test yourself.</span>
              <span className="ar-text">اختبر نفسك.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                The full quiz app for Lectures 1 and 2 — security fundamentals
                and every classical cipher. Answer one question at a time, get
                your score and a full review at the end.
              </span>
              <span className="ar-text">
                التطبيق الكامل لاختبار المحاضرتين الأولى والثانية — أساسيات الأمن
                وكل الشيفرة الكلاسيكية. سؤال واحد في كل مرة، والنتيجة والمراجعة
                الكاملة في النهاية.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Quiz card */}
        <div id="quiz" className="scroll-mt-24">
          <Reveal>
            <section
              aria-labelledby="quizTitle"
              className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 id="quizTitle" className="text-xl font-extrabold">
                  <span className="en-text">Cyber security quiz</span>
                  <span className="ar-text">اختبار الأمن السيبراني</span>
                </h3>
                <span className="font-code text-[11px] font-semibold text-ember dark:text-orange-300">
                  <span className="en-text">nothing stored · nothing sent</span>
                  <span className="ar-text">لا تخزين · لا إرسال</span>
                </span>
              </div>
              <QuizApp />
            </section>
          </Reveal>
        </div>

        {/* Files & resources */}
        <Resources>
          <ResourceCard
            href="/cyber/lecture-1"
            badge="CS"
            en="Study first: Introduction to Cyber Security"
            ar="ادرس أولًا: مقدمة في الأمن السيبراني"
            dEn="Lecture 1 — the CIA triad, attacks and the security model."
            dAr="المحاضرة الأولى — ثالوث CIA والهجمات ونموذج الأمن."
            metaEn="lecture 01"
            metaAr="المحاضرة ٠١"
          />
          <ResourceCard
            href="/cyber/lecture-2"
            badge="CS"
            en="Study first: Classical Encryption Techniques"
            ar="ادرس أولًا: تقنيات التشفير الكلاسيكية"
            dEn="Lecture 2 — Caesar to Playfair, Hill and transposition, with a live cipher lab."
            dAr="المحاضرة الثانية — من قيصر إلى بليفير وهيل والتبديل، مع مختبر تشفير مباشر."
            metaEn="lecture 02 · cipher lab"
            metaAr="المحاضرة ٠٢ · مختبر الشيفرة"
          />
        </Resources>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Quiz · Cyber Security · Borg El Arab Technological University
      </footer>
    </>
  );
}
