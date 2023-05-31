import React, { useContext} from "react";
import { DarkModeContext } from "../contexts/DarkModeProvider";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import javascriptIcon from "../assets/javascriptIcon.svg";
import reactIcon from "../assets/reactIcon.svg";
import nextIcon from "../assets/nextjsIcon.svg";
import tsIcon from "../assets/typeScriptIcon.svg";
import tailwindIcon from "../assets/tailwindIcon.svg";
import reduxIcon from "../assets/reduxIcon.svg";
import materialUiIcon from "../assets/materialUiIcon.svg";
import nodejsIcon from "../assets/nodejsIcon.svg";
import expressIcon from "../assets/expressIcon.svg";
import firebaseIcon from "../assets/firebaseIcon.svg";
import mongodbIcon from "../assets/mongodbIcon.svg";
import mysqlIcon from "../assets/mysqlIcon.svg";
import reactNativeIcon from "../assets/reactNativeIcon.svg";
import expoIcon from "../assets/expoIcon.svg";
import gitIcon from "../assets/gitIcon.svg";
import sassIcon from '../assets/sassIcon.svg'

import { motion } from "framer-motion";

function TechStack() {
  
  const { darkMode } = useContext(DarkModeContext);

  const icons = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Sass", icon: sassIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Material UI", icon: materialUiIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "React Native", icon: reactNativeIcon },
    { name: "Expo", icon: expoIcon },
    { name: "Git", icon: gitIcon },
    
  ];

  return (
    <div
      className={`h-screen w-full flex flex-col justify-center items-center relative md:px-48 ${
        darkMode ? "dark" : "light "
      } `}
      id="About"
    >
      <h1 className="absolute top-32 font-semibold text-center uppercase tracking-[5px] text-lg">
        TECH STACK
      </h1>

      <div className="grid sm:grid-cols-5 grid-cols-4 sm:gap-x-12 gap-x-1 gap-y-5 mt-32">
        {icons.map((icon) => (
          <motion.div 
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center">
            <div
              key={icon.name}
              className={` flex justify-center items-center sm:w-16 sm:h-16 w-12 h-12 rounded-full ${
                darkMode ? "bg-[#1a1b1d]" : "bg-[#ededed]"
              }`}
            >
              <img src={icon.icon} alt={icon.name} className="sm:w-8 sm:h-8 w-6 h-6"  />
            </div>
            <span className="text-xs p-2">{icon.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
