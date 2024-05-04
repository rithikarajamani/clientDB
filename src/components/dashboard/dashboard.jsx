import React from "react";
import Sidebar from "../navbar/sideBar";
import NavBar from "../navbar/navbar";
import { useFont } from "../fonts/fontContext";
import DashboardCard from "./dashboardCard";
import NoOfClientsBarchart from "./clientsBarchart";
import Proposals from "./proposals";
function Dashboard() {
  const fontStyles = useFont();
  return (
    <div style={fontStyles}>
      <Sidebar />
      <NavBar />
      <DashboardCard></DashboardCard>
      <NoOfClientsBarchart></NoOfClientsBarchart>
      <Proposals></Proposals>
    </div>
  );
}

export default Dashboard;
