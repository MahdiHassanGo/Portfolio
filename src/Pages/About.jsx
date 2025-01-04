import React from "react";

const About = () => {
  return (
    <div id="about-me"  className="relative bg-primaryBg h-screen flex flex-col items-center justify-center text-center ">
    

      {/* Background Image Section */}
      <div className="relative w-full max-w-5xl px-4">
        <img
          src="./assets/Myphoto.jpg"
          alt="My Photo"
          className="w-full object-cover rounded-lg"
        />

        {/* Text Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ marginTop: "200px" }}
        >
          <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-league text-[#f5e7d4]">
            ABOUT ME
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-[#f5e7d4] mt-2">
            In addition to my academic pursuits, <br /> I have a strong passion
            for coding and enjoy playing story-driven games, <br />
            which fuels my creativity and problem-solving skills.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-4 md:bottom-10 flex justify-between w-full px-4 md:px-8 text-[#f5e7d4] text-xs md:text-sm">
        <span>Mahdi Hassan Noor Asif</span>
        <span className="font-league text-base md:text-xl">Web Developer</span>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2">
        <span className="text-[#f5e7d4] text-lg md:text-2xl">→</span>
      </div>
    </div>
  );
};

export default About;
