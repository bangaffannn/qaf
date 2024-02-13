import React from "react";

import img1 from '../assets/logo/GUT.png';
import img2 from '../assets/logo/BNPB.png';
import img3 from '../assets/logo/Kemendes.png';
import img4 from '../assets/logo/Kemenkes.png';
import img5 from '../assets/logo/DD.png';

const Work = () => {
  // Array of quotes
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "- Steve Jobs",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "- Winston Churchill",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "- Theodore Roosevelt",
    },
    {
      text: "When something is important enough, you do it even if the odds are not in your favor.",
      author: "- Elon Musk",
    },
  ];

  const imgClasses = "w-32 h-32 text-md filter grayscale transition duration-300 hover:filter-none"

  return (
    <div id="work" className="section">
      <div className="mb-20 container mx-auto px-4">
        <div className="mb-20">
          <h1 className="flex justify-center items-center cursor-pointer text-3xl hover:scale-90 transition-transform ease-in font-bold mb-10 text-center">Project Working Partners</h1>
          {/* IMAGE */}
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-y-0 lg:gap-x-10">
            <li><img className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none" src={img1} alt="" /></li>
            <li><img className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none" src={img3} alt="" /></li>
            <li><img className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none" src={img4} alt="" /></li>
            <li><img className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none" src={img2} alt="" /></li>
            <li><img className="w-auto h-32 text-md filter grayscale transition duration-300 hover:filter-none" src={img5} alt="" /></li>
          </ul>
        </div>
        <h1 className="flex justify-center items-center cursor-pointer text-3xl hover:scale-90 transition-transform ease-in font-bold mb-8 text-center">A Few Quotes That Inspire Me</h1>
        <div className="flex justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-black border border-black rounded-lg mx-[60px] sm:mx-[20px] md:mx-0 p-6 shadow-md hover:border-purple-900 hover:scale-125 transition-transform ease-in cursor-pointer">
              <p className="text-xl text-white font-medium mb-4">{quote.text}</p>
              <p className="text-purple-900 font-bold text-right">{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
