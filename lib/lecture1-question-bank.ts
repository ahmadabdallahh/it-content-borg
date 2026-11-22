/*
  Lecture 1 question bank from docs/Question.md.
  Kept separate from the 16-question self-check so the dedicated quiz page can
  offer every source question: multiple choice, true/false and short answer.
  Answers follow the lecture content, not the conflicting answer-key numbering
  in the source file.
*/

export type ObjectiveQuestion = {
    kind: "mcq" | "tf";
    q_en: string;
    q_ar: string;
    options: { en: string; ar: string }[];
    answer: number;
};

export type ShortQuestion = {
    kind: "short";
    q_en: string;
    q_ar: string;
    answer_en: string;
    answer_ar: string;
};

export type BankQuestion = ObjectiveQuestion | ShortQuestion;

export const LECTURE1_QUESTION_BANK: BankQuestion[] = [
    {
        kind: "mcq",
        q_en: "Computer Security is defined as the protection provided to a system to attain:",
        q_ar: "يُعرَّف أمن الحاسوب بأنه الحماية الممنوحة لنظام لتحقيق:",
        options: [
            { en: "Confidentiality, Privacy, and Speed", ar: "السرية والخصوصية والسرعة" },
            { en: "Integrity, Availability, and Confidentiality", ar: "السلامة والتوافر والسرية" },
            { en: "Authentication, Integrity, and Non-repudiation", ar: "المصادقة والسلامة وعدم التنصل" },
            { en: "Availability, Scalability, and Privacy", ar: "التوافر وقابلية التوسع والخصوصية" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Which concept is associated with Hashing in the slide notes?",
        q_ar: "أي مفهوم يرتبط بالتجزئة (Hashing) في ملاحظات الشرائح؟",
        options: [
            { en: "Confidentiality", ar: "السرية" },
            { en: "Availability", ar: "التوافر" },
            { en: "Integrity", ar: "السلامة" },
            { en: "Masquerade", ar: "انتحال الهوية" },
        ],
        answer: 2,
    },
    {
        kind: "mcq",
        q_en: "Which concept is associated with Encryption in the slide notes?",
        q_ar: "أي مفهوم يرتبط بالتشفير في ملاحظات الشرائح؟",
        options: [
            { en: "Confidentiality", ar: "السرية" },
            { en: "Integrity", ar: "السلامة" },
            { en: "Availability", ar: "التوافر" },
            { en: "Disaster Recovery", ar: "التعافي من الكوارث" },
        ],
        answer: 0,
    },
    {
        kind: "mcq",
        q_en: "Privacy means:",
        q_ar: "الخصوصية تعني:",
        options: [
            { en: "Hiding network traffic from intruders", ar: "إخفاء حركة الشبكة عن المتطفلين" },
            { en: "Users control what information related to them to collect and store", ar: "يتحكم المستخدمون فيما يُجمع ويُخزَّن من معلومات عنهم" },
            { en: "Preventing unauthorized modification of programs", ar: "منع التعديل غير المصرح به للبرامج" },
            { en: "Keeping servers running during power outages", ar: "إبقاء الخوادم تعمل أثناء انقطاع الكهرباء" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Data Integrity means:",
        q_ar: "سلامة البيانات تعني:",
        options: [
            { en: "Systems work on time for authorized users", ar: "تعمل الأنظمة في وقتها للمستخدمين المصرح لهم" },
            { en: "Information and programs are changed only in a specified and authorized manner", ar: "تتغير المعلومات والبرامج فقط بطريقة محددة ومصرح بها" },
            { en: "Confidential data is never stored on disk", ar: "لا تُخزَّن البيانات السرية على القرص أبدًا" },
            { en: "Users can access data from any device", ar: "يمكن للمستخدمين الوصول للبيانات من أي جهاز" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "System Integrity means:",
        q_ar: "سلامة النظام تعني:",
        options: [
            { en: "System performs its function free from unauthorized manipulation", ar: "يؤدي النظام وظيفته دون تلاعب غير مصرح به" },
            { en: "Data is encrypted in transit only", ar: "تُشفَّر البيانات أثناء النقل فقط" },
            { en: "Backups are tested every year", ar: "تُختبر النسخ الاحتياطية كل عام" },
            { en: "Users are trained on phishing emails", ar: "يُدرَّب المستخدمون على رسائل التصيد" },
        ],
        answer: 0,
    },
    {
        kind: "mcq",
        q_en: "Availability means:",
        q_ar: "التوافر يعني:",
        options: [
            { en: "Confidential files are deleted after reading", ar: "تُحذف الملفات السرية بعد قراءتها" },
            { en: "Systems work on time and service is provided to authorized users", ar: "تعمل الأنظمة في وقتها وتُقدَّم الخدمة للمستخدمين المصرح لهم" },
            { en: "Attackers cannot read message contents", ar: "لا يستطيع المهاجمون قراءة محتوى الرسائل" },
            { en: "Software has no bugs during design", ar: "لا تحتوي البرمجيات على أخطاء أثناء التصميم" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Any action that caused dangerous to the security of information is called a:",
        q_ar: "أي فعل يعرّض أمن المعلومات للخطر يُسمى:",
        options: [
            { en: "Security Service", ar: "خدمة أمنية" },
            { en: "Security Mechanism", ar: "آلية أمنية" },
            { en: "Security Attack", ar: "هجوم أمني" },
            { en: "Threat", ar: "تهديد" },
        ],
        answer: 2,
    },
    {
        kind: "mcq",
        q_en: "A process designed to detect, prevent, or recover from a security attack is a:",
        q_ar: "العملية المصممة لاكتشاف هجوم أمني أو منعه أو التعافي منه هي:",
        options: [
            { en: "Security Service", ar: "خدمة أمنية" },
            { en: "Security Mechanism", ar: "آلية أمنية" },
            { en: "Threat", ar: "تهديد" },
            { en: "Passive Attack", ar: "هجوم سلبي" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "A processing or communication service that enhanced the security of data processing systems and information transfers is a:",
        q_ar: "خدمة معالجة أو اتصال تعزز أمن أنظمة معالجة البيانات ونقل المعلومات هي:",
        options: [
            { en: "Security Service", ar: "خدمة أمنية" },
            { en: "Security Mechanism", ar: "آلية أمنية" },
            { en: "Masquerade", ar: "انتحال الهوية" },
            { en: "Replay", ar: "إعادة الإرسال" },
        ],
        answer: 0,
    },
    {
        kind: "mcq",
        q_en: "A potential for violation of system security is called a:",
        q_ar: "الاحتمال القابل لخرق أمن النظام يُسمى:",
        options: [
            { en: "Threat", ar: "تهديد" },
            { en: "Attack", ar: "هجوم" },
            { en: "Service", ar: "خدمة" },
            { en: "Mechanism", ar: "آلية" },
        ],
        answer: 0,
    },
    {
        kind: "mcq",
        q_en: "An assault on system security is called a:",
        q_ar: "الاعتداء على أمن النظام يُسمى:",
        options: [
            { en: "Threat", ar: "تهديد" },
            { en: "Attack", ar: "هجوم" },
            { en: "Privacy", ar: "خصوصية" },
            { en: "Availability", ar: "توافر" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Which of the following is a Passive Attack?",
        q_ar: "أي مما يلي هجوم سلبي؟",
        options: [
            { en: "Masquerade", ar: "انتحال الهوية" },
            { en: "Replay", ar: "إعادة الإرسال" },
            { en: "Traffic Analysis", ar: "تحليل الحركة" },
            { en: "Denial of Service", ar: "الحرمان من الخدمة" },
        ],
        answer: 2,
    },
    {
        kind: "mcq",
        q_en: "Why are Passive Attacks very difficult to detect?",
        q_ar: "لماذا يصعب كشف الهجمات السلبية جدًا؟",
        options: [
            { en: "They overload the network bandwidth", ar: "لأنها تُثقل عرض نطاق الشبكة" },
            { en: "There is no alteration of data", ar: "لأنه لا يحدث أي تعديل في البيانات" },
            { en: "They delete system files immediately", ar: "لأنها تحذف ملفات النظام فورًا" },
            { en: "They require physical access to servers", ar: "لأنها تتطلب وصولًا ماديًا للخوادم" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Pretending to be a different entity is known as:",
        q_ar: "التظاهر بكون كيان مختلف يُعرف بـ:",
        options: [
            { en: "Replay", ar: "إعادة الإرسال" },
            { en: "Masquerade", ar: "انتحال الهوية" },
            { en: "Traffic Analysis", ar: "تحليل الحركة" },
            { en: "Modification of Message", ar: "تعديل الرسالة" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Capturing data for subsequent retransmission is called:",
        q_ar: "التقاط البيانات لإعادة إرسالها لاحقًا يُسمى:",
        options: [
            { en: "Replay", ar: "إعادة الإرسال" },
            { en: "Masquerade", ar: "انتحال الهوية" },
            { en: "Denial of Service", ar: "الحرمان من الخدمة" },
            { en: "Release of Message Contents", ar: "كشف محتوى الرسالة" },
        ],
        answer: 0,
    },
    {
        kind: "mcq",
        q_en: "Disruption of a network by disabling or overloading is called:",
        q_ar: "تعطيل شبكة بإيقافها أو إغراقها يُسمى:",
        options: [
            { en: "Traffic Analysis", ar: "تحليل الحركة" },
            { en: "Modification of Message", ar: "تعديل الرسالة" },
            { en: "Denial of Service", ar: "الحرمان من الخدمة" },
            { en: "Masquerade", ar: "انتحال الهوية" },
        ],
        answer: 2,
    },
    {
        kind: "mcq",
        q_en: "How many tasks are listed for designing a particular security service in the network security model?",
        q_ar: "كم مهمة مُدرجة لتصميم خدمة أمنية معينة في نموذج أمن الشبكة؟",
        options: [
            { en: "2 tasks", ar: "مهمتان" },
            { en: "3 tasks", ar: "٣ مهام" },
            { en: "4 tasks", ar: "٤ مهام" },
            { en: "5 tasks", ar: "٥ مهام" },
        ],
        answer: 2,
    },
    {
        kind: "mcq",
        q_en: "Cyber security is also known as:",
        q_ar: "يُعرف الأمن السيبراني أيضًا بـ:",
        options: [
            { en: "Physical security or safety", ar: "الأمن المادي أو السلامة" },
            { en: "Information technology security or electronic information security", ar: "أمن تكنولوجيا المعلومات أو أمن المعلومات الإلكترونية" },
            { en: "Database administration or cloud computing", ar: "إدارة قواعد البيانات أو الحوسبة السحابية" },
            { en: "Network routing or switching", ar: "توجيه الشبكات أو التبديل" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Which category of cyber security focuses on keeping software and devices free of threats starting in the design phase?",
        q_ar: "أي فئة من فئات الأمن السيبراني تركز على إبقاء البرمجيات والأجهزة خالية من التهديدات بدءًا من مرحلة التصميم؟",
        options: [
            { en: "Network Security", ar: "أمن الشبكات" },
            { en: "Application Security", ar: "أمن التطبيقات" },
            { en: "Operational Security", ar: "الأمن التشغيلي" },
            { en: "End-User Education", ar: "توعية المستخدم النهائي" },
        ],
        answer: 1,
    },
    {
        kind: "mcq",
        q_en: "Which category defines how an organization responds to the loss of operations or data?",
        q_ar: "أي فئة تحدد كيف تستجيب المؤسسة لفقدان العمليات أو البيانات؟",
        options: [
            { en: "Disaster Recovery and Business Continuity", ar: "التعافي من الكوارث واستمرارية الأعمال" },
            { en: "Information Security", ar: "أمن المعلومات" },
            { en: "Network Security", ar: "أمن الشبكات" },
            { en: "Application Security", ar: "أمن التطبيقات" },
        ],
        answer: 0,
    },
    {
        kind: "mcq",
        q_en: "Which type of cyber threat involves politically motivated information gathering?",
        q_ar: "أي نوع من التهديدات السيبرانية يتضمن جمع معلومات بدوافع سياسية؟",
        options: [
            { en: "Cybercrime", ar: "الجرائم الإلكترونية" },
            { en: "Cyber-attack", ar: "الهجوم السيبراني" },
            { en: "Cyberterrorism", ar: "الإرهاب السيبراني" },
            { en: "End-user error", ar: "خطأ المستخدم النهائي" },
        ],
        answer: 1,
    },
    {
        kind: "tf",
        q_en: "Data Confidentiality means users control what information related to them is collected and stored.",
        q_ar: "سرية البيانات تعني أن المستخدمين يتحكمون فيما يُجمع ويُخزَّن من معلومات عنهم.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 1,
    },
    {
        kind: "tf",
        q_en: "Release of message contents and Traffic analysis are types of Passive Attacks.",
        q_ar: "كشف محتوى الرسالة وتحليل الحركة نوعان من الهجمات السلبية.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 0,
    },
    {
        kind: "tf",
        q_en: "Modification of message means some portion of a legitimate message is altered, or false data is created.",
        q_ar: "تعديل الرسالة يعني تغيير جزء من رسالة شرعية أو إنشاء بيانات مزيفة.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 0,
    },
    {
        kind: "tf",
        q_en: "The first task in designing a security service is to create the secret information before designing the algorithm.",
        q_ar: "أول مهمة في تصميم خدمة أمنية هي إنشاء المعلومات السرية قبل تصميم الخوارزمية.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 1,
    },
    {
        kind: "tf",
        q_en: "Information Security protects the integrity and privacy of data both in storage and in transit.",
        q_ar: "يحمي أمن المعلومات سلامة البيانات وخصوصيتها في التخزين وأثناء النقل.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 0,
    },
    {
        kind: "tf",
        q_en: "Operational Security refers to the processes and decisions for handling and protecting data.",
        q_ar: "الأمن التشغيلي هو العمليات والقرارات الخاصة بمعالجة البيانات وحمايتها.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 0,
    },
    {
        kind: "tf",
        q_en: "End-User Education includes teaching users to delete suspicious email attachments and not plug in unidentified USB drives.",
        q_ar: "تشمل توعية المستخدم النهائي تعليمهم حذف المرفقات المشبوهة وعدم توصيل وحدات USB مجهولة.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 0,
    },
    {
        kind: "tf",
        q_en: "Cybercrime includes single actors or groups targeting systems for financial gain or to cause disruption.",
        q_ar: "تشمل الجرائم الإلكترونية أفرادًا أو جماعات تستهدف الأنظمة لتحقيق مكاسب مالية أو التسبب في تعطيل.",
        options: [
            { en: "True", ar: "صح" },
            { en: "False", ar: "خطأ" },
        ],
        answer: 0,
    },
    {
        kind: "short",
        q_en: "Write the definition of Computer Security according to the lecture.",
        q_ar: "اكتب تعريف أمن الحاسوب وفقًا للمحاضرة.",
        answer_en:
            "The protection provided to a system in order to attain the integrity, availability, and confidentiality of information system resources.",
        answer_ar:
            "الحماية الممنوحة للنظام لتحقيق سلامة وتوافر وسرية موارد نظم المعلومات.",
    },
    {
        kind: "short",
        q_en: "Differentiate briefly between Data Confidentiality and Privacy.",
        q_ar: "فرّق باختصار بين سرية البيانات والخصوصية.",
        answer_en:
            "Data confidentiality ensures confidential information is not made available to unauthorized persons, whereas privacy means users control what information related to them is collected and stored.",
        answer_ar:
            "سرية البيانات تضمن عدم إتاحة المعلومات السرية لغير المصرح لهم، أما الخصوصية فتعني أن المستخدمين يتحكمون فيما يُجمع ويُخزَّن من معلومات عنهم.",
    },
    {
        kind: "short",
        q_en: "Differentiate briefly between Data Integrity and System Integrity.",
        q_ar: "فرّق باختصار بين سلامة البيانات وسلامة النظام.",
        answer_en:
            "Data integrity means information and programs are changed only in a specified and authorized manner; system integrity means the system performs its function free from unauthorized manipulation.",
        answer_ar:
            "سلامة البيانات تعني أن المعلومات والبرامج تتغير فقط بطريقة محددة ومصرح بها؛ وسلامة النظام تعني أن النظام يؤدي وظيفته دون تلاعب غير مصرح به.",
    },
    {
        kind: "short",
        q_en: "Define Security Attack, Security Mechanism, and Security Service.",
        q_ar: "عرّف الهجوم الأمني والآلية الأمنية والخدمة الأمنية.",
        answer_en:
            "Security Attack: any action that endangers the security of information. Security Mechanism: a process designed to detect, prevent, or recover from a security attack. Security Service: a processing or communication service that enhances the security of data processing systems and information transfers.",
        answer_ar:
            "الهجوم الأمني: أي فعل يعرّض أمن المعلومات للخطر. الآلية الأمنية: عملية لاكتشاف الهجوم أو منعه أو التعافي منه. الخدمة الأمنية: خدمة معالجة أو اتصال تعزز أمن أنظمة معالجة البيانات ونقل المعلومات.",
    },
    {
        kind: "short",
        q_en: "What is the difference between a Threat and an Attack?",
        q_ar: "ما الفرق بين التهديد والهجوم؟",
        answer_en:
            "A threat is a potential for violation of system security, whereas an attack is an assault on system security.",
        answer_ar:
            "التهديد هو احتمال لخرق أمن النظام، أما الهجوم فهو اعتداء فعلي على أمن النظام.",
    },
    {
        kind: "short",
        q_en: "Name the two main types of Security Attacks.",
        q_ar: "اذكر النوعين الرئيسيين للهجمات الأمنية.",
        answer_en: "Passive attacks and active attacks.",
        answer_ar: "الهجمات السلبية والهجمات النشطة.",
    },
    {
        kind: "short",
        q_en: "List the two types of Passive Attacks.",
        q_ar: "اذكر نوعي الهجمات السلبية.",
        answer_en: "Release of message contents and traffic analysis.",
        answer_ar: "كشف محتوى الرسالة وتحليل الحركة.",
    },
    {
        kind: "short",
        q_en: "List the four types of Active Attacks.",
        q_ar: "اذكر أنواع الهجمات النشطة الأربعة.",
        answer_en:
            "Masquerade, replay, modification of message, and denial of service.",
        answer_ar: "انتحال الهوية، وإعادة الإرسال، وتعديل الرسالة، والحرمان من الخدمة.",
    },
    {
        kind: "short",
        q_en: "List the four tasks in designing a particular security service.",
        q_ar: "اذكر المهام الأربع لتصميم خدمة أمنية معينة.",
        answer_en:
            "Design an algorithm for the security-related transformation. Create the secret information to be used with the algorithm. Develop methods to distribute and share the secret information. Specify a protocol to be used by the users.",
        answer_ar:
            "صمّم خوارزمية للتحويل المرتبط بالأمن. أنشئ المعلومات السرية لاستخدامها مع الخوارزمية. طوّر طرقًا لتوزيع المعلومات السرية ومشاركتها. حدّد بروتوكولًا يستخدمه المستخدمون.",
    },
    {
        kind: "short",
        q_en: "Define Cyber Security and state its two alternative names from the lecture.",
        q_ar: "عرّف الأمن السيبراني واذكر اسميه البديلين من المحاضرة.",
        answer_en:
            "The practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks; also known as Information Technology Security or Electronic Information Security.",
        answer_ar:
            "ممارسة الدفاع عن الحواسيب والخوادم والأجهزة المحمولة والأنظمة الإلكترونية والشبكات والبيانات ضد الهجمات الخبيثة؛ ويُعرف أيضًا بأمن تكنولوجيا المعلومات أو أمن المعلومات الإلكترونية.",
    },
    {
        kind: "short",
        q_en: "Name the six categories of cyber security.",
        q_ar: "اذكر تصنيفات الأمن السيبراني الستة.",
        answer_en:
            "Network security, application security, information security, operational security, disaster recovery and business continuity, and end-user education.",
        answer_ar:
            "أمن الشبكات، وأمن التطبيقات، وأمن المعلومات، والأمن التشغيلي، والتعافي من الكوارث واستمرارية الأعمال، وتوعية المستخدم النهائي.",
    },
    {
        kind: "short",
        q_en: "Explain how End-User Education helps protect a secure system.",
        q_ar: "اشرح كيف تساعد توعية المستخدم النهائي في حماية النظام الآمن.",
        answer_en:
            "Anyone can mistakenly introduce a virus into a secure system, so teaching users to delete suspicious email attachments and avoid plugging in unidentified USB drives is vital for security.",
        answer_ar:
            "قد يُدخل أي شخص فيروسًا إلى نظام آمن بالخطأ، لذا فإن تعليم المستخدمين حذف المرفقات المشبوهة وتجنب وحدات USB المجهولة أمر حيوي للأمن.",
    },
    {
        kind: "short",
        q_en: "Mention three points highlighting the importance of cyber security.",
        q_ar: "اذكر ثلاث نقاط توضح أهمية الأمن السيبراني.",
        answer_en:
            "Cyber attacks affect all people; fast changes in technology will cause a boom in cyberattacks; damage to businesses and loss of jobs. Also: threats faced by individuals and increased regulations.",
        answer_ar:
            "الهجمات السيبرانية تؤثر على الجميع؛ والتغير السريع في التكنولوجيا سيسبب طفرة في الهجمات؛ وتضرر الشركات وفقدان الوظائف. كذلك: التهديدات التي يواجهها الأفراد وزيادة التنظيمات.",
    },
    {
        kind: "short",
        q_en: "Name and briefly describe the three types of cyber threats.",
        q_ar: "اذكر أنواع التهديدات السيبرانية الثلاثة مع وصف مختصر لكل منها.",
        answer_en:
            "Cybercrime: single actors or groups targeting systems for financial gain or disruption. Cyber-attack: politically motivated information gathering. Cyberterrorism: intended to undermine electronic systems to cause panic or fear.",
        answer_ar:
            "الجرائم الإلكترونية: أفراد أو جماعات تستهدف الأنظمة لمكاسب مالية أو تعطيل. الهجوم السيبراني: جمع معلومات بدوافع سياسية. الإرهاب السيبراني: تقويض الأنظمة الإلكترونية لبث الذعر أو الخوف.",
    },
];
