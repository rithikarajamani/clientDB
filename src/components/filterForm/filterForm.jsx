// import React from "react";
// import { Sidebar } from "primereact/sidebar";
// import { useState } from "react";
// import "./filterForm.css";
// import { useFont } from "../fonts/fontContext";
// function FilterForm({ filterVisibleRight, setFilterVisibleRight }) {
//   const fontStyles = useFont();
//   const [value, setValue] = useState("");
//   const [filterFormData, setFilterFormData] = useState({
//     client_company_name: "",
//   });
//   const handleChange = async (e) => {
//     e.preventDefault();
//     return await axios
//       .get("http://localhost:8090/login/viewClients?q=${value}")
//       .then((response) => setData(response.data));
//   };
//   const handleCancel = () => {
//     setFilterVisibleRight(false); // Hide the sidebar when cancel button is clicked
//   };
//   return (
//     <Sidebar
//       visible={filterVisibleRight}
//       position="right"
//       onHide={() => setFilterVisibleRight(false)}
//       style={fontStyles}
//     >
//       <h2 className="filter-content">Filter</h2>
//       <div className="filter-formContainer">
//         <form className="form-inline">
//           <div className="form-group">
//             <div className="label-input">
//               <label>Company Name</label>
//               <input
//                 type="text"
//                 id="client_company_name"
//                 // value={filterFormData.client_company_name}
//                 value={value}
//                 // onChange={(e)=>handleChange(e)}
//                 onChange={(e) => setValue(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="filter-button">
//             <button type="submit" className="apply_button">
//               Apply
//             </button>
//             <button
//               type="button"
//               className="cancel_button"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </Sidebar>
//   );
// }

// export default FilterForm;
// import React, { useState, useEffect } from "react";
// import { Sidebar } from "primereact/sidebar";
// import axios from "axios";
// import "./filterForm.css";
// import { useFont } from "../fonts/fontContext";

// function FilterForm({ filterVisibleRight, setFilterVisibleRight }) {
//   const fontStyles = useFont();
//   const [companyNames, setCompanyNames] = useState([]); // State to store company names
//   const [selectedCompany, setSelectedCompany] = useState(""); // State to store selected company name

//   useEffect(() => {
//     const fetchCompanyNames = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8090/login/viewClients?limit=5&status=active&offset=0"
//         );

//         const clients = response.data;
//         // console.log("Response:", response.data); // Log response data
//         const companyNames = clients.map(
//           (clients) => clients.client_company_name
//         );

//         // Log company names to the console
//         console.log(clients);
//         setCompanyNames(clients);
//       } catch (error) {
//         console.error("Error fetching company names:", error);
//       }
//     };

//     fetchCompanyNames();
//   }, []);

//   const handleChange = (e) => {
//     const selectedCompanyObject = e.target.value;
//     setSelectedCompany(selectedCompanyObject); // Update selected company

//     console.log("selectedcompany", selectedCompany);
//   };

//   const handleApplyFilter = (e) => {
//     e.preventDefault();
//     applyFilter(); // Pass selected company name to parent component
//     setFilterVisibleRight(false); // Hide the sidebar
//   };

//   const handleCancel = () => {
//     setSelectedCompany(""); // Clear selected company on cancel
//     setFilterVisibleRight(false); // Hide the sidebar
//   };

//   const applyFilter = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8090/login/getSpecificClients?client_id=${selectedCompany._id}`,
//         {
//           params: {
//             client_id: selectedCompany._id,
//           },
//         }
//       );

//       console.log("response", response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Sidebar
//       visible={filterVisibleRight}
//       position="right"
//       onHide={() => setFilterVisibleRight(false)}
//       style={fontStyles}
//     >
//       <h2 className="filter-content">Filter</h2>
//       <div className="filter-formContainer">
//         <form className="form-inline" onSubmit={handleApplyFilter}>
//           <div className="form-group">
//             <div className="label-input">
//               <label>Company Name</label>
//               <select id="client_company_name" onChange={handleChange}>
//                 <option value="">{selectedCompany.client_company_name}</option>
//                 {companyNames.map((company) => (
//                   <option key={company._id} value={JSON.stringify(company)}>
//                     {company.client_company_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="filter-button">
//             <button type="submit" className="apply_button">
//               Apply
//             </button>
//             <button
//               type="button"
//               className="cancel_button"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </Sidebar>
//   );
// }

// export default FilterForm;
import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import axios from "axios";
import "./filterForm.css";
import { useFont } from "../fonts/fontContext";

function FilterForm({ filterVisibleRight, setFilterVisibleRight }) {
  const fontStyles = useFont();
  const [companyNames, setCompanyNames] = useState([]); // State to store company names
  const [selectedCompany, setSelectedCompany] = useState(""); // State to store selected company name
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchCompanyNames = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8090/login/viewClients?limit=5&status=active&offset=0"
        );

        const clients = response.data;
        const uniqueCompanyNames = new Set(
          clients.map((client) => client.client_company_name.toLowerCase())
        );

        // Log company names to the console
        console.log(uniqueCompanyNames);
        setCompanyNames(Array.from(uniqueCompanyNames));
      } catch (error) {
        console.error("Error fetching company names:", error);
      }
    };

    fetchCompanyNames();
  }, []);

  const handleChange = (e) => {
    const selectedCompanyObject = JSON.parse(e.target.value);
    setSelectedCompany(selectedCompanyObject); // Update selected company
  
    console.log("selected company", selectedCompanyObject);
  };


  const handleApplyFilter = (e) => {
    e.preventDefault();
    applyFilter(); // Pass selected company name to parent component
    setFilterVisibleRight(false); // Hide the sidebar
  };

  const handleCancel = () => {
    setSelectedCompany(""); // Clear selected company on cancel
    setFilterVisibleRight(false); // Hide the sidebar
  };

  // const applyFilter = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8090/login/getSpecificClients?client_id=${selectedCompany._id}`,
  //       {
  //         params: {
  //           client_id: selectedCompany._id,
  //         },
  //       }
  //     );

  //     const clientsForCompany = response.data;
  //     console.log("Clients for selected company:", clientsForCompany);
  //     setClients(clientsForCompany)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const applyFilter = async () => {
    if (!selectedCompany || !selectedCompany._id) {
      console.error("Selected company or its ID is undefined.");
      return;
    }
  
    try {
      const response = await axios.get(
        `http://localhost:8090/login/getSpecificClients?client_id=${selectedCompany._id}`,
        {
          params: {
            client_id: selectedCompany._id,
          },
        }
      );
  
      const clientsForCompany = response.data;
      console.log("Clients for selected company:", clientsForCompany);
      setClients(clientsForCompany); // Set clients for the selected company to state
    } catch (err) {
      console.log(err);
    }
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
        <form className="form-inline" onSubmit={handleApplyFilter}>
          <div className="form-group">
            <div className="label-input">
              <label>Company Name</label>
              <select id="client_company_name" onChange={handleChange}>
                <option value="">Select Company</option>
                {companyNames.map((company, index) => (
                  <option key={index} value={JSON.stringify(company)}>
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
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Sidebar>
  );
}

export default FilterForm;
