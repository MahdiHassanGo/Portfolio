import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-scroll";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-10 bg-opacity-30 backdrop-blur-md w-full">
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                className="p-[3px] rounded-full w-max z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative text-white">
                  About Me
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="p-[3px] rounded-full w-max z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative text-white">
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="p-[3px] rounded-full w-max z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative text-white">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="contact-me"
                smooth={true}
                duration={500}
                className="p-[3px] rounded-full w-max z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative text-white">
                  Contact Me
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo and Title */}
        <div className="flex items-center">
          <FaCode className="text-white text-3xl ml-1 sm:ml-20" />
          <h2 className="ml-2 text-xl text-white">Mahdi</h2>
        </div>
      </div>

      {/* Center Navbar Items (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
            >
              <span className="bg-primary px-4 py-[4px] rounded-full relative text-white">
               Home
              </span>
            </Link>
          </li>
          <li>
            
            <Link
              to="about-me"
              smooth={true}
              duration={500}
              className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
            >
              <span className="bg-primary px-4 py-[4px] rounded-full relative text-white">
                About Me
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
            >
              <span className="bg-primary px-4 py-[4px] rounded-full relative text-white">
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
            >
              <span className="bg-primary px-4 py-[4px] rounded-full relative text-white">
                Projects
              </span>
            </Link>
          </li>
        
          <li>
            <Link
              to="contact-me"
              smooth={true}
              duration={500}
              className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
            >
              <span className="bg-primary px-4 py-[4px] rounded-full relative text-white">
                Contact Me
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End (Download Resume Button) */}
      <div className="navbar-end ">
  <a
    href='https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png'
    download={true}
    className="btn bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn rounded-full h-max min-h-max border-none hover:border-none "
  >
    <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 px-1 py-1 rounded-full relative text-white sm:px-6 sm:py-3">
      <span className="text-sm sm:text-base">Download Resume</span>
      <RiDownloadCloud2Line className="text-sm sm:text-base" />
    </span>
  </a>
</div>
    </div>
  );
};

export default Navbar;