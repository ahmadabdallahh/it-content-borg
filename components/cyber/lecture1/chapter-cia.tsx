import Reveal from "@/components/page-chrome";
import CiaTabs from "@/components/cyber/cia-tabs";

export function Lecture1ChapterCia() {
  return (
    <>
        {/* CHAPTER ONE */}
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
    </>
  );
}
