import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/ProductTeam/ProductTeam.css";
import Overview from "../ProductTeamTabs/Overview";
import Priority from "../ProductTeamTabs/Priority";
import Feed from "../ProductTeamTabs/Feed";
import Team from "../ProductTeamTabs/Team";
import TimeSheet from "../ProductTeamTabs/TimeSheet";

const ProductTeam = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Overview", icon: "assets/portoverview.svg" },
    { label: "Priority", icon: "assets/portlist.svg" },
    { label: "Feed", icon: "assets/portboard.svg" },
    { label: "Team", icon: "assets/portcalendar.svg" },
    {
      label: "TimeSheet",
      icon: "assets/clock.svg",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Overview />;
      case 1:
        return <Priority />;
      case 2:
        return <Feed />;
      case 3:
        return <Team />;
      case 4:
        return <TimeSheet />;
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
        <header className="mytask-header">
          <div className="mytask-header-left">
            <h1 className="mytask-title-101">Product Team</h1>
            <p className="mytask-subtitle">
              View and manage All Product Team members in one place.
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
              <button className="btn-primary">+ Add Team</button>
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
        <section className="mytask-tab-content01">{renderTabContent()}</section>
      </main>
    </div>
  );
};

export default ProductTeam;
