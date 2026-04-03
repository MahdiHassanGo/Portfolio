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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between bg-[#0a1f35]/60 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-7xl px-4 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-white/20">
        
        {/* Logo Section */}
        <div className="flex z-50 items-center pl-2">
          <FaCode className="text-blue-400 text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
          <h2 className="ml-2 md:ml-3 text-xl md:text-2xl font-league font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase mt-1">Mahdi</h2>
        </div>

        {/* Center Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="font-outfit font-medium text-sm text-gray-300 hover:text-white relative group cursor-pointer transition-colors px-2 py-1"
                  activeClass="text-white"
                  spy={true}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Desktop / Mobile Toggle & Buttons */}
        <div className="flex items-center space-x-4 pr-1 sm:pr-2">
          {/* Resume Button (Desktop) */}
          {/* <a
            href="https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png"
            download={true}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 group relative px-5 py-2 font-outfit text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-[#0f2a4a] to-[#163a62] border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            <span>Resume</span>
            <RiDownloadCloud2Line className="text-lg group-hover:translate-y-[1px] transition-transform" />
          </a> */}

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative">
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                )}
              </svg>
            </button>
            
            {/* Mobile Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-14 right-0 mt-2 w-64 bg-[#0a1f35]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-3 px-2 z-50 origin-top-right animate-in fade-in zoom-in duration-200">
                <ul className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-sm font-outfit font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  {/* Mobile Resume Option */}
                  <li className="mt-2 pt-2 border-t border-white/10">
                    <a
                      href="https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png"
                      download={true}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm font-outfit font-medium text-blue-400 hover:text-blue-300 hover:bg-white/10 rounded-xl transition-all"
                    >
                      <span>Download Resume</span>
                      <RiDownloadCloud2Line className="text-xl" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
