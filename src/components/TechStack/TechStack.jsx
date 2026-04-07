import { Code } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import TechStackItem from "./TechStackItem";

const TechStack = () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Sass",
    "JavaScript",
    "jQuery",
    "Alpine.js",
    "React.js",
    "Material UI",
    "Puppeteer",
    "PHP",
    "Laravel",
    "Lumen",
    "MySQL",
    "GitHub",
    "Postman",
    "Salesforce",
    "Figma",
    "Microsoft Office",
    "Adobe Photoshop",
  ];
  return (
    <section className="tech-stack-section" data-aos="fade-left">
      <SectionHeader icon={Code} title="Tech Stack" />

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <TechStackItem key={index} title={skill} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
