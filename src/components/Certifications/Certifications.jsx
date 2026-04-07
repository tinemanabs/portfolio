import { Award } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import CertificationItem from "./CertificationItem";

const Certifications = () => {
  const certificationItems = [
    {
      id: 1,
      title: "IT Specialist - HTML and CSS",
      issuer: "Certiport",
      year: "2022",
      link: "https://www.credly.com/badges/54277196-35b7-48ef-b3ce-1fbf218113e0/public_url",
    },
    {
      id: 2,
      title: "CyberOps Associate",
      issuer: "Cisco",
      year: "2022",
      link: "https://www.credly.com/badges/1115848b-122f-40a4-a83a-0da31a1b4c5e/public_url",
    },
    {
      id: 3,
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      year: "2022",
      link: "https://www.credly.com/badges/87fe8e5e-91ab-483e-95d1-dfe76e3227be/public_url",
    },
    {
      id: 4,
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      year: "2021",
      link: "https://www.credly.com/badges/4a771ad0-c43c-4707-810a-a23141225960/public_url",
    },
    {
      id: 5,
      title: "DevNet Associate",
      issuer: "Certiport",
      year: "2021",
      link: "https://www.credly.com/badges/df58226a-79f9-4dc4-9b0c-0c5a497e557a/public_url",
    },
    {
      id: 6,
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      year: "2020",
      link: "https://www.credly.com/badges/cbeee0ac-56de-4ff1-a3c9-8453ac947d5d/public_url",
    },
    {
      id: 7,
      title: "MTA: Database Fundamentals - Certified 2019",
      issuer: "Microsoft",
      year: "2019",
      link: "https://www.credly.com/badges/eb384257-bfb8-4178-936f-1ceb04ab9074/public_url",
    },
  ];
  return (
    <section className="certification-section" data-aos="fade-left">
      <SectionHeader icon={Award} title="Certifications" />

      <div className="mt-5 flex flex-col gap-2">
        {certificationItems.map((certification, index) => (
          <CertificationItem
            key={index}
            title={certification.title}
            issuer={certification.issuer}
            year={certification.year}
            link={certification.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
