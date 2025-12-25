const config = {
  data: {
    title: "С.Серікбол & А.Балжан тойы",
    description: "С.Серікбол мен А.Балжан — сізді тойға шақырады.",
    groomName: "С.Серікбол",
    brideName: "А.Балжан",
    // Invitation info updated per request
    parentGroom: "Әке, Шешесі: (Салдатхан)",
    parentBride: "Сәулеш Аға-жеңгелері",
    date: "2026-01-04",
    time: "18:00",
    location: "Ақ-Тілек тойханасы",
    address: "Цэнгэл сұмыны Ақ-Тілек тойханасы",

    favicon: "/images/favicon.ico",
    agenda: [
      {
        title: "Той",
        date: "2026-01-04",
        startTime: "18:00",
        endTime: "23:00",
        location: "Ақ-Тілек тойханасы",
        address: "Цэнгэл сұмыны Ақ-Тілек тойханасы",
      },
    ],
    audio: {
      src: "/audio/toi.mp3",
      title: "Көңілді әуен",
      autoplay: true,
      loop: true,
    },
    // Use images from the `Jakha` folder in public/images
    shareImages: {
      ogImage: "/images/Jakha/1.jfif",
      thumbnail: "/images/Jakha/2.jfif",
      couplePhoto: "/images/Jakha/3.jfif",
      banner: "/images/Jakha/3.jfif",
      invitation: "/images/Jakha/4.jfif",
    },
  },
};

export default config;
