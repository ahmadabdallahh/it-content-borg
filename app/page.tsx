import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Learning Hub — Lectures",
  description:
    "Pick a course: Cyber Security or Programming in Python. Bilingual EN/AR lecture hub.",
};

/* Course cards. Each opens a course index with its numbered lecture cards. */
const COURSES = [
  {
    href: "/cyber",
    badge: "CS",
    en: "Cyber Security",
    ar: "الأمن السيبراني",
    dEn:
      "Security, the CIA triad, attacks and the network model — with a live SOC terminal and a slide deck ready.",
    dAr:
      "الأمن وثالوث CIA والهجمات ونموذج الشبكة — مع طرفية SOC حيوية وعرض شرائح جاهز.",
    nAccess: "1 lecture",
    nAccessAr: "محاضرة واحدة",
  },
  {
    href: "/python",
    badge: "Py",
    en: "Programming in Python",
    ar: "البرمجة بلغة بايثون",
    dEn:
      "Compilers, interpreters and storage units — then 16 mini-programs execute line by line in a live lab.",
    dAr:
      "المترجمات والمفسرات ووحدات التخزين — ثم ستة عشر برنامجًا تنفذ سطرًا بسطر داخل مختبر حي.",
    nAccess: "2 lectures",
    nAccessAr: "محاضرتان",
  },
];

const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

export default function HubPage() {
  return (
    <>
      <Link
        href="#courses"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to course cards</span>
        <span className="ar-text">تخطَّ إلى بطاقات المقررات</span>
      </Link>

      <SiteHeader
        badge="H"
        titleOnly
        title={
          <>
            Lectures
            <span className="text-ember dark:text-orange-300">.hub</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-10 text-center">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              BORG EL ARAB TECHNOLOGICAL UNIVERSITY · LECTURES
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Pick a course to open.</span>
              <span className="ar-text">اختر مقررًا لفتحه.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4 mx-auto">
              <span className="en-text">
                Each course lists its lectures by number; inside every lecture
                you will find its related files and resources.
              </span>
              <span className="ar-text">
                كل مقرر يعرض محاضراته مرقمة؛ وكل محاضرة تحمل ملفاتها ومراجعها
                المرتبطة.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Course cards */}
        <div
          id="courses"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 scroll-mt-24"
          role="navigation"
          aria-label="Course cards"
        >
          {COURSES.map((c, i) => (
            <Reveal key={c.href} style={{ transitionDelay: `${i * 0.08}s` }}>
              <Link
                href={c.href}
                className={`group flex flex-col h-full rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] p-5 shadow-soft hover:shadow-lift hover:border-ember/60 dark:hover:border-orange-300/60 hover:-translate-y-0.5 transition-all min-h-[44px] ${FOCUS}`}
              >
                <span className="flex items-center justify-between mb-3">
                  <span
                    className="w-10 h-10 rounded-xl bg-ember text-white font-code font-bold text-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {c.badge}
                  </span>
                  <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
                    <span className="en-text">{c.nAccess}</span>
                    <span className="ar-text">{c.nAccessAr}</span>
                  </span>
                  <span
                    className="text-ember dark:text-orange-300 font-extrabold transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
                <h3 className="font-extrabold leading-snug">
                  <span className="en-text">{c.en}</span>
                  <span className="ar-text">{c.ar}</span>
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-2">
                  <span className="en-text">{c.dEn}</span>
                  <span className="ar-text">{c.dAr}</span>
                </p>
              </Link>
            </Reveal>
          ))}
          <Reveal
            style={{ transitionDelay: "0.16s" }}
            className="sm:col-start-3"
          >
            <div className="h-full flex items-center justify-center rounded-2xl border border-dashed border-stone-300 dark:border-white/15 p-5 text-center">
              <p className="font-code text-sm text-stone-500 dark:text-stone-400">
                <span className="en-text">
                  More courses soon.
                </span>
                <span className="ar-text">مقررات أخرى قريبًا.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Facts strip */}
        <Reveal className="mt-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] divide-x divide-stone-200 dark:divide-white/10 rtl:divide-x-reverse overflow-hidden">
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                2
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                courses open
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                مقرران متاحان
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                01
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                lecture number per course
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                رقم المحاضرة لكل مقرر
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                EN/AR
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                full parity, everywhere
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                تكافؤ كامل في كل مكان
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                1
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                click back home, always
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                زر للرجوع دائمًا
              </dd>
            </div>
          </dl>
        </Reveal>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Lectures Hub · Borg El Arab Technological University
      </footer>
    </>
  );
}
