import React from "react";
import { Sidebar } from "primereact/sidebar";
import "./remarksForm.css";
import { useFont } from "../fonts/fontContext";
import { useState } from "react";
import axios from "axios";
function RemarksForm({
  remarksVisibleRight,
  setRemarksVisibleRight,
  remarkID,
}) {
  const fontStyles = useFont();
  const url = `http://localhost:8090/login/viewClients/addRemark?_id=${remarkID}`;
  const [remarksData, setRemarksData] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setRemarksData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data to be sent:", remarksData); // Log the data being sent
    axios
      .post(url, {
        remarks: remarksData,
        "client_id":remarkID
      })
      .then(() => {
        console.log(
          "Client  remarks created successfully:",
          remarksData,
          remarkID
        );
        // Optionally, perform any actions after successful creation
      })
      .catch((error) => {
        console.error("Error creating client:", error);
        // Show error message to the user
        // For example, you can use state to store the error message and display it in your UI
      });
  };

  const handleCancel = () => {
    setRemarksData(" ");
    setRemarksVisibleRight(false); // Hide the sidebar when cancel button is clicked
  };

  return (
    <Sidebar
      visible={remarksVisibleRight}
      position="right"
      onHide={() => setRemarksVisibleRight(false)}
      style={fontStyles}
    >
      <h2 className="remark-content">Remarks</h2>
      <div className="remark-formContainer">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="label-input">
              <textarea
                id="message"
                rows="4"
                cols="50"
                className="remark-textArea"
                placeholder="Add New Remark"
                value={remarksData.remarks}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="remark-button">
            <button type="submit" className="add_button">
              Add
            </button>
            <button
              type="button"
              className="cancel_button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <h3 className="recent-content">Recent Remarks</h3>
    </Sidebar>
  );
}

export default RemarksForm;
