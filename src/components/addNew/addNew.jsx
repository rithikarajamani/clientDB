import React from "react";
import "./addNew.css";
import { useState } from "react";
import { useFont } from "../fonts/fontContext";
import AddNewForm from "../addNewForm/addNewForm";
function AddNew() {
  const fontStyles = useFont();
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div>
      <button
        style={fontStyles}
        className="addNew"
        onClick={() => setVisibleRight(true)}
      >
        <img className="addNew-img" src="/assets/addNew.png"></img>AddNew
      </button>

      <AddNewForm
        visibleRight={visibleRight}
        setVisibleRight={setVisibleRight}
      />
      {/* Render the AddNewForm component passing visibleRight state and setVisibleRight function  */}
    </div>
  );
}

export default AddNew;
