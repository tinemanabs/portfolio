const CertificationItem = ({ title, issuer, year, link }) => {
  return (
    <a href={link} target="_blank">
      <div
        className="border border-[#E5E7EB] p-4 rounded-xl"
        data-aos="fade-left"
      >
        <div className="flex flex-col gap-1">
          <div className="text-base text-[#0A0A0A]">{title}</div>
          <div className="flex justify-between text-sm text-[#4A5565]">
            <div>{issuer}</div>
            <div>{year}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CertificationItem;
