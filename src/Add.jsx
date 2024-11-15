import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [employee, setEmployee] = useState({ username: "", email: "", status: "active" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://employeeserver-2.onrender.com/employees", employee);
    navigate("/");
  };

  return (
    <div style={{ marginLeft: '500px', width: '450px' }}>
      <h2 style={{ marginLeft: '100px' }}>Add Employee</h2>
      <form onSubmit={handleSubmit} style={{ background: 'rgb(199, 223, 244)', width: "100%", borderCollapse: "collapse", border: "1px solid black" }}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} style={{ marginLeft: '50px', width: '300px', marginTop: '10px', borderRadius: '3px', height: '25px' }} /> <br />
        <input style={{ marginLeft: '50px', width: '300px', marginTop: '10px', borderRadius: '3px', height: '25px' }} type="email" name="email" placeholder="Email" onChange={handleChange} /> <br />
        <select style={{ marginTop: '10px', height: '25px', marginLeft: '50px' }} name="status" onChange={handleChange}> <br />
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select> <br />
        <button style={{ marginTop: "10px", height: '25px', marginLeft: '50px', marginBottom: '10px' }} type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;

