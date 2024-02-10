import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

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
      <div className="container mx-auto mt-[320px] sm:mt-[280px] lg:mt-0">
        <h1 className="flex justify-center items-center cursor-pointer mb-5 sm:mb-10 md:-mb-1 lg:mb-1 sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[140px] font-bold seticon gap-y-5">
          Portfolio <span className="text-purple-900">project</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5 md:mt-0">
          {/* IMAGE A */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-96 h-auto">
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
              <span className="text-gradient">UI/UX Design</span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">Project Title</span>
            </div>
          </div>
          {/* IMAGE B */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-96 h-auto">
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
              <span className="text-gradient">UI/UX Design</span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">Project Title</span>
            </div>
          </div>
          {/* IMAGE C */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-96 h-auto">
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
              <span className="text-gradient">UI/UX Design</span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">Project Title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
