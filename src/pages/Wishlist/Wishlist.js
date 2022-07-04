import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll } from "../../components";
import { GamesGrid } from "../../components/GamesGrid";
import { MdArrowBack, MdFilterAlt, MdAddBox } from "react-icons/md";
const Wishlist = (props) => {
  return (
    <div className="mobile w-full flex flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8 mb-4 p-4 flex ">
        <NavLink to="/" className="  text-white">
          <div className="p-4 bg-stroke rounded-md text-xl">
            <MdArrowBack />
          </div>
        </NavLink>
        <h3 className="w-full text-white font-bold self-center text-2xl ">
          Wishlist
        </h3>
        <div className="p-4 bg-bluer rounded-md text-white text-xl">
          <MdFilterAlt />
        </div>
      </div>

      <GamesGrid />

      <NavLink
        to="/"
        className="fixed right-4 p-4 mb-12 bg-stroke rounded-md text-white text-xl"
      >
        <MdAddBox />
      </NavLink>
    </div>
  );
};

export default Wishlist;
