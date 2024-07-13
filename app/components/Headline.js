import React from "react";

export default function Headline() {
  return (
    <div className="flex flex-col px-5 max-w-[844px]">
      <div className="mt-6 w-full text-6xl font-bold text-white leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
        No matter where you’re going to, we’ll take you there
      </div>
      <div className="px-8 py-6 mt-10 w-full rounded-md backdrop-blur-[17.760618209838867px] bg-zinc-100 bg-opacity-60 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-xl text-white border-r max-md:mt-10">
              Where to?
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 self-stretch border-r my-auto text-xl text-white max-md:mt-10">
              <div className="flex-auto">Travel Type</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between self-stretch my-auto text-xl text-white whitespace-nowrap max-md:mt-10">
              <div>Duration</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="grow justify-center px-14 py-6 w-full text-lg font-semibold text-center text-white whitespace-nowrap bg-red-400 rounded-xl shadow-2xl max-md:px-5 max-md:mt-10">
              Submit
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 self-start mt-7 text-sm font-medium leading-10 text-white max-md:flex-wrap">
        <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-4 whitespace-nowrap aspect-[5.06] w-[182px] max-md:pl-5">
          <img
            loading="lazy"
            srcSet="people.png"
            className="absolute inset-0 size-full"
          />
          +
        </div>
        <div className="flex-auto my-auto">
          2,500 people booked Tommorowland Event in last 24 hours
        </div>
      </div>
    </div>
  );
}
