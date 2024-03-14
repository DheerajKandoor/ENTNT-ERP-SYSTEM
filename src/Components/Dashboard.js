import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {

  const totalProducts = 12;
  const totalOrders = 4;

  return (
    <div className="container">
      <h2 className="title">ERP System</h2>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Calendar View</h3>
            <p>Go to Calendar</p>
          </Link>
        </div>
        <div className="metric">
       
        <a href="https://github.com/DheerajKandoor" target="_blank" rel="noopener noreferrer">
            <h3>View My Profile</h3>
            <p>Github</p>
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
