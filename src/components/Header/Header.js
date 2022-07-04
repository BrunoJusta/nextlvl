import React, { useEffect, useState } from "react";

const Header = ({ bg, name, badge, ava, isGame }) => {
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

      <h1 className="text-2xl font-bold text-white pt-4 pb-4 self-center">
        {name}
      </h1>
    </div>
  );
};

export default Header;
