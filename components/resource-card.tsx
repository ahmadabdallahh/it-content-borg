import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/page-chrome";

/*
  "Related files & resources" strip used on lecture pages. Small list of link
  cards: slug-style name, one-line description, an .ext-style tag.
*/

export default function Resources({
  eyebrowAr = "ملفات ومراجع",
  eyebrowEn = "Files & resources",
  children,
}: {
  eyebrowEn?: string;
  eyebrowAr?: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby="resTitle" className="mt-12">
      <Reveal>
        <p
          id="resTitle"
          className="font-code text-xs font-semibold text-ember dark:text-orange-300 mb-2"
        >
          <span className="en-text">{eyebrowEn}</span>
          <span className="ar-text">{eyebrowAr}</span>
        </p>
        <h3 className="text-2xl font-extrabold tracking-tight">
          <span className="en-text">Keep going with these</span>
          <span className="ar-text">تابع من هنا</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">{children}</div>
      </Reveal>
    </section>
  );
}

export function ResourceCard({
  href,
  badge,
  en,
  ar,
  dEn,
  dAr,
  metaEn,
  metaAr,
  primary = false,
}: {
  href: string;
  badge: string;
  en: string;
  ar: string;
  dEn: string;
  dAr: string;
  metaEn: string;
  metaAr: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border bg-white dark:bg-[#1e1c1a] p-5 transition-all hover:-translate-y-0.5 min-h-[44px] ${
        primary
          ? "border-ember/60 dark:border-orange-300/50 shadow-soft hover:shadow-lift"
          : "border-stone-200 dark:border-white/10 shadow-soft hover:shadow-lift hover:border-ember/60 dark:hover:border-orange-300/60"
      }`}
    >
      <span className="flex items-center justify-between mb-2">
        <span
          className={`w-9 h-9 rounded-xl bg-ember text-white font-code font-bold text-sm flex items-center justify-center`}
          aria-hidden="true"
        >
          {badge}
        </span>
        <span
          className="text-ember dark:text-orange-300 font-extrabold transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </span>
      <span className="font-extrabold font-code text-sm">
        <span className="en-text">{en}</span>
        <span className="ar-text">{ar}</span>
      </span>
      <span className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
        <span className="en-text">{dEn}</span>
        <span className="ar-text">{dAr}</span>
      </span>
      <span className="font-code text-xs font-semibold text-stone-500 dark:text-stone-400 mt-3">
        <span className="en-text">{primary ? "★ " : ""}{metaEn}</span>
        <span className="ar-text">{primary ? "★ " : ""}{metaAr}</span>
      </span>
    </Link>
  );
}
