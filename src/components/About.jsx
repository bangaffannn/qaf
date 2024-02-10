import React from "react";
import CountUp from "react-countup";
import VideoBackground from "./VidBackground";

import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const skillset = [
  {
    "Frontend Development": [
      "React",
      "NextJS",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Daisy-UI",
      "Framer-Motion",
    ],
  },
  {
    "Backend Development": [
      "MongoDB",
      "NodeJS",
      "Express",
      "Axios",,
      "NestJS",
      "GraphQL",
      "Firebase",
    ],
  },
  {
    "Version Control": ["Git", "GitHub"],
  },
  {
    Testing: ["Playwright", "Postman", "Vitest"],
  },
  {
    "Data Analysis and Visual": [
      "Python",
      "Spyder",
      "Jupyter",
      "NumPy",
      "Pandas",
      "MatplotLib",
      "R",
      "Tableau",
    ],
  },
];

const mappedSkillset = skillset.map((category) => {
  const key = Object.keys(category)[0]; // Extracting the category key
  const value = category[key]; // Extracting the array of skills
  return { category: key, skills: value };
});

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto mt-4">
        <div className="flex flex-col h-screen">
          {/* IMAGE */}
          <VideoBackground />
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 opacity-70 h-[640px] mix-blend-lighten bg-top"
          ></motion.div> */}
          {/* TEXT */}
          <div className="flex-1">
            {/* BUTTON */}
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-x-10 gap-y-20 lg:gap-y-0">
              <motion.h1
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="cursor-pointer mt-20 flex flex-col justify-start items-start font-bold text-[180px] seticon lg:sideicon"
              >
                Tech <span className="mt-5 text-purple-900">set.</span>
              </motion.h1>
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                {mappedSkillset.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-end items-end mb-1"
                  >
                    <p className="mr-2">{item.category}</p>
                    <ul className="max-w-lg flex flex-wrap justify-end items-end">
                      {item.skills.map((skill, skillIndex) => (
                        <li className="mr-2 mb-2" key={skillIndex}>
                          <span className="cursor-pointer px-3 py-1 rounded-md bg-purple-900 text-[16px] hover:bg-black">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-5 flex flex-col justify-center items-center text-justify">
              <h1 className="cursor-pointer font-bold seticon">
                About me
              </h1>
              <p className="max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
