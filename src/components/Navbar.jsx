import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white" // Set icon color to white
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a href="#about-me" className="text-black about-me">About Me</a>
            </li>
            <li>
              <a href="#skills" className="text-black about-me">Skills </a>
            </li>
            <li>
              <a href="#projects" className="text-black">Projects</a>
            </li>
            <li>
              <a href="#contact-me" className="text-black">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <FaCode className="text-white text-3xl ml-1 sm:ml-20" /> 
          <h2 className="ml-2 text-xl text-white">Mahdi</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about-me" className="text-white hover:bg-slate-400">About Me</a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:bg-slate-400">Projects</a>
          </li>
          <li>
              <a href="#skills" className="text-white hover:bg-slate-400 about-me">Skills </a>
            </li>
          <li>
            <a href="#contact-me" className="text-white hover:bg-slate-400">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a 
          href="https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png" 
          aria-label="Cv" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn bg-yellow-400 text-black border-spacing-0">
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
