import React from 'react';
import { useState } from "react";
import { navLinks } from '../constants';
import { logos } from '../assets';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const  [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const close = logos[2]
    const menu = logos[1]



    //navbar renders full width across the top on big screens and swaps to hamburger menu on medium and small. Jye has had issues with the flex hidden properites that target the breakpoints and trigger the swappping from full to hamburger. Could not recreate his issue and tested it with simon who used a mac and could not find an issue. Unsure how to replicate it as it seems specific to one machine. 
    //if your machine happens to have the same problem, you can manipulate the breakpoints/flex hidden properites to get it to appear permanently.
    //the line of code relevant to this explanation is line 24: <ul className="list-none md:flex hidden justify-end items-center flex-1 z-10">







return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <img src={logos[0]} alt="garage_logo" className="w-[100px] h-[100px] " />


    {/* set up nav and breakpoint to hide full width nav on smaller devices  */}

    <ul className="list-none md:flex hidden justify-end items-center flex-1 z-10">
        {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} onClick={() => setActive(nav.title)}>
            <Link to={`${nav.id}`}>{nav.title}</Link>
        </li>
    ))}
    </ul>

            {/* set up hamburger menu nav for smaller devices */}
    <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)}/>

        <div className={`${ !toggle ? "hidden" : "flex"} z-10 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => 
            (<li key={nav.id} 
            className={`font-poppins font-medium cursor-pointer text-[16px] 
            ${active === nav.title ? "text-white" : "text-dimWhite"}
            ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
            onClick={() => 
            setActive(nav.title)}>
                <Link to={`${nav.id}`}>{nav.title}</Link>
            </li>
        ))}
    </ul>
</div>
</div>
</nav>
);
};


export default Navbar
