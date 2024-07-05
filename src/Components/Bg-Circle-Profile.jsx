import React from "react";

export default function Bg_Circle_Profile({ pages }) {
  return (
    <div
      className={`w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-white/30 absolute ${
        pages === "rank" ? "-top-40 md:-top-48" : "-top-3 md:-top-6"
      } grid place-items-center z-0`}
    >
      <div className="w-52 h-52 rounded-full bg-white/20"></div>
    </div>
  );
}
