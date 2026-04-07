const EducationItem = ({ degree, school, year }) => {
  return (
    <div className="mt-5 border-l border-[#D1D5DC] px-5" data-aos="fade-left">
      <div className="flex flex-col gap-1">
        <div className="text-lg text-[#0A0A0A]">{degree}</div>
        <div className="text-base text-[#4A5565]">{school}</div>
        <div className="text-sm text-[#6A7282]">{year}</div>
      </div>
    </div>
  );
};

export default EducationItem;
