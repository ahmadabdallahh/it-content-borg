import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Course: Programming in Python — Lectures",
  description:
    "Python programming course lecture list. Lecture 1: Programming Essentials with the interactive line-by-line interpreter lab.",
};

/*
  Course index: numbered lecture cards, same anatomy as the cyber course.
*/
const LECTURES = [
  {
    n: "01",
    href: "/python/lecture-1",
    stateEn: "open now",
    stateAr: "متاح الآن",
    en: "Programming Essentials in Python",
    ar: "أساسيات البرمجة بلغة بايثون",
    dEn:
      "Compilers vs interpreters, storage units, then 10 guided mini-programs running line by line with code, terminal and memory in sync.",
    dAr:
      "المترجمات مقابل المفسرات ووحدات التخزين، ثم عشرة برامج مصغرة موجهة تنفذ سطرًا بسطر مع تزامن الكود والطرفية والذاكرة.",
    metaEn: "10 programs · run · step · R N B keys",
    metaAr: "١٠ برامج · تشغيل · تتبع · مفاتيح R N B",
  },
  {
    n: "02",
    href: "/python/lecture-2",
    stateEn: "open now",
    stateAr: "متاح الآن",
    en: "The Python Language in Action",
    ar: "لغة بايثون في التطبيق",
    dEn:
      "print, variables and multiple assignment, the four data types, type sensitivity, conversion, and operator precedence — six guided programs.",
    dAr:
      "الطباعة والمتغيرات والإسناد المتعدد والأنواع الأربعة وحساسية الأنواع والتحويل وأسبقية العمليات — ستة برامج موجهة.",
    metaEn: "6 programs · type() · errors · precedence",
    metaAr: "٦ برامج · type() · أخطاء · الأسبقية",
  },
];

const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

export default function PythonCoursePage() {
  return (
    <>
      <Link
        href="#lectures"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to lectures</span>
        <span className="ar-text">تخطَّ إلى المحاضرات</span>
      </Link>

      <SiteHeader
        badge="Py"
        backFallback="/"
        title={
          <>
            Python
            <span className="text-ember dark:text-orange-300">.course</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-8">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              COURSE · PROGRAMMING IN PYTHON
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Python lectures.</span>
              <span className="ar-text">محاضرات بايثون.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                Each lecture pairs a short reading with a live interpreter lab.
                Pick one.
              </span>
              <span className="ar-text">
                كل محاضرة تجمع قراءة قصيرة مع مختبر مفسر حي. اختر واحدة.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Lecture cards */}
        <div
          id="lectures"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-mt-24"
          role="navigation"
          aria-label="Lectures"
        >
          {LECTURES.map((l, i) => (
            <Reveal key={l.href} style={{ transitionDelay: `${i * 0.08}s` }}>
              <Link
                href={l.href}
                className={`group flex gap-4 items-start rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] p-5 shadow-soft hover:shadow-lift hover:border-ember/60 dark:hover:border-orange-300/60 hover:-translate-y-0.5 transition-all min-h-[44px] ${FOCUS}`}
              >
                <span className="font-code text-3xl font-extrabold text-ember dark:text-orange-300 leading-none pt-0.5">
                  {l.n}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 mb-1">
                    <span className="font-code text-[11px] font-semibold rounded-full border border-stone-200 dark:border-white/10 px-2 py-0.5 text-stone-500 dark:text-stone-400">
                      <span className="en-text">{l.stateEn}</span>
                      <span className="ar-text">{l.stateAr}</span>
                    </span>
                  </span>
                  <span className="font-extrabold text-lg leading-snug block">
                    <span className="en-text">{l.en}</span>
                    <span className="ar-text">{l.ar}</span>
                  </span>
                  <span className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1 block">
                    <span className="en-text">{l.dEn}</span>
                    <span className="ar-text">{l.dAr}</span>
                  </span>
                  <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400 mt-2 block">
                    <span className="en-text">{l.metaEn}</span>
                    <span className="ar-text">{l.metaAr}</span>
                  </span>
                </span>
                <span
                  className="text-ember dark:text-orange-300 font-extrabold pt-1 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Programming in Python · Borg El Arab Technological University
      </footer>
    </>
  );
}
