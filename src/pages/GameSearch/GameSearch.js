import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll } from "../../components";
import { GamesGrid } from "../../components/GamesGrid";
import { MdArrowBack, MdFilterAlt, MdAddBox } from "react-icons/md";
import { AiOutlineScan } from "react-icons/ai";

const GameSearch = (props) => {
  return (
    <div className="mobile w-full flex relative flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8 mb-4 p-4 flex justify-between">
        <input
          className="w-full px-4 py-2 mr-4 rounded-md border-stroke border-2 bg-bgDark text-grayer"
          type="text"
          placeholder="Pesquisar"
        />
        <div className="p-4 bg-bluer rounded-md text-white text-xl">
          <AiOutlineScan />
        </div>
      </div>

      <GamesGrid />

      <div className="fixed  right-4 px-4 py-2 bg-stroke rounded-md text-white text-sm flex">
        Filtrar <MdFilterAlt className=" self-center ml-2" />
      </div>
    </div>
  );
};

export default GameSearch;
