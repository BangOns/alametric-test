import React from "react";
import { IconsImport } from "../../Utils/IconsImport";

export default function ProfileUser({ users }) {
  return (
    <header className="w-full flex flex-col items-center -mt-16">
      <div
        className={`w-24 h-24 overflow-hidden rounded-full flex justify-center items-end ${
          users.gender === "Men" ? "bg-purple-500" : "bg-pink-500"
        }`}
      >
        <img
          src={
            users.gender === "Men"
              ? IconsImport.IconsMen
              : IconsImport.IconsWomen
          }
          alt="profile"
          className="w-24 h-24 -mb-2"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-xl sm:text-3xl font-inter font-bold">
          {users.name}{" "}
          <span className="font-inter font-bold text-purple-400">
            ({users.points} Poin)
          </span>
        </h1>
      </div>
    </header>
  );
}
