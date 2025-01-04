import React from "react";
// Import the Material-UI components
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Button } from "@mui/material";
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
            <li><a className="text-black">About Me</a></li>
            <li><a className="text-black">Projects</a></li>
            <li><a className="text-black">Contact Me</a></li>
          </ul>
        </div>
        <h2 className="ml-10 text-xl text-white">Mahdi</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-white hover:bg-slate-400">About Me</a></li>
          <li><a className="text-white hover:bg-slate-400">Projects</a></li>
          <li><a className="text-white hover:bg-slate-400">Contact Me</a></li>
        </ul>
      </div>
      <div className="navbar-end">
       <a  href='https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png' aria-label="Cv" 
      target="_blank" 
      rel="noopener noreferrer" className="btn bg-yellow-400 text-black border-spacing-0" >Download My CV</a>
      </div>
    </div>
  );
};

export default Navbar;
