import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        phoneNo: "+91",
        country: "India",
        city: "",
        panNo: "",
        aadharNo: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First Name is required";
        if (!formData.lastName) tempErrors.lastName = "Last Name is required";
        if (!formData.username) tempErrors.username = "Username is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.phoneNo || formData.phoneNo === "+91")
            tempErrors.phoneNo = "Phone Number is required";
        if (!formData.city) tempErrors.city = "City is required";
        if (!formData.panNo) tempErrors.panNo = "Pan Number is required";
        if (!formData.aadharNo) tempErrors.aadharNo = "Aadhar Number is required";
        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phoneNo") {
            // Ensure +91 cannot be removed and input is numeric
            const phoneValue = value.replace(/\D/g, ""); // Remove non-numeric characters
            const formattedPhoneNo = "+91" + phoneValue.slice(2); // Keep +91 and allow only digits after it
            setFormData({ ...formData, [name]: formattedPhoneNo });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            navigate("/success", { state: formData });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form Validation</h2>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
            </div>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <div className="password-input">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                    />
                </div>
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label>Phone No.:</label>
                <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                />
                {errors.phoneNo && <span>{errors.phoneNo}</span>}
            </div>
            <div>
                <label>Country:</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="India">India</option>
                </select>
            </div>
            <div>
                <label>City:</label>
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                </select>
                {errors.city && <span>{errors.city}</span>}
            </div>
            <div>
                <label>Pan No.:</label>
                <input
                    type="text"
                    name="panNo"
                    value={formData.panNo}
                    onChange={handleChange}
                />
                {errors.panNo && <span>{errors.panNo}</span>}
            </div>
            <div>
                <label>Aadhar No.:</label>
                <input
                    type="text"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                />
                {errors.aadharNo && <span>{errors.aadharNo}</span>}
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

export default Form;
