import GaugeChart from "react-gauge-chart";
import "../../App.css";
const SteppedGauge = ({ title, phValue }) => {
  return (
    <div className="bg-primary phone:w-full tablet:w-48 laptop:w-96 laptop:h-56 rounded-lg p-2  ">
      <h1 className="uppercase text-white text-xl font-bold">{title}</h1>
      <div className="w-full ">
        <GaugeChart
          nrOfLevels={3}
          arcPadding={0.05}
          cornerRadius={9}
          colors={["#FF5F6D", "#FFC371"]}
          arcWidth={0.15}
          percent={phValue}
        />
      </div>
    </div>
  );
};

export default SteppedGauge;
