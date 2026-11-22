---
name: "Lecture 1: Programming Essentials in Python"
description: "Bilingual line-by-line Python interpreter lab for beginners."
colors:
  ember: "#c2410c"
  ember-glow: "#ea580c"
  ember-night: "#9a3412"
  run-green: "#059669"
  pause-amber: "#f59e0b"
  terminal-green: "#22c55e"
  ide-night: "#0f172a"
  paper: "#f8fafc"
  card: "#ffffff"
  ink: "#1e293b"
  muted: "#64748b"
  line: "#e2e8f0"
  dark-surface: "#252526"
  syntax-keyword: "#c586c0"
  syntax-string: "#ce9178"
  syntax-number: "#b5cea8"
  syntax-comment: "#6a9955"
typography:
  display:
    fontFamily: "Inter, Cairo, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "Inter, Cairo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.4
  body:
    fontFamily: "Inter, Cairo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, Cairo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  code:
    fontFamily: "'Fira Code', monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-step:
    backgroundColor: "{colors.ember}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-step-hover:
    backgroundColor: "{colors.ember-glow}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-run:
    backgroundColor: "{colors.run-green}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-reset:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  ex-card-active:
    backgroundColor: "{colors.ember}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px"
---

# Design System: Lecture 1: Programming Essentials in Python

## Overview

**Creative North Star: "The Ember Bench"**

This is a workbench with a pulse, not a textbook. A warm paper page holds a split hero with a live typing miniature, a facts strip, and two dark IDE panels side by side, so a beginner sees one truth in four synchronized views: highlighted line, printed output, live variable chips, and a plain bilingual explanation. The mood is confident and warm: editorial type scale, one ember accent, numerals instead of decoration, motion that demonstrates rather than decorates.

The visual tension is deliberate: warm paper surroundings keep cognitive load low, while the dark `#141210` bench surface gives code and terminal output real contrast. Color is semantic and scarce: ember means "executing now," green means "go / alive," amber means "paused / needs attention," red only for the traceback. Motion demonstrates (typing preview, line glow, terminal slide-in, chip pop, one scroll reveal), never decorates.

**Key Characteristics:**
- Warm paper page with a split hero, facts strip, and dark IDE bench (dual `#141210` panels).
- One execution accent: Ember marks the active line, progress, and selection.
- Chunky and forgiving controls: 12px rounded buttons, 16px cards, bold labels, 44px minimum targets.
- Bilingual by construction: Inter + Cairo UI, Fira Code for code, full RTL mirror.
- Numerals carry wayfinding (01-10 program badges, facts strip); no emoji iconography.

## Colors

Warm neutral paper with a single ember accent; dark IDE surfaces for contrast; green/amber reserved for run state; VS-Code syntax hues inside code only.

### Primary
- **Ember** (#c2410c, dark #9a3412 solid / #fb923c text): The execution accent. Active code line border/glow, Step button, progress bar, selected example card, hero CTA. White on #c2410c clears 5:1. Used on ≤10% of any screen; its rarity is the point.
- **Ember Glow** (#ea580c): Hover and glow state of the primary. PC arrow `▶`, active line gradient (`rgba(194,65,12,.20)` → `.06`), focus ring `0 0 0 3px` equivalent via `:focus-visible`.

### Secondary
- **Go Green** (#047857): Run action only (`bg-emerald-700`). Live/executing dot, completed check `✓` (#10b981 family).
- **Pause Amber** (#f59e0b): Pause action and waiting state. Paused dot, simulated `input()` user-typed value highlight.

### Tertiary
- **Terminal Green** (#22c55e): Terminal caret `▋` and output-on-black signal. Terminal body text is emerald-300 on `rgba(0,0,0,.5)`.
- **Syntax Lilac** (#c586c0): Python keywords (`def`, `if`, `for`, `print`, `int`…).
- **String Clay** (#ce9178): String literals.
- **Number Sage** (#b5cea8): Numeric literals.
- **Comment Pine** (#6a9955): Comments.

### Neutral
- **Bench Paper** (#f6f6f4): Warm neutral page base, flat (no gradient wash).
- **Card White** (#ffffff): Lab, facts strip, and concept surfaces in light mode.
- **Bench Ink** (#1c1917): Primary text (`stone-900`) and IDE border zone.
- **Muted Stone** (#57534e): Secondary text, line numbers (`#78716c` light / `#8a8580` dark), status line.
- **Hairline** (#e7e5e4): Card and control borders (`stone-200`).
- **IDE Bench** (#141210): Code and terminal panel ground, flat (no radial glows). Always dark, even in light mode.
- **Dark Surface** (#1e1c1a / page #121110): Cards and header in dark mode. Never pure black.

### Named Rules (optional, powerful)
**The One Bench Rule.** Ember marks exactly one thing at a time: the line now executing. Nothing else competes with it.
**The Red-Is-Reserved Rule.** Red appears only for the `ZeroDivisionError` traceback. Never for decoration or emphasis.

## Typography

**Display Font:** Inter (with Cairo, system-ui fallback)
**Body Font:** Inter (with Cairo, system-ui fallback)
**Label/Mono Font:** Fira Code (monospace, for code / terminal / badges)

**Character:** Extra-bold UI headlines paired with a calm readable body and a technical mono for anything the interpreter touches. Cairo carries Arabic with full parity; no translated string is smaller, lighter, or summarized.

### Hierarchy
- **Display** (800, 2.25rem mobile / 3rem sm+ / 3.75rem lg, tight 1.1, `text-4xl md:text-5xl lg:text-6xl`): Hero statement (`Watch Python think, one line at a time`). Largest step in the system.
- **Title** (800, 1.125-1.5rem, tight): Section headers (lab, concepts). No emoji markers; numerals do the wayfinding.
- **Body** (400, 1rem / 16px, relaxed): Explanations, hero copy, concept text. Max ~60ch.
- **Label** (700, 0.75rem / 12px minimum, 0.06em tracking, uppercase): Maximum 2 per page (hero kicker, picker label). Status line never drops below 12px.
- **Code** (400–600, 0.8125rem / 13px, 1.6, `Fira Code`): Code lines, terminal output, memory values, file names. Keywords 500–600 weight via highlighter.

### Named Rules (optional)
**The Mono-Means-Machine Rule.** Fira Code is reserved for what the interpreter reads or writes: code, terminal, memory values, step badges, speed. UI prose never uses mono.

## Layout

Single centered column (`max-w-6xl`): 64px header → split hero → facts strip → lab → sticky-heading concepts → footer. The lab is the densest surface: title + toolbar, shortcuts line, progress + status, example picker, then the dual IDE panels (`grid-cols-1 lg:grid-cols-2 gap-4`). Picker is `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`. Concepts are a sticky-heading split (`md:grid-cols-[.9fr_1.1fr]`) with divided rows. Spacing rhythm is 8 / 12 / 16 / 24px; lab padding is 16–24px (`p-4 sm:p-6`); code line padding is `7px 11px` + 24px start gutter for the PC arrow. Responsive change is stacking only, with explicit mobile fallbacks (sticky mini step bar, single-column hero). RTL mirrors the whole bench (PC arrow and done-`✓` flip sides via logical properties).

## Elevation & Depth

**The Flat-By-Default Rule. Surfaces are flat at rest. Glow and lift appear only as a response to execution state.**

The system uses tonal layering plus soft ambient shadow, not stacked elevation. Cards sit on paper with `box-shadow: 0 12px 32px -16px rgba(28,25,23,.25)` (soft, tinted to the ink hue) and a 1px hairline. Depth arrives when something executes: the active code line gets an ember gradient wash plus `0 0 0 1px rgba(194,65,12,.3), 0 4px 18px -4px rgba(194,65,12,.45)`; the selected example card fills solid ember with `0 16px 40px -16px rgba(194,65,12,.45)`; updated memory chips ring with `0 0 0 2px rgba(16,185,129,.6)`.

### Shadow Vocabulary (if applicable)
- **Soft rest** (`box-shadow: 0 12px 32px -16px rgba(28,25,23,.25)`): Lab, facts strip, and hero preview card at rest.
- **Execution glow** (`box-shadow: 0 0 0 1px rgba(194,65,12,.3), 0 4px 18px -4px rgba(194,65,12,.45)`): Active `.codeline` only. The single glow on the page.
- **Selection lift** (`box-shadow: 0 16px 40px -16px rgba(194,65,12,.45)`): Active `.ex-card` only.
- **Focus ring** (`outline: 3px solid #c2410c, offset 2px`; dark `#fdba74`): `:focus-visible` everywhere.
- **Updated ring** (`box-shadow: 0 0 0 2px rgba(16,185,129,.6)`): Memory chip that just changed value.

## Shapes

Chunky, friendly, rectangular. Cards and IDE panels are gently curved (16px, `rounded-2xl`); buttons and example cards are medium-rounded (12px, `rounded-xl`); code lines are small-rounded (10px); memory chips are compact (8px, `rounded-lg`); badges and dots are full pills (999px). Borders do the structuring: 1px hairlines on cards/controls in light mode, 1px translucent white (`white/10`) in dark mode, 1px `#292524` on IDE panels. No clipping, no sharp corners, no circular cards. The signature silhouette is the split hero with its live typing miniature beside the dual dark bench panels.

## Components

Chunky and forgiving: 44px minimum targets, bold 13–15px labels, `active:scale-[.98]` press feedback, obvious selected states. Focus always rings ember.

### Buttons
- **Shape:** Medium-rounded (12px, `rounded-xl`).
- **Primary:** Step — Ember bg (`bg-ember` #c2410c, dark #9a3412), white text, `px-4 py-2`, shadow. Hover deepens toward Ember Glow.
- **Hover / Focus:** `hover:bg-*` darken + ember `:focus-visible` ring; press `active:scale-[.98]`.
- **Secondary / Ghost / Tertiary (if applicable):** Run is Go Green solid (`bg-emerald-700`); Pause is Pause Amber solid (`bg-amber-500`, dark text, hidden unless running); Reset and Back are ghosts with hairline borders. Speed is a labeled slider chip (`accent-[#c2410c]`).

### Chips (if used)
- **Style:** Memory chips are translucent tint by type on dark: `int` sky, `float` teal, `str` amber, `list` purple (`bg-*-500/15 text-*-300 border-*-500/40`), mono 12px, 8px radius, `pop` entrance. Type tag at 10px 60% opacity.
- **State:** Just-updated chips get the green updated ring + border shift (`border-color: #10b981`). Empty state is italic slate prose, never an empty box.

### Cards / Containers
- **Corner Style:** Gently curved (16px, `rounded-2xl`).
- **Background:** Card White on paper; `#1a1815` lab / `#1e1c1a` cards in dark mode; IDE Bench (#141210) for code/terminal always.
- **Shadow Strategy:** Soft rest shadow; see Elevation & Depth.
- **Border:** 1px Hairline light / `white/10` dark; IDE panels 1px `#292524`.
- **Internal Padding:** 16–24px (`p-4 sm:p-6`); IDE panels 16px.

### Inputs / Fields
- **Style:** The only field is the Speed range (`0.5–2.5x, step 0.5`) inside a bordered chip with a text `Speed` label and mono value (`1x`). No icon glyphs on controls.
- **Focus:** Native `accent-[#c2410c]` thumb; chip border steady.
- **Error / Disabled:** No text inputs exist; simulated `input()` uses a preset age (20) rendered as an amber terminal line.

### Navigation
- 64px sticky header (no nav links). Left: ember `Py` badge + `Lec1_Python.py` wordmark (Fira Code 800, `.py` in Ember) + instructor credit. Right: language toggle and theme toggle (44px ghost buttons with hairline). No nav links; the example picker grid is the navigation.

### Signature Component (optional; if the project has a distinctive custom component worth documenting)
- **Dual IDE bench:** Two `#141210` panels, flat. Filename + `Step n of m` pill on the left; `Terminal output` + black/50 console + variable chip wrap on the right. Code lines show number gutter, syntax colors, `▶` PC arrow, ember active wash, dimmed `✓` done state. Always dark, both themes.
- **What-just-happened panel:** 1px hairline border on `ember-soft` (`#fff1e8`, dark `orange-500/10`), small caps label, bilingual body, step-history disclosure.
- **Example picker cards:** Paper ghost cards with 01–10 numeral badge + 13px title + `N lines · M steps` sub; active card is solid Ember with white text and lift shadow.
- **Hero typing miniature:** A real working loop (types `print("Hello, world!")`, prints the result, repeats). Proof of motion, not decoration; static final state under reduced motion.

## Do's and Don'ts

Concrete visual guardrails grounded in the incumbent implementation or the user's chosen world. Lead each with "Do" or "Don't" and include exact values only when established. Do not turn a task-specific concept or surface strategy into a system-wide prohibition.

### Do:
- **Do** keep both IDE panels always dark (`#141210`, border `#292524`) in both themes — contrast is the teaching tool.
- **Do** reserve Ember (#c2410c) for the executing line, progress fill, selection, and the hero CTA; keep it under ~10% of any viewport.
- **Do** use Fira Code for code/terminal/memory/step badges and Inter/Cairo for everything else; never swap them.
- **Do** mirror execution affordances in RTL (PC arrow and done-`✓` flip sides via logical properties).
- **Do** preserve the `Lec1_Python.py` wordmark and "Dr. Mohammed Abdelfattah" credit in header and footer verbatim.
- **Do** label simulation honestly (`Python 3.13 · simulated`, `>>>` prefixes, `Interpreter stopped`) and halt after the traceback.

### Don't:
- **Don't** introduce new accent hues beyond ember plus the run-state green/amber and code syntax hues — no teal CTAs, no purple glows.
- **Don't** use red outside the `ZeroDivisionError` traceback; errors are the only red moment.
- **Don't** flatten the active line to a plain background — it needs the gradient wash + 1px ember border + execution glow to read as "now."
- **Don't** render memory as a table or plain text — chips with type tags (`int`, `str`, `list`) are the contract.
- **Don't** ship static code/terminal states without `:hover`, `:focus-visible`, and active treatments; the bench must feel alive.
- **Don't** add shadows beyond the documented vocabulary (soft / execution glow / selection lift / updated ring).
