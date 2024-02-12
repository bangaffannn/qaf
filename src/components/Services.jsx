import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiPlaywright } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";

import Img1 from "../assets/backend.png";
import Img2 from "../assets/NewsSentimentAnalysis.png";
import Img3 from "../assets/SalesAnalysis.png";
import Img4 from "../assets/GoogleAccountClone.png";
import Img5 from "../assets/MobileApps.jpg";
import Img6 from "../assets/playwright-test.png";

const project = [
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus eget ex ultrices dictum vitae cursus mi. Proin aliquet egestas arcu ut dictum.",
    Link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus eget ex ultrices dictum vitae cursus mi. Proin aliquet egestas arcu ut dictum.",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus eget ex ultrices dictum vitae cursus mi. Proin aliquet egestas arcu ut dictum.",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus eget ex ultrices dictum vitae cursus mi. Proin aliquet egestas arcu ut dictum.",
    link: "Learn more",
  },
];

export default function Services() {
  return (
    <div id="services" className="section">
      <div className="container mx-auto mt-[720px] sm:mt-[320px] lg:mt-0">
        <h1 className="flex justify-center items-center cursor-pointer mb-5 text-3xl sm:mb-10 md:-mb-1 lg:mb-1 sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[140px] font-bold gap-y-5 hover:scale-125 transition-transform ease-in">
          Portfolio <span className="text-purple-900">Project</span>
        </h1>
        <div className="">
          {/* TOP IMAGE */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5 md:mt-0 mb-5">
            {/* IMAGE A */}
            <div className="group relative overflow-hidden rounded-xl w-96 h-44">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Backend development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">User Controller</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="flex text-sm gap-x-2 text-white">
                  <IoLogoJavascript />
                  <FaReact />
                  <FaNodeJs />
                  <DiMongodb />
                  <SiAxios />
                  <SiExpress />
                </span>
              </div>
            </div>
            {/* IMAGE B */}
            <div className="group relative overflow-hidden rounded-xl w-96 h-44">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Data Analysis and Visual</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">News Article Sentiment Analysis</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="flex text-sm gap-x-2 text-white">
                  <FaPython />
                  <SiJupyter />
                  <IoLogoTableau />
                </span>
              </div>
            </div>
            {/* IMAGE C */}
            <div className="group relative overflow-hidden rounded-xl w-96 h-44">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Data Analysis and Visual</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">Data Sales Analysis</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="flex text-sm gap-x-2 text-white">
                  <FaPython />
                  <SiJupyter />
                  <IoLogoTableau />
                </span>
              </div>
            </div>
          </div>
          {/* BELOW IMAGE */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5 md:mt-0">
            {/* IMAGE A */}
            <div className="group relative overflow-hidden rounded-xl w-96 h-44">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">Google Account Project</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="flex text-sm gap-x-2 text-white">
                  <IoLogoJavascript />
                  <FaReact />
                  <SiTailwindcss />
                  <TbBrandFramerMotion />
                </span>
              </div>
            </div>
            {/* IMAGE B */}
            <div className="group relative overflow-hidden rounded-xl w-96 h-44">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Mobile development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">Mobile Apps Launching</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="flex text-sm gap-x-2 text-white">
                  <IoLogoJavascript />
                  <FaReact />
                  <SiTailwindcss />
                  <TbBrandFramerMotion />
                </span>
              </div>
            </div>
            {/* IMAGE C */}
            <div className="group relative overflow-hidden rounded-xl w-96 h-44">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img6}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Frontend development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">Playwright Automation Testing</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="flex text-sm gap-x-2 text-white">
                  <BiLogoTypescript />
                  <SiPlaywright />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
