import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const menuBtnHandler = () => {
        console.log('clicked')
        setIsClicked(!isClicked);
    }

    const navItem = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About',
            link: '/about'
        },
        {
            id: 3,
            name: 'Projects',
            link: '/projects'
        },
    ]

    return (
        <nav className="px-4 sm:px-9 py-2.5 bg-blue-900">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" id="logo" className="text-5xl text-white">cm</Link>
                <button className="inline-flex md:hidden text-white hover:bg-gray-50 hover:text-gray-500 rounded-md" onClick={menuBtnHandler}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                        </path>
                    </svg>
                </button>
                <div className="hidden md:block">
                    <ul className="flex flex-row">
                        {navItem.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} className="text-lg px-3 font-semibold text-white">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {isClicked && <div className="block md:hidden mt-4">
                <ul className="flex flex-col">
                    {navItem.map((item) =>
                        <li key={item.id} className="py-1">
                            <Link to={item.link} className="text-lg font-semibold text-white">{item.name}</Link>
                        </li>
                    )}
                </ul>
            </div> // mobile nav
            }

        </nav >
    );
};

export default Navbar;