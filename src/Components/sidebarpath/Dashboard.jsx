import React from "react";
import "../../styles/Dashboard.css";
import Sidebar from "../SideBar/Sidebar";
import DashboardContent from "../DashboardContent/DashboardContent"; // Naya component import kiya gaya

const Dashboard = () => {
  return (
    <div className="dashboard-manage-task-container">
      <Sidebar />
      <div className="dashboard-manage-task-main-content">
        <DashboardContent /> 
      </div>
    </div>
  );
};

export default Dashboard;