
import React from 'react';
import { Sidebar } from "primereact/sidebar";
import './editForm.css'
import { useState,useEffect } from 'react';
import Axios from "axios";


function EditForm({ editVisibleRight, setEditVisibleRight,selectedClientId}) {

    const [formData, setFormData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Axios.post(
              "http://localhost:8090/login/viewClient",
        {
          limit: 5,
          status: "active",
          offset: 1,
          selectedClientId: selectedClientId
        }
            );
            setFormData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        };
        fetchData();
      }, [selectedClientId]);
    
    //   const handleSave = async () => {
    //     try {
    //       // Make a PUT request to the API endpoint with the updated data
    //       const response = await Axios.put(
    //         "http://localhost:8090/login/editClients",
    //         formData
    //       );
    //       console.log("Response:", response.data);
    //       // Close the sidebar after saving
    //       setEditVisibleRight(false);
    //     } catch (error) {
    //       console.error("Error saving data:", error.message);
    //     }
    //   };
    // const handleCancel = () => {
        
    //     setEditVisibleRight(false); // Hide the sidebar
    //   };
    const handleSave = async () => {
      try {
        const response = await Axios.patch(
          "http://localhost:8090/login/editClients",
          formData
        );
        console.log("Response:", response.data);
        setEditVisibleRight(false); // Close the sidebar after saving
        // Reset form fields (you can modify this based on your form structure)
        setFormData({});
      } catch (error) {
        console.error("Error saving data:", error.message);
        // Handle error, display a message to the user, etc.
      }
    };
    
    const handleCancel = () => {
      setEditVisibleRight(false); // Hide the sidebar
      // Reset form fields (you can modify this based on your form structure)
      setFormData({});
    };
    
    return ( 
        <Sidebar visible={editVisibleRight} position="right" onHide={() => setEditVisibleRight(false)}>
            <h2 className='edit-content'>Edit Client</h2>
            <div className='edit-formContainer'>
            <form  className="form-inline">
                <div className="form-group">
                    <div className='label-input'>
                    <label>Client Name
                    <img className="asterick-img" src="./assets/asterick.png"></img>
                    </label>
                    <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        value={formData.client_name}
                       onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    />
                    </div>
                </div>

                <div className="form-group">
                    <div className='label-input'>
                    <label htmlFor="companyName">Company Name  
                    <img className="asterick-img" src="./assets/asterick.png"></img>
                    </label>
                    
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                       value={formData.client_company_Name}
                       onChange={(e) =>
                        setFormData({ ...formData, client_company_Name: e.target.value })
                      }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="designation">Designation 
                    <img className="asterick-img" src="./assets/asterick.png"></img>
                    </label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                       value={formData.client_designation}
                       onChange={(e) =>
                        setFormData({ ...formData, client_designation: e.target.value })
                      }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="phoneNumber">Phone Number 
                    <img className="asterick-img" src="./assets/asterick.png"></img>
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.client_phone}
                        onChange={(e) =>
                            setFormData({ ...formData,client_phone: e.target.value })
                          }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="email">Email </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.client_email}
                        onChange={(e) =>
                            setFormData({ ...formData, client_email: e.target.value })
                          }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="emailSentOn">Email Sent On </label>
                    <input
                        type="date"
                        id="emailSentOn"
                        name="emailSentOn"
                        value={formData.user_email_sent}
                        onChange={(e) =>
                            setFormData({ ...formData, user_email_sent: e.target.value })
                          }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="clientRepliedOn">Client Replied On </label>
                    <input
                        type="date"
                        id="clientRepliedOn"
                        name="clientRepliedOn"
                        value={formData.client_email_reply}
                        onChange={(e) =>
                            setFormData({ ...formData, client_email_reply: e.target.value })
                          }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="followUp">Follow Up </label><input
                        type="date"
                        id="followUp"
                        name="followUp"
                        value={formData.user_follow_up}
                        onChange={(e) =>
                            setFormData({ ...formData, user_follow_up: e.target.value })
                          }
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="status">Status </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={(e) =>
                            setFormData({ ...formData, status: e.target.value })
                          }
                    >
                         <option value="Select">Select</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="MeetingHeldOn">Meeting Held On </label>
                    <input
                        type="date"
                        id="SelectDate"
                        name="Select Date"
                        value={formData.meeting_held}
                        onChange={(e) =>
                            setFormData({ ...formData, meeting_held: e.target.value })
                          }
                    /></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="Enquiry">Enquiry Received </label>
                    <select
                        id="select"
                        name="select"
                        value={formData.client_enquiry_received}
                        onChange={(e) =>
                            setFormData({ ...formData, client_enquiry_received: e.target.value })
                          }
                    >
                        <option value="Select">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label>Proposal Given </label>
                    <select
                        id="select"
                        name="select"
                        value={formData.user_proposal_given}
                        onChange={(e) =>
                            setFormData({ ...formData, user_proposal_given: e.target.value })
                          }
                    >
                        <option value="Select">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select></div>
                </div>
                
                {/* <div className="buttons">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div> */}
                 <div className="remark-button">
            <button type="submit" className="add_button"  onClick={handleSave}>
              Save
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

export default EditForm;