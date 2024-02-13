import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import img1 from "../assets/logo/GIB.png";
import img2 from "../assets/logo/BMI.png";
import img3 from "../assets/logo/DSM.png";
import img4 from "../assets/logo/DD.png";
import post1 from "../assets/events/21.jpg";
import post2 from "../assets/events/24.jpg";
import post3 from "../assets/events/29.jpg";

export default function Services() {
  return (
    <div
      id="services"
      className="mt-[400px] sm:mt-10 md:mt-0 section flex flex-row justify-center items-start"
    >
      <div className="mb-20">
        <h1 className="flex justify-center items-center cursor-pointer text-3xl hover:scale-90 transition-transform ease-in font-bold mb-10 text-center">
          Qaf Project Partners
        </h1>
        {/* IMAGE */}
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-y-0 lg:gap-x-10">
          <li>
            <img
              className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none"
              src={img1}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none"
              src={img3}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none"
              src={img4}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none"
              src={img2}
              alt=""
            />
          </li>
        </ul>
        <div className="mx-[30px]">
          <h1 className="mt-[80px] flex justify-center items-center cursor-pointer text-3xl hover:scale-90 transition-transform ease-in font-bold mb-10 text-center">
            Qaf Events
          </h1>
          {/* IMAGE */}
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-y-0 lg:gap-x-[50px]">
            <li>
              <img
                className="w-auto h-64 text-md filter grayscale transition duration-300 hover:filter-none hover:scale-125 lg:hover:scale-150 transition-transform ease-in cursor-pointer"
                src={post1}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-64 text-md filter grayscale transition duration-300 hover:filter-none hover:scale-125 lg:hover:scale-150 transition-transform ease-in cursor-pointer"
                src={post2}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-64 text-md filter grayscale transition duration-300 hover:filter-none hover:scale-125 lg:hover:scale-150 transition-transform ease-in cursor-pointer"
                src={post3}
                alt=""
              />
            </li>
            {/* <li>
            <img
              className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none"
              src={img2}
              alt=""
            />
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
