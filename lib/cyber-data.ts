/*
  Data for the Cyber Security lecture page — content transferred verbatim
  from lec-1-cyber.html (CIA explorer + self-check quiz).
  `b_en` / body strings may contain trusted presentation markup.
*/

export type CiaItem = {
  letter: string;
  t_en: string;
  t_ar: string;
  b_en: string;
  b_ar: string;
};

export const CIA: CiaItem[] = [
  {
    letter: "C",
    t_en: "Confidentiality",
    t_ar: "السرية",
    b_en: '<b>Data confidentiality:</b> sensitive information is never disclosed to unauthorized persons. <b>Privacy:</b> users control what is collected about them. Core mechanism: <b class="code-font">encryption</b>.',
    b_ar: '<b>سرية البيانات:</b> لا تُكشف المعلومات الحساسة لغير المصرح لهم. <b>الخصوصية:</b> يتحكم المستخدمون فيما يُجمع عنهم. الآلية الأساسية: <b class="code-font">التشفير</b>.',
  },
  {
    letter: "I",
    t_en: "Integrity",
    t_ar: "السلامة",
    b_en: '<b>Data integrity:</b> information and programs change only in a specified, authorized manner. <b>System integrity:</b> the system works free from unauthorized manipulation. Core mechanism: <b class="code-font">hashing</b>.',
    b_ar: '<b>سلامة البيانات:</b> لا تتغير المعلومات والبرامج إلا بطريقة محددة ومصرح بها. <b>سلامة النظام:</b> يعمل النظام دون تلاعب غير مصرح به. الآلية الأساسية: <b class="code-font">التجزئة</b>.',
  },
  {
    letter: "A",
    t_en: "Availability",
    t_ar: "التوافر",
    b_en: 'Systems work on time and services reach authorized users whenever needed — availability covers <b>data and services</b>. Denial-of-service attacks target exactly this pillar.',
    b_ar: 'تعمل الأنظمة في وقتها وتصل الخدمات للمستخدمين المصرح لهم عند الحاجة — والتوافر يخص <b>البيانات والخدمات</b>. هجمات الحرمان من الخدمة تستهدف هذه الركيزة بالذات.',
  },
];

export type QuizItem = {
  q_en: string;
  q_ar: string;
  o_en: string[];
  o_ar: string[];
  a: number;
  e_en?: string;
  e_ar?: string;
};

export const QUIZ: QuizItem[] = [
  {
    q_en: "Computer security is the protection given to a system to attain…",
    q_ar: "أمن الحاسوب هو الحماية الممنوحة للنظام لتحقيق…",
    o_en: [
      "Integrity, availability and confidentiality",
      "Speed, storage and bandwidth",
      "Authentication, billing and logging",
    ],
    o_ar: [
      "السلامة والتوافر والسرية",
      "السرعة والتخزين وعرض النطاق",
      "المصادقة والفوترة والتسجيل",
    ],
    a: 0,
  },
  {
    q_en: "Encryption is the core mechanism for which pillar?",
    q_ar: "التشفير هو الآلية الأساسية لأي ركيزة؟",
    o_en: ["Confidentiality", "Integrity", "Availability"],
    o_ar: ["السرية", "السلامة", "التوافر"],
    a: 0,
  },
  {
    q_en: "Hashing is the core mechanism for which pillar?",
    q_ar: "التجزئة هي الآلية الأساسية لأي ركيزة؟",
    o_en: ["Integrity", "Confidentiality", "Availability"],
    o_ar: ["السلامة", "السرية", "التوافر"],
    a: 0,
  },
  {
    q_en: "Which pair correctly distinguishes data confidentiality from privacy?",
    q_ar: "أي زوج يميز سرية البيانات عن الخصوصية تمييزًا صحيحًا؟",
    o_en: [
      "Confidentiality: no disclosure to unauthorized persons. Privacy: users control what is collected about them.",
      "Confidentiality: users control collection. Privacy: no disclosure to unauthorized persons.",
      "They are the same thing under two names.",
    ],
    o_ar: [
      "السرية: عدم الكشف لغير المصرح لهم. الخصوصية: يتحكم المستخدمون فيما يُجمع عنهم.",
      "السرية: يتحكم المستخدمون فيما يُجمع. الخصوصية: عدم الكشف لغير المصرح لهم.",
      "هما الشيء نفسه باسمين.",
    ],
    a: 0,
  },
  {
    q_en: "Data integrity means information changes only…",
    q_ar: "سلامة البيانات تعني أن المعلومات تتغير فقط…",
    o_en: [
      "in a specified, authorized manner",
      "when the administrator is offline",
      "after a successful denial-of-service attack",
    ],
    o_ar: [
      "بطريقة محددة ومصرح بها",
      "عندما يكون المسؤول غير متصل",
      "بعد نجاح هجوم حرمان من الخدمة",
    ],
    a: 0,
  },
  {
    q_en: "Which statement defines a security mechanism?",
    q_ar: "أي عبارة تعرّف الآلية الأمنية؟",
    o_en: [
      "A process designed to detect, prevent, or recover from a security attack",
      "Any action that endangers information security",
      "A potential violation of system security",
    ],
    o_ar: [
      "عملية مصممة لكشف الهجوم أو منعه أو التعافي منه",
      "أي فعل يعرّض أمن المعلومات للخطر",
      "احتمال حدوث خرق لأمن النظام",
    ],
    a: 0,
  },
  {
    q_en: "Threat versus attack: which is correct?",
    q_ar: "التهديد مقابل الهجوم: أي العبارات صحيحة؟",
    o_en: [
      "A threat is a potential violation; an attack is an assault that actually happens",
      "A threat always causes damage; an attack is only a possibility",
      "They are synonyms in security terminology",
    ],
    o_ar: [
      "التهديد احتمال حدوث خرق، والهجوم اعتداء يحدث فعلًا",
      "التهديد يسبب الضرر دائمًا، والهجوم احتمال فقط",
      "هما مترادفان في مصطلحات الأمن",
    ],
    a: 0,
  },
  {
    q_en: "Passive attacks include…",
    q_ar: "تشمل الهجمات السلبية…",
    o_en: [
      "release of message contents and traffic analysis",
      "masquerade and replay",
      "modification and denial of service",
    ],
    o_ar: [
      "كشف محتوى الرسالة وتحليل الحركة",
      "انتحال الهوية وإعادة الإرسال",
      "التعديل والحرمان من الخدمة",
    ],
    a: 0,
  },
  {
    q_en: "Why are passive attacks so difficult to detect?",
    q_ar: "لماذا يصعب كشف الهجمات السلبية جدًا؟",
    o_en: [
      "No data is altered, so the victim sees nothing unusual",
      "They happen only at night",
      "They always use encryption",
    ],
    o_ar: [
      "لا تتغير أي بيانات فلا يرى الضحية شيئًا غير طبيعي",
      "تحدث ليلًا فقط",
      "تستخدم التشفير دائمًا",
    ],
    a: 0,
  },
  {
    q_en: "An attacker records a valid login and sends it again at midnight. This is…",
    q_ar: "يسجل مهاجم عملية دخول صحيحة ويعيد إرسالها منتصف الليل. هذا…",
    o_en: ["replay (active type 2)", "traffic analysis (passive type 2)", "modification (active type 4)"],
    o_ar: ["إعادة الإرسال (نشط نوع ٢)", "تحليل الحركة (سلبي نوع ٢)", "التعديل (نشط نوع ٤)"],
    a: 0,
  },
  {
    q_en: "Which of these is active attack type 4?",
    q_ar: "أي مما يلي هجوم نشط من النوع ٤؟",
    o_en: ["Denial of service", "Masquerade", "Traffic analysis"],
    o_ar: ["الحرمان من الخدمة", "انتحال الهوية", "تحليل الحركة"],
    a: 0,
  },
  {
    q_en: "In the model for network security, the four design tasks start with…",
    q_ar: "في نموذج أمن الشبكة تبدأ مهام التصميم الأربع بـ…",
    o_en: [
      "designing the algorithm for the security transformation",
      "buying a firewall",
      "training end users",
    ],
    o_ar: [
      "تصميم خوارزمية التحويل الأمني",
      "شراء جدار ناري",
      "تدريب المستخدمين",
    ],
    a: 0,
  },
  {
    q_en: "Cyber security is also known as…",
    q_ar: "يُعرف الأمن السيبراني أيضًا بـ…",
    o_en: ["IT security or electronic information security", "network administration", "digital marketing"],
    o_ar: ["أمن تكنولوجيا المعلومات أو أمن المعلومات الإلكترونية", "إدارة الشبكات", "التسويق الرقمي"],
    a: 0,
  },
  {
    q_en: "End-user education matters because…",
    q_ar: "توعية المستخدم النهائي مهمة لأن…",
    o_en: [
      "one mistake can infect a secure system",
      "users configure firewalls",
      "it replaces antivirus",
    ],
    o_ar: [
      "خطأ واحد قد يصيب نظامًا آمنًا",
      "المستخدمون يضبطون الجدران النارية",
      "إنها تغني عن مضاد الفيروسات",
    ],
    a: 0,
  },
  {
    q_en: "Which threat type is politically motivated information gathering?",
    q_ar: "أي نوع من التهديدات يمثل جمع معلومات بدوافع سياسية؟",
    o_en: ["Cyber-attack", "Cybercrime", "Cyberterrorism"],
    o_ar: ["الهجوم السيبراني", "الجرائم الإلكترونية", "الإرهاب السيبراني"],
    a: 0,
  },
  {
    q_en: "Cyberterrorism is intended to undermine electronic systems in order to…",
    q_ar: "الإرهاب السيبراني يهدف إلى تقويض الأنظمة الإلكترونية بهدف…",
    o_en: ["cause panic or fear", "maximize quarterly profit", "test backup restore speed"],
    o_ar: ["بث الذعر أو الخوف", "تعظيم الربح الربعي", "اختبار سرعة استعادة النسخ الاحتياطية"],
    a: 0,
  },
];

/*
  Full quiz app data (Lectures 1 + 2). Plain text only — rendered as text
  nodes, never as HTML. Answers verified client-side; nothing is submitted.
*/
export const QUIZ_APP: QuizItem[] = [
  {
    q_en: "Encryption mainly protects which CIA pillar?",
    q_ar: "التشفير يحمي أي ركيزة من CIA أساسًا؟",
    o_en: ["Confidentiality", "Availability", "Usability"],
    o_ar: ["السرية", "التوافر", "سهولة الاستخدام"],
    a: 0,
    e_en: "Encryption keeps information unreadable to unauthorized parties — confidentiality. Hashing protects integrity.",
    e_ar: "التشفير يمنع غير المصرح لهم من قراءة المعلومات — السرية. أما التجزئة فتحمي السلامة.",
  },
  {
    q_en: "Which of these is a passive attack?",
    q_ar: "أي مما يلي هجوم سلبي؟",
    o_en: ["Traffic analysis", "Masquerade", "Denial of service"],
    o_ar: ["تحليل الحركة", "انتحال الهوية", "الحرمان من الخدمة"],
    a: 0,
    e_en: "Passive attacks only observe (release of contents, traffic analysis). Masquerade and DoS actively change or disrupt.",
    e_ar: "الهجمات السلبية تراقب فقط (كشف المحتوى وتحليل الحركة). أما انتحال الهوية والحرمان من الخدمة فهي نشطة تغيّر أو تعطّل.",
  },
  {
    q_en: "The Caesar cipher with key k is a special case of…",
    q_ar: "شيفرة قيصر بمفتاح k هي حالة خاصة من…",
    o_en: ["The additive cipher C = (p + k) mod 26", "The multiplicative cipher", "The Hill cipher"],
    o_ar: ["الشيفرة الجمعية C = (p + k) mod 26", "الشيفرة الضربية", "شيفرة هيل"],
    a: 0,
    e_en: "Caesar is the additive cipher with the fixed shift k = 3; the general form allows any k in 0..25.",
    e_ar: "قيصر هي الشيفرة الجمعية بإزاحة ثابتة k = ٣، والصورة العامة تسمح بأي k من ٠ إلى ٢٥.",
  },
  {
    q_en: "In the multiplicative cipher, the key k must satisfy…",
    q_ar: "في الشيفرة الضربية يجب أن يحقق المفتاح k…",
    o_en: ["gcd(k, 26) = 1", "k is even", "k ≤ 12"],
    o_ar: ["أن يكون أوليًا مع ٢٦ — gcd(k, 26) = 1", "أن يكون زوجيًا", "أن يقل عن ١٢"],
    a: 0,
    e_en: "Only keys coprime with 26 give a one-to-one map, so decryption with the modular inverse k⁻¹ works. That leaves 12 valid keys.",
    e_ar: "فقط المفاتيح الأولية مع ٢٦ تعطي تطابقًا واحدًا لواحد فيعمل فك التشفير بالمعكوس الضربي، فيبقى ١٢ مفتاحًا صالحًا.",
  },
  {
    q_en: "The Affine cipher C = (a·p + b) mod 26 has how many keys?",
    q_ar: "كم عدد مفاتيح شيفرة الأفيني C = (a·p + b) mod 26؟",
    o_en: ["312", "25", "26!"],
    o_ar: ["٣١٢", "٢٥", "٢٦!"],
    a: 0,
    e_en: "12 valid values for a (coprime with 26) × 26 values for b = 312 keys — still breakable by brute force.",
    e_ar: "١٢ قيمة صالحة لـ a (الأولية مع ٢٦) × ٢٦ قيمة لـ b = ٣١٢ مفتاحًا — وتبقى قابلة للكسر بالقوة الغاشمة.",
  },
  {
    q_en: "Why does frequency analysis defeat every monoalphabetic cipher?",
    q_ar: "لماذا يهزم تحليل التكرار كل شيفرة أحادية الأبجدية؟",
    o_en: [
      "One fixed map preserves English letter statistics in the ciphertext",
      "The key is too short to memorize",
      "It never wraps around the alphabet",
    ],
    o_ar: [
      "الخريطة الثابتة تحفظ إحصاءات اللغة في النص المشفر",
      "المفتاح قصير جدًا فلا يُحفظ",
      "أنها لا تلتف حول الأبجدية",
    ],
    a: 0,
    e_en: "Each plaintext letter always maps to the same ciphertext letter, so E ≈ 12.7%, TH/THE and friends survive and reveal the map.",
    e_ar: "كل حرف يُترجم دائمًا لنفس الحرف، فتبقى نسب مثل E ≈ ١٢٫٧٪ وأزواج مثل TH فتكشف الخريطة.",
  },
  {
    q_en: "In simple Vigenère with keyword length m, the first attack is…",
    q_ar: "في فينير البسيط بطول كلمة m، الهجوم الأول هو…",
    o_en: [
      "Kasiski examination to find the keyword length",
      "Trying all 26 shifts on the whole text",
      "Rebuilding the 5×5 matrix",
    ],
    o_ar: [
      "تحليل كاسكي لمعرفة طول الكلمة المفتاحية",
      "تجربة ٢٦ إزاحة على النص كله",
      "إعادة بناء مصفوفة ٥×٥",
    ],
    a: 0,
    e_en: "Repeated ciphertext groups and the Index of Coincidence reveal m; then the text splits into m Caesar streams solved by frequency.",
    e_ar: "المجموعات المتكررة ومعامل التزامن يكشفان m، ثم ينقسم النص إلى m مجرى قيصر تُحل بالتكرار.",
  },
  {
    q_en: "In Playfair, two letters of a digraph fall in the same row. The replacement is…",
    q_ar: "في بليفير، وقع حرفا الزوج في الصف نفسه. الاستبدال يكون…",
    o_en: [
      "Each letter → the letter to its right, wrapping around",
      "Each letter → the letter below it",
      "Swap the two letters in place",
    ],
    o_ar: [
      "كل حرف يُستبدل بالحرف على يمينه مع الالتفاف",
      "كل حرف يُستبدل بالحرف تحته",
      "تبديل الحرفين مكانهما",
    ],
    a: 0,
    e_en: "Same row → move right; same column → move down; otherwise the rectangle rule (own row, other's column).",
    e_ar: "الصف نفسه → إلى اليمين؛ العمود نفسه → إلى الأسفل؛ غير ذلك قاعدة المستطيل (صفه وعمود الآخر).",
  },
  {
    q_en: "The Hill cipher's main weakness is that it is…",
    q_ar: "ضعف شيفرة هيل الأساسي أنها…",
    o_en: [
      "Linear — known plaintext pairs recover the matrix K directly",
      "Limited to 12 keys",
      "Unable to encrypt numbers",
    ],
    o_ar: [
      "خطية — الأزواج المعروفة تكشف المصفوفة K مباشرة",
      "محدودة بـ ١٢ مفتاحًا",
      "لا تستطيع تشفير الأرقام",
    ],
    a: 0,
    e_en: "Because C = K·P mod 26 is linear, m known (P, C) vector pairs solve for K — yet it inspired modern linear steps like AES MixColumns.",
    e_ar: "لأن C = K·P mod 26 خطية، تكفي m أزواج معروفة لحل K — ومع ذلك مهّدت لخطوات حديثة مثل MixColumns في AES.",
  },
  {
    q_en: "A transposition ciphertext shows perfectly English letter frequencies. This tells the analyst…",
    q_ar: "ظهر في نص مشفر بتبديل تكرار حروف إنجليزي مثالي. هذا يخبر المحلل أن…",
    o_en: [
      "Only positions were shuffled — digram patterns can recover the columns",
      "The plaintext was another language",
      "A one-time pad was used",
    ],
    o_ar: [
      "أن المواضع فقط خُلطت — وأنماط الأزواج تكشف الأعمدة",
      "أن النص الأصلي بلغة أخرى",
      "أنه استُخدمت الوسادة العابرة",
    ],
    a: 0,
    e_en: "Transposition substitutes nothing, so frequencies stay English; analysts reconstruct the grid from common digram positions like TH and HE.",
    e_ar: "التبديل لا يستبدل شيئًا فتبقى النسب إنجليزية؛ يعيد المحلل بناء الشبكة من مواضع الأزواج الشائعة مثل TH وHE.",
  },
  {
    q_en: "Shannon's confusion and diffusion map to which two operations?",
    q_ar: "الإشوشة والانتشار عند شانون يقابلان أي عملية؟",
    o_en: [
      "Confusion = substitution, diffusion = transposition",
      "Confusion = transposition, diffusion = substitution",
      "Both = compression",
    ],
    o_ar: [
      "الإشوشة = الإحلال، والانتشار = التبديل",
      "الإشوشة = التبديل، والانتشار = الإحلال",
      "كلاهما = الضغط",
    ],
    a: 0,
    e_en: "Substitution obscures the key↔ciphertext relationship; transposition spreads each letter's influence. Rounds of both build DES and AES.",
    e_ar: "الإحلال يحجب علاقة المفتاح بالنص المشفر، والتبديل ينشر تأثير كل حرف؛ جولاتهما معًا تبني DES وAES.",
  },
  {
    q_en: "The One-Time Pad is unbreakable because…",
    q_ar: "الوسادة العابرة غير قابلة للكسر لأن…",
    o_en: [
      "A random key as long as the message, used once, leaves every plaintext equally likely",
      "It uses matrix multiplication",
      "The alphabet is reversed",
    ],
    o_ar: [
      "مفتاح عشوائي بطول الرسالة يُستخدم مرة واحدة فيصبح كل نص أصلي محتملًا بالتساوي",
      "أنها تستخدم ضرب المصفوفات",
      "أن الأبجدية معكوسة",
    ],
    a: 0,
    e_en: "Perfect secrecy (Shannon 1949) — but key distribution and no-reuse rules make it impractical, so it lives on as the model for stream ciphers.",
    e_ar: "سرية تامة (شانون ١٩٤٩) — لكن توزيع المفاتيح ومنع إعادة الاستخدام يجعلانها غير عملية، فبقيت نموذجًا لشيفرات التدفق الحديثة.",
  },
];
