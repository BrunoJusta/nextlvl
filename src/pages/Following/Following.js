import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesGrid, GamesList, UsersList } from "../../components";
import { MdArrowBack, MdFilterAlt, MdAddBox } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

const Following = (props) => {
  return (
    <div className="mobile w-full flex flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8  p-4 flex ">
        <NavLink to="/" className="  text-white">
          <div className="p-4 bg-stroke rounded-md text-xl">
            <MdArrowBack />
          </div>
        </NavLink>
        <input
          className="w-full px-4 py-2 ml-4 mr-4 rounded-md border-stroke border-2 bg-bgDark text-grayer"
          type="text"
          placeholder="Pesquisar"
        />
        <NavLink to="/addfavorites">
          <div className="p-4 bg-bluer rounded-md text-white text-xl">
            <FaUserPlus />
          </div>
        </NavLink>
      </div>

      <UsersList />
    </div>
  );
};

export default Following;
