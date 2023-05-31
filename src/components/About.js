import React, { useContext, useState } from "react";
import { DarkModeContext } from "../contexts/DarkModeProvider";
import alwiAbout from "../assets/alwiAbout.jpg";
import alwiAboutDark from "../assets/alwiAbout-dark.jpg";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";

function About() {
  const { darkMode } = useContext(DarkModeContext);

  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(alwiAbout);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={`h-screen w-full flex justify-center items-center relative sm:p-48 overflow-x-hidden ${
        darkMode ? "dark" : "light"
      }`}
      id="About"
    >
      <h1 className="absolute top-32 font-semibold text-center uppercase tracking-[5px] text-lg">
        ABOUT ME
      </h1>

      <div className=" w-full h-full flex sm:flex-row flex-col sm:space-x-12">
        <div className=" sm:flex-[30%]  flex justify-center items-center sm:mt-0 mt-48">
          <motion.img
            initial={{
              x: -500,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={imageSrc}
            alt="Alwi About"
            className={`sm:w-72 sm:h-96 w-44 h-56 cursor-pointer duration-300 transform-gpu transition-transform rounded-3xl ${
              isHovered ? "scale-105" : ""
            }`}
            onMouseEnter={() => {
              setIsHovered(true);
              setImageSrc(alwiAbout);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setImageSrc(alwiAboutDark);
            }}
          />
        </div>
        <motion.div
          initial={{
            x: 400,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex sm:flex-[70%] flex-col w-full h-full justify-center px-4"
        >
          <h1 className="sm:text-2xl text-xs font-semibold sm:mt-0 mt-16">
            Alwi Rifa
          </h1>
          <p className="sm:text-lg text-[12px] text-justify sm:leading-normal leading-loose mt-4">
            I am a Full-Stack developer based in Bandung, Indonesia. I am an
            undergraduate student of Electrical Engineering at the Indonesia
            University of Education, and my journey in web development began
            during my first year of college in 2019. I am deeply passionate
            about creating beautiful, functional, and user-friendly websites and
            applications. I constantly challenge myself to learn and grow as a
            developer. Additionally, I enjoy building full-stack clones and
            working on side projects.
          </p>

          <div className="flex sm:space-x-4 space-x-2 mt-12 text-white">
            <button className="rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer px-10 py-2 flex justify-center items-center">
              Resume
            </button>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer">
              <a href="https://github.com/AlwiRifa" target="_blank">
                <AiOutlineGithub className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer">
              <a href="https://www.linkedin.com/in/ilham-alwi/">
                <AiFillLinkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer">
              <a href=" https://www.instagram.com/alwirifa_/">
                <AiOutlineInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <div
      className={`flex sm:flex-row w-full flex-col justify-center items-center sm:space-x-16 sm:mt-20 mt-48 ${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className=" pl-24 image-container  cursor-pointer">
        <img src={alwiAboutDark} className="rounded-3xl w-72 h-96" alt="alwiAbout" />
        <img
          src={alwiAbout}
          className="ml-24 hover-image rounded-3xl  w-72 h-96"
          alt="alwiAboutDark"
        />
      </div>
      <div className="flex flex-col lg:max-w-6xl max-w-2xl ">
        <h1 className="sm:text-2xl text-xs font-semibold sm:mt-0 mt-16">
          Alwi Rifa
        </h1>
        <p className="sm:text-lg text-[12px] text-justify sm:leading-normal leading-loose mt-4">
          I am a Full-Stack developer based in Bandung, Indonesia. I am an
          undergraduate student of Electrical Engineering at the Indonesia
          University of Education, and my journey in web development began
          during my first year of college in 2019. I am deeply passionate
          about creating beautiful, functional, and user-friendly websites and
          applications. I constantly challenge myself to learn and grow as a
          developer. Additionally, I enjoy building full-stack clones and
          working on side projects.
        </p>

        
        <div className="flex sm:space-x-4 space-x-2 mt-12 text-white">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer">
            <AiOutlineGithub className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer">
            <AiFillLinkedin className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1b1d] hover:text-[#d7b486] cursor-pointer">
            <AiOutlineInstagram className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div> */}
    </motion.div>
  );
}

export default About;
