"use client";
import Image from "next/image";
import rainy from "../public/img/rainy.png";
import sunny from "../public/img/sunny.png";
import cloudy from "../public/img/cloudy.png";
import clear from "../public/img/clear.png";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaSun } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
export default function Weather() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=e3aa3146c4ec46cba58180117232503&q=${
            searchInput.length === 0 ? "dhaka" : searchInput
          }&days=7&aqi=yes&alerts=no`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(data);
      } catch (e) {
        toast({
          variant: "destructive",
          title: "server error",
        });
      }
    };
    fetchData();
  }, []);

  const handleBtn = () => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=e3aa3146c4ec46cba58180117232503&q=${
            searchInput.length === 0 ? "dhaka" : searchInput
          }&days=7&aqi=yes&alerts=no`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(data);
      } catch (e) {
        toast({
          variant: "destructive",
          title: "Invalid city name",
          description: "Please enter a valid city name",
        });
      }
    };
    fetchData();
  };
  const childmsg = (msg) => {
    console.log(msg);
    setSearchInput(msg);
    handleBtn();
  };

  return (
    <div className=" mt-10 h-[90vh] md:mt-10 md:min-w-[100rem] overflow-y-auto md:overflow-y-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col  flex-wrap  md:w-[70rem] h-screen">
          {/* searchbar  */}
          <SearchBar childmsg={childmsg} />
          <div className="firstBox mt-6 md:w-full   ">
            <div className="flex justify-between my-4">
              {" "}
              <div className="p-5 ">
                <h1 className="text-3xl font-bold ">{data?.location.name}</h1>
                <div className="bg-gray-300/50 w-fit p-2 rounded-2xl">
                  {" "}
                  <p className="text-left">
                    Condition:{data?.current.condition.text}
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={
                    data?.current.condition.text === "Rain"
                      ? rainy
                      : data?.current.condition.text === "Sunny"
                      ? sunny
                      : data?.current.condition.text === "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-20 md:w-36 md:mx-20   mt-1"
                />
              </div>
            </div>
            <div>
              <h1 className="px-5  text-5xl md:text-6xl font-bold">
                {data?.current.temp_c}
                <span>&#176;</span>
              </h1>
            </div>
          </div>
          <div className="secondBox mt-6 bg-gray-300/50 md:w-full  rounded-3xl overflow-x-auto md:overflow-x-hidden">
            <div className="w-full h-[30vh] ">
              <h1 className="text-gray-800/50 p-5 font-semibold">
                TODAYS FORECAST
              </h1>

              <div className="flex w-[300px] items-center justify-evenly my-8   md:w-full">
                <div className="flex mx-3 flex-col ">
                  <h1 className="text-gray-800/50 font-semibold">06:00AM</h1>
                  <Image
                    src={
                      data?.forecast.forecastday[0].hour[6].condition.text ===
                      "Rain"
                        ? rainy
                        : data?.forecast.forecastday[0].hour[6].condition
                            .text === "Sunny"
                        ? sunny
                        : data?.forecast.forecastday[0].hour[6].condition
                            .text === "Clear"
                        ? clear
                        : cloudy
                    }
                    alt="rainy"
                    className="w-12 my-2"
                  />
                  <p className="text-gray-800/50 text-center font-semibold">
                    {data?.forecast.forecastday[0].hour[6].temp_c}&#176;
                  </p>
                </div>
                <div className="flex mx-3 flex-col">
                  <h1 className="text-gray-800/50  font-semibold">09:00AM</h1>
                  <Image
                    src={
                      data?.forecast.forecastday[0].hour[9].condition.text ===
                      "Rain"
                        ? rainy
                        : data?.forecast.forecastday[0].hour[9].condition
                            .text === "Sunny"
                        ? sunny
                        : data?.forecast.forecastday[0].hour[9].condition
                            .text === "Clear"
                        ? clear
                        : cloudy
                    }
                    alt="rainy"
                    className="w-12 my-2"
                  />
                  <p className="text-gray-800/50 text-center font-semibold">
                    {data?.forecast.forecastday[0].hour[9].temp_c}&#176;
                  </p>
                </div>
                <div className="flex mx-3 flex-col">
                  <h1 className="text-gray-800/50 font-semibold">12:00PM</h1>
                  <Image
                    src={
                      data?.forecast.forecastday[0].hour[12].condition.text ===
                      "Rain"
                        ? rainy
                        : data?.forecast.forecastday[0].hour[12].condition
                            .text === "Sunny"
                        ? sunny
                        : data?.forecast.forecastday[0].hour[12].condition
                            .text === "Clear"
                        ? clear
                        : cloudy
                    }
                    alt="rainy"
                    className="w-12 my-2"
                  />
                  <p className="text-gray-800/50 text-center font-semibold">
                    {data?.forecast.forecastday[0].hour[12].temp_c}&#176;
                  </p>
                </div>
                <div className="flex mx-3 flex-col">
                  <h1 className="text-gray-800/50 font-semibold">03:00PM</h1>
                  <Image
                    src={
                      data?.forecast.forecastday[0].hour[15].condition.text ===
                      "Rain"
                        ? rainy
                        : data?.forecast.forecastday[0].hour[15].condition
                            .text === "Sunny"
                        ? sunny
                        : data?.forecast.forecastday[0].hour[15].condition
                            .text === "Clear"
                        ? clear
                        : cloudy
                    }
                    alt="rainy"
                    className="w-12 my-2"
                  />
                  <p className="text-gray-800/50 text-center  font-semibold">
                    {data?.forecast.forecastday[0].hour[15].temp_c}&#176;
                  </p>
                </div>
                <div className="flex mx-3 flex-col">
                  <h1 className="text-gray-800/50 font-semibold">06:00PM</h1>
                  <Image
                    src={
                      data?.forecast.forecastday[0].hour[18].condition.text ===
                      "Rain"
                        ? rainy
                        : data?.forecast.forecastday[0].hour[18].condition
                            .text === "Sunny"
                        ? sunny
                        : data?.forecast.forecastday[0].hour[18].condition
                            .text === "Clear"
                        ? clear
                        : cloudy
                    }
                    alt="rainy"
                    className="w-12 my-2"
                  />
                  <p className="text-gray-800/50 text-center font-semibold">
                    {data?.forecast.forecastday[0].hour[18].temp_c}&#176;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="thirdBox mt-6 md:mt-3 bg-gray-300/50 md:w-full  rounded-3xl ">
            <div className="flex justify-around">
              {" "}
              <div>
                <div className="flex pl-5 pt-5">
                  {" "}
                  <CiTempHigh className="text-3xl text-gray-800/50" />
                  <h1 className="text-gray-800/50   font-semibold">
                    Real Feel
                  </h1>
                </div>
                <h1 className="text-gray-800/50 text-3xl ml-4 font-semibold text-center">
                  {data?.current.feelslike_c} &#176;
                </h1>
              </div>
              <div>
                <div className="flex pl-5 pt-5">
                  {" "}
                  <FaWind className="text-3xl text-gray-800/50" />
                  <h1 className="text-gray-800/50   font-semibold">Wind</h1>
                </div>
                <h1 className="text-gray-800/50 text-3xl ml-4 font-semibold text-center">
                  {data?.current.wind_kph}{" "}
                  <span className="text-[10px]"> Km/h</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-around mb-7">
              {" "}
              <div>
                <div className="flex pl-5 pt-5">
                  {" "}
                  <WiHumidity className="text-3xl text-gray-800/50" />
                  <h1 className="text-gray-800/50   font-semibold">Humidty</h1>
                </div>
                <h1 className="text-gray-800/50 text-3xl ml-4 font-semibold text-center">
                  {data?.current.humidity}%{" "}
                </h1>
              </div>
              <div>
                <div className="flex pl-5 pt-5">
                  {" "}
                  <FaSun className="text-3xl text-gray-800/50" />
                  <h1 className="text-gray-800/50   font-semibold">UV</h1>
                </div>
                <h1 className="text-gray-800/50 text-3xl ml-4 font-semibold text-center">
                  {data?.current.uv}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:h-screen md:w-[30rem]">
          {" "}
          <div className="bg-gray-300/50  h-[45rem] md:w-[25rem] md:ml-10 rounded-3xl md:mt-20 ">
            {" "}
            <h1 className="text-gray-800/50 p-5 font-semibold">
              7-DAY FORECAST
            </h1>
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">SAT</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[1].hour[0].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[1].hour[0].condition.text ===
                        "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[1].hour[0].condition.text ===
                        "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[1].hour[0].condition.text}
                </h1>
              </div>

              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[1].hour[0].temp_c}
              </h1>
            </div>
            <hr className="w-[30vh] mx-auto bg-black md:h-1 md:bg-slate-400" />{" "}
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">SUN</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[1].hour[1].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[1].hour[1].condition.text ===
                        "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[1].hour[1].condition.text ===
                        "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[1].hour[1].condition.text}
                </h1>
              </div>

              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[1].hour[1].temp_c}
              </h1>
            </div>
            <hr className="w-[30vh] mx-auto bg-black md:h-1 md:bg-slate-400" />{" "}
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">MON</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[2].hour[3].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[2].hour[3].condition.text ===
                        "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[2].hour[3].condition.text ===
                        "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[2].hour[3].condition.text}
                </h1>
              </div>

              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[2].hour[3].temp_c}
              </h1>
            </div>
            <hr className="w-[30vh] mx-auto bg-black md:h-1 md:bg-slate-400" />{" "}
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">TUE</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[1].hour[10].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[1].hour[10].condition
                          .text === "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[1].hour[10].condition
                          .text === "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[1].hour[10].condition.text}
                </h1>
              </div>

              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[1].hour[10].temp_c}
              </h1>
            </div>
            <hr className="w-[30vh] mx-auto bg-black md:h-1 md:bg-slate-400" />{" "}
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">WED</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[1].hour[18].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[1].hour[18].condition
                          .text === "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[1].hour[18].condition
                          .text === "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[1].hour[18].condition.text}
                </h1>
              </div>

              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[1].hour[18].temp_c}
              </h1>
            </div>
            <hr className="w-[30vh] mx-auto bg-black md:h-1 md:bg-slate-400" />{" "}
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">THU</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[2].hour[10].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[2].hour[10].condition
                          .text === "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[2].hour[10].condition
                          .text === "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[2].hour[10].condition.text}
                </h1>
              </div>

              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[2].hour[10].temp_c}
              </h1>
            </div>
            <hr className="w-[30vh] mx-auto bg-black md:h-1 md:bg-slate-400" />{" "}
            <div className="px-5 py-4  w-full flex justify-evenly">
              <h1 className="text-gray-800/50 text-2xl font-semibold">FRI</h1>
              <div className="flex ">
                <Image
                  src={
                    data?.forecast.forecastday[2].hour[18].condition.text ===
                    "Rain"
                      ? rainy
                      : data?.forecast.forecastday[2].hour[18].condition
                          .text === "Sunny"
                      ? sunny
                      : data?.forecast.forecastday[2].hour[18].condition
                          .text === "Clear"
                      ? clear
                      : cloudy
                  }
                  alt="rainy"
                  className="w-10 mx-2 my-2"
                />
                <h1 className=" text-2xl font-semibold">
                  {data?.forecast.forecastday[2].hour[18].condition.text}
                </h1>
              </div>
              <h1 className=" text-2xl font-semibold">
                {data?.forecast.forecastday[2].hour[18].temp_c}
              </h1>
            </div>
            <hr className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
