import React, { useState } from "react";

const projects = [
  {
    name: "CareHive",
    image: "https://i.ibb.co.com/YkS02B7/Project-3.png", // Replace with actual project image URL
    description:
      "A platform designed to connect donors to provide winter clothing to those in need across Bangladesh.",
    link: "https://clothing-donation-d23d4.web.app/",
  },
  {
    name: "Crowd-Cube",
    image: "https://i.ibb.co.com/rvSH4BQ/Project-2.png",
    description:
      "A platform designed to revolutionize investment by connecting businesses and investors. ",
    link: "https://crowdcube-14ee1.web.app/",
  },
  {
    name: "WhereIsIt",
    image: "https://i.ibb.co.com/99xBbD0/Project-1.png",
    description:
      "A Lost and Found web application designed to help users report lost items, browse found items, and connect with others to recover belongings.",
    link: "https://whereisit-88cd2.web.app",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div id="projects">
    
      <div className="flex justify-center my-8">
        <div className="mockup-code w-full max-w-xs mx-auto">
          <pre data-prefix="$">
            <code>npm i Projects</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>

      <section className="min-h-fit bg-primaryBg py-14">
        <div className="md:container px-5">
          <div className="flex flex-wrap gap-8 justify-center mx-auto">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`bg-card sm:cursor-pointer 
                  group w-full sm:w-[22rem] flex flex-col
                  items-center gap-3 p-4 rounded-md border-2 
                  ${
                    hoveredProject === project
                      ? "border-webdev"
                      : "border-gray-700"
                  }
                  ${
                    hoveredProject && hoveredProject !== project
                      ? "blur-sm"
                      : ""
                  }`}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded-md h-40 object-cover group-hover:scale-105 duration-200"
                />

                {/* Project Details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white group-hover:text-webdev">
                    {project.name}
                  </h3>
                  <p className="text-white italic">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
