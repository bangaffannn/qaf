import React from "react";

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
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "- Eleanor Roosevelt",
    },
  ];

  return (
    <div id="work" className="section">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl seticon font-bold mb-8">Quotes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-black border border-black rounded-lg p-6 shadow-md hover:border-purple-900 hover:scale-150 transition-transform ease-in">
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
