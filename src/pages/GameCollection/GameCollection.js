import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll } from "../../components";
import { GamesGrid } from "../../components/GamesGrid";
import { MdArrowBack, MdFilterAlt, MdAddBox } from "react-icons/md";
const GameCollection = (props) => {
  return (
    <div className="mobile w-full flex relative flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8 mb-4 p-4 flex justify-between">
        <h3 className="text-white font-bold self-center text-2xl ">
          Collection
        </h3>
        <div className="p-4 bg-bluer rounded-md text-white text-xl">
          <MdFilterAlt />
        </div>
      </div>

      <GamesGrid />

      <NavLink
        to="/"
        className="fxdBtn fixed right-4 p-4 mb-32 bg-stroke rounded-md text-white text-xl"
      >
        <MdAddBox />
      </NavLink>
    </div>
  );
};

export default GameCollection;
