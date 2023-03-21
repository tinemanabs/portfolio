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

const Projects = () => {
    const [showModal, setShowModal] = useState({ show: false, modalId: 0 });

    const openModal = (id) => {
        setShowModal({ show: true, modalId: id })
    }

    const closeModal = () => {
        setShowModal({ show: false })
    }

    return (
        <Fragment>
            <Navbar />
            <Header title="Projects" />
            <Card>
                <div className="flex flex-wrap px-4">
                    <div className="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                            <img src={agia} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                            <div className="mt-4 p-3">
                                <h1 className="font-bold text-2xl">AGIA</h1>
                                <button className="font-semibold text-gray-400 hover:text-blue-900" onClick={() => openModal(1)}>View Project  →</button>
                                {showModal.show && showModal.modalId === 1 &&
                                    <Modal
                                        onClose={closeModal}
                                        title="AGIA"
                                        subtitle="A prototype website for AGIA"
                                        date="July 2022"
                                        associated="Internship"
                                        language={["Laravel", "Bootstrap", "jQuery"]}
                                        role="Front-End Developer"
                                        about={[
                                            "- Redesigned the user interface and experience of the webpages present on the existing website of AGIA",
                                            "- Created the project documentation for the website"
                                        ]}
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a1} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a2} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a3} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a4} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a5} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a6} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a7} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a8} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={a9} alt="" />
                                            </div>
                                        </div>
                                    </Modal>}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                            <img src={cobraitech} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                            <div className="mt-4 p-3">
                                <h1 className="font-bold text-2xl">Cobra Itech</h1>
                                <button className="font-semibold text-gray-400 hover:text-blue-900" onClick={() => openModal(2)}>View Project  →</button>
                                {showModal.show && showModal.modalId === 2 &&
                                    <Modal onClose={closeModal}
                                        title="Cobra Itech"
                                        subtitle="Company Website"
                                        date="May 2022"
                                        associated="Thesis"
                                        language={["Laravel", "Bootstrap", "jQuery"]}
                                        role="Front-End Developer, Back-End Developer"
                                        about={[
                                            "- Created the official website for the company ",
                                            "- Created the project documentation for the website",
                                        ]}
                                    >

                                        <div className="grid grid-cols-1 mb-2">
                                            <h1 className="text-md font-bold mr-2">Resources:</h1>
                                            <a href="http://cobraitech.com" target="_blank" rel="noopener noreferrer">http://cobraitech.com</a>
                                        </div>
                                    </Modal>}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                            <img src={pawshaven} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                            <div className="mt-4 p-3">
                                <h1 className="font-bold text-2xl">Paws Haven</h1>
                                <button className="font-semibold text-gray-400 hover:text-blue-900" onClick={() => openModal(3)}>View Project  →</button>
                                {showModal.show && showModal.modalId === 3 &&
                                    <Modal onClose={closeModal}
                                        title="Paws Haven"
                                        subtitle="Animal Shelter and Welfare for Domesticated Animals through Web Application System"
                                        date="Mar 2022"
                                        associated="Final Project"
                                        language={["Laravel", "Bootstrap"]}
                                        role="Lead Developer"
                                        about={[
                                            "- Paws Haven is a web application system focusing on animal shelter and welfare for domesticated animals.",
                                            "- The project has provided an accounts module, adoption module, visitation module and charity module. "
                                        ]}
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph1} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph2} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph3} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph4} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph5} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph6} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph7} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph8} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph9} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ph10} alt="" />
                                            </div>

                                        </div>
                                    </Modal>}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                            <img src={kabisig} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                            <div className="mt-4 p-3">
                                <h1 className="font-bold text-2xl">Kabisig</h1>
                                <button className="font-semibold text-gray-400 hover:text-blue-900" onClick={() => openModal(4)}>View Project  →</button>
                                {showModal.show && showModal.modalId === 4 &&
                                    <Modal onClose={closeModal}
                                        title="KaBisig"
                                        subtitle="A Disaster Risk Reduction Management and Emergency Alert System for Barangay-Level to aid Pre, During and Post Natural Disasters"
                                        date="Aug 2021 - Jan 2022"
                                        associated="Thesis"
                                        language={["Laravel", "Bootstrap", "jQuery", "API (Google Maps, SMS)", "Firebase"]}
                                        role="Front-End Developer, Co-Back-End Developer, Documentation"
                                        about={[
                                            "- KaBisig is a web and mobile application that aims to strengthen the DRRM in a barangay-level. ",
                                            "- User Level: Resident, Barangay Officials, LGU",
                                            "- Features: User Management Modul, Announcement Module, Protocol Module, Vulnerability Map Module, Emergency Module, Communication Module, Statistics Module"
                                        ]}
                                    >
                                        <div className="grid grid-cols-1 mb-2">
                                            <h1 className="text-md font-bold mr-2">Resources:</h1>
                                            <a href={KabisigUserManual} target="_blank" rel="noopener noreferrer">KaBisig User Manual</a>
                                        </div>
                                    </Modal>}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                            <img src={thoughtarchive} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                            <div className="mt-4 p-3">
                                <h1 className="font-bold text-2xl">Thought Archive</h1>
                                <button className="font-semibold text-gray-400 hover:text-blue-900" onClick={() => openModal(5)}>View Project  →</button>
                                {showModal.show && showModal.modalId === 5 &&
                                    <Modal onClose={closeModal}
                                        title="Thought Archive"
                                        subtitle=""
                                        date="Nov 2021"
                                        associated="Thesis"
                                        language={["CodeIgniter3", "Bootstrap", "jQuery", "mySQL"]}
                                        role="Lead Developer"
                                        about={[
                                            "- Thought Archive is a simple web application system that allows content-sharing by using the basic CRUD operations, implemented through CodeIgniter 3. It is a personal project in Web Systems Technologies subject during AY 2020-2021."
                                        ]}
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ta1} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ta2} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ta3} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ta4} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ta5} alt="" />
                                            </div>
                                            <div className="w-full lg:w-1/4 md:w-1/3 p-2">
                                                <img src={ta6} alt="" />
                                            </div>

                                        </div>
                                    </Modal>}
                            </div>
                        </div>
                    </div>


                </div>
            </Card>
        </Fragment >
    )
};

export default Projects;