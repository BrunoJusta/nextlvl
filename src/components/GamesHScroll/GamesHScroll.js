import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import games from "../../Data/games.json";

const GamesHScroll = ({ title, isBig, url }) => {
  return (
    <div className="p-4">
      <div className=" flex justify-between">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        {url ? (
          <NavLink to={url} className="self-center">
            <p className="text-bluer font-medium text-sm "> View all</p>
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex overflow-y-hidden py-4">
        {isBig === true
          ? games.bigames.map(function (game, g) {
              return (
                <img
                  key={game.gameId}
                  className="rounded-lg shadow-xl mr-4 "
                  src={game.cover}
                />
              );
            })
          : games.games.map(function (game, g) {
              return (
                <NavLink className="contents" to={"/game/" + game.gameId}>
                  <img
                    key={game.gameId}
                    className="rounded-lg shadow-xl mr-4 "
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
