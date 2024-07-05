import React from "react";
import { IconsImport } from "../../Utils/IconsImport";

export default function Modals_Alert({
  pages,
  handleCloseModals,
  handleClickDone,
}) {
  return (
    <section className="w-full h-screen fixed grid place-items-center top-0 px-4 left-0 bg-gray-500/70 z-20">
      <article className="w-full sm:w-3/4 lg:w-1/3 h-1/3 bg-white rounded-xl ">
        <header className="w-full h-1/6 bg-yellow-500 flex justify-center gap-2 items-center rounded-t-xl">
          <img
            src={IconsImport.IconsWarning}
            alt="waring"
            className="w-5 h-5"
          />
          <p className="text-white font-sans font-semibold">Peringatan</p>
        </header>
        <section className="w-full h-5/6 p-3 font-sans font-medium flex flex-col justify-evenly">
          <p className="text-center text-2xl">Apakah Anda yakin ? </p>
          <div className="w-full flex justify-center gap-3">
            <button
              className="px-3 py-2 rounded-lg bg-slate-300 hover:bg-slate-400/70"
              onClick={() => handleCloseModals(false)}
            >
              Tidak
            </button>
            <button
              className="px-3 py-2 rounded-lg bg-green-500 hover:bg-green-500/70"
              onClick={handleClickDone}
            >
              {pages === "question" ? "Submit" : "Ya"}
            </button>
          </div>
          <p className="text-sm font-light text-red-400 mt-2">
            {pages === "question"
              ? "note:Jika sudah selesai maka tidak bisa di ulang* "
              : "note:Jika anda keluar maka tidak bisa lanjut mengerjakan* "}
          </p>
        </section>
      </article>
    </section>
  );
}
