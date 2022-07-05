import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import games from "../../Data/games.json";
import { Header } from "../../components/Header";
import { GamesHScroll } from "../../components";

const GameProfile = () => {
  let { gameId } = useParams();
  const [currentGame, setCurrentGame] = useState([]);
  useEffect(() => {
    setCurrentGame(games.games.find((g) => g.gameId === gameId));
  }, []);

  return (
    <div className=" pb-24">
      <Header
        bg={currentGame.bg}
        name={currentGame.title}
        ava={currentGame.cover}
        isGame={true}
        rating={currentGame.rating}
        platforms={currentGame.platforms}
      />

      <div className="text-white p-4 my-4 text-sm">
        <p>{currentGame.desc1}</p>
        <iframe
          className="w-full h-52 my-8"
          src={currentGame.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>{currentGame.desc2}</p>
      </div>

      <GamesHScroll title={"Related Games"} />
    </div>
  );
};

export default GameProfile;
