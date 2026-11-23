import Link from "next/link";
import Reveal from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";

export function Lecture1Outro() {
  return (
    <>
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
                  <span className="en-text">Quiz · 16 + 47 questions</span>
                  <span className="ar-text">اختبار · ١٦ + ٤٧ سؤالًا</span>
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-[52ch]">
                  <span className="en-text">
                    Sixteen-question self-check plus the full 47-question bank
                    from the lecture sheet — score, answers and retry.
                  </span>
                  <span className="ar-text">
                    اختبار ذاتي من ١٦ سؤالًا مع بنك الأسئلة الكامل من ورقة
                    المحاضرة — النتيجة والإجابات وإعادة المحاولة.
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
    </>
  );
}
