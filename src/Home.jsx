import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get("https://employeeserver-2.onrender.com/employees");
    setEmployees(response.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`https://employeeserver-2.onrender.com/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div style={{ marginLeft: '500px', width: '450px' }}>
      <h2 style={{ marginLeft: '100px' }}>Employee List</h2>
      <Link to="/add" style={{ marginLeft: '350px', textDecoration: 'none' }}>Add Employee</Link>
      <table style={{ background: 'rgb(199, 223, 244)', width: "100%", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr style={{ border: "1px solid black", padding: "8px" }}>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ padding: "12px" }}>{employee.id}</td>
              <td style={{ padding: "12px" }}>{employee.username}</td>
              <td style={{ padding: "12px" }}>{employee.email}</td>
              <td style={{ padding: "12px" }}>{employee.status}</td>
              <td style={{ padding: "12px", display: 'flex' }}>
                <Link to={`/edit/${employee.id}`} style={{ background: 'aliceblue', padding: '2px', borderRadius: '5px', width: '25px', textDecoration: 'none', border: '1px solid black', marginRight: '10px' }}>✍️</Link>
                <button style={{ cursor: 'pointer', background: 'aliceblue', border: '1px solid black', width: '30px', borderRadius: '5px', padding: '2px' }} onClick={() => deleteEmployee(employee.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
