import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] h-full flex flex-col justify-center mx-auto px-8">
        <p className="text-[#FE3A4A] font-bold">Hallo, nama saya</p>
        <h1 className="text-gray-300 sm:text-7xl text-4xl font-bold">
          Maulana Aditya Yusman
        </h1>
        <h2 className="text-gray-500 sm:text-7xl text-4xl font-bold">
          Junior Web Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
          Saya seorang Junior Web Developer yang berspesialisasi dalam membangun
          (dan terkadang merancang) website. Saat ini sedang mencari tempat
          untuk magang/ internship.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-gray-300 group border-2 border-gray-300 px-6 py-3 my-2 flex items-center hover:bg-[#FE3A4A] hover:border-[#FE3A4A] hover:text-white">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
