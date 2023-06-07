import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Data } from "../../utils/data";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const time = [
  "8:00",
  "8:15",
  "8:20",
  "8:30",
  "8:40",
  "8:50",
  "9:00",
  "9:10",
  "9:20",
  "9:30",
  "9:40",
];

const data = {
  labels: time,
  datasets: [
    {
      label: "Air temperature",
      data: Data.map((data) => data.userGain),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Soil temperature",
      data: Data.map((data) => data.userLost),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const ComparisonChart = () => {
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Temperature Chart",
          },
        },
      }}
      data={data}
    />
  );
};

export default ComparisonChart;
