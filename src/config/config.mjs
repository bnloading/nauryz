const config = {
  data: {
    title: "С.Серікбол & А.Балжан тойы",
    description: "С.Серікбол мен А.Балжан — сізді тойға шақырады.",
    groomName: "С.Айбек",
    brideName: "М.Ахсунхар",
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
    // Use images from the `Aibek` folder in public/images
    shareImages: {
      ogImage: "/images/Aibek/Aibek1.jfif",
      thumbnail: "/images/Aibek/Aibek1.jfif",
      couplePhoto: "/images/Aibek/Aibek1.jfif",
      banner: "/images/Aibek/Aibek1.jfif",
      invitation: "/images/Aibek/Aibek1.jfif",
    },
  },
};

export default config;
