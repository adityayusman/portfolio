import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import Laravel from "../assets/laravel.png";
import Tailwind from "../assets/tailwind.png";
import MySQL from "../assets/mysql.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full sm:h-screen h-full bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FE3A4A]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid sm:grid-cols-4 grid-cols-2 gap-5 text-center py-8">
          <div className="border-b-4 border-b-[#e44c24] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="border-b-4 border-b-[#0c74b4] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="border-b-4 border-b-[#f3e31b] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="border-b-4 border-b-[#08dcfc] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactJS} alt="HTML icon" />
            <p className="my-4">REACT JS</p>
          </div>
          <div className="border-b-4 border-b-[#0469ac] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="border-b-4 border-b-[#ff2c1c] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Laravel} alt="HTML icon" />
            <p className="my-4">LARAVEL</p>
          </div>
          <div className="border-b-4 border-b-[#15abbb] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="border-b-4 border-b-[#08546c] rounded-b-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="HTML icon" />
            <p className="my-4">MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
