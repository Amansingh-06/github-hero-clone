import { FaGithub } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Navbar */}
        

            {/* Desktop Navbar */}
            <nav className="flex justify-between items-center px-6 lg:px-16 py-4 bg-opacity-10 backdrop-blur fixed w-full z-30 text-white">
                {/* Left Section */}
                <div className="flex items-center gap-6 lg:gap-10">
                    {/* Logo */}
                    <div className="text-3xl lg:text-4xl">
                        <FaGithub />
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex space-x-4 lg:space-x-6">
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Product <IoChevronDownSharp className="text-gray-300" />
                        </a>
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Solutions <IoChevronDownSharp className="text-gray-300" />
                        </a>
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Resources <IoChevronDownSharp className="text-gray-300" />
                        </a>
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Open Source <IoChevronDownSharp className="text-gray-300" />
                        </a>
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Enterprise <IoChevronDownSharp className="text-gray-300" />
                        </a>
                        <a href="#" className="hover:underline">Pricing</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 lg:gap-6">
                    {/* Search Bar */}
                    <div className="relative hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search or jump to..."
                            className="p-2 bg-white bg-opacity-5 rounded shadow-lg backdrop-blur-sm border border-white border-opacity-30 w-60 lg:w-72 pl-10 text-sm"
                        />
                        <IoIosSearch className="absolute top-2 left-3 text-gray-400" />
                    </div>

                    {/* Sign-in and Sign-up Buttons */}
                    <div className="flex space-x-2">
                        <button className="bg-transparent px-3 py-2 hover:underline">
                            Sign in
                        </button>
                        <button className="px-3 py-2 border rounded border-gray-400 hover:bg-gray-600">
                            Sign up
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
