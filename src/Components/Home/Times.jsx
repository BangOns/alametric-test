import React from "react";
import { IconsImport } from "../../Utils/IconsImport";
import CheckLevels from "../../Utils/Check_Levels";

export default function Times() {
  const QuestionLevel = CheckLevels();
  return (
    <section className="w-full h-1/6 flex flex-col  justify-between font-inter bg-red-400/60 rounded-2xl mt-2 p-4">
      <h2 className="tracking-wider  text-red-800">
        Level {QuestionLevel ? QuestionLevel.level : 1}
      </h2>
      <div className="w-full flex gap-2 items-center font-bold text-red-900">
        <img src={IconsImport.IconsClock} className="font-bold" /> Berakhir
        dalam 00:00:00
      </div>
    </section>
  );
}
