import React, { useState } from "react";


const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const menuBtnHandler = () => {
        console.log('clicked')
        setIsClicked(!isClicked);
    }

    const navItem = [
        {
            id: 1,
            name: 'Home'
        },
        {
            id: 2,
            name: 'About'
        },
        {
            id: 3,
            name: 'Resume'
        },
        {
            id: 4,
            name: 'Works'
        },
        {
            id: 5,
            name: 'Contact'
        }
    ]

    return (
        <nav className="px-4 sm:px-9 py-2.5">
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" id="logo" className="text-5xl text-blue-700">cm</a>
                <button className="inline-flex md:hidden" onClick={menuBtnHandler}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                        </path>
                    </svg>
                </button>
                <div className="hidden md:block">
                    <ul className="flex flex-row">
                        {navItem.map((item) => (
                            <li key={item.id}>
                                <a href="#" className="text-lg px-3 font-semibold">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {isClicked && <div className="block md:hidden mt-4">
                <ul className="flex flex-col">
                    {navItem.map((item) =>
                        <li key={item.id} className="py-1">
                            <a href="#" className="text-lg px-3">{item.name}</a>
                        </li>
                    )}
                </ul>
            </div> // mobile nav
            }

        </nav >
    );
};

export default Navbar;