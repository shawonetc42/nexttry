import React from "react";

export default function Ads() {
  return (
    <div className="flex justify-center container mx-auto items-center px-16 py-5 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 justify-between items-start w-full max-w-[1578px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="ads/1.png"
          className="shrink-0 max-w-full aspect-[2.86] w-[143px]"
        />
        <img
          loading="lazy"
          src="ads/2.png"
          className="shrink-0 max-w-full aspect-[3.33] w-[165px]"
        />
        <img
          loading="lazy"
          src="ads/3.png"
          className="shrink-0 max-w-full aspect-[3.23] w-[161px]"
        />
        <img
          loading="lazy"
          src="ads/4.png"
          className="shrink-0 max-w-full aspect-[3.45] w-[172px]"
        />
        <img
          loading="lazy"
          srcSet="ads/5.png"
          className="shrink-0 max-w-full aspect-[4.35] w-[221px]"
        />
      </div>
    </div>
  );
}
