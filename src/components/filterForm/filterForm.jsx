import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import axios from "axios";
import "./filterForm.css";
import { useFont } from "../fonts/fontContext";

function FilterForm({
  filterVisibleRight,
  setFilterVisibleRight,
  handleFilter,
  handleResetFilter,
}) {
  const fontStyles = useFont();
  const [companyNames, setCompanyNames] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchCompanyNames();
  }, []);

  const fetchCompanyNames = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/login/viewClients",
        {
          params: {
            limit: 5,
            status: "active",
            offset: 1,
          },
        }
      );
      const names = response.data.map((client) => client.client_company_name);
      const uniqueNames = [...new Set(names)];
      setCompanyNames(uniqueNames);
    } catch (error) {
      console.error("Error fetching company names:", error);
    }
  };

  const handleChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleApplyFilter = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8090/login/viewClients?limit=5&status=active&offset=1&companyName=${selectedCompany}`
      );
      const filteredData = response.data.filter(
        (row) => row.client_company_name === selectedCompany
      );

      console.table(filteredData);
      //setFilteredData(filteredData)
      handleFilter(filteredData);
    } catch (error) {
      console.error("Error applying filter:", error);
    }
    setFilterVisibleRight(false);
  };

  const handleCancel = () => {
    setSelectedCompany("");
    setFilterVisibleRight(false);
    handleFilter([]);
    handleResetFilter();
  };

  return (
    <div>
      <Sidebar
        visible={filterVisibleRight}
        position="right"
        onHide={() => setFilterVisibleRight(false)}
        style={fontStyles}
      >
        <h2 className="filter-content">Filter</h2>
        <div className="filter-formContainer">
          <form className="form-inline" onSubmit={handleApplyFilter}>
            <div className="form-group">
              <div className="label-input">
                <label>Company Name</label>
                <select
                  id="client_company_name"
                  value={selectedCompany}
                  onChange={handleChange}
                >
                  <option value="">Select Company</option>
                  {companyNames.map((company, index) => (
                    <option key={index} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
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
                Reset
              </button>
            </div>
          </form>
        </div>
      </Sidebar>
    </div>
  );
}

export default FilterForm;
