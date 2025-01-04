import { createElement, useState } from "react";
import Modal from "react-modal";
import { FaArrowRight } from "react-icons/fa";
const skills = {
  skills_content: [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      para: "Frontend library for building user interfaces.",
      link: "https://reactjs.org" // React website
    },
    {
      name: "JavaScript",
      logo: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
      para: "Programming language of the web.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" // JavaScript MDN
    },
    {
      name: "Node JS",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
      para: "To create servers, web apps, command line tools, and scripts.",
      link: "https://nodejs.org" // Node.js website
    },
    {
      name: "Firebase",
      logo: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png",
      para: "For authentication",
      link: "https://firebase.google.com" // Firebase website
    },
    {
      name: "MongoDB",
      logo: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
      para: "To store and manage data in a flexible, scalable, and document-oriented database, ideal for modern web applications.",
      link: "https://www.mongodb.com" // MongoDB website
    },
    {
      name: "Express Js",
      logo: "https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png",
      para: "to build fast and scalable server-side applications, simplifying the process of handling routes, middleware, and APIs in Node.js.",
      link: "https://expressjs.com" // Express.js website
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Modal background blur
  },
};

Modal.setAppElement("#root");

const Skills = () => {
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
    <div id="skills">
      <div>
        <h2 className="text-white text-5xl text-center font-league mt-10">My Skills</h2>
      </div>
      <section className="min-h-fit bg-primaryBg" id="skills">
        

        <div className="md:container px-5 py-14">
          <h2 className="title" data-aos="fade-down">
            {skills.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {skills.subtitle}
          </h4>
          <br />
          <div className="flex flex-wrap gap-4 justify-center mx-auto">
            {skills.skills_content.map((skill, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                className={`bg-card sm:cursor-pointer 
                  relative group w-full flex items-center
                  gap-5 p-5 max-w-sm rounded-md border-0
                  ${hoveredSkill === skill ? "border-white border-0" : "border-webdev border-2"}

                  ${hoveredSkill && hoveredSkill !== skill ? "blur-sm" : ""}`}
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
                  <p className="italic text-white hover: text-webdev">{skill.para}</p>
                  <div className="text-xl absolute top-3 right-3 text-white">
                    {skills.icon ? createElement(skills.icon) : <FaArrowRight />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
