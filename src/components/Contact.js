import React, { useContext} from "react";
import { DarkModeContext } from "../contexts/DarkModeProvider";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    const mailtoLink = `mailto:alwirifa611@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi, my name is ${formData.name}. ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };
    
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
    
    className={`h-screen w-full flex flex-col justify-center items-center relative  ${
      darkMode ? "dark home-video" : "light home-video-dark "
    }`} id="Contact">
      <h1 className="absolute top-32 font-semibold text-center uppercase tracking-[5px] text-lg">
        CONTACT ME
      </h1>
      <div className="flex flex-col justify-center items-center space-y-12 mt-20 ">
        <h1 className="sm:text-5xl text-3xl font-semibold text-center">
          Like what you’ve seen? <br />
          <span className="text-lg">Then don’t be shy – get in touch 🎉</span>
        </h1>
        
        {/* <div className="space-y-4">
          <div className="flex items-center  space-x-2">
            <PhoneIcon />
            <p>+62 819 777 27790</p>
          </div>
          <div className="flex items-center  space-x-2">
            <MailIcon />
            <p>alwirifa611@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <PlaceIcon className="" />
            <p>Bandung, Indonesia</p>
          </div>
        </div> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full text-sm px-8 sm:px-0 " 
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className={`contactInput w-full ${
                darkMode ? "light" : 'dark'} rounded-lg h-8 pl-4 py-6`}
              type="text"
            />{" "}
            <input
              {...register("email")}
              placeholder="Email"
              className={`contactInput w-full ${
                darkMode ? "light" : 'dark'} rounded-lg h-8 pl-4 py-6`}
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className={`contactInput w-full ${
              darkMode ? "light" : 'dark'} rounded-lg h-8 pl-4 py-6`}
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className={`contactInput w-full ${
              darkMode ? "light" : 'dark'}  rounded-lg h-24 pl-4 pt-4`}
          />
          <button className={`contactInput w-full ${
              darkMode ? "light" : 'dark'} text-[#d7b486] rounded-lg  py-3 md:py-5 px-10 font-bold text-lg `}>
            {" "}
            Submit
          </button>
        </form>
      </div>
      <div className={`absolute bottom-0 w-full flex flex-row justify-between items-center py-4  md:px-48 px-8 sm:px-28 ${ darkMode ? 'bg-[#1a1b1d]' : 'light' }`}>
        <p className="sm:text-sm text-xs font-bold">Copyright © 2023 Alwi Rifa</p>

        <div className="flex sm:space-x-4 space-x-2 text-white">
          <div className="flex items-center justify-center sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-[#222326] hover:text-[#d7b486] cursor-pointer">
            <AiOutlineGithub className="sm:w-6 sm:h-6 w-4 h-4" />
          </div>
          <div className="flex items-center justify-center sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-[#222326] hover:text-[#d7b486] cursor-pointer">
            <AiFillLinkedin className="sm:w-6 sm:h-6 w-4 h-4" />
          </div>
          <div className="flex items-center justify-center sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-[#222326] hover:text-[#d7b486] cursor-pointer">
            <AiOutlineInstagram className="sm:w-6 sm:h-6 w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
