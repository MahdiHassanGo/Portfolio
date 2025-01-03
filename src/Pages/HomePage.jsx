import React, { useEffect, useRef, memo } from "react";
import Typewriter from "typewriter-effect/dist/core";

const HomePage = memo(() => {
 
  const typewriterRef = useRef(null);

  useEffect(() => {

    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: [" Web Developer", " Student", " Gamer"],
        autoStart: true,
        loop: true, 
        delay: 75,
        deleteSpeed: 50, 
      });
    }
  }, []);

  return (
    <div className="hero bg-primaryBg min-h-screen">
      <div className="hero-content flex-col mt-5">
        <img
          src="./public/assets/Main.png"
          className="max-w-full rounded-lg shadow-2xl"
          alt="Main Hero"
        />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Hi! My name is <span className="text-webdev">Mahdi Hassan Noor</span>
          </h1>
          <p className="py-6 text-white text-center mr-2 text-2xl">
     I am a
            <span className="text-webdev" id="typewriter" ref={typewriterRef}></span>
          </p>
   
        </div>
      </div>
    </div>
  );
});

export default HomePage;
