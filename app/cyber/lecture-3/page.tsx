import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Reveal, { ScrollToButton } from "@/components/page-chrome";
import Resources, { ResourceCard } from "@/components/resource-card";
import CipherLab from "@/components/cyber/cipher-lab";

export const metadata: Metadata = {
  title: "Lecture 3: Classical Encryption/Decryption Techniques",
  description:
    "Lecture 3: types of encryption, characterization, substitution families, the Vigenère cipher, the Playfair cipher and row/multiple transposition — with worked examples and a 50-question bilingual quiz in ten checked sets.",
};

/* The MONARCHY Playfair matrix from the lecture slides. */
const PLAYFAIR_ROWS = [
  ["M", "O", "N", "A", "R"],
  ["C", "H", "Y", "B", "D"],
  ["E", "F", "G", "I/J", "K"],
  ["L", "P", "Q", "S", "T"],
  ["U", "V", "W", "X", "Z"],
];

/* Row-transposition example grid: key 4312567 over 7-character rows. */
const TRANSPOSE_ROWS = ["attackp", "ostpone", "duntilt", "woamxyz"];
const TRANSPOSE_KEY = [4, 3, 1, 2, 5, 6, 7];

export default function CyberLecture3() {
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
            CyberSec_Lec3
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 items-center pt-14 lg:pt-20 pb-10">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-3">
              BORG EL ARAB TECHNOLOGICAL UNIVERSITY · CHAPTER 2 · LECTURE 3
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] pb-1">
              <span className="en-text">Classical Encryption / Decryption.</span>
              <span className="ar-text">التشفير وفك التشفير الكلاسيكي.</span>
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[60ch] mt-4">
              <span className="en-text">
                Types of encryption, how ciphers are characterized, the
                substitution families, then three working machines: Vigenère,
                Playfair and transposition — each with its formula and its
                worked example.
              </span>
              <span className="ar-text">
                أنواع التشفير، وكيف تُوصَّف الشيفرات، وعائلات الإحلال، ثم ثلاث
                آلات عاملة: فينير وبليفير والتبديل — كل منها بصيغته ومثاله
                المحلول.
              </span>
            </p>
            <div className="mt-6">
              <ScrollToButton
                targetId="chapter"
                arrow="↓"
                className="min-h-[48px] px-7 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift"
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
                  <span className="text-stone-600 dark:text-stone-300">Vigenère</span>
                  <span className="font-bold">C = (p + k) mod 26</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-300">
                    <span className="en-text">Shift 3 key</span>
                    <span className="ar-text">مفتاح الإزاحة ٣</span>
                  </span>
                  <span className="font-bold">k = d</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-300">Playfair</span>
                  <span className="font-bold">5 × 5 (I/J)</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-300">Hill</span>
                  <span className="font-bold">C = K·P mod 26</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-300">
                    <span className="en-text">Transposition</span>
                    <span className="ar-text">التبديل</span>
                  </span>
                  <span className="font-bold">read columns by key</span>
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
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">2</dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Encryption types — classical and modern</dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">نوعا التشفير — الكلاسيكي والحديث</dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">26</dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Caesar rows make the Vigenère table</dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">٢٦ صف قيصر تصنع جدول فينير</dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">5×5</dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Playfair matrix, I/J in one cell</dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">مصفوفة بليفير، I/J في خلية واحدة</dd>
            </div>
            <div className="p-4">
              <dt className="font-code text-2xl font-extrabold text-ember dark:text-orange-300">7</dt>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 en-text">Column key digits in the transposition example</dd>
              <dd className="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-0.5 ar-text">أرقام المفتاح في مثال التبديل</dd>
            </div>
          </dl>
        </Reveal>

        {/* CHAPTER */}
        <div id="chapter" className="pt-12 scroll-mt-24">
          <Reveal>
            <p className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-2">
              CHAPTER 2 · CLASSICAL ENCRYPTION / DECRYPTION
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="en-text">From types to three working ciphers</span>
              <span className="ar-text">من الأنواع إلى ثلاث شيفرات عاملة</span>
            </h3>
          </Reveal>

          {/* Types of encryption */}
          <Reveal>
            <section className="mt-8 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Types of encryption</span>
                <span className="ar-text">أنواع التشفير</span>
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">1 — Classical encryption</p>
                  <p className="font-extrabold ar-text">١ — التشفير الكلاسيكي</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Hand-era ciphers built on substitution and transposition: Caesar, Vigenère, Playfair, Hill, rail fence.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">شيفرات العصر اليدوي القائمة على الإحلال والتبديل: قيصر وفينير وبليفير وهيل وسكة الحديد.</p>
                </div>
                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">2 — Modern encryption</p>
                  <p className="font-extrabold ar-text">٢ — التشفير الحديث</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Computer-era ciphers: block and stream systems, DES, AES and public-key schemes.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">شيفرات عصر الحاسوب: الأنظمة الكتلية والتدفقية وDES وAES والمفاتيح العامة.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Characterization */}
          <Reveal>
            <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Characterization — operations that transform plaintext</span>
                <span className="ar-text">التوصيف — العمليات التي تحوّل النص الأصلي</span>
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm">
                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">Substitution</p>
                  <p className="font-extrabold ar-text">الإحلال</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Each element is mapped to another element.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">كل عنصر يُستبدل بعنصر آخر.</p>
                </div>
                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">Transposition</p>
                  <p className="font-extrabold ar-text">التبديل</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Elements are reordered; positions change, identities stay.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">تُعاد ترتيب العناصر؛ تتغير المواضع وتبقى الهويات.</p>
                </div>
                <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                  <p className="font-extrabold en-text">Product systems</p>
                  <p className="font-extrabold ar-text">الأنظمة المركبة</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Stack substitution and transposition together.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">تجمع الإحلال والتبديل معًا.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Substitution families */}
          <Reveal>
            <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft overflow-x-auto">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Substitution cipher techniques</span>
                <span className="ar-text">تقنيات شيفرة الإحلال</span>
              </h4>
              <table className="mt-3 w-full text-sm text-start">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-white/10 font-extrabold">
                    <th className="py-2 pe-3 text-start en-text">Family</th>
                    <th className="py-2 pe-3 text-start ar-text">العائلة</th>
                    <th className="py-2 pe-3 text-start en-text">Ciphers</th>
                    <th className="py-2 pe-3 text-start ar-text">الشيفرات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-white/10">
                  {[
                    { f: ["Monoalphabetic", "أحادية الأبجدية"], c: "Affine · Caesar · ROT13 · Atbash · Additive · Multiplicative" },
                    { f: ["Polyalphabetic", "متعددة الأبجديات"], c: "Simple Vigenère · Full Vigenère" },
                    { f: ["PolyGram", "المجموعات"], c: "Playfair · Hill" },
                    { f: ["Homophonic / Matrix", "المتجانس / المصفوفة"], c: "Homophonic substitution · Transposition matrix" },
                  ].map((r) => (
                    <tr key={r.f[0]}>
                      <td className="py-2 pe-3 font-bold en-text">{r.f[0]}</td>
                      <td className="py-2 pe-3 font-bold ar-text">{r.f[1]}</td>
                      <td className="py-2 pe-3 font-code text-ember dark:text-orange-300 en-text">{r.c}</td>
                      <td className="py-2 pe-3 font-code text-ember dark:text-orange-300 ar-text">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </Reveal>

          {/* Vigenère */}
          <Reveal>
            <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Vigenère — a different Caesar per letter</span>
                <span className="ar-text">فينير — قيصر مختلف لكل حرف</span>
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-stone-600 dark:text-stone-300">
                <li className="flex gap-2">
                  <span className="text-ember dark:text-orange-300 font-bold">▸</span>
                  <span>
                    <span className="en-text">It uses different monoalphabetic substitutions as it proceeds through the plaintext; a table of related rules is used and the key picks the rule.</span>
                    <span className="ar-text">يستخدم إحلالات أحادية مختلفة أثناء تقدمه في النص؛ يُستعمل جدول قواعد مترابطة ويختار المفتاح القاعدة.</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ember dark:text-orange-300 font-bold">▸</span>
                  <span>
                    <span className="en-text">The table holds 26 Caesar ciphers, shifts 0–25. Each is denoted by a key letter; Caesar with shift 3 has k = d.</span>
                    <span className="ar-text">يضم الجدول ٢٦ شيفرة قيصر بإزاحات ٠–٢٥، كل منها يُرمز بحرف مفتاح؛ قيصر بإزاحة ٣ له k = d.</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ember dark:text-orange-300 font-bold">▸</span>
                  <span>
                    <span className="en-text">One plaintext letter can encrypt to several ciphertext letters — an improvement over Playfair. If the key is N letters, the cipher is N monoalphabetic substitutions.</span>
                    <span className="ar-text">قد يُشفَّر الحرف الواحد إلى عدة حروف — تحسين على بليفير. وإذا كان المفتاح N حرفًا فالشيفرة N إحلالًا أحاديًا.</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ember dark:text-orange-300 font-bold">▸</span>
                  <span>
                    <span className="en-text">The periodic key can be broken by using a nonrepeating keyword as long as the message, with no statistical relation to it.</span>
                    <span className="ar-text">يمكن كسر دورية المفتاح باستخدام كلمة غير متكررة بطول الرسالة دون علاقة إحصائية بها.</span>
                  </span>
                </li>
              </ul>

              {/* Worked example */}
              <div className="mt-4 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-4">
                <p className="font-code text-xs font-bold text-ember dark:text-orange-300">
                  <span className="en-text">WORKED EXAMPLE · HELLO + CAT</span>
                  <span className="ar-text">مثال محلول · HELLO + CAT</span>
                </p>
                <p className="font-code text-sm mt-2">
                  <span className="text-stone-500 dark:text-stone-400">key:</span>{" "}
                  CATCA · <span className="text-stone-500 dark:text-stone-400">plain:</span>{" "}
                  HELLO
                </p>
                <div className="mt-2 grid grid-cols-5 gap-1.5 font-code text-center text-sm">
                  {[
                    ["H", "C", "J"],
                    ["E", "A", "E"],
                    ["L", "T", "E"],
                    ["L", "C", "N"],
                    ["O", "A", "O"],
                  ].map(([p, k, c]) => (
                    <div key={p + k} className="rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] py-2">
                      <p className="text-[10px] text-stone-500 dark:text-stone-400">{p}+{k}</p>
                      <p className="font-extrabold text-ember dark:text-orange-300">{c}</p>
                    </div>
                  ))}
                </div>
                <p className="font-code text-sm mt-2 font-bold">
                  <span className="text-stone-500 dark:text-stone-400">cipher:</span>{" "}
                  JEENO
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  <span className="en-text">Note L (11) + T (19) = 30 → 30 mod 26 = 4 = E.</span>
                  <span className="ar-text">لاحظ L (١١) + T (١٩) = ٣٠ ← ٣٠ بمعامل ٢٦ = ٤ = E.</span>
                </p>
              </div>
            </section>
          </Reveal>

          {/* Cipher lab */}
          <Reveal>
            <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Cipher lab — try the Vigenère key live</span>
                <span className="ar-text">مختبر الشيفرة — جرّب مفتاح فينير مباشرة</span>
              </h4>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                <span className="en-text">
                  Pick “Vigenère”, type a keyword, and watch each letter shift by
                  its own Caesar row.
                </span>
                <span className="ar-text">
                  اختر «فينير» واكتب كلمة مفتاحية، وشاهد كل حرف يُزاح بصف قيصر الخاص به.
                </span>
              </p>
              <CipherLab />
            </section>
          </Reveal>

          {/* Playfair */}
          <Reveal>
            <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                <h4 className="text-xl font-extrabold">
                  <span className="en-text">Playfair — encrypt pairs, not letters</span>
                  <span className="ar-text">بليفير — تشفير الأزواج لا الحروف</span>
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                  <span className="en-text">The most common digraphic system. A 5 × 5 matrix is filled from the keyword (I/J share one cell), then the rest of the alphabet.</span>
                  <span className="ar-text">أشهر نظام ثنائي الحروف. تُملأ مصفوفة ٥ × ٥ من الكلمة المفتاحية (I وJ في خلية واحدة) ثم بقية الأبجدية.</span>
                </p>
                <p className="font-code text-xs font-bold text-ember dark:text-orange-300 mt-3">
                  MONARCHY MATRIX
                </p>
                <div className="mt-2 grid grid-cols-5 gap-1.5 font-code text-center">
                  {PLAYFAIR_ROWS.flat().map((cell, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 py-2 text-sm font-bold"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                  <span className="en-text">Split plaintext into digraphs; double letters get an X filler; pad the end.</span>
                  <span className="ar-text">قسّم النص إلى أزواج؛ الحروف المزدوجة تُفصل بـ X؛ واحشُ النهاية.</span>
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft">
                <h4 className="text-xl font-extrabold">
                  <span className="en-text">The three Playfair rules</span>
                  <span className="ar-text">قواعد بليفير الثلاث</span>
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                    <p className="font-extrabold en-text">Rule 1 — same row</p>
                    <p className="font-extrabold ar-text">القاعدة ١ — الصف نفسه</p>
                    <p className="text-stone-600 dark:text-stone-300 en-text">Each letter → letter to its right, wrapping. “AR” → “RM”.</p>
                    <p className="text-stone-600 dark:text-stone-300 ar-text">كل حرف ← الحرف على يمينه مع الالتفاف. «AR» ← «RM».</p>
                  </li>
                  <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                    <p className="font-extrabold en-text">Rule 2 — same column</p>
                    <p className="font-extrabold ar-text">القاعدة ٢ — العمود نفسه</p>
                    <p className="text-stone-600 dark:text-stone-300 en-text">Each letter → letter below, wrapping. “MU” → “CM”.</p>
                    <p className="text-stone-600 dark:text-stone-300 ar-text">كل حرف ← الحرف أسفله مع الالتفاف. «MU» ← «CM».</p>
                  </li>
                  <li className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
                    <p className="font-extrabold en-text">Rule 3 — rectangle</p>
                    <p className="font-extrabold ar-text">القاعدة ٣ — المستطيل</p>
                    <p className="text-stone-600 dark:text-stone-300 en-text">Own row, the other letter&apos;s column. “HS” → “BP”, “EA” → “IM” or “JM”.</p>
                    <p className="text-stone-600 dark:text-stone-300 ar-text">صفّه نفسه وعمود الحرف الآخر. «HS» ← «BP» و«EA» ← «IM» أو «JM».</p>
                  </li>
                </ul>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                  <span className="en-text"><b>Cryptanalysis:</b> the slide points to brute force.</span>
                  <span className="ar-text"><b>تحليل الشيفرة:</b> تشير الشريحة إلى القوة الغاشمة.</span>
                </p>
              </div>
            </section>
          </Reveal>

          {/* Transposition */}
          <Reveal>
            <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft overflow-x-auto">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Transposition — shuffle the positions</span>
                <span className="ar-text">التبديل — خلط المواضع</span>
              </h4>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                <span className="en-text">A transposition cipher reorders (permutes) symbols in a block. Row transposition writes the message in a rectangle row by row, reads it column by column, and permutes the column order — that order is the key.</span>
                <span className="ar-text">شيفرة التبديل تعيد ترتيب (تخلط) الرموز في كتلة. تبديل الصفوف يكتب الرسالة في مستطيل صفًا صفًا ويقرؤها عمودًا عمودًا ويخلط ترتيب الأعمدة — وهذا الترتيب هو المفتاح.</span>
              </p>

              <p className="font-code text-xs font-bold text-ember dark:text-orange-300 mt-4">
                <span className="en-text">EXAMPLE · KEY 4312567</span>
                <span className="ar-text">مثال · المفتاح 4312567</span>
              </p>
              <div className="mt-2 inline-block font-code text-sm">
                <div className="grid grid-cols-[auto_repeat(7,2.25rem)] gap-1">
                  <span className="px-1 text-[10px] text-stone-500 dark:text-stone-400 self-center">key</span>
                  {TRANSPOSE_KEY.map((k) => (
                    <span
                      key={k}
                      className="rounded-md bg-ember/10 dark:bg-orange-300/10 text-ember dark:text-orange-300 font-bold text-center py-1"
                    >
                      {k}
                    </span>
                  ))}
                  {TRANSPOSE_ROWS.map((row, r) => (
                    <div key={row} className="contents">
                      <span className="px-1 text-[10px] text-stone-500 dark:text-stone-400">
                        {r + 1}
                      </span>
                      {row.split("").map((ch, c) => (
                        <span
                          key={`${r}-${c}`}
                          className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] text-center py-1"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3 font-code text-sm">
                <p>
                  <span className="text-stone-500 dark:text-stone-400">ciphertext:</span>{" "}
                  <span className="font-bold">TTNAAPTMTSUOAODWCOIXKNLYPETZ</span>
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  <span className="en-text">Read column 3 first (key 1), then 4, then 2, then 1, then 5, 6, 7.</span>
                  <span className="ar-text">اقرأ العمود ٣ أولًا (المفتاح ١) ثم ٤ ثم ٢ ثم ١ ثم ٥ و٦ و٧.</span>
                </p>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <div className="rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
                  <p className="font-extrabold en-text">Multiple transpositions</p>
                  <p className="font-extrabold ar-text">التبديل المتعدد</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Apply the transposition a second time — the output of the first pass becomes the input of the second.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">طبّق التبديل مرة ثانية — يصبح ناتج المرور الأول مدخلًا للمرور الثاني.</p>
                </div>
                <div className="rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
                  <p className="font-extrabold en-text">Why it looks safe but isn&apos;t</p>
                  <p className="font-extrabold ar-text">لماذا تبدو آمنة وهي ليست</p>
                  <p className="text-stone-600 dark:text-stone-300 en-text">Letter frequencies stay 100% English, so the analyst sees an anagram of English and recovers columns from digram patterns.</p>
                  <p className="text-stone-600 dark:text-stone-300 ar-text">تبقى تكرارات الحروف إنجليزية تمامًا، فيرى المحلل تبديلًا لحروف النص ويعيد بناء الأعمدة من أنماط الأزواج.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Summary table */}
          <Reveal>
            <section className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft overflow-x-auto">
              <h4 className="text-xl font-extrabold">
                <span className="en-text">Summary — this lecture on one card</span>
                <span className="ar-text">الملخص — هذه المحاضرة على بطاقة واحدة</span>
              </h4>
              <table className="mt-3 w-full text-sm text-start">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-white/10 font-extrabold">
                    <th className="py-2 pe-3 text-start en-text">Cipher</th>
                    <th className="py-2 pe-3 text-start ar-text">الشيفرة</th>
                    <th className="py-2 pe-3 text-start en-text">Family</th>
                    <th className="py-2 pe-3 text-start ar-text">العائلة</th>
                    <th className="py-2 pe-3 text-start en-text">Key / unit</th>
                    <th className="py-2 pe-3 text-start ar-text">المفتاح / الوحدة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-white/10">
                  {[
                    { c: "Vigenère", f: ["Polyalphabetic", "متعددة الأبجديات"], k: ["keyword → 26 Caesar rows", "كلمة مفتاحية → ٢٦ صف قيصر"] },
                    { c: "Playfair", f: ["PolyGram / digraphic", "المجموعات / ثنائية"], k: ["5×5 keyword matrix", "مصفوفة ٥×٥ بكلمة مفتاحية"] },
                    { c: "Hill", f: ["PolyGram", "المجموعات"], k: ["m×m matrix, det coprime 26", "مصفوفة m×m بمحدد أولي مع ٢٦"] },
                    { c: "Row transposition", f: ["Transposition", "تبديل"], k: ["column order", "ترتيب الأعمدة"] },
                    { c: "Multiple transposition", f: ["Transposition", "تبديل"], k: ["two column orders", "ترتيبان للأعمدة"] },
                  ].map((r) => (
                    <tr key={r.c}>
                      <td className="py-2 pe-3 font-bold font-code">{r.c}</td>
                      <td className="py-2 pe-3 font-bold en-text">{r.f[0]}</td>
                      <td className="py-2 pe-3 font-bold ar-text">{r.f[1]}</td>
                      <td className="py-2 pe-3 en-text">{r.k[0]}</td>
                      <td className="py-2 pe-3 ar-text">{r.k[1]}</td>
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
                  { en: "Encrypt “HELLO” with Vigenère using keyword CAT, then repeat with keyword BORG.", ar: "شفِّر «HELLO» بفينير بالكلمة المفتاحية CAT ثم أعد بالمفتاح BORG." },
                  { en: "Build the Playfair matrix for keyword MONARCHY and encrypt the digraphs AR, MU and HS by hand.", ar: "ابنِ مصفوفة بليفير للكلمة MONARCHY وشفّر الأزواج AR وMU وHS يدويًا." },
                  { en: "Write every B under the letter of the alphabet that encrypts it in Vigenère with key d.", ar: "اكتب ناتج تشفير الحرف B بفينير بمفتاح d." },
                  { en: "Run the row transposition with key 4312567 on “attackpostponeduntiltwoamxyz” and explain the column order.", ar: "طبّق تبديل الصفوف بالمفتاح 4312567 على «attackpostponeduntiltwoamxyz» واشرح ترتيب الأعمدة." },
                  { en: "Explain why transposition hides no letter frequencies while Vigenère hides some.", ar: "اشرح لماذا لا يخفي التبديل تكرارات الحروف بينما يخفي فينير بعضها." },
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
              href="/cyber/lecture-3/quiz"
              badge="50"
              primary
              en="Lecture 3 quiz · 50 questions"
              ar="اختبار المحاضرة ٣ · ٥٠ سؤالًا"
              dEn="Ten short sets of five. Check every answer, see why, then get a final score."
              dAr="عشر مجموعات من خمسة أسئلة. تحقق من كل إجابة وتعرف السبب ثم تحصل على النتيجة النهائية."
              metaEn="10 checked sets · result · retry"
              metaAr="١٠ مجموعات مفحوصة · نتيجة · إعادة"
            />
            <ResourceCard
              href="/cyber/lecture-2"
              badge="CS"
              en="Previous: Classical Encryption Techniques"
              ar="السابقة: تقنيات التشفير الكلاسيكية"
              dEn="Lecture 2 — the cipher model, monoalphabetic ciphers and the Caesar wheel."
              dAr="المحاضرة ٢ — نموذج الشيفرة والشيفرات أحادية الأبجدية وعجلة قيصر."
              metaEn="lecture 02 · recap base"
              metaAr="المحاضرة ٠٢ · أساس المراجعة"
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
        Classical Encryption / Decryption Techniques · Lecture 3 · Borg El Arab
        Technological University
      </footer>
    </>
  );
}
