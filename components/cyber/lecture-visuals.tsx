"use client";

import { Fragment, useState, type CSSProperties } from "react";
import { useLang } from "@/components/chrome";

type Track = "all" | "passive" | "active";

const FORK_PATH = "M300 2 V16 M300 16 H120 V54 M300 16 H480 V54";

/* ---------- Passive vs active attack flowchart ---------- */
export function AttackFlowchart() {
  const lang = useLang();
  const [track, setTrack] = useState<Track>("all");

  const branches = [
    {
      key: "passive" as const,
      en: "Passive attacks",
      ar: "الهجمات السلبية",
      enLead: "Observe only · data stays unchanged",
      arLead: "مراقبة فقط · لا تتغير البيانات",
      tag: "READ",
      types: [
        { en: "Release of message contents", ar: "كشف محتوى الرسالة" },
        { en: "Traffic analysis", ar: "تحليل الحركة" },
      ],
    },
    {
      key: "active" as const,
      en: "Active attacks",
      ar: "الهجمات النشطة",
      enLead: "Alter or disrupt · data is changed",
      arLead: "تعديل أو تعطيل · تتغير البيانات",
      tag: "WRITE",
      types: [
        { en: "Masquerade", ar: "انتحال الهوية" },
        { en: "Replay", ar: "إعادة الإرسال" },
        { en: "Modification of message", ar: "تعديل الرسالة" },
        { en: "Denial of service", ar: "الحرمان من الخدمة" },
      ],
    },
  ];

  const summary =
    track === "all"
      ? lang === "en"
        ? "Both paths start from the same security attack. Select a branch to trace it."
        : "كلاهما يبدأ من الهجوم الأمني نفسه. اختر فرعًا لتتبعه."
      : track === "passive"
        ? lang === "en"
          ? "Passive path: reading or watching traffic; nothing is rewritten."
          : "المسار السلبي: قراءة الحركة أو مراقبتها؛ لا يُعاد كتابة شيء."
        : lang === "en"
          ? "Active path: identity is faked, data is replayed or changed, or service is denied."
          : "المسار النشط: هوية مزيفة أو بيانات معادة أو معدلة أو خدمة معطلة.";

  return (
    <section
      aria-labelledby="attackFlowTitle"
      className="mt-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1815] p-5 sm:p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-code text-xs font-semibold text-ember dark:text-orange-300">
            FLOWCHART · 01
          </p>
          <h4 id="attackFlowTitle" className="text-xl font-extrabold mt-1">
            <span className="en-text">Trace a security attack</span>
            <span className="ar-text">تتبَّع هجومًا أمنيًا</span>
          </h4>
        </div>
        <div
          className="flex gap-1.5 rounded-xl bg-stone-900/[.04] dark:bg-white/5 p-1"
          role="group"
          aria-label={lang === "en" ? "Flowchart view" : "عرض المخطط"}
        >
          {(
            [
              { key: "all", en: "Both", ar: "الكل" },
              { key: "passive", en: "Passive", ar: "سلبي" },
              { key: "active", en: "Active", ar: "نشط" },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              type="button"
              aria-pressed={track === item.key}
              onClick={() => setTrack(item.key)}
              className={`min-h-[40px] px-3 rounded-lg text-sm font-bold transition ${
                track === item.key
                  ? "bg-ember text-white shadow-soft dark:bg-orange-700"
                  : "text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-white/10"
              }`}
            >
              <span className="en-text">{item.en}</span>
              <span className="ar-text">{item.ar}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-4">
        <div className="min-w-[640px]">
          <div className="mx-auto w-fit rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-[#24211d] px-5 py-2.5 text-center shadow-soft">
            <p className="text-sm font-extrabold">
              <span className="en-text">Security attack</span>
              <span className="ar-text">الهجوم الأمني</span>
            </p>
            <p className="font-code text-[10px] text-stone-500 dark:text-stone-400">
              {lang === "en" ? "any harmful action" : "أي فعل ضار"}
            </p>
          </div>

          <svg
            viewBox="0 0 600 56"
            className="w-full h-14 text-ember dark:text-orange-300"
            aria-hidden="true"
          >
            <path d={FORK_PATH} fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
            <path d={FORK_PATH} fill="none" stroke="currentColor" strokeWidth="2.5" className="lec-flow-edge" />
          </svg>

          <div className="grid grid-cols-2 gap-4">
            {branches.map((branch) => {
              const muted = track !== "all" && track !== branch.key;
              const selected = track === branch.key;
              return (
                <div
                  key={branch.key}
                  className={`lec-flow-branch rounded-xl border p-3 transition ${
                    branch.key === "passive"
                      ? "border-stone-300 dark:border-white/15 bg-white dark:bg-[#24211d]"
                      : "border-ember/50 dark:border-orange-300/40 bg-ember/5 dark:bg-orange-300/5"
                  } ${selected ? "ring-2 ring-ember/40 dark:ring-orange-300/40" : ""}`}
                  data-muted={muted}
                  data-selected={selected}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-extrabold text-sm">
                      <span className="en-text">{branch.en}</span>
                      <span className="ar-text">{branch.ar}</span>
                    </p>
                    <span className="font-code text-[10px] font-bold text-ember dark:text-orange-300">
                      {branch.tag}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-0.5">
                    <span className="en-text">{branch.enLead}</span>
                    <span className="ar-text">{branch.arLead}</span>
                  </p>
                  <ol className="mt-2.5 grid gap-1.5">
                    {branch.types.map((type) => (
                      <li
                        key={type.en}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${
                          branch.key === "passive"
                            ? "border-dashed border-stone-300 dark:border-white/15 bg-stone-900/[.03] dark:bg-black/20"
                            : "border-ember/25 dark:border-orange-300/25 bg-white/70 dark:bg-black/20"
                        }`}
                      >
                        <span className="en-text">{type.en}</span>
                        <span className="ar-text">{type.ar}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="text-sm text-stone-600 dark:text-stone-300 mt-3">
        {summary}
      </p>
    </section>
  );
}

/* ---------- Animated network security model ---------- */
export function NetworkPacketFlow() {
  const lang = useLang();
  const steps = [
    { cx: 100, en: "Sender", ar: "المرسل", sub: "plaintext" },
    { cx: 300, en: "Encryption", ar: "التشفير", sub: "secret key" },
    { cx: 500, en: "Channel", ar: "القناة", sub: "untrusted" },
    { cx: 700, en: "Decryption", ar: "فك التشفير", sub: "same key" },
    { cx: 900, en: "Receiver", ar: "المستقبل", sub: "plaintext" },
  ];

  return (
    <div className="mt-4 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3 sm:p-4 overflow-x-auto">
      <svg
        viewBox="0 0 1000 240"
        className="min-w-[760px] w-full"
        role="img"
        aria-labelledby="networkFlowTitle"
        direction="ltr"
      >
        <title id="networkFlowTitle">
          {lang === "en"
            ? "Sender, encryption, channel, decryption and receiver, with a message packet crossing the channel and an opponent watching it"
            : "المرسل والتشفير والقناة وفك التشفير والمستقبل، مع حزمة رسالة تعبر القناة وخصم يراقبها"}
        </title>
        <defs>
          <marker id="lecArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L9 4.5 L0 9 z" fill="currentColor" />
          </marker>
        </defs>
        <g className="text-ember dark:text-orange-300">
          {steps.slice(0, -1).map((step) => (
            <path
              key={step.cx}
              d={`M${step.cx + 85} 63 H${step.cx + 115}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              markerEnd="url(#lecArrow)"
            />
          ))}
        </g>
        {steps.map((step, i) => (
          <g key={step.cx}>
            <rect
              x={step.cx - 85}
              y="28"
              width="170"
              height="70"
              rx="14"
              className={
                i === 1 || i === 3
                  ? "fill-ember/10 stroke-ember/60 dark:fill-orange-300/10 dark:stroke-orange-300/60"
                  : "fill-white stroke-stone-300 dark:fill-[#24211d] dark:stroke-white/15"
              }
              strokeWidth="2"
            />
            <text
              x={step.cx}
              y="58"
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              className="fill-stone-900 dark:fill-stone-100"
            >
              {lang === "en" ? step.en : step.ar}
            </text>
            <text
              x={step.cx}
              y="79"
              textAnchor="middle"
              fontSize="11"
              fontFamily="var(--font-code)"
              className="fill-stone-500 dark:fill-stone-400"
            >
              {step.sub}
            </text>
            <path
              d={`M${step.cx} 98 V128`}
              stroke="currentColor"
              className="text-stone-300 dark:text-white/15"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
          </g>
        ))}
        <path
          d="M100 128 H900"
          fill="none"
          stroke="currentColor"
          className="text-stone-300 dark:text-white/15"
          strokeWidth="2"
          markerEnd="url(#lecArrow)"
        />
        <path
          d="M100 128 H900"
          fill="none"
          stroke="currentColor"
          className="lec-flow-edge text-ember dark:text-orange-300"
          strokeWidth="2.5"
        />
        <circle cx="112" cy="128" r="7" className="lec-packet-trail fill-ember dark:fill-orange-300" />
        <circle cx="100" cy="128" r="8" className="lec-packet-dot fill-ember dark:fill-orange-300" />
        <text
          x="140"
          y="116"
          fontSize="11"
          fontFamily="var(--font-code)"
          className="fill-stone-500 dark:fill-stone-400"
        >
          {lang === "en" ? "message packet" : "حزمة الرسالة"}
        </text>
        <g className="text-red-600 dark:text-red-400">
          <path d="M500 128 V166" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
          <circle cx="500" cy="192" r="24" className="fill-red-50 stroke-current dark:fill-red-500/10" strokeWidth="2" />
          <path
            d="M488 192c7-9 17-9 24 0-7 9-17 9-24 0zm12 0a3 3 0 100-6 3 3 0 000 6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <text x="500" y="232" textAnchor="middle" fontSize="12" fontWeight="700" className="fill-current">
            {lang === "en" ? "opponent watches" : "الخصم يراقب"}
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ---------- Four design tasks as a step pipeline ---------- */
export function DesignTaskPipeline() {
  const tasks = [
    {
      en: "Design the algorithm",
      ar: "صمّم الخوارزمية",
      subEn: "transformation",
      subAr: "التحويل",
    },
    {
      en: "Create the secret",
      ar: "أنشئ السر",
      subEn: "key material",
      subAr: "مادة المفتاح",
    },
    {
      en: "Share the secret",
      ar: "وزّع السر",
      subEn: "distribution",
      subAr: "التوزيع",
    },
    {
      en: "Specify the protocol",
      ar: "حدّد البروتوكول",
      subEn: "user rules",
      subAr: "قواعد المستخدم",
    },
  ];

  return (
    <div className="mt-4 rounded-xl bg-stone-900/[.04] dark:bg-black/30 p-3">
      <p className="font-code text-[10px] font-semibold text-stone-500 dark:text-stone-400 mb-2">
        SECURITY SERVICE · 4 TASKS
      </p>
      <ol className="flex flex-wrap items-stretch gap-1.5">
        {tasks.map((task, i) => (
          <Fragment key={task.en}>
            <li
              className="lec-task-node flex-1 min-w-[120px] rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-[#24211d] px-2.5 py-2"
              style={{ animationDelay: `${i * 0.12}s` } as CSSProperties}
            >
              <span className="font-code text-[10px] font-bold text-ember dark:text-orange-300">
                0{i + 1}
              </span>
              <p className="text-xs font-extrabold leading-snug mt-0.5">
                <span className="en-text">{task.en}</span>
                <span className="ar-text">{task.ar}</span>
              </p>
              <p className="font-code text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">
                <span className="en-text">{task.subEn}</span>
                <span className="ar-text">{task.subAr}</span>
              </p>
            </li>
            {i < tasks.length - 1 && (
              <li aria-hidden="true" className="hidden sm:grid place-items-center text-ember dark:text-orange-300 font-bold rtl:-scale-x-100">
                →
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
