import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import Card from "./UI/Card";
import Header from "./UI/Header";

import kabisig from "../assets/projects/kabisig/kabisig.jpg";
import KabisigUserManual from "../assets/projects/kabisig/KabisigUserManual.pdf";

import agia from "../assets/projects/agia/agia.jpg";
import a1 from "../assets/projects/agia/a1.png";
import a2 from "../assets/projects/agia/a2.png";
import a3 from "../assets/projects/agia/a3.png";
import a4 from "../assets/projects/agia/a4.png";
import a5 from "../assets/projects/agia/a5.png";
import a6 from "../assets/projects/agia/a6.png";
import a7 from "../assets/projects/agia/a7.png";
import a8 from "../assets/projects/agia/a8.png";
import a9 from "../assets/projects/agia/a9.png";

import cobraitech from "../assets/projects/cobraitech/cobraitech.jpg";

import pawshaven from "../assets/projects/pawshaven/pawshaven.jpg";
import ph1 from "../assets/projects/pawshaven/ph1.png";
import ph2 from "../assets/projects/pawshaven/ph2.png";
import ph3 from "../assets/projects/pawshaven/ph3.png";
import ph4 from "../assets/projects/pawshaven/ph4.png";
import ph5 from "../assets/projects/pawshaven/ph5.png";
import ph6 from "../assets/projects/pawshaven/ph6.png";
import ph7 from "../assets/projects/pawshaven/ph7.png";
import ph8 from "../assets/projects/pawshaven/ph8.png";
import ph9 from "../assets/projects/pawshaven/ph9.png";
import ph10 from "../assets/projects/pawshaven/ph10.png";

import thoughtarchive from "../assets/projects/thoughtarchive/thoughtarchive.jpg";
import ta1 from "../assets/projects/thoughtarchive/ta1.png";
import ta2 from "../assets/projects/thoughtarchive/ta2.png";
import ta3 from "../assets/projects/thoughtarchive/ta3.png";
import ta4 from "../assets/projects/thoughtarchive/ta4.png";
import ta5 from "../assets/projects/thoughtarchive/ta5.png";
import ta6 from "../assets/projects/thoughtarchive/ta6.png";

import Modal from "./UI/Modal";
import ProjectCard from "./Project/ProjectCard";

const Projects = () => {
    const [showModal, setShowModal] = useState({ show: false, modalId: 0 });

    const openModal = (id) => {
        setShowModal({ show: true, modalId: id })
    }

    const closeModal = () => {
        setShowModal({ show: false })
    }

    const projects = [
        {
            id: 1,
            coverImage: agia,
            title: "AGIA",
            subtitle: "A prototype website for AGIA",
            date: "July 2022",
            associated: "Internship",
            language: ["Laravel", "Bootstrap", "jQuery", "mySQL"],
            role: "Front-End Developer",
            about: [
                "- Redesigned the user interface and experience of the webpages present on the existing website of AGIA",
                "- Created the project documentation for the website"
            ]
        },
        {
            id: 2,
            coverImage: cobraitech,
            title: "Cobra Itech",
            subtitle: "Company Website",
            date: "May 2022 - June 2022",
            associated: "Internship",
            language: ["Laravel", "Bootstrap", "jQuery", "mySQL"],
            role: "Front-End Developer, Back-End Developer",
            about: [
                "- Created the official website for the company ",
                "- Created the project documentation for the website",
            ]
        },
        {
            id: 3,
            coverImage: pawshaven,
            title: "Paws Haven",
            subtitle: "Animal Shelter and Welfare for Domesticated Animals through Web Application System",
            date: "March 2022",
            associated: "Final Project",
            language: ["Laravel", "Bootstrap", "mySQL"],
            role: "Lead Developer",
            about: [
                "- Paws Haven is a web application system focusing on animal shelter and welfare for domesticated animals.",
                "- The project has provided an accounts module, adoption module, visitation module and charity module. "
            ]
        },
        {
            id: 4,
            coverImage: kabisig,
            title: "Kabisig",
            subtitle: "A Disaster Risk Reduction Management and Emergency Alert System for Barangay-Level to aid Pre, During and Post Natural Disasters",
            date: "Aug 2021 - Jan 2022",
            associated: "Thesis",
            language: ["Laravel", "Bootstrap", "jQuery", "API (Google Maps, SMS)", "Firebase", "mySQL"],
            role: "Front-End Developer, Co-Back-End Developer, Documentation",
            about: [
                "- KaBisig is a web and mobile application that aims to strengthen the DRRM in a barangay-level. ",
                "- User Level: Resident, Barangay Officials, LGU",
                "- Features: User Management Modul, Announcement Module, Protocol Module, Vulnerability Map Module, Emergency Module, Communication Module, Statistics Module"
            ]
        },
        {
            id: 5,
            coverImage: thoughtarchive,
            title: "Thought Archive",
            subtitle: "Final Project",
            date: "November 2021",
            language: ["CodeIgniter3", "Bootstrap", "jQuery", "mySQL"],
            associated: "Final Project",
            role: "Lead Developer",
            about: [
                "- Thought Archive is a simple web application system that allows content-sharing by using the basic CRUD operations, implemented through CodeIgniter 3. It is a personal project in Web Systems Technologies subject during AY 2020-2021."
            ]
        }

    ]

    return (
        <Fragment>
            <Navbar />
            <Header title="Projects" />
            <Card>
                <div className="flex flex-wrap px-4">
                    {projects.map((project) => (
                        <ProjectCard coverImage={project.coverImage} title={project.title}>
                            <button className="font-semibold text-gray-400 hover:text-blue-900" onClick={() => openModal(project.id)}>View Project  →</button>
                            {showModal.show && showModal.modalId === project.id &&
                                <Modal
                                    onClose={closeModal}
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    date={project.date}
                                    associated={project.associated}
                                    language={project.language}
                                    role={project.role}
                                    about={project.about}
                                >
                                </Modal>}
                        </ProjectCard>
                    ))}

                </div>
            </Card>
        </Fragment >
    )
};

export default Projects;