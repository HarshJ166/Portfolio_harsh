import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Harsh Dinesh Jajal",
  initials: "HJ",
  url: "https://github.com/HarshJ166",
  location: "Mumbai, Maharashtra",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Software Developer. I love building things and helping people.",
  summary:
    "I am a Software Developer pursuing a B.E. in Information Technology. I have experience in full-stack development, Edge AI, and various programming languages and technologies.",
  avatarUrl: "/Harsh Jajal.jpeg",
  skills: [
    "Java",
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "React.js",
    "Node.js",
    "Express.js",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "SQL/MySQL",
    "MongoDB",
    "Data Structures and Algorithms",
    "Web Development",
    "Problem Solving",
    "Machine Learning",
    "Artificial Intelligence",
    "Cyber Security",
    "Cisco Packet Tracer"
  ], 
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jajalharsh268@gmail.com",
    tel: "+91 9892152003",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HarshJ166",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harsh-jajal-263170247/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jajalharsh268@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Bot2Do Technologies",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/bot2do.png",
      start: "April 2024",
      end: "Ongoing",
      description:
        "Built and refined web applications, expanding technical expertise in full-stack development. Stayed current with industry advancements, ensuring adaptability and proficiency in emerging technologies.",
    },
    {
      company: "Intel Unnati 2024",
      href: "https://intel.com",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/intel.png",
      start: "May 2024",
      end: "July 2024",
      description:
        "Led the development and deployment of innovative web applications, leveraging cutting-edge technologies such as Edge AI to drive business value. Collaborated with cross-functional teams to deliver high-quality products, ensuring adherence to stringent standards and timelines. Conducted in-depth analysis of Vehicle Movement using Edge AI, applying machine learning models to optimize parking lot allocation, and contributed to frontend development and backend model training.",
    },
    {
      company: "Terretorial Army",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/terretorial-army.png",
      start: "June 2024",
      end: "June 2024",
      description:
        "Enhanced the GUI, focusing on user-centered design principles to improve overall user experience. Optimized backend database connections, ensuring seamless data exchange and high-performance data retrieval. Implemented and updated features, including digital signatures, OCR (Optical Character Recognition), and model upgrade management, demonstrating proficiency in frontend and backend development.",
    },
  ],
  education: [
    {
      school: "Shah and Anchor Kutchhi Engineering College",
      href: "https://www.shahandanchor.com/",
      degree: "B.E. in Information Technology",
      logoUrl: "/sakec.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Good Grocery",
      href: "https://github.com/YourGithubUsername/good-grocery",
      dates: "2023",
      active: true,
      image:"",
      video:"",
      description:
        "Developed a scalable online platform for farm-fresh grocery ordering using the MERN stack.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YourGithubUsername/good-grocery",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Meraki Platina",
      href: "https://github.com/YourGithubUsername/meraki-platina",
      dates: "2023",
      active: true,
      image:"",
      video:"",
      description:
        "Designed and developed a custom landing page for a builder's website using HTML, CSS, and JavaScript.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YourGithubUsername/meraki-platina",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Market Matrix",
      href: "https://github.com/YourGithubUsername/market-matrix",
      dates: "2023",
      active: true,
      image:"",
      video:"",
      description:
        "Built a predictive model using machine learning algorithms to forecast stock market prices.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YourGithubUsername/market-matrix",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
};