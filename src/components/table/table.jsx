import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useFont } from "../fonts/fontContext";
import "./table.css";
import FilterButton from "../filter/filterButton";
import AddNew from "../addNew/addNew";
import Clients from "../clients/client";
import RemarksForm from "../remarks/remarksForm";
import EditForm from "../editForm/editForm";
import Axios from "axios";
import { Menubar } from "primereact/menubar";
import { Toast } from "primereact/toast";
import ViewRemarks from "../remarks/viewRemarks";

function Table() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const fontStyles = useFont();
  const toast = useRef(null);
  const [activeRowId, setActiveRowId] = useState(null); // State to track active row ID
  const [remarksVisibleRight, setRemarksVisibleRight] = useState(false);
  const [editVisibleRight, setEditVisibleRight] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [filters, setFilters] = useState({
    global: {
      value: "",
      matchMode: FilterMatchMode.CONTAINS,
    },
  });

  const [data, setData] = useState([
    {
      id: 1,
      client: "john",
      company: "wild",
      designation: "BA",
      contact: 6369912392,
      email: "john@gmail.com",
      emailSent: "23 April 2024",
      clientReply: "27 May 2024",
      followUp: "7 june 2024",
      status: "ACTIVE",
      meetingHeld: "2 July 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "",
      key: "2",
      actions: "",
    },
    {
      id: 2,
      client: "shelly",
      company: "Aniyam",
      designation: "Devloper",
      contact: 9369992399,
      email: "shelly@gmail.com",
      emailSent: "7 Mar 2024",
      clientReply: "12 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "2 April 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "",
      key: "3",
      actions: "",
    },
    {
      id: 3,
      client: "murphy",
      company: "ATS",
      designation: "Tester",
      contact: 8369912399,
      email: "murphy@gmail.com",
      emailSent: "12 Mar 2024",
      clientReply: "20 Mar 2024",
      followUp: "30 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "12 April 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "",
      key: "3",
      actions: "",
    },
    {
      id: 4,
      client: "cecee",
      company: "SITAARC",
      designation: "Designer",
      contact: 7369912399,
      email: "cecee@gmail.com",
      emailSent: "1 April 2024",
      clientReply: "27 April 2024",
      followUp: "2 May 2024",
      status: "INACTIVE",
      meetingHeld: "17 May 2024",
      enquiry: "YES",
      proposal: "NO",
      remarks: "",
      key: "4",
      actions: "",
    },
    {
      id: 5,
      client: "mary",
      company: "ATS",
      designation: "Lead",
      contact: 6369912399,
      email: "mary@gmail.com",
      emailSent: "7 Mar 2024",
      clientReply: "17 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "1 April 2024",
      enquiry: "NO",
      proposal: "YES",
      remarks: "",
      key: "5",
      actions: "",
    },
    {
      id: 6,
      client: "memaw",
      company: "CS",
      designation: "DDO",
      contact: 9347912399,
      email: "memaw@gmail.com",
      emailSent: "2 April 2024",
      clientReply: "7 April 2024",
      followUp: "2 May 2024",
      status: "INACTIVE",
      meetingHeld: "27 May 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "",
      key: "6",
      actions: "",
    },
    {
      id: 7,
      client: "George",
      company: "HUB",
      designation: "CTO",
      contact: 7369912399,
      email: "george@gmail.com",
      emailSent: "5 Mar 2024",
      clientReply: "15 Mar 2024",
      followUp: "25 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "9 April 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "",
      key: "7",
      actions: "",
    },
    {
      id: 8,
      client: "Missy",
      company: "FUJI",
      designation: "CEO",
      contact: 9369912399,
      email: "missy@gmail.com",
      emailSent: "13 Mar 2024",
      clientReply: "28 Mar 2024",
      followUp: "16 April 2024",
      status: "ACTIVE",
      meetingHeld: "21 April 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "",
      key: "8",
      actions: "",
    },
    {
      id: 9,
      client: "Sushi",
      company: "ESIM",
      designation: "GM",
      contact: 9876543212,
      email: "sushi@gmail.com",
      emailSent: "14 Mar 2024",
      clientReply: "23 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "17 April 2024",
      enquiry: "NO",
      proposal: "YES",
      remarks: "",
      key: "9",
      actions: "",
    },
    {
      id: 10,
      client: "Shubh",
      company: "ATS",
      designation: "PM",
      contact: 6369912399,
      email: "shubh@gmail.com",
      emailSent: "19 Mar 2024",
      clientReply: "29 Mar 2024",
      followUp: "30 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "1 April 2024",
      enquiry: "YES",
      proposal: "NO",
      remarks: "",
      key: "10",
      actions: "",
    },
    {
      id: 11,
      client: "penny",
      company: "ATS",
      designation: "BA",
      contact: 6369912399,
      email: "penny@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "2",
      actions: "",
    },
    {
      id: 12,
      client: "howard",
      company: "ATS",
      designation: "BA",
      contact: 6369912399,
      email: "howard@gmail.com",
      emailSent: "27 Mar 2024",
      clientReply: "27 Mar 2024",
      followUp: "27 Mar 2024",
      status: "ACTIVE",
      meetingHeld: "27 Mar 2024",
      enquiry: "YES",
      proposal: "YES",
      remarks: "eye",
      key: "2",
      actions: "",
    },
  ]);

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];
  const enquiryOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];
  const proposalOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const [remarkID,setRemarkID] = useState(null)
  const [getRemarkId,setGetRemarkId]=useState(null)

  // const onStatusChange = (rowData, e) => {
  //   const updatedData = [...data];
  //   const index = updatedData.findIndex((item) => item.id === rowData.id);
  //   if (index !== -1) {
  //     updatedData[index].status = e.value;
  //     setData(updatedData);
  //   }
  // };
  // //for dropdown in enquiry field
  // const onEnquiryChange = (rowData, e) => {
  //   const enquiryUpdatedData = [...data];
  //   const index = enquiryUpdatedData.findIndex(
  //     (item) => item.id === rowData.id
  //   );
  //   if (index !== -1) {
  //     enquiryUpdatedData[index].enquiry = e.value;
  //     setData(enquiryUpdatedData);
  //   }
  // };
  // const onProposalChange = (rowData, e) => {
  //   const proposalUpdatedData = [...data];
  //   const index = proposalUpdatedData.findIndex(
  //     (item) => item.id === rowData.id
  //   );
  //   if (index !== -1) {
  //     proposalUpdatedData[index].proposal = e.value;
  //     setData(proposalUpdatedData);
  //   }
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeRowId !== null &&
        event.target.closest(".action-img") === null
      ) {
        setActiveRowId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeRowId]);

  const handleImageClick = (rowId) => {
    setActiveRowId(rowId === activeRowId ? null : rowId);
  };

  const handleEditButtonClick = (rowData) => {
    setSelectedClientId(rowData.id);
    setEditVisibleRight(true);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(
          "http://localhost:8090/login/viewClients",
          {
            params: {
              limit: 5,
              status: "active",
              offset: 1
            }
          }
        );
        setData(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  // const handleEditClick = (rowdata) => {
  //   console.log(JSON.stringify(rowdata));
  //   setSelectedClientId(rowdata._id); // Set the selected client ID
  //   setEditVisibleRight(true); 
  // };


  // const items = [
  //   {
  //     label: (
  //       <img className="action-img" src="./assets/action.png" alt="File" />
  //     ),

  //     items: [
  //       {
  //         label:
  //           //   <img
  //           //   className="edit-image"
  //           //   src="./assets/editicon.png"
  //           // ></img>,
  //           "Edit",

  //         command: (event) => {
  //           const rowData = event.originalEvent.rowData;
  //          console.log("event", event);
  //           setEditVisibleRight(true); // Show the edit form
          
  //           handleEditClick(rowData);
  //         },
  //       },
  //     ],
  //   },
  // ];

  const handleRemark=(rowdata)=>{
   setRemarksVisibleRight(true)
   console.log("rowdataid",rowdata._id)
   setRemarkID(rowdata._id)
   setGetRemarkId(rowdata._id)
  }
 
  return (
    <div style={fontStyles}>
      {/* <h1>Clients</h1> */}
      {/* <span className="p-input-icon-left">
        <i className="fa fa-search"></i> */}
      <div className="header">
        <div className="client-content">
          <Clients />
        </div>
        <div className="search">
          <InputText
            style={fontStyles}
            placeholder="Search"
            className="search-content"
            value={filters.global.value}
            onChange={(e) =>
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              })
            }
          />
        </div>
        <div className="filter-content">
          <FilterButton />
        </div>
        <div className="addnew-content">
          <AddNew />
        </div>
      </div>
      {/* </span> */}
      <DataTable
        value={data}
        filters={filters}
        paginator
        rows={10}
        className="p-datatable-list"
        style={fontStyles}
        stripedRows
       
      >
        <Column field="client_id" header="ID" sortable frozen />
        <Column field="client_name" header="CLIENT" sortable frozen />
        <Column field="client_company_name" header="COMPANY" sortable frozen />
        <Column
          field="client_designation"
          header="DESIGNATION"
          sortable
          frozen
        />
        <Column field="client_phone" header="CONTACT" sortable />
        <Column field="client_email" header="EMAIL" sortable />
        <Column field="user_email_sent" header="EMAIL SENT" sortable />
        <Column field="client_email_reply" header="CLIENT REPLY" sortable />
        <Column field="user_follow_up" header="FOLLOW UP" sortable />
        {/* <Column
          field="status"
          header="STATUS"
          sortable
          className="status-content"
          
          // body={(rowData) => (
          //   <Dropdown
          //     value={rowData.status}
          //     options={statusOptions}
          //     onChange={(e) => onStatusChange(rowData, e)}
          //     placeholder="Inactive"
          //   />
          // )}
        /> */}
        <Column
          field="status"
          header="STATUS"
          sortable
          className="status-content"
          body={(rowData) => (
            <span
              style={{
                backgroundColor:
                  rowData.status === "active"
                    ? "rgba(62, 161, 135, 0.12)"
                    : "rgba(161, 62, 62, 0.12)",
                color:
                  rowData.status === "active"
                    ? "rgba(62, 161, 135, 1)"
                    : "rgba(161, 62, 62, 1)",
                padding: "4px 8px",
                borderRadius: "21px",
              }}
            >
              {rowData.status}
            </span>
          )}
        />
        <Column field="meeting_held" header="MEETING HELD" sortable />
        <Column
          field="client_enquiry_recieved"
          header="ENQUIRY RECEIVED"
          sortable
          // body={(rowData) => (
          //   <Dropdown
          //     value={rowData.enquiry}
          //     options={enquiryOptions}
          //     onChange={(e) => onEnquiryChange(rowData, e)}
          //     placeholder="No"
          //   />
          // )}
          body={(rowData) => (
            <span
              style={{
                backgroundColor:
                  rowData.client_enquiry_recieved === "yes"
                    ? "rgba(62, 161, 135, 0.12)"
                    : "rgba(161, 62, 62, 0.12)",
                color:
                  rowData.client_enquiry_recieved === "yes"
                    ? "rgba(62, 161, 135, 1)"
                    : "rgba(161, 62, 62, 1)",
                padding: "4px 8px",
                borderRadius: "21px",
              }}
            >
              {rowData.client_enquiry_recieved}
            </span>
          )}
        />
        <Column
          field="user_proposal_given"
          header="PROPOSAL GIVEN"
          sortable
          // body={(rowData) => (
          //   <Dropdown
          //     value={rowData.proposal}
          //     options={proposalOptions}
          //     onChange={(e) => onProposalChange(rowData, e)}
          //     placeholder="No"
          //   />
          // )}
          body={(rowData) => (
            <span
              style={{
                backgroundColor:
                  rowData.user_proposal_given === "yes"
                    ? "rgba(62, 161, 135, 0.12)"
                    : "rgba(161, 62, 62, 0.12)",
                color:
                  rowData.user_proposal_given === "yes"
                    ? "rgba(62, 161, 135, 1)"
                    : "rgba(161, 62, 62, 1)",
                padding: "4px 8px",
                borderRadius: "21px",
              }}
            >
              {rowData.user_proposal_given}
            </span>
          )}
        />
        <Column
          field="remarks"
          header="REMARKS"
          body={(rowData) => (
            <img
              class="eye-image"
              src="./assets/eyefinal.png"
              onClick={ ()=>handleRemark(rowData)}
            />
          )}
        />
       
      <Column
      field="action"
      body={(rowData) => (
        <div style={{ position: "relative" }} className="action">
          <a onClick={() => handleImageClick(rowData.id)}>
            <img className="action-img" src="./assets/action.png" alt="Action" />
          </a>
          {activeRowId === rowData.id && (
            <button onClick={() => handleEditButtonClick(rowData)} className="edit-button">
              <img
                onClick={handleEditButtonClick}
                className="edit-image"
                src="./assets/editicon.png"
                alt="Edit"
              />
              Edit
            </button>
          )}
        </div>
      )}
    />
        {/* <Column
          field="action"
          body={(rowData) => (
            <div className="card">
              <Menubar model={items} />
              <Toast ref={toast} />
            </div>
          )}
          
        /> */}
      </DataTable>
      <RemarksForm
        remarksVisibleRight={remarksVisibleRight}
        setRemarksVisibleRight={setRemarksVisibleRight}
        remarkID={remarkID}
      ></RemarksForm>
      <ViewRemarks
      getRemarkId={getRemarkId}>

      </ViewRemarks>
      {/* <EditForm
        editVisibleRight={editVisibleRight}
        setEditVisibleRight={setEditVisibleRight}
        selectedClientId={selectedClientId}
      ></EditForm> */}
       {editVisibleRight && (
        <EditForm
          editVisibleRight={editVisibleRight}
          setEditVisibleRight={setEditVisibleRight}
          selectedClientId={selectedClientId}
        />
      )}
    </div>
  );
}

export default Table;
