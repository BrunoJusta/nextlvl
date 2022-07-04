import React, { useEffect, useState } from "react";
import "./Profile.css";
import { NavLink, useParams } from "react-router-dom";
import users from "../../Data/users.json";
import { GamesHScroll, ProfileLink } from "../../components";
import { FiChevronRight } from "react-icons/fi";
import { Header } from "../../components/Header";

const Profile = () => {
  let { userId } = useParams();
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    setCurrentUser(users.users.find((u) => u.userId === userId));
  }, []);
  console.log(currentUser.bg);

  return (
    <>
      <div className="desktop text-white">This only works for mobile</div>
      <div className="mobile w-full flex flex-col justify-center align-middle text-center">
        <Header
          bg={currentUser.bg}
          name={currentUser.name}
          badge={currentUser.badge}
          ava={currentUser.ava}
        />

        <div className="w-full overflow-y-hidden  flex p-2">
          <div className="p-1 m-2 bg-slate-700 flex flex-col rounded-lg text-white">
            <h3>gameplay time</h3>

            <div className="p-4 bg-slate-700 flex">
              <div className="px-4">
                <p className="text-3xl">{currentUser.months}</p>
                <p className="text-sm">months</p>
              </div>
              <div className="px-4">
                <p className="text-3xl">{currentUser.days}</p>
                <p className="text-sm">days</p>
              </div>
              <div className="px-4">
                <p className="text-3xl">{currentUser.hours}</p>
                <p className="text-sm">hours</p>
              </div>
            </div>
          </div>
          <div className="w-full p-1 m-2 bg-slate-700 flex flex-col rounded-lg text-white text-center align-middle">
            <h3 className="w-60">story mode completed</h3>
            <div className="p-4 bg-slate-700 flex w-full  justify-center">
              <p className="text-3xl">{currentUser.storymode}</p>
            </div>
          </div>
          <div className="p-1 m-2 bg-slate-700 flex flex-col rounded-lg text-white text-center align-middle">
            <h3 className="w-40">100% completed</h3>
            <div className="p-4 bg-slate-700 flex w-full  justify-center">
              <p className="text-3xl">{currentUser.undred}</p>
            </div>
          </div>
        </div>

        <GamesHScroll title={"Collection"} />
        <GamesHScroll title={"Favorites"} />

        <ProfileLink title={"Reviews"} />
        <ProfileLink title={"Stats"} />
        <ProfileLink title={"Followers"} />
        <ProfileLink title={"Following"} />
      </div>
    </>
  );
};

export default Profile;
