import type { Metadata } from "next";
import { Inter, Cairo, Fira_Code } from "next/font/google";
import "./globals.css";
import { ChromeProvider } from "@/components/chrome";

/* Type stack is deliberate: Inter/Cairo for UI in two scripts (accessibility-first
   classroom brief, full Arabic parity), Fira Code reserved for machine text. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learning Hub — Lecture 1",
  description:
    "Pick a course: the interactive Python lab, the cyber security lecture, or the slide presentation. Bilingual EN/AR.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${cairo.variable} ${firaCode.variable} font-sans`}
    >
      <body className="bg-paper text-ink dark:bg-[#121110] dark:text-stone-200 transition-colors duration-300 min-h-screen flex flex-col">
        <ChromeProvider>
          {children}
        </ChromeProvider>
      </body>
    </html>
  );
}
