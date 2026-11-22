"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

type ChromeValue = {
  lang: Lang;
  toggleLang: () => void;
  dark: boolean;
  toggleTheme: () => void;
};

const ChromeCtx = createContext<ChromeValue | null>(null);

/*
  Shared page chrome state: language (EN/AR + RTL) and dark mode.
  Same behavior as the original pages: light + English default,
  toggles flip classes/attributes on <html>; nothing persists.
*/
export function ChromeProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const h = document.documentElement;
    h.setAttribute("lang", lang === "ar" ? "ar" : "en");
    h.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    h.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleLang = useCallback(
    () => setLang((l) => (l === "en" ? "ar" : "en")),
    [],
  );
  const toggleTheme = useCallback(() => setDark((d) => !d), []);

  return (
    <ChromeCtx.Provider value={{ lang, toggleLang, dark, toggleTheme }}>
      {children}
    </ChromeCtx.Provider>
  );
}

export function useChrome(): ChromeValue {
  const v = useContext(ChromeCtx);
  if (!v) throw new Error("useChrome must be used within ChromeProvider");
  return v;
}

export function useLang(): Lang {
  return useChrome().lang;
}

/** Pick the bilingual string for the active language. */
export function t(lang: Lang, en: string, ar: string): string {
  return lang === "en" ? en : ar;
}
