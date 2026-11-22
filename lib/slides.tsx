/*
  Slide deck data for the presentation — content transferred verbatim from
  cyber-presentation.html (S array, per-slide notes X, Wikimedia CC BY photos).
  Photos: Wikimedia Commons contributors (CC BY).
*/

import {
  X_00_EN, X_00_AR, X_01_EN, X_01_AR, X_02_EN, X_02_AR, X_03_EN, X_03_AR,
  X_04_EN, X_04_AR, X_05_EN, X_05_AR, X_06_EN, X_06_AR, X_07_EN, X_07_AR,
  X_08_EN, X_08_AR, X_09_EN, X_09_AR, X_10_EN, X_10_AR, X_11_EN, X_11_AR,
  X_12_EN, X_12_AR, X_13_EN, X_13_AR, X_14_EN, X_14_AR, X_15_EN, X_15_AR,
  X_16_EN, X_16_AR, X_17_EN, X_17_AR, X_18_EN, X_18_AR, X_19_EN, X_19_AR,
  X_20_EN, X_20_AR, X_21_EN, X_21_AR, X_22_EN, X_22_AR, X_23_EN, X_23_AR,
  X_24_EN, X_24_AR, X_25_EN, X_25_AR,
} from "@/lib/slide-notes";

export type Slide = {
  k: string;
  t: [string, string]; // [en, ar]
  p: [string, string][]; // bullet rows [en, ar]
  x?: [string, string]; // real-world note [en, ar]
  c?: number; // centered title slide
  bg?: string; // full-bleed background photo
  side?: string; // side photo
  flip?: string; // photo first, text second
  alt?: string;
  dgm?: "cia" | "net" | "passive" | "active";
};

const PH = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const W = "?width=960";

export const SLIDES: Slide[] = [
  {
    k: "BORG AL ARAB TECHNOLOGICAL UNIVERSITY",
    t: ["Introduction to Cyber Security", "مقدمة الأمن السيبراني"],
    c: 1,

    bg: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Closeup-photography-of-white-gate-with-brass-colored-padlock-846288.jpg/960px-Closeup-photography-of-white-gate-with-brass-colored-padlock-846288.jpg",
    alt: "Brass padlock locking a metal gate",
    p: [["1st Level, 1st Semester", "المستوى الأول، الفصل الأول"]],
    x: [X_00_EN, X_00_AR],
  },
  {
    k: "COURSE OVERVIEW",
    t: ["How this course runs", "كيف يسير هذا المقرر"],
    side: PH + "Innopolis_University_Lecture_Hall.jpg" + W,
    alt: "Modern university lecture hall with a presentation screen",
    p: [
      ["Lecture: 1 hour per week", "محاضرة ساعة واحدة أسبوعيا"],
      ["Class work: 10 marks", "أعمال السنة: 10 درجات"],
      ["Midterm: 10 marks", "امتحان المنتصف: 10 درجات"],
      ["Final exam: 30 marks", "الامتحان النهائي: 30 درجة"],
      ["Total: 50 marks", "المجموع: 50 درجة"],
    ],
    x: [X_01_EN, X_01_AR],
  },
  {
    k: "COURSE TOPICS",
    t: ["Five chapters ahead", "خمسة فصول قادمة"],
    side: PH + "Old_Library_Bookshelves%2C_Macquarie_University.JPG" + W,
    alt: "Long aisle between tall library bookshelves",
    p: [
      ["Chapter 1: Introduction", "الفصل 1: مقدمة"],
      ["Chapter 2: Classical encryption techniques", "الفصل 2: تقنيات التشفير الكلاسيكية"],
      ["Chapter 3: Modern encryption techniques", "الفصل 3: تقنيات التشفير الحديثة"],
      ["Chapter 4: Attacks and prevention", "الفصل 4: الهجمات والوقاية"],
      ["Chapter 5: Virus and antivirus", "الفصل 5: الفيروسات ومضاداتها"],
    ],
    x: [X_02_EN, X_02_AR],
  },
  {
    k: "CHAPTER ONE",
    t: ["Introduction", "مقدمة"],
    c: 1,
    bg: PH + "Library_Books_Bookshelves_%28Unsplash%29.jpg" + W,
    alt: "Warm library reading room full of books",
    p: [
      ["1. Introduction to security", "1. مقدمة في الأمن"],
      ["2. Cyber security", "2. الأمن السيبراني"],
      ["3. Categories of cyber security", "3. تصنيفات الأمن السيبراني"],
      ["4. Importance of cyber security", "4. أهمية الأمن السيبراني"],
      ["5. Types of cyber threats", "5. أنواع التهديدات السيبرانية"],
    ],
    x: [X_03_EN, X_03_AR],
  },
  {
    k: "1. INTRODUCTION TO SECURITY",
    t: ["Computer security, defined", "تعريف أمن الحاسوب"],
    side: PH + "Ocean_National_Bank_vault_door.png" + W,
    alt: "Engraving of a giant open bank vault door",
    p: [
      [
        "Protection given to a system to attain integrity, availability, and confidentiality of its resources.",
        "الحماية الممنوحة للنظام لتحقيق سلامة موارده وتوافرها وسريتها.",
      ],
    ],
    x: [X_04_EN, X_04_AR],
  },
  {
    k: "THE CIA TRIAD",
    t: ["Three pillars, three mechanisms", "ثلاث ركائز وثلاث آليات"],
    side: PH + "Fingerprint.jpg" + W,
    alt: "Macro photograph of a human fingerprint",
    p: [
      ["Confidentiality is enforced with encryption.", "السرية تتحقق بالتشفير."],
      ["Integrity is enforced with hashing.", "السلامة تتحقق بالتجزئة."],
      ["Availability means data and services are reachable.", "التوافر يعني الوصول للبيانات والخدمات."],
    ],
    x: [X_05_EN, X_05_AR],
  },
  {
    k: "THE CIA TRIANGLE",
    t: ["One triangle, three promises", "مثلث واحد وثلاثة وعود"],
    dgm: "cia",
    p: [
      [
        "Each corner guards the other two: lose one pillar and the triangle collapses.",
        "كل ركن يحمي الآخرين: فقدان ركيزة واحدة يسقط المثلث.",
      ],
    ],
    x: [X_06_EN, X_06_AR],
  },
  {
    k: "CONFIDENTIALITY",
    t: ["No access for outsiders", "لا وصول لغير المصرح لهم"],
    side: PH + "Pattern_Combination_Lock.jpg" + W,
    alt: "Three colorful combination padlocks",
    p: [
      [
        "Data confidentiality: sensitive information is never disclosed to unauthorized persons.",
        "سرية البيانات: لا تكشف المعلومات الحساسة لغير المصرح لهم.",
      ],
      [
        "Privacy: users control what is collected and stored about them.",
        "الخصوصية: يتحكم المستخدمون فيما يجمع ويخزن عنهم.",
      ],
    ],
    x: [X_07_EN, X_07_AR],
  },
  {
    k: "INTEGRITY",
    t: ["Change only by permission", "لا تغيير إلا بإذن"],
    side: PH + "Macro_Fingerprints.jpg" + W,
    alt: "Three fingers with visible prints on black",
    p: [
      [
        "Data integrity: information and programs change only in a specified, authorized manner.",
        "سلامة البيانات: لا تتغير المعلومات والبرامج إلا بطريقة محددة ومصرح بها.",
      ],
      [
        "System integrity: the system performs its function free from unauthorized manipulation.",
        "سلامة النظام: يؤدي النظام وظيفته دون تلاعب غير مصرح به.",
      ],
    ],
    x: [X_08_EN, X_08_AR],
  },
  {
    k: "AVAILABILITY",
    t: ["There when you need it", "موجود عند الحاجة"],
    side: PH + "Azaleos_NOC.jpg" + W,
    alt: "Network operations center with a wall of monitors",
    p: [
      ["Systems work on time.", "الأنظمة تعمل في وقتها."],
      ["Services reach authorized users whenever needed.", "الخدمات تصل للمستخدمين المصرح لهم عند الحاجة."],
    ],
    x: [X_09_EN, X_09_AR],
  },
  {
    k: "CORE VOCABULARY",
    t: ["Attack, mechanism, service", "الهجوم والآلية والخدمة"],
    side: PH + "Combination_Padlock_2.jpg" + W,
    alt: "Single brass combination lock on black",
    p: [
      [
        "Security attack: any action that endangers information security.",
        "الهجوم الأمني: أي فعل يعرّض أمن المعلومات للخطر.",
      ],
      [
        "Security mechanism: a process that detects, prevents, or recovers from an attack.",
        "الآلية الأمنية: عملية تكشف الهجوم أو تمنعه أو تتعافى منه.",
      ],
      [
        "Security service: a service that strengthens data processing and transfer security.",
        "الخدمة الأمنية: خدمة تعزز أمن معالجة البيانات ونقلها.",
      ],
    ],
    x: [X_10_EN, X_10_AR],
  },
  {
    k: "WATCH YOUR TERMS",
    t: ["Threat is not attack", "التهديد ليس هجوما"],
    side: PH + "Lightning_in_Dallas_2015.jpg" + W,
    alt: "Lightning striking from dark storm clouds",
    p: [
      ["Threat: a potential violation of system security.", "التهديد: احتمال حدوث خرق لأمن النظام."],
      ["Attack: an assault on system security that actually happens.", "الهجوم: اعتداء على أمن النظام يحدث فعلا."],
    ],
    x: [X_11_EN, X_11_AR],
  },
  {
    k: "SECURITY ATTACKS",
    t: ["Two families", "عائلتان"],
    flip: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Server_Rack_with_Spaghetti-Like_Mass_of_Network_Cables.jpg/960px-Server_Rack_with_Spaghetti-Like_Mass_of_Network_Cables.jpg",
    alt: "Tangled network cables in a server rack",
    p: [
      [
        "Passive attacks: unauthorized reading of messages and traffic analysis.",
        "الهجمات السلبية: قراءة غير مصرح بها للرسائل وتحليل الحركة.",
      ],
      [
        "Active attacks: modification of messages or files, and denial of service.",
        "الهجمات النشطة: تعديل الرسائل أو الملفات والحرمان من الخدمة.",
      ],
    ],
    x: [X_12_EN, X_12_AR],
  },
  {
    k: "PASSIVE ATTACKS",
    t: ["Listen, never touch", "استمع ولا تلمس"],
    side: PH + "CCTV_camera_in_Poland_%281%29.jpg" + W,
    alt: "Wall-mounted CCTV security camera",
    dgm: "passive",
    p: [
      ["Type 1: release of message contents.", "النوع 1: كشف محتوى الرسالة."],
      ["Type 2: traffic analysis.", "النوع 2: تحليل الحركة."],
      ["Very difficult to detect: no data is altered.", "يصعب كشفها جدا: لا تتغير أي بيانات."],
    ],
    x: [X_13_EN, X_13_AR],
  },
  {
    k: "ACTIVE ATTACKS",
    t: ["Touch, forge, flood", "المس وزوّر وأغرق"],
    side: PH + "Closeup_of_raging_flames_in_a_large_bonfire._-_Flickr_-_shixart1985.jpg" + W,
    alt: "Raging bonfire flames at night",
    dgm: "active",
    p: [
      [
        "Type 1, masquerade: pretend to be a different entity.",
        "النوع 1، انتحال الهوية: التظاهر بأنك كيان مختلف.",
      ],
      [
        "Type 2, replay: capture data for later retransmission.",
        "النوع 2، إعادة الإرسال: التقاط البيانات لإعادة إرسالها لاحقا.",
      ],
      [
        "Type 3, modification: alter some portion of a legitimate message.",
        "النوع 3، التعديل: تغيير جزء من رسالة شرعية.",
      ],
      [
        "Type 4, denial of service: disable or overload the network.",
        "النوع 4، الحرمان من الخدمة: تعطيل الشبكة أو إغراقها.",
      ],
    ],
    x: [X_14_EN, X_14_AR],
  },
  {
    k: "NETWORK SECURITY MODEL",
    t: ["Four design tasks", "أربع مهام تصميم"],
    side: PH + "NOC-Architel.jpg" + W,
    alt: "Analysts at desks in a network operations center",
    p: [
      ["1. Design the algorithm for the security transformation.", "1. تصميم خوارزمية التحويل الأمني."],
      ["2. Create the secret information used with it.", "2. إنشاء المعلومات السرية المستخدمة معها."],
      ["3. Build methods to distribute and share that secret.", "3. بناء طرق توزيع تلك المعلومات ومشاركتها."],
      ["4. Specify the protocol the parties follow.", "4. تحديد البروتوكول الذي يلتزم به الأطراف."],
    ],
    x: [X_15_EN, X_15_AR],
  },
  {
    k: "NETWORK SECURITY MODEL",
    t: ["Sender, channel, opponent", "مرسل وقناة وخصم"],
    dgm: "net",
    p: [
      [
        "Messages cross a hostile channel, so both sides transform them with shared secrets.",
        "الرسائل تعبر قناة معادية فيحولها الطرفان بأسرار مشتركة.",
      ],
      [
        "A trusted third party distributes secrets while the opponent watches everything.",
        "طرف ثالث موثوق يوزع الأسرار بينما يراقب الخصم كل شيء.",
      ],
    ],
    x: [X_16_EN, X_16_AR],
  },
  {
    k: "2. CYBER SECURITY",
    t: ["Defending the digital world", "الدفاع عن العالم الرقمي"],
    side: PH + "BalticServers_data_center.jpg" + W,
    alt: "Rows of servers glowing blue inside a data center",
    p: [
      [
        "The practice of defending computers, servers, mobiles, systems, networks, and data from malicious attacks.",
        "ممارسة الدفاع عن الحواسيب والخوادم والهواتف والأنظمة والشبكات والبيانات ضد الهجمات الخبيثة.",
      ],
      [
        "Also known as IT security or electronic information security.",
        "وتعرف أيضا بأمن تكنولوجيا المعلومات أو أمن المعلومات الإلكترونية.",
      ],
    ],
    x: [X_17_EN, X_17_AR],
  },
  {
    k: "3. CATEGORIES (1-3)",
    t: ["Where security lives", "أين يعيش الأمن"],
    side: PH + "Man_using_smartphone_outdoors.jpg" + W,
    alt: "Man looking at his smartphone outdoors",
    p: [
      ["1. Network security: guard the network from intruders and malware.", "1. أمن الشبكات: حماية الشبكة من المتطفلين والبرمجيات الخبيثة."],
      [
        "2. Application security: keep software and devices threat-free. Security begins in design.",
        "2. أمن التطبيقات: إبقاء البرمجيات والأجهزة خالية من التهديدات. الأمن يبدأ من التصميم.",
      ],
      [
        "3. Information security: protect data integrity and privacy, stored and in transit.",
        "3. أمن المعلومات: حماية سلامة البيانات وخصوصيتها مخزنة ومنقولة.",
      ],
    ],
    x: [X_18_EN, X_18_AR],
  },
  {
    k: "3. CATEGORIES (4-5)",
    t: ["Process and continuity", "العمليات والاستمرارية"],
    side: PH + "3.5_inch_hard_disk_drive%2C_side_view.jpg" + W,
    alt: "Open hard disk drive showing its platters",
    p: [
      [
        "4. Operational security: the processes and decisions for handling and protecting data.",
        "4. الأمن التشغيلي: العمليات والقرارات الخاصة بمعالجة البيانات وحمايتها.",
      ],
      [
        "5. Disaster recovery and business continuity: how the organization responds to losing operations or data.",
        "5. التعافي من الكوارث واستمرارية الأعمال: كيف تستجيب المؤسسة لفقدان العمليات أو البيانات.",
      ],
    ],
    x: [X_19_EN, X_19_AR],
  },
  {
    k: "3. CATEGORIES (6)",
    t: ["The human firewall", "جدار الحماية البشري"],
    side: PH + "Afripedia_USB_key.jpg" + W,
    alt: "USB flash drive on a white background",
    p: [
      ["6. End-user education: one mistake can infect a secure system.", "6. توعية المستخدم: خطأ واحد قد يصيب نظاما آمنا."],
      ["Delete suspicious attachments. Never plug in unknown USB drives.", "احذف المرفقات المشبوهة. لا توصل وحدات USB مجهولة أبدا."],
    ],
    x: [X_20_EN, X_20_AR],
  },
  {
    k: "4. IMPORTANCE",
    t: ["Why this course exists", "لماذا يوجد هذا المقرر"],
    side: PH + "Smartphone_use_at_railway_station.jpg" + W,
    alt: "Commuters checking smartphones on a station platform",
    p: [
      ["Cyber attacks affect all people.", "الهجمات السيبرانية تؤثر على الجميع."],
      ["Fast tech change will drive a boom in attacks.", "التغير التقني السريع سيفجر موجة من الهجمات."],
      ["Damage to businesses and loss of jobs.", "أضرار للشركات وفقدان للوظائف."],
      ["Individuals face direct threats to data and privacy.", "الأفراد يواجهون تهديدات مباشرة للبيانات والخصوصية."],
      ["Rising concern may bring stronger regulation.", "القلق المتزايد قد يجلب تنظيمات أقوى."],
    ],
    x: [X_21_EN, X_21_AR],
  },
  {
    k: "5. THREAT TYPES",
    t: ["Know your adversary", "اعرف خصمك"],
    bg: PH + "SENIOR_cadets_at_the_United_States_Military_Academy_toss_their_caps_into_the_air_after_completion_of_graduation_ceremonies_-_DPLA_-_0cae9bf5f4cf912774ef664f5bc8420b.jpeg" + W,
    alt: "Graduates throwing caps into the air",
    p: [
      [
        "1. Cybercrime: actors seeking financial gain or disruption.",
        "1. الجرائم الإلكترونية: فاعلون يسعون لمكاسب مالية أو تعطيل.",
      ],
      [
        "2. Cyber-attack: politically motivated information gathering.",
        "2. الهجوم السيبراني: جمع معلومات بدوافع سياسية.",
      ],
      [
        "3. Cyberterrorism: undermining systems to cause panic or fear.",
        "3. الإرهاب السيبراني: تقويض الأنظمة لبث الذعر أو الخوف.",
      ],
    ],
    x: [X_22_EN, X_22_AR],
  },
  {
    k: "CHAPTER RECAP",
    t: ["Five topics, one page", "خمسة موضوعات في صفحة واحدة"],
    side: PH + "Innopolis_University_Lecture_Hall.jpg" + W,
    alt: "Modern university lecture hall with a presentation screen",
    p: [
      ["1. Security: CIA triad plus attack, mechanism, service.", "1. الأمن: ثالوث CIA مع الهجوم والآلية والخدمة."],
      ["2. Cyber security: defend systems, networks and data from malicious attacks.", "2. الأمن السيبراني: الدفاع عن الأنظمة والشبكات والبيانات ضد الهجمات الخبيثة."],
      ["3. Six categories, from network security to end-user education.", "3. ستة تصنيفات من أمن الشبكات إلى توعية المستخدم."],
      ["4. Importance: attacks hit everyone, businesses and jobs.", "4. الأهمية: الهجمات تصيب الجميع والشركات والوظائف."],
      ["5. Threats: cybercrime, cyber-attack, cyberterrorism.", "5. التهديدات: الجرائم الإلكترونية والهجوم السيبراني والإرهاب السيبراني."],
    ],
    x: [X_24_EN, X_24_AR],
  },
  {
    k: "CHECK YOURSELF",
    t: ["A quiz page per lecture", "صفحة اختبار لكل محاضرة"],
    side: PH + "Old_Library_Bookshelves%2C_Macquarie_University.JPG" + W,
    alt: "Long aisle between tall library bookshelves",
    p: [
      ["Lecture 1 has its own quiz page: sixteen questions across all five topics.", "للمحاضرة الأولى صفحة اختبار خاصة: ستة عشر سؤالا تغطي الموضوعات الخمسة."],
      ["Score and retry, with the link waiting on the lecture page. Nothing is stored.", "نتيجة وإعادة، والرابط في صفحة المحاضرة. لا تخزين لأي شيء."],
      ["The full quiz app mixes Lecture 1 and Lecture 2 in twelve questions.", "تطبيق الاختبار الكامل يمزج المحاضرتين الأولى والثانية في اثني عشر سؤالا."],
    ],
    x: [X_25_EN, X_25_AR],
  },
  {
    k: "END",
    t: ["Thank you", "شكرا لكم"],
    c: 1,
    bg: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Programming_code.jpg/960px-Programming_code.jpg",
    alt: "Close-up of program code on a dark screen",
    p: [
      [
        "Questions welcome. Chapter 2: classical encryption techniques.",
        "الأسئلة مرحب بها. الفصل 2: تقنيات التشفير الكلاسيكية.",
      ],
    ],
    x: [X_23_EN, X_23_AR],
  },
];

/* Title for an overview card: Title Case, max 34 chars (verbatim rule). */
export function slideCardTitle(k: string): string {
  return k.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()).slice(0, 34);
}
