import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="about-me" className="relative bg-primaryBg min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden z-0">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Image / Visuals */}
        <div className="w-full lg:w-1/2 relative group" data-aos="fade-right">
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a1f35]">
            <img
              src="./assets/Myphoto.jpg"
              alt="Mahdi Hassan Noor Asif"
              className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            />
            {/* Soft inner shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primaryBg via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Content Box (Glassmorphism) */}
        <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             
             {/* Decorative accent */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

             <div className="relative z-10">
               <h2 className="text-blue-400 font-outfit uppercase tracking-widest text-sm font-semibold mb-2">Discover</h2>
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-league text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 drop-shadow-sm">
                 ABOUT ME
               </h1>
               
               <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

               <p className="text-gray-300 font-outfit text-lg md:text-xl leading-relaxed font-light">
                 In addition to my academic pursuits, I have a strong passion for coding and bringing ideas to life on the web. I enjoy playing story-driven games, which fuels my creativity and deepens my problem-solving skills.
               </p>

               <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between border-t border-white/10 pt-8">
                 <div>
                   <h3 className="text-white font-outfit font-medium text-lg">Mahdi Hassan Noor Asif</h3>
                   <span className="text-blue-400 font-outfit text-sm">Passionate Web Developer</span>
                 </div>
                 <div className="w-full sm:w-auto flex flex-col items-start sm:items-end font-league text-2xl text-gray-500 opacity-50 uppercase tracking-widest">
                    <span>Developer</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
