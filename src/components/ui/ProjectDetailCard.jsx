import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const ProjectDetailCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 my-24 w-full ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 group relative rounded-2xl shadow-2xl p-2 bg-gradient-to-br from-white/10 to-transparent">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block relative z-10 w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0a1f35]"
        >
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
          />
          {/* Overlay with CTA */}
          <div className="absolute inset-0 bg-primaryBg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
             <div className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-outfit font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
               Visit Live Site <ExternalLink size={18} />
             </div>
          </div>
        </a>
        
        {/* Decorative Blurred Glow */}
        <div className="absolute -inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl opacity-40 -z-10 rounded-[2rem] transition-opacity duration-700 group-hover:opacity-100"></div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start font-outfit text-white">
        <h3 className="font-league text-5xl md:text-6xl tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 drop-shadow-sm">
          {project.title}
        </h3>
        
        <p className="text-gray-300 md:text-lg leading-relaxed mb-6 font-light">
          {project.overview}
        </p>

        {project.features && project.features.length > 0 && (
          <div className="mb-6 w-full">
            <h4 className="text-xl font-medium mb-3 text-white border-b border-white/10 pb-2">Key Highlights</h4>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1 flex-shrink-0 text-sm">✦</span>
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack section */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full text-sm font-light text-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all border border-blue-500/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          View Project <ExternalLink size={20} />
        </a>
      </div>
    </motion.div>
  );
};
