import {
  CircleChevronDown,
  Github,
  Link,
  LinkedinIcon,
  Mail,
} from "lucide-react";

const Header = () => {
  return (
    <div
      className="bg-[#F9FAFB] px-5 md:px-10 xl:px-30 py-3 sm:py-14 min-h-svh flex flex-col"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-center items-center gap-9 flex-1 text-center">
        <div className="text-6xl sm:text-7xl text-[#0A0A0A] font-medium">
          <div data-aos="fade-up">
            Hi, I'm <span className="text-[#155DFC]">Christine</span>
          </div>
        </div>
        <div className="text-2xl text-[#4A5565]" data-aos="fade-up">
          Full Stack Web Developer
        </div>
        <div className="max-w-xl sm:text-lg text-[#6A7282]" data-aos="fade-up">
          A passionate Web Developer who likes to code from scratch and build
          innovative ideas in to the browser. Exposed on creating and designing
          web applications through different frameworks and libraries.
        </div>
        <div className="flex gap-2">
          <a
            href="#projectsSection"
            className="bg-[#040313] p-4 rounded-lg border border-[#040313] text-white
             hover:bg-[#1a1a29] hover:border-[#1a1a29] 
             transition-colors duration-300"
            data-aos="fade-right"
          >
            View My Work
          </a>
          <a
            href="mailto:christinemmanabat@gmail.com"
            className="bg-white text-[#0A0A0A] p-4 rounded-lg border border-[#8E8E8E]
            hover:bg-[#f3f3f3] hover:border-[#b0b0b0] 
             transition-colors duration-300"
            data-aos="fade-left"
          >
            Get in Touch
          </a>
        </div>
        <div
          className="flex gap-8 mb-10 sm:mb-0 text-[#4A5565]"
          data-aos="fade-up"
        >
          <a href="https://github.com/tinemanabs" target="_blank">
            <Github size={34} className="hover:text-[#155DFC]" />
          </a>
          <a href="https://www.linkedin.com/in/tinemanabat" target="_blank">
            <LinkedinIcon size={34} className="hover:text-[#155DFC]" />
          </a>
          <a href="mailto:christinemmanabat@gmail.com">
            <Mail size={34} className="hover:text-[#155DFC]" />
          </a>
        </div>
      </div>

      <div className="flex justify-center animate-bounce pb-4">
        <a href="#mainContent" className="text-[#99A1AF] ">
          <CircleChevronDown size={34} className="hover:text-[#155DFC]" />
        </a>
      </div>
    </div>
  );
};

export default Header;
