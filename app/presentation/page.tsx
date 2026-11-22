import type { Metadata } from "next";
import Deck from "@/components/presentation/deck";

export const metadata: Metadata = {
  title: "Cyber Security Lecture 1 - Presentation",
  description:
    "Slide presentation: Introduction to Cyber Security, Lecture 1. Bilingual EN/AR with fullscreen and overview.",
};

export default function PresentationPage() {
  return <Deck />;
}
