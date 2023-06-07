import { SteppedGauge, ComparisonChart, PageTitle } from "./components";
import { ElectricityDashboard, TankStatus, Gauges } from "./containers";
const App = () => {
  return (
    <div className="flex flex-col gap-2 bg-white p-5">
      <PageTitle text="Weather App Dashboard" />
      <Gauges />
      <div className="flex flex-col tablet:flex-row w-full items-center gap-2 ">
        <div className="phone:w-full tablet:w-2/3 h-auto border-2 rounded-lg">
          <ComparisonChart />
        </div>
        <div className="phone:w-full tablet:w-1/3 flex gap-2 py-4  flex-col-centered">
          <ElectricityDashboard />
          <TankStatus />
        </div>
      </div>
    </div>
  );
};

export default App;
