"use client";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { BsFillSendFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
export default function Cities() {
  const [city, setCity] = React.useState("");
  const [datas, setDatas] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (datas.length > 0) return;
      else {
        try {
          const { data } = await axios.get(
            `https://api.weatherapi.com/v1/timezone.json?key=e3aa3146c4ec46cba58180117232503&q=dhaka
      `,
            {
              header: {
                "Content-Type": "application/json",
              },
            }
          );

          setDatas(data.location);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);

  const handlebtn = async () => {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/timezone.json?key=e3aa3146c4ec46cba58180117232503&q=${city}
`,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      setDatas(data.location);
    } catch (err) {
      console.log(err);
    }
  };

  const childmsg = (msg) => {
    setCity(msg);
    handlebtn();
  };

  return (
    <div className="mt-10 h-[90vh] md:mt-10 md:min-w-[100rem] overflow-y-hidden ">
      <div className="flex flex-col  flex-wrap  md:w-[70rem] h-screen">
        {/*searchBar */}
        <SearchBar childmsg={childmsg} />

        <div className="firstBox mt-6 md:w-full flex flex-col  items-center gap-4">
          <div className="h-[20vh] flex flex-row justify-between bg-gray-300/50 md:w-full rounded-2xl w-[18rem]">
            <div className="flex flex-col  justify-center md:px-5  w-fit h-full gap-5">
              <h1 className="text-3xl px-1 md:text-5xl font-bold flex gap-2 md:gap-4">
                {datas.name} <BsFillSendFill className="w-4" />
              </h1>
              <h1 className="text-1xl md:text-lg px-2">{datas.country}</h1>
            </div>
            <div className="flex flex-col gap-7 md:px-5 justify-center">
              <h1 className="text-1xl  md:text-3xl">{datas.localtime}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
