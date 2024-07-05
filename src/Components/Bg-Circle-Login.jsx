import React from "react";

export default function Bg_Circle_Login() {
  return (
    <>
      <div className="absolute -top-[75px] left-4 sm:left-10 md:left-16 lg:left-24 w-56 h-56 grid place-items-center border-2 border-white/20 rounded-full z-0">
        <div className="w-28 h-28 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute  -top-52 sm:-top-64 lg:-top-48 -right-8 sm:-right-12 md:-right-14 lg:-right-20 w-24 h-24 grid place-items-center border-2 border-white/20 rounded-full z-0">
        <div className="w-14 h-14 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute  top-32 sm:top-0  right-8 sm:-right-10  lg:-right-20 w-16 h-16 grid place-items-center border-2 border-white/20 rounded-full z-0">
        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
      </div>
    </>
  );
}
