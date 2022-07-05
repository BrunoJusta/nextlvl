import React from "react";
import { NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const ProfileLink = ({ title, url }) => {
  return (
    <NavLink to={url} className="mx-4 py-4 border-b-2 border-bglighter">
      <div className=" flex justify-between">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white font-medium text-lg self-center">
          <FiChevronRight />
        </p>
      </div>
    </NavLink>
  );
};

export default ProfileLink;
