import React from "react";
import { Line } from "react-chartjs-2";
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
import MiddlePage1 from "./MiddlePage1";
import Diagnosis from "./Diagnosis";
import LabReport from "./LabReport";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Graph = ({ data,index }) => {
  
  const months = data[index].diagnosis_history.map(
    (entry) => `${entry.month} ${entry.year}`
  );
  const systolicValues = data[index].diagnosis_history.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicValues = data[index].diagnosis_history.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicValues,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Blood Pressure Over the Last 6 Months",
      },
    },
  };

  return (
    <div className="w-[600px] bg-white shadow-md mt-[20px] ml-3 rounded-[16px] p-2">
      <h2 className="font-bold px-3 py-2">Diagnosis History</h2>
      <div className="bg-[#F4F0FE] w-[550px] h-[250px] rounded-xl">
        <Line data={chartData} options={options} />
      </div>
      <MiddlePage1/>
      <Diagnosis data={data} idx={index}/>
    </div>
  );
};

export default Graph;
