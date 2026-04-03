import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-scroll";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Me", to: "about-me" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" }
  ];

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-[#021526]/80 backdrop-blur-lg w-full border-b border-white/5 py-4 transition-all">
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-white/5"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-[#0a1f35]/95 backdrop-blur-xl border border-white/10 rounded-2xl z-[1] mt-4 w-56 p-4 shadow-2xl ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 text-base font-outfit text-white hover:text-blue-400 hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo and Title */}
        <div className="flex items-center sm:ml-10">
          <FaCode className="text-blue-400 text-3xl drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] ml-2" />
          <h2 className="ml-3 text-2xl font-league tracking-wider text-white uppercase mt-1">Mahdi</h2>
        </div>
      </div>

      {/* Center Navbar Items (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="font-outfit font-medium text-gray-300 hover:text-white relative group cursor-pointer transition-colors"
                activeClass="text-white"
                spy={true}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End (Download Resume Button) */}
      <div className="navbar-end pr-4 sm:pr-10">
        <a
          href="https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 font-outfit font-medium text-white transition-all duration-300 rounded-full"
        >
          <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-[2px] opacity-80 group-hover:blur-sm overflow-hidden transition-all duration-300"></span>
          <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-[2px] opacity-100 transition-transform group-hover:scale-105 duration-300">
             <span className="flex h-full w-full rounded-full bg-primaryBg group-hover:bg-primaryBg/60 transition-colors duration-500"></span>
          </span>
          <span className="relative flex items-center gap-2 text-sm md:text-base tracking-wide font-outfit drop-shadow-md">
            Download <RiDownloadCloud2Line className="text-lg md:text-xl" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
