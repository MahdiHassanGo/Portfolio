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
    AOS.init({ duration: 1000, once: true });
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
    <div id="home" className="relative bg-primaryBg min-h-screen flex flex-col items-center justify-center overflow-hidden z-0 pt-20 pb-10">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none -z-10"></div>

      {/* Background Marquee Text
      <div className="absolute top-[40%] md:top-[45%] left-0 flex overflow-hidden whitespace-nowrap pointer-events-none z-0 opacity-10 md:opacity-20 select-none w-full -translate-y-1/2 mix-blend-screen">
        <div className="flex animate-marquee shrink-0 w-max">
          <span className="font-league text-[140px] md:text-[240px] font-bold text-transparent uppercase tracking-widest mx-4" style={{ WebkitTextStroke: "3px rgba(255,255,255,0.7)" }}>
            WEB DEVELOPER • MERN STACK • 
          </span>
          <span className="font-league text-[140px] md:text-[240px] font-bold text-transparent uppercase tracking-widest mx-4" style={{ WebkitTextStroke: "3px rgba(255,255,255,0.7)" }}>
            WEB DEVELOPER • MERN STACK • 
          </span>
          <span className="font-league text-[140px] md:text-[240px] font-bold text-transparent uppercase tracking-widest mx-4" style={{ WebkitTextStroke: "3px rgba(255,255,255,0.7)" }}>
            WEB DEVELOPER • MERN STACK • 
          </span>
          <span className="font-league text-[140px] md:text-[240px] font-bold text-transparent uppercase tracking-widest mx-4" style={{ WebkitTextStroke: "3px rgba(255,255,255,0.7)" }}>
            WEB DEVELOPER • MERN STACK • 
          </span>
        </div>
      </div> */}

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Animated Greeting */}
        <div className="mb-6 z-20" data-aos="fade-down">
          <TextGenerateEffect 
            duration={2} 
            filter={false} 
            words={words} 
            className="text-5xl md:text-6xl lg:text-7xl font-league tracking-widest uppercase text-white drop-shadow-xl" 
          />
        </div>

        {/* Hero Circular/Profile Setup */}
        <div className="relative group my-12 flex justify-center items-center" data-aos="zoom-in" data-aos-delay="200">
           {/* Glow behind image */}
           <div className="absolute inset-x-0 -bottom-4 mx-auto w-[250px] h-[30px] bg-blue-500/50 blur-3xl group-hover:bg-purple-400/80 transition-all duration-700"></div>
           
           {/* Floating Typography Badges */}
        
           <div className="absolute -left-6 md:-left-24 top-1/4 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-green-400 font-medium text-[9px] md:text-sm animate-[bounce_4s_infinite] block drop-shadow-lg">NodeJS</span>
           </div>
           <div className="absolute -left-8 md:-left-32 bottom-1/3 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-yellow-400 font-medium text-[9px] md:text-sm animate-[bounce_3.5s_infinite] block drop-shadow-lg">Python</span>
           </div>
           <div className="absolute -left-8 md:-left-32 bottom-1/3 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-yellow-400 font-medium text-[9px] md:text-sm animate-[bounce_3.5s_infinite] block drop-shadow-lg">Firebase</span>
           </div>
           <div className="absolute -left-2 md:-left-10 bottom-6 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-indigo-400 font-medium text-[9px] md:text-sm animate-[bounce_5s_infinite] block drop-shadow-lg">C++</span>
           </div>

           <div className="absolute -right-2 md:-right-10 top-6 md:top-10 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-purple-400 font-medium text-[9px] md:text-sm animate-[bounce_3.2s_infinite] block drop-shadow-lg">ReactJS</span>
           </div>
           <div className="absolute -right-6 md:-right-24 top-1/3 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-pink-400 font-medium text-[9px] md:text-sm animate-[bounce_4.5s_infinite] block drop-shadow-lg">MongoDB</span>
           </div>
           <div className="absolute -right-8 md:-right-32 bottom-1/4 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-blue-300 font-medium text-[9px] md:text-sm animate-[bounce_3.8s_infinite] block drop-shadow-lg">MySQL</span>
           </div>
           <div className="absolute right-0 md:-right-10 bottom-4 md:bottom-10 z-30 pointer-events-none">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-gray-300 font-medium text-[9px] md:text-sm animate-[bounce_5.5s_infinite] block drop-shadow-lg">Express</span>
           </div>

           <div className="absolute left-1/4 -top-6 md:-top-10 z-30 pointer-events-none">
               <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-blue-200 font-medium text-[9px] md:text-sm animate-[bounce_6s_infinite] block shadow-[0_0_15px_rgba(255,255,255,0.1)] drop-shadow-lg">PHP</span>
           </div>

           <div className="absolute left-1/4 -top-6 md:-top-10 z-30 pointer-events-none">
               <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-outfit text-blue-200 font-medium text-[9px] md:text-sm animate-[bounce_6s_infinite] block shadow-[0_0_15px_rgba(255,255,255,0.1)] drop-shadow-lg">NextJS</span>
           </div>
           
       

           <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-blue-600 via-purple-500 to-indigo-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_70px_rgba(59,130,246,0.6)] transition-all duration-500 z-20">
             <div className="bg-primaryBg rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 border-4 border-[#021526] flex items-center justify-center">
                <img
                  src="./assets/MyPhoto.png"
                  className="w-full h-full object-cover scale-110 group-hover:scale-[1.12] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  alt="Mahdi Hassan Noor Asif"
                  onContextMenu={(e) => e.preventDefault()}
                />
             </div>
           </div>
        </div>

        {/* Typewriter Output */}
        <div className="mt-8 z-20" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl md:text-5xl font-outfit text-white font-light flex flex-col md:flex-row items-center justify-center gap-3">
            <span>I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium" ref={typewriterRef}></span>
          </h2>
        </div>

        {/* Social Navigation */}
        <nav className="mt-12" data-aos="fade-up" data-aos-delay="500">
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/mahdihassannoorasif/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0a66c2] hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin className="text-3xl md:text-4xl" />
            </a>
            <a
              href="https://github.com/MahdiHassanGo"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <FaGithub className="text-3xl md:text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/mahdihassan.noor/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877f2] hover:scale-125 transition-all duration-300"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </a>
          </div>
        </nav>

        {/* CTA Button
        <div className="flex justify-center mt-14 z-20 pb-10" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://i.ibb.co.com/DGjtQ5d/White-and-Black-Tech-Professional-Resume.png"
            aria-label="Cv"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-outfit font-medium text-white transition-all duration-300 rounded-full"
          >
            <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-[2px] opacity-100 group-hover:blur-sm overflow-hidden transition-all duration-300">
            </span>
            <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-[2px] opacity-100 transition-transform hover:scale-105 duration-300">
               <span className="flex h-full w-full rounded-full bg-primaryBg group-hover:bg-primaryBg/50 transition-colors duration-500"></span>
            </span>
            <span className="relative text-xl tracking-wide font-outfit drop-shadow-md">Download Resume</span>
          </a>
        </div> */}
      </div>
    </div>
  );
});

export default HomePage;
