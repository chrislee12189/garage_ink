import React from 'react';
import { navLinks } from '../constants';
import { logos } from '../assets';

export const Navbar = () => {
return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src = {logos[0]} alt="garage_logo" className="w-[200px] h-[200px] sm:p-5" />
        <ul className = "list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
</nav>
)
}

export default Navbar
