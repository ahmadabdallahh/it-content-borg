"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/components/chrome";

/*
  Guest shell: a small self-contained command line embedded in the course
  index. Purely simulated — a file tree of the course, a few tools, and an
  "open" command that navigates the hub. No backend, no eval, no HTML
  injection: output lines render as plain text only.
*/

type Line = { pre?: string; text: string; cls?: string };
type Cwd = "~" | "~/lectures";

const P = "visitor@cyberhub:";

/* Virtual file tree — plain-text only, rendered without dangerouslySetInnerHTML. */
const FILES: Record<string, string> = {
  "about.txt":
    "Cyber Security course — Borg El Arab Technological University.\nChapter 1: Security fundamentals, CIA triad, attack types, defenses.\nTip: run  open lecture-1  to enter the chapter.",
  "lectures/lecture-1.txt":
    "lecture-1.txt — Introduction to Cyber Security\n· The 6 attack categories and the CIA triad\n· A live SOC terminal and a quick quiz\n· A 24-slide deck: run  open deck\nOpen it with:  open lecture-1",
};

const OPEN_TARGETS: Record<string, string> = {
  "lecture-1": "/cyber/lecture-1",
  deck: "/presentation",
  python: "/python",
  home: "/",
};

const QUICK = ["help", "ls", "cat lectures/lecture-1.txt", "open lecture-1", "whoami"];

const FOCUSV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember dark:focus-visible:outline-orange-300";

export default function GuestShell() {
  const lang = useLang();
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<Cwd>("~");
  const boxRef = useRef<HTMLDivElement>(null);
  const histRef = useRef<string[]>([]);
  const histHiRef = useRef(0);

  const push = useCallback((ls: Line[]) => setLines((old) => [...old, ...ls]), []);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      const echo: Line = { pre: `${P}${cwd === "~" ? "~" : cwd.slice(1) + "/"}$ `, text: cmd, cls: "cmd" };
      if (!cmd) {
        push([echo]);
        return;
      }
      const [head, ...rest] = cmd.split(/\s+/);
      const arg = rest.join(" ");
      const ok = (text: string, cls = "text-emerald-200") => push([echo, { text, cls }]);
      const err = (text: string) => push([echo, { text, cls: "text-red-400" }]);
      const note = (ls: string[], cls = "text-stone-400") =>
        push([echo, ...ls.map((t) => ({ text: t, cls }))]);

      switch (head) {
        case "help":
          note(
            [
              "ls · cat <file> · cd <dir> · pwd",
              "open <target> — lecture-1 | deck | python | home",
              "whoami · date · echo <text> · clear",
            ],
            "text-stone-200",
          );
          break;
        case "ls":
          if (cwd === "~") ok("about.txt   lectures/   open/");
          else ok("lecture-1.txt");
          break;
        case "pwd":
          ok(cwd === "~" ? "/home/visitor" : "/home/visitor/lectures");
          break;
        case "cd":
          if (!arg || arg === "~") setCwd("~");
          else if (arg === "lectures") setCwd("~/lectures");
          else if (arg === "..") setCwd("~");
          else err(`cd: no such directory: ${arg}`);
          break;
        case "cat": {
          const path = (cwd === "~" ? "" : "lectures/") + arg;
          if (!arg) err("cat: missing file operand");
          else if (FILES[path]) push([echo, ...FILES[path].split("\n").map((t) => ({ text: t, cls: "text-stone-200" }))]);
          else err(`cat: ${arg}: no such file`);
          break;
        }
        case "open": {
          const to = OPEN_TARGETS[arg];
          if (to) {
            ok(`opening ${arg} → ${to}`);
            setTimeout(() => router.push(to), 500);
          } else err(`open: unknown target: ${arg || "(none)"} — try: lecture-1, deck, python, home`);
          break;
        }
        case "whoami":
          ok("visitor — blast radius: none. You are safe here.");
          break;
        case "date":
          ok(new Date().toDateString());
          break;
        case "echo":
          push([echo, { text: arg, cls: "text-stone-200" }]);
          break;
        case "clear":
          setLines([]);
          break;
        default:
          err(`command not found: ${head} — try help`);
      }
    },
    [cwd, push, router],
  );

  /* Welcome lines on mount. */
  useEffect(() => {
    push([
      { text: "guest shell · cyber course index", cls: "text-stone-400" },
      { text: 'type "help" for the command list, or use the quick buttons below.', cls: "text-stone-400" },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Autoscroll. */
  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3" role="group" aria-label="Quick commands">
        {QUICK.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => {
              histRef.current.push(q);
              histHiRef.current = histRef.current.length;
              run(q);
            }}
            className={`min-h-[44px] px-3 rounded-xl font-code text-xs font-bold border border-stone-200 dark:border-white/10 bg-stone-900/[.04] dark:bg-black/30 hover:border-ember transition ${FOCUSV}`}
          >
            {q.split(" ")[0]}
          </button>
        ))}
      </div>
      <div className="ide rounded-2xl font-mono text-[13px] leading-6">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-stone-400 text-xs">guest_shell</span>
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
          className="min-h-[200px] max-h-[300px] overflow-y-auto p-4 space-y-1.5 text-stone-200"
        >
          {lines.map((l, i) => (
            <div key={i} className={`term-line ${l.cls ?? ""}`}>
              {l.pre && <span className="text-orange-300">{l.pre}</span>}
              <span>{l.text}</span>
            </div>
          ))}
        </div>
        <form
          className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.trim()) return;
            histRef.current.push(input);
            histHiRef.current = histRef.current.length;
            run(input);
            setInput("");
          }}
        >
          <span className="text-orange-300 shrink-0" aria-hidden="true">
            {P}
            {cwd === "~" ? "~" : cwd.slice(1) + "/"}$
          </span>
          <input
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Shell command input"
            placeholder={lang === "ar" ? "اكتب help واضغط Enter" : "type help and press Enter"}
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
    </div>
  );
}
