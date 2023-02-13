import React from 'react'
import { navLinks } from '../constants'


export const Navbar = () => {
return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <p className="font-poppins mr-10 text-white w-[130px] h-[22px]">Garage Ink</p>

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
