"use client";

import { useState } from "react";
import { CIA } from "@/lib/cyber-data";
import { useLang } from "@/components/chrome";

/*
  CIA triad explorer: an animated SVG triangle plus three tab buttons driving
  one detail panel. The diagram mirrors the selected pillar; the buttons keep
  keyboard and screen-reader control simple.
*/
export default function CiaTabs() {
  const lang = useLang();
  const [ciaIdx, setCiaIdx] = useState(0);
  const c = CIA[ciaIdx];

  const nodes = [
    { x: 160, y: 38, letter: "C" },
    { x: 58, y: 232, letter: "I" },
    { x: 262, y: 232, letter: "A" },
  ];
  const mechanisms = [
    { en: "encryption", ar: "التشفير" },
    { en: "hashing", ar: "التجزئة" },
    { en: "data + services", ar: "البيانات + الخدمات" },
  ];

  return (
    <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-start">
      <div>
        <svg
          viewBox="0 0 320 280"
          className="w-full max-w-[340px] mx-auto"
          role="img"
          aria-labelledby="ciaDiagramTitle"
        >
          <title id="ciaDiagramTitle">
            {lang === "en"
              ? "Animated CIA triad: confidentiality, integrity and availability"
              : "ثالوث CIA متحرك: السرية والسلامة والتوافر"}
          </title>
          <g className="text-ember dark:text-orange-300">
            {[
              "M160 38 L58 232",
              "M58 232 L262 232",
              "M262 232 L160 38",
            ].map((d) => (
              <g key={d}>
                <path
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                />
                <path
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="lec-cia-edge"
                />
              </g>
            ))}
          </g>
          {nodes.map((node, i) => (
            <g
              key={node.letter}
              className="lec-cia-node"
              data-active={i === ciaIdx}
            >
              {i === ciaIdx && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="34"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="lec-cia-halo text-ember dark:text-orange-300"
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r="29"
                className="fill-white dark:fill-[#1a1815] stroke-stone-300 dark:stroke-white/20"
                strokeWidth="2"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="24"
                className="lec-cia-core fill-stone-100 dark:fill-white/10"
              />
              <text
                x={node.x}
                y={node.y + 7}
                textAnchor="middle"
                fontSize="22"
                fontWeight="800"
                className="fill-ember dark:fill-orange-300"
              >
                {node.letter}
              </text>
            </g>
          ))}
          <text
            x="160"
            y="272"
            textAnchor="middle"
            fontSize="11"
            className="fill-stone-500 dark:fill-stone-400"
          >
            {lang === "en" ? "one system · three guarantees" : "نظام واحد · ثلاث ضمانات"}
          </text>
        </svg>
        <div className="mt-1 grid grid-cols-3 gap-1.5 text-center text-[11px] font-semibold">
          {mechanisms.map((m, i) => (
            <span
              key={m.en}
              className={`rounded-lg border px-1 py-1.5 transition ${
                i === ciaIdx
                  ? "border-ember/60 bg-ember/10 dark:border-orange-300/60 dark:bg-orange-300/10 text-ember dark:text-orange-300"
                  : "border-stone-200 dark:border-white/10 text-stone-500 dark:text-stone-400"
              }`}
            >
              <span className="en-text">{m.en}</span>
              <span className="ar-text">{m.ar}</span>
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-2" role="tablist" aria-label="CIA pillars">
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
      </div>
    </div>
  );
}
