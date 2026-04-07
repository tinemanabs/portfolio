import { GraduationCap } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import EducationItem from "./EducationItem";

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree:
        "Bachelor of Science in Information Technology with specialization in Web and Mobile Applications",
      school: "FEU Institute of Technology",
      year: "2018-2023",
    },
    {
      id: 2,
      degree: "Science, Technology, Engineering, Mathematics Strand",
      school: "St. Mary's College, Quezon City",
      year: "2016-2018",
    },
    // {
    //   id: 3,
    //   degree: "Advanced Diploma in Full Stack Development",
    //   school: "TechAcademy Online",
    //   year: "2023-2024",
    // },
  ];
  return (
    <section className="education-section" data-aos="fade-left">
      <SectionHeader icon={GraduationCap} title="Education" />
      {educationItems.map((education, index) => (
        <EducationItem
          key={index}
          degree={education.degree}
          school={education.school}
          year={education.year}
        />
      ))}
    </section>
  );
};

export default Education;
