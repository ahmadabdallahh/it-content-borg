"use client";

import { useState } from "react";
import { CIA } from "@/lib/cyber-data";
import { useLang } from "@/components/chrome";

/*
  CIA triad explorer: three tab buttons (C / I / A) driving a single panel.
*/
export default function CiaTabs() {
  const lang = useLang();
  const [ciaIdx, setCiaIdx] = useState(0);
  const c = CIA[ciaIdx];

  return (
    <>
      <div className="flex gap-2 mt-3" role="tablist" aria-label="CIA pillars">
        {CIA.map((item, i) => (
          <button
            key={item.letter}
            type="button"
            className="cia-tab min-h-[44px] px-4 rounded-xl border border-stone-200 dark:border-white/10 font-bold text-sm transition"
            role="tab"
            aria-selected={i === ciaIdx}
            id={`ciaBtn${i}`}
            onClick={() => setCiaIdx(i)}
          >
            {item.letter}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        className="mt-3 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-4 text-sm leading-relaxed"
      >
        <p className="font-extrabold text-base mb-1">
          {lang === "en" ? c.t_en : c.t_ar}{" "}
          <span className="font-code text-xs text-ember dark:text-orange-300">
            ({c.letter})
          </span>
        </p>
        <p
          className="text-stone-700 dark:text-stone-200"
          dangerouslySetInnerHTML={{
            __html: lang === "en" ? c.b_en : c.b_ar,
          }}
        />
      </div>
    </>
  );
}
