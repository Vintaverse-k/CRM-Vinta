import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/MyTask.css";
import OverviewContent from "../Tabs/OverviewContent";
import ListContent from "../Tabs/ListContent";
import BoardContent from "../Tabs/BoardContent";
import CalendarContent from "../Tabs/CalendarContent";
import TaskAssignedContent from "../Tabs/TaskAssignedContent";

const MyTask = () => {
  const [activeTab, setActiveTab] = useState(0); 

  const tabs = [
    { label: "Overview", icon: "assets/overviewmytask.svg" },
    { label: "List", icon: "assets/list.svg" },
    { label: "Board", icon: "assets/boardmytask.svg" },
    { label: "Calendar", icon: "assets/Calendarmytask.svg" },
    {
      label: "Task assigned to me",
      icon: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OverviewContent />;
      case 1:
        return <ListContent />;
      case 2:
        return <BoardContent />;
      case 3:
        return <CalendarContent />;
      case 4:
        return <TaskAssignedContent />;
      default:
        return null;
    }
  };

  return (
    <div className="mytask-container">
      {/* Sidebar */}
      <Sidebar />

      <main className="mytask-main-content">
        {/* Header */}
        <header className="mytask-headers">
          <div className="mytask-header-left">
            <h1 className="mytask-title">My Tasks</h1>
            <p className="mytask-subtitle">
              Short description will be placed here
            </p>
          </div>
          <div className="header-actions">
              <button className="btn-outline">
                <img
                  src="assets/share.svg"
                  alt="Share Icon"
                  width={24}
                  height={24}
                />
                Share Tasks
              </button>
              <button className="btn-primary">+ New Task</button>
            </div>
          

        </header>

        {/* Tabs */}
        <nav className="mytask-tabs">
          {tabs.map(({ label, icon }, idx) => (
            <button
              key={idx}
              className={`mytask-tab ${
                activeTab === idx ? "mytask-tab-active" : ""
              } ${label === "Task assigned to me" ? "mytask-user-tab" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <img src={icon} alt="Icon" className="mytask-avatar" />
              {label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section className="mytask-tab-content">{renderTabContent()}</section>
      </main>
    </div>
  );
};

export default MyTask;
