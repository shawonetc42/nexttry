import React from "react";

export default function ResortBooking() {
  return (
    <div className="flex gap-5 justify-between text-base text-gray-500 max-md:flex-wrap">
      <div className="flex flex-col px-5 my-auto max-md:max-w-full">
        <div className="text-lg font-bold text-center text-red-400 max-md:max-w-full">
          Fast & Easy
        </div>
        <div className="mt-7 text-5xl font-bold capitalize text-indigo-950 max-md:max-w-full max-md:text-4xl">
          Get Your Favourite
          <br />
          Resort Bookings
        </div>
        <div className="flex gap-5 mt-9 max-md:flex-wrap">
          <img
            loading="lazy"
            src="a.png"
            className="shrink-0 self-start aspect-[0.98] w-[47px]"
          />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="font-bold leading-[124.5%]">Choose Destination</div>
            <div className="mt-3 leading-5">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Urna, tortor tempus.
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-11 max-md:flex-wrap max-md:mt-10">
          <img
            loading="lazy"
            src="b.png"
            className="shrink-0 my-auto aspect-[0.98] w-[47px]"
          />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="font-bold leading-[124.5%]">Check Availability</div>
            <div className="mt-2 leading-5">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Urna, tortor tempus.{" "}
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
          <img
            loading="lazy"
            src="c.png"
            className="shrink-0 self-start aspect-[0.98] w-[47px]"
          />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="font-bold leading-[124.5%]">Let’s Go</div>
            <div className="mt-3.5 leading-5">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Urna, tortor tempus.{" "}
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="ResortBooking.png"
        className="w-full aspect-[1.47] max-md:max-w-full"
      />
    </div>
  );
}
