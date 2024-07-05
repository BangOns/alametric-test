import React from "react";
import { IconsImport } from "../../Utils/IconsImport";
import TrophyCheck from "../../Utils/Check_Trophy";
import { useParams } from "react-router-dom";

export default function User_Rank({ rank, user }) {
  const { id } = useParams();
  const MyProfileInListUser = user.code === id ? true : false;
  const trophyRank = rank <= 3 ? TrophyCheck({ rank }) : null;
  return (
    <section
      className={`w-full px-5 py-3 ${
        MyProfileInListUser ? "bg-yellow-200" : "bg-white"
      } rounded-2xl flex items-center`}
    >
      <div className="w-full basis-[13%]">
        <div className="w-8 h-8  rounded-full border border-slate-400 flex justify-center items-center ">
          <p className="text-center text-sm opacity-75">{rank}</p>
        </div>
      </div>
      <div className="w-full basis-3/4 flex gap-4">
        <div
          className={` w-10 h-10 overflow-hidden rounded-full flex justify-center items-end ${
            user.gender === "Men" ? "bg-purple-500" : "bg-pink-500"
          }`}
        >
          <img
            src={
              user.gender === "Men"
                ? IconsImport.IconsMen
                : IconsImport.IconsWomen
            }
            alt="men"
            className="w-10 h-10  -mb-1"
          />
        </div>
        <div className="font-sans">
          <p className="font-medium">{user.name}</p>
          <p className="text-slate-500/90 font-semibold">
            {user.points} points
          </p>
        </div>
      </div>
      {rank <= 3 && (
        <div className="w-full h-full flex justify-center basis-1/6">
          <div className="w-12 h-14 grid place-items-center">
            <div className={`trophy  ${trophyRank} grid place-items-center`}>
              <img
                src={IconsImport.IconsCrown}
                alt="trophy"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
