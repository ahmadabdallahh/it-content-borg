/*
  Slideware diagrams, converted to React SVG from the original strings:
  cia triangle, network security model, passive and active attacks.
  Same geometry, same hues (ember / stone / red-600).
*/

const STONE = "stroke-stone-500 stroke-[1.5]";

export function CiaDiagram() {
  return (
    <svg viewBox="0 0 340 250" className="w-full h-auto" role="img" aria-label="CIA security goals triangle">
      <polygon
        points="170,32 48,208 292,208"
        className="fill-ember [fill-opacity:0.08] stroke-ember stroke-[2.5] [stroke-linejoin:round]"
      />
      <circle cx="170" cy="32" r="16" className="fill-ember" />
      <text x="170" y="37" className="[text-anchor:middle] text-[14px] font-bold fill-white">
        A
      </text>
      <circle cx="48" cy="208" r="16" className="fill-ember" />
      <text x="48" y="213" className="[text-anchor:middle] text-[14px] font-bold fill-white">
        C
      </text>
      <circle cx="292" cy="208" r="16" className="fill-ember" />
      <text x="292" y="213" className="[text-anchor:middle] text-[14px] font-bold fill-white">
        I
      </text>
      <text x="192" y="36" className="fill-stone-600 dark:fill-stone-300 text-[14px] font-bold">
        Availability
      </text>
      <text x="70" y="212" className="fill-stone-600 dark:fill-stone-300 text-[14px] font-bold">
        Confidentiality
      </text>
      <text x="270" y="212" className="fill-stone-600 dark:fill-stone-300 [text-anchor:end] text-[14px] font-bold">
        Integrity
      </text>
      <text x="170" y="156" className="[text-anchor:middle] text-[15px] font-bold fill-ember">
        Security
      </text>
      <text x="170" y="174" className="[text-anchor:middle] text-[15px] font-bold fill-ember">
        Goals
      </text>
    </svg>
  );
}

export function NetDiagram() {
  return (
    <svg viewBox="0 0 620 250" className="w-full h-auto" role="img" aria-label="Model for network security">
      <defs>
        <marker id="ahN" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8" className={`fill-none ${STONE}`} />
        </marker>
      </defs>
      <text x="310" y="18" className="fill-ember dark:fill-orange-300 [text-anchor:middle] text-[12px] font-bold">
        Trusted third party
      </text>
      <line x1="310" y1="26" x2="310" y2="86" className="stroke-ember stroke-[1.5] [stroke-dasharray:5,4]" />
      <rect x="10" y="100" width="70" height="48" rx="8" className={`fill-none ${STONE}`} />
      <text x="45" y="128" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12px] font-bold">
        Sender
      </text>
      <line x1="80" y1="124" x2="102" y2="124" className={`${STONE} [marker-end:url(#ahN)]`} />
      <rect x="102" y="100" width="86" height="48" rx="8" className={`fill-none ${STONE}`} />
      <text x="145" y="121" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12.5px]">
        Secure
      </text>
      <text x="145" y="135" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12.5px]">
        message
      </text>
      <line x1="188" y1="124" x2="238" y2="124" className={`${STONE} [marker-end:url(#ahN)]`} />
      <ellipse cx="303" cy="124" rx="65" ry="26" className="fill-ember [fill-opacity:0.10] stroke-ember stroke-[1.5]" />
      <text x="303" y="121" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12.5px] font-bold">
        Information
      </text>
      <text x="303" y="135" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12.5px] font-bold">
        channel
      </text>
      <line x1="368" y1="124" x2="418" y2="124" className={`${STONE} [marker-end:url(#ahN)]`} />
      <rect x="418" y="100" width="86" height="48" rx="8" className={`fill-none ${STONE}`} />
      <text x="461" y="121" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12.5px]">
        Secure
      </text>
      <text x="461" y="135" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12.5px]">
        message
      </text>
      <line x1="504" y1="124" x2="526" y2="124" className={`${STONE} [marker-end:url(#ahN)]`} />
      <rect x="526" y="100" width="70" height="48" rx="8" className={`fill-none ${STONE}`} />
      <text x="561" y="128" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[12px] font-bold">
        Recipient
      </text>
      <line x1="310" y1="150" x2="310" y2="200" className="stroke-red-600 stroke-[1.5] [stroke-dasharray:5,4]" />
      <text x="310" y="220" className="[text-anchor:middle] text-[12px] font-bold fill-red-600">
        Opponent
      </text>
    </svg>
  );
}

export function PassiveDiagram() {
  return (
    <svg viewBox="0 0 520 200" className="w-full h-auto" role="img" aria-label="Passive attack: eavesdropper reads a copy">
      <defs>
        <marker id="ahP" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8" className={`fill-none ${STONE}`} />
        </marker>
      </defs>
      <rect x="20" y="110" width="72" height="52" rx="8" className={`fill-none ${STONE}`} />
      <text x="56" y="142" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[16px] font-bold">
        A
      </text>
      <ellipse cx="260" cy="136" rx="95" ry="40" className={`fill-none ${STONE}`} />
      <text x="260" y="140" className="fill-stone-500 dark:fill-stone-400 [text-anchor:middle] text-[12px]">
        Internet
      </text>
      <rect x="428" y="110" width="72" height="52" rx="8" className={`fill-none ${STONE}`} />
      <text x="464" y="142" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[16px] font-bold">
        B
      </text>
      <line x1="92" y1="136" x2="428" y2="136" className={`${STONE} [marker-end:url(#ahP)]`} />
      <circle cx="260" cy="32" r="16" className="fill-ember" />
      <text x="260" y="37" className="[text-anchor:middle] text-[14px] font-bold fill-white">
        C
      </text>
      <path d="M260,48 C260,66 260,76 260,94" className={`fill-none ${STONE} [stroke-dasharray:5,4]`} />
      <text x="282" y="72" className="fill-stone-500 dark:fill-stone-400 text-[12.5px]">
        reads a copy
      </text>
    </svg>
  );
}

export function ActiveDiagram() {
  const RED = "stroke-red-600";
  return (
    <svg viewBox="0 0 520 210" className="w-full h-auto" role="img" aria-label="Active attack: masquerade">
      <defs>
        <marker id="ahA" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8" className={`fill-none ${RED} stroke-[1.5]`} />
        </marker>
      </defs>
      <rect x="20" y="120" width="72" height="52" rx="8" className={`fill-none ${STONE}`} />
      <text x="56" y="152" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[16px] font-bold">
        A
      </text>
      <text x="56" y="190" className="fill-stone-500 dark:fill-stone-400 [text-anchor:middle] text-[12px]">
        says nothing
      </text>
      <ellipse cx="260" cy="146" rx="85" ry="32" className={`fill-none ${STONE}`} />
      <text x="260" y="150" className="fill-stone-500 dark:fill-stone-400 [text-anchor:middle] text-[12px]">
        Internet
      </text>
      <rect x="428" y="120" width="72" height="52" rx="8" className={`fill-none ${STONE}`} />
      <text x="464" y="152" className="fill-stone-600 dark:fill-stone-300 [text-anchor:middle] text-[16px] font-bold">
        B
      </text>
      <circle cx="260" cy="28" r="16" className="fill-red-600" />
      <text x="260" y="33" className="[text-anchor:middle] text-[14px] font-bold fill-white">
        C
      </text>
      <path d="M278,38 Q380,55 424,112" className={`fill-none ${RED} stroke-[1.8] [marker-end:url(#ahA)]`} />
      <text x="356" y="62" className="[text-anchor:middle] text-[12.5px] font-bold fill-red-600">
        claims to be A
      </text>
    </svg>
  );
}

export const DIAGRAMS: Record<
  NonNullable<import("@/lib/slides").Slide["dgm"]>,
  () => React.ReactElement
> = {
  cia: CiaDiagram,
  net: NetDiagram,
  passive: PassiveDiagram,
  active: ActiveDiagram,
};
