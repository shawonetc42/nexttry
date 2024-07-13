import React from "react";

export default function Header() {
  return (
    <div className="flex container mx-auto max-w-6xl flex-wrap gap-5 justify-between items-center px-5 text-lg font-medium text-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd634fdfc543655d04dda3f131dd9939e0d7cc3ea1245e2ba3e153f14ef0f9c?"
        className="shrink-0 max-w-full aspect-[2] w-[100px]"
      />
      <div className="flex gap-5 items-center flex-wrap">
        <div className="flex flex-col items-center">
          <div>Home</div>
          <div className="mt-2.5 bg-red-400 h-[3px] w-full rounded-[34px]" />
        </div>
        <div>About</div>
        <div>Services</div>
        <div className="flex-auto">Upcoming Packages</div>
      </div>
      <div className="flex justify-center px-7 py-2 bg-red-400 rounded-xl shadow-[0px_20px_35px_rgba(223,105,81,0.15)]">
        Get in Touch
      </div>
    </div>
  );
}
