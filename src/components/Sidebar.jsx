import React, { useEffect, useState } from "react";
import {
  House,
  ChartNoAxesColumnIncreasing,
  UserRound,
  Calendar,
  Zap,
  BellRing,
  Settings,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/slice";
function Sidebar() {
  const dispatch = useDispatch();
  const sideBarOpen = useSelector((store) => store.dashboard.openSideBar);

  const handleCloseSidebar = () => {
    dispatch(closeSideBar());
  };

  return (
    sideBarOpen && (
      <div
        className={`absolute top-11 z-40 max-h-[35rem]   sm:max-h-[39rem]  h-full m-2 flex flex-1 flex-col justify-between bg-slate-50 rounded-xl transition-all duration-300 fixed  `}
      >
        <div className=" h-[50%] flex  flex-col justify-between p-2 items-center ">
          <img
            onClick={window.innerWidth < 600 ? handleCloseSidebar : null}
            width={25}
            src="./logo.jpeg"
          />
          <div className=" p-2 rounded-full  bg-slate-200 }  ">
            <House size={20} className="text-slate-600    " />
          </div>
          <ChartNoAxesColumnIncreasing size={20} className="text-slate-600 " />
          <UserRound size={20} className="text-slate-600 " />
          <Calendar size={20} className="text-slate-600 " />
          <Zap size={20} className="text-slate-600 " />
          <BellRing size={20} className="text-slate-600 " />
        </div>
        <div className="flex flex-col   h-[13%] justify-evenly">
          <Settings size={20} />

          <img width={25} className="rounded-full" src="./profile.jpeg" />
        </div>
      </div>
    )
  );
}

export default Sidebar;
