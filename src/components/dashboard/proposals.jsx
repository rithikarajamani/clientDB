import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";
import "./proposals.css";
function Proposals() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        data: [3, 6],
        backgroundColor: ["rgba(98, 110, 250, 1)", "rgba(25, 211, 243, 1)"],
      },
    ],
  };
  const options = {};
  return (
    <div className="pie-content">
      <p className="proposal-heading">Proposals</p>
      <Pie data={data} options={options}></Pie>
    </div>
  );
}

export default Proposals;
