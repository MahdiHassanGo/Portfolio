import React from "react";

const About = () => {
  return (
    <div className="relative bg-primaryBg h-screen flex flex-col items-center justify-center text-center">
      {/* Top-left "Web" Text */}
      <div className="absolute top-10 left-10 text-[#f5e7d4] text-xl font-league">
        Web
      </div>

      {/* Background Image Section */}
      <div className="relative w-full max-w-5xl">
        <img
          src="./assets/Myphoto.jpg"
          alt="My Photo"
          className="w-full object-cover rounded-lg"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ marginTop: "300px" }}>
          <h1 className="text-[5rem] font-league text-[#f5e7d4]">ABOUT ME</h1>
          <p className="text-sm text-[#f5e7d4] mt-2">In addition to my academic pursuits, <br /> I have a strong passion for coding and enjoy playing story-driven games, <br />
           which fuels my creativity and problem-solving skills.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-10 flex justify-between w-full px-8 text-[#f5e7d4] text-sm">
        <span>Mahdi Hassan Noor Asif</span>
        <span className="font-league text-xl">Developer</span>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
        <span className="text-[#f5e7d4] text-2xl">→</span>
      </div>
    </div>
  );
};

export default About;
