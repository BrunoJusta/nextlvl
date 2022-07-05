import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll, ProfileLink } from "../../components";
import { FiChevronRight } from "react-icons/fi";
import { Header } from "../../components/Header";
import { GamesGrid } from "../../components/GamesGrid";

const Profile = () => {
  let { userId } = useParams();
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    setCurrentUser(users.users.find((u) => u.userId === userId));
  }, []);

  return (
    <div className=" pb-24">
      <div className="desktop text-white w-full h-full flex align-middle justify-center">
        <h1 className="self-center text-4xl"> This only works for mobile</h1>
      </div>
      <div className="mobile w-full flex flex-col justify-center align-middle text-center">
        <Header
          bg={currentUser.bg}
          name={currentUser.name}
          badge={currentUser.badge}
          ava={currentUser.ava}
        />

        <div className="w-full overflow-y-hidden  flex p-2">
          <div className="p-1 m-2 bg-stroke flex flex-col rounded-lg text-white">
            <h3 className="text-sm uppercase pt-2 font-semibold">
              gameplay time
            </h3>

            <div className="p-4 bg-stroke flex">
              <div className="px-4">
                <p className="text-3xl font-bold">{currentUser.months}</p>
                <p className="text-xs font-medium uppercase">months</p>
              </div>
              <div className="px-4">
                <p className="text-3xl font-bold">{currentUser.days}</p>
                <p className="text-xs font-medium uppercase">days</p>
              </div>
              <div className="px-4">
                <p className="text-3xl font-bold">{currentUser.hours}</p>
                <p className="text-xs font-medium uppercase">hours</p>
              </div>
            </div>
          </div>
          <div className="w-full p-1 m-2 bg-stroke flex flex-col rounded-lg text-white text-center align-middle">
            <h3 className="text-sm uppercase pt-2 font-semibold w-60">
              story mode completed
            </h3>
            <div className="p-4 bg-stroke flex w-full  justify-center">
              <p className="text-3xl">{currentUser.storymode}</p>
            </div>
          </div>
          <div className="p-1 m-2 bg-stroke flex flex-col rounded-lg text-white text-center align-middle">
            <h3 className="text-sm uppercase pt-2 font-semibold w-60">
              100% completed
            </h3>
            <div className="p-4 bg-stroke flex w-full  justify-center">
              <p className="text-3xl">{currentUser.undred}</p>
            </div>
          </div>
        </div>

        <GamesHScroll title={"Collection"} url={"/collection"} />
        <GamesHScroll title={"Favorites"} url={"/favorites"} />

        <ProfileLink title={"Reviews"} url={"/"} />
        <ProfileLink title={"Stats"} url={"/"} />
        <ProfileLink title={"Followers"} url={"/"} />
        <ProfileLink title={"Following"} url={"/following"} />
      </div>
    </div>
  );
};

export default Profile;
