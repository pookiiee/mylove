/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Centralized Configuration File
 * 
 * Aseel can customize all names, messages, letters, memories, quiz questions,
 * photos, video, and music links here without editing any code components.
 */

export const CONFIG = {
  // --- Personal Details ---
  girlfriendName: "Anea",
  nickname: "Anity",
  girlfriendCallName: "Aseel",
  sharedPetName: "حبوبي",
  doublePetName: "حبوبي حبوبي",
  birthdayDate: "October 17",
  birthdayAge: 24,
  anniversaryDate: "March 31",

  // --- Audio & Music Dedication ---
  // Aseel's personal dedication to Anea: "love." by wave to earth
  music: {
    title: "love.",
    artist: "wave to earth",
    externalUrl: "https://www.youtube.com/results?search_query=wave+to+earth+love",
    spotifyUrl: "https://open.spotify.com/search/wave%20to%20earth%20love",
    // If Aseel has an audio file (e.g. assets/audio/love.mp3), set the relative path here:
    localAudioPath: "",
    noteEnglish: "A song Aseel specifically dedicated to Anea — because some melodies hold the exact warmth of your presence.",
    noteArabic: "هذه الأغنية أهديها لكِ خصيصاً لأن فيها هدوء يشبهك، ودفء يشبه طريقتك في حبي."
  },

  // --- Video Gift Configuration ---
  video: {
    // Aseel can set a local file path (e.g., "assets/video/birthday_message.mp4")
    // or an external video URL (e.g. YouTube embed or direct mp4 link)
    src: "", 
    posterImage: "assets/images/video_poster.svg",
    titleEnglish: "A Video Message from Aseel",
    titleArabic: "رسالة فيديو خاصة لكِ من أسيل",
    placeholderMessageArabic: "هنا مساحة خاصة لفيديو عيد ميلادك من أسيل. يمكنك إضافة مقطعك المفضل في مجلد assets/video وسيظهر هنا بكل جمال.",
    placeholderMessageEnglish: "This space is reserved for Aseel's personal birthday video for Anea. Add your video in the assets folder or config file."
  },

  // --- Personal Photos Gallery ---
  // Aseel can place real photos in assets/images/ and list their paths here
  photos: [
    {
      src: "assets/images/photo1.jpg",
      captionEnglish: "The warmth of our moments together",
      captionArabic: "لحظاتنا البسيطة التي تصنع كل عالمي ♡"
    },
    {
      src: "assets/images/photo2.jpg",
      captionEnglish: "Under the same gentle sky",
      captionArabic: "تحت نفس السماء التي جمعتنا يوماً"
    }
  ],

  // --- Destination 1: The Little Planet ("Our Little Home") ---
  home: {
    title: "Our Little Home",
    subtitle: "بيت صغير في قلب مجرتنا",
    greeting: "Every universe needs a home.",
    reveal: "And somehow, mine became a little warmer when you came into it.",
    objects: {
      window: {
        title: "The Starlit Window",
        titleArabic: "النافذة المطلة على النجوم",
        messageEnglish: "Every time I look out at the quiet sky, I feel grateful for the day you wandered into my life.",
        messageArabic: "كل ما نظرت للسماء وهدوئها، أتذكر إن أجمل شيء صار لي هو إنكِ صرتِ موجودة في حياتي، منورة أيامي بهدوء وحب."
      },
      bedsideLetter: {
        title: "The Bedside Note",
        titleArabic: "رسالة بجانب السرير",
        messageEnglish: "A small reminder that you are loved more gently and deeply than words can ever hold.",
        messageArabic: "تذكير صغير قبل أن تنامي: أنتِ أحب نعمي، وأكثر شخص يحضن قلبي بحنيته.. أحبك من كل قلبي."
      },
      twoCups: {
        title: "Two Warm Cups",
        titleArabic: "كوبان دافئان معاً",
        messageEnglish: "All the ordinary hours we spend together — talking about everything, playing games, and simply laughing — are my favorite hours.",
        messageArabic: "جلساتنا البسيطة، سوالفنا الطويلة اللي ما نمل منها، وألعابنا وضحكاتنا سوا.. هذه هي اللحظات اللي ما أبدلها بالدنيا كلها."
      },
      littleLight: {
        title: "The Gentle Light",
        titleArabic: "النور اللطيف",
        messageEnglish: "Your kindness has a quiet way of making everything feel safe and special.",
        messageArabic: "حنيتك واهتمامك وطريقتك الخاصة في دلالي تخلي قلبي يحس إنه بأمان وله مكانة خاصة جداً عندك."
      },
      sharedWord: {
        title: "Aseel's Pet Name for You",
        text: "حبوبي",
        secretMessage: "الكلمة اللي أحب أناديكِ وأدلعك فيها دايماً وتطلع من أعماق قلبي.. حبوبي ♡"
      }
    }
  },

  // --- Destination 2: The Garden of Memories ---
  memories: [
    {
      id: "memory-1",
      number: "01",
      titleEnglish: "The First Message & Voice",
      titleArabic: "أول فويس ورسالة خاصة",
      icon: "message",
      summaryEnglish: "When we met on voice and you applied for admin...",
      narrativeEnglish: "Little did I know that the messages I sometimes pretended not to care about would become some of my favorite memories.",
      narrativeArabic: "قد قابلتك بفويس وغازلتك وانتِ دختي واستحيتي مرا بس وقتها عجبني صوتك ويوم قدمتي ادمن قلت اوه كبيره هذي مامي وجداوي احح، وأنا في البداية كنت مسوية نفسي ثقيلة وبعيدة ولا معطية الموضوع اهتمام كبير! بس ما كنت أدري إن هذي الرسايل بالذات هي بداية كل الدفء اللي أعيشه معك اليوم."
    },
    {
      id: "memory-2",
      number: "02",
      titleEnglish: "Slowly Falling",
      titleArabic: "بداية الانجذاب والوقوع بحبك",
      icon: "orbit",
      summaryEnglish: "Two stars beginning their slow, inevitable orbit.",
      narrativeEnglish: "What started as occasional conversations gradually turned into something I looked forward to every single day.",
      narrativeArabic: "شوي شوي، وبدون ما أحس، لقيت نفسي مشدودة لكِ بكل مشاعري. صرت أنتظر رسايلك وأفرح بوجودك، وبدأت أتعلق فيكِ وأحب تفاصيلك وطريقتك اللطيفة معي."
    },
    {
      id: "memory-3",
      number: "03",
      titleEnglish: "Our Little Routine",
      titleArabic: "روتيننا الجميل وألعابنا",
      icon: "controller",
      summaryEnglish: "Talking and playing together until hours vanished into thin air.",
      narrativeEnglish: "We started sharing our days, our games, and our quietest thoughts. Everything became better simply because you were there.",
      narrativeArabic: "صرنا نتكلم ونسولف ونلعب سوا في كل وقت، وكل لحظة معك كانت تمر بسرعة غريبة.. صارت أيامي ما تكمل إلا بصوتك ومشاركتك لأبسط تفاصيل يومي."
    },
    {
      id: "memory-4",
      number: "04",
      titleEnglish: "March 31",
      titleArabic: "واحد وثلاثين مارس",
      icon: "golden-flower",
      isGolden: true,
      summaryEnglish: "March 31 — the beginning of our little story.",
      narrativeEnglish: "A quiet date written in the stars, marking the exact day our two paths crossed.",
      narrativeArabic: "٣١ مارس — تاريخ محفور بالقلب، اليوم اللي بدأت فيه حكايتنا الصغيرة واللي فتح لقلبي باب لأجمل صدفة في حياتي كلها."
    },
    {
      id: "memory-5",
      number: "05",
      titleEnglish: "The Voice Call",
      titleArabic: "تلك الليلة في المكالمة الصوتية",
      icon: "soundwave",
      isHighlight: true,
      summaryEnglish: "That one night when you playfully cornered me into honesty.",
      narrativeEnglish: "I was so nervous, holding back what I felt inside. But you gently, playfully cornered me on that voice call until I couldn't hide it anymore. And in that moment, when we confessed to each other, the whole universe finally made sense.",
      narrativeArabic: "كنت خايفة ومترددة أعترف بمشاعري وحبي لكِ.. وفي تلك المكالمة الصوتية، حاصرتيني بدلال ولطف وخليتيني أعترف بكل اللي في قلبي، واعترفنا لبعض. هذي الليلة تحديداً من أعظم وأغلى اللحظات في عمري، اللحظة اللي سمحت لقلبي فيها إنه يحبك علناً وبكل ثقة."
    },
    {
      id: "memory-6",
      number: "06",
      titleEnglish: "The Way You Love Me",
      titleArabic: "طريقتك الخاصة بدلالي",
      icon: "blooming-rose",
      summaryEnglish: "Your attentiveness, your pampering, and the way you make me feel uniquely special.",
      narrativeEnglish: "Out of everything in this world, what I cherish most is how you treat me. The way you pamper me, the way you pay attention to the smallest things, and the tenderness with which you love me.",
      narrativeArabic: "أكثر شي يسحرني ويذوب قلبي هو اهتمامك فيني، وطريقتك الحنونة بأنك تدلليني وتدلعيني، وتخليني أحس إني إنسانة استثنائية ومميزة جداً عندك بحنية ما لقيت مثلها بأي مكان بالعالم ♡"
    }
  ],

  // --- Destination 3: The Mailbox of Love (Voice Notes & Letters) ---
  letters: [
    {
      id: "letter-1",
      titleEnglish: "For the Girl Who Kept Messaging Me",
      titleArabic: "للبنت اللي كانت ترسل لي دايم",
      audioSrc: "assets/audio/voice1.mp3",
      duration: "1:14",
      preview: "Little did I know what those server DMs would turn into...",
      bodyArabic: `حبيبتي أنيتي،
أتذكر لما كنتِ مشرفة في السيرفر، وتجين عندي بالخاص تسولفين وأنا أسوي نفسي ثقيلة ومو مهتمة كثير.. 
والحين لما أرجع أتذكر تلك الأيام، أضحك من قلبي وأحمد ربي ألف مرة إنك ما استسلمتِ وضلّيتي تراسليني. 
هذيك الرسايل البسيطة هي اللي بنت كل هذا الحب العظيم اللي بقلبي لكِ اليوم. 
شكراً لأنكِ بديتِ، ولأنكِ دخلتِ عالمي وغيرتِ كل شيء فيه للأجمل.`,
      date: "Voice Note from Aseel ♡"
    },
    {
      id: "letter-2",
      titleEnglish: "The Night You Made Me Confess",
      titleArabic: "الليلة اللي خليتيني أعترف فيها",
      audioSrc: "assets/audio/voice2.mp3",
      duration: "1:28",
      preview: "I was so scared, but you held my hand through the screen...",
      bodyArabic: `حبيبتي أنيتي،
تتذكرين ليلة المكالمة الصوتية؟ كنت خايفة أقول اللي بقلبي، خايفة من مشاعري، وكنتِ تلعبين معي بمرح وتحاصريني بلطافة وتخليني أنطق باللي بقلبي.. 
لما اعترفنا لبعض في هذيك الليلة، حسيت كأن حمل ثقيل انزاح عن صدري وحل مكانه دفء عظيم ما فارقني من وقتها. 
شجاعتك ولطافتك في هذاك اليوم فتحت لي أجمل باب في حياتي: باب قلبك.`,
      date: "Voice Note from Aseel ♡"
    },
    {
      id: "letter-3",
      titleEnglish: "Things I Love About You",
      titleArabic: "أشياء أحبها فيكِ وتأسرني",
      audioSrc: "assets/audio/voice3.mp3",
      duration: "1:35",
      preview: "Your tenderness, the way you pamper me, and your quiet warmth...",
      bodyArabic: `أنيتي،
أحب فيكِ أشياء كثيرة صعب أحصرها في ورقة، بس أهمها:
أحب كيف تدللين قلبي وتخليني أحس إني طفلتك المدللة.
أحب اهتمامك بأصغر التفاصيل اللي تخصني.
أحب إنك تعامليني بطريقة خاصة ومختلفة عن الكل، وتخليني أحس بقيمتي الكبيرة عندك.
أحب حنيتك وروحك الهادئة العميقة اللي تشبه سكون النجوم.
أنتِ نعمة قلبي وأجمل ما فيه يا أغلى إنسانة في حياتي.`,
      date: "Voice Note from Aseel ♡"
    },
    {
      id: "letter-4",
      titleEnglish: "For When You Miss Me",
      titleArabic: "لو حسيتِ بشوق أو بعد في أي وقت",
      audioSrc: "assets/audio/voice4.mp3",
      duration: "1:20",
      preview: "Look up at this little universe whenever you feel far...",
      bodyArabic: `حبيبتي أنيا،
إذا مر عليكِ وقت حسيتِ فيه بالاشتياق أو التعب أو حسيتِ إنك بعيدة، تذكري دائماً إنك موجودة في أعماق قلبي في كل ثانية. 
هذا العالم الصغير بنيته لكِ عشان تذكرين في أي وقت إن هناك شخصاً يحبك بكل ما فيه، وممتن لكل نفس يتنفسه بوجودك. 
أنا معكِ دائماً، حتى لو بيننا مسافات.. قلبي عندك.`,
      date: "Voice Note from Aseel ♡"
    },
    {
      id: "letter-5",
      titleEnglish: "For When You Need a Little Extra Love",
      titleArabic: "لو احتجتِ جرعة حب ودلال إضافية",
      audioSrc: "assets/audio/voice5.mp3",
      duration: "1:42",
      preview: "A gentle reminder of how precious you truly are...",
      bodyArabic: `أنيتي الجميلة،
في الأيام اللي تحسين فيها إنكِ متعبة أو مضغوطة، خذي نفساً عميقاً وتذكري: أنتِ إنسانة نقية، حنونة، ورائعة لدرجة تفوق الخيال. 
تستاهلين كل الحب والاهتمام والراحة في هذا العالم. 
ولا تنسين إنكِ حبوبي اللي مدللة عندي دائماً وأبداً. 
أنا فخورة فيكِ وبقلبك الطيب وبكل تفاصيلك.`,
      date: "Voice Note from Aseel ♡"
    },
    {
      id: "letter-6",
      titleEnglish: "A Voice Note for Your 24th Birthday",
      titleArabic: "فويس لعمرك الجديد.. الـ 24",
      audioSrc: "assets/audio/voice6.mp3",
      duration: "1:55",
      preview: "Happy 24th Birthday, my favorite person in the entire universe...",
      bodyArabic: `إلى أنيتي الغالية في يوم ميلادها الـ ٢٤،
اليوم تكملين أربعة وعشرين سنة من الجمال والرقة، وأنا محظوظة وسعيدة جداً إني أشاركك هذي اللحظة من قصة حياتك. 
يا رب تكون سنتك الجديدة هذي مليانة راحة بال، ونجاحات، وضحكات من القلب، وأيام تشبه حلاوة روحك. 
أحبك اليوم وبكرة وفي كل سنة جاية يا روحي. 
كل عام وأنتِ عالمي كله ♡`,
      date: "Voice Note from Aseel ♡"
    }
  ],

  // --- Destination 4: The Little Carnival (Mini-Games) ---
  carnival: {
    game1: {
      title: "Collect the Stars",
      description: "Drift through the sky and gather the glowing birthday stars.",
      targetStars: 7,
      starQuotes: [
        "Your attentiveness makes my days so much brighter.",
        "The gentle way you pamper me melts my heart.",
        "I love the sound of your laughter during our calls.",
        "March 31 was the best turning point in my life.",
        "You make me feel uniquely special, every single day.",
        "Loving you is the easiest, sweetest thing I have ever done.",
        "Happy 24th Birthday, my Anity ♡"
      ],
      completionMessageEnglish: "Every little star reminds me of something I love about you.",
      completionMessageArabic: "كل نجمة جمعتيها هي صفة وذكرى أحبها فيكِ يا أنيتي."
    },
    game2: {
      title: "Find Our Constellation",
      description: "Connect the celestial stars to unveil our special constellation.",
      starsCount: 6,
      completionMessageEnglish: "Two little stars. One very special universe.",
      completionMessageArabic: "نجمتان التقتا في سماء واحدة، وصنعتا هذا الكون الجميل."
    },
    game3: {
      title: "The Little Love Quiz",
      description: "A gentle, affectionate quiz celebrating our story.",
      questions: [
        {
          questionEnglish: "Which date marks the very beginning of our little story?",
          questionArabic: "ما هو التاريخ الذي بدأت فيه حكايتنا الجميلة؟",
          options: ["March 31", "October 17", "December 25", "April 14"],
          correctIndex: 0,
          explanationArabic: "صح! ٣١ مارس، اليوم اللي بدأت فيه أجمل صدفة ♡"
        },
        {
          questionEnglish: "Where did we first get to know each other?",
          questionArabic: "أين تعرفنا على بعضنا لأول مرة؟",
          options: [
            "Anea was an administrator on Aseel's server",
            "At a coffee shop under the rain",
            "In a library reading The Little Prince",
            "Through a random gaming lobby"
          ],
          correctIndex: 0,
          explanationArabic: "بالضبط! لما كنتِ مشرفة في السيرفر وتراسليني بالخاص ♡"
        },
        {
          questionEnglish: "What happened during that unforgettable voice call?",
          questionArabic: "ماذا حدث في تلك الليلة التي جمعتنا في المكالمة الصوتية؟",
          options: [
            "Anea playfully encouraged Aseel until they both confessed their feelings",
            "They fell asleep listening to music",
            "They argued about which game was better",
            "They studied for an exam together"
          ],
          correctIndex: 0,
          explanationArabic: "أحلى مكالمة! لما حاصرتيني بدلال وخليتيني أعترف بمشاعري ♡"
        },
        {
          questionEnglish: "What is the special pet name Aseel loves to call you with?",
          questionArabic: "ما هي الكلمة اللطيفة اللي أسيل دايماً تحب تناديكِ وتدلعك فيها؟",
          options: ["حبوبي", "وردتي", "قمر", "نجمتي"],
          correctIndex: 0,
          explanationArabic: "حبوبي.. أحلى كلمة تدلعك فيها أسيل من كل قلبها ♡"
        },
        {
          questionEnglish: "Which song did Aseel specifically dedicate to Anea?",
          questionArabic: "ما هي الأغنية التي أهدتها أسيل لـ أنيا بكل حب؟",
          options: ["'love.' by wave to earth", "'Yellow' by Coldplay", "'Golden Hour' by JVKE", "'Until I Found You' by Stephen Sanchez"],
          correctIndex: 0,
          explanationArabic: "أغنية 'love.' الهادئة والدافئة من wave to earth ♡"
        }
      ]
    }
  },

  // --- Destination 5: The Lake of Stars ---
  lake: {
    title: "The Lake of Stars",
    subtitle: "بحيرة النجوم الهادئة",
    whispers: [
      {
        english: "You make me feel uniquely special, in a way no one else ever could.",
        arabic: "طريقتك في الاهتمام بي تخليني أحس إني استثنائية جداً عندك."
      },
      {
        english: "I love the tenderness you give me without even trying.",
        arabic: "حنيتك العفوية تعني لقلبي أكثر بكثير مما تتصورين."
      },
      {
        english: "Our quietest conversations remain my warmest memories.",
        arabic: "سوالفنا الهادئة هي أدفأ مكان يلجأ له قلبي دائماً."
      },
      {
        english: "I am so grateful you kept sending those first messages.",
        arabic: "ممتنة لذاك اليوم اللي قررتِ فيه تراسليني وما استسلمتِ لثقلي."
      },
      {
        english: "Your pampering is my absolute favorite feeling in the world.",
        arabic: "دلالك لي وحنيتك عليّ هو أجمل شعور أعيشه معك."
      }
    ]
  },

  // --- Destination 6: The Birthday Castle ---
  castle: {
    title: "The Birthday Castle",
    subtitle: "قصر الـ 24 عاماً",
    unlockedMessage: "Twenty-four years of you. And somehow, I get to love you in this little moment of your story. Happy Birthday, my Anity. ♡",
    unlockedMessageArabic: "أربعة وعشرون عاماً من وجودك في هذه الحياة.. ومن حسن حظي وقدري إني أحبك في هذا الفصل الجميل من قصتك. كل عام وأنتِ بخير يا أنيتي ♡"
  },

  // --- Final Surprise Content ---
  finalSurprise: {
    headingEnglish: "For My Favorite Person in This Universe",
    headingArabic: "لأحب وأغلى شخص في هذا الكون كله",
    letterArabic: `حبيبتي وأنيتي الغالية،

اليوم وأنتِ تطفئين شمعتك الـ ٢٤، تذكرت كيف بدأت كل هذي الحكاية برسالة عادية جداً في الخاص.. كيف كنتِ تجين تكلميني وأنا أسوي نفسي بعيدة وثقيلة، وكيف شوي شوي لقيت قلبي يلين وينجرف وراكِ بدون أي مقاومة.

أتذكر مكالمتنا الصوتية، يوم كنت خايفة أعترف بحبي لكِ، وكيف حاصرتيني بحنيتك ودلالك ولطافتك لحد ما انكسر حاجز الخوف واعترفنا لبعض.. ومن هذاك اليوم وعالمي كله صار أدفأ وأحلى.

أنا ممتنة جداً لوجودك في حياتي، وممتنة لكل مرة دللتيني فيها، ولكل اهتمام حسستيني فيه إني شخص مميز وفريد في عينك. حنيتك هذي هي اللي خلتني أعرف معنى الأمان الحقيقي.

أتمنى لكِ في عامك الجديد الـ ٢٤ أيام مليانة فرح يشبه فرحة قلبي لما أشوفك، وراحة بال تدوم، ونجاحات تفرحك. تستاهلين تنحبين وتتدللين وتعيشين مبسوطة في كل ثانية.

Happy 24th Birthday, my Anity. I love you, حبوبي. ♡`,
    closingLineEnglish: "In every little universe, I'd still find my way to you.",
    closingLineArabic: "في كل كون وفي كل زمان، سأجد طريقي دائماً إليكِ."
  },

  // --- Secret Easter Eggs ---
  secrets: {
    secretStar: "You found a little secret. Just like the way you found your way into my heart. ♡",
    secretStarArabic: "لقيتِ نجمة سرية.. تماماً مثل ما لقيتِ طريقك لقلبي وسكنتِ فيه ♡",
    hiddenWord: "حبوبي",
    hiddenWordMessage: "الكلمة اللي أحب أناديكِ وأدلعك فيها دايماً.. حبوبي ♡"
  }
};
