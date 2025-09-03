import React, { useState } from "react";
import "../NewTaskPopup/NewTaskPopup.css";

import TaskTab from "../NewTaskPopup/Tabs/TaskTab";
import BoardDocsTab from "../NewTaskPopup/Tabs/BoardDocsTab";
import CalendarTaskForm from "../NewTaskPopup/Tabs/CalendarTaskForm";
import TaskAssignForm from "../NewTaskPopup/Tabs/TaskAssignForm";
import OverViewForm from "../NewTaskPopup/Tabs/OverViewForm";

const NewTaskPopup = ({ onClose, onCreateTask }) => {
  const [activeTab, setActiveTab] = useState("Task");

  const handleCreateTask = (newTask, source) => {
    if (onCreateTask) {
      onCreateTask(newTask, source);
    }
    onClose();
  };

  const tabs = [
    { name: "Task", component: <TaskTab onCreateTask={handleCreateTask} /> },
    { name: "Board", component: <BoardDocsTab onCreateTask={handleCreateTask} /> },
    { name: "Calendar", component: <CalendarTaskForm onCreateTask={handleCreateTask} /> },
    { name: "Task Assign", component: <TaskAssignForm onCreateTask={handleCreateTask}/> },
    { name: "OverView", component: <OverViewForm onCreateTask={handleCreateTask} /> },
  ];

  return (
    <div className="New-Task-Popup" onClick={onClose}>
      <div
        className="New-Task-Popup-container right-slide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="New-Task-Popup-header">
          <h2>New Task</h2>
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
