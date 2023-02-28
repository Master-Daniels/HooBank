import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="Hoobank" className="w-[124px] h-[32px] cursor-pointer" />
            <ul className="hidden sm:flex list-none justify-end items-center flex-1">
                {navLinks.map((link, i) => (
                    <li
                        key={link.id}
                        className={`py-2 px-4 rounded-lg font-poppins font-normal cursor-pointer text-[16px] ${
                            i === navLinks.length - 1 ? "mr-0" : "mr-10"
                        } text-white hover:bg-dimWhite hover:text-slate-800 `}
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex justify-between items-center">
                <img
                    src={toggle ? close : menu}
                    alt="Menu"
                    className="w-[20px] h-[20px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${
                        toggle ? "flex" : "hidden"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
                >
                    <ul className="flex list-none justify-end items-center flex-1 flex-col">
                        {navLinks.map((link, i) => (
                            <li
                                key={link.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                                    i === navLinks.length - 1 ? "mr-0" : "mb-10"
                                } text-white `}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
