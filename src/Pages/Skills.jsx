import { cn } from "../lib/utils";
import React, { createElement, useEffect, useState } from "react";
import Modal from "react-modal";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BackgroundGradient } from "../components/ui/background-gradient";

const skills = {
  skills_content: [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      para: "Frontend library for building user interfaces.",
      link: "https://reactjs.org"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
      para: "Programming language of the web.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "Node JS",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
      para: "To create servers, web apps, command line tools, and scripts.",
      link: "https://nodejs.org"
    },
    {
      name: "Firebase",
      logo: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png",
      para: "For authentication",
      link: "https://firebase.google.com"
    },
    {
      name: "MongoDB",
      logo: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
      para: "To store and manage data in a document-oriented database.",
      link: "https://www.mongodb.com"
    },
    {
      name: "Express Js",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s",
      para: "To build fast and scalable server-side applications js.",
      link: "https://expressjs.com"
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
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="skills" className="w-full flex flex-col items-center">
      <h2 className="text-white text-5xl text-center font-league mt-10" data-aos="fade-down">
        My Skills
      </h2>

      <section className="min-h-fit bg-primaryBg w-full" id="skills">
        <div className="container mx-auto px-4 py-14 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center" data-aos="fade-up">
            {skills.skills_content.map((skill, i) => (
              <BackgroundGradient
                key={i}
                className={`bg-card sm:cursor-pointer relative group flex items-center
                  gap-5 p-4 w-full max-w-xs rounded-md px-6
                  ${hoveredSkill === skill ? "border-white border-0" : "border-webdev border-0"}
                `}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                  window.open(skill.link, "_blank");
                }}
              >
                <div>
                  <img
                    src={skill.logo}
                    alt={`${skill.name} Logo`}
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                </div>
                <div>
                  <h6 className="font-bold text-3xl text-white hover:text-webdev">{skill.name}</h6>
                  <div className="text-xl absolute top-3 right-0  text-white">
                  
                  </div>
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
