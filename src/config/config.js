const config = {
  data: {
    title: "Көркембек & Ақбота тойы",
    description: "Көркембек пен Ақбота — сізді тойға шақырады.",
    groomName: "Көркембек",
    brideName: "Ақбота",
    parentGroom: "Махаббат",
    parentBride: "Гүлмайра",
    date: "2026-08-22",
    time: "16:00",
    location: "Алтынел мейрамханасы",
    address: "Қоянды, Алтынел мейрамханасы",
    texts: {
      eventOwnersTitle: "Той иелері:",
      eventProgramTitle: "Той салтанатының бағдарламасы",
      eventProgramSubtitle:
        "Біз сіздерді махаббат жолымыздың басталуының куәгері болуға шақырамыз",
      heroGreeting: "Құрметті қонақтар!",
      heroBanner: "Біздің бақытты күнімізбен бөлісіңіз!",
      heroInvitePrefix: "Cіздерді балаларымыз",
      heroInviteSuffix:
        "Үйлену тойына арналған салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!",
      zoomHint: "Үлкейту",
      invitationButton: "Шақыруды ашу",
      giftsTagline: "Hadiah Pernikahan",
      giftsTitle: "Berikan Hadiah",
      giftsInsyaAllahArabic: "إن شاء الله",
      giftsMainMessage:
        "Insya Allah, Kami Akan Menyalurkan Semua Hadiah yang Diberikan ke Beberapa Masjid dan Lembaga yang Membutuhkan",
      giftsDuaArabic: "جزاكم الله خيرا وبارك الله فيكم",
      giftsDuaLatin: "Jazakumullahu khairan, Barakallah fiikum",
      copy: "Copy",
      copied: "Copied!",
      galleryTagline: "Сәттер жинағы",
      galleryTitle: "Фотогалерея",
    },
    media: {
      appBackground: "/images/Ai.jfif",
      landingBackground: "/images/Ai.jfif",
      landingCover: "/images/Ai.jfif",
      heroMainPhoto: "/images/Ai.jfif",
      videoSlides: ["/images/Ai.jfif", "/images/Ai.jfif"],
      preloaderPriority: ["/images/Ai.jfif", "/images/Ai.jfif"],
      preloaderGallery: [
        "/images/Saya/3.JPEG",
        "/images/Saya/4.JPEG",
        "/images/Saya/5.JPEG",
        "/images/Saya/6.JPEG",
        "/images/Saya/7.JPEG",
        "/images/Saya/8.JPEG",
        "/images/Saya/9.JPEG",
        "/images/Saya/11.jpg",
        "/images/Saya/12.jpg",
        "/images/Saya/13.jpg",
      ],
      galleryPhotos: [
        {
          id: 1,
          src: "/images/Ai.jfif",
          alt: "Сурет-1",
          description: "Сурет-1",
          mode: "cover",
        },
        {
          id: 2,
          src: "/images/ai2.jfif",
          alt: "Сурет-2",
          description: "Сурет-2",
          mode: "cover",
        },
        {
          id: 3,
          src: "/images/Ai.jfif",
          alt: "Сурет-3",
          description: "Сурет-3",
          mode: "cover",
        },
        {
          id: 4,
          src: "/images/ai2.jfif",
          alt: "Сурет-4",
          description: "Сурет-4",
          mode: "cover",
        },
        {
          id: 5,
          src: "/images/Ai.jfif",
          alt: "Сурет-5",
          description: "Сурет-5",
          mode: "cover",
        },
        {
          id: 6,
          src: "/images/ai2.jfif",
          alt: "Сурет-6",
          description: "Сурет-6",
          mode: "contain",
        },
      ],
    },
    calendar: {
      monthLabel: "Тамыз",
      daysOfWeek: ["Дүй", "Сей", "Сәр", "Бей", "Жұм", "Сен", "Жек"],
      firstDayOffset: 5,
      markedDate: 22,
    },

    maps_url: "https://2gis.kz/astana/geo/70000001066179111",
    maps_embed:
      "https://www.openstreetmap.org/export/embed.html?bbox=71.6205%2C51.2732%2C71.6271%2C51.2763&layer=mapnik&marker=51.274762%2C71.623814",

    favicon: "/images/favicon.ico",
    agenda: [
      {
        title: "Той",
        date: "2026-08-22",
        startTime: "16:00",
        endTime: "00:00",
        location: "Алтынел мейрамханасы",
        address: "Қоянды, Алтынел мейрамханасы",
      },
    ],
    audio: {
      src: "/audio/toi.mp3",
      title: "Көңілді әуен",
      autoplay: true,
      loop: true,
      toastDuration: 3000,
    },
    gifts: {
      accounts: [
        {
          bank: "Kaspi Bank",
          accountName: "Korkembek A.",
          accountNumber: "0000 0000 0000 0000",
        },
      ],
    },
    shareImages: {
      ogImage: "/images/Ai.jfif",
      thumbnail: "/images/ai2.jfif",
      couplePhoto: "/images/Ai.jfif",
      banner: "/images/ai2.jfif",
      invitation: "/images/Ai.jfif",
    },
  },
};

export default config;
