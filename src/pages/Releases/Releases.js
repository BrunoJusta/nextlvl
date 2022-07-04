import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll } from "../../components";
import { GamesGrid } from "../../components/GamesGrid";
import { MdArrowBack } from "react-icons/md";
const Releases = (props) => {
  return (
    <div className="mobile w-full flex flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter py-8 mb-4 p-4 flex ">
        <NavLink to="/" className="  text-white text-xl">
          <div className="p-4 bg-stroke rounded-md">
            <MdArrowBack />
          </div>
        </NavLink>
        <h3 className="w-full text-white font-bold self-center text-2xl ">
          Releases
        </h3>
      </div>

      <GamesHScroll title={"Newest Releases"} isBig={true} />

      <GamesGrid />
    </div>
  );
};

export default Releases;
