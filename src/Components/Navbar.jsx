import React, { useState } from "react";
import Logo from "./Logo";
import { IconsImport } from "../Utils/IconsImport";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserCandidate } from "../../User";
import Modals_Alert from "./Modals/Modals_Alert";

export default function Navbar() {
  const { id } = useParams();
  const [modalsSignOut, modalsSignOutSet] = useState(false);
  const GetUserById = UserCandidate.find(
    (user) => user.code.toUpperCase() === id.toUpperCase()
  );
  const locationIndex = useLocation().pathname.split("/");
  const activeLocation =
    useLocation().pathname.split("/")[locationIndex.length - 1];
  const navigate = useNavigate();
  function handleModals() {
    if (GetUserById.points > 0) {
      modalsSignOutSet(true);
    } else {
      navigate(`/`);
    }
  }
  function handleSignOutWithModals() {
    modalsSignOutSet(false);
    navigate(`/`);
  }
  return (
    <>
      <nav className="w-full font-alametric flex justify-between items-center px-4 ">
        <Logo />
        <div className="flex gap-5 items-center  z-30 sm:items-end">
          {GetUserById.points > 0 && (
            <>
              <Link
                to={`/home/${id}`}
                className={`text-lg font-poppins  ${
                  activeLocation === id ? "text-cyan-500" : "text-white"
                } hover:text-cyan-500 max-sm:text-sm cursor-pointer`}
              >
                Home
              </Link>
              <Link
                to={`/home/${id}/rank`}
                className={`text-lg font-poppins  ${
                  activeLocation === "rank" ? "text-cyan-500" : "text-white"
                } hover:text-cyan-500 cursor-pointer  max-sm:text-sm `}
              >
                Rank
              </Link>
            </>
          )}
          <img
            src={IconsImport.IconsOut}
            alt="out"
            className="w-9 h-9 cursor-pointer"
            onClick={handleModals}
          />
        </div>
      </nav>
      {modalsSignOut && (
        <Modals_Alert
          pages={"signout"}
          handleCloseModals={modalsSignOutSet}
          handleClickDone={handleSignOutWithModals}
        />
      )}
    </>
  );
}
