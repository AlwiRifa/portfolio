import { useState } from 'react';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeProvider';
import alwiProfile from '../assets/alwiProfile.png'
import { motion } from "framer-motion";


function Hero() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <motion.div

    initial={{
      y: -500,
      opacity: 0,
      scale: 1,
    }}
    animate={{
      y:0,
      x: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1,
    }} 
      className={` h-screen w-full flex flex-col relative ${ darkMode ? 'dark home-video ' : 'light home-video-dark'}`}
      id="Home"
    >
      <div className="flex sm:flex-row flex-col-reverse h-full px-12 sm:px-48 sm:items-center pt-32 sm:pt-0 ">
        <div className="flex-1 flex flex-col space-y-12">
          <h3 className="text-lg font-bold uppercase ">
            Hey There! <span className="text-3xl">👋</span>
          </h3>
          <div>
            <h1 className="sm:text-5xl text-4xl font-bold ">I'm Alwi Rifa</h1>
            <h1 className="text-3xl font-semibold">a Fullstack Developer</h1>
            <br/>
            <h3 className="text-lg  leading-normal">
              I create user-friendly<span className="text-[#d7b486] font-semibold">  web </span>
              and
              <span className="text-[#d7b486] font-semibold"> mobile </span>
              applications that meet your requirements.
            </h3>
          </div>

          <a href="#Contact">
            <div className={`rounded-full h-12 w-44 flex justify-center  items-center bg-[#0d0e0f] text-white hover:bg-[#252525] hover:text-[#d7b486] duration-200 cursor-pointer`}>              Let me help you!
            </div>
          </a>
        </div>

        {/* Profile Image */}
        <div className="sm:flex-1 p-2 flex justify-center sm:items-end cursor-pointer pb-4">
          <img src={alwiProfile} alt="alwi" className="sm:w-96 w-48" />
        </div>
      </div>

      {/* mouse icon */}
      <div className="absolute bottom-0 left-0 mb-10 ml-14">
        <div className="flex-col hidden sm:flex space-y-8 items-center w-16 h-32 pt-6 ">
          <p className="-rotate-90 uppercase text-[12px] font-extrabold tracking-[2px] ">
            scroll
          </p>
          <div className={`mousey h-28 w-8 rounded-full border-2  ${ darkMode ? 'border-white' : ' border-black'}`}>
            <div className={`scroller w-[3px] h-[10px] mx-3 mt-2 rounded-full ${ darkMode ? 'bg-white' : ' bg-black'}`}></div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default Hero;
