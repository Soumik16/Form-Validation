import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state || {};

    return (
        <div className="success-container">
            <h1>Submission Successful</h1>
            <h2>Here are the details you submitted:</h2>
            <div className="details">
                <p><strong>First Name:</strong> {formData.firstName}</p>
                <p><strong>Last Name:</strong> {formData.lastName}</p>
                <p><strong>Username:</strong> {formData.username}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone No.:</strong> {formData.phoneNo}</p>
                <p><strong>Country:</strong> {formData.country}</p>
                <p><strong>City:</strong> {formData.city}</p>
                <p><strong>PAN No.:</strong> {formData.panNo}</p>
                <p><strong>Aadhar No.:</strong> {formData.aadharNo}</p>
            </div>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    );
}

export default Success;
