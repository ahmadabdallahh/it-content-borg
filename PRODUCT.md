# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: beginners in Dr. Mohammed Abdelfattah's Lecture 1 (Programming Essentials in Python) learning variables, arithmetic, strings, input/conversion, if/else, for/while loops, lists, functions, and basic debugging.

Situation: lecture companion / lab exercise viewed in a browser, either during class or self-review. Job: build a correct mental model of line-by-line Python execution.

Other audiences: none confirmed.

## Product Purpose

Teach Lecture 1 Python fundamentals by letting students pick one of 10 mini-programs and watch a simulated interpreter execute it line-by-line with highlighted code, terminal output, live memory variables, and a plain explanation of what just happened.

Success: a beginner can predict what each line does, connect code to output and memory state, and explain core constructs (variables, I/O, branching, loops, lists, functions, errors).

## Positioning

A single static page that synchronizes four views per step — code highlight, terminal output, memory chips, bilingual line explanation — for a fixed Lecture 1 curriculum, rather than a generic tutorial, video, or real REPL.

## Operating Context

- Used alongside Lecture 1; 10 fixed programs (`ex01`–`ex10`).
- Browser-only, client-side simulation labeled "Python 3.13 · simulated".
- Controls: example picker, Run / Pause / Step / Reset, playback speed (0.5x–2.5x), progress + step badge + status line.
- Languages: English default with full Arabic translation + RTL switch; light-mode default with dark-mode toggle.
- No accounts, no backend, no persistence.

## Capabilities and Constraints

Confirmed functionality in `python-page.html`:
- 10 scripted examples: variables & print, arithmetic operators, strings & f-strings, input() & int(), if/else, for-loop sum, while countdown, lists, functions, errors & debugging.
- Per-step scripted terminal lines, memory snapshot (`int`, `float`, `str`, `list`), and EN/AR explanation.
- Simulated `input()` (preset age 20); simulated ZeroDivisionError traceback that halts execution.
- Responsive layout (Tailwind CDN), IDE-style code/terminal panels, concept cards (Compilation vs. Interpretation, Storage Capacities).

Constraints:
- Static single file: Tailwind via CDN + vanilla JS + Google Fonts (Cairo, Fira Code, Inter); no build step, no backend, no real Python execution.
- Content scope fixed at 10 examples unless instructor expands; do not invent new lectures, pricing, or claims.
- Undecided: deployment target, future lecture expansion — recorded, not assumed.

## Brand Commitments

- Title: `Lec1_Python.py` / "Lecture 1: Programming Essentials in Python".
- Credit: "Dr. Mohammed Abdelfattah" in header and footer — must be preserved.
- Voice: concise instructional EN + Modern Standard Arabic pedagogical translation.
- No logo or additional brand assets confirmed.

## Evidence on Hand

- Real content: all 10 programs, steps, terminal text, and EN/AR copy live in `python-page.html` (`EXAMPLES` array).
- No testimonials, case studies, benchmarks, press, or external datasets on hand; future work must not fabricate them.

## Product Principles

1. Execution over exposition: every concept is shown running, one line at a time.
2. One truth in four views: code, output, memory, and explanation must always agree.
3. Bilingual by default: Arabic-speaking beginners get full parity, not summaries.
4. No magic execution: simulation is labeled as such; errors halt like real Python.
