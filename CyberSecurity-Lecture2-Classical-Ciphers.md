# Borg El Arab Technological University
## Introduction to Cyber Security
### 1st Level – 1st Semester
**Dr. Hayman El-Sayed**

# Chapter 3 — Classical Encryption/Decryption Techniques (Part 2)

*Continues Chapter 2: Caesar cipher → the rest of the substitution and transposition ciphers.*

---

## 1. Recap (Chapter 2)

- **Plaintext** → original message. **Ciphertext** → coded message. **Key** → secret info known only to sender/receiver.
- **Encryption**: plaintext + key → ciphertext.
- **Decryption**: ciphertext + key → plaintext.
- Two basic operations: **Substitution** (map each element to another) and **Transposition** (rearrange elements).
- **Caesar cipher**: `C = (p + 3) mod 26`, generalized shift cipher `C = (p + k) mod 26`.

Problem: Caesar (and any single shift) has only **25 keys** → trivial brute force. Today we study stronger classical ciphers.

---

## 2. Monoalphabetic Substitution Ciphers

One fixed mapping: each plaintext letter → exactly one ciphertext letter, for the whole message.

### 2.1 Atbash Cipher

Hebrew origin. **No key** — the alphabet is reversed:

```
Plain:  a b c d e f g h i j k l m n o p q r s t u v w x y z
Cipher: Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
```

- Rule: `C = (25 − p) mod 26`  (A↔Z, B↔Y, C↔X, ...)
- Self-inverse: encryption = decryption.

**Example** — plaintext `security`:

| p | s | e | c | u | r | i | t | y |
|---|---|---|---|---|---|---|---|---|
| C | H | V | X | F | I | R | G | B |

Ciphertext: **HVXFIRGB**

Key space = 1 → zero security, but a classic exam example.

### 2.2 Additive (Shift) Cipher — general form of Caesar

`C = (p + k) mod 26`, key `k ∈ {0..25}`.

- Decryption: `p = (C − k) mod 26`.
- Caesar is just the special case `k = 3`.
- 26 keys → brute force trivial (try all 25 shifts, look for readable English).

**Example** — `data security` with `k = 7`:

```
d(3)→k   a(0)→h   t(19)→a   a(0)→h      →  khah
s(18)→z  e(4)→l   c(2)→j    u(20)→b
r(17)→y  i(8)→p   t(19)→a   y(24)→f
```

Ciphertext: **KHAH ZLJBYPAF**

### 2.3 Multiplicative Cipher

`C = (p × k) mod 26`, key `k` must be **coprime with 26** (gcd(k, 26) = 1), otherwise decryption is impossible (not one-to-one).

Valid keys: `k ∈ {1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25}` → only **12 keys**.

- Decryption: `p = (C × k⁻¹) mod 26`, where `k⁻¹` is the modular inverse (`k × k⁻¹ ≡ 1 mod 26`).

Useful inverses mod 26:

| k | 1 | 3 | 5 | 7 | 9 | 11 | 15 | 17 | 19 | 21 | 23 | 25 |
|---|---|---|---|---|---|----|----|----|----|----|----|----|
| k⁻¹ | 1 | 9 | 21 | 15 | 3 | 19 | 7 | 23 | 11 | 5 | 17 | 25 |

**Example** — plaintext `cipher` with `k = 9`:

```
c(2)  → 2×9 = 18 → s
i(8)  → 8×9 = 72 mod 26 = 20 → u
p(15) → 15×9 = 135 mod 26 = 5 → f
h(7)  → 7×9 = 63 mod 26 = 11 → l
e(4)  → 4×9 = 36 mod 26 = 10 → k
r(17) → 17×9 = 153 mod 26 = 23 → x
```

Ciphertext: **SUFLKX**

Decrypt: `p = C × 9⁻¹ = C × 3 mod 26`.

### 2.4 Affine Cipher

Combines both: **`C = (a·p + b) mod 26`**

- Key = pair `(a, b)`; `a` must be coprime with 26, `b ∈ {0..25}`.
- Key space = 12 × 26 = **312 keys**. Still small, but much better than Caesar's 25.
- Decryption: `p = a⁻¹(C − b) mod 26`.

**Example** — encrypt `hello` with key `(a=5, b=8)`:

```
h(7)  → 5×7+8  = 43 mod 26 = 17 → r
e(4)  → 5×4+8  = 28 mod 26 = 2  → c
l(11) → 5×11+8 = 63 mod 26 = 11 → l
l(11) → l
o(14) → 5×14+8 = 78 mod 26 = 0  → a
```

Ciphertext: **RCLLA**

Decrypt: `p = 21(C − 8) mod 26` (since 5⁻¹ = 21 mod 26, because 5×21 = 105 = 4×26 + 1).

### 2.5 ROT13

Special case of Caesar with `k = 13`. Because 13 = 26/2:

- **Encryption = decryption**: applying ROT13 twice returns the plaintext.
- Used historically to hide spoilers / puzzle answers on the internet, not for security.

`security` → **FRPHEVGL**

### 2.6 Weakness of ALL monoalphabetic ciphers

**Frequency analysis.** English letter frequencies are preserved:

- Most common letters: **E, T, A, O, I, N** (~ 12.7%, 9.1%, 8.2%, ...)
- Most common digrams: TH, HE, IN, ER, AN...
- Most common trigrams: THE, AND, ING...

Even with 312 (Affine) or 26! (full random monoalphabetic, ≈ 4×10²⁶) keys, a cryptanalyst counts letter frequencies in the ciphertext and matches them to English statistics. Monoalphabetic = one-to-one mapping → the fingerprint survives.

---

## 3. Polyalphabetic Substitution Ciphers

Fix the monoalphabetic weakness: use **different mappings for different positions** of the same letter.

### 3.1 Simple Vigenère Cipher

Keyword of length *m*. Letter *i* of the plaintext is shifted by letter *i mod m* of the keyword.

`Cᵢ = (pᵢ + kᵢ mod m) mod 26`

Each keyword letter defines one Caesar alphabet → the same plaintext letter encrypts to different ciphertext letters.

**Example** — plaintext `hello world`, keyword `KEY` (`k=10, e=4, y=24`):

```
Plain:  h   e   l   l   o   w   o   r   l   d
Key:    K   E   Y   K   E   Y   K   E   Y   K
Shift:  10  4   24  10  4   24  10  4   24  10
Cipher: R   I   J   V   S   U   Y   V   J   N
```

Ciphertext: **RIJVSUYVJN**

**Cryptanalysis**: cannot use simple frequency analysis directly. Attacks:

1. **Kasiski examination** — find repeated ciphertext groups; distance between repeats suggests multiples of the keyword length.
2. **Index of Coincidence (IC)** — measures how "English-like" the frequency distribution is; drops toward 0.038 for polyalphabetic, ~0.066 for monoalphabetic.
3. Once keyword length *m* is known → split ciphertext into *m* monoalphabetic (Caesar) streams and solve each by frequency.

Still breakable: security depends only on keyword length.

### 3.2 Full Vigenère (Autokey variant idea)

- **Full Vigenère**: instead of one keyword row, use the full Vigenère tableau; key stream defined per position by a longer/derived key.
- **Autokey**: after the keyword is consumed, the key stream continues with the **plaintext itself** (or ciphertext):
  - Text-autokey: key = `KEY` + `HELLO...`
  - Ciphertext-autokey: key = `KEY` + ciphertext.
- Autokey destroys the periodicity that Kasiski exploits → stronger than simple Vigenère (but still not modern-secure).

### 3.3 One-Time Pad (the ideal limit)

Key = random string as long as the message, used **once**. `C = p + k mod 26`.

- **Unbreakable** (perfect secrecy, Shannon 1949): every plaintext is equally likely for every ciphertext.
- Impractical: key distribution, key storage, no key reuse. Basis for understanding modern stream ciphers.

---

## 4. Polygram Substitution Ciphers

Encrypt **blocks of letters together** instead of single letters — hides single-letter frequencies.

### 4.1 Playfair Cipher

First practical **digraph** cipher (1854, Charles Wheatstone / Lord Playfair). Uses a **5×5 matrix** built from a keyword (I/J share one cell → 25 letters).

**Building the matrix** — keyword `MONARCHY`:

```
M  O  N  A  R
C  H  Y  B  D
E  F  G  I/J K
L  P  Q  S  T
U  V  W  X  Z
```

**Preprocessing the plaintext:**

1. Break into pairs of letters (digraphs).
2. If both letters of a pair are the same → insert filler `X` between them (e.g. `BALLOON` → `BA LX LO ON`).
3. Odd number of letters → pad with `X` at the end.

**Encryption rules per digraph:**

1. **Same row** → replace each letter with the letter to its **right** (wrap around).
2. **Same column** → replace each letter with the letter **below** (wrap around).
3. **Rectangle** (the normal case) → replace each letter with the letter in its own row but in the **column of the other letter**.

**Example** — plaintext `hello`, keyword `MONARCHY`:

Digraphs: `HE LX LO`

- **HE**: H(1,1), E(2,0) — not same row/column → rectangle: H→(1,0)=**C**, E→(2,1)=**F** → **CF**
- **LX**: L(3,0), X(3,3) — same row → letter to the right: **PZ**
- **LO**: L(3,0), O(0,1) — rectangle: L→(3,1)=**P**, O→(0,0)=**M** → **PM**

Ciphertext: **CFPZPM**

**Why stronger than Caesar/Vigenère:** 26×26 = 676 digraphs, frequency analysis must work on digraphs, much harder. **Still breakable** (~hundreds of characters of ciphertext), no punctuation/numbers, I/J collision.

### 4.2 Hill Cipher

Mathematical polygram cipher (Lester Hill, 1929). Based on **matrix multiplication mod 26**.

- Key = *m×m* invertible matrix `K` (gcd(det K, 26) = 1 required).
- Plaintext split into column vectors of size *m*.
- Encryption: `C = K·P mod 26`
- Decryption: `P = K⁻¹·C mod 26`, where `K⁻¹ = (det K)⁻¹ · adj(K) mod 26`.

**Example (m = 2)** — key:

```
K = | 3  3 |
    | 2  5 |
```

det = 3×5 − 3×2 = 9, gcd(9,26)=1 ✓. Encrypt plaintext `HI`:

```
P = | 7 |      C = K·P mod 26 = | 3·7+3·8 |   = | 45 |   = | 19 | → T
    | 8 |                        | 2·7+5·8 |     | 54 |     | 2  | → C
```

Ciphertext of `HI` = **TC**.

Decrypt: det⁻¹ = 9⁻¹ mod 26 = 3 (9×3=27≡1).

```
K⁻¹ = 3 × | 5  −3 |  mod 26 = | 15  −9 |  mod 26 = | 15 17 |
          | −2  3 |           | −6   9 |           | 20   9 |
```

Check: `K⁻¹·C mod 26` → recovers `HI`. ✓

**Strength**: hides single-letter AND digraph frequencies (for m=2). Bigger m → hides more. **Weakness**: linear — known-plaintext attack with m pairs of (plaintext, ciphertext) vectors recovers K directly. Rarely used in practice, but the bridge to modern linear algebra-based crypto (AES MixColumns is a Hill-like idea).

---

## 5. Transposition Ciphers

Letters keep their identity — only their **positions** are rearranged. No substitutions at all.

### 5.1 Rail Fence Cipher

Write plaintext diagonally up/down over *k* "rails", then read row by row.

**Example** — `DATA SECURITY`, k = 3 rails. Number the letters 1–12: D(1) A(2) T(3) A(4) S(5) E(6) C(7) U(8) R(9) I(10) T(11) Y(12). Zigzag positions:

```
Rail 1 (positions 1, 5, 9):           D  E  R
Rail 2 (positions 2, 4, 6, 8, 10, 12):  A  A  E  C  I  Y
Rail 3 (positions 3, 7, 11):             T  U  T
```

Ciphertext (read rails top→bottom): **DERAAECIYTUT**

Decryption: know the rails count + message length → reconstruct the zigzag positions → scatter ciphertext back.

### 5.2 Columnar Transposition Matrix

Most commonly examined transposition cipher.

**Steps:**

1. Write the plaintext row-by-row into a grid of fixed width *m*.
2. Key = permutation / numbering of the columns (or a keyword whose alphabetical order defines it).
3. Read out **column by column**, in key order.
4. Pad short last row with filler (X) if needed.

**Example** — plaintext `DATA SECURITY IS IMPORTANT`, key `4 3 1 2 5` (each column carries one number; read columns in ascending key order).

```
Column labels:  4   3   1   2   5
                D   A   T   A   S
                E   C   U   R   I
                T   Y   I   S   I
                M   P   O   R   T
```

Read label **1** (grid col 3): `T U I O`, label **2** (grid col 4): `A R S R`, label **3** (grid col 2): `A C Y P`, label **4** (grid col 1): `D E T M`, label **5** (grid col 5): `S I I T`

Ciphertext: **TUIO ARSR ACYP DETM SIIT**

**Decryption**: divide ciphertext length by number of columns → column heights, fill columns in key order, read rows.

**Cryptanalysis**: letter frequencies look 100% English (nothing substituted) — the cryptanalyst sees "an anagram of English". Attacks: guess number of columns from common digram positions (E, T adjacency patterns), then try column permutations. More ciphertext → easier.

### 5.3 Product Ciphers

Shannon's idea: **Confusion + Diffusion**.

- **Confusion** = obscure relationship between key and ciphertext (→ substitution).
- **Diffusion** = spread the influence of each plaintext letter over many ciphertext letters (→ transposition).

Combine stages: `Substitution → Transposition → Substitution → ...` = **product cipher**. One round of (Substitution + Permutation) is a *round*; repeat for many rounds → this is exactly the architecture of **modern block ciphers (DES/AES)** — the subject of the next chapter.

---

## 6. Summary Table

| Cipher | Type | Key space | Broken by |
|---|---|---|---|
| Atbash | Monoalphabetic | 1 | trivially |
| Caesar / Additive | Monoalphabetic | 25 | brute force |
| Multiplicative | Monoalphabetic | 12 | brute force |
| Affine | Monoalphabetic | 312 | brute force + frequency |
| ROT13 | Monoalphabetic | 1 | trivially |
| Simple Vigenère | Polyalphabetic | 26ᵐ | Kasiski / IC |
| Full Vigenère / Autokey | Polyalphabetic | larger | statistical |
| One-Time Pad | Polyalphabetic | ∞ | **unbreakable** |
| Playfair | Polygram | 25! (matrix) | digraph frequency |
| Hill | Polygram | det must be invertible | known-plaintext (linear) |
| Rail Fence / Columnar | Transposition | k rails / m! column orders | digram analysis |
| Product ciphers | Sub + Trans | — | foundation of modern crypto |

---

## 7. Solved Exercises

1. **Atbash**: encrypt `university` → **FMREVIHRGB**
2. **Affine (a=7, b=10)**: encrypt `attack` → (0→10=K)(19→143 mod 26=13=N)(19→N)(0→K)(2→24=Y)(10→80 mod 26=2=C) → **KNNKYC**
3. **Multiplicative (k=7)**: decrypt `ABC` — k⁻¹ = 15; A(0)→A, B(1)→15=P, C(2)→30 mod 26=4=E → plaintext **APE**
4. **Vigenère**: encrypt `attackatdawn` with key `LEMON` → **LXFOPVEFRNHR** (classic textbook example)
5. **Playfair**: keyword `MONARCHY`, encrypt `security` → `SE CR IT YX` → **LI DM KS BQ** — verify with the matrix above.

---

## 8. Homework

1. Encrypt `ministry of higher education` using: Atbash, Affine (a=5, b=7), Vigenère (key `BORG`), Playfair (keyword `SECURITY`).
2. Decrypt `RSOCZEIE` if it was produced by Hill cipher with key matrix K = [[5, 17], [4, 15]].
3. Encrypt `cryptography is fun` with a columnar transposition, key `CIPHER`.
4. Show why frequency analysis defeats every monoalphabetic cipher, with one concrete example.
5. Explain why the One-Time Pad is unbreakable but impractical.

---

## 9. Next Lecture (Chapter 4)

- Modern symmetric ciphers: block vs stream
- Feistel structure, DES, 3DES
- AES overview

**Thank you**
