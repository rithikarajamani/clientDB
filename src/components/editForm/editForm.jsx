import React from "react";
import { Sidebar } from "primereact/sidebar";
import "./editForm.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";
function EditForm({ editVisibleRight, setEditVisibleRight, selectedClientId }) {
  const [formData, setFormData] = useState({
    client_name: "",
    client_company_name: "",
    client_designation: "",
    client_phone: "",
    client_email: "",
    user_email_sent: "",
    client_email_reply: "",
    user_follow_up: "",
    meeting_held: "",
    client_enquiry_recieved: "",
    user_proposal_given: "",
    remarks: "",
    status: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8090/login/getSpecificClients?client_id=${selectedClientId}`
        );
        console.log("response", response);

        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [selectedClientId]);

  const handleSave = async () => {
    //console.log("hi");
    try {
      console.log("formdata", formData);
      const response = await Axios.patch(
        `http://localhost:8090/login/editClients?_id=${selectedClientId}`,
        formData
      );
      // console.log("Response:", response);
      setEditVisibleRight(false); // Close the sidebar after saving
      setFormData({}); // Reset form fields
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleCancel = () => {
    setEditVisibleRight(false); // Hide the sidebar
    setFormData({}); // Reset form fields
  };

  return (
    <Sidebar
      visible={editVisibleRight}
      position="right"
      onHide={() => setEditVisibleRight(false)}
    >
      <h2 className="edit-content">Edit Client</h2>
      <div className="edit-formContainer">
        <form className="form-inline">
          <div className="form-group">
            <div className="label-input">
              <label>
                Client Name
                <img className="asterick-img" src="./assets/asterick.png"></img>
              </label>
              <input
                type="text"
                id="client_name"
                name="client_name"
                // value={formData.client_name}
                // onChange={handleChange}
                value={formData.client_name}
                onChange={(e) =>
                  setFormData({ ...formData, client_name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="companyName">
                Company Name
                <img className="asterick-img" src="./assets/asterick.png"></img>
              </label>

              <input
                type="text"
                id="client_company_name"
                name="client_company_name"
                // value={formData.client_company_name || ""}
                // onChange={handleChange}
                value={formData.client_company_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    client_company_name: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="designation">
                Designation
                <img className="asterick-img" src="./assets/asterick.png"></img>
              </label>
              <input
                type="text"
                id="client_designation"
                name="client_designation"
                // value={formData.client_designation || ""}
                // onChange={handleChange}
                value={formData.client_designation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    client_designation: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="phoneNumber">
                Phone Number
                <img className="asterick-img" src="./assets/asterick.png"></img>
              </label>
              <input
                type="text"
                id="client_phone"
                name="client_phone"
                // value={formData.client_phone || ""}
                // onChange={(e)=>handleChange(e)}
                value={formData.client_phone}
                onChange={(e) =>
                  setFormData({ ...formData, client_phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                id="client_email"
                name="client_email"
                // value={formData.client_email || ""}
                // onChange={handleChange}
                value={formData.client_email}
                onChange={(e) =>
                  setFormData({ ...formData, client_email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="emailSentOn">Email Sent On </label>
              <input
                type="date"
                id="user_email_sent"
                name="user_email_sent"
                // asp-for="MyDate" asp-format="{0:yyyy-MM-dd}"

                // value={formData.user_email_sent}
                value={
                  formData.user_email_sent
                    ? moment(formData.user_email_sent).format("YYYY-MM-DD")
                    : ""
                }
                onChange={(e) =>
                  setFormData({ ...formData, user_email_sent: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="clientRepliedOn">Client Replied On </label>
              <input
                type="date"
                id="client_email_reply"
                name="client_email_reply"
                // value={formData.client_email_reply || ""}
                // onChange={handleChange}
                //value={formData.client_email_reply}
                value={
                  formData.client_email_reply
                    ? moment(formData.client_email_reply).format("YYYY-MM-DD")
                    : ""
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    client_email_reply: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="followUp">Follow Up </label>
              <input
                type="date"
                id="user_follow_up"
                name="user_follow_up"
                // value={formData.user_follow_up || ""}
                // onChange={handleChange}
                //value={formData.user_follow_up}
                value={
                  formData.user_follow_up
                    ? moment(formData.user_follow_up).format("YYYY-MM-DD")
                    : ""
                }
                onChange={(e) =>
                  setFormData({ ...formData, user_follow_up: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-input">
              <label htmlFor="status">Status </label>
              <select
                id="status"
                name="status"
                // value={formData.status || ""}
                // onChange={handleChange}
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Select">Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="label-input">
              <label htmlFor="MeetingHeldOn">Meeting Held On </label>
              <input
                type="date"
                id="meeting_held"
                name="meeting_held"
                // value={formData.meeting_held}
                value={
                  formData.meeting_held
                    ? moment(formData.meeting_held).format("YYYY-MM-DD")
                    : ""
                }
                onChange={(e) =>
                  setFormData({ ...formData, meeting_held: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="label-input">
              <label htmlFor="Enquiry">Enquiry Received </label>
              <select
                id="client_enquiry_recieved"
                name="client_enquiry_recieved"
                // value={formData.client_enquiry_recieved || ""}
                // onChange={handleChange}
                value={formData.client_enquiry_recieved}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    client_enquiry_recieved: e.target.value,
                  })
                }
              >
                <option value="Select">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="label-input">
              <label>Proposal Given </label>
              <select
                id="user_proposal_given"
                name="user_proposal_given"
                // value={formData.user_proposal_given || ""}
                // onChange={handleChange}
                value={formData.user_proposal_given}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    user_proposal_given: e.target.value,
                  })
                }
              >
                <option value="Select">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="label-input">
              <label htmlFor="remarks">Remarks </label>
              <input
                type="text"
                id="remarks"
                name="remarks"
                // value={formData.user_follow_up || ""}
                // onChange={handleChange}
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({ ...formData, remarks: e.target.value })
                }
              />
            </div>
          </div>

          {/* <div className="buttons">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div> */}
          <div className="remark-button">
            <button type="submit" className="add_button" onClick={handleSave}>
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
