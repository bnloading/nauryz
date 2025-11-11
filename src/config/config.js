const config = {
  data: {
    title: "Ғасыртілек & Гүлнур той салтанаты",
    description:
      "Біз үйленеміз және сізді осы қуанышты сәтті бізбен бірге тойлауға шақырамыз.",
    groomName: "Ғасыртілек",
    brideName: "Гүлнур",
    // Updated from invitation image: date, time, location and address
    parentGroom: "Амантай",
    parentBride: "БұлбҰл",
    date: "2025-11-22",
    time: "17:00",
    location: "ДАЯН РЕСОРТ 1",
    address: "ДАЯН РЕСОРТ 1 тойханасы",
    maps_url: "https://maps.app.goo.gl/WGGsiK1LYiq2mKmm9",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16735.46807732401!2d89.92042664755475!3d48.97042507250205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42b4b5eb77745de1%3A0x574a3346cb5b24fc!2z0JTQkNCv0J0!5e1!3m2!1sen!2sus!4v1762846697858!5m2!1sen!2sus",

    favicon: "/images/favicon.ico",
    agenda: [
      {
        title: "Той",
        date: "2025-11-22",
        startTime: "17:00",
        endTime: "23:00",
        location: "ДАЯН РЕСОРТ 1",
        address: "ДАЯН РЕСОРТ 1 тойханасы",
      },
    ],
    audio: {
      src: "/audio/toi.mp3",
      title: "Көңілді әуен",
      autoplay: true,
      loop: true,
    },
    // Invitation / share images. Add an `invitation` image path which can be used
    // to display a clickable invitation image. Place the actual file at the path
    // used here (e.g. `images/invitation.jpg`) or change the path as needed.
    shareImages: {
      ogImage: "/images/Gasyr/4.jpeg",
      thumbnail: "/images/Gasyr/4.jpeg",
      couplePhoto: "/images/Gasyr/4.jpeg",
      banner: "/images/Gasyr/4.jpeg",
      invitation: "/images/Gasyr/4.jpeg",
    },
  },
};

export default config;
