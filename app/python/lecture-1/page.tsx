import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import Lab from "@/components/python/lab";
import HeroTyping, { StartFirstButton } from "@/components/python/hero-typing";

export const metadata: Metadata = {
  title: "Lecture 1: Programming Essentials in Python",
  description:
    "Watch 10 Python mini-programs execute line by line. Code, terminal, memory and plain bilingual explanation stay in sync.",
};

export default function PythonLecture1() {
  return (
    <>
      <a
        href="#labTitle"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to interpreter</span>
        <span className="ar-text">تخطَّ إلى المفسر</span>
      </a>

      <SiteHeader
        badge="Py"
        backFallback="/python"
        title={
          <>
            Python_Lec1
            <span className="text-ember dark:text-orange-300">.py</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero: split, one eyebrow, headline, 19-word sub, single CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 items-center pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              LECTURE 1 · PYTHON
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">
                Watch Python think, one line at a time.
              </span>
              <span className="ar-text">شاهد بايثون وهي تفكر سطرًا بسطر.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                Pick any of the 10 mini-programs below, then press Run to watch
                the interpreter execute line by line.
              </span>
              <span className="ar-text">
                اختر أي برنامج من الأمثلة العشرة بالأسفل، ثم اضغط تشغيل لمشاهدة
                المفسر وهو ينفذ سطرًا بسطر.
              </span>
            </p>
            <div className="mt-6">
              <StartFirstButton />
            </div>
          </Reveal>
          {/* Hero visual: a real working miniature, not a mock */}
          <Reveal style={{ transitionDelay: "0.12s" }}>
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] shadow-soft overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-200 dark:border-white/10">
                <span className="font-code text-xs text-stone-500 dark:text-stone-400">
                  preview.py
                </span>
                <span className="font-code text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 me-1"
                    aria-hidden="true"
                  />{" "}
                  live
                </span>
              </div>
              <HeroTyping />
            </div>
          </Reveal>
        </div>

        {/* Facts strip: one row, dividers, no nested cards */}
        <Reveal>
          <dl className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] divide-x divide-stone-200 dark:divide-white/10 rtl:divide-x-reverse overflow-hidden mb-12">
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                10
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                guided programs
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                برامج موجهة
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                4×
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                views in sync
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                عروض متزامنة
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                2
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                languages, full parity
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                لغتان بتكافؤ كامل
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                R N B
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                keyboard runnable
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                يعمل بلوحة المفاتيح
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* LAB (interactive client island) */}
        <Lab />

        {/* Concepts: sticky heading left, rows right */}
        <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-6 mt-12">
          <Reveal>
            <h3 className="text-2xl font-extrabold tracking-tight md:sticky md:top-24">
              <span className="en-text">Ideas behind the code</span>
              <span className="ar-text">الأفكار وراء الكود</span>
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-2 max-w-[52ch]">
              <span className="en-text">
                Two facts that make every example above click: how Python runs,
                and where it keeps things.
              </span>
              <span className="ar-text">
                حقيقتان تجعلان كل مثال أعلاه واضحًا: كيف تعمل بايثون وأين تحفظ
                الأشياء.
              </span>
            </p>
          </Reveal>
          <Reveal
            className="divide-y divide-stone-200 dark:divide-white/10 border-y border-stone-200 dark:border-white/10"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  A compiler translates first, then runs.
                </span>
                <span className="ar-text">المترجم يترجم أولًا ثم يشغّل.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
                <span className="en-text">
                  Errors surface before anything executes, and the finished
                  program runs fast.
                </span>
                <span className="ar-text">
                  تظهر الأخطاء قبل تنفيذ أي شيء، ويعمل البرنامج النهائي بسرعة.
                </span>
              </p>
            </div>
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  An interpreter runs line by line.
                </span>
                <span className="ar-text">المفسر ينفذ سطرًا بسطر.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
                <span className="en-text">
                  That is exactly what the lab above simulates. Errors point at
                  the guilty line, which is why Python is friendly to beginners.
                </span>
                <span className="ar-text">
                  وهذا بالضبط ما يحاكيه المختبر أعلاه. تشير الأخطاء إلى السطر
                  المسؤول، ولهذا بايثون لطيفة مع المبتدئين.
                </span>
              </p>
            </div>
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  Storage scales in powers of 1024.
                </span>
                <span className="ar-text">تتدرج السعات بقوى ١٠٢٤.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1 font-mono">
                <span className="en-text">
                  Bit (0/1) · Byte (8 bits) · KB · MB · GB · TB
                </span>
                <span className="ar-text">
                  بت (٠/١) · بايت (٨ بت) · كيلوبايت · ميجابايت · جيجابايت ·
                  تيرابايت
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Files & resources for this lecture */}
        <Resources>
          <ResourceCard
            href="/python/lecture-2"
            badge="Py"
            en="Python · Lecture 2"
            ar="بايثون · المحاضرة الثانية"
            dEn="print, variables, data types, conversion and operator precedence in six guided programs."
            dAr="الطباعة والمتغيرات وأنواع البيانات والتحويل وأسبقية العمليات في ستة برامج موجهة."
            metaEn="Chapter 2 · lab · 6 programs"
            metaAr="الفصل الثاني · مختبر · ٦ برامج"
          />
          <ResourceCard
            href="/cyber/lecture-1"
            badge="CS"
            en="Cyber Security · Lecture 1"
            ar="الأمن السيبراني · المحاضرة الأولى"
            dEn="Security fundamentals, CIA triad, attacks and a live SOC terminal to try commands on."
            dAr="أساسيات الأمن وثالوث CIA والهجمات وطرفية SOC حيوية لتجربة الأوامر."
            metaEn="Chapter 1 · SOC terminal · quiz"
            metaAr="الفصل الأول · طرفية SOC · اختبار"
          />
          <ResourceCard
            href="/python"
            badge="Py"
            en="Course: Programming in Python"
            ar="المقرر: البرمجة بلغة بايثون"
            dEn="Back to the course list to pick another lecture."
            dAr="ارجع لقائمة المقرر لاختيار محاضرة أخرى."
            metaEn="all lectures · course index"
            metaAr="كل المحاضرات · فهرس المقرر"
          />
        </Resources>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Lecture 1: Programming Essentials in Python
      </footer>
    </>
  );
}
