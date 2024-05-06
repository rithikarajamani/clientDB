import React, { useState, useEffect } from "react";
import "./dashboardCard.css";
import Axios from "axios";
import { useFont } from "../fonts/fontContext";
function DashboardCard() {
  const fontStyles = useFont();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:8090/login/dashboard/counts"
        );

        setData(response.data);
        console.log("response", response.data);

        const totalCount = response.data[0].totalCount;
        console.log("totalcount", totalCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("totalCount", data?.[0]?.totalCount);
    console.log("enquiryCount", data?.[0]?.enquiryCount);
    console.log("proposalCount", data?.[0]?.proposalCount);
    console.log("weeklyCount", data?.[0]?.weeklyCount);
  }, [data]);
  return (
    <div className="dashboard-container" style={fontStyles}>
      <div className="dashboard-heading">
        <h4>Dashboard</h4>
      </div>
      <div className="dashboard-card">
        <div className="card-body">
          <span className="card-count">{data?.[0]?.totalCount}</span>
        </div>
        <div className="card-header">
          <div className="card-icon">
            {" "}
            <img src="./assets/clientsicon1.jpg" alt="Clients Icon" />
          </div>
          <span className="card-title">Total No. Of Clients</span>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-body">
          <span className="card-count">{data?.[0]?.enquiryCount}</span>
        </div>

        <div className="card-header">
          <div className="card-icon">
            {" "}
            <img src="./assets/enquiryicon.jpg" alt="Enquiries Icon" />
          </div>
          <span className="card-title">Total No. Of Enquiries</span>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-body">
          <span className="card-count">{data?.[0]?.proposalCount}</span>
        </div>

        <div className="card-header">
          <div className="card-icon">
            {" "}
            <img src="./assets/proposalsicon.jpg" alt="Proposals Icon" />
          </div>
          <span className="card-title">Total No. Of Proposals</span>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-body">
          <span className="card-count">{data?.[0]?.weeklyCount}</span>
        </div>

        <div className="card-header">
          <div className="card-icon">
            {" "}
            <img src="./assets/contactsicon.jpg" alt="Contacts Icon" />
          </div>
          <span className="card-title">Weekly New Contacts</span>
        </div>
      </div>
      <div className="charts"></div>
    </div>
  );
}

export default DashboardCard;
