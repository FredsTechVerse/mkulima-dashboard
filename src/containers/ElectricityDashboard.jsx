import React from "react";
import { Readings } from "../components";
const ElectricityDashboard = () => {
  return (
    <>
      <div className="w-full flex-row-centered gap-5">
        <div className="flex-row-centered gap-2">
          <span className="text-lg ">Rainfall</span>
          <span className="bg-green-500 text-white px-2 rounded-full text-md">
            Yes
          </span>
        </div>
        <div className="flex-row-centered gap-2">
          <span className="text-lg">Pump</span>
          <span className="text-md bg-red-500 text-white px-2 rounded-full">
            Off
          </span>
        </div>
      </div>
      <div className=" w-full flex bg-secondary p-7 rounded-lg text-white ">
        <Readings value="voltage" reading="10" unit="V" />
        <Readings value="current" reading="30" unit="mA" />
      </div>
    </>
  );
};

export default ElectricityDashboard;
