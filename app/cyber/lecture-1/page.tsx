import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { Lecture1HeroTopics } from "@/components/cyber/lecture1/hero-topics";
import { Lecture1ChapterCia } from "@/components/cyber/lecture1/chapter-cia";
import { Lecture1AttacksModel } from "@/components/cyber/lecture1/attacks-model";
import { Lecture1CategoriesThreats } from "@/components/cyber/lecture1/categories-threats";
import { Lecture1Outro } from "@/components/cyber/lecture1/outro";

export const metadata: Metadata = {
  title: "Lecture 1: Introduction to Cyber Security",
  description:
    "Lecture 1: security fundamentals, the CIA triad, attacks, the network security model, categories, threats. Bilingual EN/AR with a 16-question self-check and a 47-question bank.",
};

export default function CyberLecture1() {
  return (
    <>
      <Link
        href="#chapter"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-xl focus:font-bold"
      >
        <span className="en-text">Skip to chapter</span>
        <span className="ar-text">تخطَّ إلى الفصل</span>
      </Link>

      <SiteHeader
        badge="CS"
        backFallback="/cyber"
        title={
          <>
            CyberSec_Lec1
            <span className="text-ember dark:text-orange-300">.html</span>
          </>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <Lecture1HeroTopics />
        <div id="chapter" className="pt-12 scroll-mt-24">
          <Lecture1ChapterCia />
          <Lecture1AttacksModel />
          <Lecture1CategoriesThreats />
          <Lecture1Outro />
        </div>
      </main>

      <footer className="border-t border-stone-200 dark:border-white/10 text-center py-5 text-xs text-stone-500 dark:text-stone-400">
        Introduction to Cyber Security · Lecture 1 · Borg El Arab Technological
        University
      </footer>
    </>
  );
}
