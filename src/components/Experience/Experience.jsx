import { Briefcase } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experienceItems = [
    {
      id: 1,
      title: "Web Developer",
      company: "AOTC Inc. (formerly 8Bacus Inc.)",
      duration: "Sept 2024 – March 2026",
      achievements: [
        "Led frontend development for a ground-up project using Laravel and Alpine.js, focusing on scalable and maintainable UI",
        "Collaborated with backend teams to integrate APIs and ensure seamless data flow",
        "Integrated WebSocket connections to listen for real-time events, establish frontend connections, and synchronize application state",
        "Enhanced application responsiveness through efficient state handling and optimized UI interactions",
        "Resolved interactive element bugs, improving usability and accessibility",
        "Utilized Puppeteer for frontend-rendered data extraction and DOM manipulation, including modifying UI components within iframes",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Freelancing",
      duration: "May 2022 – Sept 2024",
      achievements: [
        "Created web application projects for small businesses that require a system by using Laravel and React.js.",
      ],
    },
    {
      id: 3,
      title: "Junior Software Engineer",
      company: "Universal Access & Systems Solutions",
      duration: "May 2023 – Feb 2024",
      achievements: [
        "Developed and maintained software applications tailored for internal use by utilizing Laravel, Lumen, and React.js.",
        "Collaborated closely with clients and developers to translate requirements into technical solutions.",
        "Implemented optimized approach within the software application, resulting in improved user experience.",
      ],
    },
    {
      id: 4,
      title: "Digital Specialist Intern",
      company: "Datawords",
      duration: "Sept 2022 – Jan 2023",
      achievements: [
        "Configured and adapted website through CMS using Sales Force – Demandware",
        "Quality assurance of digital support across desktop and mobile environments",
        "Edited and localized various forms of digital content such as videos, images, and banners",
      ],
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      company: "Cobra Itech Services Corporation",
      duration: "May 2022 – Jul 2022",
      achievements: [
        "Developed company website based on manager's preferences and proposed prototype to enhance user experience and interface",
        "Communicated closely with other developers and project managers",
        "Created system documentation for future references",
      ],
    },
  ];
  return (
    <section className="experience-section" data-aos="fade-right">
      <SectionHeader icon={Briefcase} title="Experience" />
      {experienceItems.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          company={experience.company}
          duration={experience.duration}
          achievements={experience.achievements}
        />
      ))}
    </section>
  );
};

export default Experience;
