import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal, { ScrollToButton } from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import CipherLab from "@/components/cyber/cipher-lab";
import {
    CaesarExamplePipeline,
    CaesarShiftWheel,
    CipherTaxonomy,
    SymmetricCipherModel,
} from "@/components/cyber/lecture2-visuals";

export const metadata: Metadata = {
    title: "Lecture 2: Classical Encryption Techniques",
    description:
        "Lecture 2: classical substitution and transposition ciphers, the symmetric model and Caesar shifts — with animated diagrams, a live cipher lab and a 50-question bilingual quiz in ten checked sets.",
};

export default function CyberLecture2() {
    return (
        <>
            <Link
                href="#chapter"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:inset-s-2 focus:z-60 focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
            >
                <span className="en-text">Skip to chapter</span>
                <span className="ar-text">تخطَّ إلى الفصل</span>
            </Link>

            <SiteHeader
                badge="CS"
                backFallback="/cyber"
                title={
                    <>
                        CyberSec_Lec2
                        <span className="text-ember dark:text-orange-300">.html</span>
                    </>
                }
            />

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                {/* Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 items-center pt-14 lg:pt-20 pb-10">
                    <Reveal>
                        <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
                            BORG EL ARAB TECHNOLOGICAL UNIVERSITY · LECTURE 2
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] pb-1">
                            <span className="en-text">Classical Encryption Techniques.</span>
                            <span className="ar-text">تقنيات التشفير الكلاسيكية.</span>
                        </h2>
                        <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
                            <span className="en-text">
                                Chapters 2–3. From the Caesar shift to Playfair, Hill and
                                transposition matrices — every cipher, its formula, its example,
                                and why each one falls.
                            </span>
                            <span className="ar-text">
                                الفصلان الثاني والثالث. من إزاحة قيصر إلى بليفير وهيل ومصفوفات
                                التبديل — كل شيفرة بصيغتها ومثالها وسبب سقوطها.
                            </span>
                        </p>
                        <div className="mt-6">
                            <ScrollToButton
                                targetId="chapter"
                                arrow="↓"
                                className="min-h-12 px-7 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift"
                            />
                        </div>
                    </Reveal>
                    {/* Formula card */}
                    <Reveal style={{ transitionDelay: "0.12s" }}>
                        <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] shadow-soft overflow-hidden">
                            <div className="px-4 py-2.5 border-b border-stone-200 dark:border-white/10 flex items-center justify-between">
                                <span className="font-code text-xs text-stone-500 dark:text-stone-400">
                                    core_equations
                                </span>
                                <span className="font-code text-[11px] font-semibold text-ember dark:text-orange-300">
                                    MOD 26
                                </span>
                            </div>
                            <div className="p-4 font-code text-sm space-y-2">
                                <p className="flex justify-between">
                                    <span className="text-stone-600 dark:text-stone-300">Caesar</span>
                                    <span className="font-bold">C = (p + k) mod 26</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-stone-600 dark:text-stone-300">Atbash</span>
                                    <span className="font-bold">C = (25 − p) mod 26</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-stone-600 dark:text-stone-300">Multiplicative</span>
                                    <span className="font-bold">C = (p × k) mod 26</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-stone-600 dark:text-stone-300">Affine</span>
                                    <span className="font-bold">C = (a·p + b) mod 26</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-stone-600 dark:text-stone-300">Vigenère</span>
                                    <span className="font-bold">C = (pᵢ + kᵢ) mod 26</span>
                                </p>
                                <p className="flex justify-between border-t border-stone-200 dark:border-white/10 pt-2">
                                    <span className="text-stone-600 dark:text-stone-300">
                                        <span className="en-text">Decrypt (any)</span>
                                        <span className="ar-text">فك التشفير (أي شيفرة)</span>
                                    </span>
                                    <span className="font-bold text-ember dark:text-orange-300">
                                        p = D(k, C)
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Facts strip */}
                <Reveal>
                    <dl className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1e1c1a] divide-x divide-stone-200 dark:divide-white/10 rtl:divide-x-reverse overflow-hidden mb-12">
                        <div className="p-4">
                            <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">25</dt>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Caesar keys — brute force in minutes</dd>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">مفاتيح قيصر — كسر بالقوة الغاشمة في دقائق</dd>
                        </div>
                        <div className="p-4">
                            <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">312</dt>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Affine keys (12 × 26)</dd>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">مفاتيح الأفيني (١٢ × ٢٦)</dd>
                        </div>
                        <div className="p-4">
                            <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">676</dt>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Playfair digraphs hide letter frequency</dd>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">زوجات بليفير تخفي تكرار الحروف</dd>
                        </div>
                        <div className="p-4">
                            <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">∞</dt>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">One-Time Pad — unbreakable, impractical</dd>
                            <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">الوسادة العابرة — غير قابلة للكسر وغير عملية</dd>
                        </div>
                    </dl>
                </Reveal>

                {/* CHAPTER */}
                <div id="chapter" className="pt-12 scroll-mt-24">
                    <Reveal>
                        <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-2">
                            CHAPTERS 2 &amp; 3
                        </p>
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            <span className="en-text">Classical ciphers, in order of strength</span>
                            <span className="ar-text">الشيفرة الكلاسيكية بترتيب القوة</span>
                        </h3>
                    </Reveal>

                    {/* Recap */}
                    <Reveal>
                        <section className="mt-8 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                            <h4 className="text-xl font-extrabold">
                                <span className="en-text">Recap — the symmetric model</span>
                                <span className="ar-text">مراجعة — النموذج المتماثل</span>
                            </h4>
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Substitution</p>
                                    <p className="font-extrabold ar-text">الإحلال</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Each plaintext element is mapped to another element (letter, number, symbol).</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">كل عنصر من النص الأصلي يستبدل بعنصر آخر (حرف أو رقم أو رمز).</p>
                                </div>
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Transposition</p>
                                    <p className="font-extrabold ar-text">التبديل</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Plaintext elements are rearranged — the letters keep their identity, only their positions move.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">تُعاد ترتيب عناصر النص — الحروف تحتفظ بهويتها وتتغير مواضعها فقط.</p>
                                </div>
                            </div>
                            <blockquote className="mt-4 ps-4 border-s-2 border-ember text-[15px] leading-relaxed text-stone-700 dark:text-stone-200">
                                <span className="en-text">
                                    <b>Caesar cipher:</b> C = (p + 3) mod 26, generalized to any shift k → 25 possible keys. Encryption: C = E(k, p). Decryption: p = D(k, C) = (C − k) mod 26.
                                </span>
                                <span className="ar-text">
                                    <b>شيفرة قيصر:</b> C = (p + 3) mod 26 وتُعمَّم لأي إزاحة k → ٢٥ مفتاحًا ممكنًا. التشفير: C = E(k, p) وفك التشفير: p = D(k, C) = (C − k) mod 26.
                                </span>
                            </blockquote>
                        </section>
                    </Reveal>

                    {/* Symmetric model + operation taxonomy */}
                    <Reveal>
                        <SymmetricCipherModel />
                    </Reveal>

                    <Reveal>
                        <CipherTaxonomy />
                    </Reveal>

                    {/* Cipher lab */}
                    <Reveal>
                        <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                            <h4 className="text-xl font-extrabold">
                                <span className="en-text">Cipher lab — try every cipher live</span>
                                <span className="ar-text">مختبر الشيفرة — جرِّب كل شيفرة مباشرة</span>
                            </h4>
                            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                                <span className="en-text">
                                    Type plaintext, pick a cipher, move the keys. The formula above the output updates as you go.
                                </span>
                                <span className="ar-text">
                                    اكتب النص الأصلي واختر شيفرة وحرِّك المفاتيح. الصيغة أعلى النتيجة تتحدث مع كل تغيير.
                                </span>
                            </p>
                            <CipherLab />
                        </section>
                    </Reveal>

                    {/* Monoalphabetic cards */}
                    <Reveal>
                        <section aria-labelledby="monoTitle" className="mt-6">
                            <h4 id="monoTitle" className="text-xl font-extrabold mb-3">
                                <span className="en-text">Monoalphabetic substitution — one fixed map</span>
                                <span className="ar-text">الإحلال الأحادي الأبجدية — خريطة ثابتة واحدة</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 shadow-soft">
                                    <p className="font-code text-xs font-bold text-ember dark:text-orange-300">ATBASH</p>
                                    <p className="font-extrabold mt-1">
                                        <span className="en-text">Reversed alphabet</span>
                                        <span className="ar-text">الأبجدية المعكوسة</span>
                                    </p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 en-text">A↔Z, B↔Y, C↔X … C = (25 − p) mod 26. Self-inverse, no key. "security" → HVXFIRGB.</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 ar-text">عكس الأبجدية كاملة. تشفيرها هو فك تشفيرها بلا مفتاح. security تصبح HVXFIRGB.</p>
                                </div>
                                <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 shadow-soft">
                                    <p className="font-code text-xs font-bold text-ember dark:text-orange-300">ADDITIVE</p>
                                    <p className="font-extrabold mt-1">
                                        <span className="en-text">Caesar generalized</span>
                                        <span className="ar-text">قيصر المعممة</span>
                                    </p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 en-text">C = (p + k) mod 26, k ∈ 0..25. "data security" with k=7 → KHAH ZLJBYPAF.</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 ar-text">C = (p + k) mod 26 بأي إزاحة. مثال: data security بمفتاح ٧ تصبح KHAH ZLJBYPAF.</p>
                                </div>
                                <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 shadow-soft">
                                    <p className="font-code text-xs font-bold text-ember dark:text-orange-300">MULTIPLICATIVE</p>
                                    <p className="font-extrabold mt-1">
                                        <span className="en-text">Multiply, then mod</span>
                                        <span className="ar-text">الضرب ثم باقي القسمة</span>
                                    </p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 en-text">C = (p × k) mod 26. k must be coprime with 26 → only 12 valid keys. Decrypt with the modular inverse k⁻¹.</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 ar-text">C = (p × k) mod 26 ويشترط أن يكون k أوليًا مع ٢٦ → ١٢ مفتاحًا فقط، وفك التشفير بالمعكوس الضربي.</p>
                                </div>
                                <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 shadow-soft">
                                    <p className="font-code text-xs font-bold text-ember dark:text-orange-300">AFFINE</p>
                                    <p className="font-extrabold mt-1">
                                        <span className="en-text">Multiply + shift</span>
                                        <span className="ar-text">ضرب وإزاحة</span>
                                    </p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 en-text">C = (a·p + b) mod 26, key = (a, b). 312 keys. "hello" with (5, 8) → RCLLA. Decrypt: p = a⁻¹(C − b) mod 26.</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 ar-text">C = (a·p + b) mod 26 بالمفتاح (a, b) و٣١٢ مفتاحًا. hello بمفتاح (٥، ٨) تصبح RCLLA.</p>
                                </div>
                                <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 shadow-soft">
                                    <p className="font-code text-xs font-bold text-ember dark:text-orange-300">ROT13</p>
                                    <p className="font-extrabold mt-1">
                                        <span className="en-text">Shift 13</span>
                                        <span className="ar-text">إزاحة ١٣</span>
                                    </p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 en-text">Because 13 = 26/2, encryption = decryption: apply twice, get the plaintext back. Used to hide spoilers, not secrets. "security" → FRPHEVGL.</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 ar-text">لأن ١٣ نصف ٢٦، فالتشفير مرتين يعيد النص الأصلي. تُستخدم لإخفاء الإجابات لا الأسرار. security تصبح FRPHEVGL.</p>
                                </div>
                                <div className="rounded-2xl border border-ember/60 dark:border-orange-300/60 bg-ember/5 dark:bg-orange-300/5 p-5 shadow-soft">
                                    <p className="font-code text-xs font-bold text-ember dark:text-orange-300">WEAKNESS</p>
                                    <p className="font-extrabold mt-1">
                                        <span className="en-text">Frequency analysis</span>
                                        <span className="ar-text">تحليل التكرار</span>
                                    </p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 en-text">One fixed map preserves English statistics: E ≈ 12.7%, then T, A, O, I, N. Common digrams TH, HE, IN. Count ciphertext letters, match the profile — every monoalphabetic cipher falls.</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 ar-text">الخريطة الثابتة تحفظ إحصاءات اللغة: E أكثر الحروف تكرارًا ثم T وA وO. عدّ حروف النص المشفر وقارن — كل شيفرة أحادية الأبجدية تسقط.</p>
                                </div>
                            </div>
                        </section>
                    </Reveal>

                    {/* Caesar motion graphics + worked example */}
                    <Reveal>
                        <CaesarShiftWheel />
                    </Reveal>

                    <Reveal>
                        <CaesarExamplePipeline />
                    </Reveal>

                    {/* Polyalphabetic */}
                    <Reveal>
                        <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                            <h4 className="text-xl font-extrabold">
                                <span className="en-text">Polyalphabetic — different map per position</span>
                                <span className="ar-text">تعدد الأبجديات — خريطة مختلفة لكل موضع</span>
                            </h4>
                            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-2.5 text-sm">
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Simple Vigenère</p>
                                    <p className="font-extrabold ar-text">فينير البسيط</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Keyword of length m; letter i is shifted by keyword letter i mod m. Example: "hello world" with key KEY → RIJVSUYVJN. Same letter now encrypts differently each time.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">كلمة مفتاحية طولها m؛ يُزاح الحرف i بجزء من الكلمة. مثال: hello world بالمفتاح KEY تصبح RIJVSUYVJN. الحرف نفسه يظهر مشفرًا بأشكال مختلفة.</p>
                                </div>
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Breaking it: Kasiski + IC</p>
                                    <p className="font-extrabold ar-text">كسرها: كاسكي ومعامل التزامن</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Repeated ciphertext groups reveal the keyword length (Kasiski). The Index of Coincidence drops to ~0.038 vs English ~0.066. Split into m Caesar streams, solve each by frequency.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">المجموعات المتكررة تكشف طول الكلمة المفتاحية، ومعامل التزامن ينخفض إلى ~٠٫٠٣٨ بدل ~٠٫٠٦٦. نقسم النص على m مجرى قيصر ونكسر كل مجرى بالتكرار.</p>
                                </div>
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Full Vigenère &amp; autokey</p>
                                    <p className="font-extrabold ar-text">فينير الكامل والمفتاح الذاتي</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Autokey continues the key stream with the plaintext (or ciphertext) itself after the keyword — this destroys the periodicity that Kasiski exploits.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">المفتاح الذاتي يكمل تدفق المفتاح من النص نفسه بعد الكلمة المفتاحية — فيفني الدورية التي يعتمد عليها تحليل كاسكي.</p>
                                </div>
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">One-Time Pad — the ideal limit</p>
                                    <p className="font-extrabold ar-text">الوسادة العابرة — الحد المثالي</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">A random key as long as the message, used once. Perfect secrecy (Shannon, 1949): every plaintext is equally likely. Impractical: key distribution and no reuse — the model behind modern stream ciphers.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">مفتاح عشوائي بطول الرسالة يُستخدم مرة واحدة. سرية تامة (شانون ١٩٤٩): كل نص أصلي محتمل بالتساوي. غير عملي: توزيع المفتاح ومنع إعادة الاستخدام.</p>
                                </div>
                            </div>
                        </section>
                    </Reveal>

                    {/* Polygram */}
                    <Reveal>
                        <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                                <h4 className="text-xl font-extrabold">
                                    <span className="en-text">Playfair — encrypt pairs, not letters</span>
                                    <span className="ar-text">بليفير — تشفير الأزواج لا الحروف</span>
                                </h4>
                                <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                                    <span className="en-text">5×5 matrix from a keyword (I/J share one cell). Split plaintext into digraphs; double letters get an X filler; pad the end.</span>
                                    <span className="ar-text">مصفوفة ٥×٥ من كلمة مفتاحية (I وJ في خلية واحدة). نقسم النص إلى أزواج ونفصل الحروف المتكررة بـ X.</span>
                                </p>
                                <ul className="mt-3 space-y-2.5 text-sm">
                                    <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                        <p className="font-extrabold en-text">Rule 1 — same row</p>
                                        <p className="font-extrabold ar-text">القاعدة ١ — الصف نفسه</p>
                                        <p className="text-stone-600 dark:text-stone-300 en-text">Each letter → letter to its right, wrap around.</p>
                                        <p className="text-stone-600 dark:text-stone-300 ar-text">كل حرف يُستبدل بالحرف على يمينه مع الالتفاف.</p>
                                    </li>
                                    <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                        <p className="font-extrabold en-text">Rule 2 — same column</p>
                                        <p className="font-extrabold ar-text">القاعدة ٢ — العمود نفسه</p>
                                        <p className="text-stone-600 dark:text-stone-300 en-text">Each letter → letter below it, wrap around.</p>
                                        <p className="text-stone-600 dark:text-stone-300 ar-text">كل حرف يُستبدل بالحرف تحته مع الالتفاف.</p>
                                    </li>
                                    <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                        <p className="font-extrabold en-text">Rule 3 — rectangle</p>
                                        <p className="font-extrabold ar-text">القاعدة ٣ — المستطيل</p>
                                        <p className="text-stone-600 dark:text-stone-300 en-text">Each letter → letter in its own row, in the other letter's column. Example: "hello" with keyword MONARCHY → CFPZPM.</p>
                                        <p className="text-stone-600 dark:text-stone-300 ar-text">كل حرف يأخذ صفه وعمود الحرف الآخر. مثال: hello بكلمة MONARCHY تصبح CFPZPM.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                                <h4 className="text-xl font-extrabold">
                                    <span className="en-text">Hill — matrices do the substitution</span>
                                    <span className="ar-text">هيل — المصفوفات تقوم بالإحلال</span>
                                </h4>
                                <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                                    <span className="en-text">Key = m×m invertible matrix K over mod 26 (det must be coprime with 26). Blocks of m letters become vectors.</span>
                                    <span className="ar-text">المفتاح مصفوفة قابلة للعكس أبعاد m×م على mod 26 بشرط أن يكون المحدد أوليًا مع ٢٦. تتحول الكتل إلى متجهات.</span>
                                </p>
                                <div className="mt-3 rounded-xl bg-stone-900/4 dark:bg-black/30 p-3 font-code text-sm">
                                    <p>C = K·P mod 26</p>
                                    <p>P = K⁻¹·C mod 26, K⁻¹ = (det K)⁻¹ · adj(K)</p>
                                    <p className="text-stone-600 dark:text-stone-300 mt-2">
                                        <span className="en-text">K = [[3,3],[2,5]]: "HI" → TC</span>
                                        <span className="ar-text">K = [[3,3],[2,5]]: HI تصبح TC</span>
                                    </p>
                                </div>
                                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                                    <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                        <p className="font-extrabold en-text">Strength</p>
                                        <p className="font-extrabold ar-text">القوة</p>
                                        <p className="text-stone-600 dark:text-stone-300 en-text">Hides single-letter and digraph frequencies; the seed of modern linear cryptography.</p>
                                        <p className="text-stone-600 dark:text-stone-300 ar-text">يخفي تكرار الحروف والأزواج؛ البذرة الأولى للتشفير الخطي الحديث.</p>
                                    </div>
                                    <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                        <p className="font-extrabold en-text">Weakness</p>
                                        <p className="font-extrabold ar-text">الضعف</p>
                                        <p className="text-stone-600 dark:text-stone-300 en-text">Linear — m known plaintext/ciphertext pairs recover K directly.</p>
                                        <p className="text-stone-600 dark:text-stone-300 ar-text">خطي — m زوجًا معروفًا من النصين تكشف المصفوفة مباشرة.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Reveal>

                    {/* Transposition */}
                    <Reveal>
                        <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                            <h4 className="text-xl font-extrabold">
                                <span className="en-text">Transposition — shuffle the positions</span>
                                <span className="ar-text">التبديل — خلط المواضع</span>
                            </h4>
                            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-2.5 text-sm">
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Rail fence (k rails)</p>
                                    <p className="font-extrabold ar-text">سكة الحديد (k مسارات)</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Write diagonally up and down over k rails, read row by row. "DATA SECURITY", k=3 → DERAAECIYTUT. Letters unchanged — only positions move.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">نكتب الحروف بشكل متعرج على k مسارات ثم نقرأ صفًا صفًا. مثال DATA SECURITY بثلاث مسارات تصبح DERAAECIYTUT.</p>
                                </div>
                                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                                    <p className="font-extrabold en-text">Columnar transposition</p>
                                    <p className="font-extrabold ar-text">التبديل العمودي</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Write rows into a grid of width m, number the columns with a key, read column by column in key order. Decryption: column heights = length ÷ columns.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">نكتب النص في شبكة عرضها m ونرقم الأعمدة بمفتاح ثم نقرأ عمودًا عمودًا بترتيب المفتاح. فك التشفير يعتمد على طول كل عمود.</p>
                                </div>
                                <div className="rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
                                    <p className="font-extrabold en-text">Why it looks "safe" but isn&apos;t</p>
                                    <p className="font-extrabold ar-text">لماذا تبدو آمنة وهي ليست</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text">Letter frequencies stay 100% English — the analyst sees an anagram of English and recovers the columns from digram patterns.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">تكرار الحروف يبقى إنجليزيًا تمامًا — فيرى المحلل "مقابض" للنص ويعيد بناء الأعمدة من أنماط الأزواج.</p>
                                </div>
                                <div className="rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
                                    <p className="font-extrabold en-text">Product ciphers — Shannon&apos;s idea</p>
                                    <p className="font-extrabold ar-text">الشيفرة المركبة — فكرة شانون</p>
                                    <p className="text-stone-600 dark:text-stone-300 en-text"><b>Confusion</b> (substitution) obscures key↔ciphertext links; <b>diffusion</b> (transposition) spreads each letter&apos;s influence. Rounds of both → DES and AES.</p>
                                    <p className="text-stone-600 dark:text-stone-300 ar-text">الإشوشة (الإحلال) تحجب علاقة المفتاح بالنص المشفر، والانتشار (التبديل) ينشر تأثير كل حرف. جولات منهما معًا → DES وAES.</p>
                                </div>
                            </div>
                        </section>
                    </Reveal>

                    {/* Summary table */}
                    <Reveal>
                        <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft overflow-x-auto">
                            <h4 className="text-xl font-extrabold">
                                <span className="en-text">Summary — every cipher on one card</span>
                                <span className="ar-text">الملخص — كل الشيفرة على بطاقة واحدة</span>
                            </h4>
                            <table className="mt-3 w-full text-sm text-start">
                                <thead>
                                    <tr className="border-b border-stone-200 dark:border-white/10 font-extrabold text-start">
                                        <th className="py-2 pe-3 text-start en-text">Cipher</th>
                                        <th className="py-2 pe-3 text-start ar-text">الشيفرة</th>
                                        <th className="py-2 pe-3 text-start en-text">Type</th>
                                        <th className="py-2 pe-3 text-start ar-text">النوع</th>
                                        <th className="py-2 pe-3 text-start en-text">Key space</th>
                                        <th className="py-2 pe-3 text-start ar-text">فضاء المفاتيح</th>
                                        <th className="py-2 pe-3 text-start en-text">Broken by</th>
                                        <th className="py-2 pe-3 text-start ar-text">يُكسر بـ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 dark:divide-white/10">
                                    {[
                                        { c: "Atbash", t: ["Monoalphabetic", "إحلال أحادي"], k: "1", b: ["trivially", "فورًا"] },
                                        { c: "Caesar / Additive", t: ["Monoalphabetic", "إحلال أحادي"], k: "25", b: ["brute force", "القوة الغاشمة"] },
                                        { c: "Multiplicative", t: ["Monoalphabetic", "إحلال أحادي"], k: "12", b: ["brute force", "القوة الغاشمة"] },
                                        { c: "Affine", t: ["Monoalphabetic", "إحلال أحادي"], k: "312", b: ["brute force + frequency", "القوة الغاشمة وتحليل التكرار"] },
                                        { c: "ROT13", t: ["Monoalphabetic", "إحلال أحادي"], k: "1", b: ["trivially", "فورًا"] },
                                        { c: "Simple Vigenère", t: ["Polyalphabetic", "تعدد الأبجديات"], k: "26ᵐ", b: ["Kasiski / IC", "كاسكي ومعامل التزامن"] },
                                        { c: "One-Time Pad", t: ["Polyalphabetic", "تعدد الأبجديات"], k: "∞", b: ["nothing — but impractical", "لا شيء — لكنه غير عملي"] },
                                        { c: "Playfair", t: ["Polygram", "إحلال المجموعات"], k: "25! (matrix)", b: ["digraph frequency", "تكرار الأزواج"] },
                                        { c: "Hill", t: ["Polygram", "إحلال المجموعات"], k: "invertible det", b: ["known plaintext", "النص المعروف"] },
                                        { c: "Columnar / Rail fence", t: ["Transposition", "تبديل"], k: "k rails / m! orders", b: ["digram analysis", "تحليل الأزواج"] },
                                        { c: "Product ciphers", t: ["Sub + Trans", "إحلال وتبديل"], k: "—", b: ["foundation of DES/AES", "أساس DES/AES"] },
                                    ].map((r) => (
                                        <tr key={r.c}>
                                            <td className="py-2 pe-3 font-bold font-code">{r.c}</td>
                                            <td className="py-2 pe-3 font-bold en-text">{r.t[0]}</td>
                                            <td className="py-2 pe-3 font-bold ar-text">{r.t[1]}</td>
                                            <td className="py-2 pe-3 font-code text-ember dark:text-orange-300">{r.k}</td>
                                            <td className="py-2 pe-3 en-text">{r.b[0]}</td>
                                            <td className="py-2 pe-3 ar-text">{r.b[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </Reveal>

                    {/* Homework */}
                    <Reveal>
                        <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                            <h4 className="text-xl font-extrabold">
                                <span className="en-text">Homework</span>
                                <span className="ar-text">الواجب</span>
                            </h4>
                            <ol className="mt-3 divide-y divide-stone-200 dark:divide-white/10 text-sm">
                                {[
                                    { en: "Encrypt “ministry of higher education” with Atbash, Affine (a=5, b=7), Vigenère (key BORG) and Playfair (keyword SECURITY).", ar: "شفِّر ministry of higher education بـ Atbash ثم الأفيني (٥، ٧) وفينير بالمفتاح BORG وبليفير بكلمة SECURITY." },
                                    { en: "Decrypt RSOCZEIE — it was produced by the Hill cipher with K = [[5,17],[4,15]].", ar: "فك تشفير RSOCZEIE الناتجة عن شيفرة هيل بالمصفوفة K = [[5,17],[4,15]]." },
                                    { en: "Encrypt “cryptography is fun” with a columnar transposition, key CIPHER.", ar: "شفِّر cryptography is fun بالتبديل العمودي بالمفتاح CIPHER." },
                                    { en: "Show with one concrete example why frequency analysis defeats every monoalphabetic cipher.", ar: "بيّن بمثال محدد لماذا يهزم تحليل التكرار كل شيفرة أحادية الأبجدية." },
                                    { en: "Explain why the One-Time Pad is unbreakable yet impractical.", ar: "اشرح لماذا الوسادة العابرة غير قابلة للكسر وغير عملية في الوقت نفسه." },
                                ].map((h, i) => (
                                    <li key={i} className="py-3 flex gap-4">
                                        <span className="font-code font-bold text-ember dark:text-orange-300">{i + 1}</span>
                                        <p className="en-text">{h.en}</p>
                                        <p className="ar-text">{h.ar}</p>
                                    </li>
                                ))}
                            </ol>
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
                            href="/cyber/lecture-2/quiz"
                            badge="50"
                            primary
                            en="Lecture 2 quiz · 50 questions"
                            ar="اختبار المحاضرة ٢ · ٥٠ سؤالًا"
                            dEn="Ten short sets of five. Answer all five, check the set, see why, then get a final score."
                            dAr="عشر مجموعات من خمسة أسئلة. أجب عن الخمسة، تحقق من المجموعة، تعرف السبب، ثم تحصل على النتيجة النهائية."
                            metaEn="10 sets · check by set · result"
                            metaAr="١٠ مجموعات · فحص بالمجموعة · نتيجة"
                        />
                        <ResourceCard
                            href="/cyber/quiz"
                            badge="?"
                            primary
                            en="Full quiz app · Lectures 1 & 2"
                            ar="تطبيق الاختبار الكامل · المحاضرتان ١ و٢"
                            dEn="12 questions, one at a time — score, verdict and full review at the end."
                            dAr="١٢ سؤالًا واحدًا تلو الآخر — النتيجة والحكم والمراجعة الكاملة في النهاية."
                            metaEn="result screen · retry · EN/AR"
                            metaAr="شاشة نتيجة · إعادة · عربي/إنجليزي"
                        />
                        <ResourceCard
                            href="/cyber/lecture-1"
                            badge="CS"
                            en="Previous: Introduction to Cyber Security"
                            ar="السابقة: مقدمة في الأمن السيبراني"
                            dEn="Lecture 1 — the CIA triad, attack types and the security model."
                            dAr="المحاضرة الأولى — ثالوث CIA وأنواع الهجمات ونموذج الأمن."
                            metaEn="lecture 01 · recap base"
                            metaAr="المحاضرة ٠١ · أساس المراجعة"
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
                Classical Encryption Techniques · Lecture 2 · Borg El Arab Technological
                University
            </footer>
        </>
    );
}
