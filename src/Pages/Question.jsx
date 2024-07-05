import React, { useEffect, useState } from "react";
import List_Question from "../Components/Quest/List_Question";
import { useNavigate, useParams } from "react-router-dom";
import { ThisQuestions } from "../../Quest";
import { IconsImport } from "../Utils/IconsImport";
import cekJawabanDanHitungSkor from "../Utils/Sum_Point";
import PostPoint_User from "../Utils/PostPoint_User";
import Modals_Alert from "../Components/Modals/Modals_Alert";

export default function Question() {
  const [step, stepSet] = useState(0);
  const [choices, choicesSet] = useState("");
  const [submitmodals, submitmodalsSet] = useState(false);
  const [errorStep, errorStepSet] = useState(false);
  const [allAnswer, allAnswerSet] = useState([]);
  const { id, questid } = useParams();
  const navigate = useNavigate();
  const QuestionLevel = ThisQuestions.find(
    (items) => items.level === parseInt(questid)
  );

  function handleNextStep(e) {
    e.preventDefault();
    if (step < QuestionLevel.dataPertanyaan.length - 1) {
      if (choices !== "") {
        stepSet((prev) => prev + 1);
        PushDataJawaban();
        errorStepSet(false);
        choicesSet("");
      } else {
        errorStepSet(true);
      }
    } else {
      if (choices !== "") {
        PushDataJawaban();
        submitmodalsSet(true);
        errorStepSet(true);
      } else {
        errorStepSet(true);
      }
    }
  }
  function handlePrevStep() {
    if (step >= 1) {
      stepSet(step - 1);
      errorStepSet(false);
    } else {
      navigate(`/home/${id}`);
      errorStepSet(false);
    }
  }
  function PushDataJawaban() {
    const checkAnswerByIndex = allAnswer.findIndex(
      (answer) => answer.id === step + 1
    );
    if (checkAnswerByIndex !== -1) {
      const updatedAnswers = [...allAnswer];
      updatedAnswers[checkAnswerByIndex].jawaban = choices;
      allAnswerSet(updatedAnswers);
    } else {
      allAnswerSet([...allAnswer, { id: step + 1, jawaban: choices }]);
    }
  }
  async function handleSubmitWithModals() {
    const GetIndexQuestion = ThisQuestions.findIndex(
      (items) => items.level === parseInt(questid)
    );
    let TotalSkor = await cekJawabanDanHitungSkor(
      allAnswer,
      QuestionLevel.dataPertanyaan
    );
    if (TotalSkor) PostPoint_User({ TotalSkor, id });
    if (GetIndexQuestion !== -1) {
      ThisQuestions[GetIndexQuestion].success = true;
      if (GetIndexQuestion < ThisQuestions.length - 1) {
        ThisQuestions[GetIndexQuestion + 1].open = true;
      }
      if (GetIndexQuestion < ThisQuestions.length - 1) {
        navigate(`/home/${id}`);
      } else if (GetIndexQuestion >= ThisQuestions.length - 1) {
        navigate(`/home/${id}/rank`);
      }
    }
  }

  useEffect(() => {
    const getAnswerPrev = allAnswer.find((items) => items.id === step + 1);
    if (getAnswerPrev) {
      choicesSet(getAnswerPrev.jawaban);
    } else {
      choicesSet("");
    }
  }, [step]);
  return (
    <>
      <main className="w-full h-screen bg-[#EFEBF9] max-sm:text-sm flex items-center font-poppins justify-center px-4">
        <article className="w-full sm:w-3/4 lg:w-1/3 h-3/4 flex flex-col justify-start gap-10 ">
          <section className="w-full h-1/5 bg-white rounded-xl">
            <div className="w-full h-1/6 bg-purple-700 rounded-t-xl"></div>
            <header className="w-full px-4 py-3 ">
              <h1 className="font-bold mb-2">Level {questid}</h1>
              <p className="font-bold text-red-500">
                * Menunjukkan Pertanyaan yang wajib di isi
              </p>
            </header>
          </section>
          <section className=" h-auto">
            <div className="w-full h-auto pb-4  bg-white rounded-xl">
              <header className="w-full h-10 bg-purple-700 rounded-t-xl px-4 text-white flex items-center  ">
                <h2>
                  {step + 1}/{QuestionLevel.dataPertanyaan.length}
                </h2>
              </header>
              <section className="px-4 py-3 w-full ">
                <header className="w-full flex justify-between">
                  <p className="text-sm w-4/5">
                    {QuestionLevel.dataPertanyaan[step].pertanyaan}{" "}
                    <span className="text-red-500">*</span>
                  </p>
                  <p className="text-slate-400 text-xs w-auto   flex items-center">
                    50 poin
                  </p>
                </header>
                <article className="w-full flex flex-col mt-3 gap-5">
                  {QuestionLevel.dataPertanyaan[step].pilihan.map(
                    (items, index) => (
                      <List_Question
                        choices={choices}
                        choicesSet={choicesSet}
                        id={questid}
                        key={index}
                        index={index}
                        thisQuest={items}
                      />
                    )
                  )}
                </article>
              </section>
              {errorStep && (
                <p className="px-4 text-red-500 text-sm">
                  Mohon Di isi terlebih dahulu
                </p>
              )}
            </div>
            <div className="w-full flex justify-center gap-4 mt-5 ">
              <button
                type="button"
                className="w-full py-3 bg-white text-purple-500 font-bold rounded-md shadow-md hover:shadow-xl transition-all"
                onClick={handlePrevStep}
              >
                Kembali
              </button>
              <button
                className="w-full py-3 bg-white text-purple-500 font-bold rounded-md shadow-md hover:shadow-xl transition-all"
                onClick={handleNextStep}
              >
                Selanjutnya
              </button>
            </div>
          </section>
        </article>
      </main>
      {submitmodals && (
        <Modals_Alert
          pages={"question"}
          handleCloseModals={submitmodalsSet}
          handleClickDone={handleSubmitWithModals}
        />
      )}
    </>
  );
}
