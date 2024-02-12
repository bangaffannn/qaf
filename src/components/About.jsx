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
      "PostgreSQL",
      "NodeJS",
      "Express",
      "Axios",
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
                className="cursor-pointer mt-20 flex flex-col justify-start items-start font-bold text-[150px] md:text-[180px] sideicon"
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
              <h1 className="cursor-pointer font-bold seticon">About me</h1>
              <p className="max-w-5xl sm:max-w-6xl">
                Studying in the Geophysics and Meteorology department at IPB
                University made me interact a lot with the analysis of thousands
                of data (soil, water, climate and weather) using Programming
                Language Python, R and ArcGIS. This increases my curiosity
                towards the world of programming because we can channel
                complexity, creativity and problem solving in it. And also, this
                passion made me explore programming languages for website and
                mobile development. Currently I work in two institutions as a
                Digital Strategist Manager, which also includes website
                maintenance and development. I also work on private projects in
                mobile and website development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
