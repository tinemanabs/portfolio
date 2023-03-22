import React, { useEffect } from "react";
import personalImgPng from '../assets/personalImg.png';
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
            <div className="h-full bg-white px-9">
                <div className="container h-full grid grid-cols-1 md:grid-cols-2 items-center mx-auto">
                    <div className="md:order-first order-last text-center md:text-left" data-aos="fade-right">
                        <div className="text-4xl md:text-7xl font-bold">Hi, I'm <span className="text-blue-900">Christine</span></div>
                        <div className="text-xl md:text-2xl font-semibold py-2 md:py-4 text-gray-500">Aspiring Web Developer</div>
                        <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum praesentium nisi minus animi tempora eius in, architecto quibusdam recusandae. Inventore distinctio incidunt illo tempora beatae nesciunt pariatur tempore laudantium!</div>
                        <div className="flex mt-4 justify-center md:justify-start gap-3">
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

                    <div className="relative flex items-center justify-center" data-aos="fade-left">
                        <div className="rounded-full bg-blue-900 md:w-96 md:h-96 w-64 h-64 shadow-xl"></div>
                        <img src={personalImgPng} alt="" className="absolute rounded-full md:w-96 w-64 top-0" />
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Home;