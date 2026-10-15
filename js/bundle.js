/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Standalone Distribution for GitHub Pages & Local file://
 */
(function() {
  "use strict";


/* === Source: js/config.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Centralized Configuration File
 * 
 * Aseel can customize all names, messages, letters, memories, quiz questions,
 * photos, video, and music links here without editing any code components.
 */

const CONFIG = {
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
      audioSrc: "assets/audio/voice1.m4a",
      audioSrcMp3: "assets/audio/voice1.mp3",
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
      audioSrc: "assets/audio/voice2.m4a",
      audioSrcMp3: "assets/audio/voice2.mp3",
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
      audioSrc: "assets/audio/voice3.m4a",
      audioSrcMp3: "assets/audio/voice3.mp3",
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
      audioSrc: "assets/audio/voice4.m4a",
      audioSrcMp3: "assets/audio/voice4.mp3",
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
      audioSrc: "assets/audio/voice5.m4a",
      audioSrcMp3: "assets/audio/voice5.mp3",
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
      audioSrc: "assets/audio/voice6.m4a",
      audioSrcMp3: "assets/audio/voice6.mp3",
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
          options: ["October 17", "March 31", "December 25", "April 14"],
          correctIndex: 1,
          explanationArabic: "صح! ٣١ مارس، اليوم اللي بدأت فيه أجمل صدفة في عالمنا ♡"
        },
        {
          questionEnglish: "Where did we first get to know each other?",
          questionArabic: "أين تعرفنا على بعضنا لأول مرة؟",
          options: [
            "At a coffee shop under the rain",
            "In Pookiiee's Discord server",
            "In a library reading stories",
            "Through a random gaming lobby"
          ],
          correctIndex: 1,
          explanationArabic: "صح! في سيرفر ديسكورد بوكي (In Pookiiee's Discord server) ♡"
        },
        {
          questionEnglish: "What happened during that unforgettable voice call?",
          questionArabic: "ماذا حدث في تلك الليلة التي جمعتنا في المكالمة الصوتية؟",
          options: [
            "They fell asleep listening to midnight rain",
            "They argued about which game was better",
            "Anea encouraged Aseel to confess, and they discovered their mutual feelings",
            "They were just studying for an exam together"
          ],
          correctIndex: 2,
          explanationArabic: "أحلى لحظة! شجعت أنيا أسيل فاعترفا لبعضهما واكتشفا مشاعرهما المتبادلة ♡"
        },
        {
          questionEnglish: "What is the special pet name Aseel loves to call you with?",
          questionArabic: "ما هي الكلمة اللطيفة اللي أسيل دايماً تحب تناديكِ وتدلعك فيها؟",
          options: ["My Rose", "My Moon", "My Little Star", "Haboubi ♡"],
          correctIndex: 3,
          explanationArabic: "حبوبي.. الكلمة اللي أسيل دايماً تحب تدلعك فيها بكل حب ♡"
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
        english: "The way you care for me makes me feel so uniquely special to you.",
        arabic: "طريقتك بالاهتمام فيني تخليني احس اني استثنائية عندك"
      },
      {
        english: "Your tenderness means the world to my heart, far more than you could ever imagine.",
        arabic: "حنيتك لي تعني لقلبي الكثير اكثر مما تتصورين"
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
    unlockedMessageArabic: "أربعة وعشرون عاماً من وجودك في هذه الحياة.. ومن حسن حظي وقدري إني أحبك في هذا الفصل الجميل من قصتك. كل عام وأنتِ بخير يا أنيتي ♡",
    gallery: [
      {
        id: "photo1",
        src: "assets/images/photo1.png",
        captionArabic: "تطقيمنا الي داخل قلبي",
        captionEnglish: "Our Matching Icons in My Heart"
      },
      {
        id: "photo2",
        src: "assets/images/photo2.png",
        captionArabic: "قدرتي تخلي قلبي لك",
        captionEnglish: "You Made My Whole Heart Yours"
      },
      {
        id: "photo3",
        src: "assets/images/photo3.png",
        captionArabic: "كلامك وغرامك وحبك ليا الي يخليني اصحى ميته حب ومشاعر لك",
        captionEnglish: "Your Loving Words That Warm My Soul"
      },
      {
        id: "photo4",
        src: "assets/images/photo4.png",
        captionArabic: "كولاتنا الطويله الي كنت فيها اقدر اسمع صوتك النعسان وانا مستانسه",
        captionEnglish: "Our Long Midnight Calls & Sleepy Voice"
      },
      {
        id: "photo5",
        src: "assets/images/photo5.png",
        captionArabic: "جملة للحين بقلبي ومابنساها",
        captionEnglish: "Words Kept Deep in My Heart Forever"
      },
      {
        id: "photo6",
        src: "assets/images/photo6.png",
        captionArabic: "تطقيمنا الهوتت بالدس كنت وللان مبسوطه عليه",
        captionEnglish: "Our Cute Matching Discord Avatars"
      }
    ]
  },

  // --- Final Surprise Content ---
  finalSurprise: {
    headingEnglish: "To My Beautiful Anity ♡",
    headingArabic: "الى انيتي الحلوه ♡",
    letterArabic: `ماميتي صارت 24 وانا معاها مامي تصير مامي اكثر من قبل يميميميميميي، جتني ذكرايات وقاعده اتذكر وابتسم كيف بدايتنا كيف تعرفنا كيف صرنا ندخل فويسات وكل وحده مغرمه بالثانيه وساكته كيف قلبك كان يدق لي وكيف كانت كلمت احبك تخليك تنجننين من الحب، كيف كنت انتظر منك تقولي لنا ندخل فويس وانبسط يوم تقولي ( لوحدنا اول ) اهخخ قلبي فكرة اني كنت ثقيله عيلك وانتِ ترسلي لي وكيف شوي شوي لقيت قلبي يلين معاك وصرت انا الي ادورك وابيك، كيف حسستيني بالامان بكل لحظه كنتها معاك كيف كنتي لي كل حاجه من ام اخت صديقه حبيبه وروح وقلب  انا ممتنه لوجودك فحياتي وممتنه لكل مره دللتيني ودلعتيني فيها ولكل اهتمام حسستيني فيه اني شخص مميز فعيونك حنيتك وحبك هم الي خلوني اعرف معنى الحب والامان حرفيا.

اتمنى لك ف سنتك الجديده ايام مليانه فرح يشبه فرحك قلبي لما اشوفك وراحة بال تدوم ونجاحات تفرحك تستاهلين كل الخير والحب والدلال تستاهلين تعيشين مبسوطه في كل ثانيه، احبك ♡`,
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


/* === Source: js/state.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * State & Persistence Manager
 */

const STORAGE_KEY = "aneas_universe_save_v1";

const DEFAULT_STATE = {
  starsCollected: 0,
  maxStars: 24, // 24 stars for her 24th birthday!
  collectedStarIds: [],
  memoriesVisited: [],
  lettersOpened: [],
  minigames: {
    collectStars: false,
    constellation: false,
    quiz: false
  },
  secrets: {
    secretStar: false,
    hiddenWord: false,
    tinyGift: false
  },
  soundEnabled: true,
  masterVolume: 0.6,
  reducedMotion: false,
  introSeen: false,
  castleUnlocked: false,
  finalGiftOpened: false,
  activeScene: "intro",
  unlockedDestinations: ["home"],
  exploredDestinations: []
};

class StateManager {
  constructor() {
    this.state = this.load();
    this.listeners = [];
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return { ...DEFAULT_STATE, ...parsed };
      }
    } catch (e) {
      console.warn("Storage could not be loaded:", e);
    }
    return { ...DEFAULT_STATE };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Storage could not be saved:", e);
    }
    this.notify();
  }

  reset() {
    this.state = {
      ...DEFAULT_STATE,
      starsCollected: 0,
      collectedStarIds: [],
      memoriesVisited: [],
      lettersOpened: [],
      minigames: {
        collectStars: false,
        constellation: false,
        quiz: false
      },
      secrets: {
        secretStar: false,
        hiddenWord: false,
        tinyGift: false
      },
      castleUnlocked: false,
      finalGiftOpened: false,
      unlockedDestinations: ["home"],
      exploredDestinations: []
    };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  collectStar(starId) {
    if (!this.state.collectedStarIds.includes(starId)) {
      this.state.collectedStarIds.push(starId);
      this.state.starsCollected = Math.min(this.state.maxStars, this.state.collectedStarIds.length);
      this.checkCastleUnlock();
      this.save();
      return true;
    }
    return false;
  }

  visitMemory(memoryId) {
    if (!this.state.memoriesVisited.includes(memoryId)) {
      this.state.memoriesVisited.push(memoryId);
      this.checkCastleUnlock();
      this.save();
      return true;
    }
    return false;
  }

  openLetter(letterId) {
    if (!this.state.lettersOpened.includes(letterId)) {
      this.state.lettersOpened.push(letterId);
      this.checkCastleUnlock();
      this.save();
      return true;
    }
    return false;
  }

  completeMinigame(gameKey) {
    if (this.state.minigames[gameKey] !== undefined) {
      this.state.minigames[gameKey] = true;
      this.checkCastleUnlock();
      this.save();
    }
  }

  unlockSecret(secretKey) {
    if (this.state.secrets[secretKey] !== undefined && !this.state.secrets[secretKey]) {
      this.state.secrets[secretKey] = true;
      this.collectStar(`secret_${secretKey}`);
      this.save();
      return true;
    }
    return false;
  }

  checkCastleUnlock() {
    const explored = this.state.exploredDestinations || [];
    if (explored.includes("lake") || explored.length >= 5) {
      this.state.castleUnlocked = true;
    }
  }

  isDestinationUnlocked(destId) {
    if (destId === "home") return true;
    const explored = this.state.exploredDestinations || [];
    if (destId === "garden") return explored.includes("home");
    if (destId === "mailbox") return explored.includes("garden");
    if (destId === "carnival") return explored.includes("mailbox");
    if (destId === "lake") return explored.includes("carnival");
    if (destId === "castle") return explored.includes("lake") || explored.length >= 5;
    return false;
  }

  isDestinationExplored(destId) {
    if (!this.state.exploredDestinations) {
      this.state.exploredDestinations = [];
    }
    if (this.state.exploredDestinations.includes(destId)) return true;
    if (destId === "garden" && this.state.memoriesVisited.length >= 3) return true;
    if (destId === "mailbox" && this.state.lettersOpened.length >= 2) return true;
    if (destId === "carnival" && Object.values(this.state.minigames).filter(Boolean).length >= 1) return true;
    return false;
  }

  markDestinationExplored(destId) {
    if (!this.state.exploredDestinations) {
      this.state.exploredDestinations = [];
    }
    if (!this.state.exploredDestinations.includes(destId)) {
      this.state.exploredDestinations.push(destId);
    }
    this.unlockNextDestination(destId);
    this.save();
  }

  unlockNextDestination(currentDest) {
    const sequence = ["home", "garden", "mailbox", "carnival", "lake", "castle"];
    const idx = sequence.indexOf(currentDest);
    if (idx !== -1 && idx < sequence.length - 1) {
      const nextDest = sequence[idx + 1];
      if (!this.state.unlockedDestinations) {
        this.state.unlockedDestinations = ["home"];
      }
      if (!this.state.unlockedDestinations.includes(nextDest)) {
        this.state.unlockedDestinations.push(nextDest);
        if (nextDest === "castle") {
          this.state.castleUnlocked = true;
        }
        this.save();
        return nextDest;
      }
    }
    return null;
  }

  getDiscoveryProgress() {
    // Total discovery percentage (0 - 100%)
    const totalItems = 6 + 6 + 3 + 3; // 6 memories, 6 letters, 3 minigames, 3 secrets
    const current = 
      this.state.memoriesVisited.length +
      this.state.lettersOpened.length +
      Object.values(this.state.minigames).filter(Boolean).length +
      Object.values(this.state.secrets).filter(Boolean).length;
    return Math.min(100, Math.round((current / totalItems) * 100));
  }
}

const stateManager = new StateManager();


/* === Source: js/audio.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Ambient Celestial Audio Synthesizer & Sound Effects
 * Built with Web Audio API for zero external audio dependencies.
 */

class CelestialAudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.volume = 0.5;
    this.isPlayingAmbient = false;
    this.ambientInterval = null;
    this.bgAudioEl = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
    if (this.bgAudioEl && !this.isMuted) {
      this.bgAudioEl.volume = this.volume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
    if (this.bgAudioEl) {
      this.bgAudioEl.muted = this.isMuted;
    }
    return !this.isMuted;
  }

  /**
   * Play a gentle celestial chime (e.g. for collecting a star or opening a memory)
   */
  playChime(frequency = 523.25, duration = 1.2) {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Sine wave with soft bell harmonics
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      // Subtle pitch bend
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.02, this.ctx.currentTime + duration * 0.1);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2400, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + duration + 0.1);
    } catch (e) {}
  }

  /**
   * Multi-note chime chord (for completing a constellation, discovering a secret, or unlocking the castle)
   */
  playStarlightChord() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playChime(freq, 1.8), idx * 120);
    });
  }

  /**
   * Gentle paper rustle / letter unfolding sound
   */
  playPaperSound() {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resume();
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      whiteNoise.start(this.ctx.currentTime);
    } catch (e) {}
  }

  /**
   * Start peaceful generative celestial background music
   * Generates warm, low-frequency atmospheric drone and occasional gentle harp notes
   */
  startAmbient() {
    if (this.isPlayingAmbient) return;
    this.resume();
    this.isPlayingAmbient = true;

    // Ambient chord cycle: Fmaj9 -> Cmaj7 -> Am9 -> Gsus4
    const chords = [
      [174.61, 261.63, 329.63, 392.00], // F3, C4, E4, G4
      [130.81, 196.00, 246.94, 329.63], // C3, G3, B3, E4
      [110.00, 164.81, 220.00, 261.63], // A2, E3, A3, C4
      [146.83, 196.00, 293.66, 392.00]  // D3, G3, D4, G4
    ];
    let chordIdx = 0;

    const playChordPad = () => {
      if (!this.isPlayingAmbient || !this.ctx || this.isMuted) return;
      const freqs = chords[chordIdx % chords.length];
      chordIdx++;

      freqs.forEach(freq => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const filter = this.ctx.createBiquadFilter();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(600, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.035, this.ctx.currentTime + 2.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 7.5);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);

          osc.start(this.ctx.currentTime);
          osc.stop(this.ctx.currentTime + 7.8);
        } catch (e) {}
      });
    };

    playChordPad();
    this.ambientInterval = setInterval(playChordPad, 7000);
  }

  stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }
}

const audioManager = new CelestialAudioManager();


/* === Source: js/characters.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Adorable Chibi Character System: Anea & Aseel
 * Super cute chibi proportions (big expressive sparkling eyes, chubby blushing cheeks,
 * cute cozy oversized outfits, and heartwarming duo poses).
 */

const Characters = {
  /**
   * Generates Anea's Chibi SVG
   * Features: Medium-brown complexion, adorable voluminous curly hair poofs with starlight hair clip,
   * big glossy sparkling anime-chibi eyes with stars, rosy blushing cheeks, cute oversized cream sweater & sage pants.
   */
  getAneaSVG(pose = "standing", size = 130) {
    const isSitting = pose === "sitting" || pose === "sittingTogether";
    const height = size;
    const width = size * 0.85;

    return `
    <svg class="character-svg chibi-char anea-chibi ${pose}" width="${width}" height="${height}" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Chibi skin tone: warm radiant medium-brown -->
        <linearGradient id="chibi-anea-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b8836f" />
          <stop offset="100%" stop-color="#a06956" />
        </linearGradient>

        <!-- Rich naturally curly hair -->
        <linearGradient id="chibi-anea-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#342019" />
          <stop offset="100%" stop-color="#1c100c" />
        </linearGradient>

        <!-- Cozy oversized cream knit sweater -->
        <linearGradient id="chibi-anea-sweater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#faf6ee" />
          <stop offset="100%" stop-color="#dfd7c5" />
        </linearGradient>

        <!-- Soft sage pants -->
        <linearGradient id="chibi-anea-pants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#556c60" />
          <stop offset="100%" stop-color="#3c4e45" />
        </linearGradient>

        <!-- Starlight eye gradient -->
        <radialGradient id="chibi-eye-dark" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#2a1a14" />
          <stop offset="100%" stop-color="#120906" />
        </radialGradient>
      </defs>

      <!-- Soft ground shadow -->
      <ellipse cx="55" cy="${isSitting ? '122' : '126'}" rx="28" ry="4.5" fill="rgba(8, 12, 24, 0.45)" />

      <!-- Back Hair Curls Volume (Fluffy Chibi Curls) -->
      <circle cx="30" cy="38" r="14" fill="url(#chibi-anea-hair)" />
      <circle cx="24" cy="52" r="13" fill="url(#chibi-anea-hair)" />
      <circle cx="28" cy="66" r="11" fill="url(#chibi-anea-hair)" />
      
      <circle cx="80" cy="38" r="14" fill="url(#chibi-anea-hair)" />
      <circle cx="86" cy="52" r="13" fill="url(#chibi-anea-hair)" />
      <circle cx="82" cy="66" r="11" fill="url(#chibi-anea-hair)" />

      <!-- Top Volume Curls -->
      <circle cx="42" cy="24" r="14" fill="url(#chibi-anea-hair)" />
      <circle cx="55" cy="20" r="15" fill="url(#chibi-anea-hair)" />
      <circle cx="68" cy="24" r="14" fill="url(#chibi-anea-hair)" />

      <!-- Chibi Legs & Feet -->
      ${!isSitting ? `
        <!-- Tiny cute standing feet -->
        <rect x="44" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-anea-pants)" />
        <rect x="57" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-anea-pants)" />
        <ellipse cx="48.5" cy="123" rx="6.5" ry="4" fill="#2d221c" />
        <ellipse cx="61.5" cy="123" rx="6.5" ry="4" fill="#2d221c" />
      ` : `
        <!-- Cute sitting crossed feet -->
        <ellipse cx="44" cy="116" rx="10" ry="6" fill="url(#chibi-anea-pants)" />
        <ellipse cx="66" cy="116" rx="10" ry="6" fill="url(#chibi-anea-pants)" />
        <ellipse cx="41" cy="118" rx="5" ry="3.5" fill="#2d221c" />
        <ellipse cx="69" cy="118" rx="5" ry="3.5" fill="#2d221c" />
      `}

      <!-- Chubby Little Body with Cozy Oversized Sweater -->
      <path d="M36 74 Q55 69 74 74 Q80 96 72 102 Q55 106 38 102 Q30 96 36 74 Z" fill="url(#chibi-anea-sweater)" />
      <!-- Ribbed sweater collar -->
      <ellipse cx="55" cy="73" rx="13" ry="5.5" fill="#cfc5b0" />

      <!-- Chibi Arms -->
      ${pose === "holdingHands" ? `
        <!-- Tiny arm reaching to the side to hold Aseel's hand -->
        <path d="M38 78 Q30 88 34 94" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="34" cy="94" r="3.5" fill="url(#chibi-anea-skin)" />
        <path d="M72 78 Q84 86 94 92" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="95" cy="93" r="4.5" fill="url(#chibi-anea-skin)" />
      ` : pose === "reading" ? `
        <!-- Tiny hands holding a glowing letter -->
        <path d="M40 82 Q48 94 54 94" stroke="url(#chibi-anea-sweater)" stroke-width="7" stroke-linecap="round" />
        <path d="M70 82 Q62 94 56 94" stroke="url(#chibi-anea-sweater)" stroke-width="7" stroke-linecap="round" />
        <rect x="49" y="87" width="12" height="9" rx="1.5" fill="#faf8f2" stroke="#dfba53" stroke-width="1" />
        <path d="M49 87 L55 92 L61 87" stroke="#dfba53" stroke-width="0.8" fill="none" />
      ` : `
        <!-- Cute resting chubby arms -->
        <path d="M37 78 Q30 90 38 96" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="38" cy="96" r="3.5" fill="url(#chibi-anea-skin)" />
        <path d="M73 78 Q80 90 72 96" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="72" cy="96" r="3.5" fill="url(#chibi-anea-skin)" />
      `}

      <!-- Chibi Big Chubby Head -->
      <ellipse cx="55" cy="48" rx="27" ry="24" fill="url(#chibi-anea-skin)" />

      <!-- Rosy Glowing Blushing Cheeks -->
      <ellipse cx="37" cy="54" rx="5.5" ry="3.5" fill="#e26a6a" opacity="0.45" />
      <ellipse cx="73" cy="54" rx="5.5" ry="3.5" fill="#e26a6a" opacity="0.45" />

      <!-- Big Sparkling Chibi Anime Eyes -->
      <!-- Left Eye -->
      <g class="chibi-eye left-eye">
        <ellipse cx="42" cy="46" rx="6.5" ry="8" fill="url(#chibi-eye-dark)" />
        <!-- Big white glossy starlight reflection -->
        <circle cx="40" cy="43" r="2.8" fill="#ffffff" />
        <!-- Small bottom starlight sparkle -->
        <circle cx="44.5" cy="49.5" r="1.4" fill="#ffffff" />
        <!-- Delicate upper anime eyelash curve -->
        <path d="M35 42 Q42 36 49 41" stroke="#1c100c" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>

      <!-- Right Eye -->
      <g class="chibi-eye right-eye">
        <ellipse cx="68" cy="46" rx="6.5" ry="8" fill="url(#chibi-eye-dark)" />
        <circle cx="66" cy="43" r="2.8" fill="#ffffff" />
        <circle cx="70.5" cy="49.5" r="1.4" fill="#ffffff" />
        <path d="M61 41 Q68 36 75 42" stroke="#1c100c" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>

      <!-- Delicate eyebrows -->
      <path d="M37 36 Q42 34 46 36" stroke="#2c1d18" stroke-width="1.3" stroke-linecap="round" fill="none" />
      <path d="M64 36 Q68 34 73 36" stroke="#2c1d18" stroke-width="1.3" stroke-linecap="round" fill="none" />

      <!-- Cute Tiny Smile -->
      <path d="M52 54 Q55 57 58 54" stroke="#4a251b" stroke-width="1.5" stroke-linecap="round" fill="none" />

      <!-- Forehead Soft Natural Curly Bangs -->
      <circle cx="38" cy="30" r="8" fill="url(#chibi-anea-hair)" />
      <circle cx="48" cy="27" r="9" fill="url(#chibi-anea-hair)" />
      <circle cx="60" cy="27" r="9" fill="url(#chibi-anea-hair)" />
      <circle cx="70" cy="30" r="8" fill="url(#chibi-anea-hair)" />
      <!-- Baby curl wisps -->
      <path d="M42 32 Q46 36 48 31" stroke="url(#chibi-anea-hair)" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M64 32 Q62 36 60 31" stroke="url(#chibi-anea-hair)" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Delicate Golden Starlight Hairclip -->
      <g class="starlight-clip" transform="translate(68, 22) scale(0.9)">
        <polygon points="6,0 7.8,4.5 12,4.5 8.5,7.2 9.8,11.5 6,8.8 2.2,11.5 3.5,7.2 0,4.5 4.2,4.5" fill="#dfba53" filter="drop-shadow(0 0 3px rgba(223, 186, 83, 0.8))" />
      </g>
    </svg>
    `;
  },

  /**
   * Generates Aseel's Chibi SVG
   * Features: Warm natural complexion, charming sleek dark anime-chibi hair, big gentle sparkling eyes,
   * Aseel's Signature Chibi Design:
   * Super adorable Chibi wearing a cute pastel pink knit sweater with regular comfortable sleeves,
   * sweet cream collar with tiny starlight heart brooch, cute warm skirt & boots,
   * glossy dark hair with soft side locks, blushing cheeks, and golden crescent clip.
   */
  getAseelSVG(pose = "standing", size = 130) {
    const isSitting = pose === "sitting" || pose === "sittingTogether";
    const height = size;
    const width = size * 0.85;

    return `
    <svg class="character-svg chibi-char aseel-chibi ${pose}" width="${width}" height="${height}" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Radiant soft fair skin tone -->
        <linearGradient id="chibi-aseel-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef0e7" />
          <stop offset="100%" stop-color="#f3d1be" />
        </linearGradient>

        <!-- Silken dark coffee hair with soft warm tone -->
        <linearGradient id="chibi-aseel-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#342b36" />
          <stop offset="100%" stop-color="#1d1620" />
        </linearGradient>

        <!-- Adorable Cozy Pastel Rose Pink Knit Sweater (لابسة بينك كيوت) -->
        <linearGradient id="chibi-aseel-sweater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#faa8c0" />
          <stop offset="100%" stop-color="#ee7697" />
        </linearGradient>

        <!-- Cute cream pink ribbing & cuffs -->
        <linearGradient id="chibi-aseel-pink-cuff" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fedde6" />
          <stop offset="100%" stop-color="#f79bb4" />
        </linearGradient>

        <!-- Sweet cocoa skirt / warm cozy bottom -->
        <linearGradient id="chibi-aseel-skirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4f3b47" />
          <stop offset="100%" stop-color="#382832" />
        </linearGradient>

        <!-- Big Sparkling Anime Chibi Eye Gradient -->
        <radialGradient id="chibi-eye-aseel" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#3c2f42" />
          <stop offset="65%" stop-color="#1e1522" />
          <stop offset="100%" stop-color="#0e0a12" />
        </radialGradient>
      </defs>

      <!-- Soft ground shadow -->
      <ellipse cx="55" cy="${isSitting ? '122' : '126'}" rx="28" ry="4.5" fill="rgba(8, 12, 24, 0.45)" />

      <!-- Back Hair Volume & Cute Silken Side Tufts -->
      <ellipse cx="55" cy="38" rx="30" ry="26" fill="url(#chibi-aseel-hair)" />
      <!-- Left & Right cute hair locks resting gently over shoulders -->
      <path d="M25 38 Q20 56 26 70 Q30 57 29 41 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M85 38 Q90 56 84 70 Q80 57 81 41 Z" fill="url(#chibi-aseel-hair)" />
      <!-- Tiny cute pink ribbon bow on side hair lock -->
      <circle cx="24" cy="54" r="2.5" fill="#f78fb3" />
      <circle cx="86" cy="54" r="2.5" fill="#f78fb3" />

      <!-- Chibi Legs & Feet -->
      ${!isSitting ? `
        <!-- Cute standing cozy legs with little boots -->
        <rect x="44" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-aseel-skirt)" />
        <rect x="57" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-aseel-skirt)" />
        <!-- Cute little boots with pink lace dot -->
        <ellipse cx="48.5" cy="123" rx="6.5" ry="4" fill="#241a22" />
        <ellipse cx="61.5" cy="123" rx="6.5" ry="4" fill="#241a22" />
        <circle cx="48.5" cy="121" r="1.3" fill="#faa8c0" />
        <circle cx="61.5" cy="121" r="1.3" fill="#faa8c0" />
      ` : `
        <!-- Sitting cozy feet -->
        <ellipse cx="44" cy="116" rx="10" ry="6" fill="url(#chibi-aseel-skirt)" />
        <ellipse cx="66" cy="116" rx="10" ry="6" fill="url(#chibi-aseel-skirt)" />
        <ellipse cx="41" cy="118" rx="5" ry="3.5" fill="#241a22" />
        <ellipse cx="69" cy="118" rx="5" ry="3.5" fill="#241a22" />
      `}

      <!-- Chubby Little Body with Cute Pastel Pink Knit Sweater (لابسة بينك) -->
      <path d="M36 73 Q55 68 74 73 Q80 95 72 101 Q55 105 38 101 Q30 95 36 73 Z" fill="url(#chibi-aseel-sweater)" />
      <!-- Cute soft cream-pink ribbed collar -->
      <ellipse cx="55" cy="72" rx="13" ry="5.5" fill="url(#chibi-aseel-pink-cuff)" />
      <!-- Golden tiny starlight heart brooch on pink sweater -->
      <path d="M47 79 A2 2 0 0 1 50 81 A2 2 0 0 1 53 79 Q53 82 50 84 Q47 82 47 79 Z" fill="#dfba53" filter="drop-shadow(0 0 2px rgba(223, 186, 83, 0.7))" />

      <!-- Chibi Arms with Regular Neat Long Pink Sleeves (بكم عادي لطيف) -->
      ${pose === "holdingHands" ? `
        <!-- Left arm reaching out gently to hold Anea's hand -->
        <path d="M38 77 Q26 85 16 91" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="24" cy="85" rx="4" ry="4.5" fill="url(#chibi-aseel-pink-cuff)" /> <!-- cute cuff -->
        <circle cx="15" cy="92" r="4" fill="url(#chibi-aseel-skin)" />

        <!-- Right arm resting cutely -->
        <path d="M72 77 Q80 87 75 94" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="75" cy="95" r="3.5" fill="url(#chibi-aseel-skin)" />
      ` : `
        <!-- Natural regular pink sleeves resting cutely at sides -->
        <path d="M37 77 Q29 87 36 95" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="34" cy="92" rx="4.5" ry="3.5" fill="url(#chibi-aseel-pink-cuff)" />
        <circle cx="36" cy="96" r="3.5" fill="url(#chibi-aseel-skin)" />

        <path d="M73 77 Q81 87 74 95" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="76" cy="92" rx="4.5" ry="3.5" fill="url(#chibi-aseel-pink-cuff)" />
        <circle cx="74" cy="96" r="3.5" fill="url(#chibi-aseel-skin)" />
      `}

      <!-- Chibi Chubby Head -->
      <ellipse cx="55" cy="47" rx="27.5" ry="24" fill="url(#chibi-aseel-skin)" />

      <!-- Adorable Rosy Blushing Cheeks with subtle chibi sparkle dots -->
      <ellipse cx="36" cy="53" rx="6" ry="4" fill="#ff769c" opacity="0.55" />
      <ellipse cx="74" cy="53" rx="6" ry="4" fill="#ff769c" opacity="0.55" />
      <circle cx="35" cy="52" r="0.8" fill="#ffffff" opacity="0.8" />
      <circle cx="75" cy="52" r="0.8" fill="#ffffff" opacity="0.8" />

      <!-- Big Sparkling Chibi Anime Eyes (Looking softly towards Anea) -->
      <!-- Left Eye -->
      <g class="chibi-eye left-eye">
        <ellipse cx="42" cy="45" rx="7" ry="8.5" fill="url(#chibi-eye-aseel)" />
        <!-- Main sparkly catchlight -->
        <circle cx="40" cy="42" r="3.2" fill="#ffffff" />
        <!-- Bottom secondary cute sparkle -->
        <circle cx="45" cy="48.5" r="1.6" fill="#ffffff" />
        <circle cx="41" cy="50" r="0.9" fill="#fedde6" />
        <!-- Soft cute eyelash curve -->
        <path d="M34 41 Q42 35 49 40" stroke="#16111a" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>

      <!-- Right Eye -->
      <g class="chibi-eye right-eye">
        <ellipse cx="68" cy="45" rx="7" ry="8.5" fill="url(#chibi-eye-aseel)" />
        <!-- Main sparkly catchlight -->
        <circle cx="66" cy="42" r="3.2" fill="#ffffff" />
        <!-- Bottom secondary cute sparkle -->
        <circle cx="71" cy="48.5" r="1.6" fill="#ffffff" />
        <circle cx="67" cy="50" r="0.9" fill="#fedde6" />
        <!-- Soft cute eyelash curve -->
        <path d="M61 40 Q68 35 76 41" stroke="#16111a" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>

      <!-- Sweet Gentle Eyebrows -->
      <path d="M36 34 Q41 32 46 34" stroke="#2c2230" stroke-width="1.4" stroke-linecap="round" fill="none" />
      <path d="M64 34 Q69 32 74 34" stroke="#2c2230" stroke-width="1.4" stroke-linecap="round" fill="none" />

      <!-- Adorable Sweet Chibi Smile -->
      <path d="M52 53 Q55 56.5 58 53" stroke="#5a2233" stroke-width="1.6" stroke-linecap="round" fill="none" />

      <!-- Soft Silken Anime Bangs with Side Sweep -->
      <path d="M27 34 Q39 21 55 23 Q71 21 83 34 Q75 26 66 24 Q53 24 41 28 Q33 32 27 34 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M31 36 Q45 26 56 33 Q44 31 35 41 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M56 33 Q66 27 77 37 Q67 31 58 34 Z" fill="url(#chibi-aseel-hair)" />

      <!-- Tiny Golden Crescent Clip in Aseel's Hair (Matching Anea's star clip!) -->
      <g class="crescent-clip" transform="translate(36, 21) scale(0.9)">
        <path d="M8 2 A6 6 0 1 0 8 12 A4.5 4.5 0 1 1 8 2 Z" fill="#dfba53" filter="drop-shadow(0 0 3px rgba(223, 186, 83, 0.9))" />
      </g>
    </svg>
    `;
  },

  /**
   * Generates an irresistible, heartwarming Chibi duo composition:
   * Anea & Aseel sitting side-by-side or holding hands cutely beneath the stars
   * with a sweet little glowing heart floating gently above their joined hands.
   */
  getTogetherSceneSVG(variant = "sittingUnderStars", size = 260) {
    const isHolding = variant === "holdingHands";

    return `
    <div class="together-duo-container chibi-duo ${variant}" style="display: flex; align-items: flex-end; justify-content: center; position: relative;">
      <!-- Glowing Floating Mini Heart -->
      <div class="chibi-duo-heart" style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 1.3rem; color: #dfba53; filter: drop-shadow(0 0 8px rgba(223, 186, 83, 0.7)); animation: pulseGlow 2s infinite;">
        ♡
      </div>

      <div class="char-wrapper anea-wrapper" style="margin-right: -12px; z-index: 2;">
        ${this.getAneaSVG(isHolding ? "holdingHands" : "sitting", size * 0.52)}
      </div>
      <div class="char-wrapper aseel-wrapper" style="margin-left: -12px; z-index: 1;">
        ${this.getAseelSVG(isHolding ? "holdingHands" : "sitting", size * 0.52)}
      </div>
    </div>
    `;
  }
};


/* === Source: js/stars.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Dynamic Celestial Starfield & Particle Engine
 */

class Starfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.dust = [];
    this.shootingStars = [];
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.isRunning = true;
    this.reducedMotion = false;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    window.addEventListener("mousemove", (e) => {
      this.mouse.targetX = (e.clientX - this.width / 2) * 0.05;
      this.mouse.targetY = (e.clientY - this.height / 2) * 0.05;
    });

    // Touch support for mobile parallax
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        this.mouse.targetX = (e.touches[0].clientX - this.width / 2) * 0.03;
        this.mouse.targetY = (e.touches[0].clientY - this.height / 2) * 0.03;
      }
    }, { passive: true });

    this.createStars();
    this.createDust();
    this.animate();

    // Occasional shooting star
    setInterval(() => {
      if (Math.random() > 0.4 && this.shootingStars.length < 2 && !this.reducedMotion) {
        this.addShootingStar();
      }
    }, 4500);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
    this.createStars();
    this.createDust();
  }

  createStars() {
    const count = Math.floor((this.width * this.height) / 3800); // Responsive density
    this.stars = [];

    // Palette: ivory, soft gold, dusty blue, pure warm white
    const colors = ["#faf8f2", "#e5c158", "#93ab9c", "#829ab1", "#ffffff"];

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth: Math.random() * 0.8 + 0.2
      });
    }
  }

  createDust() {
    const count = Math.floor(this.width / 35);
    this.dust = [];
    for (let i = 0; i < count; i++) {
      this.dust.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: "#dfba53"
      });
    }
  }

  addShootingStar() {
    this.shootingStars.push({
      x: Math.random() * this.width * 0.8,
      y: Math.random() * (this.height * 0.4),
      length: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 6,
      angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
      opacity: 1,
      life: 0,
      maxLife: 40
    });
  }

  animate() {
    if (!this.isRunning) return;

    // Smooth parallax lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw subtle nebula clouds
    const grad = this.ctx.createRadialGradient(
      this.width * 0.7 + this.mouse.x * 0.2,
      this.height * 0.3 + this.mouse.y * 0.2,
      10,
      this.width * 0.7,
      this.height * 0.3,
      this.width * 0.6
    );
    grad.addColorStop(0, "rgba(22, 34, 56, 0.45)");
    grad.addColorStop(0.5, "rgba(16, 23, 42, 0.2)");
    grad.addColorStop(1, "rgba(8, 12, 24, 0)");
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 2. Draw Stars
    for (let star of this.stars) {
      if (!this.reducedMotion) {
        star.twinklePhase += star.twinkleSpeed;
      }
      const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));
      const px = star.x + this.mouse.x * star.depth;
      const py = star.y + this.mouse.y * star.depth;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
      this.ctx.fillStyle = star.color;
      this.ctx.beginPath();
      this.ctx.arc(px, py, star.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Delicate halo on brighter stars
      if (star.size > 1.4) {
        this.ctx.globalAlpha = currentAlpha * 0.3;
        this.ctx.beginPath();
        this.ctx.arc(px, py, star.size * 2.5, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    // 3. Draw Floating Stardust
    for (let p of this.dust) {
      if (!this.reducedMotion) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 4. Draw Shooting Stars
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.life++;
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity = 1 - (s.life / s.maxLife);

      if (s.opacity <= 0) {
        this.shootingStars.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.strokeStyle = `rgba(229, 193, 88, ${s.opacity})`;
      this.ctx.lineWidth = 1.6;
      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      this.ctx.stroke();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}


/* === Source: js/scenes/intro.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Scene: Cinematic Opening Experience
 */





function renderIntroScene(container, onComplete) {
  container.innerHTML = `
    <div class="intro-screen">
      <div class="intro-stars-layer"></div>
      
      <div class="intro-planet-wrapper">
        <div class="intro-glow"></div>
        <div class="intro-planet">
          <div class="planet-crater c1"></div>
          <div class="planet-crater c2"></div>
          <div class="planet-crater c3"></div>
          <div class="planet-rose">
            <svg width="22" height="28" viewBox="0 0 24 30" fill="none">
              <!-- Delicate Little Prince rose stem & petals -->
              <path d="M12 12 Q10 20 12 28" stroke="#748f7e" stroke-width="2" stroke-linecap="round"/>
              <path d="M11 20 Q6 17 8 13 Q12 16 11 20 Z" fill="#748f7e"/>
              <ellipse cx="12" cy="10" rx="6" ry="7" fill="#dfba53"/>
              <circle cx="12" cy="9" r="4" fill="#faf8f2" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="intro-content">
        <div class="intro-text-step step-1" id="introStep1">
          <p class="intro-quote">"Somewhere in this enormous universe, there is a little world that exists just for you."</p>
        </div>

        <div class="intro-text-step step-2" id="introStep2" style="display: none;">
          <h1 class="intro-birthday-title">Happy 24th Birthday, ${CONFIG.girlfriendName}.</h1>
        </div>

        <div class="intro-text-step step-3" id="introStep3" style="display: none;">
          <p class="intro-dedication">Made with love, by your ${CONFIG.girlfriendCallName}. ♡</p>
          <p class="intro-arabic-sub">عالم صغير صُنع بكل الحب لأجلك يا أنيتي</p>
          
          <button class="celestial-btn intro-enter-btn" id="enterUniverseBtn">
            <span class="btn-star">✧</span>
            <span>Enter Your Little Universe</span>
            <span class="btn-star">✧</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const step1 = container.querySelector("#introStep1");
  const step2 = container.querySelector("#introStep2");
  const step3 = container.querySelector("#introStep3");
  const enterBtn = container.querySelector("#enterUniverseBtn");

  // Step 1 appears gently
  setTimeout(() => {
    step1.classList.add("visible");
  }, 600);

  // Step 2 appears after 3.8s
  setTimeout(() => {
    step1.classList.add("fade-out");
    setTimeout(() => {
      step1.style.display = "none";
      step2.style.display = "block";
      setTimeout(() => step2.classList.add("visible"), 50);
    }, 800);
  }, 4200);

  // Step 3 appears after 8s
  setTimeout(() => {
    step2.classList.add("fade-out");
    setTimeout(() => {
      step2.style.display = "none";
      step3.style.display = "block";
      setTimeout(() => step3.classList.add("visible"), 50);
    }, 800);
  }, 8200);

  enterBtn.addEventListener("click", () => {
    audioManager.init();
    audioManager.startAmbient();
    audioManager.playStarlightChord();

    const screen = container.querySelector(".intro-screen");
    screen.classList.add("zoom-into-universe");

    setTimeout(() => {
      stateManager.state.introSeen = true;
      stateManager.save();
      onComplete();
    }, 1400);
  });
}


/* === Source: js/scenes/world.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Scene: The Interactive Celestial World Map
 * Symmetrical Celestial Orbit Layout (As requested by Aseel)
 * with Sequential Station Unlocking (01 -> 02 -> 03 -> 04 -> 05 -> 06)
 */






function renderWorldScene(container, navigateTo) {
  const isCastleUnlocked = stateManager.state.castleUnlocked;
  const starsCollected = stateManager.state.starsCollected;
  const maxStars = stateManager.state.maxStars;
  const memoriesCount = stateManager.state.memoriesVisited.length;
  const lettersCount = stateManager.state.lettersOpened.length;
  const carnivalDone = Object.values(stateManager.state.minigames).filter(Boolean).length;

  const STATIONS_INFO = {
    home: { titleAr: "بيتنا الصغير", prevName: null },
    garden: { titleAr: "حديقة الذكريات", prevName: "بيتنا الصغير" },
    mailbox: { titleAr: "صندوق رسائل الحب", prevName: "حديقة الذكريات" },
    carnival: { titleAr: "كرنفال النجوم والألعاب", prevName: "صندوق رسائل الحب" },
    lake: { titleAr: "بحيرة النجوم", prevName: "كرنفال النجوم" },
    castle: { titleAr: "قصر الـ 24 عاماً", prevName: "بحيرة النجوم" }
  };

  const isHomeUnlocked = stateManager.isDestinationUnlocked("home");
  const isGardenUnlocked = stateManager.isDestinationUnlocked("garden");
  const isMailboxUnlocked = stateManager.isDestinationUnlocked("mailbox");
  const isCarnivalUnlocked = stateManager.isDestinationUnlocked("carnival");
  const isLakeUnlocked = stateManager.isDestinationUnlocked("lake");
  const isCastleOpen = stateManager.isDestinationUnlocked("castle");

  container.innerHTML = `
    <div class="world-scene">
      <!-- Top Clean Glass Navigation Bar -->
      <header class="universe-header">
        <div class="universe-title-badge">
          <span class="sparkle-icon">✧</span>
          <span class="universe-name">ANEA'S LITTLE UNIVERSE</span>
          <span class="heart-symbol">♡</span>
        </div>

        <div class="universe-stats">
          <div class="stat-pill star-stat" id="starCounter" title="Birthday Stars collected">
            <span class="star-icon">⭐</span>
            <span class="star-count">${starsCollected}</span>
            <span class="star-divider">/</span>
            <span class="star-max">${maxStars}</span>
          </div>

          <div class="stat-pill castle-stat ${isCastleOpen ? 'unlocked' : 'locked'}" title="${isCastleOpen ? 'Birthday Castle Unlocked!' : 'Explore memories & letters to unlock'}">
            <span class="castle-icon">${isCastleOpen ? '👑' : '🔒'}</span>
            <span class="castle-text">${isCastleOpen ? 'Castle Open' : 'Castle Sealed'}</span>
          </div>

          <!-- Sound Controls -->
          <div class="sound-controls">
            <button class="sound-toggle-btn" id="soundToggleBtn" aria-label="Toggle Sound" title="Toggle Sound">
              ${audioManager.isMuted ? '🔇' : '🎵'}
            </button>
            <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.05" value="${audioManager.volume}" title="Volume" />
          </div>

          <!-- Menu / Info -->
          <button class="settings-btn" id="menuToggleBtn" title="Universe Menu & Progress">
            ☰
          </button>
        </div>
      </header>

      <!-- Center Title Header -->
      <div class="universe-hero-header">
        <h2 class="universe-hero-title">A Journey Written Across the Stars</h2>
        <p class="universe-hero-ar" dir="rtl">ست محطات صُنعت بكل حب.. استكشفي عوالمنا بالترتيب خطوة بخطوة ♡</p>
      </div>

      <!-- Main Symmetrical Celestial Orbit Canvas / Layout -->
      <main class="celestial-orbit-stage">
        <!-- Background Concentric Orbital Rings & Starlight Lines -->
        <svg class="celestial-orbit-lines" viewBox="0 0 900 520" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="rgba(223, 186, 83, 0.45)" />
              <stop offset="50%" stop-color="rgba(116, 143, 126, 0.3)" />
              <stop offset="100%" stop-color="rgba(98, 125, 152, 0.45)" />
            </linearGradient>
          </defs>
          <!-- Outer Elliptical Orbit Track -->
          <ellipse cx="450" cy="280" rx="380" ry="170" fill="none" stroke="url(#orbit-grad)" stroke-width="1.5" stroke-dasharray="6 6" />
          <!-- Inner Orbit Track -->
          <ellipse cx="450" cy="280" rx="240" ry="105" fill="none" stroke="rgba(223, 186, 83, 0.25)" stroke-width="1.2" stroke-dasharray="4 4" />
          <!-- Constellation Rays between Castle and Planets -->
          <line x1="450" y1="110" x2="160" y2="240" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="740" y2="240" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="270" y2="400" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="630" y2="400" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="450" y2="440" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
        </svg>

        <!-- Symmetrical Celestial Grid Container -->
        <div class="orbit-nodes-container">
          <!-- Top Center: The Birthday Castle (Grand Peak) -->
          <div class="destination-node castle-orbit-node ${isCastleOpen ? 'unlocked' : 'locked'}" data-dest="castle" style="top: 18%; left: 50%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual castle-visual">
              <span class="node-emoji">🏰</span>
              ${!isCastleOpen ? '<span class="lock-pip">🔒</span>' : '<span class="crown-pip">👑</span>'}
            </div>
            <div class="node-label">
              <span class="node-title">The Birthday Castle</span>
              <span class="node-arabic">قصر عيد الميلاد الـ 24</span>
              <span class="node-badge ${isCastleOpen ? 'badge-open' : 'badge-locked'}">
                ${isCastleOpen ? 'Open — Tap to Celebrate' : 'Explore to Unlock'}
              </span>
            </div>
          </div>

          <!-- Destination 1: Our Little Home (Left Upper Orbit) -->
          <div class="destination-node planet-orbit-node ${isHomeUnlocked ? 'unlocked' : 'locked'}" data-dest="home" style="top: 48%; left: 18%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual home-visual">
              <span class="node-emoji">🏡</span>
              ${!isHomeUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">Our Little Home</span>
              <span class="node-arabic">بيتنا الصغير</span>
              <span class="node-badge">Cozy Haven</span>
            </div>
          </div>

          <!-- Destination 2: Garden of Memories (Right Upper Orbit) -->
          <div class="destination-node planet-orbit-node ${isGardenUnlocked ? 'unlocked' : 'locked'}" data-dest="garden" style="top: 48%; left: 82%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual garden-visual">
              <span class="node-emoji">🌸</span>
              ${!isGardenUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">Garden of Memories</span>
              <span class="node-arabic">حديقة الذكريات</span>
              <span class="node-badge ${isGardenUnlocked ? '' : 'badge-locked'}">
                ${isGardenUnlocked ? `${memoriesCount}/6 Memories` : '🔒 Locked'}
              </span>
            </div>
          </div>

          <!-- Destination 3: Mailbox of Love (Left Lower Orbit) -->
          <div class="destination-node planet-orbit-node ${isMailboxUnlocked ? 'unlocked' : 'locked'}" data-dest="mailbox" style="top: 78%; left: 28%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual mailbox-visual">
              <span class="node-emoji">💌</span>
              ${!isMailboxUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">Mailbox of Love</span>
              <span class="node-arabic">صندوق رسائل الحب</span>
              <span class="node-badge ${isMailboxUnlocked ? '' : 'badge-locked'}">
                ${isMailboxUnlocked ? `${lettersCount}/6 Letters` : '🔒 Locked'}
              </span>
            </div>
          </div>

          <!-- Destination 4: The Little Carnival (Center Lower Orbit) -->
          <div class="destination-node planet-orbit-node ${isCarnivalUnlocked ? 'unlocked' : 'locked'}" data-dest="carnival" style="top: 84%; left: 50%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual carnival-visual">
              <span class="node-emoji">🎪</span>
              ${!isCarnivalUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">The Little Carnival</span>
              <span class="node-arabic">كرنفال النجوم والألعاب</span>
              <span class="node-badge ${isCarnivalUnlocked ? '' : 'badge-locked'}">
                ${isCarnivalUnlocked ? `${carnivalDone}/3 Games Done` : '🔒 Locked'}
              </span>
            </div>
          </div>

          <!-- Destination 5: The Lake of Stars (Right Lower Orbit) -->
          <div class="destination-node planet-orbit-node ${isLakeUnlocked ? 'unlocked' : 'locked'}" data-dest="lake" style="top: 78%; left: 72%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual lake-visual">
              <span class="node-emoji">🌊</span>
              ${!isLakeUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">The Lake of Stars</span>
              <span class="node-arabic">بحيرة النجوم الهادئة</span>
              <span class="node-badge ${isLakeUnlocked ? '' : 'badge-locked'}">
                ${isLakeUnlocked ? 'Peace & Reflections' : '🔒 Locked'}
              </span>
            </div>
          </div>
        </div>

        <!-- Hidden Secret Star Easter Egg -->
        <div class="secret-star-element" id="secretStarBtn" style="position: absolute; top: 25%; left: 30%; cursor: pointer;" title="A faint mysterious sparkle in the cosmos...">
          <span class="secret-sparkle">✧</span>
        </div>

        <!-- Chibi Duo Sitting Together Cutest Corner (Anea & Cute Pink Aseel) -->
        <div class="chibi-corner-mascot" title="Anea & Aseel sitting beneath the stars">
          <div class="mini-moon-asteroid"></div>
          ${Characters.getTogetherSceneSVG("sitting", 180)}
        </div>
      </main>

      <!-- Modal Dialog Container -->
      <div class="celestial-modal-overlay" id="worldModal" style="display: none;">
        <div class="celestial-modal-card">
          <button class="modal-close-btn" id="modalCloseBtn">✕</button>
          <div class="modal-content-slot" id="modalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // --- Event Listeners ---

  const modal = container.querySelector("#worldModal");
  const modalSlot = container.querySelector("#modalSlot");
  const modalClose = container.querySelector("#modalCloseBtn");

  function showModal(html) {
    modalSlot.innerHTML = html;
    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  const handleNav = (dest) => {
    const isUnlocked = stateManager.isDestinationUnlocked(dest);
    const station = STATIONS_INFO[dest];

    if (!isUnlocked) {
      audioManager.playChime(329.63, 0.6);
      showModal(`
        <div class="locked-station-dialog" style="text-align: center; padding: 10px 14px;">
          <div class="locked-bubble-icon" style="font-size: 2.8rem; margin-bottom: 12px; filter: drop-shadow(0 0 10px rgba(223, 186, 83, 0.5));">🔒</div>
          <h3 class="locked-title-en" style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--warm-ivory); margin-bottom: 2px;">This World is Sleeping</h3>
          <h4 class="locked-title-ar" dir="rtl" style="font-family: var(--font-arabic); font-size: 1.25rem; color: var(--gold-starlight); margin-bottom: 12px;">هذه المحطة مغلقة حالياً ♡</h4>
          <div style="color: var(--gold-starlight); font-size: 0.9rem; letter-spacing: 0.3em; margin-bottom: 14px; opacity: 0.7;">✧ ✦ ✧</div>
          <p class="locked-desc-ar" dir="rtl" style="font-family: var(--font-arabic); font-size: 1.05rem; color: var(--warm-cream); line-height: 1.8; margin-bottom: 24px;">
            عالمنا الصغير يُكتشف خطوة بخطوة بكل حب..<br>
            استكشفي محطة <strong>"${station.prevName}"</strong> أولاً لتفتح لكِ النجوم أبواب محطة <strong>"${station.titleAr}"</strong> بكل دفء ✨
          </p>
          <button class="celestial-btn modal-agree-btn" id="lockedDismissBtn" style="padding: 12px 28px; font-family: var(--font-arabic); font-size: 0.95rem;">
            <span>فهمت، سأكمل الرحلة بالترتيب ♡</span>
          </button>
        </div>
      `);
      const dismissBtn = container.querySelector("#lockedDismissBtn");
      if (dismissBtn) dismissBtn.addEventListener("click", () => modal.style.display = "none");
      return;
    }

    audioManager.playChime(659.25, 0.8);
    navigateTo(dest);
  };

  container.querySelectorAll(".destination-node").forEach(node => {
    node.addEventListener("click", () => handleNav(node.getAttribute("data-dest")));
  });

  // Sound Toggle & Volume Slider
  const soundBtn = container.querySelector("#soundToggleBtn");
  const volumeSlider = container.querySelector("#volumeSlider");
  soundBtn.addEventListener("click", () => {
    const isUnmuted = audioManager.toggleMute();
    soundBtn.textContent = isUnmuted ? "🎵" : "🔇";
    stateManager.state.soundEnabled = isUnmuted;
    stateManager.save();
  });

  volumeSlider.addEventListener("input", (e) => {
    const vol = parseFloat(e.target.value);
    audioManager.setVolume(vol);
    stateManager.state.masterVolume = vol;
    stateManager.save();
  });

  // Secret Star Easter Egg
  const secretStar = container.querySelector("#secretStarBtn");
  secretStar.addEventListener("click", () => {
    stateManager.unlockSecret("secretStar");
    audioManager.playStarlightChord();
    showModal(`
      <div class="easter-egg-card">
        <div class="egg-icon">⭐</div>
        <h3 class="egg-title">A Hidden Starlight Secret</h3>
        <p class="egg-arabic" dir="rtl">${CONFIG.secrets.secretStarArabic}</p>
        <p class="egg-english">"${CONFIG.secrets.secretStar}"</p>
        <div class="egg-reward">+1 Golden Star Collected!</div>
      </div>
    `);
    updateStats();
  });

  // Menu Modal (Progress & Reset)
  const menuBtn = container.querySelector("#menuToggleBtn");
  menuBtn.addEventListener("click", () => {
    const progress = stateManager.getDiscoveryProgress();
    showModal(`
      <div class="menu-modal-card">
        <h3 class="menu-title">ANEA'S LITTLE UNIVERSE ♡</h3>
        <p class="menu-subtitle">Created with love by Aseel for Anea's 24th Birthday</p>
        
        <div class="progress-section">
          <div class="progress-label">
            <span>Overall Discovery</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${progress}%"></div>
          </div>
        </div>

        <div class="menu-list">
          <div class="menu-item">⭐ Stars Collected: <strong>${stateManager.state.starsCollected} / ${stateManager.state.maxStars}</strong></div>
          <div class="menu-item">🌸 Memories Explored: <strong>${stateManager.state.memoriesVisited.length} / 6</strong></div>
          <div class="menu-item">💌 Letters Opened: <strong>${stateManager.state.lettersOpened.length} / 6</strong></div>
          <div class="menu-item">🎪 Mini-Games Completed: <strong>${Object.values(stateManager.state.minigames).filter(Boolean).length} / 3</strong></div>
          <div class="menu-item">🏰 Castle Status: <strong>${isCastleOpen ? 'Unlocked ✨' : 'Explore more to unlock'}</strong></div>
        </div>

        <div class="menu-actions">
          <button class="celestial-btn secondary-btn" id="modalResetBtn">Restart Experience</button>
        </div>
      </div>
    `);

    const resetBtn = container.querySelector("#modalResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Would you like to restart the universe journey from the beginning?")) {
          stateManager.reset();
          location.reload();
        }
      });
    }
  });

  function updateStats() {
    const counter = container.querySelector("#starCounter .star-count");
    if (counter) counter.textContent = stateManager.state.starsCollected;
  }
}


/* === Source: js/scenes/home.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 1: The Little Planet — "Our Little Home"
 * Pure storybook diorama with direct room interactions (Window, Cups with a & a, Bedside Note, Lamp, Bookmark)
 * Removed bottom deck box as requested by Aseel.
 */






function renderHomeScene(container, returnToMap) {
  const homeData = CONFIG.home;

  container.innerHTML = `
    <div class="destination-scene home-scene">
      <!-- Navigation Bar -->
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="homeBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">${homeData.title}</h2>
          <span class="scene-subtitle">${homeData.subtitle}</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Atmospheric Introduction Banner -->
      <div class="home-intro-banner">
        <p class="home-intro-quote">"${homeData.greeting}"</p>
        <p class="home-intro-reveal">${homeData.reveal}</p>
        <span class="home-interact-tip">✨ اضغطي على أي شيء داخل الغرفة لتكتشفي ما يخفيه في قلبي ✨</span>
      </div>

      <!-- Main Neat Cozy Room Stage -->
      <div class="home-stage-wrapper">
        <div class="storybook-room-frame">
          <!-- Room Roof & Ceiling Star Mobile -->
          <div class="room-ceiling-beam">
            <div class="hanging-star-mobile">
              <span class="m-star">✦</span>
              <span class="m-moon">🌙</span>
              <span class="m-star">✧</span>
            </div>
          </div>

          <!-- Arched Starlit Window (Fixed Centered) -->
          <div class="room-arch-window" id="propWindow" title="اضغطي للتأمل في نافذة النجوم">
            <div class="window-sky">
              <div class="crescent-moon"></div>
              <div class="twinkling-star ts1">✦</div>
              <div class="twinkling-star ts2">✧</div>
              <div class="twinkling-star ts3">✦</div>
            </div>
            <div class="window-sill">
              <div class="little-potted-flower">🌱</div>
            </div>
            <div class="prop-badge-floating">🪟 النافذة المطلة على النجوم</div>
          </div>

          <!-- Left Bedside Corner with Lamp & Note -->
          <div class="room-bedside-nook">
            <div class="cozy-lamp-fixture interactive-room-prop" id="propLight" title="اضغطي لتشعري بالنور اللطيف">
              <div class="lamp-warm-shade"></div>
              <div class="lamp-ambient-glow"></div>
              <div class="prop-badge-floating">🕯️ النور اللطيف</div>
            </div>

            <div class="bedside-table interactive-room-prop" id="propBedside" title="اضغطي لقراءة رسالة السرير">
              <div class="folded-letter-sprite">📜</div>
              <div class="prop-badge-floating">💌 رسالة بجانب السرير</div>
            </div>
          </div>

          <!-- Center Cozy Rug with Chibi Duo & Side-by-Side Cups (a & a) -->
          <div class="room-center-rug">
            <div class="woven-rug-oval"></div>

            <!-- Two Cute Chibi Characters Sitting Together -->
            <div class="home-chibi-duo-wrapper">
              ${Characters.getTogetherSceneSVG("holdingHands", 195)}
            </div>

            <!-- Two Warm Mugs Side-by-Side with 'a' and 'a' (Interactive) -->
            <div class="two-cups-tray interactive-room-prop" id="propCups" title="اضغطي لرؤية كوبينا الدافئين معاً">
              <div class="chibi-mug mug-anea" title="Anea's Cup (a)">
                <span class="steam-wisp">~</span>
                <span class="mug-initial">a</span>
              </div>
              <div class="chibi-mug mug-aseel" title="Aseel's Cup (a)">
                <span class="steam-wisp">~</span>
                <span class="mug-initial">a</span>
              </div>
              <div class="prop-badge-floating cups-badge">☕ كوبان دافئان معاً (a & a)</div>
            </div>
          </div>

          <!-- Right Bookshelf Corner with Secret Bookmark -->
          <div class="room-bookshelf-nook">
            <div class="mini-bookshelf">
              <div class="shelf-book b1"></div>
              <div class="shelf-book b2"></div>
              <div class="shelf-book b3"></div>
            </div>
            <div class="secret-bookmark-tag interactive-room-prop" id="propSharedWord" title="كلمتنا الخاصة">
              <span class="bookmark-ribbon">♡</span>
              <span class="word-text">حبوبي</span>
              <div class="prop-badge-floating">✨ دلالي لكِ</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dialogue Modal -->
      <div class="celestial-modal-overlay" id="homeModal" style="display: none;">
        <div class="celestial-modal-card">
          <button class="modal-close-btn" id="homeModalClose">✕</button>
          <div class="modal-content-slot" id="homeModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#homeBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("home");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#homeModal");
  const modalSlot = container.querySelector("#homeModalSlot");
  const modalClose = container.querySelector("#homeModalClose");

  function openDialog(title, arabic, english, starKey) {
    stateManager.markDestinationExplored("home");
    audioManager.playChime(659.25, 0.9);
    if (starKey) {
      stateManager.collectStar(starKey);
    }
    modalSlot.innerHTML = `
      <div class="dialog-card">
        <h3 class="dialog-title">${title}</h3>
        <p class="dialog-arabic" dir="rtl">${arabic}</p>
        <p class="dialog-english">"${english}"</p>
        ${starKey ? '<div class="star-award-banner">⭐ +1 Memory Star Added to Your Universe</div>' : ''}
      </div>
    `;
    modal.style.display = "flex";
    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  const objects = homeData.objects;

  // Handlers for room prop clicks
  container.querySelector("#propWindow").addEventListener("click", () => {
    openDialog(objects.window.title, objects.window.messageArabic, objects.window.messageEnglish, "star_home_window");
  });

  container.querySelector("#propBedside").addEventListener("click", () => {
    audioManager.playPaperSound();
    openDialog(objects.bedsideLetter.title, objects.bedsideLetter.messageArabic, objects.bedsideLetter.messageEnglish, "star_home_bedside");
  });

  container.querySelector("#propCups").addEventListener("click", () => {
    openDialog("Two Warm Cups (a & a)", "كوبان دافئان لـ a و a جنباً إلى جنب.. جلساتنا البسيطة، سوالفنا الطويلة اللي ما نمل منها، وألعابنا وضحكاتنا سوا.. هذه هي اللحظات اللي ما أبدلها بالدنيا كلها.", objects.twoCups.messageEnglish, "star_home_cups");
  });

  container.querySelector("#propLight").addEventListener("click", () => {
    openDialog(objects.littleLight.title, objects.littleLight.messageArabic, objects.littleLight.messageEnglish, "star_home_light");
  });

  container.querySelector("#propSharedWord").addEventListener("click", () => {
    openDialog(objects.sharedWord.title, objects.sharedWord.secretMessage, "A tender word from Aseel's heart to yours.", "star_home_word");
  });
}


/* === Source: js/scenes/garden.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 2: The Garden of Memories
 * Interactive Storybook Garden with Chibi Anea walking to each glowing memory flower!
 */






function renderGardenScene(container, returnToMap) {
  const memories = CONFIG.memories;

  // Garden flower coordinates (% based for responsiveness)
  const FLOWER_COORDS = [
    { x: 16, y: 22 }, // Memory 1: First Message & Voice
    { x: 50, y: 15 }, // Memory 2: Slowly Falling
    { x: 84, y: 22 }, // Memory 3: Our Little Routine
    { x: 20, y: 72 }, // Memory 4: March 31 (Golden Milestone)
    { x: 50, y: 80 }, // Memory 5: The Voice Call
    { x: 80, y: 72 }  // Memory 6: The Way You Love Me
  ];

  container.innerHTML = `
    <div class="destination-scene garden-scene">
      <!-- Navigation Bar -->
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="gardenBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Garden of Memories</h2>
          <span class="scene-subtitle">حديقة الذكريات واللحظات الخالدة</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Atmospheric Introduction Banner -->
      <div class="garden-header-text">
        <p class="garden-poetic-quote">"Each flower here bloomed from a moment that made me fall a little more in love with you."</p>
        <div class="garden-instruction-pill">
          <span>🌸 اضغطي على أي زهرة لتمشي نحوها وتفتحي ذكراها الجميلة ♡</span>
        </div>
      </div>

      <!-- INTERACTIVE STORYBOOK CELESTIAL GARDEN STAGE -->
      <div class="interactive-garden-stage" id="gardenStage">
        <!-- Celestial Night Garden Sky & Glow -->
        <div class="garden-sky-ambience"></div>

        <!-- Winding Stepping Stone Pathway (SVG) -->
        <svg class="garden-pathway-svg" viewBox="0 0 900 500" preserveAspectRatio="none">
          <path d="M150 140 Q 300 80 450 120 T 750 140 Q 820 280 720 380 Q 550 440 450 410 T 180 380 Q 90 260 150 140 Z" 
                fill="none" stroke="rgba(223, 186, 83, 0.25)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M150 140 Q 300 80 450 120 T 750 140 Q 820 280 720 380 Q 550 440 450 410 T 180 380 Q 90 260 150 140 Z" 
                fill="none" stroke="rgba(116, 143, 126, 0.35)" stroke-width="18" stroke-dasharray="10 16" stroke-linecap="round" />
        </svg>

        <!-- Garden Grass & Celestial Flower Tufts -->
        <div class="garden-flora-tufts">
          <span class="grass-tuft t1">🌿</span>
          <span class="grass-tuft t2">✨</span>
          <span class="grass-tuft t3">🍃</span>
          <span class="grass-tuft t4">🌱</span>
          <span class="grass-tuft t5">✨</span>
          <span class="grass-tuft t6">🌿</span>
        </div>

        <!-- 6 Interactive Glowing Memory Flowers -->
        <div class="garden-flowers-layer">
          ${memories.map((mem, i) => {
            const isVisited = stateManager.state.memoriesVisited.includes(mem.id);
            const coord = FLOWER_COORDS[i];
            const isGolden = mem.isGolden;
            const isHighlight = mem.isHighlight;

            return `
              <div class="garden-flower-spot ${isVisited ? 'visited' : 'unvisited'} ${isGolden ? 'golden-flower-spot' : ''} ${isHighlight ? 'highlight-flower-spot' : ''}" 
                   id="flowerSpot_${mem.id}"
                   data-id="${mem.id}" 
                   data-idx="${i}"
                   style="left: ${coord.x}%; top: ${coord.y}%;"
                   title="اضغطي لتمشي أنيتا نحو: ${mem.titleArabic}">
                
                <div class="flower-aura-glow"></div>
                
                <div class="flower-bloom-visual">
                  ${isGolden ? '🌼' :
                    isHighlight ? '🎙️' :
                    mem.icon === 'blooming-rose' ? '🌹' :
                    mem.icon === 'message' ? '💬' :
                    mem.icon === 'orbit' ? '✨' : '🎮'}
                </div>

                <!-- Flower Label Tag -->
                <div class="flower-label-tag">
                  <span class="flower-num">${mem.number}</span>
                  <span class="flower-title" dir="rtl">${mem.titleArabic}</span>
                  ${isVisited ? '<span class="flower-check">✓</span>' : '<span class="flower-spark">✦</span>'}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- CHIBI ANEA WALKING CHARACTER (Initially Center-Stage) -->
        <div class="garden-anea-avatar" id="gardenAnea" style="left: 50%; top: 48%;">
          <div class="anea-starlight-pedestal"></div>
          <div class="anea-sprite-box">
            ${Characters.getAneaSVG("standing", 115)}
          </div>
          <div class="anea-bubble-hint" id="aneaBubble">
            <span>✨ ♡</span>
          </div>
        </div>
      </div>

      <!-- Memory Detail Modal -->
      <div class="celestial-modal-overlay" id="gardenModal" style="display: none;">
        <div class="celestial-modal-card memory-detail-card">
          <button class="modal-close-btn" id="gardenModalClose">✕</button>
          <div class="modal-content-slot" id="gardenModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation: Back Button
  container.querySelector("#gardenBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("garden");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#gardenModal");
  const modalSlot = container.querySelector("#gardenModalSlot");
  const modalClose = container.querySelector("#gardenModalClose");
  const aneaAvatar = container.querySelector("#gardenAnea");
  const aneaBubble = container.querySelector("#aneaBubble");

  let isWalking = false;

  // Function to walk Anea to a flower and open the memory
  function walkToFlowerAndOpen(mem, flowerIdx) {
    if (isWalking) return;
    isWalking = true;

    const targetCoord = FLOWER_COORDS[flowerIdx];
    const currentLeft = parseFloat(aneaAvatar.style.left || "50");

    // Face direction: left or right
    const facingRight = targetCoord.x >= currentLeft;
    const spriteBox = aneaAvatar.querySelector(".anea-sprite-box");
    if (spriteBox) {
      spriteBox.style.transform = facingRight ? "scaleX(1)" : "scaleX(-1)";
    }

    // Play footstep/starlight chimes
    audioManager.playChime(523.25, 0.4);

    // Add walking motion animation
    aneaAvatar.classList.add("walking");
    if (aneaBubble) aneaBubble.innerHTML = `<span>ذاهبة إلى: ${mem.titleArabic} ✨</span>`;

    // Move to target position smoothly (offset slightly so she stands beside the flower)
    const offsetX = targetCoord.x > 50 ? targetCoord.x - 7 : targetCoord.x + 7;
    const offsetY = targetCoord.y + 2;

    aneaAvatar.style.left = `${offsetX}%`;
    aneaAvatar.style.top = `${offsetY}%`;

    // After walk duration (700ms), stop walking and open memory
    setTimeout(() => {
      aneaAvatar.classList.remove("walking");
      isWalking = false;
      if (aneaBubble) aneaBubble.innerHTML = `<span>أنيتي ♡</span>`;

      // Sparkle chime on flower
      audioManager.playChime(mem.isGolden ? 880 : 659.25, 1.2);

      // Open memory modal
      openMemory(mem);
    }, 750);
  }

  function openMemory(mem) {
    stateManager.visitMemory(mem.id);
    stateManager.collectStar(`star_${mem.id}`);
    stateManager.markDestinationExplored("garden");

    // Update UI flower visited state
    const spot = container.querySelector(`#flowerSpot_${mem.id}`);
    if (spot) {
      spot.classList.remove("unvisited");
      spot.classList.add("visited");
      const check = spot.querySelector(".flower-spark");
      if (check) check.outerHTML = '<span class="flower-check">✓</span>';
    }

    // Update directory button state
    const dirBtn = container.querySelector(`.dir-memory-pill[data-id="${mem.id}"]`);
    if (dirBtn) dirBtn.classList.add("visited");

    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;

    const isVoiceCall = mem.id === "memory-5";

    modalSlot.innerHTML = `
      <div class="memory-opened-content ${mem.isGolden ? 'golden-theme' : ''}">
        <div class="opened-memory-header">
          <span class="opened-badge">${mem.number} — ${mem.isGolden ? 'Golden Milestone' : 'Memory'}</span>
          <h2 class="opened-title-english">${mem.titleEnglish}</h2>
          <h3 class="opened-title-arabic" dir="rtl">${mem.titleArabic}</h3>
        </div>

        ${isVoiceCall ? `
          <div class="voice-call-scene-interactive">
            <div class="soundwave-container">
              <span class="bar b1"></span>
              <span class="bar b2"></span>
              <span class="bar b3"></span>
              <span class="bar b4"></span>
              <span class="bar b5"></span>
              <span class="bar b4"></span>
              <span class="bar b3"></span>
              <span class="bar b2"></span>
              <span class="bar b1"></span>
            </div>
            <div class="voice-call-tagline">"تلك الليلة في المكالمة الصوتية.. حين اعترفنا ♡"</div>
          </div>
        ` : ''}

        <div class="opened-memory-body">
          <div class="opened-arabic-section" dir="rtl">
            <p class="opened-narrative-arabic">${mem.narrativeArabic}</p>
          </div>
          <div class="opened-english-section">
            <p class="opened-narrative-english">"${mem.narrativeEnglish}"</p>
          </div>
        </div>

        <div class="opened-memory-footer">
          <span class="star-blessing">⭐ تم حفظ هذه الذكرى في عالم أنيا إلى الأبد</span>
        </div>
      </div>
    `;

    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Attach click listener to each flower spot on the garden stage
  container.querySelectorAll(".garden-flower-spot").forEach(spot => {
    spot.addEventListener("click", () => {
      const id = spot.getAttribute("data-id");
      const idx = parseInt(spot.getAttribute("data-idx"), 10);
      const mem = memories.find(m => m.id === id);
      if (mem) {
        walkToFlowerAndOpen(mem, idx);
      }
    });
  });
}


/* === Source: js/scenes/mailbox.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 3: The Mailbox of Love (Voice Notes & Letters)
 */





function renderMailboxScene(container, returnToMap) {
  const letters = CONFIG.letters;
  let activeAudio = null;
  let animFrameId = null;

  container.innerHTML = `
    <div class="destination-scene mailbox-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="mailboxBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Mailbox of Love</h2>
          <span class="scene-subtitle">صندوق رسايل وفويسات الحب من أسيل ♡</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <div class="mailbox-header-banner">
        <div class="mailbox-floating-icon">
          <span class="box-icon">📬</span>
          <span class="box-sparkle">✧</span>
        </div>
        <p class="mailbox-poetic-quote">"Voice notes & letters recorded in the quiet hours of the night, whispered just for your heart."</p>
      </div>

      <!-- Letters & Voice Notes Grid -->
      <div class="letters-grid">
        ${letters.map((letter, idx) => {
          const isOpened = stateManager.state.lettersOpened.includes(letter.id);
          return `
            <div class="letter-envelope-item ${isOpened ? 'opened' : 'unopened'}" data-id="${letter.id}">
              <div class="envelope-outer">
                <div class="wax-seal">
                  <span>${isOpened ? '🎙️' : '✉️'}</span>
                </div>
                <div class="envelope-body">
                  <div class="envelope-top-meta">
                    <span class="envelope-number">Note 0${idx + 1}</span>
                    <span class="voice-badge">🎙️ فويس صوتي</span>
                  </div>
                  <h3 class="envelope-title-en">${letter.titleEnglish}</h3>
                  <h4 class="envelope-title-ar" dir="rtl">${letter.titleArabic}</h4>
                  <p class="envelope-preview">${letter.preview}</p>
                  <div class="envelope-action-row">
                    <span class="envelope-duration">⏱️ ${letter.duration || '0:45'}</span>
                    <span class="envelope-status">${isOpened ? 'Listen Again ♡' : 'Play Voice Note ✧'}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Voice Note Reader Modal -->
      <div class="celestial-modal-overlay" id="letterModal" style="display: none;">
        <div class="celestial-modal-card letter-paper-modal">
          <button class="modal-close-btn" id="letterModalClose">✕</button>
          <div class="modal-content-slot" id="letterModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Stop any active audio and animation
  function cleanupAudio() {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  // Navigation
  container.querySelector("#mailboxBackBtn").addEventListener("click", () => {
    cleanupAudio();
    stateManager.markDestinationExplored("mailbox");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#letterModal");
  const modalSlot = container.querySelector("#letterModalSlot");
  const modalClose = container.querySelector("#letterModalClose");

  function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function openLetter(letter) {
    cleanupAudio();
    audioManager.playPaperSound();
    audioManager.playChime(784, 0.8);
    stateManager.openLetter(letter.id);
    stateManager.collectStar(`star_${letter.id}`);
    stateManager.markDestinationExplored("mailbox");

    // Update envelope visual
    const el = container.querySelector(`[data-id="${letter.id}"]`);
    if (el) {
      el.classList.remove("unopened");
      el.classList.add("opened");
      const status = el.querySelector(".envelope-status");
      if (status) status.textContent = "Listen Again ♡";
      const seal = el.querySelector(".wax-seal span");
      if (seal) seal.textContent = "🎙️";
    }

    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;

    // Waveform bars count
    const numBars = 22;
    const waveBarsHtml = Array.from({ length: numBars })
      .map((_, i) => `<span class="wave-bar" style="--bar-i: ${i}; height: ${12 + Math.sin(i * 0.5) * 14}px;"></span>`)
      .join("");

    modalSlot.innerHTML = `
      <div class="parchment-letter-wrapper">
        <div class="parchment-header">
          <span class="parchment-stamp">ANEA'S VOICE MAILBOX ♡</span>
          <h2 class="parchment-title-en">${letter.titleEnglish}</h2>
          <h3 class="parchment-title-ar" dir="rtl">${letter.titleArabic}</h3>
        </div>

        <!-- Voice Note Player Card -->
        <div class="voice-player-card">
          <div class="voice-player-top">
            <button class="voice-play-toggle-btn" id="voicePlayBtn" title="Play Voice Note">
              <span class="voice-play-icon">▶</span>
            </button>
            <div class="voice-player-info">
              <div class="voice-label-row">
                <span class="voice-author-tag">🎙️ تسجيل صوتي من أسيل</span>
                <span class="voice-time-display" id="voiceTimeDisplay">00:00 / ${letter.duration || '0:45'}</span>
              </div>
              <div class="voice-waveform-container" id="waveformWrapper">
                ${waveBarsHtml}
              </div>
              <div class="voice-progress-track" id="voiceProgressTrack">
                <div class="voice-progress-fill" id="voiceProgressFill"></div>
              </div>
            </div>
          </div>
          <div class="voice-note-hint" id="voiceNoteHint">
            <span>✨ استمعي إلى فويس أسيل الصوتي الحنون ♡</span>
          </div>
          <audio id="realVoiceAudio" preload="auto" playsinline webkit-playsinline src="${letter.audioSrc || ''}">
            <source src="${letter.audioSrc || ''}" type="audio/mp4">
            <source src="${letter.audioSrcMp3 || ''}" type="audio/mpeg">
          </audio>
        </div>

        <div class="parchment-footer">
          <div class="parchment-sign">${letter.date} ♡</div>
          <div class="parchment-star">⭐ صوت محفوظ في مجرتنا للأبد</div>
        </div>
      </div>
    `;

    modal.style.display = "flex";

    // Setup Audio Player Logic
    const audioEl = modalSlot.querySelector("#realVoiceAudio");
    const playBtn = modalSlot.querySelector("#voicePlayBtn");
    const playIcon = playBtn.querySelector(".voice-play-icon");
    const timeDisplay = modalSlot.querySelector("#voiceTimeDisplay");
    const progressFill = modalSlot.querySelector("#voiceProgressFill");
    const progressTrack = modalSlot.querySelector("#voiceProgressTrack");
    const waveformWrapper = modalSlot.querySelector("#waveformWrapper");
    const waveBars = modalSlot.querySelectorAll(".wave-bar");
    const hintEl = modalSlot.querySelector("#voiceNoteHint");

    let isPlaying = false;
    let isSynthFallback = false;
    let synthTimer = null;
    let simulatedCurrent = 0;
    const durationParts = (letter.duration || "0:45").split(":");
    const simulatedDuration = parseInt(durationParts[0], 10) * 60 + parseInt(durationParts[1], 10);

    activeAudio = audioEl;

    function updateWaveBars(active) {
      if (active) {
        waveformWrapper.classList.add("playing");
      } else {
        waveformWrapper.classList.remove("playing");
      }
    }

    function togglePlay() {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }

    function playAudio() {
      if (isSynthFallback) {
        startSimulatedPlayback();
        return;
      }

      // Ensure audio context / element is resumed on user gesture
      const promise = audioEl.play();
      if (promise !== undefined) {
        promise.then(() => {
          isPlaying = true;
          isSynthFallback = false;
          playIcon.textContent = "⏸";
          playBtn.classList.add("playing");
          updateWaveBars(true);
          hintEl.innerHTML = `<span>✨ صوت أسيل الحقيقي يملأ المكان دفئاً وحناناً ♡</span>`;
        }).catch(err => {
          console.warn("Primary play attempt failed, trying fallback source:", err);
          // Try loading direct m4a source for iOS
          try {
            audioEl.src = letter.audioSrc || "";
            audioEl.load();
            const retryPromise = audioEl.play();
            if (retryPromise !== undefined) {
              retryPromise.then(() => {
                isPlaying = true;
                isSynthFallback = false;
                playIcon.textContent = "⏸";
                playBtn.classList.add("playing");
                updateWaveBars(true);
                hintEl.innerHTML = `<span>✨ صوت أسيل الحقيقي يملأ المكان دفئاً وحناناً ♡</span>`;
              }).catch(err2 => {
                console.warn("Audio playback not supported, falling back to gentle chime:", err2);
                isSynthFallback = true;
                hintEl.innerHTML = `<span>🎵 نغمة دافئة تعزف الآن (تعذر تشغيل الصوت المباشر في هذا المتصفح)</span>`;
                startSimulatedPlayback();
              });
            }
          } catch (e) {
            isSynthFallback = true;
            startSimulatedPlayback();
          }
        });
      }
    }

    function pauseAudio() {
      isPlaying = false;
      playIcon.textContent = "▶";
      playBtn.classList.remove("playing");
      updateWaveBars(false);

      if (isSynthFallback) {
        if (synthTimer) clearInterval(synthTimer);
      } else {
        audioEl.pause();
      }
    }

    function startSimulatedPlayback() {
      isPlaying = true;
      playIcon.textContent = "⏸";
      playBtn.classList.add("playing");
      updateWaveBars(true);

      // Play a lovely romantic harp chime sequence
      audioManager.playChime(523.25, 0.6); // C5
      setTimeout(() => isPlaying && audioManager.playChime(659.25, 0.6), 400); // E5
      setTimeout(() => isPlaying && audioManager.playChime(783.99, 0.7), 800); // G5
      setTimeout(() => isPlaying && audioManager.playChime(1046.5, 0.8), 1200); // C6

      if (synthTimer) clearInterval(synthTimer);
      synthTimer = setInterval(() => {
        simulatedCurrent += 0.5;
        if (simulatedCurrent >= simulatedDuration) {
          simulatedCurrent = 0;
          pauseAudio();
          timeDisplay.textContent = `00:00 / ${letter.duration || '0:45'}`;
          progressFill.style.width = "0%";
          return;
        }
        const pct = (simulatedCurrent / simulatedDuration) * 100;
        progressFill.style.width = `${pct}%`;
        timeDisplay.textContent = `${formatTime(simulatedCurrent)} / ${letter.duration || '0:45'}`;

        // Occasional gentle tone while playing
        if (Math.floor(simulatedCurrent) % 4 === 0 && simulatedCurrent % 1 === 0) {
          const notes = [440, 523.25, 587.33, 659.25, 783.99];
          const note = notes[Math.floor(Math.random() * notes.length)];
          audioManager.playChime(note, 0.4);
        }
      }, 500);
    }

    playBtn.addEventListener("click", togglePlay);

    // Audio element events
    audioEl.addEventListener("loadedmetadata", () => {
      if (audioEl.duration && !isNaN(audioEl.duration)) {
        timeDisplay.textContent = `00:00 / ${formatTime(audioEl.duration)}`;
      }
    });

    audioEl.addEventListener("playing", () => {
      hintEl.innerHTML = `<span>✨ صوت أسيل الحقيقي يملأ المكان دفئاً وحناناً ♡</span>`;
    });

    audioEl.addEventListener("timeupdate", () => {
      if (isSynthFallback) return;
      const current = audioEl.currentTime;
      const dur = audioEl.duration || simulatedDuration;
      const pct = (current / dur) * 100;
      progressFill.style.width = `${pct}%`;
      timeDisplay.textContent = `${formatTime(current)} / ${formatTime(dur)}`;
    });

    audioEl.addEventListener("ended", () => {
      pauseAudio();
      progressFill.style.width = "0%";
      const dur = audioEl.duration || simulatedDuration;
      timeDisplay.textContent = `00:00 / ${formatTime(dur)}`;
    });

    audioEl.addEventListener("error", () => {
      if (isPlaying) {
        isSynthFallback = true;
        hintEl.innerHTML = `<span>🎵 نغمة دافئة تعزف الآن ♡</span>`;
        startSimulatedPlayback();
      }
    });

    // Seek track
    progressTrack.addEventListener("click", (e) => {
      const rect = progressTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));

      if (isSynthFallback) {
        simulatedCurrent = pct * simulatedDuration;
        progressFill.style.width = `${pct * 100}%`;
        timeDisplay.textContent = `${formatTime(simulatedCurrent)} / ${letter.duration || '0:45'}`;
      } else if (audioEl.duration) {
        audioEl.currentTime = pct * audioEl.duration;
      }
    });

    // Auto-attempt playback with safe catch
    playAudio();
  }

  function closeModal() {
    cleanupAudio();
    modal.style.display = "none";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  container.querySelectorAll(".letter-envelope-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      const letter = letters.find(l => l.id === id);
      if (letter) openLetter(letter);
    });
  });
}


/* === Source: js/scenes/carnival.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 4: The Little Carnival
 * Features 3 Adorable, Playable Mini-Games
 */






function renderCarnivalScene(container, returnToMap) {
  const carnivalData = CONFIG.carnival;

  container.innerHTML = `
    <div class="destination-scene carnival-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="carnivalBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Little Carnival</h2>
          <span class="scene-subtitle">ألعاب النجوم والمرح اللطيف</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Mini-Game Selection Tabs -->
      <div class="carnival-tabs">
        <button class="carnival-tab-btn active" data-game="game1">
          <span>⭐</span>
          <span>Game 1: Collect the Stars</span>
        </button>
        <button class="carnival-tab-btn" data-game="game2">
          <span>✨</span>
          <span>Game 2: Our Constellation</span>
        </button>
        <button class="carnival-tab-btn" data-game="game3">
          <span>💌</span>
          <span>Game 3: Love Quiz</span>
        </button>
      </div>

      <!-- Mini-Game Stage Container -->
      <div class="game-stage-container" id="gameStage">
        <!-- Dynamically rendered mini-game goes here -->
      </div>
    </div>
  `;

  // Back button
  container.querySelector("#carnivalBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("carnival");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const stage = container.querySelector("#gameStage");
  const tabBtns = container.querySelectorAll(".carnival-tab-btn");

  function switchGame(gameKey) {
    tabBtns.forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-game") === gameKey);
    });

    if (gameKey === "game1") initGame1(stage);
    else if (gameKey === "game2") initGame2(stage);
    else if (gameKey === "game3") initGame3(stage);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audioManager.playChime(523.25, 0.4);
      switchGame(btn.getAttribute("data-game"));
    });
  });

  // Start with Game 1
  switchGame("game1");

  // ==========================================
  // MINI-GAME 1: COLLECT THE STARS
  // ==========================================
  function initGame1(host) {
    const quotes = carnivalData.game1.starQuotes;
    const target = carnivalData.game1.targetStars;
    let score = 0;
    let isGameOver = false;

    host.innerHTML = `
      <div class="minigame-card game1-card">
        <div class="game-header">
          <h3 class="game-title">Collect the Stars</h3>
          <p class="game-instruction">Tap or move the net to gather the drifting birthday stars!</p>
          <div class="game-score-display">Stars Gathered: <span id="g1Score">0</span> / ${target}</div>
        </div>

        <div class="game-canvas-area" id="g1CanvasArea">
          <canvas id="g1Canvas" width="600" height="340"></canvas>
          <div class="touch-hint">Drag or use arrow keys / tap to catch stars</div>
        </div>

        <div class="game-quote-banner" id="g1QuoteBanner" style="display: none;">
          <div class="quote-sparkle">✧</div>
          <div class="quote-text" id="g1QuoteText"></div>
        </div>

        <div class="game-completion-banner" id="g1Completion" style="display: none;">
          <h4>${carnivalData.game1.completionMessageEnglish}</h4>
          <p dir="rtl">${carnivalData.game1.completionMessageArabic}</p>
          <button class="celestial-btn" id="g1ReplayBtn">Play Again</button>
        </div>
      </div>
    `;

    const canvas = host.querySelector("#g1Canvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = host.querySelector("#g1Score");
    const quoteBanner = host.querySelector("#g1QuoteBanner");
    const quoteText = host.querySelector("#g1QuoteText");
    const completionBanner = host.querySelector("#g1Completion");

    // Responsive canvas
    const rect = canvas.getBoundingClientRect();
    const width = 600;
    const height = 340;

    let basket = { x: width / 2, y: height - 40, width: 70, height: 26 };
    let fallingStars = [];
    let animationId = null;

    function spawnStar() {
      if (fallingStars.length < 4 && !isGameOver) {
        fallingStars.push({
          x: Math.random() * (width - 60) + 30,
          y: -20,
          vy: Math.random() * 1.5 + 1.2,
          radius: 12,
          color: "#e5c158",
          sparkle: Math.random() * Math.PI
        });
      }
    }

    // Touch and mouse movement
    function handleMove(clientX) {
      const cRect = canvas.getBoundingClientRect();
      const scale = width / cRect.width;
      const mouseX = (clientX - cRect.left) * scale;
      basket.x = Math.max(basket.width / 2, Math.min(width - basket.width / 2, mouseX));
    }

    canvas.addEventListener("mousemove", (e) => handleMove(e.clientX));
    canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") basket.x = Math.max(basket.width / 2, basket.x - 25);
      if (e.key === "ArrowRight") basket.x = Math.min(width - basket.width / 2, basket.x + 25);
    });

    const spawnInterval = setInterval(spawnStar, 1200);

    function gameLoop() {
      ctx.clearRect(0, 0, width, height);

      // Draw starry game background
      ctx.fillStyle = "rgba(10, 15, 29, 0.95)";
      ctx.fillRect(0, 0, width, height);

      // Draw Basket (Soft glowing celestial basket)
      ctx.save();
      ctx.fillStyle = "rgba(223, 186, 83, 0.85)";
      ctx.beginPath();
      ctx.roundRect(basket.x - basket.width / 2, basket.y, basket.width, basket.height, [0, 0, 12, 12]);
      ctx.fill();
      ctx.strokeStyle = "#faf8f2";
      ctx.lineWidth = 2;
      ctx.stroke();
      // Little handle
      ctx.beginPath();
      ctx.arc(basket.x, basket.y, basket.width * 0.45, Math.PI, 0, false);
      ctx.stroke();
      ctx.restore();

      // Draw and update falling stars
      for (let i = fallingStars.length - 1; i >= 0; i--) {
        const s = fallingStars[i];
        s.y += s.vy;
        s.sparkle += 0.05;

        // Collision with basket
        if (
          s.y + s.radius >= basket.y &&
          s.y - s.radius <= basket.y + basket.height &&
          s.x >= basket.x - basket.width / 2 &&
          s.x <= basket.x + basket.width / 2
        ) {
          audioManager.playChime(600 + score * 80, 0.6);
          score++;
          scoreEl.textContent = score;

          // Display quote
          quoteText.textContent = quotes[(score - 1) % quotes.length];
          quoteBanner.style.display = "flex";

          fallingStars.splice(i, 1);

          if (score >= target) {
            isGameOver = true;
            audioManager.playStarlightChord();
            stateManager.completeMinigame("collectStars");
            stateManager.collectStar("minigame_stars");
            completionBanner.style.display = "block";
            clearInterval(spawnInterval);
            break;
          }
          continue;
        }

        // Draw star
        ctx.save();
        ctx.fillStyle = s.color;
        ctx.shadowColor = "#dfba53";
        ctx.shadowBlur = 10;
        ctx.font = "20px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("⭐", s.x, s.y);
        ctx.restore();

        // Respawn if offscreen
        if (s.y > height + 20) {
          fallingStars.splice(i, 1);
        }
      }

      if (!isGameOver) {
        animationId = requestAnimationFrame(gameLoop);
      }
    }

    gameLoop();

    host.querySelector("#g1ReplayBtn")?.addEventListener("click", () => {
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationId);
      initGame1(host);
    });
  }

  // ==========================================
  // MINI-GAME 2: FIND OUR CONSTELLATION
  // ==========================================
  function initGame2(host) {
    const starNodes = [
      { id: 0, x: 90, y: 190, label: "Anea (Admin)" },
      { id: 1, x: 190, y: 110, label: "First DMs" },
      { id: 2, x: 300, y: 160, label: "March 31" },
      { id: 3, x: 390, y: 90, label: "Voice Call" },
      { id: 4, x: 490, y: 180, label: "Confession" },
      { id: 5, x: 300, y: 240, label: "Aseel ♡" }
    ];

    let connectedOrder = [];
    let isComplete = false;

    host.innerHTML = `
      <div class="minigame-card game2-card">
        <div class="game-header">
          <h3 class="game-title">Find Our Constellation</h3>
          <p class="game-instruction">Connect the glowing stars in sequence to trace our story across the sky.</p>
          <div class="constellation-step-indicator">
            Progress: <span id="constellationProgress">0</span> / ${starNodes.length} Stars
          </div>
        </div>

        <div class="constellation-canvas-area">
          <svg id="constellationSvg" width="580" height="300" viewBox="0 0 580 300">
            <!-- Connection Lines -->
            <g id="constellationLines"></g>
            <!-- Stars -->
            <g id="constellationStars">
              ${starNodes.map(node => `
                <g class="constellation-star-group" data-id="${node.id}" style="cursor: pointer;">
                  <circle cx="${node.x}" cy="${node.y}" r="18" fill="rgba(223, 186, 83, 0.15)" class="star-aura" />
                  <circle cx="${node.x}" cy="${node.y}" r="8" fill="#faf8f2" stroke="#dfba53" stroke-width="2" class="star-core" />
                  <text x="${node.x}" y="${node.y + 26}" text-anchor="middle" fill="#d6cebc" font-size="12px" class="star-text">${node.label}</text>
                </g>
              `).join("")}
            </g>
          </svg>
        </div>

        <div class="game-completion-banner" id="g2Completion" style="display: none;">
          <h4>${carnivalData.game2.completionMessageEnglish}</h4>
          <p dir="rtl">${carnivalData.game2.completionMessageArabic}</p>
          <div class="constellation-reward">✦ "Anea & Aseel" Constellation Unlocked Forever! ✦</div>
        </div>

        <div class="constellation-controls">
          <button class="celestial-btn secondary-btn" id="g2ResetBtn">Reset Path</button>
        </div>
      </div>
    `;

    const svg = host.querySelector("#constellationSvg");
    const linesGroup = host.querySelector("#constellationLines");
    const progressEl = host.querySelector("#constellationProgress");
    const completionBanner = host.querySelector("#g2Completion");
    const resetBtn = host.querySelector("#g2ResetBtn");

    function renderLines() {
      let linesHtml = "";
      for (let i = 0; i < connectedOrder.length - 1; i++) {
        const p1 = starNodes[connectedOrder[i]];
        const p2 = starNodes[connectedOrder[i + 1]];
        linesHtml += `
          <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" 
                stroke="#dfba53" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 2" class="starlight-line" />
        `;
      }
      linesGroup.innerHTML = linesHtml;
      progressEl.textContent = connectedOrder.length;
    }

    host.querySelectorAll(".constellation-star-group").forEach(starEl => {
      starEl.addEventListener("click", () => {
        if (isComplete) return;
        const id = parseInt(starEl.getAttribute("data-id"));

        if (!connectedOrder.includes(id)) {
          audioManager.playChime(500 + connectedOrder.length * 100, 0.7);
          connectedOrder.push(id);
          starEl.querySelector(".star-core").setAttribute("fill", "#dfba53");
          starEl.querySelector(".star-aura").setAttribute("r", "24");
          renderLines();

          if (connectedOrder.length === starNodes.length) {
            isComplete = true;
            audioManager.playStarlightChord();
            stateManager.completeMinigame("constellation");
            stateManager.collectStar("minigame_constellation");
            completionBanner.style.display = "block";
          }
        }
      });
    });

    resetBtn.addEventListener("click", () => {
      connectedOrder = [];
      isComplete = false;
      renderLines();
      host.querySelectorAll(".constellation-star-group").forEach(el => {
        el.querySelector(".star-core").setAttribute("fill", "#faf8f2");
        el.querySelector(".star-aura").setAttribute("r", "18");
      });
      completionBanner.style.display = "none";
    });
  }

  // ==========================================
  // MINI-GAME 3: THE LITTLE LOVE QUIZ
  // ==========================================
  function initGame3(host) {
    const questions = carnivalData.game3.questions;
    let currentIdx = 0;
    let correctCount = 0;

    function renderQuestion() {
      const q = questions[currentIdx];
      host.innerHTML = `
        <div class="minigame-card game3-card">
          <div class="game-header">
            <span class="quiz-badge">Question ${currentIdx + 1} of ${questions.length}</span>
            <h3 class="quiz-question-en">${q.questionEnglish}</h3>
            <h4 class="quiz-question-ar" dir="rtl">${q.questionArabic}</h4>
          </div>

          <div class="quiz-options-list">
            ${q.options.map((opt, i) => `
              <button class="quiz-option-btn" data-index="${i}">
                <span class="opt-bullet">${String.fromCharCode(65 + i)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join("")}
          </div>

          <div class="quiz-feedback-box" id="quizFeedback" style="display: none;"></div>
        </div>
      `;

      const optionsList = host.querySelectorAll(".quiz-option-btn");
      const feedback = host.querySelector("#quizFeedback");

      optionsList.forEach(btn => {
        btn.addEventListener("click", () => {
          const chosen = parseInt(btn.getAttribute("data-index"));
          optionsList.forEach(b => b.disabled = true);

          if (chosen === q.correctIndex) {
            audioManager.playChime(784, 0.8);
            correctCount++;
            btn.classList.add("correct-choice");
            feedback.innerHTML = `
              <div class="feedback-correct">
                <span class="fb-icon">💖</span>
                <div class="fb-text">
                  <p class="fb-ar" dir="rtl">${q.explanationArabic}</p>
                  <p class="fb-en">Perfect, my love!</p>
                </div>
              </div>
            `;
          } else {
            audioManager.playChime(440, 0.6);
            btn.classList.add("gentle-wrong-choice");
            optionsList[q.correctIndex].classList.add("correct-choice");
            feedback.innerHTML = `
              <div class="feedback-gentle">
                <span class="fb-icon">🌸</span>
                <div class="fb-text">
                  <p class="fb-ar" dir="rtl">${q.explanationArabic}</p>
                  <p class="fb-en">Still completely adorable! The correct answer is highlighted.</p>
                </div>
              </div>
            `;
          }

          feedback.style.display = "block";

          setTimeout(() => {
            currentIdx++;
            if (currentIdx < questions.length) {
              renderQuestion();
            } else {
              renderQuizResults();
            }
          }, 2400);
        });
      });
    }

    function renderQuizResults() {
      audioManager.playStarlightChord();
      stateManager.completeMinigame("quiz");
      stateManager.collectStar("minigame_quiz");

      host.innerHTML = `
        <div class="minigame-card quiz-results-card">
          <div class="results-crown">👑</div>
          <h3 class="results-title">You Know Our Story by Heart</h3>
          <p class="results-arabic" dir="rtl">حكايتنا محفورة في قلبك مثل ما هي محفورة بين النجوم.. كل ذكرى معك هي كنز ♡</p>
          <div class="results-star-badge">⭐ +1 Golden Relationship Star Awarded!</div>
          <button class="celestial-btn" id="quizRestartBtn">Take Quiz Again</button>
        </div>
      `;

      host.querySelector("#quizRestartBtn").addEventListener("click", () => {
        currentIdx = 0;
        correctCount = 0;
        renderQuestion();
      });
    }

    renderQuestion();
  }
}


/* === Source: js/scenes/lake.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 5: The Lake of Stars
 * The quietest, most peaceful celestial sanctuary
 */






function renderLakeScene(container, returnToMap) {
  const lakeData = CONFIG.lake;
  let isSittingTogether = false;

  // 5 Romantic Lantern Positions on the Water (Gracefully positioned in the upper lake)
  const LANTERN_POSITIONS = [
    { top: 16, left: 20, nameAr: "همسة العيون", label: "01" },
    { top: 12, left: 50, nameAr: "همسة الدفء", label: "02" },
    { top: 16, left: 80, nameAr: "همسة الحنان", label: "03" },
    { top: 32, left: 30, nameAr: "همسة الشوق", label: "04" },
    { top: 32, left: 70, nameAr: "همسة الأبد", label: "05" }
  ];

  container.innerHTML = `
    <div class="destination-scene lake-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="lakeBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">${lakeData.title}</h2>
          <span class="scene-subtitle">${lakeData.subtitle}</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <div class="lake-poetic-header">
        <p class="lake-quote">"Where the quiet waters mirror the starlight, and every reflection holds a thought of you."</p>
        <div class="lake-instruction-pill">
          <span>🌊 المسِ قناديل اللوتس العائمة فوق الماء لتكتشفي همسات أسيل الدافئة ♡</span>
        </div>
      </div>

      <!-- MAIN MAGICAL LAKE ENVIRONMENT -->
      <div class="enchanted-lake-stage" id="lakeContainer">
        <!-- Deep Night Sky with Shimmering Celestial Moon -->
        <div class="lake-sky-backdrop">
          <div class="lake-crescent-moon">
            <div class="moon-body">🌙</div>
            <div class="moon-aura"></div>
          </div>
          <div class="lake-distant-stars"></div>
        </div>

        <!-- The Shimmering Water Body -->
        <div class="lake-water-surface">
          <!-- Moon Shimmer Reflection on Water -->
          <div class="moon-water-reflection"></div>

          <!-- Animated Water Ripples -->
          <div class="water-ripples-layer">
            <div class="water-wave w1"></div>
            <div class="water-wave w2"></div>
            <div class="water-wave w3"></div>
          </div>

          <!-- Rising Starlight Fireflies / Sparkles -->
          <div class="lake-fireflies">
            <span class="firefly f1">✧</span>
            <span class="firefly f2">✦</span>
            <span class="firefly f3">✧</span>
            <span class="firefly f4">✦</span>
            <span class="firefly f5">✧</span>
            <span class="firefly f6">✦</span>
          </div>

          <!-- 5 Floating Lotus Star Lanterns -->
          <div class="floating-lotus-group">
            ${lakeData.whispers.map((w, idx) => {
              const pos = LANTERN_POSITIONS[idx] || { top: 30, left: 30 + idx * 10, nameAr: `همسة ${idx + 1}`, label: `0${idx + 1}` };
              return `
                <div class="lotus-lantern-node" data-index="${idx}" style="top: ${pos.top}%; left: ${pos.left}%;" title="${pos.nameAr}">
                  <div class="lotus-glow-halo"></div>
                  <div class="lotus-svg-box">
                    <svg class="lotus-svg" viewBox="0 0 64 52" width="62" height="50">
                      <defs>
                        <linearGradient id="lotusGrad_${idx}" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stop-color="#dfba53" />
                          <stop offset="35%" stop-color="#e8a87c" />
                          <stop offset="70%" stop-color="#ffccd5" />
                          <stop offset="100%" stop-color="#ffffff" />
                        </linearGradient>
                        <radialGradient id="flameGrad_${idx}" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stop-color="#ffffff" />
                          <stop offset="35%" stop-color="#ffe066" />
                          <stop offset="75%" stop-color="#ff922b" />
                          <stop offset="100%" stop-color="transparent" />
                        </radialGradient>
                      </defs>
                      <!-- Lotus Lily Pad Base -->
                      <ellipse cx="32" cy="42" rx="26" ry="7" fill="#18362e" stroke="#dfba53" stroke-width="0.8" opacity="0.9" />
                      <!-- Back Petals -->
                      <path d="M12 36 C14 20 25 18 32 30 C23 23 16 27 12 36 Z" fill="url(#lotusGrad_${idx})" opacity="0.85" />
                      <path d="M52 36 C50 20 39 18 32 30 C41 23 48 27 52 36 Z" fill="url(#lotusGrad_${idx})" opacity="0.85" />
                      <!-- Main Blooming Petals -->
                      <path d="M18 38 C20 16 30 14 32 36 C24 22 19 28 18 38 Z" fill="url(#lotusGrad_${idx})" />
                      <path d="M46 38 C44 16 34 14 32 36 C40 22 45 28 46 38 Z" fill="url(#lotusGrad_${idx})" />
                      <!-- Center Crown Petal -->
                      <path d="M26 40 C28 14 36 14 38 40 C35 24 29 24 26 40 Z" fill="#fff" opacity="0.95" />
                      <!-- Golden Candle Flame -->
                      <circle cx="32" cy="18" r="9" fill="url(#flameGrad_${idx})" />
                      <path d="M32 9 C34 14 36 18 32 23 C28 18 30 14 32 9 Z" fill="#fffbe6" />
                      <circle cx="32" cy="18" r="2.5" fill="#ffffff" />
                    </svg>
                  </div>
                  <div class="lotus-caption">
                    <span class="lotus-num">${pos.label}</span>
                    <span class="lotus-ar" dir="rtl">${pos.nameAr}</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- The Peaceful Wooden Pier / Shoreline -->
        <div class="lake-wooden-dock">
          <!-- Dock Posts & Lantern -->
          <div class="dock-lantern-post left-post">
            <div class="dock-lantern-glow"></div>
            <span class="dock-lantern-lamp">🏮</span>
          </div>

          <!-- Characters sitting together by the water edge -->
          <div class="dock-characters-container" id="lakeCharWrapper">
            <div class="chibi-dock-sprite">
              ${Characters.getTogetherSceneSVG("sitting", 165)}
            </div>
            <div class="dock-water-reflection"></div>
          </div>

          <div class="dock-lantern-post right-post">
            <div class="dock-lantern-glow"></div>
            <span class="dock-lantern-lamp">🏮</span>
          </div>

          <!-- Water Reeds -->
          <div class="lake-shore-reeds left-reeds">🌾🌾</div>
          <div class="lake-shore-reeds right-reeds">🌾🌾</div>
        </div>

        <!-- Sit Together Romantic Prompt Button -->
        <div class="lake-interactive-prompt">
          <button class="celestial-btn starlight-glow-btn" id="sitTogetherBtn">
            <span>✧</span>
            <span id="sitBtnText">Sit Beside Me Beneath the Stars</span>
            <span>✧</span>
          </button>
        </div>
      </div>

      <!-- Whisper Dialog Modal -->
      <div class="celestial-modal-overlay" id="lakeModal" style="display: none;">
        <div class="celestial-modal-card whisper-card">
          <button class="modal-close-btn" id="lakeModalClose">✕</button>
          <div class="modal-content-slot" id="lakeModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation: Back Button
  container.querySelector("#lakeBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("lake");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#lakeModal");
  const modalSlot = container.querySelector("#lakeModalSlot");
  const modalClose = container.querySelector("#lakeModalClose");
  const lakeContainer = container.querySelector("#lakeContainer");
  const charWrapper = container.querySelector("#lakeCharWrapper");
  const sitBtn = container.querySelector("#sitTogetherBtn");
  const sitBtnText = container.querySelector("#sitBtnText");

  function openWhisper(idx) {
    const w = lakeData.whispers[idx];
    const pos = LANTERN_POSITIONS[idx];
    audioManager.playChime(659.25, 1.2);
    stateManager.collectStar(`star_lake_whisper_${idx}`);
    stateManager.markDestinationExplored("lake");

    modalSlot.innerHTML = `
      <div class="whisper-content-box">
        <div class="whisper-lotus">✨ 🏮 ✨</div>
        <span class="whisper-tag">${pos ? pos.nameAr : `Whisper 0${idx + 1}`}</span>
        <h3 class="whisper-heading">A Quiet Thought from Aseel</h3>
        <p class="whisper-arabic" dir="rtl">${w.arabic}</p>
        <p class="whisper-english">"${w.english}"</p>
        <div class="whisper-star-tag">⭐ تم حفظ هذه الهمسة في بحيرة النجوم للأبد</div>
      </div>
    `;

    modal.style.display = "flex";
    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  container.querySelectorAll(".lotus-lantern-node").forEach(item => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.getAttribute("data-index"), 10);
      openWhisper(idx);
    });
  });

  // Special "Sit Together" scene
  sitBtn.addEventListener("click", () => {
    isSittingTogether = !isSittingTogether;
    audioManager.playStarlightChord();

    if (isSittingTogether) {
      lakeContainer.classList.add("starlight-illumination");
      sitBtnText.textContent = "Breathing in the silence together... ♡";
      sitBtn.classList.add("btn-active-glow");
      charWrapper.innerHTML = `
        <div class="chibi-dock-sprite holding-hands-mode">
          ${Characters.getTogetherSceneSVG("holdingHands", 220)}
          <div class="dock-floating-hearts">💕</div>
        </div>
        <div class="dock-water-reflection"></div>
      `;
      
      stateManager.collectStar("lake_peace_moment");
      container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
    } else {
      lakeContainer.classList.remove("starlight-illumination");
      sitBtnText.textContent = "Sit Beside Me Beneath the Stars";
      sitBtn.classList.remove("btn-active-glow");
      charWrapper.innerHTML = `
        <div class="chibi-dock-sprite">
          ${Characters.getTogetherSceneSVG("sitting", 210)}
        </div>
        <div class="dock-water-reflection"></div>
      `;
    }
  });
}


/* === Source: js/scenes/castle.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 6: The Birthday Castle
 * The Grand 24th Birthday Celebration Hall
 */






function renderCastleScene(container, returnToMap, goToFinalSurprise) {
  const castleData = CONFIG.castle;

  container.innerHTML = `
    <div class="destination-scene castle-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="castleBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">${castleData.title}</h2>
          <span class="scene-subtitle">${castleData.subtitle}</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Grand Celestial Castle Hall -->
      <div class="castle-grand-hall">
        <!-- Celestial Banners and Floating Stars -->
        <div class="castle-arches">
          <div class="starlight-arch arch-left"></div>
          <div class="starlight-arch arch-center">
            <span class="arch-star">✦</span>
            <span class="arch-number">24</span>
            <span class="arch-star">✦</span>
          </div>
          <div class="starlight-arch arch-right"></div>
        </div>

        <!-- The Emotional Narrative Reveal -->
        <div class="castle-narrative-banner">
          <p class="castle-line line-1">"Twenty-four years of you."</p>
          <p class="castle-line line-2">"And somehow, I get to love you in this little moment of your story."</p>
          <h1 class="castle-greeting">Happy Birthday, my ${CONFIG.nickname}. ♡</h1>
          <p class="castle-arabic-praise" dir="rtl">${castleData.unlockedMessageArabic}</p>
        </div>

        <!-- The Glowing Birthday Cake Centerpiece -->
        <div class="birthday-cake-centerpiece">
          <div class="cake-sparkle-halo"></div>

          <!-- Illustrated 24th Birthday Cake -->
          <div class="interactive-cake" id="birthdayCakeItem" title="Blow out the candles and make a birthday wish!">
            <!-- Glowing Candles with Flame -->
            <div class="cake-candles-row">
              <div class="candle candle-1">
                <div class="flame"></div>
                <div class="candle-stick"></div>
              </div>
              <div class="candle-number-badge">24</div>
              <div class="candle candle-2">
                <div class="flame"></div>
                <div class="candle-stick"></div>
              </div>
            </div>

            <!-- Cake Tiers -->
            <div class="cake-tier tier-top">
              <div class="frosting-drops"></div>
              <div class="cake-frosting"></div>
            </div>
            <div class="cake-tier tier-bottom">
              <div class="frosting-drops"></div>
              <div class="cake-frosting"></div>
            </div>
            <div class="cake-plate"></div>

            <div class="cake-tap-label">
              <span>✧ Tap to Make a Wish & Open Your Gift ✧</span>
            </div>
          </div>
        </div>

        <!-- Anea & Aseel celebrating in the Castle -->
        <div class="castle-characters-celebrating">
          ${Characters.getTogetherSceneSVG("holdingHands", 220)}
        </div>

        <!-- Floating Golden Gift Box -->
        <div class="magical-present-wrapper" id="birthdayPresentItem">
          <div class="present-box">
            <div class="box-lid"></div>
            <div class="box-body"></div>
            <div class="box-ribbon-v"></div>
            <div class="box-ribbon-h"></div>
            <div class="box-sparkles">✨</div>
          </div>
          <div class="present-label">Aseel's Final Birthday Surprise 🎁</div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#castleBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  // Tap Cake or Present -> Launch Final Surprise
  const cake = container.querySelector("#birthdayCakeItem");
  const present = container.querySelector("#birthdayPresentItem");

  function triggerSurprise() {
    audioManager.playStarlightChord();
    stateManager.collectStar("castle_cake_wished");

    // Blow candle animation
    cake.classList.add("candles-blown");

    setTimeout(() => {
      goToFinalSurprise();
    }, 1200);
  }

  cake.addEventListener("click", triggerSurprise);
  present.addEventListener("click", triggerSurprise);
}


/* === Source: js/scenes/finalSurprise.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * The Final Surprise: Castle Photo Gallery (6 Memories), Love Letter, and Climax
 */






function renderFinalSurpriseScene(container, returnToMap) {
  const finalData = CONFIG.finalSurprise;
  const musicData = CONFIG.music;
  const gallery = CONFIG.castle.gallery || [];

  container.innerHTML = `
    <div class="destination-scene final-surprise-scene" id="finalSurpriseRoot">
      <!-- Breadcrumb Bar -->
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="finalBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Heart of the Universe</h2>
          <span class="scene-subtitle">معرض ذكرياتنا الـ 6 الخاصة ♡</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Atmospheric Opening -->
      <div class="final-intro-banner">
        <p class="final-gentle-lead">"Six moments captured in time, held forever in my heart."</p>
        <p class="final-lead-arabic" dir="rtl">ست لحظات استثنائية من حكايتنا.. محفورة بقلبي إلى الأبد ♡</p>
      </div>

      <!-- 6-PHOTO MEMORY GALLERY -->
      <div class="castle-photo-grid">
        ${gallery.map((item, idx) => `
          <div class="photo-memory-card" data-idx="${idx}">
            <div class="photo-frame-wrapper">
              <img src="${item.src}" alt="${item.captionArabic}" class="photo-img" />
              <div class="photo-zoom-hint">
                <span>🔍 اضغطي للتكبير</span>
              </div>
            </div>
            <div class="photo-meta">
              <span class="photo-number">صورة 0${idx + 1} ✧</span>
              <p class="photo-caption-ar" dir="rtl">${item.captionArabic}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Dedicated Song Card -->
      <div class="castle-song-bar">
        <div class="song-bar-content">
          <div class="song-disc-mini">🎵</div>
          <div class="song-bar-text">
            <span class="song-bar-badge">Our Song Dedication</span>
            <h3 class="song-bar-title">"${musicData.title}" — ${musicData.artist}</h3>
            <p class="song-bar-note" dir="rtl">${musicData.noteArabic}</p>
          </div>
          <a href="${musicData.externalUrl}" target="_blank" rel="noopener noreferrer" class="celestial-btn song-play-link">
            <span>▶</span>
            <span>Listen</span>
          </a>
        </div>
      </div>

      <!-- The Grand Love Letter Section Written Underneath -->
      <div class="final-love-letter-container" id="finalLetterSection">
        <div class="letter-parchment-gold">
          <div class="letter-top-crest">
            <span class="crest-sparkle">✧</span>
            <span class="crest-title">ANEA & ASEEL</span>
            <span class="crest-sparkle">✧</span>
          </div>

          <h1 class="final-letter-heading">${finalData.headingEnglish}</h1>
          <h3 class="final-letter-subheading" dir="rtl">${finalData.headingArabic}</h3>

          <div class="final-letter-body" dir="rtl">
            <p class="final-letter-paragraphs">
              ${finalData.letterArabic.replace(/\n\n/g, '</p><p class="final-letter-paragraphs">').replace(/\n/g, '<br>')}
            </p>
          </div>

          <div class="final-letter-signature">
            <p class="sig-closing">${finalData.closingLineEnglish}</p>
            <p class="sig-arabic" dir="rtl">${finalData.closingLineArabic}</p>
            <div class="sig-name">With all my love, forever, Aseel ♡</div>
          </div>
        </div>

        <!-- The Emotional "Stay Here With Me A Little Longer" Button -->
        <div class="stay-together-action">
          <button class="celestial-btn stay-btn" id="stayTogetherBtn">
            <span class="heart-pulse">♡</span>
            <span>Stay Here With Me A Little Longer</span>
            <span class="heart-pulse">♡</span>
          </button>
        </div>
      </div>

      <!-- The Emotional Climax Scene: Sitting Quietly Under the Sky -->
      <div class="stay-scene-overlay" id="staySceneOverlay" style="display: none;">
        <div class="stay-sky">
          <!-- Sky Constellation: Aseel ♡ Anea -->
          <div class="sky-constellation-text" id="constellationTitle">
            <span class="constellation-sparkle">✦</span>
            <span class="constellation-names">Aseel ♡ Anea</span>
            <span class="constellation-sparkle">✦</span>
          </div>

          <div class="sky-poetic-quote">
            "${finalData.closingLineEnglish}"
          </div>

          <div class="stay-characters-center">
            ${Characters.getTogetherSceneSVG("sitting", 280)}
          </div>

          <div class="stay-controls">
            <button class="celestial-btn secondary-btn" id="closeStaySceneBtn">
              <span>Return to Memories</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Photo Zoom Lightbox Modal -->
      <div class="celestial-modal-overlay" id="photoLightboxModal" style="display: none;">
        <div class="celestial-modal-card photo-lightbox-card">
          <button class="modal-close-btn" id="lightboxClose">✕</button>
          <div class="lightbox-content-slot" id="lightboxSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#finalBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const lightbox = container.querySelector("#photoLightboxModal");
  const lightboxSlot = container.querySelector("#lightboxSlot");
  const lightboxClose = container.querySelector("#lightboxClose");

  function openPhoto(idx) {
    const item = gallery[idx];
    if (!item) return;
    audioManager.playPaperSound();
    audioManager.playChime(784, 0.7);

    lightboxSlot.innerHTML = `
      <div class="lightbox-card-inner">
        <div class="lightbox-img-frame">
          <img src="${item.src}" alt="${item.captionArabic}" class="lightbox-full-img" />
        </div>
        <div class="lightbox-caption-area">
          <span class="lightbox-badge">ذكرياتنا الخالدة 0${idx + 1} ♡</span>
          <p class="lightbox-caption-text" dir="rtl">${item.captionArabic}</p>
        </div>
      </div>
    `;

    lightbox.style.display = "flex";
  }

  lightboxClose.addEventListener("click", () => lightbox.style.display = "none");
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

  // Photo click event listeners
  container.querySelectorAll(".photo-memory-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-idx"), 10);
      openPhoto(idx);
    });
  });

  // "Stay Here With Me A Little Longer" Interaction
  const stayBtn = container.querySelector("#stayTogetherBtn");
  const stayOverlay = container.querySelector("#staySceneOverlay");
  const closeStayBtn = container.querySelector("#closeStaySceneBtn");

  stayBtn.addEventListener("click", () => {
    audioManager.playStarlightChord();
    stateManager.collectStar("stay_together_memory");
    stayOverlay.style.display = "flex";
    setTimeout(() => {
      stayOverlay.classList.add("visible");
      container.querySelector("#constellationTitle").classList.add("glow-bright");
    }, 50);
  });

  closeStayBtn.addEventListener("click", () => {
    stayOverlay.classList.remove("visible");
    setTimeout(() => {
      stayOverlay.style.display = "none";
    }, 600);
  });
}


/* === Source: js/app.js === */

/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Main Application Orchestrator & Router
 */














class UniverseApp {
  constructor() {
    this.root = document.getElementById("app");
    this.starfield = null;
    this.currentScene = null;
  }

  init() {
    // 1. Initialize canvas starfield
    this.starfield = new Starfield("starfieldCanvas");

    // 2. User interaction listener to resume audio context if needed
    const unlockAudio = () => {
      audioManager.resume();
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    // 3. Check route or intro status
    if (!stateManager.state.introSeen) {
      this.navigate("intro");
    } else {
      this.navigate("world");
    }

    // 4. Listen to state changes for background updates
    stateManager.subscribe((state) => {
      // If castle gets unlocked, update starfield particles if needed
    });
  }

  navigate(sceneName, immediate = false) {
    const isFirstLoad = (this.currentScene === null) || immediate;
    this.currentScene = sceneName;
    stateManager.state.activeScene = sceneName;

    const render = () => {
      try {
        this.root.innerHTML = "";

        switch (sceneName) {
          case "intro":
            renderIntroScene(this.root, () => this.navigate("world"));
            break;

          case "world":
            renderWorldScene(this.root, (dest) => this.navigate(dest));
            break;

          case "home":
            renderHomeScene(this.root, () => this.navigate("world"));
            break;

          case "garden":
            renderGardenScene(this.root, () => this.navigate("world"));
            break;

          case "mailbox":
            renderMailboxScene(this.root, () => this.navigate("world"));
            break;

          case "carnival":
            renderCarnivalScene(this.root, () => this.navigate("world"));
            break;

          case "lake":
            renderLakeScene(this.root, () => this.navigate("world"));
            break;

          case "castle":
            renderCastleScene(
              this.root,
              () => this.navigate("world"),
              () => this.navigate("finalSurprise")
            );
            break;

          case "finalSurprise":
            renderFinalSurpriseScene(this.root, () => this.navigate("world"));
            break;

          default:
            renderWorldScene(this.root, (dest) => this.navigate(dest));
            break;
        }
      } catch (err) {
        console.error("Scene render error:", err);
      } finally {
        this.root.classList.remove("scene-transitioning");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (isFirstLoad) {
      this.root.classList.remove("scene-transitioning");
      render();
    } else {
      this.root.classList.add("scene-transitioning");
      setTimeout(render, 240);
    }
  }
}

// Start application when DOM is ready or immediately if already loaded
function startApp() {
  try {
    const app = new UniverseApp();
    app.init();
    console.log("Anea's Little Universe initialized successfully ♡");
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}



})();
