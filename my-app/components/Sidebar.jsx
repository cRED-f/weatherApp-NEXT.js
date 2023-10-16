"use client";
import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { GiSettingsKnobs, GiExitDoor } from "react-icons/gi";
import { BsFillUmbrellaFill, BsFillMapFill } from "react-icons/bs";
import { signOut } from "next-auth/react";
export default function Sidebar() {
  return (
    <div className="mt-10 mx-2 w-14 md:m-10 md:w-20 ">
      <div className="flex flex-col bg-gray-300/50 h-[90vh]  rounded-lg ">
        <div className="logoIcon  h-[10rem] flex items-center justify-center ">
          <BsFillUmbrellaFill className="text-teal-400 animate-pulse" />
        </div>
        <div className="flex flex-col h-screen">
          <div className="pt-10 pb-2 ">
            <div className="cursor-pointer">
              <TiWeatherDownpour className="text-[20px] mb-2 text-gray-700/60 font-bold mx-auto " />
              <h1 className="text-[8px] md:text-[12px] font-bold text-center ">
                Weather
              </h1>
            </div>
          </div>
          <div className="py-4">
            <div className="cursor-pointer">
              <BsFillMapFill className="text-[20px] mb-2 text-gray-700/60 font-bold mx-auto" />
              <h1 className="text-[8px] md:text-[12px] font-bold text-center">
                Cities
              </h1>
            </div>
          </div>
          <div className="py-4">
            <div className="cursor-pointer">
              <GiSettingsKnobs className="text-[20px] mb-2 text-gray-700/60 font-bold mx-auto" />
              <h1 className="text-[8px] md:text-[12px] font-bold text-center">
                Settings
              </h1>
            </div>
          </div>
          <div className="py-4 flex justify-center">
            <button onClick={() => signOut()} className="cursor-pointer">
              <GiExitDoor className="text-[20px] mb-2 text-gray-700/60 font-bold mx-auto" />
              <div className="text-[8px] md:text-[12px] font-bold text-center">
                Exit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
