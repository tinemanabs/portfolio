import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Card from "./UI/Card";
import Header from "./UI/Header";
import hsLogo from "../assets/hsLogo.png";
import collegeSeal from "../assets/collegeSeal.png";
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
import { FaLocationArrow, FaEnvelope, FaLinkedinIn, FaGithub, FaStar } from "react-icons/fa"

import personalImgPng from '../assets/personalImg.png';

const About = () => {
    return (
        <Fragment>
            <Navbar />
            <Header title="About Me" />
            <Card>
                <div className="grid grid-cols-12 p-7 items-center gap-y-6 ">
                    <div className="left-side-about-me col-span-12 md:col-span-3">
                        <img src={personalImgPng} alt="" className="w-64 rounded-full mx-auto shadow-lg" />
                    </div>
                    <div className="right-side-about-me col-span-12 md:col-span-9 text-center">
                        <h3 className="font-bold md:text-6xl text-4xl">Hi, I'm Christine Manabat 👋</h3>
                        <p className="max-w-5xl py-4 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rerum natus modi velit in dignissimos ab magnam quaerat, sunt, asperiores quidem hic molestias non vero necessitatibus, illum pariatur nihil porro!</p>
                        <p className="max-w-5xl text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rerum natus modi velit in dignissimos ab magnam quaerat, sunt, asperiores quidem hic molestias non vero necessitatibus, illum pariatur nihil porro!</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 grid-cols-1 bg-blue-50 py-5 px-7 md:px-0 mb-7">
                    <div className="flex items-center w-full md:justify-center py-3">
                        <FaLocationArrow className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">Location</p>
                            <p className="font-semibold text-md md:text-lg">Pulilan, Bulacan</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full md:justify-center py-3">
                        <FaEnvelope className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">Email</p>
                            <p className="font-semibold text-md md:text-lg"><a href="mailto:christinemmanabat@gmail.com">christinemmanabat@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="flex items-center w-full md:justify-center py-3">
                        <FaLinkedinIn className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">LinkedIn</p>
                            <p className="font-semibold text-md md:text-lg"><a href="https://www.linkedin.com/in/christine-manabat-5a1858236/" target="_blank" rel="noopener noreferrer">Christine Manabat</a> </p>
                        </div>
                    </div>

                    <div className="flex items-center w-full md:justify-center py-3">
                        <FaGithub className="text-blue-900 text-2xl" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm md:text-md text-gray-600">Github</p>
                            <p className="font-semibold text-md md:text-lg"><a href="https://github.com/tinemanabs" target="_blank" rel="noopener noreferrer">tinemanabs</a></p>
                        </div>
                    </div>
                </div>

                <div className="px-7 mb-7">
                    <div className="education-section">
                        <div className="font-bold text-4xl mb-8">Education</div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="flex gap-2">
                                <img src={collegeSeal} alt="" className="w-20 h-24" />
                                <div>
                                    <h1 className="font-bold text-xl">FEU Institute of Technology</h1>
                                    <p className="text-lg font-semibold">2018-2023</p>
                                    <p>Bachelor of Science in Information Technology with specialization in Web and Mobile Applications</p>
                                </div>

                            </div>
                            <div className="flex gap-2">
                                <img src={hsLogo} alt="" className="w-20 h-24" />
                                <div>
                                    <h1 className="font-bold text-xl">St. Mary's College, Quezon City</h1>
                                    <p className="text-lg font-semibold">2016-2018</p>
                                    <p>Science, Technology, Engineering, Mathematics Strand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-7 mb-7">
                    <div className="experience-section">
                        <div className="font-bold text-4xl mb-8">Experience</div>
                        <div>
                            <ul className="relative border-l border-gray-200">
                                <li className="mb-10 ml-4 shadow-sm p-4">
                                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -left-1.5"></div>
                                    <div className="text-gray-400">September 2022</div>
                                    <h1 className="font-bold text-xl">Digital Specialist Intern</h1>
                                    <h3 className="text-gray-500 text-lg">Datawords</h3>
                                    <p className="max-w-6xl text-justify">Configuration, and adaptation of website through CMS (Sales Force - Demandware), quality assurance of digital support across desktop and mobile environments, editing and localization of digital content (includes videos, images, banners…), asset management of images (modification, resizing, classification)</p>
                                </li>
                                <li className="mb-10 ml-4 shadow-sm p-4">
                                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -left-1.5"></div>
                                    <div className="text-gray-400">May 2022</div>
                                    <h1 className="font-bold text-xl">Software Engineer Intern</h1>
                                    <h3 className="text-gray-500 text-lg">Cobra Itech Services Corporation</h3>
                                    <p className="max-w-6xl text-justify">
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
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
                                    <img src={laravel} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={codeigniter} alt="" srcset="" className="w-16" />
                                </div>
                                <div className="card shadow-md rounded-lg p-2">
                                    <img src={mysql} alt="" srcset="" className="w-16" />
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
                            <div className="font-bold text-4xl mb-8">Achievements</div>
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
                    <div className="certifications-section">
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