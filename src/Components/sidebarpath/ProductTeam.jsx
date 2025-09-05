import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/ProductTeam/ProductTeam.css";
import Overview from "../ProductTeamTabs/Overview";
import Priority from "../ProductTeamTabs/Priority";
import Feed from "../ProductTeamTabs/Feed";
import Team from "../ProductTeamTabs/Team";
import TimeSheet from "../ProductTeamTabs/TimeSheet";
import ProductTeamPopup from "../ProductTeamTabs/ProductTeamPopup";

const ProductTeam = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [timeSheetData, setTimeSheetData] = useState([]);

  const tabs = [
    { label: "Overview", icon: "assets/portoverview.svg" },
    { label: "Priority", icon: "assets/portlist.svg" },
    { label: "Feed", icon: "assets/portboard.svg" },
    { label: "Team", icon: "assets/teamtabs.svg" },
    { label: "TimeSheet", icon: "assets/clock.svg" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Overview />;
      case 1:
        return <Priority tasks={tasks} />;
      case 2:
        return <Feed />;
      case 3:
        return <Team members={teamMembers} />;
      case 4:
        return <TimeSheet data={timeSheetData} />;
      default:
        return null;
    }
  };

  const handleAddTask = (taskData) => setTasks((prev) => [...prev, taskData]);
  const handleAddTeamMember = (memberData) => setTeamMembers((prev) => [...prev, memberData]);
  const handleAddTimeSheet = (entryData) => setTimeSheetData((prev) => [...prev, entryData]);

  return (
    <div className="mytask-container">
      <Sidebar />

      <main className="mytask-main-content">
        <header className="mytask-header">
          <div className="mytask-header-left">
            <h1 className="mytask-title-101">Product Team</h1>
            <p className="mytask-subtitle">
              View and manage all Product Team members and tasks in one place.
            </p>
          </div>
          <div className="dashboard-manage-task-header-actions">
            <button className="dashboard-manage-task-btn-outline">
              <img src="assets/share.svg" alt="Share Icon" width={24} height={24} />
              Share Tasks
            </button>
            <button
              className="dashboard-manage-task-btn-primary"
              onClick={() => setIsPopupOpen(true)}
            >
              <img
                src="assets/plus-sign2.svg"
                alt="Plus Icon"
                width={16}
                height={16}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              New Task
            </button>
          </div>
        </header>

        <nav className="mytask-tabs">
          {tabs.map(({ label, icon }, idx) => (
            <button
              key={idx}
              className={`mytask-tab ${activeTab === idx ? "mytask-tab-active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <img src={icon} alt="Icon" className="mytask-avatar" />
              {label}
            </button>
          ))}
        </nav>

        <section className="mytask-tab-content01">{renderTabContent()}</section>
      </main>

      {isPopupOpen && (
        <ProductTeamPopup
          onClose={() => setIsPopupOpen(false)}
          onAddTask={handleAddTask}
          onAddTeam={handleAddTeamMember}
          onAddTimeSheet={handleAddTimeSheet}
        />
      )}
    </div>
  );
};

export default ProductTeam;
