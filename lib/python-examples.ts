/*
  The 10 scripted examples, steps, terminal lines and EN/AR copy.
  Content transferred verbatim from python-page.html (EXAMPLES array).
  `term` / `en` / `ar` strings may contain trusted presentation markup.
*/

export type MemVal = readonly [string, string]; // [value, type]
export type PyStep = {
  line: number;
  term: string[];
  mem: Record<string, MemVal>;
  en: string;
  ar: string;
};
export type PyExample = {
  file: string;
  icon: string;
  t_en: string;
  t_ar: string;
  d_en: string;
  d_ar: string;
  code: string[];
  steps: PyStep[];
};

export const EXAMPLES: PyExample[] = [
  {
    file: "ex01_variables.py",
    icon: "01",
    t_en: "1 · Variables and print",
    t_ar: "١ · المتغيرات و print",
    d_en: "Store numbers in variables and display them. Watch memory gain Var1, Var_2, total.",
    d_ar: "خزّن أرقامًا في متغيرات واعرضها. راقب الذاكرة وهي تكتسب Var1 و Var_2 و total.",
    code: [
      "Var1 = 10",
      "Var_2 = 3",
      'print("Var1 =", Var1)',
      'print("Var_2 =", Var_2)',
      "total = Var1 + Var_2",
      'print("total =", total)',
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; Var1 = 10</span>'],
        mem: { Var1: ["10", "int"] },
        en: "Line 1 creates variable <b>Var1</b> and stores 10. Nothing prints, it just lives in memory.",
        ar: "السطر ١ ينشئ المتغير <b>Var1</b> ويخزن ١٠. لا طباعة، فقط يسكن في الذاكرة.",
      },
      {
        line: 1,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; Var_2 = 3</span>'],
        mem: { Var1: ["10", "int"], Var_2: ["3", "int"] },
        en: "Line 2 creates <b>Var_2 = 3</b>. Now two boxes exist in memory.",
        ar: "السطر ٢ ينشئ <b>Var_2 = 3</b>. الآن يوجد صندوقان في الذاكرة.",
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print("Var1 =", Var1)</span>',
          "Var1 = 10",
        ],
        mem: { Var1: ["10", "int"], Var_2: ["3", "int"] },
        en: "<b>print()</b> reads Var1 from memory and shows its value on screen.",
        ar: "دالة <b>print()</b> تقرأ Var1 من الذاكرة وتعرض قيمته على الشاشة.",
      },
      {
        line: 3,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print("Var_2 =", Var_2)</span>',
          "Var_2 = 3",
        ],
        mem: { Var1: ["10", "int"], Var_2: ["3", "int"] },
        en: "Same idea: the interpreter substitutes Var_2 with 3, then prints.",
        ar: "نفس الفكرة: يستبدل المفسر Var_2 بالقيمة ٣ ثم يطبع.",
      },
      {
        line: 4,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; total = Var1 + Var_2 = 10 + 3</span>',
        ],
        mem: { Var1: ["10", "int"], Var_2: ["3", "int"], total: ["13", "int"] },
        en: "The interpreter evaluates <b>10 + 3 = 13</b> first, then stores it in new variable <b>total</b>.",
        ar: "يقيّم المفسر <b>١٠ + ٣ = ١٣</b> أولًا، ثم يخزنها في متغير جديد <b>total</b>.",
      },
      {
        line: 5,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print("total =", total)</span>',
          "total = 13",
        ],
        mem: { Var1: ["10", "int"], Var_2: ["3", "int"], total: ["13", "int"] },
        en: "Final output confirms the addition worked. Program ends.",
        ar: "الناتج الأخير يؤكد نجاح الجمع. انتهى البرنامج.",
      },
    ],
  },

  {
    file: "ex02_arithmetic.py",
    icon: "02",
    t_en: "2 · Arithmetic operators",
    t_ar: "٢ · العمليات الحسابية",
    d_en: "Plus, minus, times, divide, floor, modulo, power. One program with live results.",
    d_ar: "جمع وطرح وضرب وقسمة وأرضية وباقٍ وأُس. برنامج واحد بنتائج حية.",
    code: [
      "a = 10",
      "b = 3",
      "print(a + b)",
      "print(a - b)",
      "print(a * b)",
      "print(a / b)",
      "print(a // b)",
      "print(a % b)",
      "print(a ** b)",
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; a = 10</span>'],
        mem: { a: ["10", "int"] },
        en: "Store 10 in <b>a</b>.",
        ar: "خزّن ١٠ في <b>a</b>.",
      },
      {
        line: 1,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; b = 3</span>'],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Store 3 in <b>b</b>.",
        ar: "خزّن ٣ في <b>b</b>.",
      },
      {
        line: 2,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(a + b)</span>', "13"],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Addition: 10 + 3 = <b>13</b>.",
        ar: "الجمع: ١٠ + ٣ = <b>١٣</b>.",
      },
      {
        line: 3,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(a - b)</span>', "7"],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Subtraction: 10 minus 3 = <b>7</b>.",
        ar: "الطرح: ١٠ ناقص ٣ = <b>٧</b>.",
      },
      {
        line: 4,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(a * b)</span>', "30"],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Multiplication: 10 times 3 = <b>30</b>.",
        ar: "الضرب: ١٠ في ٣ = <b>٣٠</b>.",
      },
      {
        line: 5,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(a / b)</span>',
          "3.3333333333333335",
        ],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "True division always gives a <b>float</b>.",
        ar: "القسمة الحقيقية تعطي <b>float</b> دائمًا.",
      },
      {
        line: 6,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(a // b)</span>', "3"],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Floor division drops the fraction, result <b>3</b>.",
        ar: "القسمة الأرضية تحذف الكسر، الناتج <b>٣</b>.",
      },
      {
        line: 7,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(a % b)</span>', "1"],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Modulo is the remainder of 10 divided by 3, result <b>1</b>.",
        ar: "باقي القسمة ١٠ على ٣، الناتج <b>١</b>.",
      },
      {
        line: 8,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(a ** b)</span>', "1000"],
        mem: { a: ["10", "int"], b: ["3", "int"] },
        en: "Power: 10 cubed = <b>1000</b>.",
        ar: "الأُس: ١٠ تكعيب = <b>١٠٠٠</b>.",
      },
    ],
  },

  {
    file: "ex03_strings.py",
    icon: "03",
    t_en: "3 · Strings and f-strings",
    t_ar: "٣ · النصوص و f-strings",
    d_en: "Concatenation, len(), upper(), and modern f-string formatting.",
    d_ar: "الدمج ودالة len()‎ و upper()‎ وتنسيق f-string الحديث.",
    code: [
      'name = "Sara"',
      'greet = "Hello, " + name',
      "print(greet)",
      "print(len(name))",
      "print(name.upper())",
      'print(f"Hi {name}, you have {len(name)} letters!")',
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; name = "Sara"</span>'],
        mem: { name: ['"Sara"', "str"] },
        en: "A <b>string</b> is text in quotes. Stored in <b>name</b>.",
        ar: "الـ <b>string</b> نص بين علامتي تنصيص. خُزّن في <b>name</b>.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; greet = "Hello, " + name</span>',
        ],
        mem: { name: ['"Sara"', "str"], greet: ['"Hello, Sara"', "str"] },
        en: "<b>+</b> between strings means concatenate (glue them).",
        ar: "علامة <b>+</b> بين النصوص تعني الدمج.",
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(greet)</span>',
          "Hello, Sara",
        ],
        mem: { name: ['"Sara"', "str"], greet: ['"Hello, Sara"', "str"] },
        en: "Prints the glued greeting.",
        ar: "يطبع التحية المدمجة.",
      },
      {
        line: 3,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(len(name))</span>',
          "4",
        ],
        mem: { name: ['"Sara"', "str"], greet: ['"Hello, Sara"', "str"] },
        en: "<b>len()</b> counts characters, result 4.",
        ar: "دالة <b>len()</b> تعد الحروف، الناتج ٤.",
      },
      {
        line: 4,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(name.upper())</span>',
          "SARA",
        ],
        mem: { name: ['"Sara"', "str"], greet: ['"Hello, Sara"', "str"] },
        en: "<b>.upper()</b> returns a new all-caps copy.",
        ar: "دالة <b>.upper()</b> ترجع نسخة بأحرف كبيرة.",
      },
      {
        line: 5,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(f"Hi {name}...")</span>',
          "Hi Sara, you have 4 letters!",
        ],
        mem: { name: ['"Sara"', "str"], greet: ['"Hello, Sara"', "str"] },
        en: "<b>f-strings</b> embed variables directly in braces.",
        ar: "الـ <b>f-strings</b> تضمّن المتغيرات مباشرة بين قوسين.",
      },
    ],
  },

  {
    file: "ex04_input.py",
    icon: "04",
    t_en: "4 · input() and int()",
    t_ar: "٤ · input()‎ و int()‎",
    d_en: "Programs can ask the user for data. input() returns text, int() converts it.",
    d_ar: "يمكن للبرنامج سؤال المستخدم. input()‎ ترجع نصًا و int()‎ تحوّله لرقم.",
    code: [
      'age = input("Enter age: ")',
      "age = int(age)",
      "next_year = age + 1",
      'print("Next year you are", next_year)',
    ],
    steps: [
      {
        line: 0,
        term: [
          'Enter age: <span class="text-amber-300 font-bold">20 (user typed)</span>',
        ],
        mem: {},
        en: '<b>input()</b> pauses and waits for the keyboard. Simulated user typed <b>20</b> (still text "20").',
        ar: 'دالة <b>input()</b> تتوقف منتظرة لوحة المفاتيح. المستخدم كتب <b>٢٠</b> (كنص "٢٠").',
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; age = int("20") = 20</span>',
        ],
        mem: { age: ["20", "int"] },
        en: '<b>int()</b> converts text "20" into number 20 so math works.',
        ar: 'دالة <b>int()</b> تحوّل النص "٢٠" إلى الرقم ٢٠ لتعمل الحسابات.',
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; next_year = 20 + 1 = 21</span>',
        ],
        mem: { age: ["20", "int"], next_year: ["21", "int"] },
        en: "Adds 1. Impossible with raw text, which is why conversion mattered.",
        ar: "يجمع ١. مستحيل مع النص الخام، لهذا كان التحويل مهمًا.",
      },
      {
        line: 3,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(...)</span>',
          "Next year you are 21",
        ],
        mem: { age: ["20", "int"], next_year: ["21", "int"] },
        en: 'Final friendly message. Without int(), "20" + 1 would crash.',
        ar: 'الرسالة النهائية. بدون int()‎ كان "٢٠" + ١ سيسبب خطأ.',
      },
    ],
  },

  {
    file: "ex05_ifelse.py",
    icon: "05",
    t_en: "5 · if / else decision",
    t_ar: "٥ · قرار if / else",
    d_en: "The program branches: Pass if score is 50 or more, else Fail.",
    d_ar: "يتفرع البرنامج: ناجح إذا الدرجة ٥٠ فأكثر وإلا راسب.",
    code: [
      "score = 75",
      "if score >= 50:",
      '    print("Pass")',
      "else:",
      '    print("Fail")',
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; score = 75</span>'],
        mem: { score: ["75", "int"] },
        en: "Store exam score 75.",
        ar: "خزّن درجة الامتحان ٧٥.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; if 75 &gt;= 50: = True, enter if-branch</span>',
        ],
        mem: { score: ["75", "int"] },
        en: "Condition is <b>True</b>, so the interpreter enters the if-branch and <b>skips else</b>.",
        ar: "الشرط <b>صحيح</b>، فيدخل المفسر فرع if <b>ويتخطى else</b>.",
      },
      {
        line: 2,
        term: ["Pass"],
        mem: { score: ["75", "int"] },
        en: "This line runs because the condition was True.",
        ar: "هذا السطر يُنفذ لأن الشرط كان صحيحًا.",
      },
      {
        line: 3,
        term: ['<span class="text-stone-400">else: skipped</span>'],
        mem: { score: ["75", "int"] },
        en: "<b>else</b> is skipped entirely. Change score to 30 and it would flip.",
        ar: "يُتخطى <b>else</b> تمامًا. غيّر الدرجة إلى ٣٠ وسينعكس الأمر.",
      },
      {
        line: 4,
        term: [
          '<span class="text-stone-400 italic">print("Fail") was not executed</span>',
        ],
        mem: { score: ["75", "int"] },
        en: "Never runs in this case. Program ends.",
        ar: "لا يُنفذ أبدًا في هذه الحالة. انتهى البرنامج.",
      },
    ],
  },

  {
    file: "ex06_forloop.py",
    icon: "06",
    t_en: "6 · for loop and sum",
    t_ar: "٦ · حلقة for‎ والمجموع",
    d_en: "Repeat with range(5) and add each i to total. Watch total grow each lap.",
    d_ar: "التكرار مع range(5)‎ وإضافة كل i إلى total. راقب total يكبر كل لفة.",
    code: [
      "total = 0",
      "for i in range(5):",
      "    total = total + i",
      '    print(i, "total:", total)',
      'print("Final:", total)',
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; total = 0</span>'],
        mem: { total: ["0", "int"] },
        en: "Counter starts at 0 before the loop.",
        ar: "يبدأ العداد من ٠ قبل الحلقة.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; for i in range(5): i = 0,1,2,3,4</span>',
        ],
        mem: { total: ["0", "int"], i: ["0", "int"] },
        en: "<b>range(5)</b> produces 0 to 4. First lap: <b>i = 0</b>.",
        ar: "دالة <b>range(5)‎</b> تنتج ٠ إلى ٤. اللفة الأولى: <b>i = 0</b>.",
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; total = 0 + 0 = 0</span>',
        ],
        mem: { total: ["0", "int"], i: ["0", "int"] },
        en: "Adds i to total (0 + 0 stays 0).",
        ar: "يضيف i إلى total (٠ + ٠ = ٠).",
      },
      {
        line: 3,
        term: ["0 total: 0"],
        mem: { total: ["0", "int"], i: ["0", "int"] },
        en: "Prints lap state.",
        ar: "يطبع حالة اللفة.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">next laps: i = 1, 2, 3, 4</span>',
          "1 total: 1",
          "2 total: 3",
          "3 total: 6",
          "4 total: 10",
        ],
        mem: { total: ["10", "int"], i: ["4", "int"] },
        en: "Loop repeats: total becomes 1, then 3, 6, finally <b>10</b> (0+1+2+3+4).",
        ar: "تتكرر الحلقة: يصبح total ١ ثم ٣ ثم ٦ وأخيرًا <b>١٠</b>.",
      },
      {
        line: 4,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print("Final:", total)</span>',
          "Final: 10",
        ],
        mem: { total: ["10", "int"], i: ["4", "int"] },
        en: "After the loop, print the accumulated sum.",
        ar: "بعد الحلقة، اطبع المجموع المتراكم.",
      },
    ],
  },

  {
    file: "ex07_while.py",
    icon: "07",
    t_en: "7 · while loop countdown",
    t_ar: "٧ · حلقة while‎",
    d_en: "Keep looping while count is below 3. The condition is checked every lap.",
    d_ar: "استمر ما دام count أصغر من ٣. يُعاد فحص الشرط كل لفة.",
    code: [
      "count = 0",
      "while count < 3:",
      '    print("count =", count)',
      "    count = count + 1",
      'print("Done!")',
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; count = 0</span>'],
        mem: { count: ["0", "int"] },
        en: "Start counter at 0.",
        ar: "ابدأ العداد من ٠.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; while 0 &lt; 3: True, enter loop</span>',
        ],
        mem: { count: ["0", "int"] },
        en: "Condition True, so enter the loop body.",
        ar: "الشرط صحيح، ادخل جسم الحلقة.",
      },
      {
        line: 2,
        term: ["count = 0"],
        mem: { count: ["0", "int"] },
        en: "Print current count.",
        ar: "اطبع العداد الحالي.",
      },
      {
        line: 3,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; count = 0 + 1 = 1</span>',
        ],
        mem: { count: ["1", "int"] },
        en: "Increment. Without this the loop would run forever.",
        ar: "الزيادة. بدونها ستعمل الحلقة للأبد.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">re-check: 1&lt;3 yes, 2&lt;3 yes, 3&lt;3 no, stop</span>',
          "count = 1",
          "count = 2",
        ],
        mem: { count: ["3", "int"] },
        en: "Rechecks each lap: prints 1 then 2. At 3 the condition is False, so exit.",
        ar: "يُعاد الفحص كل لفة: يطبع ١ ثم ٢. عند ٣ يصبح الشرط خطأ، اخرج.",
      },
      {
        line: 4,
        term: ["Done!"],
        mem: { count: ["3", "int"] },
        en: "First line after the loop runs now.",
        ar: "أول سطر بعد الحلقة يُنفذ الآن.",
      },
    ],
  },

  {
    file: "ex08_lists.py",
    icon: "08",
    t_en: "8 · Lists",
    t_ar: "٨ · القوائم Lists",
    d_en: "Ordered collections: index them, append, and measure with len().",
    d_ar: "مجموعات مرتبة: الوصول بالفهرس والإضافة بـ append والقياس بـ len()‎.",
    code: [
      'fruits = ["apple", "banana"]',
      "print(fruits[0])",
      'fruits.append("mango")',
      "print(fruits)",
      "print(len(fruits))",
    ],
    steps: [
      {
        line: 0,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; fruits = ["apple", "banana"]</span>',
        ],
        mem: { fruits: ['["apple", "banana"]', "list"] },
        en: "A <b>list</b> holds many values in order. Indexing starts at 0.",
        ar: "الـ <b>list</b> تحمل قيمًا كثيرة بالترتيب. الفهرسة تبدأ من ٠.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(fruits[0])</span>',
          "apple",
        ],
        mem: { fruits: ['["apple", "banana"]', "list"] },
        en: "<b>[0]</b> is the first item: apple.",
        ar: "<b>[0]</b> هو العنصر الأول: apple.",
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; fruits.append("mango")</span>',
        ],
        mem: { fruits: ['["apple", "banana", "mango"]', "list"] },
        en: "<b>.append()</b> grows the list in memory. Watch the chip update.",
        ar: "دالة <b>.append()</b> تكبّر القائمة في الذاكرة. راقب البطاقة تتحدث.",
      },
      {
        line: 3,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(fruits)</span>',
          "['apple', 'banana', 'mango']",
        ],
        mem: { fruits: ['["apple", "banana", "mango"]', "list"] },
        en: "Whole list now has 3 items.",
        ar: "أصبحت القائمة كلها ٣ عناصر.",
      },
      {
        line: 4,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(len(fruits))</span>',
          "3",
        ],
        mem: { fruits: ['["apple", "banana", "mango"]', "list"] },
        en: "<b>len()</b> of a list is its item count.",
        ar: "دالة <b>len()</b> للقائمة هي عدد عناصرها.",
      },
    ],
  },

  {
    file: "ex09_functions.py",
    icon: "09",
    t_en: "9 · Functions",
    t_ar: "٩ · الدوال Functions",
    d_en:
      "Define once with def, call anywhere. Arguments go in, return value comes out.",
    d_ar: "عرّف مرة واحدة واستدعِ في أي مكان. المدخلات تدخل والقيمة المرجعة تخرج.",
    code: ["def add(a, b):", "    return a + b", "result = add(4, 5)", "print(result)"],
    steps: [
      {
        line: 0,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; def add(a, b): defined, not run yet</span>',
        ],
        mem: {},
        en: "<b>def</b> only defines the recipe. Its body does NOT run yet.",
        ar: "أمر <b>def</b> يعرّف الوصفة فقط. جسمها <b>لا</b> يُنفذ بعد.",
      },
      {
        line: 1,
        term: [
          '<span class="text-stone-400 italic">return a + b (waiting for a call)</span>',
        ],
        mem: {},
        en: "The return line waits inside the function.",
        ar: "سطر الإرجاع ينتظر داخل الدالة.",
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; result = add(4, 5): a=4, b=5, returns 9</span>',
        ],
        mem: { result: ["9", "int"] },
        en: "<b>Calling</b> add(4,5) jumps into the function, computes 9, returns it into <b>result</b>.",
        ar: "<b>استدعاء</b> add(4,5)‎ يقفز داخل الدالة ويحسب ٩ ويرجعها إلى <b>result</b>.",
      },
      {
        line: 3,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; print(result)</span>', "9"],
        mem: { result: ["9", "int"] },
        en: "Prints the returned value. Reusable: add(10,20) would give 30.",
        ar: "يطبع القيمة المرجعة. قابلة لإعادة الاستخدام.",
      },
    ],
  },

  {
    file: "ex10_errors.py",
    icon: "10",
    t_en: "10 · Errors and debugging",
    t_ar: "١٠ · الأخطاء وتصحيحها",
    d_en:
      "See a real Traceback: the interpreter stops at the faulty line and tells you why.",
    d_ar: "شاهد خطأ حقيقيًا: يتوقف المفسر عند السطر المعطوب ويخبرك بالسبب.",
    code: [
      "x = 10",
      "y = 0",
      "print(x / y)",
      'print("This never runs")',
    ],
    steps: [
      {
        line: 0,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; x = 10</span>'],
        mem: { x: ["10", "int"] },
        en: "x stored fine.",
        ar: "خُزّن x بنجاح.",
      },
      {
        line: 1,
        term: ['<span class="text-stone-400">&gt;&gt;&gt; y = 0</span>'],
        mem: { x: ["10", "int"], y: ["0", "int"] },
        en: "y = 0 stored fine. The trap is set.",
        ar: "خُزّن y = 0 بنجاح. الفخ منصوب.",
      },
      {
        line: 2,
        term: [
          '<span class="text-stone-400">&gt;&gt;&gt; print(10 / 0)</span>',
          '<span class="text-red-400 font-bold">ZeroDivisionError: division by zero</span>',
          '<span class="text-stone-400">  File "ex10", line 3, in &lt;module&gt;</span>',
        ],
        mem: { x: ["10", "int"], y: ["0", "int"] },
        en: "<b>Crash.</b> Dividing by zero is illegal. Python prints a red <b>Traceback</b> naming the line and error type.",
        ar: "<b>تعطل.</b> القسمة على صفر غير مسموحة. تطبع بايثون <b>Traceback</b> أحمر يسمي السطر ونوع الخطأ.",
      },
      {
        line: 3,
        term: [
          '<span class="text-stone-400 italic">Interpreter stopped. Line 4 never runs. Fix: check "if y != 0" first.</span>',
        ],
        mem: { x: ["10", "int"], y: ["0", "int"] },
        en: "The interpreter <b>halts</b>. No further lines execute. Lesson: validate before dividing.",
        ar: "يتوقف المفسر <b>تمامًا</b>. لا سطر بعده يُنفذ. الدرس: تحقق قبل القسمة.",
      },
    ],
  },
];

/* ---------- syntax highlighter ---------- */
export function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function hl(code: string): string {
  // Tokyo Night: strings green, keywords purple, numbers orange, comments blue-gray.
  let s = esc(code);
  s = s.replace(/(&quot;|&#39;|".*?"|'.*?')/g, '<span style="color:#9ece6a">$1</span>');
  s = s.replace(/(^|\s)(#[^<]*)$/, "$1<span style=\"color:#565f89\">$2</span>");
  s = s.replace(
    /\b(def|return|if|else|elif|for|while|in|range|len|print|input|int|str|float|True|False|None|append|upper|lower)\b/g,
    '<span style="color:#bb9af7">$1</span>',
  );
  s = s.replace(/\b(\d+\.?\d*)\b/g, '<span style="color:#ff9e64">$1</span>');
  return s.replace(/&quot;/g, '"');
}
