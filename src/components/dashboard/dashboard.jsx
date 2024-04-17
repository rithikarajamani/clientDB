import React from "react";
import Sidebar from "../navbar/sideBar";
import NavBar from "../navbar/navbar";
import { useFont } from "../fonts/fontContext";
function Dashboard() {
  const fontStyles = useFont();
  return (
    <div style={fontStyles}>
      <Sidebar />
      <NavBar />
    </div>
  );
}

export default Dashboard;
