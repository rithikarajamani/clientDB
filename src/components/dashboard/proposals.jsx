import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Axios from "axios";
import "./proposals.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useFont } from "../fonts/fontContext";
function Proposals() {
  const fontStyles = useFont();
  const [pieData, setPieData] = useState({
    labels: ["Yes", "No"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["rgba(98, 110, 250, 1)", "rgba(25, 211, 243, 1)"],
      },
    ],
  });
  //const [selectedDate, setSelectedDate] = useState("2020-02-02"); // Initial date
  const [startDate, setStartDate] = useState("2020-02-02");
  const [endDate, setEndDate] = useState("2020-04-02");

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]); // Fetch data whenever selectedDate changes

  const fetchData = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8090/login/dashboard/proposalGraph",
        {
          start_date: startDate,
          end_date: endDate,
        }
      );

     // console.log("response", response.data);
      const data = response?.data?.datasets[0]?.data;
    //  console.log("data", data);
     
      const yesCount = data[0].propYesCount;
      const noCount = data[0].propNoCount;
      console.log("proposal yes", data[0].propYesCount);
      console.log("proposal no", data[0].propNoCount);

      setPieData({
        labels: ["Yes", "No"],
        datasets: [
          {
            data: [yesCount, noCount],
            backgroundColor: ["rgba(98, 110, 250, 1)", "rgba(25, 211, 243, 1)"],
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleDateChange = (date) => {
  //   const formattedDate = moment(date).format("YYYY-MM-DD");
  //   console.log("formatdate", formattedDate);
  //   setSelectedDate(formattedDate);
  //   console.log("selecteddate", selectedDate);
  //   console.log("typeof", typeof selectedDate, selectedDate);
  // };

  // useEffect(() => {
  //   console.log("Updated selectedDate:", selectedDate);
  // }, [selectedDate]);

 const handleStartDateChange = (date) => {
     const formattedDate = moment(date).format("YYYY-MM-DD");
    console.log("formatdate", formattedDate);
    setStartDate(formattedDate);
    console.log("selecteddate", startDate);
    // setStartDate(date);
  };
 
  const handleEndDateChange = (date) => {
    // setEndDate(date);
    const formattedDate = moment(date).format("YYYY-MM-DD");
    console.log("formatdate", formattedDate);
    setEndDate(formattedDate);
    console.log("selecteddate", endDate);
  };
  useEffect(() => {
    console.log("Updated selectedDate:", startDate,endDate);
  }, [startDate,endDate]);
  const options = {}; // Customize options as needed

  return (
    <div className="pie-content" style={fontStyles}>
      <div className="proposal-content">
        <p className="proposal-heading">Proposals</p>

        {/* <div className="filters-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            className="filter-select"
            wrapperClassName="date-picker-wrapper"
          />
        </div>
      </div> */}
      <div className="proposal-filters-container">
          <div className="proposal-date-picker-wrapper" >
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy-MM-dd"
              className="proposal-filter-select"
            />
          </div>
          <div className="proposal-date-picker-wrapper">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="yyyy-MM-dd"
              className="proposal-filter-select"
            />
          </div>
        </div>
      </div>
      <Pie data={pieData} options={options}></Pie>
    </div>
  );
}

export default Proposals;
