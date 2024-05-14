/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiHome } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="p-5">
        <div className="bg-gray-100 rounded-xl px-5 h-[94vh]">
          <img src="/logo.png" alt="logo" className="w-40 mx-auto" />
          <div className="cursor-pointer pt-4 w-[30vh]">
            <Link href="/">
              <div className="flex justify-start items-center gap-4 py-2 px-2 rounded-xl  bg-white shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-red-300 duration-300">
                <BiHome className="text-xl" />
                <p className="text-lg font-normal">Home</p>
              </div>
            </Link>
            <div className="flex justify-start items-center gap-4 py-2 px-2 rounded-xl  mt-4 bg-white shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-red-300 duration-300">
              <LuLayoutDashboard className="text-xl" />
              <p className="text-lg font-normal">Dashboard</p>
            </div>
            <div className="flex justify-start items-center gap-4 py-2 px-2 rounded-xl mt-4 bg-white shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-red-300 duration-300">
              <CgProfile className="text-xl" />
              <p className="text-lg font-normal">Profile</p>
            </div>
            <div className="flex justify-start items-center gap-4 py-2 px-2 rounded-xl mt-4 bg-white shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-red-300 duration-300">
              <MdOutlineSettings className="text-xl" />
              <p className="text-lg font-normal">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
