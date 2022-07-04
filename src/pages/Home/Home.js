import logo from "../../logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll } from "../../components";

const Home = (props) => {
  return (
    <div className="mobile w-full flex flex-col pb-24 justify-center align-middle text-center">
      <div className="bg-bglighter p-8 mb-4 px-4">
        <input
          className="w-full px-4 py-2 rounded-md border-stroke border-2 bg-bgDark text-grayer"
          type="text"
          placeholder="Pesquisar"
        />
      </div>

      <GamesHScroll title={"Newest Releases"} isBig={true} url={"/releases"} />

      <GamesHScroll title={"Popular Games"} />

      <GamesHScroll title={"Most Played"} />

      <GamesHScroll title={"Your Activity"} />
    </div>
  );
};

export default Home;
