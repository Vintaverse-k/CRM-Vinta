import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/Inbox/Inbox.css";

import Activity from "../Inbox/Activity";
import Archive from "../Inbox/Archive";
import Bookmark from "../Inbox/Bookmark";

const Inbox = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Activity", icon: "assets/recent.svg" },
    { label: "Archive", icon: "assets/recent.svg" },
    { label: "Bookmark", icon: "assets/recent.svg" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Activity />;
      case 1:
        return <Archive />;
      case 2:
        return <Bookmark />;
      default:
        return null;
    }
  };

  return (
    <div className="inbox-task-01-container">
      <Sidebar />

      <main className="inbox-task-01-main-content">
        <header className="inbox-task-01-header">
          <div className="inbox-task-01-header-left">
            <h1 className="inbox-task-01-title">Inbox</h1>
            <p className="inbox-task-01-subtitle">
              Where new tasks arrive before being organized.
            </p>
          </div>
          <div className="inbox-task-01-header-buttons">
            <button className="inbox-task-01-btn-primary">
              Manage Notification
            </button>
          </div>
        </header>

        <div className="inbox-task-01-tabs-header-wrapper">
          <nav className="inbox-task-01-tabs">
            {tabs.map(({ label }, idx) => (
              <button
                key={idx}
                className={`inbox-task-01-tab ${
                  activeTab === idx ? "inbox-task-01-tab-active" : ""
                } ${label === "Task assigned to me" ? "inbox-task-01-user-tab" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="inbox-task-01-tab-buttons-right">
            <button className="inbox-task-01-btn-outline inbox-task-01-btn-outline-filter">
              <img
                src="assets/filter.svg"
                alt="filter"
                className="inbox-task-01-btn-icon"
              />
              Filter
            </button>
            <button className="inbox-task-01-btn-outline inbox-task-01-btn-outline-sort">
              <img
                src="assets/sort.svg"
                alt="sort"
                className="inbox-task-01-btn-icon"
              />
              Sort: Newest
            </button>
          </div>
        </div>

        <section className="inbox-task-01-tab-content">
          {renderTabContent()}
        </section>
      </main>
    </div>
  );
};

export default Inbox;
