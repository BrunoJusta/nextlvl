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
    <div className=" bg-bglighter p-4 fixed bottom-0 z-50 w-full flex justify-between">
      <NavLink
        to="/collection"
        className={
          location.pathname === "/collection"
            ? "text-3xl text-bluer"
            : "text-3xl text-white"
        }
      >
        <MdOutlineCollectionsBookmark />
      </NavLink>
      <NavLink
        to="/"
        className={
          location.pathname === "/search"
            ? "text-3xl text-bluer"
            : "text-3xl text-white"
        }
      >
        <MdSearch />
      </NavLink>
      <NavLink
        to="/"
        className={
          location.pathname === "/" || location.pathname === "/releases"
            ? "text-3xl text-bluer"
            : "text-3xl text-white"
        }
      >
        <BiHomeAlt />
      </NavLink>
      <NavLink
        to="/wishlist"
        className={
          location.pathname === "/wishlist"
            ? "text-3xl text-bluer"
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
          location.pathname !== "/releases" &&
          location.pathname !== "search"
            ? "text-3xl text-bluer"
            : "text-3xl text-white"
        }
      >
        <BiUser />
      </NavLink>
    </div>
  );
};

export default Nav;
