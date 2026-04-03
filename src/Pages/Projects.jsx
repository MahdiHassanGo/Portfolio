import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectDetailCard } from "../components/ui/ProjectDetailCard";

const projects = [
  {
    title: "EzyTicket",
    src: "https://i.ibb.co.com/tTR01TX2/image.png",
    link: "https://ezyticket-7198b.web.app/",
    overview: "A multi-service ticket booking solution for Travel, Events, and Entertainment – built during the Programming Hero Endgame Shadow Internship. It unifies bus, event, and movie ticket booking into a single platform with a user-friendly UI, real-time admin dashboards, and secure booking confirmations.",
    features: [
      "Centralized platform for bus, event, and movie ticket bookings",
      "Secure email-based authentication and OTP-based booking confirmation",
      "Full dashboard control for admins, travel, event, and entertainment managers",
      "Mobile-first, fully responsive user interface with dark/light mode toggle",
      "Visually rich design with banners and interactive elements"
    ],
    stack: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"]
  },
  {
    title: "Academix",
    src: "https://github.com/MahdiHassanGo/Academix-Client/raw/main/img1.png",
    link: "https://academix-a7d0b.web.app/",
    overview: "A powerful and intuitive platform designed to streamline education management for institutions, teachers, students, and administrators. Academix provides a centralized system for managing users, classes, enrollments, and more.",
    features: [
      "User Management: Manage students, teachers, and admins with role-based access control.",
      "Class Management: Create and organize classes with subjects, schedules, and assigned teachers.",
      "Enrollment System: Streamlined student enrollments with intuitive tracking.",
      "Dashboard Analytics: Real-time insights into total users, teachers, classes, and enrollments with interactive charts."
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth"]
  },
  {
    title: "Crowd-Cube",
    src: "https://i.ibb.co.com/GRh8Pqn/image.png",
    link: "https://crowdcube-14ee1.web.app/",
    overview: "CrowdCube is a platform designed to transform investment by bridging the gap between businesses and investors. It provides an easy-to-use interface for businesses seeking funding and investors looking to support innovative projects.",
    features: [
      "Add Campaign: Highlight business ideas and attract investors with compelling pitch pages.",
      "My Donations: Personalized dashboard for donors to track their contributions.",
      "All Campaigns Dashboard: Real-time dashboard where users can explore all active campaigns.",
      "Secure & Seamless Encryption: Ensures data is efficiently managed for businesses and investors."
    ],
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "CareHive",
    src: "https://i.ibb.co.com/SD7RkGgH/image.png",
    link: "https://clothing-donation-d23d4.web.app/",
    overview: "A Winter Clothing Donation Website designed to connect donors with volunteers to provide winter clothing to those in need across Bangladesh. With a mission to bring warmth and comfort, this platform makes donating simple and impactful.",
    features: [
      "Winter-Themed Responsive Design optimized for all devices.",
      "Donation Details: Secure access to campaign details with a comprehensive donation form.",
      "Secure Authentication System via Firebase including Google Sign-In.",
      "Dynamic User Dashboard displaying user profiles and activities."
    ],
    stack: ["React", "TailwindCSS", "DaisyUI", "Firebase"]
  },
  {
    title: "WhereIsIt",
    src: "https://i.ibb.co.com/CKybk8w/image.png",
    link: "https://whereisit-88cd2.web.app",
    overview: "A community-driven lost and found web application where users can report lost items or list found items, helping people recover their belongings.",
    features: [
      "Interactive listings for lost and found items with search functionality.",
      "Secure user authentication for reliable reporting.",
      "Responsive UI built with modern web technologies."
    ],
    stack: ["React", "TailwindCSS", "Node.js", "MongoDB"]
  }
];

const Projects = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="projects" className="w-full flex flex-col items-center mb-10 overflow-hidden bg-primaryBg">
      
      {/* Installation Mockup */}
      <div
        className="flex justify-center mt-12 mb-20 w-full max-w-xs relative z-20"
        data-aos="fade-down"
      >
        <div className="mockup-code w-full bg-[#03091e] border-2 border-[#162345] shadow-[0_0_40px_rgba(30,58,138,0.3)]">
          <pre data-prefix="$">
            <code className="text-gray-200">npm i Projects</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>

      {/* Projects Timeline Area */}
      <section className="min-h-fit py-8 w-full relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-24 font-outfit" data-aos="fade-up">
            <h2 className="text-6xl md:text-7xl font-league uppercase text-white tracking-[0.15em] hover:tracking-[0.2em] transition-all duration-500 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Featured Work
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
              A showcase of my recent full-stack applications, highlighting responsive design, robust backends, and aesthetic user interfaces.
            </p>
          </div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectDetailCard key={project.title} project={project} index={index} />
            ))}
          </div>

        </div>
        
        {/* Decorative background glows */}
        <div className="absolute top-32 left-[-10%] w-[50%] h-[500px] bg-blue-600/15 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen"></div>
      </section>
    </div>
  );
};

export default Projects;