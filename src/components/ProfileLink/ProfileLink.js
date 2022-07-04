import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const ProfileLink = ({ title, isBig }) => {
  return (
    <NavLink to="/" className="mx-4 py-4 border-b-2 border-bglighter">
      <div className=" flex justify-between">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <NavLink to="/" className="self-center">
          <p className="text-white font-medium text-lg">
            <FiChevronRight />
          </p>
        </NavLink>
      </div>
    </NavLink>
  );
};

export default ProfileLink;
