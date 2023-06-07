import React from "react";
import { TankWaterGauge } from "../components";
const TanksStatus = () => {
  return (
    <div className="flex-col-centered gap-2 p-2 ">
      <h1 className="font-bold text-3xl">WATER TANKS</h1>
      <div className="flex flex-row-centered gap-3 ">
        <TankWaterGauge level={100} />
        <TankWaterGauge level={60} />
      </div>
    </div>
  );
};

export default TanksStatus;
