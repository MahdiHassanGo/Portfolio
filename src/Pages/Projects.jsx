import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FocusCards } from "@/components/ui/focus-cards";

const projects = [
  {
    title: "Academix",
    src: "https://i.ibb.co.com/3yj197GG/image.png",
    link: "https://academix-a7d0b.web.app/",
  },
  {
    title: "CareHive",
    src: "https://i.ibb.co.com/YkS02B7/Project-3.png",
    link: "https://clothing-donation-d23d4.web.app/",
  },
  {
    title: "Crowd-Cube",
    src: "https://i.ibb.co.com/GRh8Pqn/image.png",
    link: "https://crowdcube-14ee1.web.app/",
  },
  {
    title: "WhereIsIt",
    src: "https://i.ibb.co.com/CKybk8w/image.png",
    link: "https://whereisit-88cd2.web.app",
  },
];

const Projects = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="projects" className="w-full flex flex-col items-center mb-10">
  
      <div
        className="flex justify-center my-8 mb-10 w-full max-w-xs"
        data-aos="fade-down"
      >
        <div className="mockup-code w-full bg-primaryBg">
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

      {/* FocusCards Section */}
      <section
        className="min-h-fit bg-primaryBg py-14 w-full"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <FocusCards cards={projects} />
        </div>
      </section>
    </div>
  );
};

export default Projects;