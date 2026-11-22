"use client";

import { useEffect, useState } from "react";

/*
  Hero visual: a real working miniature — types `print("Hello, world!")`,
  prints its result, and repeats. Static final state under reduced motion.
*/
export default function HeroTyping() {
  const [typed, setTyped] = useState("");
  const [out, setOut] = useState("");

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const t = setTimeout(() => {
        setTyped('print("Hello, world!")');
        setOut("Hello, world!");
      }, 0);
      return () => clearTimeout(t);
    }
    const code = 'print("Hello, world!")';
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (i <= code.length) {
        setTyped(code.slice(0, i++));
        setOut("");
        timer = setTimeout(tick, 55);
      } else {
        setOut("Hello, world!");
        timer = setTimeout(() => {
          i = 0;
          tick();
        }, 2600);
      }
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-bench text-stone-200 font-mono text-[13px] leading-7 p-4 min-h-[132px]"
      aria-label="Typing preview"
    >
      <div>
        <span className="text-stone-500">&gt;&gt;&gt; </span>
        <span>{typed}</span>
        <span className="typecaret" aria-hidden="true">
          &nbsp;
        </span>
      </div>
      <div className="text-emerald-300">{out}</div>
    </div>
  );
}

/* Hero CTA: press to start example 1, wired to the Lab via a window event. */
export function StartFirstButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("lab:start-first"))}
      className="min-h-[48px] px-7 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-[15px] transition shadow-lift"
    >
      ▶ <span className="en-text">Start with example 1</span>
      <span className="ar-text">ابدأ بالمثال الأول</span>
    </button>
  );
}
