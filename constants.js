export const METADATA = {
  author: "Vansh Garg",
  title: "Portfolio | Vansh Garg",
  description:
    "Vansh Garg is a full-Stack Developer & ML Enthusiast crafting scalable web apps and smart AI-driven solutions.",
  twitterHandle: "#",
  keywords: [
    "Vansh Garg",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  //TODO UPDATE IMAGE
  image:
    "https://res.cloudinary.com/disekekti/image/upload/v1752709729/Screenshot_2025-07-17_051536_rmo5q0.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A passionate Full-Stack Developer",
  "I craft smart solutions with AI",
  "I explore AI to solve real-world problems",
  "I innovate, iterate, and learn every day"
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: vanshgarg25804@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vg-vanshgarg/",
  },
  {
    name: "github",
    url: "https://github.com/Vansh-Garg118",
  },
  // {
  //   name: "instagram",
  //   url: "#",
  // },
  // {
  //   name: "twitter",
  //   url: "#",
  // },
  {
    name: "leetcode",
    url: "https://leetcode.com/u/vg__vanshgarg/",
  },
  {
    name: "codeforces",
    url: "https://codeforces.com/profile/vg__vanshgarg",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "javascript",
    "html",
    "css",
    "typescript",
    "java",
    "python",
    "nodejs",
    "express",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "Tensorflow",
    "Sklearn",
    "langchain"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git","appwrite"],
};

export const PROJECTS = [
  {
    name: "AcadBud",
    image: "/projects/acadBud_webp.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "College Management system using MERN stack",
    gradient: ["#F14658", "#DC2537"],
    url:"https://github.com/AcadBud/Acad_Bud",
    tech: ["react", "javascript", "node", "mongodb"],
  },
  {
    name: "VideoMate",
    image: "/projects/videomate.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Content creation and sharing plateform with tweets",
    gradient: ["#000066", "#6699FF"],
    url:"https://github.com/Vansh-Garg118/Video-Mate",
    tech: ["javascript", "react", "express", "tailwindcss", "redux","mongodb"],
  },
  {
    name: "Echochat",
    image: "/projects/echochat.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Real Time Web Chat application",
    gradient: ["#003300", "#66FF99"],
    url: "https://github.com/Vansh-Garg118/EchoChat",
    tech: ["react", "express","socket","javascript"],
  },
  {
    name: "RateMyFit",
    image: "/projects/ratemyfit.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "An AI fashion tips, trends & outfit ratings",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Vansh-Garg118/RateMyFit-RMF",
    tech: ["react","gemini","appwrite"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DaviseLab: [
    {
      title: "Davise Lab",
      description:
        "Davise Lab is a research hub that explores the limitless possibilities of Analytics and Vision.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          Advancing environmental monitoring, one breakthrough at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Developed a machine learning pipeline for early fire detection using satellite imagery and geospatial data,reducing latency in stubble burning alerts across high-risk zones.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Summer Intern
        </div>
      ),
    },
    
    {
      title: "Optimization",
      description:
        "Fused UAV & satellite imagery, improving ground-truth accuracy by ~15%.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Summer Intern
        </div>
      ),
    },
  ],
  CONVOCATION: [
    {
      title: "Convocation-NIT Delhi",
      description:
        "The National Institute of Technology, Delhi, is a public technical university located in Delhi, India. Declared as an Institute of National Importance by the Government of India,",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          National Institute of Technology, Delhi
        </div>
      ),
    },
    {
      title: "Contribution",
      description:
        "At NIT Delhi, I developed the web interface for the convocation ceremony, focusing on the frontend design of the convocation pages. I created a registration form that efficiently handled over 2000 submissions, making the registration process smooth and user-friendly.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer 
        </div>
      ),
    },
  ],
  
};

export const GTAG = "G-5HCTL2TJ5W";
