import Reveal, { ScrollToButton } from "@/components/page-chrome";

export function Lecture1HeroTopics() {
  return (
    <>
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
    </>
  );
}
