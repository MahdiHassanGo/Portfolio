import React, { useEffect, useRef, memo } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import AOS from 'aos';
  import 'aos/dist/aos.css';
const HomePage = memo(() => {
  const typewriterRef = useRef(null);
  const words = `Hi, My Name is Mahdi Hassan Noor Asif`;
 useEffect(() => {
     const timer = setTimeout(() => {
        AOS.init();
      }, 2000); 
       return () => clearTimeout(timer);
    }, []);
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
    <div id="home" className="hero bg-primaryBg min-h-screen mb-10">
      <div className="hero-content flex-col relative">
        <div className="mt-10 z-10 ">
          <TextGenerateEffect duration={4} filter={false} words={words} />
        </div>

       
        <div className="-mt-15 relative">
        <div className="absolute inset-0 flex  -top-20 md:-top-40
        items-center justify-center text-white  font-league font-bold z-[-20]">
          <img className="max-w-xs md:max-w-7xl" src="./assets/webdev1.png" alt="Web Developer Background 1" data-aos="fade-left" />
        </div>
          <img
            src="./assets/MyPhoto.png"
            className="max-w-[200px] md:max-w-lg rounded-lg z-20"
            alt="Main Hero" data-aos="fade-up"
            onContextMenu={(e) => e.preventDefault()}
          />
             <div className="absolute inset-0 flex
             top-40 md:top-60 items-center justify-center text-white text-6xl font-league font-bold z-0">
            <img className="max-w-xs md:max-w-7xl md:mt-10" src="./assets/webdev2.png" alt="Web Developer Background 2" data-aos="fade-right" />
          </div>

      
        </div>

        <div>
          <p className="py-6 text-white text-center text-4xl">
            I am a
            <span className="text-webdev font-league" id="typewriter" ref={typewriterRef}></span>
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
                <FaGithub className="text-white text-2xl" />
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
            <a
              href="https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png"
              aria-label="Cv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-yellow-400 text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomePage;
