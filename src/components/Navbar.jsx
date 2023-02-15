import React from 'react';
import { useState } from "react";
import { navLinks } from '../constants';
import { logos } from '../assets';

//CLOSE BUTTON NOT APPEARING OR WORKING

export const Navbar = () => {
    const  [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const menu = logos[1];
    const close = logos[2];

return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src = {logos[0]} alt="garage_logo" className="w-[200px] h-[200px] sm:p-5" />


        <ul className = "list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`} onClick={() => setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle(!toggle)}/>

        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] 
                ${active === nav.title ? "text-white" : "text-dimWhite"}
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </nav>
)
}

export default Navbar
