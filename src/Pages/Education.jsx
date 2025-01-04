import React, { useEffect } from 'react';
import AOS from 'aos';
  import 'aos/dist/aos.css'
const Education = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
       AOS.init();
     }, 1500); 
      return () => clearTimeout(timer);
   }, []);
  const educationData = [
    {
      period: "2022-Present",
      institution: "American International University-Bangladesh",
      description: "Studying Computer Science and Engineering"
    },
    {
      period: "2019-2021",
      institution: "Kishoreganj Model School and College",
      description: "Completed Higher School Certificate"
    },
    {
      period: "2018-2019",
      institution: "Azimuddin High School",
      description: "Completed Secondary School Certificate"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-primaryBg p-8 md:p-12" >
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20"  data-aos="fade-left">
        <h1 className="text-webdev text-[48px] md:text-[120px] leading-none font-bold md:ml-10">
          EDUCATION
        </h1>
        <div className="relative mt-4 md:mt-0 md:ml-2">
          <img 
            src="./assets/Education.jpg"
            alt="Profile"
            className="w-full md:w-[500px] h-auto md:h-[200px] object-cover rounded-lg mr-20"
          />
          <div className="absolute top-4 right-[-20px] text-2xl">
            <svg 
              width="50" 
              height="50" 
              viewBox="0 0 24 24" 
              className="text-webdev "
            >
              <path 
                fill="currentColor" 
                d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4z"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-20"  data-aos="fade-right">
        {educationData.map((item, index) => (
          <div key={index} className="text-webdev">
            <div className="mb-2 text-sm font-medium">
              {item.period}
            </div>
            <div className="mb-2 text-lg font-bold">
              {item.institution}
            </div>
            <div className="text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 md:mt-20">
        <h2 className="text-webdev text-xl">
          Mahdi Hassan Noor Asif
        </h2>
      </div>
    </section>
  );
};

export default Education;
