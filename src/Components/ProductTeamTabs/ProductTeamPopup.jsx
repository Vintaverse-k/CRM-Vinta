import React, { useState } from "react";
import "../NewTaskPopup/NewTaskPopup.css";
import PriorityTab from "./Tabs/PriorityTab";
import FeedForm from "./Tabs/FeedForm";
import TeamForm from "./Tabs/TeamForm";
import TimeSheetForm from "./Tabs/TimeSheetForm";

const ProductTeamPopup = ({ onClose, onAddTask, onAddTeam, onAddTimeSheet }) => {
  const [activeTab, setActiveTab] = useState("Priority");

  const handleCreateTask = (newTask) => {
    if (onAddTask) onAddTask(newTask);
    onClose();
  };

  const handleAddTeamMember = (memberData) => {
    if (onAddTeam) onAddTeam(memberData);
    onClose();
  };

  const handleAddTimeSheet = (entryData) => {
    if (onAddTimeSheet) onAddTimeSheet(entryData);
    onClose();
  };

  const tabs = [
    { name: "Priority", component: <PriorityTab onAddTask={handleCreateTask} /> },
    { name: "Feed", component: <FeedForm onCreateTask={handleCreateTask} /> },
    { name: "Team", component: <TeamForm onAddTeam={handleAddTeamMember} /> },
    { name: "Time Sheet", component: <TimeSheetForm onCreateTask={handleAddTimeSheet} /> },
  ];

  return (
    <div className="New-Task-Popup" onClick={onClose}>
      <div
        className="New-Task-Popup-container right-slide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="New-Task-Popup-header">
          <h2>New Task / Team Member</h2>
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

export default ProductTeamPopup;
