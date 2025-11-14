export const siteConfig = {
  name: "LucaS WanG",
  title: "",
  description: "Portfolio website of Lucas Wang",
  heroImage: "/images/hero_red4.png",
  heroBgColor: "#000e14",
  heroGradientColor: "#00132d",
  textColor: "#ffffff",
  accentColor: "#c44536",
  social: {
    email: "lucaswan@usc.edu",
    linkedin: "https://www.linkedin.com/in/lucas-wang-546095384",
    twitter: "https://www.instagram.com/nxvigradian/",
    github: "https://github.com/novigradian",
  },
  aboutMe:
    "I'm an undergraduate student at the University of Southern California with a passion for game development and software engineering. I have 4+ years of experience with Unity and have published various projects both with a team and independently. I'm currently an engineer for Overdawn, a bullet-hell shooter releasing later this year (wishlist on Steam!) <br> Besides game dev, I'm also part of Taking the Sidequests, an urban exploration channel. In my spare time I enjoy cooking and creative writing. Thanks for stopping by! :)",
  skills: ["C#", "C++", "Java", "Python", "Unity", "HTML", "CSS", "SQL"],
  projects: [
    {
      name: "Vendetta",
      image: "/images/vendetta2.jpg",
      bgPosition: "center 100%",
      description:
        "Sharpen your blade and prepare for a duel to the death in this punishing side-view fighter inspired by Renaissance fencing.",
      link: "https://novigradian7.itch.io/vendetta",
      skills: ["Unity", "2D", "Itch.io"],
      overlay: 0.65,
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      image: "",
      bgPosition: "center 60%",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      overlay: 0.55,
    },
    {
      name: "ExtensionKit",
      image: "",
      bgPosition: "center 60%",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      overlay: 0.55,
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University of Southern California",
      degree: "B.S. in Computer Science (Games)",
      dateRange: "2025-2029",
      achievements: [
        "Programmer at Open Alpha (Game Dev Club) 2025-Present",
      ],
    },
    {
      school: "Carnegie Mellon University",
      degree: "National High School Game Academy",
      dateRange: "2023",
      achievements: [
        "Intensive 6-week summer program",
        "Worked within a team to develop 2 digital games",
        "Prototyped various tabletop games",
        "Learned basics of 3D modeling and texturing"
      ],
    },
    {
      school: "Shanghai High School International Division",
      degree: "International Baccalaureate Diploma Programme (IBDP)",
      dateRange: "2021-2025",
      achievements: [
        "Total score: 42/45",
        "IB Subjects: HL Math Analysis & Approaches, HL Computer Science, HL English Literature, SL Physics, SL Chinese Language & Literature, SL Psychology",
        "5 on AP Microeconomics, AP English Language and Composition, AP US History",
      ],
    },
  ],
};
