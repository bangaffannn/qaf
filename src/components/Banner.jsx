import React from "react";
// import Image from "../assets/avatar.svg";
import Image from "../assets/site.jpg";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-[105vh] lg:min-h-[110vh] flex justify-center items-center"
    >
      <div className="container mx-auto mt-[160px] sm:mt-[120px]">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* TEXT */}
          <div className="flex-1 text-center font-secondary lg:text-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center items-center text-[100px] md:text-[180px] font-bold leading-[0] text-white"
            >
              M<span className="font-bold text-purple-800">AGM.</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col px-6 mt-5 md:mt-10 mb-12 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-gray-600 opacity-50 mr-3 text-[26px] sm:text-[48px] lg:text-[80px]">
                An experienced
              </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Tester",
                  2000,
                  "Data Analyst",
                  2000,
                ]}
                speed={50}
                className="text-purple-800 opacity-50"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w mx-auto lg:mx-0 text-white"
            >
              Problem <span className="font-bold">solving</span> | Creativity |
              Attention <span className="font-bold">to detail</span> |{" "}
              <span className="font-bold">Continous</span> learning | Teamwork |
              Think <span className="font-bold">different</span>
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
              className="flex flex-col lg:flex-row lg:mx-[120px] lg:gap-x-[120px] rounded-xl justify-center items-center mb-[100px] mx-auto lg:mx-0"
            >
              <div className="w-full p-7 flex justify-center items-center gap-x-2">
                <a
                  href="https://wa.me/6289608725725"
                  className="text-purple-500 hover:mr-2 transition-all duration-500"
                >
                  Share with me
                </a>
                <IoIosArrowDroprightCircle
                  size={25}
                  className="cursor-pointer hover:ml-2 transition-all duration-500"
                />
              </div>
              <div className="w-full p-7 flex justify-center items-center gap-x-2">
                <a
                  href="https://wa.me/6289608725725"
                  className="text-purple-500 hover:mr-2 transition-all duration-500"
                >
                  Learn about me
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
                <FaGithub />
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
