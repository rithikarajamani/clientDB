import React, { useState } from "react";
import "./sideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useFont } from "../fonts/fontContext";
const Sidebar = () => {
  const fontStyles = useFont();
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);
  const [isClientsClicked, setIsClientsClicked] = useState(false);
  const navigate = useNavigate();
  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    setIsClientsClicked(false);
    navigate("/dashboard");
  };

  const handleClientsClick = () => {
    setIsClientsClicked(true);
    setIsDashboardClicked(false);
    navigate("/table");
  };

  return (
    <div className="sidebar" style={fontStyles}>
      <h1 className="title">Client DB</h1>
      <div className="menu-container">
        <p className="mainmenu-content">Main Menu</p>
        <div className="menu-buttons">
          <button
            className={`menu-item ${isDashboardClicked ? "active" : ""}`}
            onClick={handleDashboardClick}
          >
            <img
              src="./assets/DashboardLight.png"
              alt="Dashboard icon"
              className="Dashboard-icon"
            />
            <Link path="/dashboard"></Link>
            Dashboard
          </button>
          <button
            className={`menu-item ${isClientsClicked ? "active" : ""}`}
            onClick={handleClientsClick}
          >
            <img
              src="./assets/ClientLight.jpg"
              alt="Clients icon"
              className="Clients-icon"
            />
            Clients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
