import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./clientsBarchart.css";
const NoOfClientsBarchart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Check if chart instance exists and destroy it before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    if (chartRef && chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "clients",
              data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
              backgroundColor: "rgba(117, 90, 255, 1)",
              // borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const dateOptions = [
    { value: "1", label: "Jan" },
    { value: "2", label: "Feb" },
    { value: "3", label: "Mar" },
    // {value:"4",label:"Apr"},
    // {value:"5",label:"May"},
    // {value:"6",label:"Jun"},
    // {value:"7",label:"July"},
    // {value:"8",label:"Aug"},
    // {value:"9",label:"Sept"},
    // {value:"10",label:"Oct"},
    // {value:"11",label:"Nov"},
    // {value:"12",label:"Dec"},
  ];

  const yearOption = [
    // {value:"2024",label:"2024"},
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
  ];

  return (
    <div className="chart-container">
      <div className="heading">
        <h4>Total No.of Clients</h4>
      </div>
      <div className="filters-container">
        <select className="filter-select">
          <option value="">Select Date</option>
          {dateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select className="filter-select">
          <option value="2024">2024</option>
          {yearOption.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default NoOfClientsBarchart;
