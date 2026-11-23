import Reveal from "@/components/page-chrome";
import SocTerminal, { SocClearButton } from "@/components/cyber/soc-terminal";

export function Lecture1CategoriesThreats() {
  return (
    <>
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
    </>
  );
}
