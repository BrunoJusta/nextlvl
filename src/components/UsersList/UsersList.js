import React from "react";
import users from "../../Data/users.json";
import { RiUserUnfollowFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const UsersList = () => {
  return (
    <div className="p-4">
      <div className="w-full grid grid-cols-1  py-4">
        {users.users.map(function (user, u) {
          return (
            <NavLink to={"/" + user.userId}>
              <div className="w-full bg-stroke my-2 flex justify-between rounded-md">
                <div className="flex">
                  <img
                    key={user.name}
                    className="rounded-full shadow-xl m-2 mr-4  w-12 self-center"
                    src={user.ava}
                  />
                  <h3 className="self-center text-lg font-semibold text-white ">
                    {user.name}
                  </h3>
                </div>

                <RiUserUnfollowFill className="self-center text-3xl mr-4 text-bgDark" />
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
