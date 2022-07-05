import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesGrid, GamesList } from "../../components";
import { MdArrowBack, MdFilterAlt, MdAddBox } from "react-icons/md";
const Favorites = (props) => {
  return (
    <div className="mobile w-full flex flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8 mb-4 p-4 flex ">
        <NavLink to="/" className="  text-white">
          <div className="p-4 bg-stroke rounded-md text-xl">
            <MdArrowBack />
          </div>
        </NavLink>
        <h3 className="w-full text-white font-bold self-center text-2xl ">
          Favorites
        </h3>
        <NavLink to="/addfavorites">
          <div className="p-4 bg-bluer rounded-md text-white text-xl">
            <MdAddBox />
          </div>
        </NavLink>
      </div>

      <GamesGrid />
    </div>
  );
};

export default Favorites;
