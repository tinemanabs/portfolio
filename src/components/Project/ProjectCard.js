import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="w-full lg:w-1/3 md:w-1/2 p-2" data-aos="fade-up">
            <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                <img src={props.coverImage} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                <div className="mt-4 p-3">
                    <h1 className="font-bold text-xl">{props.title}</h1>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;