import Reveal from "@/components/page-chrome";
import {
  AttackFlowchart,
  DesignTaskPipeline,
  NetworkPacketFlow,
} from "@/components/cyber/lecture-visuals";

export function Lecture1AttacksModel() {
  return (
    <>
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

          {/* Animated attack flowchart */}
          <Reveal>
            <AttackFlowchart />
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
            <NetworkPacketFlow />
            <div className="mt-3">
              <p className="text-xs text-stone-600 dark:text-stone-300">
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
              <DesignTaskPipeline />
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
    </>
  );
}
