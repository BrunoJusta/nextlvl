import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll } from "../../components";

const Home = (props) => {
  return (
    <div className="mobile w-full flex flex-col justify-center align-middle text-center">
      <div className="bg-slate-800 p-8 mb-4 px-4">
        <input
          className="w-full px-4 py-2 rounded-sm"
          type="text"
          placeholder="Pesquisar"
        />
      </div>

      <GamesHScroll title={"Newest Releases"} isBig={true} />

      <GamesHScroll title={"Popular Games"} />

      <GamesHScroll title={"Most Played"} />

      <GamesHScroll title={"Your Activity"} />
    </div>
  );
};

export default Home;
