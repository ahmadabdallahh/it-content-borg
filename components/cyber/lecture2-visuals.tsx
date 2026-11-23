"use client";

import { Fragment, useState, type CSSProperties } from "react";
import { useLang } from "@/components/chrome";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const mod26 = (n: number) => ((n % 26) + 26) % 26;

function shiftText(text: string, shift: number) {
  return text
    .toUpperCase()
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0) - 65;
      if (code < 0 || code > 25) return ch;
      return String.fromCharCode(65 + mod26(code + shift));
    })
    .join("");
}

/* ---------- Symmetric cipher model ---------- */
export function SymmetricCipherModel() {
  const lang = useLang();
  const [showKey, setShowKey] = useState(true);

  return (
    <section
      aria-labelledby="l2SymTitle"
      className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
            DIAGRAM · SYMMETRIC CIPHER
          </p>
          <h4 id="l2SymTitle" className="text-xl font-extrabold mt-1">
            <span className="en-text">One shared secret, two directions</span>
            <span className="ar-text">سر واحد مشترك، واتجاهان</span>
          </h4>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-[64ch]">
            <span className="en-text">
              The same key locks and unlocks the message. The channel carries
              ciphertext, while the opponent only watches it.
            </span>
            <span className="ar-text">
              المفتاح نفسه يغلق الرسالة ويفتحها. القناة تنقل النص المشفر،
              والخصم يراقبه فقط.
            </span>
          </p>
        </div>
        <button
          type="button"
          aria-pressed={showKey}
          onClick={() => setShowKey((v) => !v)}
          className="min-h-[44px] px-3 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:border-ember font-code text-xs font-bold transition"
        >
          {showKey ? (
            <>
              <span className="en-text">Hide key path</span>
              <span className="ar-text">إخفاء مسار المفتاح</span>
            </>
          ) : (
            <>
              <span className="en-text">Show key path</span>
              <span className="ar-text">إظهار مسار المفتاح</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-4 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3 sm:p-4 overflow-x-auto">
        <svg
          viewBox="0 0 1000 260"
          className="min-w-[800px] w-full"
          role="img"
          aria-labelledby="l2SymSvgTitle"
          direction="ltr"
        >
          <title id="l2SymSvgTitle">
            {lang === "en"
              ? "Plaintext passes through encryption with a shared secret key, crosses an untrusted channel as ciphertext, then passes through decryption with the same key back to plaintext. An opponent watches the channel."
              : "يمر النص الأصلي عبر التشفير بمفتاح سري مشترك، ثم يعبر قناة غير موثوقة كنص مشفر، ثم يمر عبر فك التشفير بالمفتاح نفسه ليعود نصًا أصليًا. الخصم يراقب القناة."}
          </title>
          <defs>
            <marker id="l2Arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0 0 L9 4.5 L0 9 z" fill="currentColor" />
            </marker>
          </defs>

          <g className="lec2-key-line" data-on={showKey}>
            <rect
              x="430"
              y="8"
              width="140"
              height="44"
              rx="12"
              className="fill-ember/10 stroke-ember/60 dark:fill-orange-300/10 dark:stroke-orange-300/60"
              strokeWidth="2"
            />
            <text
              x="500"
              y="27"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              className="fill-stone-900 dark:fill-stone-100"
            >
              {lang === "en" ? "Secret key K" : "المفتاح السري K"}
            </text>
            <text
              x="500"
              y="43"
              textAnchor="middle"
              fontSize="10"
              fontFamily="var(--font-code)"
              className="fill-stone-500 dark:fill-stone-400"
            >
              {lang === "en" ? "shared by both sides" : "مشترك بين الطرفين"}
            </text>
            <path
              d="M500 52 V68 H260 V85 M500 68 H740 V85"
              fill="none"
              stroke="currentColor"
              className="text-ember dark:text-orange-300 lec2-dash"
              strokeWidth="2.5"
            />
          </g>

          <g className="text-ember dark:text-orange-300">
            {[
              "M140 125 H180",
              "M340 125 H400",
              "M600 125 H660",
              "M820 125 H870",
            ].map((d) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                markerEnd="url(#l2Arrow)"
              />
            ))}
          </g>

          {[
            { x: 20, w: 120, label: lang === "en" ? "Plaintext X" : "النص الأصلي X", sub: "message", ember: false },
            { x: 180, w: 160, label: lang === "en" ? "Encryption E" : "التشفير E", sub: "E(K, X)", ember: true },
            { x: 400, w: 200, label: lang === "en" ? "Ciphertext Y" : "النص المشفر Y", sub: "untrusted channel", ember: false },
            { x: 660, w: 160, label: lang === "en" ? "Decryption D" : "فك التشفير D", sub: "D(K, Y)", ember: true },
            { x: 870, w: 120, label: lang === "en" ? "Plaintext X" : "النص الأصلي X", sub: "recovered", ember: false },
          ].map((node) => (
            <g key={node.x}>
              <rect
                x={node.x}
                y="95"
                width={node.w}
                height="60"
                rx="14"
                className={
                  node.ember
                    ? "fill-ember/10 stroke-ember/60 dark:fill-orange-300/10 dark:stroke-orange-300/60"
                    : "fill-white stroke-stone-300 dark:fill-[#24211d] dark:stroke-white/15"
                }
                strokeWidth="2"
              />
              <text
                x={node.x + node.w / 2}
                y="120"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                className="fill-stone-900 dark:fill-stone-100"
              >
                {node.label}
              </text>
              <text
                x={node.x + node.w / 2}
                y="140"
                textAnchor="middle"
                fontSize="10"
                fontFamily="var(--font-code)"
                className="fill-stone-500 dark:fill-stone-400"
              >
                {node.sub}
              </text>
            </g>
          ))}

          <circle cx="410" cy="125" r="6" className="lec2-packet fill-ember dark:fill-orange-300" />
          <path
            d="M500 155 V178"
            fill="none"
            stroke="currentColor"
            className="text-red-500 dark:text-red-400"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
          <circle cx="500" cy="199" r="19" className="fill-red-50 stroke-red-500 dark:fill-red-500/10 dark:stroke-red-400" strokeWidth="2" />
          <path
            d="M489 199c6-7 16-7 22 0-6 7-16 7-22 0zm11 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            fill="none"
            stroke="currentColor"
            className="text-red-500 dark:text-red-400"
            strokeWidth="1.5"
          />
          <text
            x="500"
            y="236"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            className="fill-red-600 dark:fill-red-300"
          >
            {lang === "en" ? "opponent watches the channel" : "الخصم يراقب القناة"}
          </text>
        </svg>
      </div>

      <p className="mt-3 font-code text-sm text-ember dark:text-orange-300" dir="ltr">
        Y = E(K, X) · X = D(K, Y)
      </p>
    </section>
  );
}

/* ---------- Operation taxonomy ---------- */
type Operation = "substitution" | "transposition" | "product";

export function CipherTaxonomy() {
  const lang = useLang();
  const [op, setOp] = useState<Operation>("substitution");

  const content: Record<
    Operation,
    { en: string; ar: string; lineEn: string; lineAr: string; tag: string }
  > = {
    substitution: {
      en: "Substitution",
      ar: "الإحلال",
      lineEn: "Each plaintext element maps to another element.",
      lineAr: "كل عنصر في النص الأصلي يُربط بعنصر آخر.",
      tag: "MAP",
    },
    transposition: {
      en: "Transposition",
      ar: "التبديل",
      lineEn: "Plaintext elements are rearranged; identities stay the same.",
      lineAr: "تُعاد ترتيب عناصر النص؛ هويتها لا تتغير.",
      tag: "MOVE",
    },
    product: {
      en: "Product systems",
      ar: "الأنظمة المركبة",
      lineEn: "Several substitution and transposition stages run in sequence.",
      lineAr: "تتعاقب عدة مراحل من الإحلال والتبديل.",
      tag: "MIX",
    },
  };

  const current = content[op];

  return (
    <section
      aria-labelledby="l2TaxTitle"
      className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
            TAXONOMY · OPERATIONS &amp; KEYS
          </p>
          <h4 id="l2TaxTitle" className="text-xl font-extrabold mt-1">
            <span className="en-text">How the plaintext is transformed</span>
            <span className="ar-text">كيف يتحول النص الأصلي</span>
          </h4>
        </div>
        <div
          role="group"
          aria-label={lang === "en" ? "Operation type" : "نوع العملية"}
          className="flex flex-wrap gap-1.5 rounded-xl bg-stone-900/[.04] dark:bg-white/5 p-1"
        >
          {(Object.keys(content) as Operation[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={op === key}
              onClick={() => setOp(key)}
              className={`min-h-[40px] px-3 rounded-lg text-sm font-bold transition ${
                op === key
                  ? "bg-ember text-white shadow-soft dark:bg-orange-700"
                  : "text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-white/10"
              }`}
            >
              <span className="en-text">{content[key].en}</span>
              <span className="ar-text">{content[key].ar}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        key={op}
        className="mt-4 lec2-fade-in rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-extrabold text-base">
            <span className="en-text">{current.en}</span>
            <span className="ar-text">{current.ar}</span>
          </p>
          <span className="font-code text-[11px] font-bold text-ember dark:text-orange-300">
            {current.tag}
          </span>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
          <span className="en-text">{current.lineEn}</span>
          <span className="ar-text">{current.lineAr}</span>
        </p>

        {op === "substitution" && (
          <div dir="ltr" className="mt-4 grid grid-cols-4 gap-2 max-w-sm">
            {ALPHABET.slice(0, 4).map((letter, i) => (
              <Fragment key={letter}>
                <div className="lec2-cell rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] py-2 text-center font-code font-bold" style={{ animationDelay: `${i * 0.06}s` }}>
                  {letter}
                  <span className="block text-[10px] text-stone-400">{i}</span>
                </div>
                <div className="lec2-cell rounded-lg border border-ember/40 bg-ember/10 dark:bg-orange-300/10 py-2 text-center font-code font-bold text-ember dark:text-orange-300" style={{ animationDelay: `${i * 0.06 + 0.08}s` }}>
                  {String.fromCharCode(65 + mod26(i + 3))}
                </div>
              </Fragment>
            ))}
          </div>
        )}

        {op === "transposition" && (
          <div dir="ltr" className="mt-4 flex flex-wrap items-center gap-2 font-code text-sm">
            {[
              ["1", "D"],
              ["2", "A"],
              ["3", "T"],
              ["4", "A"],
              ["5", "S"],
            ].map(([pos, letter], i) => (
              <div
                key={pos}
                className="lec2-cell rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] px-3 py-2 text-center"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="block text-[10px] text-stone-400">{pos}</span>
                <span className="font-bold">{letter}</span>
              </div>
            ))}
            <span className="text-ember dark:text-orange-300 font-bold">→</span>
            <span className="font-bold text-ember dark:text-orange-300">T D A S A</span>
          </div>
        )}

        {op === "product" && (
          <ol dir="ltr" className="mt-4 flex flex-wrap items-center gap-2">
            {[
              lang === "en" ? "Plaintext" : "النص الأصلي",
              lang === "en" ? "Substitution" : "الإحلال",
              lang === "en" ? "Transposition" : "التبديل",
              lang === "en" ? "Ciphertext" : "النص المشفر",
            ].map((label, i) => (
              <Fragment key={label}>
                <li
                  className={`lec2-step rounded-lg px-3 py-2 text-xs font-bold border ${
                    i === 1 || i === 2
                      ? "border-ember/50 bg-ember/10 text-ember dark:text-orange-300"
                      : "border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d]"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {label}
                </li>
                {i < 3 && <li aria-hidden="true" className="text-ember dark:text-orange-300 font-bold">→</li>}
              </Fragment>
            ))}
          </ol>
        )}
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
          <p className="font-extrabold en-text">Symmetric · same key</p>
          <p className="font-extrabold ar-text">متماثل · المفتاح نفسه</p>
          <p className="text-stone-600 dark:text-stone-300 en-text">Sender and receiver are equivalent; either can encrypt or decrypt.</p>
          <p className="text-stone-600 dark:text-stone-300 ar-text">الطرفان متكافآن؛ أي منهما يستطيع التشفير أو فك التشفير.</p>
        </div>
        <div className="rounded-xl border border-stone-200 dark:border-white/10 p-3">
          <p className="font-extrabold en-text">Asymmetric · different keys</p>
          <p className="font-extrabold ar-text">غير متماثل · مفتاحان مختلفان</p>
          <p className="text-stone-600 dark:text-stone-300 en-text">Public-key encryption gives sender and receiver different keys.</p>
          <p className="text-stone-600 dark:text-stone-300 ar-text">التشفير بالمفتاح العام يعطي المرسل والمستقبل مفتاحين مختلفين.</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {[
          { en: "Monoalphabetic · Caesar, ROT13, Atbash, Additive, Multiplicative, Affine", ar: "أحادي الأبجدية · قيصر، ROT13، أتباش، الجمعي، الضربي، الأفيني" },
          { en: "Polyalphabetic · simple Vigenère, full Vigenère", ar: "تعدد الأبجديات · فينير البسيط والكامل" },
          { en: "Polygram · Playfair, Hill", ar: "متعدد الحروف · بليفير، هيل" },
          { en: "Homophonic", ar: "متعدد المكافئات" },
        ].map((chip) => (
          <span
            key={chip.en}
            className="rounded-lg bg-stone-900/[.04] dark:bg-white/5 border border-stone-200 dark:border-white/10 px-2.5 py-1.5 font-code text-[10px] font-semibold"
          >
            <span className="en-text">{chip.en}</span>
            <span className="ar-text">{chip.ar}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Interactive Caesar shift wheel ---------- */
export function CaesarShiftWheel() {
  const lang = useLang();
  const [shift, setShift] = useState(3);
  const [sample, setSample] = useState("MEET ME AFTER THE TOGA PARTY");
  const cipher = shiftText(sample, shift);

  return (
    <section
      aria-labelledby="l2WheelTitle"
      className="mt-6 rounded-2xl border border-ember/50 dark:border-orange-300/50 bg-ember/5 dark:bg-orange-300/5 p-5 sm:p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
            MOTION GRAPHIC · CAESAR SHIFT
          </p>
          <h4 id="l2WheelTitle" className="text-xl font-extrabold mt-1">
            <span className="en-text">Move the key, watch both alphabets slide</span>
            <span className="ar-text">حرّك المفتاح وشاهد الأبجديتين تنزلقان</span>
          </h4>
        </div>
        <span className="font-code text-xs font-bold px-3 py-1.5 rounded-full bg-ember text-white dark:bg-orange-700">
          k = {shift}
        </span>
      </div>

      <label className="mt-4 block">
        <span className="flex flex-wrap justify-between gap-2 font-code text-xs font-semibold text-stone-600 dark:text-stone-300">
          <span className="en-text">Shift amount k · 1 to 25</span>
          <span className="ar-text">مقدار الإزاحة k · من ١ إلى ٢٥</span>
        </span>
        <input
          type="range"
          min={1}
          max={25}
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="mt-2 w-full accent-[#c2410c]"
          aria-label={lang === "en" ? "Caesar shift key" : "مفتاح إزاحة قيصر"}
        />
      </label>

      <div dir="ltr" className="mt-4 overflow-x-auto rounded-xl bg-white dark:bg-[#24211d] border border-stone-200 dark:border-white/10 p-3">
        <div className="min-w-[620px] space-y-1.5">
          <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[2px]">
            {ALPHABET.map((letter, i) => (
              <div
                key={`plain-${shift}-${letter}-${i}`}
                className="lec2-cell rounded text-center font-code text-[10px] py-1 bg-stone-900/[.04] dark:bg-white/5 text-stone-500 dark:text-stone-400"
                style={{ animationDelay: `${i * 0.012}s` }}
              >
                {letter}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[2px]">
            {ALPHABET.map((letter, i) => (
              <div
                key={`cipher-${shift}-${letter}-${i}`}
                className="lec2-cell rounded text-center font-code text-[11px] font-bold py-1 bg-ember/10 dark:bg-orange-300/10 text-ember dark:text-orange-300"
                style={{ animationDelay: `${i * 0.012 + 0.05}s` }}
              >
                {String.fromCharCode(65 + mod26(i + shift))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
        <label className="block">
          <span className="font-code text-xs font-semibold text-stone-600 dark:text-stone-300">
            <span className="en-text">Plaintext</span>
            <span className="ar-text">النص الأصلي</span>
          </span>
          <input
            type="text"
            value={sample}
            onChange={(e) => setSample(e.target.value)}
            dir="ltr"
            className="mt-1 w-full min-h-[44px] rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] px-3 font-code text-sm"
          />
        </label>
        <div>
          <p className="font-code text-xs font-semibold text-stone-600 dark:text-stone-300">
            <span className="en-text">Ciphertext</span>
            <span className="ar-text">النص المشفر</span>
          </p>
          <p
            dir="ltr"
            role="log"
            aria-live="polite"
            className="mt-1 min-h-[44px] rounded-xl border border-ember/30 dark:border-orange-300/30 bg-ember/5 dark:bg-orange-300/5 px-3 py-2.5 font-code text-sm font-bold break-all text-ember dark:text-orange-300"
          >
            {cipher || "—"}
          </p>
        </div>
      </div>

      <div dir="ltr" className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 font-code text-sm">
        <p className="rounded-lg bg-white dark:bg-[#24211d] border border-stone-200 dark:border-white/10 px-3 py-2">
          C = E({shift}, p) = (p + {shift}) mod 26
        </p>
        <p className="rounded-lg bg-white dark:bg-[#24211d] border border-stone-200 dark:border-white/10 px-3 py-2">
          p = D({shift}, C) = (C − {shift}) mod 26
        </p>
      </div>
      <p className="mt-2 text-xs text-stone-600 dark:text-stone-300">
        <span className="en-text">Wrap around: Z is followed by A. No letter leaves the alphabet.</span>
        <span className="ar-text">الالتفاف: يلي Z الحرف A. لا يخرج أي حرف من الأبجدية.</span>
      </p>
    </section>
  );
}

/* ---------- Worked Caesar exercise as a step pipeline ---------- */
export function CaesarExamplePipeline() {
  const lang = useLang();
  const steps = [
    {
      en: "Plaintext",
      ar: "النص الأصلي",
      valueEn: "THIS IS AN EXERCISE",
      valueAr: "THIS IS AN EXERCISE",
    },
    {
      en: "Encode A–Z",
      ar: "ترميز A–Z",
      valueEn: "A=0 … Z=25 · T=19, H=7",
      valueAr: "A=0 … Z=25 · T=19، H=7",
    },
    {
      en: "Add 20 · wrap 26",
      ar: "أضف ٢٠ · الالتفاف ٢٦",
      valueEn: "19+20=39 → 39−26=13 → N",
      valueAr: "19+20=39 ← 39−26=13 ← N",
    },
    {
      en: "Ciphertext",
      ar: "النص المشفر",
      valueEn: "NBCM CM UH YRYLWCMY",
      valueAr: "NBCM CM UH YRYLWCMY",
    },
  ];

  return (
    <section
      aria-labelledby="l2PipelineTitle"
      className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
    >
      <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
        WORKED EXAMPLE · SHIFT 20
      </p>
      <h4 id="l2PipelineTitle" className="text-xl font-extrabold mt-1">
        <span className="en-text">From THIS to NBCM, one letter at a time</span>
        <span className="ar-text">من THIS إلى NBCM، حرفًا بحرف</span>
      </h4>
      <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
        <span className="en-text">
          The lecture encodes A–Z as 0–25. Add the key, subtract 26 when the
          value passes Z, then map back to a letter.
        </span>
        <span className="ar-text">
          المحاضرة ترمز A–Z كـ ٠–٢٥. نضيف المفتاح، ونطرح ٢٦ عند تجاوز Z، ثم
          نعود إلى الحرف.
        </span>
      </p>

      <ol dir="ltr" className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
        {steps.map((step, i) => (
          <Fragment key={step.en}>
            <li
              className={`lec2-step rounded-xl border p-3 ${
                i === steps.length - 1
                  ? "border-ember/60 bg-ember/10 dark:bg-orange-300/10"
                  : "border-stone-200 dark:border-white/10 bg-stone-900/[.02] dark:bg-black/20"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="font-code text-[10px] font-bold text-ember dark:text-orange-300">
                0{i + 1}
              </span>
              <p className="text-xs font-extrabold mt-0.5">
                <span className="en-text">{step.en}</span>
                <span className="ar-text">{step.ar}</span>
              </p>
              <p className="font-code text-xs text-stone-600 dark:text-stone-300 mt-1 break-words">
                <span className="en-text">{step.valueEn}</span>
                <span className="ar-text">{step.valueAr}</span>
              </p>
            </li>
            {i < steps.length - 1 && (
              <li aria-hidden="true" className="hidden sm:grid place-items-center text-ember dark:text-orange-300 font-bold">
                →
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      <p dir="ltr" className="mt-4 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3 font-code text-xs text-stone-600 dark:text-stone-300">
        decrypt: N 13 − 20 = −7 + 26 = 19 → T
      </p>
    </section>
  );
}
