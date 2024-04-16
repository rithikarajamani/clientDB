import React from 'react';
import { useState } from 'react';
import './addNewForm.css'
import { Sidebar } from "primereact/sidebar";
import axios from 'axios';

function AddNewForm({ visibleRight, setVisibleRight }) {
const url="http://localhost:8090/login/createClients";
    const [formData, setFormData] = useState({
        client_name:'',
        client_company_name: '',
        client_designation: '',
        client_phone: '',
        client_email: '',
        user_email_sent: '',
        client_email_reply:'',
        user_follow_up:'',
        meeting_held:'',
        client_enquiry_recieved:'',
        user_proposal_given:'',
        remarks:'',
        status: ''
    });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: value
        // }));
        const newFormData={...formData}
        newFormData[e.target.id]=e.target.value 
        setFormData(newFormData)
        console.log(newFormData)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url,{
            client_name:formData.client_name,
            client_company_name: formData.client_company_name,
            client_designation: formData.client_designation,
            client_phone: formData.client_phone,
            client_email: formData.client_email,
            user_email_sent: formData.user_email_sent,
            client_email_reply:formData.client_email_reply,
            user_follow_up:formData.user_follow_up,
            meeting_held:formData.meeting_held,
            client_enquiry_recieved:formData.client_enquiry_recieved,
            user_proposal_given:formData.user_proposal_given,
            remarks:formData.remarks,
            status: formData.status 
        })
        .then(response => {
            console.log('Client created successfully:', response.data);
            // Optionally, perform any actions after successful creation
        })
        .catch(error => {
          console.error('Error creating client:', error);
          // Show error message to the user
          // For example, you can use state to store the error message and display it in your UI
      });
    };

    const handleCancel = () => {
        setVisibleRight(false); // Hide the sidebar when cancel button is clicked
    };

    return ( 
        <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <div className="form-container">
            <h2>Add Client</h2>
            <form onSubmit={handleSubmit} className="form-inline">
            <div className="form-group">
                    <div className='label-input'>
                    <label htmlFor="companyName">Client Name  </label><input
                        type="text"
                        id="client_name"
                    //     name="clientName"
                        value={formData.client_name}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <div className='label-input'>
                    <label htmlFor="companyName">Company Name  </label><input
                        type="text"
                        id="client_company_name"
                    //     name="companyName"
                        value={formData.client_company_name}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="designation">Designation </label>
                    <input
                        type="text"
                        id="client_designation"
                        //name="designation"
                        value={formData.client_designation}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input
                        type="text"
                        id="client_phone"
                       // name="phoneNumber"
                        value={formData.client_phone}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="email">Email </label>
                    <input
                        type="email"
                        id="client_email"
                        //name="email"
                        value={formData.client_email}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="emailSentOn">Email Sent On </label>
                    <input
                        type="date"
                        id="user_email_sent"
                        //name="emailSentOn"
                        value={formData.user_email_sent}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="clientRepliedOn">Client Replied On </label>
                    <input
                        type="date"
                        id="client_email_reply"
                        //name="clientRepliedOn"
                        value={formData.client_email_reply}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="followUp">Follow Up </label><input
                        type="date"
                        id="user_follow_up"
                       // name="followUp"
                        value={formData.user_follow_up}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="status">Status </label>
                    <select
                        id="status"
                       // name="status"
                        value={formData.status}
                        onChange={(e)=>handleChange(e)}
                    >
                          <option >Select</option>
                        <option value={formData.active}>active</option>
                        <option value={formData.inactive}>inactive</option>
                    </select></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="MeetingHeldOn">Meeting Held On </label>
                    <input
                        type="date"
                        id="meeting_held"
                       // name="Select Date"
                        value={formData.meeting_held}
                        onChange={(e)=>handleChange(e)}
                    /></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="Enquiry"> Enquiry Received </label>
                    <select
                        id="client_enquiry_recieved"
                        //name="Select Status"
                        value={formData.client_enquiry_recieved}
                        onChange={(e)=>handleChange(e)}
                    >
                          <option >Select</option>
                        <option value={formData.yes}>yes</option>
                        <option value={formData.no}>no</option>
                    </select></div>
                </div>
                
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="status">Proposal Given </label>
                    <select
                        id="user_proposal_given"
                       // name="Select status"
                        value={formData.user_proposal_given}
                        onChange={(e)=>handleChange(e)}
                    >
                         <option >Select</option>
                        <option value={formData.yes}>yes</option>
                        <option value={formData.no}>no</option>
                    </select></div>
                </div>
                <div className='label-input'>
                    <label htmlFor="remarks">Remarks  </label><input
                        type="text"
                        id="remarks"
                       // name="clientName"
                        value={formData.remarks}
                        onChange={(e)=>handleChange(e)}
                    />
                    </div>
                

                {/* <div className='buttons'>
                    <button type="submit">Create</button>
                    <button type="submit">Cancel</button>
                </div> */}
                <div className="buttons">
                    <button type="submit" className="create-button">Create</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
        </Sidebar>
     );
}

export default AddNewForm;