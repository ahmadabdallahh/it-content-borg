"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { DIAGRAMS } from "@/components/presentation/diagrams";
import { SLIDES, slideCardTitle, type Slide } from "@/lib/slides";
import { useLang } from "@/components/chrome";
import { LangToggle, ThemeToggle, BackButton } from "@/components/page-chrome";

const CTL =
  "min-h-[48px] px-6 rounded-xl font-bold text-sm transition border border-stone-200 dark:border-white/10 bg-white dark:bg-white/10 hover:bg-stone-900/5 dark:hover:bg-white/20 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";
const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

export default function Deck() {
  const lang = useLang();
  const [idx, setIdx] = useState(0);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const booted = useRef(false);

  const s: Slide = SLIDES[idx];
  const n = SLIDES.length;
  const dark = !!s.bg;
  const en = lang === "en";

  const go = useCallback(
    (i: number) => setIdx(Math.max(0, Math.min(i, SLIDES.length - 1))),
    [],
  );
  const next = useCallback(
    () => setIdx((i) => (i < SLIDES.length - 1 ? i + 1 : i)),
    [],
  );
  const prev = useCallback(() => setIdx((i) => (i > 0 ? i - 1 : i)), []);

  /* Initial hash deep-link (#s=N). Applied synchronously so the hash-sync
     effect runs after it and re-derives on re-render. */
  useEffect(() => {
    if (booted.current) return;
    booted.current = true;
    const m = window.location.hash.match(/#s=(\d+)/);
    if (m) go(parseInt(m[1], 10) - 1);
  }, [go]);

  /* Keep the URL hash in sync with the current slide. */
  useEffect(() => {
    if ((window.location.hash || "") !== `#s=${idx + 1}`) {
      window.history.replaceState(null, "", `#s=${idx + 1}`);
    }
  }, [idx]);

  /* Fullscreen state for the button label. */
  useEffect(() => {
    const onFs = () =>
      setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFull = useCallback(() => {
    const stage = document.getElementById("stage");
    if (document.fullscreenElement) document.exitFullscreen();
    else stage?.requestFullscreen().catch(() => {});
  }, []);

  const toggleOverview = useCallback(() => {
    setOverviewOpen((open) => {
      const willOpen = !open;
      if (!willOpen) return willOpen;
      // scroll into view after render
      setTimeout(() => {
        document
          .getElementById("overview")
          ?.scrollIntoView({ block: "nearest" });
      }, 0);
      return willOpen;
    });
  }, []);

  /* Keys: arrows move · F fullscreen · O overview · Home/End jump. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = e.target && (e.target as HTMLElement).tagName;
      if (/INPUT|TEXTAREA/.test(tag || "")) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        if (lang === "ar") prev();
        else next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        if (lang === "ar") next();
        else prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(SLIDES.length - 1);
      } else if (e.key.toLowerCase() === "f") {
        toggleFull();
      } else if (e.key.toLowerCase() === "o") {
        toggleOverview();
      } else if (e.key === "Escape") {
        setOverviewOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lang, next, prev, go, toggleFull, toggleOverview]);

  /* Touch swipe. */
  useEffect(() => {
    let x0: number | null = null;
    const st = stageRef.current;
    if (!st) return;
    const ts = (e: TouchEvent) => (x0 = e.touches[0].clientX);
    const te = (e: TouchEvent) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) < 40) return;
      if ((dx < 0) === en) next();
      else prev();
    };
    st.addEventListener("touchstart", ts, { passive: true });
    st.addEventListener("touchend", te, { passive: true });
    return () => {
      st.removeEventListener("touchstart", ts);
      st.removeEventListener("touchend", te);
    };
  }, [en, next, prev]);

  /* ---- slide body pieces (verbatim render() layout) ---- */
  const tcol = dark ? "text-stone-200" : "text-stone-700 dark:text-stone-200";
  const hsize = s.c ? "text-4xl sm:text-6xl" : "text-2xl sm:text-4xl";
  const head = (
    <h2
      className={`font-extrabold tracking-tight ${hsize} leading-tight ${dark ? "text-white" : ""}`}
    >
      {en ? s.t[0] : s.t[1]}
    </h2>
  );
  const items = s.p.map((x, i) => (
    <li key={i} className="flex gap-3 items-start">
      <span className="text-orange-300 font-extrabold shrink-0" aria-hidden="true">
        -
      </span>
      <span>{en ? x[0] : x[1]}</span>
    </li>
  ));
  const list = (
    <ul
      className={`mt-5 space-y-3 text-base sm:text-lg leading-relaxed ${tcol} ${s.c ? "text-start" : ""}`}
    >
      {items}
    </ul>
  );
  const ex = s.x && (
    <p
      className={`mt-4 rounded-xl border-s-2 border-ember px-4 py-3 text-sm sm:text-base leading-relaxed ${
        dark
          ? "bg-white/10 text-stone-100"
          : "bg-ember-soft dark:bg-orange-500/10 text-stone-700 dark:text-stone-200"
      }`}
    >
      <b>{en ? "Real world:" : "مثال واقعي:"}</b> {en ? s.x[0] : s.x[1]}
    </p>
  );
  const Dgm = s.dgm ? DIAGRAMS[s.dgm] : null;
  const dg = Dgm && (
    <div className="mt-4 flex justify-center">
      <div className="w-full max-w-xl rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-black/30 p-3">
        <Dgm />
      </div>
    </div>
  );
  const photo = (src: string) => (
    <figure className="rounded-xl overflow-hidden border border-stone-200 dark:border-white/10 self-center w-full">
      <div className="relative w-full h-44 sm:h-56 lg:h-64">
        <Image
          src={src}
          alt={s.alt || ""}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
          unoptimized
        />
      </div>
    </figure>
  );

  return (
    <>
      <header className="border-b border-stone-200 dark:border-white/10 px-4 sm:px-6 h-16 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <BackButton fallback="/cyber/lecture-1" />
          <span
            className="w-9 h-9 rounded-xl bg-ember text-white font-bold text-sm flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            CS
          </span>
          <h1 className="text-sm sm:text-base font-extrabold tracking-tight truncate">
              <Link href="/" className="hover:text-ember dark:hover:text-orange-300 transition">
            Cyber Security · Lecture 1
              </Link>
          </h1>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <LangToggle
            className={FOCUS}
          />
          <ThemeToggle className={FOCUS} />
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col">
        <div
          className="h-1.5 rounded-full bg-stone-900/[.07] dark:bg-black/40 overflow-hidden mb-4"
          role="progressbar"
          aria-label="Slide progress"
          aria-valuemin={1}
          aria-valuemax={n}
          aria-valuenow={idx + 1}
        >
          <div
            className="h-full bg-ember dark:bg-orange-400 rounded-full transition-[width] duration-[350ms]"
            style={{ width: `${Math.round(((idx + 1) / n) * 100)}%` }}
          />
        </div>

        {/* Stage */}
        <div
          id="stage"
          ref={stageRef}
          className="relative rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] shadow-soft overflow-hidden flex flex-col aspect-video max-sm:aspect-auto max-sm:min-h-[70vh]"
        >
          {s.bg && (
            <div
              className="absolute inset-0 transition-opacity duration-500"
              aria-hidden="true"
              style={{ opacity: 1 }}
            >
              <Image
                src={s.bg}
                alt=""
                fill
                loading="eager"
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(rgba(12,10,8,.80),rgba(12,10,8,.62))",
                }}
              />
            </div>
          )}
          <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 pt-5">
            <span
              className={`font-code text-xs font-semibold ${dark ? "text-orange-300" : "text-ember dark:text-orange-300"}`}
            >
              {s.k}
            </span>
            <span
              className={`font-code text-xs font-bold ${dark ? "text-stone-300" : "text-stone-500 dark:text-stone-400"}`}
            >
              {idx + 1} / {n}
            </span>
          </div>
          <div
            key={`${idx}-${lang}`}
            className={`relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 pb-6 pt-2 overflow-y-auto animate-slide-in rtl:animate-slide-in-r`}
            role="group"
            aria-live="polite"
            aria-label="Current slide"
          >
            {s.side || s.flip ? (
              <div className="w-full" key={idx}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center w-full">
                  {s.flip ? (
                    <>
                      {photo(s.flip as string)}
                      <div className="min-w-0">
                        {head}
                        {list}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="min-w-0">
                        {head}
                        {list}
                      </div>
                      {photo(s.side as string)}
                    </>
                  )}
                </div>
                {ex}
              </div>
            ) : (
              <div className={s.c ? "text-center mx-auto max-w-3xl" : ""}>
                {head}
                {list}
                {dg}
                {ex}
              </div>
            )}
          </div>
        </div>

        {/* Dots */}
        <div
          className="flex flex-wrap justify-center gap-1.5 mt-4"
          role="tablist"
          aria-label="Slides"
        >
          {SLIDES.map((sl, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === idx}
              onClick={() => go(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-[250ms] ${i === idx ? "" : "bg-stone-300 dark:bg-white/20"} ${i === idx ? "bg-ember dark:bg-orange-400 scale-125" : ""} ${FOCUS}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-4"
          role="toolbar"
          aria-label="Presentation controls"
        >
          <button type="button" onClick={prev} className={CTL} aria-label="Previous slide">
            ‹ <span className="en-text">Prev</span>
            <span className="ar-text">السابق</span>
          </button>
          <button
            type="button"
            onClick={next}
            className="min-h-[48px] px-8 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-sm transition"
          >
            <span className="en-text">Next</span>
            <span className="ar-text">التالي</span> ›
          </button>
          <button
            type="button"
            onClick={toggleOverview}
            id="ovBtn"
            aria-expanded={overviewOpen}
            className={CTL}
          >
            <span className="en-text">All slides</span>
            <span className="ar-text">كل الشرائح</span>
          </button>
          <button type="button" onClick={toggleFull} id="fsBtn" className={CTL}>
            <span className="en-text">{fullscreen ? "Exit full" : "Fullscreen"}</span>
            <span className="ar-text">{fullscreen ? "خروج" : "ملء الشاشة"}</span>
          </button>
        </div>
        <p className="text-center text-xs text-stone-500 dark:text-stone-400 mt-3">
          <span className="en-text">
            Keys: arrows move · F fullscreen · O overview · Home jumps to start
          </span>
          <span className="ar-text">
            الأسهم للتنقل · F ملء الشاشة · O نظرة عامة · Home للبداية
          </span>
        </p>

        {/* Overview grid */}
        <div
          id="overview"
          className={`mt-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-4 ${overviewOpen ? "" : "hidden"}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {SLIDES.map((sl, i) => (
              <button
                key={i}
                type="button"
                data-i={i}
                aria-current={i === idx}
                onClick={() => {
                  go(i);
                  setOverviewOpen(false);
                }}
                className={`text-start p-3 rounded-xl border border-stone-200 dark:border-white/10 hover:border-ember transition min-h-[44px] ${FOCUS} ${i === idx ? "ring-2 ring-ember" : ""}`}
              >
                <span className="font-code text-xs font-bold text-ember dark:text-orange-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block text-sm font-bold mt-0.5">
                  {slideCardTitle(sl.k)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-4 text-xs text-stone-500 dark:text-stone-400">
        Introduction to Cyber Security · Lecture 1 · Dr. Hayman El-sayed · Borg
        Al Arab Technological University
        <br />
        Photos: Wikimedia Commons contributors (CC BY)
      </footer>
    </>
  );
}
