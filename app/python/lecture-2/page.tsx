import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import Lab from "@/components/python/lab";
import HeroTyping, { StartFirstButton } from "@/components/python/hero-typing";
import { PY2_EXAMPLES } from "@/lib/python-examples2";

export const metadata: Metadata = {
  title: "Lecture 2: The Python Language in Action",
  description:
    "print, variables and multiple assignment, data types and type(), type sensitivity, conversion, and operator precedence — six guided programs running line by line.",
};

export default function PythonLecture2() {
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
            Python_Lec2
            <span className="text-ember dark:text-orange-300">.py</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero: split, one eyebrow, headline, sub, single CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 items-center pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              LECTURE 2 · PYTHON
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">
                The building blocks of every program.
              </span>
              <span className="ar-text">الطوب الذي يُبنى منه كل برنامج.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                print, variables, data types, conversion and operator
                precedence — six guided mini-programs run them line by line.
              </span>
              <span className="ar-text">
                الطباعة والمتغيرات وأنواع البيانات والتحويل وأسبقية العمليات —
                ستة برامج مصغرة موجهة تنفذها سطرًا بسطر.
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
                {PY2_EXAMPLES.length}
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
                4
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                data types dissected
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                أنواع بيانات مفحوصة
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

        {/* LAB (interactive client island, lecture-2 examples) */}
        <Lab data={PY2_EXAMPLES} />

        {/* Concepts: sticky heading left, rows right */}
        <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-6 mt-12">
          <Reveal>
            <h3 className="text-2xl font-extrabold tracking-tight md:sticky md:top-24">
              <span className="en-text">Ideas behind the code</span>
              <span className="ar-text">الأفكار وراء الكود</span>
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-2 max-w-[52ch]">
              <span className="en-text">
                The rules every example above obeys: how values are typed,
                converted, and evaluated in order.
              </span>
              <span className="ar-text">
                القواعد التي يلتزم بها كل مثال أعلاه: كيف تُنمَّط القيم وتُحوَّل
                ويُقيَّم بعضها قبل بعض.
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
                  Multiple assignment copies values.
                </span>
                <span className="ar-text">الإسناد المتعدد ينسخ القيم.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
                <span className="en-text">
                  a = b = c = 5 gives each name its own copy — reassigning a
                  later never changes b or c.
                </span>
                <span className="ar-text">
                  a = b = c = 5 يعطي كل اسم نسخته الخاصة — إعادة إسناد a لاحقًا
                  لا تغير b أو c أبدًا.
                </span>
              </p>
            </div>
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  Names (identifiers) have rules.
                </span>
                <span className="ar-text">للأسماء (المعرفات) قواعد.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
                <span className="en-text">
                  Letters, digits and _ only, cannot start with a digit, are
                  case-sensitive (Age ≠ age), and can never be a keyword like
                  True, if or class.
                </span>
                <span className="ar-text">
                  حروف وأرقام وشرطة سفلية فقط، ولا تبدأ برقم، وهي حساسة لحالة
                  الحروف (Age ≠ age)، ولا تكون أبدًا كلمة محجوزة مثل True أو if
                  أو class.
                </span>
              </p>
            </div>
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  + changes meaning with type.
                </span>
                <span className="ar-text">معنى + يتغير حسب النوع.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1 font-mono">
                <span className="en-text">
                  3 + 4 → 7 (arith.) · "3" + "4" → "34" (joined) · "Hello" + 1 →
                  TypeError
                </span>
                <span className="ar-text">
                  ٣ + ٤ ← ٧ (حساب) · "3" + "4" ← "34" (وصل) · "Hello" + 1 ←
                  TypeError
                </span>
              </p>
            </div>
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  Precedence decides who runs first.
                </span>
                <span className="ar-text">الأسبقية تقرر من يُنفَّذ أولًا.</span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1 font-mono">
                <span className="en-text">
                  () → ** → * / // % → + −
                </span>
                <span className="ar-text">
                  () ← ** ← * / // % ← + −
                </span>
              </p>
            </div>
            <div className="py-5">
              <p className="font-extrabold">
                <span className="en-text">
                  input() always returns text.
                </span>
                <span className="ar-text">
                  الدالة ()input تعيد دائمًا نصًا.
                </span>
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
                <span className="en-text">
                  Whatever the user types arrives as a str — wrap it in
                  int(input(...)) or float(input(...)) before doing math.
                </span>
                <span className="ar-text">
                  كل ما يكتبه المستخدم يصل بوصفه str — والّفه بـ int(input(...))
                  أو float(input(...)) قبل أي حساب.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Files & resources for this lecture */}
        <Resources>
          <ResourceCard
            href="/python/lecture-1"
            badge="Py"
            en="Python · Lecture 1"
            ar="بايثون · المحاضرة الأولى"
            dEn="Compilers vs interpreters, storage units, and 10 more line-by-line programs."
            dAr="المترجمات مقابل المفسرات ووحدات التخزين، وعشرة برامج أخرى سطرًا بسطر."
            metaEn="Chapter 2 · interpreter lab · 10 programs"
            metaAr="الفصل الأول · مختبر المفسر · ١٠ برامج"
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
        Lecture 2: The Python Language in Action
      </footer>
    </>
  );
}
