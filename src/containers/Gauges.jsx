import React from "react";
import { SteppedGauge, PhGauge } from "../components";
const Gauges = () => {
  return (
    <div className="flex phone:flex-col tablet:flex-row gap-2 laptop:gap-10 w-full">
      <SteppedGauge title="humidity" phValue={0.4} />
      <SteppedGauge title="moisture" phValue={0.7} />
      <PhGauge title="ph level" phValue={0.5} />
    </div>
  );
};

export default Gauges;
