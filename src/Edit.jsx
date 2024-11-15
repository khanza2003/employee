import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ username: "", email: "", status: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const response = await axios.get(`https://employeeserver-2.onrender.com/employees/${id}`);
    setEmployee(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://employeeserver-2.onrender.com/employees/${id}`, employee);
    navigate("/");
  };

  return (
    <div style={{ marginLeft: '500px', width: '450px' }}>
      <h2 style={{ marginLeft: '100px' }}>Edit Employee</h2>
      <form style={{ background: 'rgb(199, 223, 244)', width: "100%", borderCollapse: "collapse", border: "1px solid black" }} onSubmit={handleSubmit}>
        <input style={{ marginLeft: '50px', width: '300px', marginTop: '10px', borderRadius: '3px', height: '25px' }} type="text" name="username" value={employee.username} onChange={handleChange} />
        <input style={{ marginLeft: '50px', width: '300px', marginTop: '10px', borderRadius: '3px', height: '25px' }} type="email" name="email" value={employee.email} onChange={handleChange} />
        <select style={{ marginTop: '10px', height: '25px', marginLeft: '50px', borderRadius: '3px' }} name="status" value={employee.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select> <br />
        <button style={{ marginTop: "10px", height: '25px', marginLeft: '50px', marginBottom: '10px' }} type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
