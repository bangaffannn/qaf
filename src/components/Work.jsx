import React from "react";

const Work = () => {
  // Array of quotes
  const quotes = [
    {
      text: "Sebaik-baik di antara kamu adalah orang yang mempelajari Al-Qur'an dan mengajarkannya." ,
      author: "- HR Bukhari",
    },
    {
      text: "Al-Qur'an itu di Hari Kiamat datang sebagai pemberi syafa'at bagi pembacanya.",
      author: "- HR Muslim",
    },
    {
      text: "Barangsiapa yang menempuh suatu jalan dalam rangka mencari ilmu, maka Allah akan memudahkan jalannya menuju surga.",
      author: "- HR Muslim",
    },
    {
      text: "Kemuliaan itu adalah penjagaan terhadap sifat marah dan pengampunan bagi orang yang menzalimi.",
      author: "- HR Bukhari",
    },
  ];

  // 1080 x 1920
  // 1080 x 1080

  const imgClasses = "w-[1080] h-[1920] text-md filter grayscale transition duration-300 hover:filter-none"

  return (
    <div id="work" className="section">
      <div className="mb-20 container mx-auto px-4">
        <h1 className="flex justify-center items-center cursor-pointer text-3xl hover:scale-90 transition-transform ease-in font-bold mb-8 text-center">A Few Hadits That Inspire Us</h1>
        <div className="flex justify-center items-start text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
