"use client";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
export default function SearchBar({ childmsg }) {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <>
      <div className="searchBTN">
        <div className="flex">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search for cities"
            className="w-[19rem] md:w-full  rounded-2xl  p-2 placeholder:text-gray-950/20  bg-gray-300/50 
 outline-none"
          />
          <button
            onClick={() => childmsg(searchInput)}
            className="bg-gray-300/50 rounded-2xl md:p-2 md:ml-1"
          >
            <AiOutlineSend className="w-4" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}
