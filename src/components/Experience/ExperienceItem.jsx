const ExperienceItem = ({ title, company, duration, achievements }) => {
  return (
    <div
      className="border-l border-[#D1D5DC] px-5 mt-5 relative"
      data-aos="fade-right"
    >
      <div className="h-3 w-3 rounded-full bg-[#030213] absolute top-2 left-[-7px]"></div>
      <div className="flex flex-col gap-1">
        <div>
          <div className="text-lg text-[#0A0A0A]">{title}</div>
          <div className="text-base text-[#4A5565]">{`${company}`}</div>
          <div className="text-base text-[#4A5565]">{`${duration}`}</div>
        </div>
        <ul className="list-disc pl-5 text-[#364153] text-[15px] space-y-1 text-justify">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
