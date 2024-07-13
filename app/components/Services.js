import React from "react";
import Header from "./Header";
import Headline from "./Headline";

export default function Services() {
  return (
    <div className="relative">
      <img src="bg.png" alt="" className="w-full h-auto" />
      <header className="absolute top-0 left-0 w-full text-white text-center bg-black bg-opacity-50 p-4">
        {/* <h1 className="text-3xl font-bold">এটা হেডার</h1>
        <p>এটা একটা উদাহরণ টেক্সট</p> */}
        <Header />
      </header>
      <header className="absolute top-0 left-0 w-full text-white text-center p-40">
        <Headline />
      </header>
    </div>
  );
}
