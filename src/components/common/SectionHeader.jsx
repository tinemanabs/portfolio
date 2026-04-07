const SectionHeader = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#DBEAFE] p-2 rounded-md">
        {Icon && <Icon size={20} color="#155DFC" />}
      </div>
      <div className="text-xl text-[#0A0A0A]">{title}</div>
    </div>
  );
};

export default SectionHeader;
