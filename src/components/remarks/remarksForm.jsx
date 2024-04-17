import React from "react";
import { Sidebar } from "primereact/sidebar";
import "./remarksForm.css";
import { useFont } from "../fonts/fontContext";
function RemarksForm({ remarksVisibleRight, setRemarksVisibleRight }) {
  const fontStyles = useFont();
  const handleCancel = () => {
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
        <form className="form-inline">
          <div className="form-group">
            <div className="label-input">
              <textarea
                id="message"
                rows="4"
                cols="50"
                className="remark-textArea"
                placeholder="Add New Remark"
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
    </Sidebar>
  );
}

export default RemarksForm;
