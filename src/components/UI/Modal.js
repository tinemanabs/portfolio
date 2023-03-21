import React, { Fragment } from "react";


const Modal = (props) => {
    const languages = props.language;
    const about = props.about;
    const images = props.images;
    return (
        <Fragment>
            <div className="flex justify-center items-center fixed inset-0 z-50 p-4 my-5" >
                <div className="relative w-auto my-6 mx-auto max-w-6xl max-h-full overflow-y-auto">
                    <div className="rounded-lg shadow-lg bg-white p-5">
                        <div className="flex justify-end">
                            <button className="text-gray-400 text-2xl hover:bg-gray-200 hover:text-black rounded-lg px-1.5" onClick={props.onClose}>x</button>
                        </div>

                        <div className="text-center mb-2">
                            <h1 className="font-bold text-2xl text-blue-900">{props.title}</h1>
                            <p className="text-gray-400">{props.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="left-section">
                                <div className="flex flex-wrap mb-2">
                                    <h1 className="text-md font-bold mr-2">Languages:</h1>
                                    {languages.map((language) => (
                                        <span className="text-sm bg-gray-100 text-gray-800 rounded-md py-0.5 px-1.5 font-medium mr-2">{language}</span>
                                    ))}
                                </div>
                                <div className="flex items-center mb-2">
                                    <h1 className="text-md font-bold mr-2">Date:</h1>
                                    <p>{props.date}</p>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="flex items-center mb-2">
                                    <h1 className="text-md font-bold mr-2">Associated with:</h1>
                                    <p>{props.associated}</p>

                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-md font-bold mr-2">Role:</h1>
                                    <p>{props.role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mb-2">
                            <h1 className="text-md font-bold mr-2">About:</h1>
                            {about.map((item) => (
                                <p>{item}</p>
                            ))}
                        </div>
                        {props.resource != null && <div className="grid grid-cols-1 mb-2">
                            <h1 className="text-md font-bold mr-2">Resources:</h1>
                            <a href={props.resourceLink} target="_blank" rel="noopener noreferrer">{props.resource}</a>
                        </div>}

                        {images != null &&
                            <div className="flex flex-wrap">
                                {images.map((img) => (
                                    <div className="w-full lg:w-1/3 p-2">
                                        <img src={img} alt="" className="drop-shadow-lg h-56 w-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </Fragment>
    )
};

export default Modal;