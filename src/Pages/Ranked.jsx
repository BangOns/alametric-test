import React from "react";
import Navbar from "../Components/Navbar";
import { IconsImport } from "../Utils/IconsImport";
import { ImageImport } from "../Utils/ImageImport";
import User_Rank from "../Components/Ranked/User_Rank";
import { useParams } from "react-router-dom";
import { UserCandidate } from "../../User";
import Bg_Circle_Profile from "../Components/Bg-Circle-Profile";

export default function Ranked() {
  const { id } = useParams();
  const user = UserCandidate.find(
    (user) => user.code.toUpperCase() === id.toUpperCase()
  );
  const RankUser = UserCandidate.findIndex(
    (user) => user.code.toUpperCase() === id.toUpperCase()
  );
  return (
    <>
      <Navbar />
      <article className="w-full h-full mt-[5rem] mb-6 flex flex-col justify-center items-center  font-alametric ">
        <section className="w-full grid place-items-center  px-3 relative ">
          <Bg_Circle_Profile pages={"rank"} />
          <div
            className="w-full sm:w-1/2 lg:w-1/3 h-full bg-white rounded-xl px-3 z-10
          rounded-t-[2rem] rounded-bl-[4rem]
          
          "
          >
            <header className="w-full flex flex-col items-center -mt-16">
              <div className="w-24 h-24 overflow-hidden rounded-full flex justify-center items-end bg-purple-500">
                <img
                  src={
                    user.gender === "Men"
                      ? IconsImport.IconsMen
                      : IconsImport.IconsWomen
                  }
                  alt="profile"
                  className="w-24 h-24 -mb-2"
                />
              </div>
              <div className="mt-5">
                <h1 className="text-xl sm:text-3xl font-inter_bold">
                  {user.name}{" "}
                  <span className="font-inter font-bold text-purple-400">
                    ({user.points} Poin)
                  </span>
                </h1>
              </div>
            </header>
            <section className="w-full h-3/4 flex flex-col  justify-start gap-6 items-center font-inter  rounded-2xl mt-2 p-4">
              <div className=" text-center h-1/2 flex flex-col justify-end">
                <img src={ImageImport.Trophy} alt="trophy" />
                <p className="font-bold">Ranking: {RankUser + 1}</p>
              </div>
              {RankUser + 1 <= 3 ? (
                <div className="w-full text-center">
                  <h3 className="font-bold ">Selamat Anda</h3>
                  <p className="text-purple-500 font-bold tracking-wider">
                    Diterima Kerja
                  </p>
                </div>
              ) : (
                <div className="w-full text-center">
                  <h3 className="font-bold ">Mohon Maaf</h3>
                  <p className="text-red-500 font-bold tracking-wider">
                    Anda Gagal Diterima
                  </p>
                </div>
              )}
            </section>
          </div>
        </section>
        <section className="w-full sm:w-1/2 lg:w-1/3 h-20 sm:text-center p-4 my-9 bg-yellow-300 rounded-none sm:rounded-2xl">
          {RankUser + 1 <= 3 ? (
            <p className="font-medium font-sans">
              <span className="font-bold">Info</span>: Anda akan segera
              dihubungi untuk kontrak & bertemu klien{" "}
            </p>
          ) : (
            <p className="font-medium font-sans">
              <span className="font-bold">Info</span>: Tetap Semangat jangan
              menyerah untuk coba lagi :){" "}
            </p>
          )}
        </section>
        <section className="w-full sm:w-1/2 lg:w-1/3 h-full px-3 ">
          <article className="w-full flex justify-between items-center">
            <p className="font-medium font-sans w-full text-white text-lg am:text-xl">
              Leaderboard - Final
            </p>
            <div className="w-full flex gap-2 items-center justify-end">
              <div className="w-3 h-3  rounded-full border border-white"></div>
              <div className="w-3 h-3 rounded-full border border-white"></div>
              <div className="w-3 h-3 rounded-full border border-white"></div>
              <div className="w-3 h-3 bg-white rounded-full border border-white"></div>
            </div>
          </article>
          <article className="w-full flex flex-col gap-4 mt-2">
            {UserCandidate.sort((a, b) => b.points - a.points).map(
              (user, index) => (
                <User_Rank rank={index + 1} user={user} key={index} />
              )
            )}
          </article>
        </section>
      </article>
    </>
  );
}
