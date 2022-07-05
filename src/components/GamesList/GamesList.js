import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import games from "../../Data/games.json";
import { AiFillHeart } from "react-icons/ai";

const GamesList = () => {
  return (
    <div className="p-4">
      <div className="w-full grid grid-cols-1  py-4">
        {games.games.map(function (game, g) {
          return (
            <div className="w-full bg-stroke my-2 flex justify-between rounded-md">
              <img
                key={game.name}
                className="rounded-md shadow-xl m-2  w-16 self-center"
                src={game.cover}
              />
              <h3 className="self-center text-lg font-semibold text-white ">
                {game.title}
              </h3>
              <AiFillHeart className="self-center text-3xl mr-4 text-bluer" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesList;
