import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./UI/Card";
import Header from "./UI/Header";
import html5 from "../assets/icons/html5.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import codeigniter from "../assets/icons/codeigniter.svg";
import css3 from "../assets/icons/css3.svg";
import figma from "../assets/icons/figma.svg";
import jquery from "../assets/icons/jquery.svg";
import laravel from "../assets/icons/laravel.svg";
import microsoftoffice from "../assets/icons/microsoftoffice.svg";
import mysql from "../assets/icons/mysql.svg";
import photoshop from "../assets/icons/photoshop.svg";
import reactIcon2 from "../assets/icons/reactIcon2.svg";
import salesforce from "../assets/icons/salesforce.svg";
import sass from "../assets/icons/sass.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import lumen from "../assets/icons/lumen.svg";
import materialUI from "../assets/icons/materialUI.svg";
import postman from "../assets/icons/postman.svg";
import { FaLocationArrow, FaEnvelope, FaLinkedinIn, FaGithub, FaStar } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';
import personalImgPng from '../assets/personalImg.png';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Fragment>
            <Navbar />
            <Header title="About Me" />
            <Card>
                <div className="grid grid-cols-12 p-7 items-center gap-y-6 " data-aos="fade-up">
                    <div className="left-side-about-me col-span-12 lg:col-span-3">
                        <img src={personalImgPng} alt="" className="w-64 rounded-full mx-auto shadow-lg" />
                    </div>
                    <div className="right-side-about-me col-span-12 lg:col-span-9 text-center">
                        <h3 className="font-bold lg:text-6xl text-4xl mb-4">Hi, I'm Christine Manabat 👋</h3>
                        <p className="max-w-5xl text-justify">
                            A <b>fresh IT graduate</b> specializing in Web and Mobile Applicatons. I had experienced working on IT Companies and had contributed software solutions.
                            I am commonly assigned on the <b>Front-End Development</b> on most of the projects that I have worked on. I love making designs that are visually pleasing with
                            assurance of giving comfort to the end-users. I have also experienced working on the <b>Back-End Development</b> by implementing functionalities through Laravel and MySQL.
                        </p>
                        <p className="max-w-5xl py-4 text-justify">
                            I am currently learning <b>React.js</b> to expand more of my knowledge in building complex web applications. I am eager to learn new things and be open to new experiences.
                            I am constantly developing my skills to effectively implement them in any opportunity that I receive. When I am not coding, I watch series, play video games and study technology trends.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-blue-50 py-5 px-7 md:px-0 mb-7" data-aos="fade-up">
                    <div className="flex items-center w-full lg:justify-center py-3 md:px-6 lg:px-0">
                        <FaLocationArrow className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">Location</p>
                            <p className="font-semibold text-md md:text-lg">Pulilan, Bulacan</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full lg:justify-center py-3 md:px-6 lg:px-0">
                        <FaEnvelope className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">Email</p>
                            <p className="font-semibold text-md md:text-lg"><a href="mailto:christinemmanabat@gmail.com">christinemmanabat@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="flex items-center w-full lg:justify-center py-3 md:px-6 lg:px-0">
                        <FaLinkedinIn className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">LinkedIn</p>
                            <p className="font-semibold text-md md:text-lg"><a href="https://www.linkedin.com/in/christine-manabat-5a1858236/" target="_blank" rel="noopener noreferrer">Christine Manabat</a> </p>
                        </div>
                    </div>

                    <div className="flex items-center w-full lg:justify-center py-3 md:px-6 lg:px-0">
                        <FaGithub className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">Github</p>
                            <p className="font-semibold text-md md:text-lg"><a href="https://github.com/tinemanabs" target="_blank" rel="noopener noreferrer">tinemanabs</a></p>
                        </div>
                    </div>
                </div>

                <div className="px-7 mb-7">
                    <div className="education-section" data-aos="fade-up">
                        <div className="font-bold text-4xl mb-8">Education</div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">


                            <div>
                                <h1 className="font-bold text-xl">FEU Institute of Technology</h1>
                                <p className="text-lg font-semibold">2018-2023</p>
                                <p>Bachelor of Science in Information Technology with specialization in Web and Mobile Applications</p>
                            </div>


                            <div>
                                <h1 className="font-bold text-xl">St. Mary's College, Quezon City</h1>
                                <p className="text-lg font-semibold">2016-2018</p>
                                <p>Science, Technology, Engineering, Mathematics Strand</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="px-7 mb-7">
                    <div className="experience-section" data-aos="fade-up">
                        <div className="font-bold text-4xl mb-8">Experience</div>
                        <div>
                            <ul className="relative border-l border-gray-200">
                                <li className="mb-10 ml-4 shadow-sm p-4">
                                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -left-1.5"></div>
                                    <div className="text-gray-400">May 2023 - February 2023</div>
                                    <h1 className="font-bold text-xl">Junior Software Engineer</h1>
                                    <h3 className="text-gray-500 text-lg">Universal Access and Systems Solutions</h3>
                                    <p className="text-justify">
                                        Developed and maintained software applications tailored for internal use by utilizing Laravel, Lumen and React.js, Collaborated closely with clients and developers to translate requirements into technical solutions, Implemented optimized approach within the software application resulting in improved user experience
                                    </p>
                                </li>
                                <li className="mb-10 ml-4 shadow-sm p-4">
                                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -left-1.5"></div>
                                    <div className="text-gray-400">September 2022 - January 2023</div>
                                    <h1 className="font-bold text-xl">Digital Specialist Intern</h1>
                                    <h3 className="text-gray-500 text-lg">Datawords</h3>
                                    <p className="text-justify">Configuration, and adaptation of website through CMS (Sales Force - Demandware), quality assurance of digital support across desktop and mobile environments, editing and localization of digital content (includes videos, images, banners…), asset management of images (modification, resizing, classification)</p>
                                </li>
                                <li className="mb-10 ml-4 shadow-sm p-4">
                                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -left-1.5"></div>
                                    <div className="text-gray-400">May 2022 - July 2022</div>
                                    <h1 className="font-bold text-xl">Software Engineer Intern</h1>
                                    <h3 className="text-gray-500 text-lg">Cobra Itech Services Corporation</h3>
                                    <p className="text-justify">
                                        Developed the company website based on the manager's preferences,
                                        communicated closely with other developers and project managers,
                                        created system documentation for future references, and
                                        proposed a prototype website to improve its current user experience and interface
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-7 mb-7">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4" data-aos="fade-up">
                        <div className="skills-section">
                            <div className="font-bold text-4xl mb-8">Skills</div>

                            <div className="flex flex-wrap gap-5">
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={html5} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={css3} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={bootstrap} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={tailwindcss} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={sass} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={jquery} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={reactIcon2} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={materialUI} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={laravel} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={lumen} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={codeigniter} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={mysql} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={postman} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={salesforce} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={figma} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={photoshop} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={microsoftoffice} alt="" srcset="" className="w-16" />
                                </div>
                            </div>
                        </div>
                        <div className="achievements-section">
                            <div className="font-bold text-4xl mb-8 lg:mt-0 mt-4">Achievements</div>
                            <ul>
                                <li className="py-2 flex items-center"><FaStar className="text-blue-900 text-lg mr-3" />Academic Scholar (2018-2022)</li>
                                <li className="py-2 flex items-center"><FaStar className="text-blue-900 text-lg mr-3" />Top Performing Student (2020-2022)</li>
                                <li className="py-2 flex items-center"><FaStar className="text-blue-900 text-lg mr-3" />Best in Qualitative Research - STEM Strand</li>
                                <li className="py-2 flex items-center"><FaStar className="text-blue-900 text-lg mr-3" />Best in Quantitative Research - STEM Strand</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-7 mb-7">
                    <div className="certifications-section" data-aos="fade-up">
                        <div className="font-bold text-4xl mb-8">Certifications</div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">IT Specialist - HTML and CSS</h1>
                                    <p className="text-gray-400">Certiport</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/54277196-35b7-48ef-b3ce-1fbf218113e0/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">MTA: Database Fundamentals - Certified 2019</h1>
                                    <p className="text-gray-400">Microsoft</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/eb384257-bfb8-4178-936f-1ceb04ab9074/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">CCNA: Introduction to Networks</h1>
                                    <p className="text-gray-400">Cisco</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/cbeee0ac-56de-4ff1-a3c9-8453ac947d5d/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">CCNA: Switching, Routing, and Wireless Essentials</h1>
                                    <p className="text-gray-400">Cisco</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/4a771ad0-c43c-4707-810a-a23141225960/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">DevNet Associate</h1>
                                    <p className="text-gray-400">Cisco</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/df58226a-79f9-4dc4-9b0c-0c5a497e557a/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">CyberOps Associate</h1>
                                    <p className="text-gray-400">Cisco</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/1115848b-122f-40a4-a83a-0da31a1b4c5e/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:w-1/3 pb-2 pr-2">
                                <div className="h-full border border-gray-200 rounded-md p-3">
                                    <h1 className="font-bold">CCNA: Enterprise Networking, Security, and Automation</h1>
                                    <p className="text-gray-400">Cisco</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <a href="https://www.credly.com/badges/87fe8e5e-91ab-483e-95d1-dfe76e3227be/public_url" target="_blank" rel="noopener noreferrer" className="mr-2">View</a>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

        </Fragment>
    )
}

export default About;