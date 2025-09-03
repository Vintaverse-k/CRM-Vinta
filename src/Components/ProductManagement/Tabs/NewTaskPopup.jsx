import React, { useState } from "react";
import "../../ProductManagement/Tabs/NewTaskPopup.css";

import ListTab from "./ListTab";       
import BoardTab from "./BoardTab";      
import CalendarTab from "./CalendarTab"; 
import WorkflowTab from "./WorkflowTab"; 

const NewTaskPopup = ({ onClose, onCreateTask }) => {
  const [activeTab, setActiveTab] = useState("List");

  const handleCreateTask = (newTask, source) => {
    if (onCreateTask) {
      onCreateTask(newTask, source);
    }
    onClose();
  };

  const tabs = [
    { name: "List", component: <ListTab onCreateTask={handleCreateTask} /> },
    { name: "Board", component: <BoardTab onCreateTask={handleCreateTask} /> },
    { name: "Calendar", component: <CalendarTab onCreateTask={handleCreateTask} /> },
    { name: "Workflow", component: <WorkflowTab onCreateTask={handleCreateTask} /> },
  ];

  return (
    <div className="New-Task-Popup" onClick={onClose}>
      <div
        className="New-Task-Popup-container right-slide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="New-Task-Popup-header">
          <h2>Project Management</h2>
          <button className="New-Task-Popup-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="New-Task-Popup-tabs-bar">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`New-Task-Popup-tab-btn ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="New-Task-Popup-tab-content">
          {tabs.find((tab) => tab.name === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default NewTaskPopup;
