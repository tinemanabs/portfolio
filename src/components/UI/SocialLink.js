import React from "react";

const SocialLink = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="group">
            <div className="flex items-center justify-center rounded-md w-10 h-10 bg-gray-100 group-hover:bg-blue-700 group-hover:shadow-lg">
                {props.children}
            </div>
        </a>
    )
};

export default SocialLink;