import React from "react";
import ProfileImage from "../assets/about.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center text-gray-300 w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-[#FE3A4A] inline">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[700px] w-full md:flex sm:flex-nowrap flex-wrap justify-center items-center gap-8 px-4">
          <div className="my-5">
            <img
              className="max-w-[200px] rounded-full mx-auto"
              src={ProfileImage}
              alt=""
            />
          </div>
          <div>
            <p className="text-center sm:text-start">
              Saya seorang Fresh Graduate yang memiliki keahlian dan passion
              dalam membangun website, termasuk frontend dan backend. Saya
              menyukai suatu hal teknologi baru, dapat beradaptasi dengan cepat
              dan dapat bekerja secara individu maupun dalam tim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
