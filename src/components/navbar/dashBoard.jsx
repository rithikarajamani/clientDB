import React from "react";
import { useFont } from "../fonts/fontContext";
const Dashboard = () => {
  const fontStyles = useFont();
  return <div style={fontStyles}>Dashboard</div>;
};

export default Dashboard;
