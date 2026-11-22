"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EXAMPLES, hl, type PyExample } from "@/lib/python-examples";
import { t, useLang } from "@/components/chrome";
import Reveal from "@/components/page-chrome";

const DEFAULT_EXPLAIN = {
  en: "Press <b>Step</b> to run one line at a time, or <b>Run</b> to watch the whole program. Each step highlights the line, prints its output, and updates memory.",
  ar: "اضغط <b>خطوة</b> لتنفيذ سطر واحد في كل مرة، أو <b>تشغيل</b> لمشاهدة البرنامج كاملًا. كل خطوة تُظلل السطر وتطبع ناتجه وتُحدّث الذاكرة.",
};

const READY_STATUS = "Ready. Pick an example, then Run or Step.";

type TermLine = { html: string; cls?: string };
type HistItem = { n: number; line: number };
type LiveState = "idle" | "run" | "pause";

const CHIP_COLORS: Record<string, string> = {
  int: "bg-sky-500/15 text-sky-300 border-sky-500/40",
  float: "bg-teal-500/15 text-teal-300 border-teal-500/40",
  str: "bg-amber-500/15 text-amber-300 border-amber-500/40",
  list: "bg-purple-500/15 text-purple-300 border-purple-500/40",
};


export default function Lab({
  data = EXAMPLES,
}: {
  /** Example set to drive the engine; defaults to lecture 1. */
  data?: PyExample[];
}) {
  // Local shadow: the engine body below stays byte-identical for both lectures.
  const EXAMPLES = data;
  const lang = useLang();
  const [exIdx, setExIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [speedVal, setSpeedVal] = useState("1");
  const [termLines, setTermLines] = useState<TermLine[]>([]);
  const [mem, setMem] = useState<Record<string, readonly [string, string]>>({});
  const [activeLine, setActiveLine] = useState(-1);
  const [doneUpTo, setDoneUpTo] = useState(-1);
  const [explain, setExplain] = useState(DEFAULT_EXPLAIN);
  const [status, setStatus] = useState(READY_STATUS);
  const [hist, setHist] = useState<HistItem[]>([]);
  const [live, setLive] = useState<LiveState>("idle");
  const [memFlash, setMemFlash] = useState(false);

  // Mirrors of mutable engine state (timers / cross-handler reads).
  const runningRef = useRef(false);
  const stepIdxRef = useRef(0);
  const exIdxRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedProgressRef = useRef<Record<number, number>>({});

  const ex = EXAMPLES[exIdx];
  const totalSteps = ex.steps.length;
  const progressPct = totalSteps
    ? Math.round((stepIdx / totalSteps) * 100)
    : 0;

  const speedMs = useCallback(
    () => Math.round(1400 / parseFloat(speedVal)),
    [speedVal],
  );

  /* Scroll reveal for the lab card: the <Reveal> wrapper below owns it. */


  /* ---------- engine, behavior preserved from the audited build ---------- */

  const goToStepImpl = useCallback(
    (n: number, exIndex: number, isRunning: boolean) => {
      const e = EXAMPLES[exIndex];
      const clamped = Math.max(0, Math.min(n, e.steps.length));
      setMemFlash(clamped > 0);
      const lines: TermLine[] = [];
      const h: HistItem[] = [];
      for (let i = 0; i < clamped; i++) {
        for (const line of e.steps[i].term) lines.push({ html: line });
        h.push({ n: i + 1, line: e.steps[i].line + 1 });
      }
      setTermLines(lines);
      setHist(h);
      stepIdxRef.current = clamped;
      setStepIdx(clamped);
      if (clamped === 0) {
        setActiveLine(-1);
        setDoneUpTo(-1);
        setMem({});
        setExplain(DEFAULT_EXPLAIN);
        setStatus(READY_STATUS);
        setLive("idle");
      } else {
        const s = e.steps[clamped - 1];
        setActiveLine(s.line);
        setDoneUpTo(clamped - 2);
        setMem(s.mem);
        setExplain({ en: s.en, ar: s.ar });
        setStatus(
          `Step ${clamped} of ${e.steps.length}: line ${s.line + 1} done.`,
        );
        setLive(isRunning ? "run" : "pause");
      }
      savedProgressRef.current[exIndex] = clamped;
    },
    [],
  );

  const finishImpl = useCallback(
    (exIndex: number) => {
      runningRef.current = false;
      setRunning(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      setTermLines((ls) => [
        ...ls,
        { html: "Program finished.", cls: "text-stone-400 italic" },
      ]);
      setLive("idle");
      setActiveLine(-1);
      setDoneUpTo(EXAMPLES[exIndex].code.length - 1);
      setStatus("Done. All steps completed.");
    },
    [],
  );

  const doStep = useCallback(
    (exIndex: number) => {
      if (stepIdxRef.current >= EXAMPLES[exIndex].steps.length) {
        finishImpl(exIndex);
        return false;
      }
      goToStepImpl(stepIdxRef.current + 1, exIndex, runningRef.current);
      return true;
    },
    [goToStepImpl, finishImpl],
  );

  const runAll = useCallback(() => {
    if (runningRef.current) return;
    if (stepIdxRef.current >= EXAMPLES[exIdxRef.current].steps.length) {
      goToStepImpl(0, exIdxRef.current, false);
    }
    runningRef.current = true;
    setRunning(true);
    setLive("run");
    const tick = () => {
      if (!runningRef.current) return;
      if (stepIdxRef.current >= EXAMPLES[exIdxRef.current].steps.length) {
        finishImpl(exIdxRef.current);
        return;
      }
      doStep(exIdxRef.current);
      timerRef.current = setTimeout(tick, speedMs());
    };
    tick();
  }, [doStep, finishImpl, goToStepImpl, speedMs]);

  const pauseExImpl = useCallback(
    (exIndex: number, wasRunning: boolean, stepIdxNow: number, showStatus: boolean) => {
      if (wasRunning) {
        runningRef.current = false;
        setRunning(false);
        if (timerRef.current) clearTimeout(timerRef.current);
      }
      setLive(stepIdxNow > 0 ? "pause" : "idle");
      if (
        showStatus &&
        stepIdxNow > 0 &&
        stepIdxNow < EXAMPLES[exIndex].steps.length
      ) {
        setStatus(
          `Paused at step ${stepIdxNow} of ${EXAMPLES[exIndex].steps.length}. Press Run to continue or Step for one line.`,
        );
      }
    },
    [],
  );

  const pauseEx = useCallback(() => {
    const wasRunning = runningRef.current;
    pauseExImpl(
      exIdxRef.current,
      wasRunning,
      stepIdxRef.current,
      wasRunning,
    );
  }, [pauseExImpl]);

  const stepOnce = useCallback(() => {
    pauseEx();
    doStep(exIdxRef.current);
  }, [pauseEx, doStep]);

  const prevStep = useCallback(() => {
    pauseEx();
    goToStepImpl(stepIdxRef.current - 1, exIdxRef.current, false);
  }, [pauseEx, goToStepImpl]);

  const resetEx = useCallback(() => {
    pauseEx();
    goToStepImpl(0, exIdxRef.current, false);
  }, [pauseEx, goToStepImpl]);

  const loadExample = useCallback(
    (i: number, skipConfirm = false) => {
      const curIdx = exIdxRef.current;
      if (i === curIdx && stepIdxRef.current === 0) return;
      const mid =
        runningRef.current ||
        (stepIdxRef.current > 0 &&
          stepIdxRef.current < EXAMPLES[curIdx].steps.length);
      if (mid && !skipConfirm) {
        runningRef.current = false;
        setRunning(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        const msg =
          lang === "en"
            ? "Switch example? Your current progress is saved and you can return to it."
            : "تبديل المثال؟ تقدمك الحالي محفوظ ويمكنك العودة إليه.";
        if (!window.confirm(msg)) return;
      }
      savedProgressRef.current[curIdx] = stepIdxRef.current;
      exIdxRef.current = i;
      setExIdx(i);
      const resume = savedProgressRef.current[i] || 0;
      goToStepImpl(resume, i, false);
      if (resume === 0) {
        setStatus("Ready. Press Run or Step to start this example.");
      }
      document
        .getElementById("labTitle")
        ?.scrollIntoView({ block: "nearest" });
    },
    [goToStepImpl, lang],
  );

  /* Hero CTA → start example 1 (scroll handled here, like startFirst). */
  useEffect(() => {
    const onStartFirst = () => {
      loadExample(0, true);
      document
        .getElementById("labTitle")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      runAll();
    };
    window.addEventListener("lab:start-first", onStartFirst);
    return () => window.removeEventListener("lab:start-first", onStartFirst);
  }, [loadExample, runAll]);

  /* Keyboard shortcuts: R run · N next · B back · P pause. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = e.target && (e.target as HTMLElement).tagName;
      if (/INPUT|TEXTAREA|SELECT/.test(tag || "") || (e.target as HTMLElement)?.isContentEditable)
        return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === "r") {
        e.preventDefault();
        runAll();
      } else if (k === "n" || e.key === "ArrowRight") {
        e.preventDefault();
        stepOnce();
      } else if (k === "b" || e.key === "ArrowLeft") {
        e.preventDefault();
        prevStep();
      } else if (k === "p") {
        e.preventDefault();
        pauseEx();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [runAll, stepOnce, prevStep, pauseEx]);

  /* Terminal autoscroll. */
  const termRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = termRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [termLines]);

  const highlight = (code: string) => ({
    __html: hl(code) || "&nbsp;",
  });

  const liveDotCls =
    live === "run"
      ? "w-2 h-2 rounded-full bg-emerald-500 pulse-dot inline-block"
      : live === "pause"
        ? "w-2 h-2 rounded-full bg-amber-500 inline-block"
        : "w-2 h-2 rounded-full bg-stone-500 inline-block";
  const liveText =
    live === "run" ? "Running" : live === "pause" ? "Paused" : "Idle";

  const badgeText = `Step ${Math.min(stepIdx, totalSteps)} of ${totalSteps}`;

  return (
    <Reveal className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-4 sm:p-6 shadow-soft">
      <section aria-labelledby="labTitle">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 id="labTitle" className="text-xl font-extrabold tracking-tight">
          <span className="en-text">Interactive interpreter</span>
          <span className="ar-text">المفسر التفاعلي</span>
        </h2>
        <div
          className="flex flex-wrap items-center gap-2"
          role="toolbar"
          aria-label="Execution controls"
        >
          <button
            type="button"
            onClick={runAll}
            aria-keyshortcuts="r"
            title="Run (R)"
            className={`min-h-[44px] px-4 py-2 bg-emerald-700 hover:bg-emerald-600 active:scale-[.98] text-white rounded-xl font-bold text-sm transition shadow flex items-center gap-1.5 ${running ? "hidden" : ""}`}
          >
            ▶ <span className="en-text">Run</span>
            <span className="ar-text">تشغيل</span>
          </button>
          <button
            type="button"
            onClick={pauseEx}
            aria-keyshortcuts="p"
            title="Pause (P)"
            className={`min-h-[44px] px-4 py-2 bg-amber-500 hover:bg-amber-400 active:scale-[.98] text-stone-900 rounded-xl font-bold text-sm transition shadow ${running ? "" : "hidden"}`}
          >
            ❚❚ <span className="en-text">Pause</span>
            <span className="ar-text">إيقاف</span>
          </button>
          <button
            type="button"
            onClick={prevStep}
            aria-keyshortcuts="b"
            title="Back one step (B)"
            className="min-h-[44px] px-4 py-2 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 rounded-xl font-bold text-sm transition border border-stone-200 dark:border-white/10"
          >
            ‹ <span className="en-text">Back</span>
            <span className="ar-text">رجوع</span>
          </button>
          <button
            type="button"
            onClick={stepOnce}
            aria-keyshortcuts="n"
            title="Next step (N)"
            className="min-h-[44px] px-4 py-2 bg-ember hover:bg-orange-700 active:scale-[.98] text-white rounded-xl font-bold text-sm transition shadow"
          >
            › <span className="en-text">Step</span>
            <span className="ar-text">خطوة</span>
          </button>
          <button
            type="button"
            onClick={resetEx}
            title="Reset"
            className="min-h-[44px] px-4 py-2 bg-stone-900/[.05] dark:bg-white/10 hover:bg-stone-900/10 dark:hover:bg-white/20 rounded-xl font-bold text-sm transition border border-stone-200 dark:border-white/10"
          >
            ↺ <span className="en-text">Reset</span>
            <span className="ar-text">إعادة</span>
          </button>
          <label className="min-h-[44px] flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-stone-300 bg-stone-900/[.04] dark:bg-black/30 px-3 py-2 rounded-xl border border-stone-200 dark:border-white/10">
            <span className="en-text">Speed</span>
            <span className="ar-text">السرعة</span>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.5"
              value={speedVal}
              aria-label="Playback speed"
              className="w-28 accent-[#c2410c]"
              onChange={(e) => setSpeedVal(e.target.value)}
            />
            <span className="font-code">{speedVal}x</span>
          </label>
        </div>
      </div>

      <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">
        <span className="en-text">
          Keyboard:{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10 font-code">
            R
          </kbd>{" "}
          run ·{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10 font-code">
            N
          </kbd>{" "}
          next ·{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10 font-code">
            B
          </kbd>{" "}
          back ·{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-stone-900/[.05] dark:bg-white/10 border border-stone-200 dark:border-white/10 font-code">
            P
          </kbd>{" "}
          pause
        </span>
        <span className="ar-text">
          لوحة المفاتيح: <b>R</b> تشغيل · <b>N</b> التالي · <b>B</b> رجوع ·{" "}
          <b>P</b> إيقاف
        </span>
      </p>

      <div
        className="h-2 rounded-full bg-stone-900/[.06] dark:bg-black/40 overflow-hidden mb-1.5 border border-stone-200 dark:border-white/10"
        role="progressbar"
        aria-label="Execution progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPct}
      >
        <div
          className="progress-bar h-full bg-ember dark:bg-orange-400 rounded-full"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="flex justify-between gap-4 text-xs font-mono text-stone-600 dark:text-stone-300 mb-4">
        <span role="status" aria-live="polite">
          {status}
        </span>
        <span className="shrink-0">Python 3.13 · simulated</span>
      </div>

      <div
        className="text-xs font-extrabold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-2"
        id="pickerLabel"
      >
        <span className="en-text">
          The {EXAMPLES.length} programs, in learning order
        </span>
        <span className="ar-text">
          البرامج {EXAMPLES.length === 10 ? "العشرة" : "الستة"} بالترتيب التعليمي
        </span>
      </div>
      <div
        role="group"
        aria-labelledby="pickerLabel"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-5"
      >
        {EXAMPLES.map((e, i) => (
          <button
            key={e.file}
            type="button"
            onClick={() => loadExample(i)}
            aria-pressed={i === exIdx}
            aria-current={i === exIdx ? "true" : undefined}
            aria-label={`${t(lang, e.t_en, e.t_ar)}, ${e.code.length} lines, ${e.steps.length} steps`}
            className={`ex-card min-h-[44px] text-start p-3 rounded-xl border border-stone-200 dark:border-white/10 bg-paper dark:bg-black/30 ${i === exIdx ? "active" : ""}`}
          >
            <div className="flex items-center gap-2">
              <span
                className="ex-num font-code w-7 h-7 rounded-lg bg-stone-900/[.06] dark:bg-white/10 flex items-center justify-center text-xs font-bold shrink-0"
                aria-hidden="true"
              >
                {e.icon}
              </span>
              <div className="font-bold text-[13px] leading-tight">
                {t(lang, e.t_en, e.t_ar)}
              </div>
            </div>
            <div className="ex-sub text-xs text-stone-500 dark:text-stone-400 mt-1 leading-snug">
              {e.code.length} lines · {e.steps.length} steps
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code panel (always dark) */}
        <div className="ide rounded-2xl p-4 font-mono text-[13px] leading-6 flex flex-col text-stone-200">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-stone-300 font-semibold text-xs truncate">
              {ex.file}
            </span>
            <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-ember/20 text-orange-200 border border-ember/50 font-sans font-bold">
              {badgeText}
            </span>
          </div>
          <div className="space-y-0.5 pb-3" role="list" aria-label="Program code">
            {ex.code.map((c, i) => (
              <div
                key={i}
                role="listitem"
                id={`line-${i}`}
                className={`codeline text-stone-200 ${i === activeLine ? "active" : ""} ${i <= doneUpTo && i !== activeLine ? "done" : ""}`}
                aria-current={i === activeLine ? "true" : undefined}
              >
                {i === activeLine && (
                  <span className="pc-arrow" aria-hidden="true">
                    ▶
                  </span>
                )}
                <span className="ln" aria-hidden="true">
                  {i + 1}
                </span>
                <span
                  className="flex-1"
                  style={{ whiteSpace: "pre-wrap" }}
                  dangerouslySetInnerHTML={highlight(c)}
                />
              </div>
            ))}
          </div>
          <p className="mt-3 pt-3 border-t border-white/10 text-xs font-sans text-stone-300 leading-relaxed">
            <b>{t(lang, ex.t_en, ex.t_ar)}</b> - {t(lang, ex.d_en, ex.d_ar)}
          </p>
        </div>

        {/* Terminal + memory panel */}
        <div className="ide rounded-2xl p-4 font-mono text-[13px] flex flex-col">
          <div className="text-xs font-sans font-bold text-stone-300 mb-2 flex items-center gap-2">
            <span className={liveDotCls} aria-hidden="true" />
            <span className="sr-only">{liveText}</span>
            <span className="en-text">Terminal output</span>
            <span className="ar-text">مخرجات الطرفية</span>
          </div>
          <div
            ref={termRef}
            role="log"
            aria-live="polite"
            aria-label="Interpreter output"
            className="min-h-[150px] max-h-[260px] overflow-y-auto bg-black/50 p-3 rounded-xl border border-white/10 space-y-1.5 text-emerald-300"
          >
            {termLines.map((l, i) => (
              <div key={i} className={`term-line ${l.cls ?? ""}`}>
                <span dangerouslySetInnerHTML={{ __html: l.html }} />
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="text-xs font-sans font-bold text-stone-300 mb-2">
              <span className="en-text">Variables alive now</span>
              <span className="ar-text">المتغيرات الحالية</span>
            </div>
            <div
              className="flex gap-2 flex-wrap font-sans text-xs"
              aria-live="polite"
              aria-label="Memory variables"
            >
              {Object.keys(mem).length === 0 ? (
                <span className="text-stone-400 text-xs italic">
                  No variables yet. Run a step to create one.
                </span>
              ) : (
                Object.keys(mem).map((k) => {
                  const [v, type] = mem[k];
                  const updated = memFlash;
                  return (
                    <span
                      key={k}
                      className={`mem-chip ${updated ? "updated" : ""} px-2.5 py-1.5 rounded-lg border ${CHIP_COLORS[type] || "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"} font-mono text-[12px]`}
                    >
                      {k}{" "}
                      <span className="opacity-60 text-[10px]">{type}</span> ={" "}
                      <strong>{v}</strong>
                      {updated && (
                        <span className="sr-only"> (updated)</span>
                      )}
                    </span>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky mini step bar */}
      <div className="lg:hidden sticky bottom-3 mt-4 flex items-center justify-between gap-2 rounded-2xl border border-stone-200 dark:border-white/10 bg-white/95 dark:bg-[#1a1815]/95 px-3 py-2 shadow-soft">
        <button
          type="button"
          onClick={prevStep}
          className="min-h-[44px] min-w-[44px] px-4 rounded-xl bg-stone-900/[.06] dark:bg-white/10 font-bold"
          aria-label="Previous step"
        >
          ‹
        </button>
        <span className="text-xs font-mono font-bold text-stone-600 dark:text-stone-300">
          {badgeText}
        </span>
        <button
          type="button"
          onClick={stepOnce}
          className="min-h-[44px] min-w-[44px] px-4 rounded-xl bg-ember text-white font-bold"
          aria-label="Next step"
        >
          ›
        </button>
      </div>

      {/* What-just-happened panel */}
      <div className="mt-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-ember-soft dark:bg-orange-500/10 p-4">
        <div className="text-xs font-extrabold text-ember-deep dark:text-orange-200 mb-1">
          <span className="en-text">What just happened</span>
          <span className="ar-text">ماذا حدث للتو</span>
        </div>
        <p
          role="status"
          aria-live="polite"
          className="text-sm leading-relaxed text-stone-700 dark:text-stone-200"
        >
          <span
            className="en-text"
            dangerouslySetInnerHTML={{ __html: explain.en }}
          />
          <span
            className="ar-text"
            dangerouslySetInnerHTML={{ __html: explain.ar }}
          />
        </p>
        <details className="mt-2 text-xs">
          <summary className="cursor-pointer font-bold text-ember-deep dark:text-orange-200 min-h-[44px] inline-flex items-center">
            <span className="en-text">Step history</span>
            <span className="ar-text">سجل الخطوات</span>
          </summary>
          <ol className="mt-1 space-y-1 text-stone-600 dark:text-stone-300">
            {hist.map((h) => (
              <li key={h.n}>
                <b className="font-code">Step {h.n}</b> → line {h.line}{" "}
                <span className="opacity-70 font-code">
                  {ex.code[h.line - 1] || ""}
                </span>
              </li>
            ))}
          </ol>
        </details>
      </div>
      </section>
    </Reveal>
  );
}


