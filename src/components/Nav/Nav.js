import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdOutlineCollectionsBookmark,
  MdSearch,
  MdBookmarkBorder,
} from "react-icons/md";
import { BiHomeAlt, BiUser } from "react-icons/bi";

const Nav = () => {
  let location = useLocation();
  return (
    <div className="bg-slate-800 p-4 fixed bottom-0 z-50 w-full flex justify-between">
      <NavLink
        to="/"
        className={
          location.pathname === "/collection"
            ? "text-3xl text-blue-500"
            : "text-3xl text-white"
        }
      >
        <MdOutlineCollectionsBookmark />
      </NavLink>
      <NavLink
        to="/"
        className={
          location.pathname === "/search"
            ? "text-3xl text-blue-500"
            : "text-3xl text-white"
        }
      >
        <MdSearch />
      </NavLink>
      <NavLink
        to="/"
        className={
          location.pathname === "/"
            ? "text-3xl text-blue-500"
            : "text-3xl text-white"
        }
      >
        <BiHomeAlt />
      </NavLink>
      <NavLink
        to="/"
        className={
          location.pathname === "/wishlist"
            ? "text-3xl text-blue-500"
            : "text-3xl text-white"
        }
      >
        <MdBookmarkBorder />
      </NavLink>
      <NavLink
        to="/bruno_justa"
        className={
          location.pathname !== "/" &&
          location.pathname !== "/collection" &&
          location.pathname !== "/wishlist" &&
          location.pathname !== "search"
            ? "text-3xl text-blue-500"
            : "text-3xl text-white"
        }
      >
        <BiUser />
      </NavLink>
    </div>
  );
};

export default Nav;
