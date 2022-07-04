import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import games from "../../Data/games.json";

const GamesHScroll = ({ title, isBig }) => {
  return (
    <div className="p-4">
      <div className=" flex justify-between">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <NavLink to="/">
          <p className="text-blue-300 font-medium text-lg"> View all</p>
        </NavLink>
      </div>
      <div className="w-full flex overflow-y-hidden py-4">
        {isBig === true
          ? games.bigames.map(function (game, g) {
              return (
                <NavLink className="contents" to="/">
                  <img
                    key={g}
                    className=" rounded-lg shadow-xl mr-4 "
                    src={game.cover}
                  />
                </NavLink>
              );
            })
          : games.games.map(function (game, g) {
              return (
                <NavLink className="contents" to="/">
                  <img
                    key={g}
                    className=" rounded-lg shadow-xl mr-4 "
                    src={game.cover}
                  />
                </NavLink>
              );
            })}
      </div>
    </div>
  );
};

export default GamesHScroll;
