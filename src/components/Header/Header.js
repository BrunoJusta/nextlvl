import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Header = ({ bg, name, badge, ava, isGame, rating, platforms }) => {
  const stars = [];

  for (let r = 1; r <= 5; r++) {
    stars.push(
      <AiFillStar className={rating >= r ? "text-bluer" : "text-stroke"} />
    );
  }

  return (
    <div className="flex flex-col align-middle justify-center">
      <img className="w-full h-auto m-0 p-0 " src={bg} />

      <div className="profileImage w-full relative flex justify-center align-middle -mt-32">
        <div className="profileImage w-fit relative flex justify-center align-middle">
          <img
            className={
              isGame ? "rounded-lg" : "rounded-full border-4 border-white"
            }
            src={ava}
          />
          <div className="flex bg-slate-800 absolute bottom-0 right-0 rounded-full shadow-lg">
            <img className="w-12" src={badge} />
          </div>
        </div>
      </div>
      {isGame === true ? (
        <div className="w-full flex justify-center pt-4 text-xl ">{stars}</div>
      ) : (
        ""
      )}
      <h1 className="text-2xl font-bold text-white pt-4 pb-4 self-center">
        {name}
      </h1>
      {isGame === true ? (
        <div className="flex flex-col">
          <h3 className="text-white bg-stroke w-fit font-semibold text-sm py-1 px-4 rounded-full self-center ">
            {platforms}
          </h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
