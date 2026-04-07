import { User } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const About = () => {
  return (
    <section
      className="about-us-section flex flex-col gap-3"
      data-aos="fade-up"
    >
      <SectionHeader icon={User} title="About" />

      <div className="text-base text-[#364153] text-justify" data-aos="fade-up">
        Hi, I'm Christine Manabat 👋 an <strong>IT graduate</strong>{" "}
        specializing in Web and Mobile Applications. I have a total of{" "}
        <strong>three (3) years of experience</strong> in developing web
        applications, starting with{" "}
        <strong>
          school projects, freelancing and gradually evolving to significant
          contribution to businesses.
        </strong>{" "}
        I had experienced working on IT Companies and had contributed software
        solutions from my internship and professional experience.
      </div>
      <div className="text-base text-[#364153] text-justify" data-aos="fade-up">
        Most of the projects I have worked on, I was primarily assigned as a
        <strong> Full Stack Developer</strong>, with a strong focus on front-end
        development. I handled the creation of user interfaces and the
        implementation of system functionalities, while also working with
        backend processes when needed. I am eager to learn new things, open to
        new experiences, and continuously improving my skills to make the most
        of every opportunity.
      </div>
    </section>
  );
};

export default About;
