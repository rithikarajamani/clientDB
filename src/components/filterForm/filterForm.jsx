import React from "react";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import "./filterForm.css";
import { useFont } from "../fonts/fontContext";
function FilterForm({ filterVisibleRight, setFilterVisibleRight }) {
  const fontStyles = useFont();
  const [value, setValue] = useState("");
  const [filterFormData, setFilterFormData] = useState({
    client_company_name: "",
  });
  const handleChange = async (e) => {
    e.preventDefault();
    return await axios
      .get("http://localhost:8090/login/viewClients?q=${value}")
      .then((response) => setData(response.data));
  };
  const handleCancel = () => {
    setFilterVisibleRight(false); // Hide the sidebar when cancel button is clicked
  };
  return (
    <Sidebar
      visible={filterVisibleRight}
      position="right"
      onHide={() => setFilterVisibleRight(false)}
      style={fontStyles}
    >
      <h2 className="filter-content">Filter</h2>
      <div className="filter-formContainer">
        <form className="form-inline">
          <div className="form-group">
            <div className="label-input">
              <label>Company Name</label>
              <input
                type="text"
                id="client_company_name"
                // value={filterFormData.client_company_name}
                value={value}
                // onChange={(e)=>handleChange(e)}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-button">
            <button type="submit" className="apply_button">
              Apply
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

export default FilterForm;
