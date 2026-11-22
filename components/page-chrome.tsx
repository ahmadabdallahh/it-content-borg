"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useChrome } from "@/components/chrome";

/*
  Back navigation chip: goes one step back in the browser history when the
  user arrived from somewhere in this app, otherwise pushes a fallback href.
  Bilingual, 44px target, ghost chip like the other header toggles.
*/
export function BackButton({
  fallback,
  className = "",
}: {
  fallback: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        const idx: number | undefined = window.history.state?.idx;
        if (typeof idx === "number" && idx > 0) router.back();
        else router.push(fallback);
      }}
      className={`min-h-[44px] px-3 py-1.5 rounded-xl bg-stone-900/[.04] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 text-sm font-bold transition border border-stone-200 dark:border-white/10 ${className}`}
    >
      <span className="inline-block rtl:-scale-x-100" aria-hidden="true">
        ←
      </span>{" "}
      <span className="en-text">Back</span>
      <span className="ar-text">رجوع</span>
    </button>
  );
}

/*
  Language toggle: عربي / EN (44px minimum target, ghost chip).
*/
export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang } = useChrome();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch language" : "تبديل اللغة"}
      className={`min-h-[44px] px-3 py-1.5 rounded-xl bg-stone-900/[.04] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 text-sm font-bold transition border border-stone-200 dark:border-white/10 ${className}`}
    >
      عربي / EN
    </button>
  );
}

/*
  Theme toggle: moon in light mode, sun in dark mode, aria-pressed state.
*/
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { dark, toggleTheme } = useChrome();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      title="Toggle dark mode"
      className={`min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-stone-900/[.04] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 transition border border-stone-200 dark:border-white/10 flex items-center justify-center ${className}`}
    >
      <svg
        className={`w-5 h-5 ${dark ? "hidden" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"
        />
      </svg>
      <svg
        className={`w-5 h-5 ${dark ? "" : "hidden"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        />
      </svg>
    </button>
  );
}

/*
  Scroll reveal: IntersectionObserver, never a scroll listener.
  The visual ".in" state lives in React state (never a classList write), so
  hydrating client components never disagree with mutated DOM attributes.
  Falls back to visible with no IO or under reduced motion.
*/
export default function Reveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !("IntersectionObserver" in window) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

/*
  Hero CTA that smooth-scrolls to a target section (needs a click handler,
  so it lives in a client component).
*/
export function ScrollToButton({
  targetId,
  className,
  arrow,
}: {
  targetId: string;
  className: string;
  arrow: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      className={className}
    >
      {arrow} <span className="en-text">Start Chapter 1</span>
      <span className="ar-text">ابدأ الفصل الأول</span>
    </button>
  );
}

/** Scroll helper for client islands (equivalent of scrollIntoView calls). */
export function scrollToId(id: string, smooth = true) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: smooth ? "smooth" : undefined, block: "start" });
}
