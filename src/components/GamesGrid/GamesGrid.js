import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import games from "../../Data/games.json";

const GamesGrid = ({ title, isBig }) => {
  let switchGames = games.games.filter((game) => game.platforms === "Switch");
  let ps4Games = games.games.filter(
    (game) => game.platforms === "Playstation 4"
  );
  let ps5Games = games.games.filter(
    (game) => game.platforms === "Playstation 5"
  );
  let xboxGames = games.games.filter((game) => game.platforms === "xbox");

  console.log(xboxGames);

  return (
    <div className="p-4">
      {switchGames.length !== 0 ? (
        <div className="flex flex-col">
          <h3 className="text-white bg-stroke w-fit font-semibold text-sm py-1 px-4 rounded-full self-center ">
            Switch
          </h3>

          <div className="w-full grid grid-cols-2  py-4">
            {switchGames.map(function (game, g) {
              return (
                <NavLink
                  key={g}
                  className="contents"
                  to={"/game/" + game.gameId}
                >
                  <img
                    key={game.name}
                    className="rounded-lg shadow-xl mr-4 mb-4"
                    src={game.cover}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {ps4Games.length !== 0 ? (
        <div className="flex flex-col">
          <h3 className="text-white bg-stroke w-fit font-semibold text-sm py-1 px-4 rounded-full self-center ">
            Playstation 4
          </h3>

          <div className="w-full grid grid-cols-2  py-4">
            {ps4Games.map(function (game, g) {
              return (
                <NavLink
                  key={g}
                  className="contents"
                  to={"/game/" + game.gameId}
                >
                  <img
                    key={game.name}
                    className="rounded-lg shadow-xl mr-4 mb-4"
                    src={game.cover}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {ps5Games.length !== 0 ? (
        <div className="flex flex-col">
          <h3 className="text-white bg-stroke w-fit font-semibold text-sm py-1 px-4 rounded-full self-center ">
            Playstation 5
          </h3>

          <div className="w-full grid grid-cols-2  py-4">
            {ps5Games.map(function (game, g) {
              return (
                <NavLink
                  key={g}
                  className="contents"
                  to={"/game/" + game.gameId}
                >
                  <img
                    key={game.name}
                    className="rounded-lg shadow-xl mr-4 mb-4"
                    src={game.cover}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {xboxGames.length !== 0 ? (
        <div className="flex flex-col">
          <h3 className="text-white bg-stroke w-fit font-semibold text-sm py-1 px-4 rounded-full self-center ">
            Xbox
          </h3>
          <div className="w-full grid grid-cols-2  py-4">
            {xboxGames.map(function (game, g) {
              return (
                <NavLink
                  key={g}
                  className="contents"
                  to={"/game/" + game.gameId}
                >
                  <img
                    key={game.name}
                    className="rounded-lg shadow-xl mr-4 mb-4"
                    src={game.cover}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GamesGrid;
