import React, { useEffect } from "react";
import personalImgPng from '../assets/personalImgCopy.png';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import SocialLink from "./UI/SocialLink";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="h-full bg-white p-9">
                <div className="container h-full grid grid-cols-1 lg:grid-cols-12 mx-auto gap-3 md:gap-0">
                    <div className="col-span-6 flex lg:items-start md:justify-start lg:justify-center flex-col lg:order-first order-last text-center" data-aos="fade-right">
                        <div className="text-4xl lg:text-7xl font-bold">Hi, I'm <span className="text-blue-900">Christine</span></div>
                        <div className="text-justify font-medium">
                            A passionate Web Developer who likes to code from scratch and build innovative ideas in to the browser. Exposed on creating and designing web applications through different frameworks and libraries.
                        </div>
                        <div className="flex mt-4 justify-center lg:justify-start gap-3">
                            <SocialLink link="https://www.facebook.com/tinemanabat/">
                                <FaFacebookF className="w-7 h-7 text-gray-600 group-hover:text-white" />
                            </SocialLink>

                            <SocialLink link="https://www.linkedin.com/in/christine-manabat-5a1858236/">
                                <FaLinkedinIn className="w-7 h-7 text-gray-600 group-hover:text-white" />
                            </SocialLink>

                            <SocialLink link="https://github.com/tinemanabs">
                                <FaGithub className="w-7 h-7 text-gray-600 group-hover:text-white" />
                            </SocialLink>

                            <SocialLink link="mailto:christinemmanabat@gmail.com">
                                <FaEnvelope className="w-7 h-7 text-gray-600 group-hover:text-white" />
                            </SocialLink>
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center" data-aos="fade-left">
                        <div className="relative">
                            <div className="rounded-full bg-blue-900 lg:w-96 lg:h-96 md:w-80 md:h-80 w-64 h-64 shadow-xl"></div>
                            <img src={personalImgPng} alt="" className="absolute rounded-full lg:w-96 md:w-80 w-64 top-0" />
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Home;
