import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = {
  skills_content: [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png",
      para: "Frontend library for building user interfaces.",
      
    },
    {
      name: "JavaScript",
      logo: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
      para: "Programming language of the web.",

    },
    {
      name: "Node JS",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
      para: "To create servers, web apps, command line tools, and scripts.",
  
    },
    {
      name: "Firebase",
      logo: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png",
      para: "For authentication backend setup and realtime database integration.",
  
    },
    {
      name: "MongoDB",
      logo: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
      para: "To store and manage data in a scalable document-oriented database.",
   
    },
    {
      name: "Express Js",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s",
      para: "To build fast and scalable server-side web applications in node apps.",
    
    },
  ],
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "28rem",
    width: "90%",
    backgroundColor: "#021526",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "1.5rem",
    padding: "3rem",
    color: "#fff",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="skills" className="w-full flex flex-col items-center bg-primaryBg relative z-0 py-24 overflow-hidden">
      
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none -z-10"></div>

      <div className="text-center mb-16 z-10" data-aos="fade-up">
        <h2 className="text-blue-400 font-outfit uppercase tracking-widest text-sm font-semibold mb-2">Technologies</h2>
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-league tracking-widest uppercase drop-shadow-md">
          My Skills
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6 mx-auto"></div>
      </div>

      <section className="min-h-fit w-full z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" data-aos="fade-up" data-aos-delay="200">
            {skills.skills_content.map((skill, i) => (
              <div
                key={i}
                className="group relative w-full max-w-sm sm:cursor-pointer"
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                 
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                
                {/* Card Body */}
                <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0a1f35] rounded-xl flex items-center justify-center p-3 border border-white/5 shadow-inner">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} Logo`}
                      className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out drop-shadow-lg"
                    />
                  </div>
                  <div>
                    <h6 className="font-outfit font-semibold text-2xl text-white tracking-wide group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h6>
                    <p className="text-gray-400 font-outfit font-light text-sm mt-1 line-clamp-2 pr-2">
                       {skill.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Dark Glassmorphism Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Skill Modal"
      >
        {selectSkill && (
          <div className="flex flex-col items-center text-center font-outfit z-50">
            <div className="w-28 h-28 bg-white/5 p-4 rounded-3xl border border-white/10 shadow-2xl mb-6 flex items-center justify-center">
               <img src={selectSkill.logo} alt={selectSkill.name} className="w-full h-full object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-league tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
               {selectSkill.name}
            </h2>
            <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed max-w-sm">
               {selectSkill.para}
            </p>
            <button
              onClick={closeModal}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all font-medium shadow-lg hover:shadow-xl"
            >
              Close Window
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Skills;
