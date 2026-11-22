"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/components/chrome";

/*
  Cipher lab: live classical encryption playground for Lecture 2.
  Pure client-side character math on A-Z input. No data leaves the page.
  Ciphers: Caesar (shift), Atbash, Multiplicative, Vigenère, Affine.
*/

const FOCUSV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

/* Only keys coprime with 26 can decrypt (one-to-one map). */
const MULT_KEYS = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

type CipherId = "caesar" | "atbash" | "mult" | "vigenere" | "affine";

const mod26 = (n: number) => ((n % 26) + 26) % 26;

const INV26: Record<number, number> = {
  1: 1, 3: 9, 5: 21, 7: 15, 9: 3, 11: 19,
  15: 7, 17: 23, 19: 11, 21: 5, 23: 17, 25: 25,
};

function encrypt(raw: string, id: CipherId, shift: number, key: number, aKey: number, bKey: number, vKey: string) {
  const letters = raw.toUpperCase().replace(/[^A-Z]/g, "").split("");
  return letters
    .map((ch, i) => {
      const p = ch.charCodeAt(0) - 65;
      let c: number;
      switch (id) {
        case "caesar":
          c = p + shift;
          break;
        case "atbash":
          c = 25 - p;
          break;
        case "mult":
          c = p * key;
          break;
        case "vigenere": {
          const k = vKey.replace(/[^A-Z]/gi, "").toUpperCase();
          if (!k) return ch;
          const s = k.charCodeAt(i % k.length) - 65;
          c = p + s;
          break;
        }
        case "affine":
          c = aKey * p + bKey;
          break;
      }
      return String.fromCharCode(65 + mod26(c));
    })
    .join("");
}

function formulaFor(id: CipherId, shift: number, key: number, aKey: number, bKey: number, lang: string) {
  switch (id) {
    case "caesar":
      return lang === "ar" ? `C = (p + ${shift}) mod 26` : `C = (p + ${shift}) mod 26`;
    case "atbash":
      return "C = (25 − p) mod 26";
    case "mult":
      return `C = (p × ${key}) mod 26`;
    case "vigenere":
      return "C = (pᵢ + kᵢ mod m) mod 26";
    case "affine":
      return `C = (${aKey}·p + ${bKey}) mod 26`;
  }
}

export default function CipherLab() {
  const lang = useLang();
  const [cipher, setCipher] = useState<CipherId>("caesar");
  const [plain, setPlain] = useState("security");
  const [shift, setShift] = useState(3);
  const [mKey, setMKey] = useState(9);
  const [aKey, setAKey] = useState(5);
  const [bKey, setBKey] = useState(8);
  const [vKey, setVKey] = useState("KEY");

  const output = useMemo(
    () => encrypt(plain, cipher, shift, mKey, aKey, bKey, vKey),
    [plain, cipher, shift, mKey, aKey, bKey, vKey],
  );

  const ar = lang === "ar";

  const NAMES: Record<CipherId, { en: string; ar: string }> = {
    caesar: { en: "Caesar / Additive", ar: "قيصر / الجمعي" },
    atbash: { en: "Atbash", ar: "أتباش" },
    mult: { en: "Multiplicative", ar: "الضربي" },
    vigenere: { en: "Vigenère", ar: "فينير" },
    affine: { en: "Affine", ar: "الأفيني" },
  };

  const chip =
    "min-h-[44px] px-3 py-2 rounded-xl font-code text-xs font-bold border transition";
  const chipOff =
    "border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 hover:border-ember";
  const chipOn =
    "border-ember dark:border-orange-300 bg-ember/10 dark:bg-orange-300/10 text-ember dark:text-orange-300";

  const selectCls = `min-h-[44px] rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 px-3 py-2 font-code text-sm font-bold ${FOCUSV}`;

  return (
    <div>
      {/* Cipher picker */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3" role="group" aria-label="Cipher">
        {(Object.keys(NAMES) as CipherId[]).map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={cipher === id}
            onClick={() => setCipher(id)}
            className={`${chip} ${cipher === id ? chipOn : chipOff} ${FOCUSV}`}
          >
            {ar ? NAMES[id].ar : NAMES[id].en}
          </button>
        ))}
      </div>

      {/* Plaintext input */}
      <label className="block mt-4">
        <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
          {ar ? "النص الأصلي (A–Z فقط)" : "Plaintext (A–Z only)"}
        </span>
        <input
          type="text"
          value={plain}
          onChange={(e) => setPlain(e.target.value)}
          placeholder="HELLO WORLD"
          className={`mt-1 w-full min-h-[44px] rounded-xl border border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 px-3 font-code text-sm ${FOCUSV}`}
        />
      </label>

      {/* Key controls */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {cipher === "caesar" && (
          <label className="block">
            <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
              {ar ? "الإزاحة k" : "Shift k"}
            </span>
            <input
              type="number" min={0} max={25} value={shift}
              onChange={(e) => setShift(Math.min(25, Math.max(0, Number(e.target.value) || 0)))}
              className={`mt-1 w-full ${selectCls}`}
            />
          </label>
        )}
        {cipher === "mult" && (
          <label className="block">
            <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
              {ar ? "المفتاح k (شرط gcd(k,26)=1)" : "Key k (gcd(k,26)=1)"}
            </span>
            <select
              value={mKey}
              onChange={(e) => setMKey(Number(e.target.value))}
              className={`mt-1 w-full ${selectCls}`}
            >
              {MULT_KEYS.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </label>
        )}
        {cipher === "affine" && (
          <>
            <label className="block">
              <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
                {ar ? "المضاعف a (gcd(a,26)=1)" : "Multiplier a (gcd(a,26)=1)"}
              </span>
              <select
                value={aKey}
                onChange={(e) => setAKey(Number(e.target.value))}
                className={`mt-1 w-full ${selectCls}`}
              >
                {MULT_KEYS.map((k) => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
                {ar ? "الإضافة b" : "Additive b"}
              </span>
              <input
                type="number" min={0} max={25} value={bKey}
                onChange={(e) => setBKey(Math.min(25, Math.max(0, Number(e.target.value) || 0)))}
                className={`mt-1 w-full ${selectCls}`}
              />
            </label>
          </>
        )}
        {cipher === "vigenere" && (
          <label className="block sm:col-span-3">
            <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400">
              {ar ? "الكلمة المفتاحية" : "Keyword"}
            </span>
            <input
              type="text"
              value={vKey}
              onChange={(e) => setVKey(e.target.value)}
              placeholder="KEY"
              className={`mt-1 w-full ${selectCls}`}
            />
          </label>
        )}
        {cipher === "atbash" && (
          <p className="font-code text-xs text-stone-500 dark:text-stone-400 sm:col-span-3 self-center">
            {ar
              ? "لا مفتاح — الأبجدية معكوسة، والتشفير نفسه فك التشفير."
              : "No key — the alphabet is reversed, and encryption is its own decryption."}
          </p>
        )}
      </div>

      {/* Live output */}
      <div className="mt-4 ide rounded-2xl font-mono text-[13px] leading-6">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-stone-400 text-xs">cipher_output</span>
          <span className="font-code text-[11px] font-semibold text-ember dark:text-orange-300">
            {formulaFor(cipher, shift, mKey, aKey, bKey, lang)}
          </span>
        </div>
        <div
          role="log"
          aria-live="polite"
          aria-label={ar ? "نص التشفير" : "Ciphertext output"}
          className="p-4 break-all text-emerald-200 min-h-[64px]"
        >
          {output || <span className="text-stone-500">—</span>}
        </div>
      </div>
    </div>
  );
}
