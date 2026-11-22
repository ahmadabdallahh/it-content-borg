import type { ReactNode } from "react";
import Link from "next/link";
import { LangToggle, ThemeToggle, BackButton } from "@/components/page-chrome";

/*
  Sticky 64px header: left (optional) back chip + badge + title, right
  language/theme toggles. The wordmark doubles as the home link — except on
  the hub itself (titleOnly).
*/
export default function SiteHeader({
  badge,
  title,
  mono = true,
  backFallback,
  titleOnly = false,
}: {
  badge: string;
  title: ReactNode;
  /** True for the `.py`-wordmark style headers (Fira Code); false for plain titles. */
  mono?: boolean;
  /** When set, a Back chip renders right of the badge; back() falls back to this href. */
  backFallback?: string;
  /** Hub mode: no home link on the wordmark. */
  titleOnly?: boolean;
}) {
  return (
    <header className="bg-paper/90 dark:bg-[#121110]/90 backdrop-blur border-b border-stone-200 dark:border-white/10 px-4 sm:px-6 h-16 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3 min-w-0">
        {backFallback ? <BackButton fallback={backFallback} /> : null}
        <span
          className={`w-9 h-9 rounded-xl bg-ember text-white ${mono ? "font-code" : ""} font-bold text-sm flex items-center justify-center shrink-0`}
          aria-hidden="true"
        >
          {badge}
        </span>
        <h1
          className={`${mono ? "font-code" : ""} text-base sm:text-lg font-extrabold tracking-tight truncate`}
        >
          {titleOnly ? (
            title
          ) : (
            <Link
              href="/"
              className="hover:text-ember dark:hover:text-orange-300 transition"
            >
              {title}
            </Link>
          )}
        </h1>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <LangToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
