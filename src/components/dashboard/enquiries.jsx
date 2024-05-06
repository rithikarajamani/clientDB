
// import React, { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
// import Axios from "axios";
// import "./enquiries.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
// import { useFont } from "../fonts/fontContext";
// function Enquiries() {
//   const fontStyles = useFont();
//   const [doughData, setdoughData] = useState({
//     labels: ["Yes", "No"],
//     datasets: [
//       {
//         data: [0, 0],
//         backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//       },
//     ],
//   });
//   const [selectedDate, setSelectedDate] = useState("2020-02-02");

//   useEffect(() => {
//     fetchData();
//   }, [selectedDate]);
//   const fetchData = async () => {
//     try {
//       const response = await Axios.post(
//         "http://localhost:8090/login/dashboard/enquiryGraph",
//         {
//           start_date: selectedDate,
//         }
//       );

//       console.log("response", response.data);
//       const data = response?.data?.datasets[0]?.data;
//       console.log("data", data);

//       // const yesCount = data[0];
//       // const noCount = data[1];
//       console.log("enquiry yes", data[0].enqYesCount);
//       console.log("enquiry no", data[0].enqNoCount);
//       const yesCount = data[0].enqYesCount;
//       const noCount = data[0].enqNoCount;
//       setdoughData({
//         labels: ["Yes", "No"],
//         datasets: [
//           {
//             data: [yesCount, noCount],
//             backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//           },
//         ],
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleDateChange = (date) => {
//     const formattedDate = moment(date).format("YYYY-MM-DD");
//     console.log("formatdate", formattedDate);
//     setSelectedDate(formattedDate);
//     console.log("selecteddate", selectedDate);
//     console.log("typeof", typeof selectedDate, selectedDate);
//   };

//   useEffect(() => {
//     console.log("Updated selectedDate:", selectedDate);
//   }, [selectedDate]);

//   const options = {};

//   return (
//     <div className="doughnut-content" style={fontStyles}>
//       <div className="content">
//         <p className="enquiry-heading">Enquiries</p>

//         <div className="filters-container">
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             dateFormat="YYYY-MM-DD"
//             className="filter-select"
//             wrapperClassName="date-picker-wrapper"
//           />
//         </div>
//       </div>
//       <Doughnut data={doughData} options={options}></Doughnut>
      
//     </div>
//   );
// }

// export default Enquiries;
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import Axios from "axios";
import "./enquiries.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useFont } from "../fonts/fontContext";

function Enquiries() {
  const fontStyles = useFont();
  const [doughData, setdoughData] = useState({
    labels: ["Yes", "No"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      },
    ],
  });
  const [startDate, setStartDate] = useState("2020-02-02");
  const [endDate, setEndDate] = useState("2020-02-04");

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  const fetchData = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8090/login/dashboard/enquiryGraph",
        {
          start_date: startDate,
          end_date: endDate,
        }
      );

      const data = response?.data?.datasets[0]?.data;

      const yesCount = data[0].enqYesCount;
      const noCount = data[0].enqNoCount;
      console.log("enquiry yes",yesCount);
      console.log("enquiry no",noCount);
      setdoughData({
        labels: ["Yes", "No"],
        datasets: [
          {
            data: [yesCount, noCount],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleStartDateChange = (date) => {
  //   // setStartDate(date);
  //   const formattedDate = moment(date).format("YYYY-MM-DD");
  //   console.log("formatdate", formattedDate);
  //   setStartDate(formattedDate);
  //   console.log("selecteddate", startDate);
  // };

  // const handleEndDateChange = (date) => {
  //   //setEndDate(date);
  //   const formattedDate = moment(date).format("YYYY-MM-DD");
  //   console.log("formatdate", formattedDate);
  //   setEndDate(formattedDate);
  //   console.log("selecteddate", endDate);
  // };
  const handleStartDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    console.log("selected start date:", formattedDate);
    setStartDate(formattedDate);
  };
  
  const handleEndDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    console.log("selected end date:", formattedDate);
    setEndDate(formattedDate);
  };
  useEffect(() => {
    console.log("Updated selectedDate:", startDate,endDate);
  }, [startDate,endDate]);
  const options = {};
  return (
    <div className="doughnut-content" style={fontStyles}>
      <div className="enquiry-content">
        <p className="enquiry-heading">Enquiries</p>
  
        <div className="enquiry-filters-container">
          <div className="enquiry-date-picker-wrapper">
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy-MM-dd"
              className="enquiry-filter-select"
            />
          </div>
          <div className="enquiry-date-picker-wrapper">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="yyyy-MM-dd"
              className="enquiry-filter-select"
            />
          </div>
        </div>
      </div>
      <Doughnut data={doughData} options={options}></Doughnut>
    </div>
  );
  
  
}

export default Enquiries;
