import React from "react";
import { NavLink } from "react-router-dom";
import { GamesList } from "../../components";
import { MdArrowBack } from "react-icons/md";
const AddFavorites = (props) => {
  return (
    <div className="mobile w-full flex flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8  p-4 flex ">
        <NavLink to="/favorites" className="  text-white">
          <div className="p-4 bg-stroke rounded-md text-xl">
            <MdArrowBack />
          </div>
        </NavLink>
        <input
          className="w-full px-4 py-2 ml-4 rounded-md border-stroke border-2 bg-bgDark text-grayer"
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      <GamesList />
    </div>
  );
};

export default AddFavorites;
