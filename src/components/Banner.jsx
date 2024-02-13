import React from "react";
// import Image from "../assets/avatar.svg";
import Image from "../assets/site.jpg";
import Logo from "../assets/logo/logoqaf.png";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-[105vh] lg:min-h-[110vh] flex justify-center items-center"
    >
      <div className="container mx-auto mt-[160px] sm:mt-[30px] flex flex-col w-full justify-center items-center">
        <div className="mb-[120px]">
          <img
            className="flex justify-center items-center text-center w-[300px] h-auto"
            src={Logo}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* TEXT */}
          <div className="flex-1 text-center font-secondary lg:text-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center items-center text-[80px] md:text-[160px] font-bold leading-[0] text-white hover:text-[90px] md:hover:text-[180px] transition-all duration-200"
            >
              WELCOME
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col px-6 mt-5 md:mt-10 mb-12 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-purple-600 opacity-50 mr-3 text-[26px] sm:text-[48px] lg:text-[80px]">
                To Qaf Institute
              </span>
              {/* <TypeAnimation
                sequence={["Profile", 2000, "Page", 2000, "Event", 2000]}
                speed={50}
                className="text-white opacity-50"
                wrapper="span"
                repeat={Infinity}
              /> */}
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w mx-auto lg:mx-0 text-white text-sm md:text-2xl"
            >
              <span>Belajar tahsin online bareng Qaf</span>{" "}
              <TypeAnimation
                sequence={[
                  "dimana saja!",
                  2000,
                  "kapan saja!",
                  2000,
                  "mudah dan gratis!",
                  2000,
                ]}
                speed={50}
                className="text-white font-bold text-sm md:text-2xl"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.p>
            {/* <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="border flex justify-center gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://wa.me/6289608725725"
                className="text-purple-500 seticon"
              >
                Contact me
              </a>
              <a
                href="https://wa.me/6289608725725"
                className="text-purple-500 seticon"
              >
                My Portfolio
              </a>
            </motion.div> */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col lg:flex-row lg:mx-[160px] lg:gap-x-0 rounded-xl justify-center items-center mb-[50px]"
            >
              <div className="w-full p-7 flex justify-center items-center gap-x-2">
                <a
                  href="https://wa.me/6289608725725"
                  className="text-purple-500 hover:mr-2 transition-all duration-500"
                >
                  Share with us
                </a>
                <IoIosArrowDroprightCircle
                  size={25}
                  className="cursor-pointer hover:ml-2 transition-all duration-500"
                />
              </div>
              <div className="w-full flex justify-center items-center p-7 gap-x-2">
                <a
                  href="https://wa.me/6289608725725"
                  className="text-white hover:mr-2 transition-all duration-500"
                >
                  Work with me
                </a>
                <IoIosArrowDroprightCircle
                  size={25}
                  className="text-purple-600 cursor-pointer hover:ml-2 transition-all duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center items-center text-[20px] text-white gap-x-6 mx-auto lg:mx-0"
            >
              <a href="#" className="seticon">
                <FaYoutube />
              </a>
              <a href="#" className="seticon">
                <FaInstagram />
              </a>
              <a href="#" className="seticon">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* IMAGE */}
          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
