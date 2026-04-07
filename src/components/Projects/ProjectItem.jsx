import { Github, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const ProjectItem = ({
  image,
  title,
  desc,
  languages,
  repositoryUrl,
  liveType,
  year,
  projectType,
  resource,
}) => {
  const [open, setOpen] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const projectTypeColors = {
    Freelance: "bg-[#EFF6FF] border-[#DBEAFE] text-[#155DFC]",
    Academic: "bg-[#ECFDF5] border-[#D1FAE5] text-[#047857]",
    Internship: "bg-[#FFFBEB] border-[#FEF3C7] text-[#B45309]",
    Thesis: "bg-[#F5F3FF] border-[#EDE9FE] text-[#6D28D9]",
  };

  return (
    <div
      className="border border-[#E5E7EB] rounded-lg overflow-hidden"
      data-aos="zoom-in"
    >
      <div>
        <img
          src={image}
          className="transition duration-1000 ease-out hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-1 text-xs text-[#4A5565]">
          <span>{year}</span>
          <span>•</span>
          <span
            className={`py-1 px-1.5 border rounded-4xl ${projectTypeColors[projectType]}`}
          >
            {projectType}
          </span>
        </div>
        <div className="text-lg text-[#0A0A0A]">{title}</div>
        <div className="text-sm text-[#4A5565]">{desc}</div>

        <div className="flex flex-wrap gap-2">
          {languages.slice(0, 4).map((language, index) => (
            <span
              key={index}
              className="text-xs text-[#0A0A0A] p-2 bg-[#F3F4F6] rounded-sm"
            >
              {language}
            </span>
          ))}
          {languages.length > 4 && (
            <button
              className={`text-xs text-[#0A0A0A] p-2 ${!showAllLanguages && `bg-[#F3F4F6] `}rounded-sm order-last`}
              onClick={() => setShowAllLanguages(!showAllLanguages)}
            >
              {!showAllLanguages ? `+${languages.length - 4}` : `Show Less`}
            </button>
          )}
          {showAllLanguages &&
            languages.slice(4).map((language, index) => (
              <span
                key={index}
                className="text-xs text-[#0A0A0A] p-2 bg-[#F3F4F6] rounded-sm"
              >
                {language}
              </span>
            ))}
        </div>

        <div className="flex gap-3 mt-2">
          <div className="flex items-center gap-1 text-[#364153] hover:text-[#155DFC] transition-colors duration-300">
            <SquareArrowOutUpRight size={14} />
            {liveType === "image" && (
              <button
                type="button"
                className="text-sm cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Live Demo
              </button>
            )}

            {(liveType === "website" || liveType === "pdf") && (
              <a href={resource} target="_blank" className="text-sm">
                Live Demo
              </a>
            )}
          </div>

          <a
            href={repositoryUrl}
            target="_blank"
            className="flex items-center gap-1 text-[#364153] hover:text-[#155DFC] transition-colors duration-300"
          >
            <Github size={14} />
            <div className="text-sm">Code</div>
          </a>
        </div>
      </div>

      {liveType === "image" && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={resource.map((img) => ({ src: img.src }))}
          plugins={[Zoom]}
        />
      )}
    </div>
  );
};

export default ProjectItem;
