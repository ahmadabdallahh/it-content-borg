/*
  Lecture 2 example set: print, variables & multiple assignment,
  types & type(), type sensitivity (concatenation errors),
  explicit/implicit conversion, and arithmetic operators & precedence.
  Drives the same lab engine via <Lab data={PY2_EXAMPLES} />.
  `term` / `en` / `ar` strings may contain trusted presentation markup.
*/

import type { PyExample } from "@/lib/python-examples";

const P = '<span class="text-stone-400">&gt;&gt;&gt; </span>';
const ERR = 'text-red-400 font-bold';

export const PY2_EXAMPLES: PyExample[] = [
  {
    file: "ex01_print.py",
    icon: "01",
    t_en: "1 · print and parentheses",
    t_ar: "١ · الطباعة والأقواس",
    d_en:
      "print() shows values on screen. Parentheses are required, and it can print math or text or both.",
    d_ar:
      "الدالة ()print تعرض القيم على الشاشة. الأقواس إلزامية، وتستطيع طباعة حسابات أو نصوص أو كليهما.",
    code: [
      'print("Hello, Python!")',
      "print(3 + 4)",
      'print("Sum:", 3 + 4)',
    ],
    steps: [
      {
        line: 0,
        term: [`${P}print("Hello, Python!")</span>`, "Hello, Python!"],
        mem: {},
        en: "Line 1 prints the text <b>Hello, Python!</b>. Text must be wrapped in quotes.",
        ar: "السطر ١ يطبع النص <b>Hello, Python!</b>. النص يجب أن يوضع بين علامتي تنصيص.",
      },
      {
        line: 1,
        term: [`${P}print(3 + 4)</span>`, "7"],
        mem: {},
        en: "Line 2 prints <b>7</b>: print evaluates the math 3 + 4 first, then prints the result.",
        ar: "السطر ٢ يطبع <b>٧</b>: الدالة print تحسب ٣ + ٤ أولًا ثم تطبع الناتج.",
      },
      {
        line: 2,
        term: [`${P}print("Sum:", 3 + 4)</span>`, "Sum: 7"],
        mem: {},
        en: "Line 3 prints two things at once: the label <b>Sum:</b> then the value <b>7</b>, separated by a comma.",
        ar: "السطر ٣ يطبع شيئين معًا: العنوان <b>Sum:</b> ثم القيمة <b>٧</b>، تفصل بينهما فاصلة.",
      },
    ],
  },
  {
    file: "ex02_variables.py",
    icon: "02",
    t_en: "2 · Variables & multiple assignment",
    t_ar: "٢ · المتغيرات والإسناد المتعدد",
    d_en:
      "One value, several names — and what really happens when you reassign.",
    d_ar: "قيمة واحدة وعدة أسماء — وما يحدث فعلًا عند إعادة الإسناد.",
    code: [
      "a = 5",
      "b = c = a",
      "a = 8",
      'a, b, c = 1, 2, "john"',
      "print(a, b, c)",
    ],
    steps: [
      {
        line: 0,
        term: [`${P}a = 5</span>`],
        mem: { a: ["5", "int"] },
        en: "Line 1 creates <b>a</b> and stores 5 in it.",
        ar: "السطر ١ ينشئ المتغير <b>a</b> ويخزن فيه ٥.",
      },
      {
        line: 1,
        term: [`${P}b = c = a</span>`],
        mem: { a: ["5", "int"], b: ["5", "int"], c: ["5", "int"] },
        en: "Line 2 chains the assignment: <b>b</b> and <b>c</b> each get a copy of a's value, 5.",
        ar: "السطر ٢ يسلسل الإسناد: يحصل <b>b</b> و<b>c</b> كلٌ عليهما على نسخة من قيمة a وهي ٥.",
      },
      {
        line: 2,
        term: [`${P}a = 8</span>`],
        mem: { a: ["8", "int"], b: ["5", "int"], c: ["5", "int"] },
        en: "Line 3 points a at 8. Notice b and c stay 5: copying the value, not linking the names.",
        ar: "السطر ٣ يوجّه a إلى ٨. لاحظ أن b وc تبقى ٥: ننسخ القيمة ولا نربط الأسماء.",
      },
      {
        line: 3,
        term: [`${P}a, b, c = 1, 2, "john"</span>`],
        mem: { a: ["1", "int"], b: ["2", "int"], c: ["john", "str"] },
        en: "Line 4 assigns three values at once in order: a=1, b=2, c=<b>john</b> — the string needs quotes.",
        ar: "السطر ٤ يسند ثلاث قيم دفعة واحدة بالترتيب: a=١ وb=٢ وc=<b>john</b> — النص يحتاج علامتي تنصيص.",
      },
      {
        line: 4,
        term: [`${P}print(a, b, c)</span>`, "1 2 john"],
        mem: { a: ["1", "int"], b: ["2", "int"], c: ["john", "str"] },
        en: "Line 5 prints all three, separated by spaces: <b>1 2 john</b>.",
        ar: "السطر ٥ يطبع الثلاثة مفصولة بمسافات: <b>1 2 john</b>.",
      },
    ],
  },
  {
    file: "ex03_types.py",
    icon: "03",
    t_en: "3 · Data types & type()",
    t_ar: "٣ · أنواع البيانات و type()",
    d_en:
      "int, float, str, bool — every value has a type, and type(x) tells you which.",
    d_ar: "int وfloat وstr وbool — لكل قيمة نوع، وtype(x) يخبرك به.",
    code: [
      "age = 20",
      "height = 1.75",
      'name = "Ali"',
      "flag = True",
      "print(type(age), type(height))",
      "print(type(name), type(flag))",
    ],
    steps: [
      {
        line: 0,
        term: [`${P}age = 20</span>`],
        mem: { age: ["20", "int"] },
        en: "Line 1: <b>20</b> with no decimal point is an <b>int</b> (integer).",
        ar: "السطر ١: القيمة <b>٢٠</b> بلا فاصلة عشرية هي <b>int</b> (عدد صحيح).",
      },
      {
        line: 1,
        term: [`${P}height = 1.75</span>`],
        mem: { age: ["20", "int"], height: ["1.75", "float"] },
        en: "Line 2: <b>1.75</b> has a decimal point, so it is a <b>float</b>.",
        ar: "السطر ٢: القيمة <b>١.٧٥</b> فيها فاصلة عشرية، فهي <b>float</b>.",
      },
      {
        line: 2,
        term: [`${P}name = "Ali"</span>`],
        mem: {
          age: ["20", "int"],
          height: ["1.75", "float"],
          name: ["Ali", "str"],
        },
        en: "Line 3: quoted text is a <b>str</b> (string of characters).",
        ar: "السطر ٣: النص بين علامتي تنصيص هو <b>str</b> (سلسلة حروف).",
      },
      {
        line: 3,
        term: [`${P}flag = True</span>`],
        mem: {
          age: ["20", "int"],
          height: ["1.75", "float"],
          name: ["Ali", "str"],
          flag: ["True", "bool"],
        },
        en: "Line 4: <b>True</b> (with a capital T) is a <b>bool</b> — logical yes.",
        ar: "السطر ٤: القيمة <b>True</b> (بحرف T كبير) هي <b>bool</b> — نعم منطقية.",
      },
      {
        line: 4,
        term: [
          `${P}print(type(age), type(height))</span>`,
          "<class 'int'> <class 'float'>",
        ],
        mem: {
          age: ["20", "int"],
          height: ["1.75", "float"],
          name: ["Ali", "str"],
          flag: ["True", "bool"],
        },
        en: "Line 5: <b>type()</b> reports the kind of value — int for age, float for height.",
        ar: "السطر ٥: الدالة <b>type()</b> تعلن نوع القيمة — int للعمر وfloat للطول.",
      },
      {
        line: 5,
        term: [
          `${P}print(type(name), type(flag))</span>`,
          "<class 'str'> <class 'bool'>",
        ],
        mem: {
          age: ["20", "int"],
          height: ["1.75", "float"],
          name: ["Ali", "str"],
          flag: ["True", "bool"],
        },
        en: "Line 6: name is str, flag is bool. Four values, four different types.",
        ar: "السطر ٦: الاسم str والعلم bool. أربع قيم وأربعة أنواع مختلفة.",
      },
    ],
  },
  {
    file: "ex04_errors.py",
    icon: "04",
    t_en: "4 · Type sensitivity (+ rules)",
    t_ar: "٤ · حساسية الأنواع (قواعد +)",
    d_en:
      "The + operator changes meaning by type: adds numbers, joins strings — and refuses to mix them.",
    d_ar:
      "معنى عامل + يتغير حسب النوع: يجمع الأرقام ويوصل النصوص — ويرفض الخلط بينهما.",
    code: [
      "print(3 + 4)",
      'print("Hello" + "World")',
      'print("3" + "4")',
      'print("Hello" + 1)',
    ],
    steps: [
      {
        line: 0,
        term: [`${P}print(3 + 4)</span>`, "7"],
        mem: {},
        en: "Line 1: number + number = arithmetic addition → <b>7</b>.",
        ar: "السطر ١: عدد + عدد = جمع حسابي ← <b>٧</b>.",
      },
      {
        line: 1,
        term: [`${P}print("Hello" + "World")</span>`, "HelloWorld"],
        mem: {},
        en: "Line 2: str + str = <b>joining</b> → HelloWorld, glued with no space.",
        ar: "السطر ٢: نص + نص = <b>وصل</b> ← HelloWorld ملتصقان دون مسافة.",
      },
      {
        line: 2,
        term: [`${P}print("3" + "4")</span>`, "34"],
        mem: {},
        en: "Line 3: quotes make 3 and 4 text, so + joins them → <b>34</b>, not 7.",
        ar: "السطر ٣: علامتا التنصيص تحولان ٣ و٤ إلى نص، فيوصلهما + ← <b>٣٤</b> وليس ٧.",
      },
      {
        line: 3,
        term: [
          `${P}print("Hello" + 1)</span>`,
          `<span class="${ERR}">TypeError: can only concatenate str (not &quot;int&quot;) to str</span>`,
        ],
        mem: {},
        en: "Line 4: text + number is illegal — Python raises a <b>TypeError</b> instead of guessing.",
        ar: "السطر ٤: نص + عدد غير مسموح — ترفع بايثون <b>TypeError</b> بدل التخمين.",
      },
    ],
  },
  {
    file: "ex05_conversion.py",
    icon: "05",
    t_en: "5 · Type conversion",
    t_ar: "٥ · تحويل الأنواع",
    d_en:
      "int(), float() and str() convert on purpose — and Python converts int→float silently.",
    d_ar:
      "الدوال int() وfloat() وstr() تحوّل بقصد — وبايثون يحوّل int إلى float صامتًا.",
    code: [
      'weight = float("65.5")',
      "print(int(2.9))",
      'print(str(3) + "4")',
      "print(5 + 2.0)",
    ],
    steps: [
      {
        line: 0,
        term: [`${P}weight = float("65.5")</span>`],
        mem: { weight: ["65.5", "float"] },
        en: "Line 1: <b>float()</b> turns the text \"65.5\" into a real number for math.",
        ar: "السطر ١: الدالة <b>float()</b> تحول النص \"65.5\" إلى عدد حقيقي قابل للحساب.",
      },
      {
        line: 1,
        term: [`${P}print(int(2.9))</span>`, "2"],
        mem: { weight: ["65.5", "float"] },
        en: "Line 2: <b>int()</b> truncates: 2.9 becomes <b>2</b> (the fraction is dropped, not rounded).",
        ar: "السطر ٢: الدالة <b>int()</b> تقطع: ٢.٩ تصبح <b>٢</b> (يُهمَل الكسر ولا يُقرَّب).",
      },
      {
        line: 2,
        term: [`${P}print(str(3) + "4")</span>`, "34"],
        mem: { weight: ["65.5", "float"] },
        en: "Line 3: <b>str()</b> turns 3 into text first, so + joins → <b>34</b>.",
        ar: "السطر ٣: الدالة <b>str()</b> تحول ٣ إلى نص أولًا، فيصل + بينهما ← <b>٣٤</b>.",
      },
      {
        line: 3,
        term: [`${P}print(5 + 2.0)</span>`, "7.0"],
        mem: { weight: ["65.5", "float"] },
        en: "Line 4: mixing int with float is allowed — Python silently widens to <b>7.0</b>.",
        ar: "السطر ٤: خلط int مع float مسموح — توسّع بايثون النوع بهدوء إلى <b>7.0</b>.",
      },
    ],
  },
  {
    file: "ex06_operators.py",
    icon: "06",
    t_en: "6 · Operators & precedence",
    t_ar: "٦ · العمليات وأسبقيتها",
    d_en:
      "Arithmetic operators on real samples: // and %, **, and the order in which Python evaluates.",
    d_ar:
      "العمليات الحسابية على أمثلة حقيقية: الأقسام والباقي والأس، وترتيب تقييم بايثون.",
    code: [
      "result = 10 // 3 % 2",
      "print(2 + 3 * 4)",
      "print((2 + 3) * 4)",
      "print(2 ** 3)",
      "print(result)",
    ],
    steps: [
      {
        line: 0,
        term: [`${P}result = 10 // 3 % 2</span>`],
        mem: { result: ["1", "int"] },
        en: "Line 1: <b>10 // 3</b> is floor division → 3, then <b>% 2</b> is the remainder → <b>1</b>. Same precedence, left to right.",
        ar: "السطر ١: <b>10 // 3</b> قسم بأخذ الجزء الصحيح ← ٣، ثم <b>% 2</b> باقي القسمة ← <b>١</b>. أسبقية متساوية، من اليسار إلى اليمين.",
      },
      {
        line: 1,
        term: [`${P}print(2 + 3 * 4)</span>`, "14"],
        mem: { result: ["1", "int"] },
        en: "Line 2: <b>*</b> binds tighter than <b>+</b>, so 3*4 runs first → <b>14</b>.",
        ar: "السطر ٢: عامل <b>*</b> أقوى ارتباطًا من <b>+</b>، فينفَّذ ٣×٤ أولًا ← <b>١٤</b>.",
      },
      {
        line: 2,
        term: [`${P}print((2 + 3) * 4)</span>`, "20"],
        mem: { result: ["1", "int"] },
        en: "Line 3: parentheses win over everything: (2+3) first → <b>20</b>.",
        ar: "السطر ٣: الأقواس تتغلب على كل شيء: (٢+٣) أولًا ← <b>٢٠</b>.",
      },
      {
        line: 3,
        term: [`${P}print(2 ** 3)</span>`, "8"],
        mem: { result: ["1", "int"] },
        en: "Line 4: <b>**</b> is power → 2³ = <b>8</b>.",
        ar: "السطر ٤: العامل <b>**</b> هو الأس ← ٢³ = <b>٨</b>.",
      },
      {
        line: 4,
        term: [`${P}print(result)</span>`, "1"],
        mem: { result: ["1", "int"] },
        en: "Line 5: the saved result from line 1 prints: <b>1</b>, unchanged all along.",
        ar: "السطر ٥: يطبع الناتج المحفوظ من السطر الأول: <b>١</b>، لم يتغير منذ ذلك الحين.",
      },
    ],
  },
];
