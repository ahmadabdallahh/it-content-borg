import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import Reveal, { ScrollToButton } from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import CiaTabs from "@/components/cyber/cia-tabs";
import SocTerminal, { SocClearButton } from "@/components/cyber/soc-terminal";

export const metadata: Metadata = {
  title: "Lecture 1: Introduction to Cyber Security",
  description:
    "Lecture 1: security fundamentals, the CIA triad, attacks, the network security model, categories, threats. Bilingual EN/AR with a 16-question comprehensive quiz.",
};

export default function CyberLecture1() {
  return (
    <>
      <a
        href="#chapter"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to chapter</span>
        <span className="ar-text">تخطَّ إلى الفصل</span>
      </a>

      <SiteHeader
        badge="CS"
        backFallback="/cyber"
        title={
          <>
            CyberSec_Lec1
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 items-center pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              BORG EL ARAB TECHNOLOGICAL UNIVERSITY · LECTURE 1
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Introduction to Cyber Security.</span>
              <span className="ar-text">مقدمة الأمن السيبراني.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                First level, first semester. Security fundamentals, the CIA
                triad, attacks, and threat types in one guided pass.
              </span>
              <span className="ar-text">
                المستوى الأول، الفصل الدراسي الأول. أساسيات الأمن والثالوث CIA
                والهجمات وأنواع التهديدات في عرض موجه واحد.
              </span>
            </p>
            <p className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400 mt-3">
              <span className="en-text">Dr. Hayman El-sayed · 1st level · 1st semester</span>
              <span className="ar-text">د. هيمان السيد · المستوى الأول · الفصل الأول</span>
            </p>
            <div className="mt-6">
              <ScrollToButton
                targetId="chapter"
                arrow="↓"
                className="min-h-[48px] px-7 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift"
              />
            </div>
          </Reveal>
          {/* Course card */}
          <Reveal style={{ transitionDelay: "0.12s" }}>
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] shadow-soft overflow-hidden">
              <div className="px-4 py-2.5 border-b border-stone-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-code text-xs text-stone-500 dark:text-stone-400">
                  course_card
                </span>
                <span className="font-code text-[11px] font-semibold text-ember dark:text-orange-300">
                  1 HR / WEEK
                </span>
              </div>
              <div className="p-4">
                <p className="font-extrabold text-sm">
                  <span className="en-text">Grading scheme (50 marks)</span>
                  <span className="ar-text">توزيع الدرجات (٥٠ درجة)</span>
                </p>
                <dl className="mt-2 divide-y divide-stone-200 dark:divide-white/10 text-sm">
                  <div className="flex justify-between py-2">
                    <dt className="text-stone-600 dark:text-stone-300 en-text">
                      Class work
                    </dt>
                    <dt className="text-stone-600 dark:text-stone-300 ar-text">
                      أعمال السنة
                    </dt>
                    <dd className="font-code font-bold">10</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-stone-600 dark:text-stone-300 en-text">
                      Midterm
                    </dt>
                    <dt className="text-stone-600 dark:text-stone-300 ar-text">
                      امتحان منتصف الفصل
                    </dt>
                    <dd className="font-code font-bold">10</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-stone-600 dark:text-stone-300 en-text">
                      Final
                    </dt>
                    <dt className="text-stone-600 dark:text-stone-300 ar-text">
                      الامتحان النهائي
                    </dt>
                    <dd className="font-code font-bold">30</dd>
                  </div>
                  <div className="flex justify-between py-2 font-extrabold">
                    <dt className="en-text">Total</dt>
                    <dt className="ar-text">المجموع</dt>
                    <dd className="font-code text-ember dark:text-orange-300">
                      50
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Facts strip */}
        <Reveal>
          <dl className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] divide-x divide-stone-200 dark:divide-white/10 rtl:divide-x-reverse overflow-hidden mb-12">
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                05
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                chapters this course
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                فصول المقرر
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                03
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                CIA security pillars
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                ركائز الأمن CIA
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                06
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                security categories
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                تصنيفات الأمن
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">
                03
              </dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">
                cyber threat types
              </dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">
                أنواع التهديدات
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Course topics */}
        <Reveal>
        <section
          aria-labelledby="topicsTitle"
          className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-6"
        >
          <div>
            <h3
              id="topicsTitle"
              className="text-2xl font-extrabold tracking-tight md:sticky md:top-24"
            >
              <span className="en-text">Course topics</span>
              <span className="ar-text">موضوعات المقرر</span>
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-2 max-w-[52ch]">
              <span className="en-text">
                Five chapters from first principles to malware defense. Today is
                Chapter 1.
              </span>
              <span className="ar-text">
                خمسة فصول من المبادئ الأولى إلى الدفاع ضد البرمجيات الخبيثة.
                اليوم الفصل الأول.
              </span>
            </p>
          </div>
          <ol className="divide-y divide-stone-200 dark:divide-white/10 border-y border-stone-200 dark:border-white/10">
            <li className="py-4 flex gap-4 items-baseline">
              <span className="font-code text-sm font-bold text-ember dark:text-orange-300 shrink-0">
                01
              </span>
              <div>
                <p className="font-extrabold en-text">Introduction</p>
                <p className="font-extrabold ar-text">مقدمة</p>
                <p className="text-sm text-stone-600 dark:text-stone-300 en-text">
                  Security, CIA, attacks, categories, threats. You are here.
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-300 ar-text">
                  الأمن وCIA والهجمات والتصنيفات والتهديدات. أنت هنا.
                </p>
              </div>
            </li>
            <li className="py-4 flex gap-4 items-baseline">
              <span className="font-code text-sm font-bold text-ember dark:text-orange-300 shrink-0">
                02
              </span>
              <div>
                <p className="font-extrabold en-text">
                  Classical encryption / decryption techniques
                </p>
                <p className="font-extrabold ar-text">
                  تقنيات التشفير وفك التشفير الكلاسيكية
                </p>
              </div>
            </li>
            <li className="py-4 flex gap-4 items-baseline">
              <span className="font-code text-sm font-bold text-ember dark:text-orange-300 shrink-0">
                03
              </span>
              <div>
                <p className="font-extrabold en-text">
                  Modern encryption / decryption techniques
                </p>
                <p className="font-extrabold ar-text">
                  تقنيات التشفير وفك التشفير الحديثة
                </p>
              </div>
            </li>
            <li className="py-4 flex gap-4 items-baseline">
              <span className="font-code text-sm font-bold text-ember dark:text-orange-300 shrink-0">
                04
              </span>
              <div>
                <p className="font-extrabold en-text">
                  Attacks and prevention techniques
                </p>
                <p className="font-extrabold ar-text">
                  الهجمات وتقنيات الوقاية
                </p>
              </div>
            </li>
            <li className="py-4 flex gap-4 items-baseline">
              <span className="font-code text-sm font-bold text-ember dark:text-orange-300 shrink-0">
                05
              </span>
              <div>
                <p className="font-extrabold en-text">Virus and antivirus</p>
                <p className="font-extrabold ar-text">
                  الفيروسات ومضادات الفيروسات
                </p>
              </div>
            </li>
          </ol>
        </section>
        </Reveal>

        {/* CHAPTER ONE */}
        <div id="chapter" className="pt-12 scroll-mt-24">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-2">
              CHAPTER ONE
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="en-text">Introduction</span>
              <span className="ar-text">مقدمة</span>
            </h3>
          </Reveal>

          {/* Chapter roadmap — five topics from the official slides */}
          <Reveal>
            <section
              aria-labelledby="roadmapTitle"
              className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
            >
              <h4 id="roadmapTitle" className="text-xl font-extrabold">
                <span className="en-text">Topics covered in this chapter</span>
                <span className="ar-text">الموضوعات التي يغطيها هذا الفصل</span>
              </h4>
              <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-sm">
                {[
                  { n: "01", en: "Introduction to security", ar: "مقدمة في الأمن" },
                  { n: "02", en: "Cyber security", ar: "الأمن السيبراني" },
                  { n: "03", en: "Categories of cyber security", ar: "تصنيفات الأمن السيبراني" },
                  { n: "04", en: "Importance of cyber security", ar: "أهمية الأمن السيبراني" },
                  { n: "05", en: "Types of cyber threats", ar: "أنواع التهديدات السيبرانية" },
                ].map((t) => (
                  <li
                    key={t.n}
                    className="rounded-xl border border-stone-200 dark:border-white/10 p-3 flex gap-2 items-baseline"
                  >
                    <span className="font-code text-xs font-bold text-ember dark:text-orange-300">
                      {t.n}
                    </span>
                    <span className="en-text font-bold leading-snug">{t.en}</span>
                    <span className="ar-text font-bold leading-snug">{t.ar}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          {/* Definition */}
          <Reveal>
          <section
            aria-labelledby="defTitle"
            className="mt-8 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
          >
            <h4 id="defTitle" className="text-xl font-extrabold">
              <span className="en-text">What security means</span>
              <span className="ar-text">ماذا يعني الأمن</span>
            </h4>
            <blockquote className="mt-3 ps-4 border-s-2 border-ember text-[15px] leading-relaxed text-stone-700 dark:text-stone-200">
              <span className="en-text">
                <b>Computer security</b> is the protection given to a system to
                attain the integrity, availability, and confidentiality of
                information system resources.
              </span>
              <span className="ar-text">
                <b>أمن الحاسوب</b> هو الحماية الممنوحة للنظام لتحقيق سلامة وتوافر
                وسرية موارد نظم المعلومات.
              </span>
            </blockquote>
            <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
              {[
                { en: "Integrity → hashing", ar: "السلامة ← التجزئة" },
                { en: "Availability → data and services", ar: "التوافر ← البيانات والخدمات" },
                { en: "Confidentiality → encryption", ar: "السرية ← التشفير" },
              ].map((m) => (
                <span
                  key={m.en}
                  className="rounded-full border border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 px-3 py-1"
                >
                  <span className="en-text">{m.en}</span>
                  <span className="ar-text">{m.ar}</span>
                </span>
              ))}
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm">
              <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold en-text">Security attack</p>
                <p className="font-extrabold ar-text">الهجوم الأمني</p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Any action that endangers information security.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  أي فعل يعرّض أمن المعلومات للخطر.
                </p>
              </div>
              <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold en-text">Security mechanism</p>
                <p className="font-extrabold ar-text">الآلية الأمنية</p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  A process that detects, prevents, or recovers from an attack.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  عملية تكشف الهجوم أو تمنعه أو تتعافى منه.
                </p>
              </div>
              <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold en-text">Security service</p>
                <p className="font-extrabold ar-text">الخدمة الأمنية</p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  A processing or communication service that enhances the security
                  of data processing systems and information transfers.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  خدمة معالجة أو اتصال تعزز أمن أنظمة معالجة البيانات ونقل
                  المعلومات.
                </p>
              </div>
            </div>
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              <div className="rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
                <p className="font-extrabold en-text">Threat vs attack</p>
                <p className="font-extrabold ar-text">التهديد مقابل الهجوم</p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  A <b>threat</b> is a potential violation. An <b>attack</b> is
                  an assault that actually happens.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  <b>التهديد</b> احتمال حدوث خرق. <b>الهجوم</b> اعتداء يحدث فعلًا.
                </p>
              </div>
              <div className="rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
                <p className="font-extrabold en-text">Why it matters</p>
                <p className="font-extrabold ar-text">لماذا يهم</p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Every mechanism in this course maps back to the three pillars
                  below.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  كل آلية في هذا المقرر تعود إلى الركائز الثلاث أدناه.
                </p>
              </div>
            </div>
          </section>
          </Reveal>

          {/* CIA triad explorer */}
          <Reveal>
          <section
            aria-labelledby="ciaTitle"
            className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
          >
            <h4 id="ciaTitle" className="text-xl font-extrabold">
              <span className="en-text">The CIA triad</span>
              <span className="ar-text">الثالوث CIA</span>
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
              <span className="en-text">Select a pillar to inspect it.</span>
              <span className="ar-text">اختر ركيزة لفحصها.</span>
            </p>
            <CiaTabs />
          </section>
          </Reveal>

          {/* Attacks */}
          <Reveal>
          <section
            aria-labelledby="atkTitle"
            className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 id="atkTitle" className="text-xl font-extrabold">
                <span className="en-text">Passive attacks</span>
                <span className="ar-text">الهجمات السلبية</span>
              </h4>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                <span className="en-text">
                  Unauthorized reading of a message and traffic analysis. No data
                  is altered, so they are very difficult to detect.
                </span>
                <span className="ar-text">
                  قراءة غير مصرح بها للرسالة وتحليل الحركة. لا تُغيَّر البيانات لذا
                  يصعب كشفها جدًا.
                </span>
              </p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">
                    Type 1: Release of message contents
                  </p>
                  <p className="font-extrabold ar-text">
                    النوع ١: كشف محتوى الرسالة
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    The opponent reads the contents of the message.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    يقرأ الخصم محتوى الرسالة.
                  </p>
                </li>
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">Type 2: Traffic analysis</p>
                  <p className="font-extrabold ar-text">النوع ٢: تحليل الحركة</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Observing patterns without reading content.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    مراقبة الأنماط دون قراءة المحتوى.
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Active attacks</span>
                <span className="ar-text">الهجمات النشطة</span>
              </h4>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                <span className="en-text">
                  Modification of messages or files, and denial of service. Data
                  that is transmitted gets modified, or false data is created.
                </span>
                <span className="ar-text">
                  تعديل الرسائل أو الملفات والحرمان من الخدمة. تُعدَّل البيانات
                  المرسلة أو تُنشأ بيانات مزيفة.
                </span>
              </p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">Type 1: Masquerade</p>
                  <p className="font-extrabold ar-text">النوع ١: انتحال الهوية</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Pretending to be a different entity.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    التظاهر بأنك كيان مختلف.
                  </p>
                </li>
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">Type 2: Replay</p>
                  <p className="font-extrabold ar-text">النوع ٢: إعادة الإرسال</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Captured data is retransmitted later.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    إعادة إرسال بيانات ملتقطة لاحقًا.
                  </p>
                </li>
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">
                    Type 3: Modification of messages
                  </p>
                  <p className="font-extrabold ar-text">النوع ٣: تعديل الرسائل</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Some portion of a legitimate message is altered.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    تغيير جزء من رسالة شرعية.
                  </p>
                </li>
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">
                    Type 4: Denial of service
                  </p>
                  <p className="font-extrabold ar-text">النوع ٤: الحرمان من الخدمة</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Disrupting the network by disabling or overloading it.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    تعطيل الشبكة بإيقافها أو إغراقها.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          </Reveal>

          {/* Model for network security */}
          <Reveal>
          <section
            aria-labelledby="modelTitle"
            className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
          >
            <h4 id="modelTitle" className="text-xl font-extrabold">
              <span className="en-text">Model for network security</span>
              <span className="ar-text">نموذج أمن الشبكة</span>
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
              <span className="en-text">
                A sender transforms plaintext with a secret, the message crosses
                an untrusted channel watched by an opponent, and the receiver
                reverses the transformation with the same secret.
              </span>
              <span className="ar-text">
                يحوّل المرسل النص الأصلي بسر، وتعبر الرسالة قناة غير موثوقة
                يراقبها خصم، ثم يعكس المستقبل التحويل بالسر نفسه.
              </span>
            </p>
            <div className="mt-4 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-4">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch text-center">
                <div className="rounded-lg border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold text-sm en-text">Sender</p>
                  <p className="font-extrabold text-sm ar-text">المرسل</p>
                  <p className="font-code text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                    plaintext
                  </p>
                </div>
                <span className="hidden md:grid place-items-center text-ember dark:text-orange-300 font-bold" aria-hidden="true">
                  →
                </span>
                <div className="rounded-lg border border-ember/60 dark:border-orange-300/60 bg-ember/5 dark:bg-orange-300/5 p-3">
                  <p className="font-extrabold text-sm en-text">Encryption</p>
                  <p className="font-extrabold text-sm ar-text">التشفير</p>
                  <p className="font-code text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                    secret key
                  </p>
                </div>
                <span className="hidden md:grid place-items-center text-ember dark:text-orange-300 font-bold" aria-hidden="true">
                  →
                </span>
                <div className="rounded-lg border border-dashed border-stone-300 dark:border-white/20 p-3">
                  <p className="font-extrabold text-sm en-text">Channel</p>
                  <p className="font-extrabold text-sm ar-text">القناة</p>
                  <p className="font-code text-[11px] text-red-500 dark:text-red-400 mt-1">
                    <span className="en-text">opponent watches</span>
                    <span className="ar-text">الخصم يراقب</span>
                  </p>
                </div>
                <span className="hidden md:grid place-items-center text-ember dark:text-orange-300 font-bold" aria-hidden="true">
                  →
                </span>
                <div className="rounded-lg border border-ember/60 dark:border-orange-300/60 bg-ember/5 dark:bg-orange-300/5 p-3">
                  <p className="font-extrabold text-sm en-text">Decryption</p>
                  <p className="font-extrabold text-sm ar-text">فك التشفير</p>
                  <p className="font-code text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                    same key
                  </p>
                </div>
                <span className="hidden md:grid place-items-center text-ember dark:text-orange-300 font-bold" aria-hidden="true">
                  →
                </span>
                <div className="rounded-lg border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold text-sm en-text">Receiver</p>
                  <p className="font-extrabold text-sm ar-text">المستقبل</p>
                  <p className="font-code text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                    plaintext
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 mt-3">
                <span className="en-text">
                  Secrets are shared through a trusted third party — that is
                  design task 3 below.
                </span>
                <span className="ar-text">
                  تُشارك الأسرار عبر طرف ثالث موثوق — وهذه هي مهمة التصميم الثالثة أدناه.
                </span>
              </p>
            </div>
          </section>
          </Reveal>

          {/* Security model + definition */}
          <Reveal>
          <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">
                  Designing a security service: 4 tasks
                </span>
                <span className="ar-text">تصميم خدمة أمنية: ٤ مهام</span>
              </h4>
              <ol className="mt-3 space-y-2.5 text-sm">
                <li className="flex gap-3">
                  <span className="font-code font-bold text-ember dark:text-orange-300">
                    1
                  </span>
                  <span className="en-text">
                    Design an algorithm for the security-related transformation.
                  </span>
                  <span className="ar-text">
                    تصميم خوارزمية للتحويل المرتبط بالأمن.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-code font-bold text-ember dark:text-orange-300">
                    2
                  </span>
                  <span className="en-text">
                    Create the secret information to use with the algorithm.
                  </span>
                  <span className="ar-text">
                    إنشاء المعلومات السرية لاستخدامها مع الخوارزمية.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-code font-bold text-ember dark:text-orange-300">
                    3
                  </span>
                  <span className="en-text">
                    Develop methods to distribute and share the secret
                    information.
                  </span>
                  <span className="ar-text">
                    تطوير طرق توزيع المعلومات السرية ومشاركتها.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-code font-bold text-ember dark:text-orange-300">
                    4
                  </span>
                  <span className="en-text">
                    Specify a protocol for the parties to follow.
                  </span>
                  <span className="ar-text">
                    تحديد بروتوكول يلتزم به الأطراف.
                  </span>
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Cyber security, defined</span>
                <span className="ar-text">تعريف الأمن السيبراني</span>
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-700 dark:text-stone-200">
                <span className="en-text">
                  The practice of defending computers, servers, mobile devices,
                  electronic systems, networks, and data from malicious attacks.
                  Also called information technology security or electronic
                  information security.
                </span>
                <span className="ar-text">
                  ممارسة الدفاع عن الحواسيب والخوادم والأجهزة المحمولة والأنظمة
                  الإلكترونية والشبكات والبيانات ضد الهجمات الخبيثة. وتُسمى أيضًا
                  أمن تكنولوجيا المعلومات أو أمن المعلومات الإلكترونية.
                </span>
              </p>
            </div>
          </section>
          </Reveal>

          {/* Categories */}
          <Reveal>
          <section
            aria-labelledby="catTitle"
            className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
          >
            <h4 id="catTitle" className="text-xl font-extrabold">
              <span className="en-text">
                Six categories of cyber security
              </span>
              <span className="ar-text">تصنيفات الأمن السيبراني الستة</span>
            </h4>
            <ol className="mt-3 divide-y divide-stone-200 dark:divide-white/10 text-sm">
              <li className="py-3 flex gap-4">
                <span className="font-code font-bold text-ember dark:text-orange-300">
                  1
                </span>
                <div>
                  <p className="font-extrabold en-text">Network security</p>
                  <p className="font-extrabold ar-text">أمن الشبكات</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Securing a computer network from intruders, attackers, or
                    malware.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    تأمين شبكة الحاسوب ضد المتطفلين والمهاجمين والبرمجيات
                    الخبيثة.
                  </p>
                </div>
              </li>
              <li className="py-3 flex gap-4">
                <span className="font-code font-bold text-ember dark:text-orange-300">
                  2
                </span>
                <div>
                  <p className="font-extrabold en-text">Application security</p>
                  <p className="font-extrabold ar-text">أمن التطبيقات</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Keeping software and devices free of threats. Strong security
                    begins in design.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    إبقاء البرمجيات والأجهزة خالية من التهديدات. الأمن القوي يبدأ
                    من التصميم.
                  </p>
                </div>
              </li>
              <li className="py-3 flex gap-4">
                <span className="font-code font-bold text-ember dark:text-orange-300">
                  3
                </span>
                <div>
                  <p className="font-extrabold en-text">
                    Information security
                  </p>
                  <p className="font-extrabold ar-text">أمن المعلومات</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Protecting the integrity and privacy of data, in storage and
                    in transit.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    حماية سلامة البيانات وخصوصيتها في التخزين وأثناء النقل.
                  </p>
                </div>
              </li>
              <li className="py-3 flex gap-4">
                <span className="font-code font-bold text-ember dark:text-orange-300">
                  4
                </span>
                <div>
                  <p className="font-extrabold en-text">
                    Operational security
                  </p>
                  <p className="font-extrabold ar-text">الأمن التشغيلي</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    The processes and decisions for handling and protecting data.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    العمليات والقرارات الخاصة بمعالجة البيانات وحمايتها.
                  </p>
                </div>
              </li>
              <li className="py-3 flex gap-4">
                <span className="font-code font-bold text-ember dark:text-orange-300">
                  5
                </span>
                <div>
                  <p className="font-extrabold en-text">
                    Disaster recovery and business continuity
                  </p>
                  <p className="font-extrabold ar-text">
                    التعافي من الكوارث واستمرارية الأعمال
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    How an organization responds to losing operations or data.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    كيف تستجيب المؤسسة لفقدان العمليات أو البيانات.
                  </p>
                </div>
              </li>
              <li className="py-3 flex gap-4">
                <span className="font-code font-bold text-ember dark:text-orange-300">
                  6
                </span>
                <div>
                  <p className="font-extrabold en-text">End-user education</p>
                  <p className="font-extrabold ar-text">توعية المستخدم النهائي</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    One mistake can infect a secure system. Teach users to delete
                    suspicious attachments and never plug in unknown USB drives.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    خطأ واحد قد يصيب نظامًا آمنًا. علّم المستخدمين حذف المرفقات
                    المشبوهة وعدم توصيل وحدات USB مجهولة.
                  </p>
                </div>
              </li>
            </ol>
          </section>
          </Reveal>

          {/* Importance + threats */}
          <Reveal>
          <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Why it matters</span>
                <span className="ar-text">لماذا يهم</span>
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-stone-700 dark:text-stone-200">
                <li className="flex gap-2.5">
                  <span className="text-ember dark:text-orange-300 font-bold">
                    -
                  </span>
                  <span className="en-text">
                    Cyber attacks affect all people.
                  </span>
                  <span className="ar-text">
                    الهجمات السيبرانية تؤثر على الجميع.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember dark:text-orange-300 font-bold">
                    -
                  </span>
                  <span className="en-text">
                    Fast technological change will drive a boom in attacks.
                  </span>
                  <span className="ar-text">
                    التغير التكنولوجي السريع سيفجر موجة من الهجمات.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember dark:text-orange-300 font-bold">
                    -
                  </span>
                  <span className="en-text">
                    Damage to businesses and loss of jobs.
                  </span>
                  <span className="ar-text">
                    أضرار للشركات وفقدان للوظائف.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember dark:text-orange-300 font-bold">
                    -
                  </span>
                  <span className="en-text">
                    Individuals face direct threats to their data and privacy.
                  </span>
                  <span className="ar-text">
                    يواجه الأفراد تهديدات مباشرة لبياناتهم وخصوصيتهم.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember dark:text-orange-300 font-bold">
                    -
                  </span>
                  <span className="en-text">
                    Rising concern may bring stronger regulation.
                  </span>
                  <span className="ar-text">
                    القلق المتزايد قد يجلب تنظيمات أقوى.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">
                  Three types of cyber threats
                </span>
                <span className="ar-text">أنواع التهديدات السيبرانية الثلاثة</span>
              </h4>
              <ol className="mt-3 space-y-2.5 text-sm">
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold">
                    <span className="en-text">1. Cybercrime</span>
                    <span className="ar-text">١. الجرائم الإلكترونية</span>
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Single actors or groups targeting systems for financial gain
                    or disruption.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    أفراد أو جماعات تستهدف الأنظمة لتحقيق مكاسب مالية أو التسبب
                    في تعطيل.
                  </p>
                </li>
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold">
                    <span className="en-text">2. Cyber-attack</span>
                    <span className="ar-text">٢. الهجوم السيبراني</span>
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Politically motivated information gathering.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    جمع معلومات بدوافع سياسية.
                  </p>
                </li>
                <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold">
                    <span className="en-text">3. Cyberterrorism</span>
                    <span className="ar-text">٣. الإرهاب السيبراني</span>
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">
                    Undermining electronic systems to cause panic or fear.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">
                    تقويض الأنظمة الإلكترونية لبث الذعر أو الخوف.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          </Reveal>

          {/* Security operations terminal */}
          <Reveal>
          <section
            aria-labelledby="socTitle"
            className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 id="socTitle" className="text-xl font-extrabold">
                <span className="en-text">Security operations terminal</span>
                <span className="ar-text">طرفية العمليات الأمنية</span>
              </h4>
              <SocClearButton />
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
              <span className="en-text">
                Type a command or tap one. Every operation below maps to this
                lecture.
              </span>
              <span className="ar-text">
                اكتب أمرًا أو اضغط واحدًا. كل عملية أدناه مرتبطة بهذه المحاضرة.
              </span>
            </p>
            <SocTerminal />
          </section>
          </Reveal>

          {/* Full chapter recap — every topic on one screen */}
          <Reveal>
          <section
            aria-labelledby="recapTitle"
            className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
          >
            <h4 id="recapTitle" className="text-xl font-extrabold">
              <span className="en-text">Chapter recap: all five topics</span>
              <span className="ar-text">ملخص الفصل: الموضوعات الخمسة</span>
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
              <span className="en-text">
                Everything Chapter One asks you to know, on one screen. Use it
                for revision before the quiz.
              </span>
              <span className="ar-text">
                كل ما يطلب منك الفصل الأول معرفته في شاشة واحدة. استخدمه للمراجعة
                قبل الاختبار.
              </span>
            </p>
            <ol className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm">
              <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold">
                  <span className="en-text">1. Introduction to security</span>
                  <span className="ar-text">١. مقدمة في الأمن</span>
                </p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Computer security protects a system to attain integrity
                  (hashing), availability (data and services) and confidentiality
                  (encryption). Attack endangers security; mechanism detects,
                  prevents or recovers; service strengthens processing and
                  transfer. Threat is potential, attack is actual. Passive
                  attacks read traffic; active attacks masquerade, replay,
                  modify or deny service. The network security model needs four
                  design tasks: algorithm, secret, distribution methods,
                  protocol.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  أمن الحاسوب يحمي النظام لتحقيق السلامة (التجزئة) والتوافر
                  (البيانات والخدمات) والسرية (التشفير). الهجوم يعرّض الأمن
                  للخطر، والآلية تكشف أو تمنع أو تتعافى، والخدمة تعزز المعالجة
                  والنقل. التهديد احتمال والهجوم واقع. الهجمات السلبية تقرأ
                  الحركة، والنشطة تنتحل وتعيد وتعدل أو تحرم من الخدمة. نموذج أمن
                  الشبكة يحتاج أربع مهام: خوارزمية وسر وتوزيع وبروتوكول.
                </p>
              </li>
              <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold">
                  <span className="en-text">2. Cyber security</span>
                  <span className="ar-text">٢. الأمن السيبراني</span>
                </p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Defending computers, servers, mobile devices, electronic
                  systems, networks and data from malicious attacks. Also called
                  IT security or electronic information security.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  الدفاع عن الحواسيب والخوادم والأجهزة المحمولة والأنظمة
                  الإلكترونية والشبكات والبيانات ضد الهجمات الخبيثة. ويسمى أمن
                  تكنولوجيا المعلومات أو أمن المعلومات الإلكترونية.
                </p>
              </li>
              <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold">
                  <span className="en-text">3. Six categories</span>
                  <span className="ar-text">٣. التصنيفات الستة</span>
                </p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Network, application, information, operational security,
                  disaster recovery and business continuity, and end-user
                  education.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  أمن الشبكات والتطبيقات والمعلومات والعمليات والتعافي من
                  الكوارث واستمرارية الأعمال وتوعية المستخدم النهائي.
                </p>
              </li>
              <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                <p className="font-extrabold">
                  <span className="en-text">4. Importance</span>
                  <span className="ar-text">٤. الأهمية</span>
                </p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Attacks affect all people, fast technology change fuels more
                  attacks, businesses and jobs are damaged, individuals face
                  direct threats, and concern drives regulation.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  الهجمات تصيب الجميع، والتغير التقني السريع يضاعفها، وتتضرر
                  الشركات والوظائف، ويواجه الأفراد تهديدات مباشرة، والقلق يدفع
                  إلى التنظيم.
                </p>
              </li>
              <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3 md:col-span-2">
                <p className="font-extrabold">
                  <span className="en-text">5. Three types of cyber threats</span>
                  <span className="ar-text">٥. أنواع التهديدات الثلاثة</span>
                </p>
                <p className="text-stone-600 dark:text-stone-300 en-text">
                  Cybercrime: single actors or groups seeking financial gain or
                  disruption. Cyber-attack: politically motivated information
                  gathering. Cyberterrorism: undermining electronic systems to
                  cause panic or fear.
                </p>
                <p className="text-stone-600 dark:text-stone-300 ar-text">
                  الجرائم الإلكترونية: أفراد أو جماعات يطلبون مكسبًا ماليًا أو
                  تعطيلًا. الهجوم السيبراني: جمع معلومات بدوافع سياسية. الإرهاب
                  السيبراني: تقويض الأنظمة الإلكترونية لبث الذعر أو الخوف.
                </p>
              </li>
            </ol>
          </section>
          </Reveal>

          {/* Quiz — lives on its own page */}
          <Reveal>
          <section
            aria-labelledby="quizTitle"
            className="mt-6 rounded-2xl border border-ember/60 dark:border-orange-300/60 bg-ember/5 dark:bg-orange-300/5 p-5 sm:p-6 shadow-soft"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0">
                <h4 id="quizTitle" className="text-xl font-extrabold">
                  <span className="en-text">Comprehensive quiz · 16 questions</span>
                  <span className="ar-text">اختبار شامل · ١٦ سؤالًا</span>
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-[52ch]">
                  <span className="en-text">
                    All five chapter topics on a dedicated quiz page — score,
                    answers and retry.
                  </span>
                  <span className="ar-text">
                    موضوعات الفصل الخمسة في صفحة اختبار مستقلة — النتيجة والإجابات
                    وإعادة المحاولة.
                  </span>
                </p>
              </div>
              <Link
                href="/cyber/lecture-1/quiz"
                className="min-h-[48px] px-7 inline-flex items-center bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift"
              >
                <span className="en-text">Open the quiz →</span>
                <span className="ar-text">افتح الاختبار ←</span>
              </Link>
            </div>
          </section>
          </Reveal>

          <Reveal>
            <p className="text-center mt-12 text-2xl font-extrabold">
              <span className="en-text">Thank you.</span>
              <span className="ar-text">شكرًا لكم.</span>
            </p>
          </Reveal>

          {/* Files & resources for this lecture */}
          <Resources>
            <ResourceCard
              href="/presentation"
              badge="SL"
              primary
              en="Slide presentation · Lecture 1"
              ar="عرض الشرائح · المحاضرة الأولى"
              dEn="The same lecture as a 26-slide deck with photos and diagrams — arrows, fullscreen, overview grid."
              dAr="المحاضرة نفسها كعرض من ٢٦ شريحة بصور ورسوم — أسهم، ملء الشاشة، وشبكة نظرة عامة."
              metaEn="26 slides · fullscreen · EN/AR"
              metaAr="٢٦ شريحة · ملء الشاشة · عربي/إنجليزي"
            />
            <ResourceCard
              href="/cyber"
              badge="CS"
              en="Course: Cyber Security"
              ar="المقرر: الأمن السيبراني"
              dEn="Back to the course list to pick another lecture."
              dAr="ارجع لقائمة المقرر لاختيار محاضرة أخرى."
              metaEn="all lectures · course index"
              metaAr="كل المحاضرات · فهرس المقرر"
            />
          </Resources>
        </div>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Introduction to Cyber Security · Lecture 1 · Borg El Arab Technological
        University
      </footer>
    </>
  );
}
