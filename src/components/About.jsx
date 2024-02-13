import React from "react";
import CountUp from "react-countup";
import VideoBackground from "./VidBackground";

import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const quotes = [
    {
      text: "Tempat asyik belajar baca Al-Qur'an untuk semua kalangan dari tingkat dasar hingga tingkat lanjutan.",
      author: "Program Fasiih",
    },
    {
      text: "Ngobrol seru terkait Islamic Wonderful Marriage dengan berbagai narasumber.",
      author: "Program SakinahTalk",
    },
    {
      text: "Kumpulan bisnis santri, pengajar dan jajaran Qaf yang sebagian keuntungannya untuk support program Qaf.",
      author: "Ecosystem Tijarah",
    },
  ];
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto mt-[120px]">
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
            <div className="mt-[20px] flex flex-col justify-center items-center text-justify">
              <h1 className="cursor-pointer font-bold seticon">
                Lebih dekat dengan Qaf
              </h1>
              <p className="max-w-5xl sm:max-w-4xl mt-4">
                Qaf Institute merupakan komunitas yang menyediakan program
                berupa <span className="font-bold text-purple-500">pelayanan pendidikan Bina Baca Qur'an (Tahsin) yang
                diselenggarakan secara online.</span> Komunitas ini terbentuk di awal
                tahun 2021 saat masa pandemi COVID-19. Saat ini, program-program
                Qaf didukung oleh lembaga nasional dan internasional. <span className="font-bold text-purple-500">Program
                tersebut diantaranya program Fasiih Qur'an, SakinahTalk dan
                Ecosystem.</span>
              </p>
              <div className="mt-10 max-w-5xl">
                <h1 className="flex justify-center items-center cursor-pointer seticon font-bold mt-10 text-center">
                  Deskripsi Program Qaf
                </h1>
                <div className="flex justify-center items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {quotes.map((quote, index) => (
                    <div
                      key={index}
                      className="bg-black border border-black rounded-lg mx-[60px] sm:mx-[20px] md:mx-0 p-6 shadow-md hover:border-purple-900 hover:scale-125 transition-transform ease-in cursor-pointer"
                    >
                      <p className="text-sm text-white font-medium mb-4 leading-6">
                        {quote.text}
                      </p>
                      <p className="text-purple-600 font-bold text-right">
                        {quote.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
