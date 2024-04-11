import React from "react";
import { useFont } from "../fonts/fontContext";
function Clients() {
  const fontStyles = useFont();
  return (
    <div style={fontStyles} className="client">
      <h1>Clients vfdbgu</h1>
    </div>
  );
}

export default Clients;
