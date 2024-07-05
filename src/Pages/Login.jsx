import React from "react";
import Logo from "../Components/Logo";
import FormLogin from "../Components/Login/FormLogin";
import Bg_Circle_Login from "../Components/Bg-Circle-Login";

export default function Login() {
  return (
    <div className="w-full h-screen font-alametric justify-center flex items-end sm:items-center  overflow-x-hidden overflow-y-auto">
      <div className="w-full flex flex-col justify-between sm:block sm:w-1/2 lg:w-1/3 max-sm:h-3/4  relative ">
        <Bg_Circle_Login />
        <Logo />
        <FormLogin />
      </div>
    </div>
  );
}
