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
      "Material-UI",
      "Daisy-UI",
      "Framer-Motion",
    ],
  },
  {
    "Version Control": ["Git", "GitHub"],
  },
  {
    "Data Visual": ["Python", "Spider", "Jupyter", "Tableau"],
  },
  {
    "Backend Development": [
      "MongoDB",
      "NodeJS",
      "Express",
      "NestJS",
      "GraphQL",
      "Firebase",
    ],
  },
  {
    Testing: ["Playwright", "Postman", "Vitest"],
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
    <section id="about" className="border section" ref={ref}>
      <div className="border container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
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
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="pt-14 text-gradient text-[100px] font-bold lg:text-[180px] mb-[15px]">
              About<span className="text-sm"> me.</span>
            </div>
            <h3 className="text-[20px] lg:text-[24px] mb-4">
              Im a{" "}
              <span className="font-bold">Freelance Frontend Developer</span>{" "}
              with over 5 years of experience.
            </h3>
            {/* <p className="mb-6 text-[18px]">
              ALFALIApjaifhaip waifhfaihfinfoiIFAHI AOWHFOIHAIFOA
            </p> */}
            {/* STATS */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-10">
              <div>
                <div className="pt-4 text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      className="text-[80px]"
                      start={0}
                      end={13}
                      duration={5}
                    />
                  ) : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="pt-4 text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      className="text-[80px]"
                      start={0}
                      end={15}
                      duration={5}
                    />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="pt-4 text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      className="text-[80px]"
                      start={0}
                      end={12}
                      duration={5}
                    />
                  ) : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            {/* BUTTON */}
            <div>
              <h1 className="flex justify-center items-center text-[30px]">Skillset</h1>
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {mappedSkillset.map((item, index) => (
                <div key={index} className="mb-4">
                  <h3 className="">{item.category}</h3>
                  <ul className="flex flex-wrap">
                    {item.skills.map((skill, skillIndex) => (
                      <li className="mr-2 mb-2" key={skillIndex}>
                        <span className="px-3 py-1 rounded-md bg-purple-900 text-[16px] hover:bg-black">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
