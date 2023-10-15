import Image from "next/image";
import rainy from "../public/img/rainy.png";
export default function Home() {
  return (
    <div className="bg-red-800/50 mt-10 h-[90vh] md:mt-10 md:min-w-[100rem] overflow-y-auto md:overflow-hidden">
      <div className="flex flex-col flex-wrap  h-screen">
        <div className="searchBTN">
          <div className="">
            <input
              type="text"
              placeholder="Search for cities"
              className="w-[18rem] md:w-[65%]  rounded-lg p-2 placeholder:text-gray-950/20  bg-gray-300/50 
           outline-none"
            />
          </div>
        </div>
        <div className="firstBox bg-purple-500/20">
          <div className="flex justify-between my-4">
            {" "}
            <div className="p-5 ">
              <h1 className="text-3xl font-bold ">Madrid</h1>
              <p>Chance of rain 0%</p>
            </div>
            <div>
              <Image src={rainy} alt="rainy" className="w-20 mt-1" />
            </div>
          </div>
          <div>
            <h1 className="px-5  text-5xl font-bold">
              31<span>&#176;</span>
            </h1>
          </div>
        </div>
        <div className="secondBox bg-red-600/50">
          <div className="w-full h-[30vh] ">
            <h1 className="text-gray-800/50 p-5">TODAYS FORECAST</h1>

            <div className="flex justify-evenly">
              <div className="flex justify-between p-5">
                <div className="flex flex-col">
                  <h1 className="text-gray-800/50">06:00AM</h1>
                  <p className="text-gray-800/50">31&#176;</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-800/50">09:00AM</h1>
                  <p className="text-gray-800/50">31&#176;</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-800/50">12:00PM</h1>
                  <p className="text-gray-800/50">31&#176;</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-800/50">03:00PM</h1>
                  <p className="text-gray-800/50">31&#176;</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-800/50">06:00PM</h1>
                  <p className="text-gray-800/50">31&#176;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
