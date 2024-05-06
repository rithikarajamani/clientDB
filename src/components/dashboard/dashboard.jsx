import React from "react";
import Sidebar from "../navbar/sideBar";
import NavBar from "../navbar/navbar";
import { useFont } from "../fonts/fontContext";
import DashboardCard from "./dashboardCard";
import NoOfClientsBarchart from "./clientsBarchart";
import Proposals from "./proposals";
import Enquiries from "./enquiries";
import { useEffect } from "react";

function Dashboard() {
  const fontStyles = useFont();
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <div style={fontStyles}>
      <Sidebar />
      <NavBar />
      <DashboardCard></DashboardCard>
      <NoOfClientsBarchart></NoOfClientsBarchart>
      <Enquiries></Enquiries>
      <Proposals></Proposals>
    </div>
  );
}

export default Dashboard;
