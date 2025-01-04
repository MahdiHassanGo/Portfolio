import React, { useEffect, useRef, memo } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const HomePage = memo(() => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: [" Web Developer", " Student", " Gamer"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      });
    }
  }, []);

  return (
    <div className="hero bg-primaryBg min-h-screen mb-10">
      <div className="hero-content flex-col mt-5">
        <img
          src="./assets/Main.png"
          className="max-w-full rounded-lg shadow-2xl"
          alt="Main Hero"
        />
        <div>
          <h1 className="text-5xl font-bold text-white text-center  justify-center">
            Hi! My name is<span className="text-webdev ml-2"> Mahdi Hassan Noor</span>
          </h1>
          <p className="py-6 text-white text-center text-2xl">
            I am a
            <span className="text-webdev" id="typewriter" ref={typewriterRef}></span>
          </p>

          
          <nav>
  <div className="flex justify-center gap-4">
    <a 
      href="https://www.linkedin.com/in/mahdihassannoorasif/" 
      aria-label="LinkedIn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaLinkedin className="text-white text-2xl" />
    </a>
    <a 
      href="https://github.com/MahdiHassanGo" 
      aria-label="GitHub" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaGithub className="text-white text-2xl"/>
    </a>
    <a 
      href="https://www.facebook.com/mahdihassan.noor/" 
      aria-label="Facebook" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current text-white"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </div>
</nav>

          <div className="flex justify-center mt-6">
            <a  href='https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png' aria-label="Cv" 
      target="_blank" 
      rel="noopener noreferrer" className="btn bg-yellow-400">Download Resume</a>
          </div >
        </div>
      </div>
    </div>
  );
});

export default HomePage;