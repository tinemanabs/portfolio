import React, { useState } from "react";

const ProjectCard = (props) => {

    return (
        <div className="w-full lg:w-1/3 md:w-1/2 p-2">
            <div className="h-full bg-white rounded-md shadow-lg overflow-hidden">
                <img src={props.coverImage} alt="" className="transition duration-1000 ease-out hover:scale-110" />
                <div className="mt-4 p-3">
                    <h1 className="font-bold text-2xl">{props.title}</h1>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;