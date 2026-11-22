"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/components/chrome";

/*
  Security operations terminal: every command demonstrates a lecture operation
  (CIA pillar, classical Caesar cipher preview, integrity hash, attack walk-through,
  threat types, design tasks). Output lines may contain trusted markup.
*/

type SocLine = { html: string; cls: string };

const DIM = "text-stone-400";
const OUT = "text-emerald-300";
const WARN = "text-amber-300";
const ERR = "text-red-400";

function caesar(text: string, shift: number): string {
  return text.replace(/[A-Za-z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((c.charCodeAt(0) - base + shift + 26 * 4) % 26) + base,
    );
  });
}

function djb2(text: string): string {
  let h = 5381;
  for (let i = 0; i < text.length; i++)
    h = ((h << 5) + h + text.charCodeAt(i)) >>> 0;
  return ("0000000" + h.toString(16)).slice(-8);
}

function sanitize(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function promptHtml(dir: string): string {
  return `<span class="text-orange-300">student@cyber:${dir}$</span>`;
}

export default function SocTerminal() {
  const lang = useLang();
  const [lines, setLines] = useState<SocLine[]>([]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<"~" | "~/reports">("~");
  const cwdRef = useRef(cwd);
  const histRef = useRef<string[]>([]);
  const histHiRef = useRef(-1);
  const busyRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);
  const langRef = useRef(lang);

  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  useEffect(() => {
    cwdRef.current = cwd;
  }, [cwd]);

  /* Virtual file system for ls / cd / cat. Simulated, plain strings only. */
  const FS: Record<string, string> = {
    "ch1-notes.txt":
      "ch1-notes.txt — Lecture 1 cribsheet<br>· CIA triad: Confidentiality · Integrity · Availability<br>· Attacks: passive (eavesdrop) vs active (masquerade, replay, modify, DoS)<br>· Design tasks: algorithm, secret, distribution, protocol",
    "quiz.txt":
      "quiz.txt — 4 questions on CIA, attack types and security services.<br>Jump to it: type <b>quiz</b>",
    "reports/incident-01.txt":
      "incident-01.txt — Eavesdropping on a plaintext login.<br>Classification: passive attack (confidentiality breach).<br>Recommended control: TLS encryption + a stronger session policy.",
  };

  const socPrint = useCallback((html: string, cls = "text-stone-200") => {
    setLines((ls) => [...ls, { html, cls }]);
  }, []);

  const socEcho = useCallback(
    (raw: string) => {
      const dir = cwdRef.current;
      socPrint(
        `${promptHtml(dir)} <span class="text-emerald-200">${sanitize(raw)}</span>`,
      );
    },
    [socPrint],
  );

  const socNarrate = useCallback(
    (items: [string, string][], done?: () => void) => {
      if (
        matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !items.length
      ) {
        items.forEach((l) => socPrint(l[0], l[1]));
        if (done) done();
        return;
      }
      busyRef.current = true;
      let i = 0;
      const next = () => {
        if (i < items.length) {
          socPrint(items[i][0], items[i][1]);
          i++;
          timersRef.current.push(setTimeout(next, 420));
        } else {
          busyRef.current = false;
          if (done) done();
        }
      };
      next();
    },
    [socPrint],
  );

  const socWelcome = useCallback(() => {
    const l = langRef.current;
    socPrint(
      l === "en"
        ? "Security Operations Terminal. Type <b>help</b> to list Lecture 1 operations."
        : "طرفية العمليات الأمنية. اكتب <b>help</b> لعرض عمليات المحاضرة 1.",
      DIM,
    );
  }, [socPrint]);

  const socRun = useCallback(
    (raw: string) => {
      const html0 = (raw || "").trim();
      if (!html0 || busyRef.current) return;
      socEcho(html0);
      const T = (en: string, ar: string) => (langRef.current === "en" ? en : ar);
      const sp = html0.indexOf(" ");
      const cmd = (sp < 0 ? html0 : html0.slice(0, sp)).toLowerCase();
      const arg = sp < 0 ? "" : html0.slice(sp + 1).trim();
      if (cmd === "clear") {
        setLines([]);
        socWelcome();
        return;
      }
      if (cmd === "help") {
        socPrint(
          T(
            "Available operations (Lecture 1):",
            "العمليات المتاحة (المحاضرة 1):",
          ),
          DIM,
        );
        [
          ["cia", "show the CIA triad", "عرض الثالوث CIA"],
          [
            "encrypt TEXT",
            "Caesar shift +3 (classical preview, Ch.2)",
            "تشفير قيصر +3 (معاينة كلاسيكية، ف2)",
          ],
          ["decrypt TEXT", "Caesar shift back", "فك تشفير قيصر"],
          ["hash TEXT", "integrity fingerprint demo", "عرض بصمة السلامة"],
          [
            "attack TYPE",
            "simulate passive | masquerade | replay | modify | dos",
            "محاكاة هجوم",
          ],
          [
            "threats",
            "list the 3 cyber threat types",
            "عرض أنواع التهديدات الثلاثة",
          ],
          [
            "services",
            "the 4 security-service design tasks",
            "مهام تصميم الخدمة الأمنية الأربع",
          ],
          ["clear", "wipe the terminal", "مسح الطرفية"],
          ["pwd", "print working directory", "طباعة مجلد العمل"],
          ["ls", "list files (also in reports/)", "عرض الملفات"],
          ["cd reports ..", "change directory", "تغيير المجلد"],
          ["cat FILE", "read a file", "قراءة ملف"],
          ["whoami", "who is at the terminal", "من على الطرفية"],
          ["date", "current date", "التاريخ الحالي"],
        ].forEach((r) =>
          socPrint(
            `<span class="text-orange-300 font-bold">${r[0]}</span><span class="${DIM}"> - </span>${T(r[1], r[2])}`,
          ),
        );
        return;
      }
      if (cmd === "cia") {
        socNarrate([
          [
            T(
              "C = Confidentiality. Mechanism: encryption.",
              "C = السرية. الآلية: التشفير.",
            ),
            OUT,
          ],
          [
            T("I = Integrity. Mechanism: hashing.", "I = السلامة. الآلية: التجزئة."),
            OUT,
          ],
          [
            T(
              "A = Availability. Services on time for authorized users.",
              "A = التوافر. خدمات في وقتها للمستخدمين المصرح لهم.",
            ),
            OUT,
          ],
        ]);
        return;
      }
      if (cmd === "encrypt" || cmd === "decrypt") {
        if (!arg) {
          socPrint(
            T(
              `Usage: ${cmd} SOME TEXT`,
              `الاستخدام: ${cmd} SOME TEXT`,
            ),
            WARN,
          );
          return;
        }
        const shift = cmd === "encrypt" ? 3 : -3;
        socNarrate([
          [
            `<span class="${DIM}">plain:</span>  ${sanitize(arg.toUpperCase())}`,
            DIM,
          ],
          [
            `<span class="${DIM}">shift ${shift > 0 ? "+" : ""}${shift}:</span>  <span class="${OUT} font-bold">${sanitize(caesar(arg.toUpperCase(), shift))}</span>`,
            OUT,
          ],
          [
            T(
              "Substitution of every letter: the idea behind classical ciphers (Chapter 2).",
              "استبدال كل حرف: الفكرة وراء الشفرات الكلاسيكية (الفصل 2).",
            ),
            DIM,
          ],
        ]);
        return;
      }
      if (cmd === "hash") {
        if (!arg) {
          socPrint(T("Usage: hash SOME TEXT", "الاستخدام: hash SOME TEXT"), WARN);
          return;
        }
        socNarrate([
          [`<span class="${DIM}">input:</span>  ${sanitize(arg)}`, DIM],
          [
            `<span class="${DIM}">fingerprint:</span>  <span class="${OUT} font-bold">${djb2(arg)}</span>`,
            OUT,
          ],
          [
            `<span class="${DIM}">one extra char:</span>  <span class="${OUT} font-bold">${djb2(arg + "!")}</span>  ${T(
              "totally different: tampering is exposed.",
              "مختلف تماما: العبث ينكشف.",
            )}`,
            DIM,
          ],
          [
            T(
              "Hashing guards integrity: any change breaks the fingerprint.",
              "التجزئة تحرس السلامة: أي تغيير يكسر البصمة.",
            ),
            DIM,
          ],
        ]);
        return;
      }
      if (cmd === "attack") {
        const tt = (arg || "dos").toLowerCase();
        const N: Record<string, [string, string][]> = {
          passive: [
            ["Attacker taps the wire…", "text-stone-200"],
            [
              "Copying packets. Altering nothing. Passive attacks are very difficult to detect.",
              ERR,
            ],
          ],
          masquerade: [
            ['Attacker: "I am the bank. Trust me."', "text-stone-200"],
            [
              "Victim hands over credentials. Identity was never verified: masquerade, active type 1.",
              ERR,
            ],
          ],
          replay: [
            ["Attacker records a valid login…", "text-stone-200"],
            [
              "…retransmits it at midnight. Same bytes, new crime: replay, active type 2.",
              ERR,
            ],
          ],
          modify: [
            ['Legitimate message: "Pay $100"…', "text-stone-200"],
            [
              '…arrives as "Pay $900". A portion was altered: modification, active type 3.',
              ERR,
            ],
          ],
          dos: [
            ["Botnet wakes up: 10,000 requests/second…", "text-stone-200"],
            [
              "Server stops answering real users. Service denied: DoS, active type 4. Availability is gone.",
              ERR,
            ],
          ],
        };
        const script = N[tt];
        if (!script) {
          socPrint(
            T(
              `Unknown attack "${tt}". Try: passive | masquerade | replay | modify | dos`,
              `هجوم غير معروف. جرب: passive | masquerade | replay | modify | dos`,
            ),
            ERR,
          );
          return;
        }
        socNarrate(script);
        return;
      }
      if (cmd === "threats") {
        socNarrate([
          [
            T(
              "1. Cybercrime: gain or disruption.",
              "1. الجرائم الإلكترونية: مكسب أو تعطيل.",
            ),
            OUT,
          ],
          [
            T(
              "2. Cyber-attack: politically motivated gathering.",
              "2. الهجوم السيبراني: جمع بدوافع سياسية.",
            ),
            OUT,
          ],
          [
            T(
              "3. Cyberterrorism: panic and fear.",
              "3. الإرهاب السيبراني: ذعر وخوف.",
            ),
            OUT,
          ],
        ]);
        return;
      }
      if (cmd === "services" || cmd === "model") {
        socNarrate([
          [T("1. Design the algorithm.", "1. تصميم الخوارزمية."), DIM],
          [
            T(
              "2. Create the secret information.",
              "2. إنشاء المعلومات السرية.",
            ),
            DIM,
          ],
          [T("3. Distribute and share it.", "3. توزيعها ومشاركتها."), DIM],
          [T("4. Specify the protocol.", "4. تحديد البروتوكول."), DIM],
        ]);
        return;
      }
      if (cmd === "quiz") {
        document
          .getElementById("quizTitle")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
        socPrint(
          T(
            "Scrolled you to the self-check quiz.",
            "نقلتك إلى اختبار التحقق الذاتي.",
          ),
          DIM,
        );
        return;
      }

      /* System-style utilities. */
      if (cmd === "pwd") {
        socPrint(T("/home/student/cyber", "/home/student/cyber"), OUT);
        return;
      }
      if (cmd === "ls") {
        if (cwdRef.current === "~") {
          socPrint(
            T(
              "ch1-notes.txt&nbsp;&nbsp;quiz.txt&nbsp;&nbsp;reports/",
              "ch1-notes.txt&nbsp;&nbsp;quiz.txt&nbsp;&nbsp;reports/",
            ),
            OUT,
          );
        } else {
          socPrint(T("incident-01.txt", "incident-01.txt"), OUT);
        }
        return;
      }
      if (cmd === "cd") {
        if (!arg || arg === "~" || arg === "..") {
          setCwd("~");
          socPrint(
            T(
              cwdRef.current === "~" ? "already in ~" : "back to ~",
              cwdRef.current === "~" ? "أنت في ~ بالفعل" : "رجوع إلى ~",
            ),
            DIM,
          );
        } else if (arg === "reports") {
          setCwd("~/reports");
          socPrint(T("reports/", "reports/"), DIM);
        } else {
          socPrint(
            T(`cd: no such directory: ${sanitize(arg)}`, `cd: لا مجلد بهذا الاسم: ${sanitize(arg)}`),
            ERR,
          );
        }
        return;
      }
      if (cmd === "cat") {
        if (!arg) {
          socPrint(T("cat: missing file operand", "cat: لا يوجد ملف"), ERR);
          return;
        }
        const path = (cwdRef.current === "~" ? "" : "reports/") + arg;
        if (FS[path]) {
          socPrint(FS[path], OUT);
        } else {
          socPrint(
            T(`cat: ${sanitize(arg)}: no such file`, `cat: ${sanitize(arg)}: ملف غير موجود`),
            ERR,
          );
        }
        return;
      }
      if (cmd === "whoami") {
        socPrint(
          T(
            "student — SOC analyst in training. Watch the logs, not the users.",
            "student — محلل SOC متدرب. راقب السجلات لا المستخدمين.",
          ),
          OUT,
        );
        return;
      }
      if (cmd === "date") {
        socPrint(
          T(
            new Date().toDateString(),
            new Date().toDateString(),
          ),
          OUT,
        );
        return;
      }
      socPrint(
        T(
          `Unknown command "${sanitize(cmd)}". Type <b>help</b>.`,
          `أمر غير معروف. اكتب <b>help</b>.`,
        ),
        ERR,
      );
    },
    [socEcho, socNarrate, socPrint, socWelcome],
  );

  const socFill = useCallback(
    (cmd: string) => {
      socRun(cmd);
    },
    [socRun],
  );

  /* Welcome line on mount + wire the Clear action to the header button. */
  useEffect(() => {
    socWelcome();
    const onClear = () => socRun("clear");
    window.addEventListener("soc:clear", onClear);
    return () => window.removeEventListener("soc:clear", onClear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Clear queued narrate timers on unmount. */
  useEffect(
    () => () => {
      timersRef.current.forEach(clearTimeout);
    },
    [],
  );

  /* Autoscroll. */
  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const quick = ["help", "cia", "encrypt MEET AT DAWN", "decrypt PHHW DW GDXQ", "hash password123", "attack dos", "threats"];

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-3" role="group" aria-label="Quick commands">
        {quick.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => socFill(q)}
            className="min-h-[44px] px-3 rounded-xl font-code text-xs font-bold border border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 hover:border-ember transition"
          >
            {q.split(" ")[0]}
          </button>
        ))}
      </div>
      <div className="ide rounded-2xl mt-3 font-mono text-[13px] leading-6">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-stone-400 text-xs">soc_terminal</span>
          <span className="font-code text-[11px] font-semibold text-emerald-300">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 me-1"
              aria-hidden="true"
            />{" "}
            live
          </span>
        </div>
        <div
          ref={boxRef}
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
          className="min-h-[220px] max-h-[320px] overflow-y-auto p-4 space-y-1.5 text-stone-200"
        >
          {lines.map((l, i) => (
            <div key={i} className={`term-line ${l.cls}`}>
              <span dangerouslySetInnerHTML={{ __html: l.html }} />
            </div>
          ))}
        </div>
        <form
          className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
          onSubmit={(e) => {
            e.preventDefault();
            histRef.current.push(input);
            histHiRef.current = histRef.current.length;
            socRun(input);
            setInput("");
          }}
        >
          <span className="text-orange-300 shrink-0" aria-hidden="true">
            {`student@cyber:${cwd === "~" ? "~" : cwd.replace(/^~/, "") + "/"}$`}
          </span>
          <input
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal command input"
            placeholder="type help and press Enter"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (histHiRef.current > 0) {
                  histHiRef.current--;
                  setInput(histRef.current[histHiRef.current] || "");
                }
              }
              if (e.key === "ArrowDown") {
                e.preventDefault();
                if (histHiRef.current < histRef.current.length - 1) {
                  histHiRef.current++;
                  setInput(histRef.current[histHiRef.current] || "");
                } else {
                  histHiRef.current = histRef.current.length;
                  setInput("");
                }
              }
            }}
            className="flex-1 min-w-0 bg-transparent text-emerald-200 placeholder:text-stone-500 outline-none font-code text-[13px]"
          />
          <span className="soc-caret" aria-hidden="true">
            &nbsp;
          </span>
        </form>
      </div>
    </>
  );
}

/* Clear button (in section header). */
export function SocClearButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("soc:clear"))}
      className="min-h-[44px] px-4 rounded-xl font-bold text-xs transition border border-stone-200 dark:border-white/10 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20"
    >
      <span className="en-text">Clear</span>
      <span className="ar-text">مسح</span>
    </button>
  );
}
