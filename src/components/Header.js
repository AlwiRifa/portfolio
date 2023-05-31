import React, { useState, useContext } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { DarkModeContext } from '../contexts/DarkModeProvider';
import { motion } from "framer-motion";

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#About">About</a>
    </p>
    <p>
      <a href="#Projects">Project</a>
    </p>
    <p>
      <a href="#Contact">Contact</a>
    </p>
  </>
);

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={`fixed w-full top-0 flex items-center justify-between px-4 sm:px-16 py-4 z-20 ${ darkMode ? 'dark' : 'light navbar' }`}>
      <motion.p initial={{
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
        }} className="font-semibold tracking-[5px] uppercase  hover:text-[#d7b486] duration-200">
        Alwi Rifa
      </motion.p>

      {/* Menu button */}
      <motion.div initial={{
            x: 500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }} className="space-x-6 justify-center items-center hidden sm:flex">
        <p className="hover:text-[#d7b486]">
          <a href="#Home">Home</a>
        </p>
        <p className="hover:text-[#d7b486]">
          <a href="#About">About</a>
        </p>
        <p className="hover:text-[#d7b486]">
          <a href="#Project">Projects</a>
        </p>
        <p className="hover:text-[#d7b486]">
          <a href="#Contact">Contact</a>
        </p>
         
        <button onClick={toggleDarkMode} className='hover:text-[#d7b486]'>
          {darkMode ? <HiOutlineSun className='' /> : <HiOutlineMoon />}
        </button>
        {/* rest of your application */}
      </motion.div>

      <div className="sm:hidden flex">
        {toggleMenu ? (
          <RiCloseLine
            
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
         
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="slide-in-right absolute top-0 right-0 mt-[59px] w-4/5 h-screen bg-[#1a1b1d] text-white rounded-lg flex  flex-col space-y-6 p-6">
            <Menu />
            <button onClick={toggleDarkMode} className='hover:text-[#d7b486]'>
          {darkMode ? <HiOutlineSun className='' /> : <HiOutlineMoon />}
        </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
