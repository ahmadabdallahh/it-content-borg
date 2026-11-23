import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import GuestShell from "@/components/cyber/shell";

export const metadata: Metadata = {
  title: "Course: Cyber Security — Lectures",
  description:
    "Cyber Security course lecture list. Lecture 1: Introduction to Cyber Security, with a slide deck, SOC terminal and quiz.",
};

/*
  Course index: numbered lecture cards. Each card jumps to the lecture page,
  which in turn lists its related resources (slide deck, etc.).
*/
const LECTURES = [
  {
    n: "01",
    href: "/cyber/lecture-1",
    stateEn: "open now",
    stateAr: "متاح الآن",
    en: "Introduction to Cyber Security",
    ar: "مقدمة في الأمن السيبراني",
    dEn:
      "Security fundamentals, the CIA triad, passive vs active attacks, the network security model, six categories and today's threat landscape.",
    dAr:
      "أساسيات الأمن، ثالوث CIA، الهجمات السلبية والنشطة، نموذج أمن الشبكة، ستة تصنيفات ومشهد التهديدات اليوم.",
    metaEn: "SOC terminal · 16-question quiz · 26-slide deck",
    metaAr: "طرفية SOC · اختبار من ١٦ سؤالًا · عرض من ٢٦ شريحة",
  },
  {
    n: "02",
    href: "/cyber/lecture-2",
    stateEn: "open now",
    stateAr: "متاح الآن",
    en: "Classical Encryption Techniques",
    ar: "تقنيات التشفير الكلاسيكية",
    dEn:
      "Chapters 2–3: Caesar, Atbash, multiplicative, affine, Vigenère, Playfair, Hill, rail fence and columnar transposition — with a live cipher lab.",
    dAr:
      "الفصلان الثاني والثالث: قيصر وأتباش والضربية والأفيني وفينير وبليفير وهيل وسكة الحديد والتبديل العمودي — مع مختبر تشفير مباشر.",
    metaEn: "cipher lab · formulas · homework",
    metaAr: "مختبر الشيفرة · الصيغ · الواجب",
  },
  {
    n: "03",
    href: "/cyber/lecture-3",
    stateEn: "open now",
    stateAr: "متاح الآن",
    en: "Classical Encryption / Decryption",
    ar: "التشفير وفك التشفير الكلاسيكي",
    dEn:
      "Chapter 2: encryption types, characterization, substitution families, the Vigenère cipher, Playfair and row/multiple transposition — with worked examples.",
    dAr:
      "الفصل الثاني: أنواع التشفير والتوصيف وعائلات الإحلال وشيفرة فينير وبليفير وتبديل الصفوف والمتعدد — مع أمثلة محلولة.",
    metaEn: "worked examples · 50-question quiz",
    metaAr: "أمثلة محلولة · اختبار من ٥٠ سؤالًا",
  },
];

const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

export default function CyberCoursePage() {
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
        badge="CS"
        backFallback="/"
        title={
          <>
            CyberSec
            <span className="text-ember dark:text-orange-300">.course</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="pt-14 lg:pt-20 pb-8">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              COURSE · CYBER SECURITY
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Cyber Security lectures.</span>
              <span className="ar-text">محاضرات الأمن السيبراني.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                One chapter at a time, from first principles to real practice.
                Pick a lecture below.
              </span>
              <span className="ar-text">
                فصلًا بعد فصل، من المبادئ الأولى إلى الممارسة الفعلية. اختر
                محاضرة أدناه.
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
          <Reveal
            style={{ transitionDelay: "0.16s" }}
            className="sm:col-start-2"
          >
            <Link
              href="/cyber/quiz"
              className={`group flex gap-4 items-start rounded-2xl border border-dashed border-ember/60 dark:border-orange-300/60 bg-ember/5 dark:bg-orange-300/5 p-5 shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all min-h-[44px] ${FOCUS}`}
            >
              <span className="font-code text-3xl font-extrabold text-ember dark:text-orange-300 leading-none pt-0.5">
                ?
              </span>
              <span className="flex-1 min-w-0">
                <span className="flex items-center gap-2 mb-1">
                  <span className="font-code text-[11px] font-semibold rounded-full border border-ember/60 dark:border-orange-300/60 px-2 py-0.5 text-ember dark:text-orange-300">
                    <span className="en-text">full quiz app</span>
                    <span className="ar-text">تطبيق اختبار كامل</span>
                  </span>
                </span>
                <span className="font-extrabold text-lg leading-snug block">
                  <span className="en-text">Test yourself on both lectures</span>
                  <span className="ar-text">اختبر نفسك في المحاضرتين</span>
                </span>
                <span className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1 block">
                  <span className="en-text">
                    12 questions, one at a time — score and full review at the end.
                  </span>
                  <span className="ar-text">
                    ١٢ سؤالًا واحدًا تلو الآخر — النتيجة والمراجعة الكاملة في النهاية.
                  </span>
                </span>
                <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400 mt-2 block">
                  <span className="en-text">result screen · nothing stored</span>
                  <span className="ar-text">شاشة نتيجة · لا تخزين</span>
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
        </div>

        {/* Guest shell: a small simulated command line wired to the hub */}
        <Reveal className="mt-12">
          <div className="rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] shadow-soft">
            <div className="flex items-baseline justify-between gap-3 mb-4 flex-wrap">
              <h3 className="text-xl font-extrabold tracking-tight">
                <span className="en-text">Try the shell</span>
                <span className="ar-text">جرِّب الطرفية</span>
              </h3>
              <p className="font-code text-xs text-stone-500 dark:text-stone-400">
                <span className="en-text">simulated · no real system touched</span>
                <span className="ar-text">محاكاة · لا نظام حقيقي ملموس</span>
              </p>
            </div>
            <GuestShell />
          </div>
        </Reveal>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Cyber Security · Borg El Arab Technological University
      </footer>
    </>
  );
}
