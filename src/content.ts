export type Lang = "en" | "am";

export const defaultSocialLinks = [
  { name: "YouTube", url: "https://www.youtube.com/@yebirhanlijoch" },
  { name: "Facebook", url: "https://web.facebook.com/share/p/1DWpZ2bAox/" },
  { name: "TikTok", url: "https://www.tiktok.com/@villageoflight" },
] as const;

export const content = {
  brand: {
    name: {
      en: "Village of Light",
      am: "የብርሃን ልጆች",
    },
    full: {
      en: "Village of Light for Children and the Elderly",
      am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች",
    },
    short: {
      en: "VLCE",
      am: "የብርሃን ልጆች",
    },
    mark: {
      en: "Charity Organization",
      am: "በጎ አድራጎት ድርጅት",
    },
    logo: "/images/logo.png",
    socialImage: "/images/bg_logo.jpg",
  },
  meta: {
    home: {
      title: {
        en: "Village of Light for Children and the Elderly | VLCE Ethiopia",
        am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች | VLCE ኢትዮጵያ",
      },
      description: {
        en: "Village of Light for Children and the Elderly (VLCE) is a national non-profit humanitarian organization supporting vulnerable children and elderly people in Ethiopia through education, healthcare, social support, sponsorship and livelihood programs.",
        am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች (VLCE) ብሔራዊ ለጋስ ሰብዓዊ ድርጅት ሲሆን ተጋላጭ ልጆችንና ሽማግሌዎችን በትምህርት፣ በጤና፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በኑሮ ፕሮግራሞች ይደግፋል።",
      },
    },
    about: {
      title: {
        en: "About Us — Our Story & Mission | VLCE",
        am: "ስለ እኛ — ታሪካችንና ተልዕኮአችን | VLCE",
      },
      description: {
        en: "Learn about Village of Light for Children and the Elderly (VLCE) — our story since 2012, our mission, and the values that drive our work for children and elderly people in Ethiopia.",
        am: "ስለ የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች (VLCE) ይወቁ — ከ2012 ጀምሮ ታሪካችን፣ ተልዕኮአችን እና ለልጆችና ለሽማግሌዎች በሚካሄደው ሥራችን ጀርባ ያሉ እሴቶች።",
      },
    },
    programs: {
      title: {
        en: "Programs & Initiatives | VLCE",
        am: "ፕሮግራሞችና ተነሳሽነቶች | VLCE",
      },
      description: {
        en: "Explore VLCE programs: healthcare, education support, the Agape feeding program, Bego Maed sponsorship, and the Be Human employment creation project in Ethiopia.",
        am: 'የVLCE ፕሮግራሞችን ይወቁ፦ ጤና፣ የትምህርት ድጋፍ፣ የአጋፔ መመገቢያ ፕሮግራም፣ የበጎ ማዕድ ስፖንሰርሺፕ እና የ"Be Human" የሥራ ፈጠራ ፕሮጀክት።',
      },
    },
    impact: {
      title: {
        en: "Our Impact & Milestones | VLCE",
        am: "ተጽእኖአችንና ምልክቶቻችን | VLCE",
      },
      description: {
        en: "See the impact of Village of Light: 6,000+ meals served, 2,000+ students supported, 567 people treated, and milestones in our journey since 2012.",
        am: "የብርሃን ልጆች ተጽእኖ ይመልከቱ፦ 6,000+ ምግቦች ቀርበዋል፣ 2,000+ ተማሪዎች ተደግፈዋል፣ 567 ሰዎች ሕክምና አግኝተዋል እና ከ2012 ጀምሮ ያሉ ምልክቶቻችን።",
      },
    },
    contact: {
      title: {
        en: "Contact Us | VLCE",
        am: "አግኙን | VLCE",
      },
      description: {
        en: "Get in touch with Village of Light for Children and the Elderly in Addis Ababa, Ethiopia. Questions, suggestions, or want to get involved? Reach out today.",
        am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎችን በአዲስ አበባ፣ ኢትዮጵያ ያግኙ። ጥያቄዎች፣ ሐሳቦች ወይም መሳተፍ ይፈልጋሉ? ዛሬ ያግኙን።",
      },
    },
    donate: {
      title: {
        en: "Donate & Support Our Mission | VLCE",
        am: "ይለገሱና ተልዕኮአችንን ይደግፉ | VLCE",
      },
      description: {
        en: "Support Village of Light for Children and the Elderly. Your donation provides food, clothing, education, healthcare and livelihood opportunities in Ethiopia.",
        am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎችን ይደግፉ። ልገሳዎ በኢትዮጵያ ምግብ፣ ልብስ፣ ትምህርት፣ ጤና እና የኑሮ እድሎች ይሰጣል።",
      },
    },
  },
  nav: {
    home: {
      en: "Home",
      am: "መነሻ",
    },
    about: {
      en: "About",
      am: "ስለ እኛ",
    },
    programs: {
      en: "Programs",
      am: "ፕሮግራሞች",
    },
    impact: {
      en: "Impact",
      am: "ተጽእኖ",
    },
    contact: {
      en: "Contact",
      am: "አግኙን",
    },
    donate: {
      en: "Donate Now",
      am: "አሁን ይለገሱ",
    },
  },
  common: {
    sinceBadge: {
      en: "Serving communities since 2012",
      am: "ከ2012 ጀምሮ ማህበረሰብን እያገለገልን ነው",
    },
    getInvolved: {
      en: "Get Involved",
      am: "ተሳትፉ",
    },
    contactUs: {
      en: "Contact Us",
      am: "አግኙን",
    },
    backToHome: {
      en: "Back to Home",
      am: "ወደ መነሻ ተመለስ",
    },
    language: {
      en: "አማርኛ",
      am: "English",
    },
    languageLabel: {
      en: "Language",
      am: "ቋንቋ",
    },
    menuLabel: {
      en: "Menu",
      am: "ምናሌ",
    },
  },
  home: {
    slides: [
      {
        image: "/images/photo_2.jpg",
        kicker: {
          en: "Village of Light",
          am: "የብርሃን ልጆች",
        },
        title: {
          en: "Building Hope",
          am: "ተስፋ እንገነባለን",
        },
        subtitle: {
          en: "Creating opportunities for a brighter future",
          am: "ለብሩህ የመጪ ጊዜ እድሎችን እንፈጥራለን",
        },
      },
      {
        image: "/images/photo_3.jpg",
        kicker: {
          en: "Sustainable Impact",
          am: "ዘላቂ ተጽእኖ",
        },
        title: {
          en: "Sustainable Impact",
          am: "ዘላቂ ተጽእኖ",
        },
        subtitle: {
          en: "Long-term solutions for lasting change",
          am: "ለረጅም ጊዜ ለውጥ ዘላቂ መፍትሄዎች",
        },
      },
      {
        image: "/images/photo_4.jpg",
        kicker: {
          en: "Wide Impact",
          am: "ሰፊ ተጽእኖ",
        },
        title: {
          en: "Wide Impact",
          am: "ሰፊ ተጽእኖ",
        },
        subtitle: {
          en: "Making an impact across communities worldwide",
          am: "በማህበረሰቦች ውስጥ ተጽእኖ እያደረግን ነው",
        },
      },
    ],
    slideLabel: {
      en: "Slide",
      am: "ስላይድ",
    },
    supportedBeneficiaries: {
      value: "51",
      label: {
        en: "People on permanent sponsorship",
        am: "ቀጣይ ድጋፍ ላይ ያሉ ተጠቃሚዎች",
      },
    },
    backgroundImage: "/images/logo.png",
    communityImage: "/images/photo_1_2026-08-06_20-40-36.jpg",
    communityImageAlt: {
      en: "Village of Light community",
      am: "የብርሃን ልጆች ማህበረሰብ",
    },
    heroNote: {
      en: "A national non-profit caring for children and the elderly across Ethiopia.",
      am: "በኢትዮጵያ ለልጆችና ለሽማግሌዎች እንክብካቤ የሚያደርግ ብሔራዊ ለጋስ ድርጅት።",
    },
    ctaPrograms: {
      en: "Explore Our Programs",
      am: "ፕሮግራሞቻችንን ይወቁ",
    },
    ticker: [
      {
        en: "2,000+ students supported",
        am: "2,000+ ተማሪዎች ተደግፈዋል",
      },
      {
        en: "567 people treated",
        am: "567 ሰዎች ነጻ ሕክምና አግኝተዋል",
      },
      {
        en: "6,000+ meals served",
        am: "6,000+ ምግብ ቀርቦአል",
      },
      {
        en: "4,200+ clothed with care",
        am: "4,200+ ሰዎች ልብስ ተሰጥቷቸዋል",
      },
      {
        en: "70 employed with dignity",
        am: "70 ሰዎች በሥራ ተግብረዋል",
      },
      {
        en: "625 students in school today",
        am: "625 ተማሪዎች ዛሬ በትምህርት ላይ ናቸው",
      },
    ],
    programsKicker: {
      en: "What we do",
      am: "የምንሠራው",
    },
    programsTitle: {
      en: "Core Programs",
      am: "ዋና ዋና ፕሮግራሞች",
    },
    programsIntro: {
      en: "Our initiatives focus on sustainable development and community empowerment",
      am: "ተነሳሽነቶቻችን በዘላቂ ልማትና በማህበረሰብ ብቃት ማሳደግ ላይ ያተኮሩ ናቸው",
    },
    programsList: [
      {
        title: {
          en: "Education Initiative",
          am: "የትምህርት ተነሳሽነት",
        },
        text: {
          en: "Providing quality education and learning resources to underserved communities",
          am: "ለበጎ አድራጎት ማህበረሰቦች ጥራት ያለው ትምህርትና የመማሪያ ግብዓቶችን በማቅረብ ላይ",
        },
        image: "/images/Education2.jpg",
      },
      {
        title: {
          en: "Healthcare Access",
          am: "የጤና አገልግሎት ተደራሽነት",
        },
        text: {
          en: "Ensuring basic healthcare services and medical support for those in need",
          am: "ለሚያስፈልጋቸው መሰረታዊ የጤና አገልግሎቶችንና የሕክምና ድጋፍ ማረጋገጥ",
        },
        image: "/images/healthcare2.jpg",
      },
      {
        title: {
          en: "Sustainable Development",
          am: "ዘላቂ ልማት",
        },
        text: {
          en: "Promoting environmental sustainability and community resilience programs",
          am: "የአካባቢ ዘላቂነትንና የማህበረሰብ ችሎታ መገንባትን ማስተዋወቅ",
        },
        image: "/images/Sustainable_Dev.jpg",
      },
      {
        title: {
          en: "Skills Training",
          am: "የክህሎት ስልጠና",
        },
        text: {
          en: "Empowering individuals with vocational skills for economic independence",
          am: "ግለሰቦችን በሙያ ክህሎት ኃይል በማገዝ ለኢኮኖሚ ገንዘብ የራስ ገቢ ማግኘት",
        },
        image: "/images/training.png",
      },
    ],
    impactKicker: {
      en: "Numbers that matter",
      am: "የሚናገሩ ቁጥሮች",
    },
    impactTitle: {
      en: "Our Impact",
      am: "ተጽእኖአችን",
    },
    impactIntro: {
      en: "Supporting children and older people through education, healthcare, and social assistance in Ethiopia.",
      am: "በኢትዮጵያ ልጆችንና ሽማግሌዎችን በትምህርት፣ በጤና እና በማህበራዊ ድጋፍ መደገፍ።",
    },
    stats: [
      {
        value: 2000,
        suffix: "+",
        label: {
          en: "Students Supported",
          am: "ተደግፈዋል የሚሉ ተማሪዎች",
        },
        text: {
          en: "Children supported with educational assistance and learning materials",
          am: "በትምህርት ድጋፍና በመማሪያ ግብዓቶች የተደገፉ ልጆች",
        },
      },
      {
        value: 567,
        suffix: "",
        label: {
          en: "People Treated",
          am: "ሕክምና ያገኙ ሰዎች",
        },
        text: {
          en: "People who have received free medical treatment",
          am: "ነጻ ሕክምና የተቀበሉ ሰዎች",
        },
      },
      {
        value: 4200,
        suffix: "+",
        label: {
          en: "People Supported With Clothing",
          am: "በልብስ የተደገፉ ሰዎች",
        },
        text: {
          en: "Children and older people who have received clothing assistance",
          am: "ልብስ የተሰጣቸው ልጆችና ሽማግሌዎች",
        },
      },
      {
        value: 6000,
        suffix: "+",
        label: {
          en: "Meals Served",
          am: "የቀረቡ ምግቦች",
        },
        text: {
          en: "Meals provided through social support and feeding activities",
          am: "በማህበራዊ ድጋፍና በመመገቢያ እንቅስቃሴዎች የቀረቡ ምግቦች",
        },
      },
    ],
  },
  about: {
    foundedYear: "2012",
    heroImage: "/images/photo_12_2026-08-06_20-40-36.jpg",
    storyImage: "/images/photo_1_2026-08-06_20-40-36.jpg",
    badge: {
      en: "Since 2012",
      am: "ከ2012 ጀምሮ",
    },
    title: {
      en: "Our Story & Mission",
      am: "ታሪካችንና ተልዕኮአችን",
    },
    intro: {
      en: "Founded with a vision to create lasting change in communities worldwide, we have grown from a small grassroots initiative into a global organization making measurable impact. Our mission is to empower individuals and communities through sustainable development programs that create opportunities for growth and self-reliance.",
      am: "በማህበረሰቦች ውስጥ ዘላቂ ለውጥ የማምጣት ራዕይ የተጀመረው ድርጅታችን ከትንሽ የማህበረሰብ ተነሳሽነት ወደ መለኪያ ሊሆን የሚችል ተጽእኖ ወደሚያመጣ ዓለም አቀፍ ድርጅት አድጓል። ተልዕኮአችን ግለሰቦችንና ማህበረሰቦችን በዘላቂ የልማት ፕሮግራሞች ማግብባት ነው — የእድገትና የራስ ገንዘብ እድሎችን የሚፈጥሩ።",
    },
    storyKicker: {
      en: "Our Story",
      am: "ታሪካችን",
    },
    whoTitle: {
      en: "Who We Are",
      am: "ማን ነን",
    },
    whoText: {
      en: "We are a dedicated team of passionate individuals committed to creating sustainable change through innovative programs and community partnerships.",
      am: "በፈጠራ ፕሮግራሞችና በማህበረሰብ አጋርነት ዘላቂ ለውጥ ለመፍጠር ቁርጠኛ የሆኑ ሰዎች ቡድን ነን።",
    },
    values: [
      {
        title: {
          en: "Transparency",
          am: "ግልጽነት",
        },
        text: {
          en: "We maintain complete transparency in our operations and financial reporting",
          am: "በስራዎቻችንና በገንዘብ ሪፖርቶቻችን ሙሉ ግልጽነት እንጠብቃለን",
        },
      },
      {
        title: {
          en: "Community-First",
          am: "ማህበረሰብ-መጀመሪያ",
        },
        text: {
          en: "Our programs are designed with and for the communities we serve",
          am: "ፕሮግራሞቻችን ከማህበረሰቡ ጋርና ለማህበረሰቡ ተዘጋጅተዋል",
        },
      },
      {
        title: {
          en: "Impact-Driven",
          am: "ተጽእኖ-ተኮር",
        },
        text: {
          en: "Every initiative is measured by its tangible impact on people’s lives",
          am: "እያንዳንዱ ተነሳሽነት በሕይወት ላይ ባለው ተጨባጭ ተጽእኖ ይሰፈራል",
        },
      },
      {
        title: {
          en: "Compassion",
          am: "ርህራሄ",
        },
        text: {
          en: "We approach every challenge with empathy and genuine care for others",
          am: "እያንዳንዱን ፈተና በሐዘን ስሜትና በእውነተኛ ውዳሴ እናቀራጋለን",
        },
      },
    ],
    whyTitle: {
      en: "Why We Do It",
      am: "ለምን እንሠራለን",
    },
    whyIntro: {
      en: "We believe that everyone deserves access to basic necessities, education, and opportunities to thrive. Our work is driven by the conviction that sustainable change is possible when communities are empowered with the right resources and support.",
      am: "ሁሉም ሰው መሰረታዊ ፍላጎቶችን፣ ትምህርትንና የማደግ እድሎችን መድረስ አለበት ብለን እናምናለን። ሥራችን ማህበረሰቦች በትክክለኛ ግብዓቶችና ድጋፍ ሲታገዙ ዘላቂ ለውጥ ሊመጣ ይችላል የሚለው እምነት ላይ የተመሠረተ ነው።",
    },
    whyPoints: [
      {
        strong: {
          en: "Education is a fundamental right",
          am: "ትምህርት መሰረታዊ መብት ነው",
        },
        text: {
          en: "We work to ensure every child has access to quality education",
          am: "እያንዳንዱ ልጅ ጥራት ያለው ትምህርት ማግኘት እንዲችል እንሠራለን",
        },
      },
      {
        strong: {
          en: "Healthcare should be accessible",
          am: "የጤና አገልግሎት ተደራሽ መሆን አለበት",
        },
        text: {
          en: "We bridge gaps in healthcare access for underserved communities",
          am: "ለተጋላጭ ማህበረሰቦች የጤና አገልግሎት ክፍተቶችን እንደምላለን",
        },
      },
      {
        strong: {
          en: "Economic empowerment creates change",
          am: "የኢኮኖሚ ብቃት ለውጥ ያመጣል",
        },
        text: {
          en: "We provide skills training and resources for self-sufficiency",
          am: "ለራስ ገቢ ማግኘት የክህሎት ስልጠናና ግብዓቶችን እንሰጣለን",
        },
      },
      {
        strong: {
          en: "Sustainability matters",
          am: "ዘላቂነት አስፈላጊ ነው",
        },
        text: {
          en: "Our programs are designed for long-term impact and community ownership",
          am: "ፕሮግራሞቻችን ለረጅም ጊዜ ተጽእኖና ለማህበረሰብ ባለቤትነት ተነድፈዋል",
        },
      },
    ],
    impactTitle: {
      en: "Our Community Impact",
      am: "የማህበረሰብ ተጽእኖአችን",
    },
    impactIntro: {
      en: "Every number represents a life touched, a hope restored, and a community strengthened.",
      am: "እያንዳንዱ ቁጥር የሚደነቅ ሕይወት፣ የተመለሰ ተስፋና የተጠናከረ ማህበረሰብ ይወክላል።",
    },
    impactStats: [
      {
        value: "6,000+",
        label: {
          en: "People served meals on various occasions",
          am: "በተለያዩ አጋጣሚዎች ምግብ የቀረበላቸው ሰዎች",
        },
      },
      {
        value: "4,200",
        label: {
          en: "People provided with clothing assistance",
          am: "ልብስ የተሰጣቸው ሰዎች",
        },
      },
      {
        value: "2,000+",
        label: {
          en: "Students who have received educational assistance and learning materials",
          am: "የትምህርት ድጋፍና መማሪያ ግብዓቶች ያገኙ ተማሪዎች",
        },
      },
      {
        value: "625",
        label: {
          en: "Students currently supported in their education",
          am: "በአሁኑ ጊዜ በትምህርት የሚደገፉ ተማሪዎች",
        },
      },
      {
        value: "567",
        label: {
          en: "People who have received free medical treatment",
          am: "ነጻ ሕክምና ያገኙ ሰዎች",
        },
      },
      {
        value: "70",
        label: {
          en: "People experiencing homelessness supported through employment creation",
          am: "በቀጣይነት ያለው ሥራ ፈጠራ የተደገፉ ቤት ያልላቸው ሰዎች",
        },
      },
    ],
  },
  programs: {
    title: {
      en: "Our Programs & Initiatives",
      am: "ፕሮግራሞቻችንና ተነሳሽነቶቻችን",
    },
    intro1: {
      en: "The Village of Light for Children and the Elderly (VLCE) works to improve the lives of children and elderly people through healthcare, education, social support, sponsorship, and employment creation.",
      am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች (VLCE) በጤና፣ በትምህርት፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በሥራ ፈጠራ የልጆችና የሽማግሌዎችን ሕይወት ለማሻሻል ይሠራል።",
    },
    intro2: {
      en: "Our programs provide practical assistance to people experiencing difficult circumstances while helping children access education, supporting elderly people with their basic needs, and creating opportunities for people to build sustainable livelihoods.",
      am: "ፕሮግራሞቻችን ከቸገር ሁኔታ ጋር ለሚኖሩ ሰዎች ተግባራዊ ድጋፍ ይሰጣሉ፤ ልጆች ትምህርት እንዲያገኙ፣ ሽማግሌዎች መሰረታዊ ፍላጎቶቻቸው እንዲሟሉ እና ሰዎች ዘላቂ ኑሮ እንዲገነቡ እድሎችን ይፈጥራሉ።",
    },
    keyNumbers: [
      {
        value: "5",
        label: {
          en: "Key Programs",
          am: "ዋና ዋና ፕሮግራሞች",
        },
      },
      {
        value: "2012",
        label: {
          en: "Founded",
          am: "የተመሠረተበት",
        },
      },
    ],
    healthcare: {
      badge: {
        en: "Core Initiative",
        am: "ዋና ተነሳሽነት",
      },
      title: {
        en: "Healthcare",
        am: "ጤና",
      },
      p1: {
        en: "Healthcare is one of the primary areas of focus for the Village of Light for Children and the Elderly. VLCE works in collaboration with various institutions to help children and elderly people access the healthcare they need.",
        am: "ጤና ለብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች ከዋና ዋና የትኩረት ዘርፎች አንዱ ነው። VLCE ከተለያዩ ተቋማት ጋር በመተባበር ልጆችና ሽማግሌዎች የሚያስፈልጋቸውን የጤና አገልግሎት እንዲያገኙ ይረዳል።",
      },
      p2: {
        en: "For elderly people, the organization provides free medical services, particularly for conditions commonly affecting older adults, including ear, eye, and dental care. For children, VLCE helps provide treatment for illnesses related to malnutrition and poor hygiene.",
        am: "ለሽማግሌዎች ድርጅቱ ነጻ የሕክምና አገልግሎት ይሰጣል — በተለይ ለሽማግሌዎች የሚያመቹ ሁኔታዎች ጨምሮ የጆሮ፣ የዓይን እና የጥርስ እንክብካቤ። ለልጆች ደግሞ VLCE ከካሣሕና ከችግኝ ጽዳት ጋር ተያይዞ ከሚመነጩ በሽታዎች ለማዳን ይረዳል።",
      },
      bullets: [
        {
          en: "Free medical treatment",
          am: "ነጻ ሕክምና",
        },
        {
          en: "Ear, eye & dental care for elderly people",
          am: "ለሽማግሌዎች የጆሮ፣ የዓይን እና የጥርስ እንክብካቤ",
        },
        {
          en: "Treatment for children affected by malnutrition and poor hygiene",
          am: "ከካሣሕና ከችግኝ ጽዳት የሚጎዱ ልጆች ሕክምና",
        },
        {
          en: "Support for elderly people seeking health insurance",
          am: "የጤና ኢንሹራንስ ለሚፈልጉ ሽማግሌዎች ድጋፍ",
        },
      ],
      statValue: "567",
      statLabel: {
        en: "people have received free medical treatment to date",
        am: "ሰዎች እስካሁን ነጻ ሕክምና አግኝተዋል",
      },
      image: "/images/healthcare.jpg",
    },
    education: {
      title: {
        en: "Education",
        am: "ትምህርት",
      },
      p1: {
        en: "Education is a key area of focus for the Village of Light for Children and the Elderly. Believing that education is essential for overcoming many of society’s challenges, VLCE supports families who are unable to afford their children’s education.",
        am: "ትምህርት ለብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች ዋና የትኩረት ዘርፍ ነው። ትምህርት የማህበረሰብ ብዙ ችግሮችን ለመሻገር አስፈላጊ ነው ብሎ በማመን VLCE የልጆቻቸውን ትምህርት መክፈል የማይችሉ ቤተሰቦችን ይደግፋል።",
      },
      p2: {
        en: "The organization helps children enroll in school, provides tutorial and remedial classes to improve academic performance, and supplies educational materials and school supplies.",
        am: "ድርጅቱ ልጆችን በትምህርት ቤት ማስመዝገብ፣ የትምህርት አፈጻጸምን ለማሻሻል ቲዩተር እና ሪሜዲያል ክፍሎችን መስጠት እና የትምህርት ግብዓቶችንና የትምህርት መሳሪያዎችን ማቅረብ ይረዳል።",
      },
      stat1Value: "2,000+",
      stat1Label: {
        en: "Students supported to date",
        am: "እስካሁን የተደገፉ ተማሪዎች",
      },
      stat2Value: "625",
      stat2Label: {
        en: "Students currently supported",
        am: "በአሁኑ ጊዜ የሚደገፉ ተማሪዎች",
      },
      cards: [
        {
          title: {
            en: "School Enrollment & Support",
            am: "የትምህርት ቤት ምዝገባና ድጋፍ",
          },
          text: {
            en: "Helping children from families who cannot afford their education enroll in school and continue their studies.",
            am: "ትምህርታቸውን መንቀል የማይችሉ ቤተሰቦች ልጆችን በትምህርት ቤት ማስመዝገብና ጥናታቸውን መቀጠል መርዳት።",
          },
        },
        {
          title: {
            en: "Educational Materials",
            am: "የትምህርት ግብዓቶች",
          },
          text: {
            en: "Providing students with educational materials and school supplies to support their learning.",
            am: "ተማሪዎች መማራቸውን ለመደገፍ የትምህርት ግብዓቶችንና የትምህርት መሳሪያዎችን ማቅረብ።",
          },
        },
        {
          title: {
            en: "Tutorial & Remedial Classes",
            am: "ቲዩተርና ሪሜዲያል ክፍሎች",
          },
          text: {
            en: "Providing tutorial and remedial classes to help students improve their academic performance.",
            am: "ተማሪዎች የትምህርት አፈጻጸማቸውን እንዲያሻሽሉ ቲዩተር እና ሪሜዲያል ክፍሎችን መስጠት።",
          },
        },
      ],
      image: "/images/Education.jpg",
    },
    social: {
      title: {
        en: "Social Support",
        am: "ማህበራዊ ድጋፍ",
      },
      p1: {
        en: "Children and elderly people often need daily support with food, clothing, and other basic necessities. VLCE provides practical assistance to help vulnerable people meet these needs and live with dignity.",
        am: "ልጆችና ሽማግሌዎች ብዙ ጊዜ በምግብ፣ በልብስ እና በሌሎች መሰረታዊ ፍላጎቶች የዕለት ተዕለት ድጋፍ ያስፈልጋቸዋል። VLCE ተጋላጭ ሰዎች እነዚህን ፍላጎቶች እንዲያሟሉ እና በክብር እንዲኖሩ ተግባራዊ ድጋፍ ይሰጣል።",
      },
      cards: [
        {
          title: {
            en: "Agape — Table of Love",
            am: "አጋፔ — የፍቅር ማዕድ",
          },
          text: {
            en: "Through the Agape feeding program, elderly people receive one free meal each day at the organization.",
            am: "በአጋፔ መመገቢያ ፕሮግራም ሽማግሌዎች በድርጅቱ ውስጥ በቀን አንድ ነጻ ምግብ ያገኛሉ።",
          },
        },
        {
          title: {
            en: "Clothing Assistance",
            am: "የልብስ ድጋፍ",
          },
          text: {
            en: "VLCE provides clothing to children and elderly people who need essential support.",
            am: "VLCE አስፈላጊ ድጋፍ ለሚያስፈልጋቸው ልጆችና ሽማግሌዎች ልብስ ይሰጣል።",
          },
        },
        {
          title: {
            en: "Holiday Support",
            am: "የበዓል ድጋፍ",
          },
          text: {
            en: "Special assistance helps beneficiaries celebrate important holidays with their families.",
            am: "ልዩ ድጋፍ ተጠቃሚዎች አስፈላጊ በዓላትን ከቤተሰቦቻቸው ጋር እንዲያከብሩ ይረዳል።",
          },
        },
      ],
      stats: [
        {
          value: "4,200",
          label: {
            en: "People provided with clothing",
            am: "ልብስ የተሰጣቸው ሰዎች",
          },
        },
        {
          value: "3,600+",
          label: {
            en: "People receiving holiday support",
            am: "የበዓል ድጋፍ የሚያገኙ ሰዎች",
          },
        },
        {
          value: "6,000+",
          label: {
            en: "People served meals on various occasions",
            am: "በተለያዩ አጋጣሚዎች ምግብ የቀረበላቸው ሰዎች",
          },
        },
      ],
      image: "/images/Social_Support.jpg",
    },
    agape: {
      title: {
        en: "Agape Program",
        am: "አጋፔ ፕሮግራም",
      },
      p1: {
        en: "The Agape meal service program organized by Birhan Lijoch is gaining good momentum, bringing meals to elderly people and community members through the support of catering organizations and community groups.",
        am: "በብርሃን ልጆች የተዘጋጀው የአጋፔ ምግብ አገልግሎት ፕሮግራም ጥሩ እድገት እያደረገ ነው — በካተሪንግ ድርጅቶችና በማህበረሰብ ቡድኖች ድጋፍ ለሽማግሌዎችና ለማህበረሰብ አባላት ምግብ እያመጣ ነው።",
      },
      feastTitle: {
        en: "Agape Love Feast Program",
        am: "የአጋፔ የፍቅር ግብዣ ፕሮግራም",
      },
      feastText: {
        en: "Celebrate your weddings, birthdays, and memorial gatherings with the children and elderly of Village of Light.",
        am: "የሰርግ፣ የልደት እና የመታሰቢያ ስብሰባዎችዎን ከብርሃን ልጆች መንደር ልጆችና ሽማግሌዎች ጋር ይከብሩ።",
      },
      servedValue: "1,130",
      servedLabel: {
        en: "People served through completed Agape meal services",
        am: "በተጠናቀቁ የአጋፔ ምግብ አገልግሎቶች ምግብ የቀረበላቸው ሰዎች",
      },
      mealsTitle: {
        en: "Meal Service Activities",
        am: "የምግብ አገልግሎት እንቅስቃሴዎች",
      },
      meals: [
        {
          date: {
            en: "May 15",
            am: "ግንቦት 15",
          },
          count: {
            en: "50 people",
            am: "50 ሰዎች",
          },
          by: {
            en: "Served through Mimisho Catering",
            am: "በሚሚሾ ካተሪንግ አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "June 20",
            am: "ሰኔ 20",
          },
          count: {
            en: "60 people",
            am: "60 ሰዎች",
          },
          by: {
            en: "Served through Blen Agelgil",
            am: "በብሌን አገልግሎት አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "July 13",
            am: "ሐምሌ 13",
          },
          count: {
            en: "50 people",
            am: "50 ሰዎች",
          },
          by: {
            en: "Served through Blen Agelgil",
            am: "በብሌን አገልግሎት አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "July 14",
            am: "ሐምሌ 14",
          },
          count: {
            en: "150 people",
            am: "150 ሰዎች",
          },
          by: {
            en: "Served through Gebeta Catering",
            am: "በገበታ ካተሪንግ አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "July 26",
            am: "ሐምሌ 26",
          },
          count: {
            en: "100 people",
            am: "100 ሰዎች",
          },
          by: {
            en: "Served through Gebeta Catering",
            am: "በገበታ ካተሪንግ አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "July 29",
            am: "ሐምሌ 29",
          },
          count: {
            en: "180 people",
            am: "180 ሰዎች",
          },
          by: {
            en: "Served through Gebeta Catering",
            am: "በገበታ ካተሪንግ አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "August 22",
            am: "ነሐሴ 22",
          },
          count: {
            en: "70 people",
            am: "70 ሰዎች",
          },
          by: {
            en: "Served through Blen Agelgil",
            am: "በብሌን አገልግሎት አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "August 23",
            am: "ነሐሴ 23",
          },
          count: {
            en: "320 people",
            am: "320 ሰዎች",
          },
          by: {
            en: "Served through Gebeta Catering",
            am: "በገበታ ካተሪንግ አማካኝነት ቀርቧል",
          },
        },
        {
          date: {
            en: "August 25",
            am: "ነሐሴ 25",
          },
          count: {
            en: "150 people",
            am: "150 ሰዎች",
          },
          by: {
            en: "Served through Kidane Mihret Mahiber",
            am: "በኪዳነ ምሕረት ማሕበር አማካኝነት ቀርቧል",
          },
        },
      ],
      inviteTitle: {
        en: "Invite the Agape Program to Your Event",
        am: "የአጋፔ ፕሮግራምን ወደ ዝግጅትዎ ይጋብዙ",
      },
      inviteText: {
        en: "You, too, can invite Birhan Lijoch’s Agape Program to provide meals for weddings, birthdays, memorial feasts, or association gatherings.",
        am: "እርስዎም ለሰርግ፣ ለልደት፣ ለመታሰቢያ ወይም ለማሕበር ስብሰባዎች ምግብ እንዲያቀርቡ የብርሃን ልጆች የአጋፔ ፕሮግራምን መጋበዝ ይችላሉ።",
      },
    },
    bego: {
      title: {
        en: "Bego Maed Sponsorship Project",
        am: "የበጎ ማዕድ ስፖንሰርሺፕ ፕሮጀክት",
      },
      intro: {
        en: "The Bego Maed Sponsorship Project was launched in June 2014 to provide ongoing support to children and older people living in difficult circumstances.",
        am: "የበጎ ማዕድ ስፖንሰርሺፕ ፕሮጀክት በሰኔ 2014 ተጀምሮ ከቸገር ሁኔታ ጋር ለሚኖሩ ልጆችና ሽማግሌዎች ቀጣይ ድጋፍ ለመስጠት ነው።",
      },
      stats: [
        {
          value: "51",
          label: {
            en: "Children and seniors currently receiving permanent support",
            am: "በአሁኑ ጊዜ ቀጣይ ድጋፍ የሚያገኙ ልጆችና ሽማግሌዎች",
          },
        },
        {
          value: "2014",
          label: {
            en: "Sponsorship project launched",
            am: "ስፖንሰርሺፕ ፕሮጀክት የተጀመረበት",
          },
        },
        {
          value: {
            en: "1,500 ETB",
            am: "1,500 ብር",
          },
          label: {
            en: "Monthly support provided to each beneficiary",
            am: "ለእያንዳንዱ ተጠቃሚ የሚሰጥ የወር ድጋፍ",
          },
        },
      ],
      whoTitle: {
        en: "Who the Project Supports",
        am: "ፕሮጀክቱ የሚደግፈው",
      },
      whoPoints: [
        {
          en: "Elderly people aged 60 years and above who have no caregivers or family support.",
          am: "እንክብካቤ ሰጪ ወይም የቤተሰብ ድጋፍ የሌላቸው 60 ዓመትና ከዚያ በላይ ሽማግሌዎች።",
        },
        {
          en: "Individuals aged 55 years and above who are unable to work because of health-related conditions.",
          am: "ከጤና ጉዳዮች የተነሣ መሥራት የማይችሉ 55 ዓመትና ከዚያ በላይ ግለሰቦች።",
        },
        {
          en: "Children and seniors who require ongoing assistance to meet their basic needs.",
          am: "መሰረታዊ ፍላጎቶቻቸውን ለማሟላት ቀጣይ ድጋፍ የሚያስፈልጋቸው ልጆችና ሽማግሌዎች።",
        },
      ],
      currentTitle: {
        en: "Current Support",
        am: "የአሁኑ ድጋፍ",
      },
      currentText: {
        en: "VLCE currently provides permanent support to 33 children and 18 seniors, for a total of 51 beneficiaries. Each beneficiary receives 1,500 Ethiopian Birr per month to help meet basic needs.",
        am: "VLCE በአሁኑ ጊዜ ለ33 ልጆች እና ለ18 ሽማግሌዎች — በድምሩ 51 ተጠቃሚዎች — ቀጣይ ድጋፍ ይሰጣል። እያንዳንዱ ተጠቃሚ መሰረታዊ ፍላጎቶችን ለማሟላት በወር 1,500 ብር ያገኛል።",
      },
    },
    behuman: {
      title: {
        en: "“Be Human” Employment Creation Project",
        am: '"Be Human" የሥራ ፈጠራ ፕሮጀክት',
      },
      intro: {
        en: "The Be Human Employment Creation Project recognizes that sustainable employment is essential for people to become self-reliant. The project creates job opportunities that enable beneficiaries to earn a living using their skills and professions.",
        am: 'የ"Be Human" የሥራ ፈጠራ ፕሮጀክት ዘላቂ ሥራ ሰዎች ራሳቸውን እንዲተናብቡ አስፈላጊ መሆኑን ይተረዳል። ፕሮጀክቱ ተጠቃሚዎች ክህሎታቸውንና ሙያቸውን ተጠቅመው ገቢ እንዲፈጥሩ የሥራ እድሎችን ይፈጥራል።',
      },
      stats: [
        {
          value: "70",
          label: {
            en: "People experiencing homelessness provided with sustainable employment opportunities",
            am: "በቀጣይነት ያለው ሥራ እድል የተሰጣቸው ቤት ያልላቸው ሰዎች",
          },
        },
        {
          value: "50",
          label: {
            en: "Additional people provided with employment opportunities",
            am: "ተጨማሪ ሰዎች የሥራ እድል የተሰጣቸው",
          },
        },
        {
          value: {
            en: "409,000+ ETB",
            am: "409,000+ ብር",
          },
          label: {
            en: "Invested in employment support for people experiencing homelessness",
            am: "በቤት ያልላቸው ሰዎች የሥራ ድጋፍ ላይ የተካሄደ ኢንቨስትመንት",
          },
        },
        {
          value: {
            en: "1M+ ETB",
            am: "1M+ ብር",
          },
          label: {
            en: "Invested in livelihood initiatives overall",
            am: "በኑሮ ተነሳሽነቶች ላይ በአጠቃላይ የተካሄደ ኢንቨስትመንት",
          },
        },
      ],
      areasTitle: {
        en: "Employment Areas",
        am: "የሥራ ዘርፎች",
      },
      areas: [
        {
          en: "Poultry Farming",
          am: "የዶሮ እርባታ",
        },
        {
          en: "Shower & Bathing Services",
          am: "የሻወር እና የመታጠቢያ አገልግሎቶች",
        },
        {
          en: "Tea & Coffee Businesses",
          am: "የሻይና ቡና ንግዶች",
        },
        {
          en: "Public Toilet Services",
          am: "የሕዝባዊ መታጠቢያ አገልግሎቶች",
        },
        {
          en: "Tailoring",
          am: "ልብስ ስፌት",
        },
        {
          en: "Men’s & Women’s Hairdressing",
          am: "የወንዶችና የሴቶች ፀጉር መቁረጫ",
        },
      ],
      image: "/images/photo_12_2026-08-06_20-40-36.jpg",
    },
  },
  impact: {
    title: {
      en: "Our Impact & Milestones",
      am: "ተጽእኖአችንና ምልክቶቻችን",
    },
    intro: {
      en: "Since 2012, Village of Light for Children and the Elderly has supported vulnerable children and older people through education, healthcare, social assistance, sponsorship, and livelihood opportunities.",
      am: "ከ2012 ጀምሮ የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች ተጋላጭ ልጆችንና ሽማግሌዎችን በትምህርት፣ በጤና፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በኑሮ እድሎች ይደግፋል።",
    },
    badge: {
      en: "Serving communities in Ethiopia since 2012",
      am: "ከ2012 ጀምሮ በኢትዮጵያ ማህበረሰቦችን እያገለገልን ነው",
    },
    achievementsTitle: {
      en: "What Our Work Has Achieved",
      am: "ሥራችን ያስመዘገበው",
    },
    achievementsIntro: {
      en: "Our work supports children and older people through education, healthcare, food, clothing, and livelihood opportunities.",
      am: "ሥራችን ልጆችንና ሽማግሌዎችን በትምህርት፣ በጤና፣ በምግብ፣ በልብስ እና በኑሮ እድሎች ይደግፋል።",
    },
    stats: [
      {
        value: "6,000+",
        label: {
          en: "People served meals on various occasions",
          am: "በተለያዩ አጋጣሚዎች ምግብ የቀረበላቸው ሰዎች",
        },
      },
      {
        value: "4,200",
        label: {
          en: "People provided with clothing assistance",
          am: "ልብስ የተሰጣቸው ሰዎች",
        },
      },
      {
        value: "2,000+",
        label: {
          en: "Students who have received educational assistance and learning materials",
          am: "የትምህርት ድጋፍና መማሪያ ግብዓቶች ያገኙ ተማሪዎች",
        },
      },
      {
        value: "625",
        label: {
          en: "Students currently supported in their education",
          am: "በአሁኑ ጊዜ በትምህርት የሚደገፉ ተማሪዎች",
        },
      },
      {
        value: "567",
        label: {
          en: "People who have received free medical treatment",
          am: "ነጻ ሕክምና ያገኙ ሰዎች",
        },
      },
      {
        value: "70",
        label: {
          en: "People experiencing homelessness supported through employment creation",
          am: "በቀጣይነት ያለው ሥራ ፈጠራ የተደገፉ ቤት ያልላቸው ሰዎች",
        },
      },
    ],
    directTitle: {
      en: "Direct Support for People in Need",
      am: "ለሚያስፈልጋቸው ሰዎች ቀጥተኛ ድጋፍ",
    },
    directText: {
      en: "VLCE provides practical support to vulnerable children and older people through food, clothing, healthcare, education, holiday assistance, and sponsorship. Through programs such as the Agape feeding program and Bego Maed sponsorship, the organization continues to provide ongoing assistance to people facing difficult circumstances.",
      am: "VLCE ተጋላጭ ልጆችንና ሽማግሌዎችን በምግብ፣ በልብስ፣ በጤና፣ በትምህርት፣ በበዓል ድጋፍ እና በስፖንሰርሺፕ ተግባራዊ ድጋፍ ይሰጣል። በአጋፔ መመገቢያ ፕሮግራምና በበጎ ማዕድ ስፖንሰርሺፕ በመሳሰሉ ፕሮግራሞች ድርጅቱ ከቸገር ሁኔታ ጋር ለሚኖሩ ሰዎች ቀጣይ ድጋፍ መስጠቱን ቀጥሏል።",
    },
    directTags: [
      {
        en: "Food assistance",
        am: "የምግብ ድጋፍ",
      },
      {
        en: "Healthcare",
        am: "ጤና",
      },
      {
        en: "Education",
        am: "ትምህርት",
      },
      {
        en: "Clothing support",
        am: "የልብስ ድጋፍ",
      },
    ],
    journeyTitle: {
      en: "Our Journey",
      am: "ጉዟችን",
    },
    journeyIntro: {
      en: "Key milestones in VLCE’s work supporting children and older people since 2012.",
      am: "ከ2012 ጀምሮ ልጆችንና ሽማግሌዎችን በመደገፍ ሥራችን ውስጥ ዋና ዋና ምልክቶች።",
    },
    timeline: [
      {
        year: "2012",
        title: {
          en: "VLCE Founded",
          am: "VLCE ተመሠረተ",
        },
        text: {
          en: "Village of Light for Children and the Elderly (VLCE) began operating on August 1, 2012, to assist children and older people living on the streets and in the vicinity of churches.",
          am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች (VLCE) ነሐሴ 1 ቀን 2012 መሥራት ጀምሯል — በመንገድ ላይና በቤተክርስቲያን አቅራቢያ ለሚኖሩ ልጆችና ሽማግሌዎች ለመርዳት።",
        },
      },
      {
        year: "2013",
        title: {
          en: "Holiday Assistance",
          am: "የበዓል ድጋፍ",
        },
        text: {
          en: "VLCE provided holiday assistance to vulnerable families, slaughtering 6 bulls for Christmas and 7 bulls for Easter and providing oil and meat to a total of 460 families.",
          am: "VLCE ለተጋላጭ ቤተሰቦች የበዓል ድጋፍ ሰጥቷል — ለገና 6 ኮረጆች እና ለፋሲካ 7 ኮረጆች አርዶ ለጠቅላላ 460 ቤተሰቦች ዘይትና ሥጋ ሰጥቷል።",
        },
      },
      {
        year: "2014",
        title: {
          en: "Bego Maed Sponsorship Begins",
          am: "የበጎ ማዕድ ስፖንሰርሺፕ ጀመረ",
        },
        text: {
          en: "VLCE launched the Bego Maed Sponsorship Program to provide ongoing support to children and older people living in difficult circumstances.",
          am: "VLCE ከቸገር ሁኔታ ጋር ለሚኖሩ ልጆችና ሽማግሌዎች ቀጣይ ድጋፍ ለመስጠት የበጎ ማዕድ ስፖንሰርሺፕ ፕሮግራም አስጀምሯል።",
        },
      },
      {
        year: "2022",
        title: {
          en: "Cash & Food Assistance",
          am: "የገንዘብና የምግብ ድጋፍ",
        },
        text: {
          en: "VLCE provided 270 individuals with cash assistance of 800 Ethiopian Birr and one liter of oil each.",
          am: "VLCE ለ270 ግለሰቦች እያንዳንዱ 800 ብር የገንዘብ ድጋፍ እና አንድ ሊትር ዘይት ሰጥቷል።",
        },
      },
      {
        year: "2023",
        title: {
          en: "Holiday Support",
          am: "የበዓል ድጋፍ",
        },
        text: {
          en: "VLCE provided Christmas support to 50 people at a cost of 2,000 Ethiopian Birr per person. For Easter, financial assistance was provided to 390 individuals.",
          am: "VLCE ለ50 ሰዎች እያንዳንዱ 2,000 ብር በማውጣት የገና ድጋፍ ሰጥቷል። ለፋሲካ ለ390 ግለሰቦች የገንዘብ ድጋፍ ተሰጥቷል።",
        },
      },
    ],
    storyTitle: {
      en: "Be Part of the Story",
      am: "የታሪኩ አካል ይሁኑ",
    },
    storyText: {
      en: "VLCE is supported by three founders, nine executive board members, 600 registered members, five volunteer ambassadors, and five hired volunteers. Together, they work to support vulnerable children and older people across Ethiopia.",
      am: "VLCE በሦስት መሥራቾች፣ በዘጠኝ የሥራ አስፈጻሚ ቦርድ አባላት፣ በ600 የተመዘገቡ አባላት፣ በአምስት የበጎ ፈቃድ አምባሳደሮች እና በአምስት የተቀጠሩ ተበጋሚዎች ይደገፋል። አብረው በኢትዮጵያ ሙሉ ተጋላጭ ልጆችንና ሽማግሌዎችን ለመደገፍ ይሠራሉ።",
    },
    orgTitle: {
      en: "Our Organization",
      am: "ድርጅታችን",
    },
    org: [
      {
        value: "3",
        label: {
          en: "Founders",
          am: "መሥራቾች",
        },
      },
      {
        value: "9",
        label: {
          en: "Board Members",
          am: "የቦርድ አባላት",
        },
      },
      {
        value: "600",
        label: {
          en: "Registered Members",
          am: "የተመዘገቡ አባላት",
        },
      },
      {
        value: "5",
        label: {
          en: "Volunteer Ambassadors",
          am: "የበጎ ፈቃድ አምባሳደሮች",
        },
      },
      {
        value: "5",
        label: {
          en: "Hired Volunteers",
          am: "የተቀጠሩ ተበጋሚዎች",
        },
      },
    ],
  },
  contact: {
    title: {
      en: "Contact Us!",
      am: "አግኙን!",
    },
    intro: {
      en: "Have questions, suggestions, or want to get involved? Reach out to us and we’ll get back to you as soon as possible. Together, we can make a difference in our community.",
      am: "ጥያቄዎች፣ ሐሳቦች ወይም መሳተፍ ይፈልጋሉ? ያግኙንና በቅርቡ እንመልስልዎታለን። አብረን በማህበረሰባችን ለውጥ ማምጣት እንችላለን።",
    },
    touchTitle: {
      en: "Get in Touch",
      am: "ያግኙን",
    },
    addressTitle: {
      en: "Address",
      am: "አድራሻ",
    },
    address: {
      en: "We are located in the Deru Bolo compound, near Sor Amba Hotel, just up from St. George’s Church (Arada) Addis Ababa, Ethiopia",
      am: "በደሩ ቦሎ ካምፓውንድ፣ በሶር አምባ ሆቴል አቅራቢያ፣ ከቅዱስ ጊዮርጊስ ቤተክርስቲያን (አራዳ) ስፍ ጥቂት በላይ፣ አዲስ አበባ፣ ኢትዮጵያ",
    },
    phoneTitle: {
      en: "Phone",
      am: "ስልክ",
    },
    phoneNumbers: [
      { display: "+251 97 795 9595", href: "tel:+251977959595" },
      { display: "+251 11 749 300", href: "tel:+25111749300" },
    ],
    messageSubject: {
      en: "VLCE website message from",
      am: "የVLCE ድረ-ገጽ መልእክት ከ",
    },
    emailTitle: {
      en: "Email",
      am: "ኢሜይል",
    },
    formTitle: {
      en: "Send us a message",
      am: "መልእክት ይላኩልን",
    },
    formName: {
      en: "Your name",
      am: "ስምዎ",
    },
    formEmail: {
      en: "Your email",
      am: "ኢሜይልዎ",
    },
    formMessage: {
      en: "Your message",
      am: "መልእክትዎ",
    },
    formSend: {
      en: "Send Message",
      am: "መልእክት ላክ",
    },
  },
  donate: {
    badge: {
      en: "Make a Difference",
      am: "ለውጥ ያምጡ",
    },
    title: {
      en: "Support Our Mission",
      am: "ተልዕኮአችንን ይደግፉ",
    },
    intro: {
      en: "Your support helps Village of Light for Children and the Elderly provide meaningful assistance to vulnerable children and older people across Ethiopia.",
      am: "ድጋፍዎ የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች በኢትዮጵያ ሙሉ ተጋላጭ ልጆችና ሽማግሌዎች ትርጉም ያለው ድጋፍ እንዲሰጥ ያግዛል።",
    },
    matterTitle: {
      en: "Your Support Matters",
      am: "ድጋፍዎ የሚጠቅም ነው",
    },
    matterIntro: {
      en: "Every contribution, regardless of its size, can help provide food, clothing, education, healthcare, and livelihood opportunities to people who need them most.",
      am: "እያንዳንዱ አስተዋጽኦ — ምንም ያህል ቢሆንም — ምግብ፣ ልብስ፣ ትምህርት፣ ጤና እና የኑሮ እድሎች ለሚያስፈልጋቸው ሰዎች መቅረብ ይችላል።",
    },
    options: [
      {
        title: {
          en: "Financial Support",
          am: "የገንዘብ ድጋፍ",
        },
        text: {
          en: "Your financial contribution helps us continue our programs and respond to the needs of vulnerable children and older people.",
          am: "የገንዘብ አስተዋጽኦዎ ፕሮግራሞቻችን መቀጠል እና ለተጋላጭ ልጆችና ሽማግሌዎች ፍላጎቶች መምራት ያግዛል።",
        },
      },
      {
        title: {
          en: "In-Kind Donations",
          am: "በእቃ ልገሳ",
        },
        text: {
          en: "You can also support our work by donating useful items such as clothing, educational materials, food, and other essential supplies.",
          am: "ልብስ፣ የትምህርት ግብዓቶች፣ ምግብ እና ሌሎች አስፈላጊ መሳሪያዎችን በመለገስ ሥራችንን መደገፍ ይችላሉ።",
        },
      },
      {
        title: {
          en: "Volunteer Your Time",
          am: "ጊዜዎን ይለግሱ",
        },
        text: {
          en: "Your time and skills can make a meaningful difference. Join our volunteers and help us serve our communities.",
          am: "ጊዜዎና ክህሎትዎ ትርጉም ያለው ለውጥ ማምጣት ይችላሉ። ተበጋሚዎቻችንን ይቀላቀሉና ማህበረሰቦቻችንን አገልገሉ።",
        },
      },
    ],
    howTitle: {
      en: "How to Support VLCE",
      am: "VLCEን እንዴት መደገፍ ይችላሉ",
    },
    howText: {
      en: "You can support VLCE with a financial contribution, by donating useful items, or by giving your time to help our programs. Online donations are on the way — reach out and we will help you right away.",
      am: "VLCEን በገንዘብ አስተዋጽኦ፣ በእቃ ልገሳ ወይም ጊዜዎን በመለገስ መደገፍ ይችላሉ። የመስመር ላይ ልገሳ በቅርቡ ይጀምራል — ያግኙንና ወዲያውኑ እንረዳዎታለን።",
    },
    onlineTitle: {
      en: "Donate Online",
      am: "በመስመር ላይ ይለገሱ",
    },
    moreProviders: {
      en: "& more on the way",
      am: "& ሌሎችም በቅርቡ",
    },
    onlineText: {
      en: "We are setting up secure online donations with Ethiopia’s most trusted payment providers.",
      am: "በኢትዮጵያ በሚታመኑ የክፍያ አገልግሎቶች ደህንነቱ የተጠበቀ የመስመር ላይ ልገሳ እያዘጋጅን ነው።",
    },
    comingSoon: {
      en: "Coming Soon",
      am: "በቅርቡ",
    },
    paymentNote: {
      en: "Until then, you can support us directly — contact us and we will help you arrange your donation.",
      am: "እስከዚያ ድረስ በቀጥታ መደገፍ ይችላሉ — ያግኙንና ልገሳዎን እንዲያደርጉ እንረዳዎታለን።",
    },
    togetherTitle: {
      en: "Together, We Can Make a Difference",
      am: "አብረን ለውጥ ማምጣት እንችላለን",
    },
    togetherText: {
      en: "From meals and clothing assistance to education, healthcare, sponsorship, and employment creation, your support can help us continue making a lasting difference.",
      am: "ከምግብና ልብስ ድጋፍ እስከ ትምህርት፣ ጤና፣ ስፖንሰርሺፕ እና የሥራ ፈጠራ — ድጋፍዎ ዘላቂ ለውጥ መቀጠል እንድንችል ያግዛል።",
    },
    paymentProviders: [
      { name: "Chapa", logo: "/images/payments/chapa.svg" },
      { name: "Telebirr", logo: "/images/payments/tele_birr.svg" },
      { name: "CBE Birr", logo: "/images/payments/cbe_birr_normal.svg" },
      { name: "Amole", logo: "/images/payments/amole.svg" },
      { name: "Kacha", logo: "/images/payments/kacha.svg" },
    ],
  },
  footer: {
    socialLinks: defaultSocialLinks,
    about: {
      en: "Village of Light for Children and the Elderly (VLCE) is a national non-profit humanitarian organization working to support vulnerable children and elderly people through education, healthcare, social support, sponsorship, and livelihood programs.",
      am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች (VLCE) ብሔራዊ ለጋስ ሰብዓዊ ድርጅት ሲሆን ተጋላጭ ልጆችንና ሽማግሌዎችን በትምህርት፣ በጤና፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በኑሮ ፕሮግራሞች ለመደገፍ ይሠራል።",
    },
    quickLinks: {
      en: "Quick Links",
      am: "ፈጣን ማገናኛዎች",
    },
    programsTitle: {
      en: "Our Programs",
      am: "ፕሮግራሞቻችን",
    },
    programsList: [
      {
        en: "Education Support",
        am: "የትምህርት ድጋፍ",
      },
      {
        en: "Healthcare",
        am: "ጤና",
      },
      {
        en: "Social Support",
        am: "ማህበራዊ ድጋፍ",
      },
      {
        en: "Bego Maed Sponsorship",
        am: "የበጎ ማዕድ ስፖንሰርሺፕ",
      },
      {
        en: "Be Human Employment Creation",
        am: "Be Human የሥራ ፈጠራ",
      },
    ],
    contactTitle: {
      en: "Contact Us",
      am: "አግኙን",
    },
    address: {
      en: "Addis Ababa, Ethiopia",
      am: "አዲስ አበባ፣ ኢትዮጵያ",
    },
    email: "villageoflight2020@gmail.com",
    rights: {
      en: "Village of Light for Children and the Elderly (VLCE). All rights reserved.",
      am: "የብርሃን ልጆች መንደር ለልጆችና ለሽማግሌዎች (VLCE)። መብቱ በህግ የተጠበቀ ነው።",
    },
  },
} as const;
