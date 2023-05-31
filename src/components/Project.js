import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import alwiProfile from "../assets/alwiProfile.png";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import netflix from "../assets/netflix.png";

import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Project() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-screen w-full flex justify-center items-center relative ${
        darkMode ? "dark" : "light "
      }`}
      id="Project"
    >
      <h1 className="absolute top-36 font-semibold text-center uppercase tracking-[5px] text-lg">
        PROJECT
      </h1>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex-col justify-center items-center w-full h-full flex px-8 gap-4 ">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={netflix}
                className="w-full rounded-2xl"
              />
              <p className="text-xl font-semibold ">Netflix Clone</p>
              <p>Built with react, redux, tailwind, and TMDB API</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col justify-center items-center w-full h-full flex px-8 gap-4 ">
              <img src={netflix} className="w-full rounded-2xl" />
              <p className="text-xl font-semibold ">Whatsapp MERN</p>
              <p>Built with react, nodejs, express, mongodb, and firebase</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}
