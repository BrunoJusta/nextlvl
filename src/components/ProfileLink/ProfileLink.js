import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const ProfileLink = ({ title, isBig }) => {
  return (
    <NavLink to="/" className="mx-4 py-4 border-b-2 border-neutral-700">
      <div className=" flex justify-between">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <NavLink to="/">
          <p className="text-blue-300 font-medium text-lg">
            <FiChevronRight />
          </p>
        </NavLink>
      </div>
    </NavLink>
  );
};

export default ProfileLink;
