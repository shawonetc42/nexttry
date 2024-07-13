import React from "react";

export default function Honeymoon() {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <img
            loading="lazy"
            srcSet="Honeymoon.png"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Honeymoon Destination"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <div className="uppercase text-red-500 text-sm tracking-wide font-bold">
            Honeymoon Specials
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-indigo-900 leading-tight">
            Our Romantic Tropical Destinations
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="mt-8 py-3 px-6 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-lg transition-colors duration-300">
            View Packages
          </button>
        </div>
      </div>
    </div>
  );
}
