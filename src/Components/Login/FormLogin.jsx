import React, { useState } from "react";
import Check_User from "../../Utils/Check_User";
import { useNavigate } from "react-router-dom";
import { ThisQuestions } from "../../../Quest";

export default function FormLogin() {
  const navigate = useNavigate();
  const [errorValidate, errorValidateSet] = useState(false);
  const [loadData, loadDataSet] = useState(false);
  const [userData, userDataSet] = useState({
    name: "",
    code: "",
  });
  function handelChange(e) {
    const { name, value } = e.target;
    userDataSet({ ...userData, [name]: value });
    errorValidateSet(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { name, code } = userData;
    loadDataSet(true);
    try {
      const validate = await Check_User({ name, code });
      if (validate.success) {
        if (validate.data.points > 0) {
          for (let i in ThisQuestions) {
            ThisQuestions[i].open = true;
            ThisQuestions[i].success = true;
          }
        } else {
          for (let i in ThisQuestions) {
            if (i > 0) {
              ThisQuestions[i].open = false;
              ThisQuestions[i].success = false;
            } else {
              ThisQuestions[i].open = true;
              ThisQuestions[i].success = false;
            }
          }
        }
        navigate(`/home/${validate.data.code}`);
        errorValidateSet(false);
      }
    } catch (error) {
      errorValidateSet(true);
    } finally {
      loadDataSet(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-3/5 flex flex-col justify-evenly font-poppins font-medium sm:justify-between sm:h-1/2 bg-white rounded-t-2xl sm:rounded-2xl py-5 px-4 z-10"
    >
      <div className="w-full z-10 ">
        <label htmlFor="kode" className="block font-light pb-2">
          Kode Kandidat
        </label>
        <input
          id="kode"
          required
          type="text"
          name="code"
          className="w-full rounded-md py-4 px-3 bg-gray-200 outline-none"
          placeholder="Masukkan Kode Kandidat"
          value={userData.code}
          onChange={handelChange}
        />
      </div>
      <div className="w-full ">
        <label htmlFor="nama" className="block font-light pb-2">
          Nama Lengkap
        </label>
        <input
          id="nama"
          required
          type="text"
          name="name"
          className="w-full rounded-md py-4 px-3 bg-gray-200 outline-none"
          placeholder="Masukkan Nama Lengkap"
          value={userData.name}
          onChange={handelChange}
        />
      </div>
      {errorValidate && (
        <p className="text-red-500 text-sm py-1">Kode atau Nama Salah</p>
      )}
      <div className="w-full mt-3">
        <button
          type="submit"
          disabled={loadData}
          className={`bg-[#6739ba] py-2 w-full disabled:bg-[#6739ba]/50  rounded text-white hover:bg-[#6739ba]/50`}
        >
          Masuk
        </button>
      </div>
    </form>
  );
}
