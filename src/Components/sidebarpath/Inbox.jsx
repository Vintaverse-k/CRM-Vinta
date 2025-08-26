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
    <div className="mytask-container-01">
      {/* Sidebar */}
      <Sidebar />

      <main className="mytask-main-content-01">
        {/* Header */}
        <header className="mytask-header-01">
          <div className="mytask-header-left-01">
            <h1 className="mytask-title-01">Inbox</h1>
            <p className="mytask-subtitle-01">
              Where new tasks arrive before being organized.
            </p>
          </div>
          <div className="mytask-header-buttons-01">
            
            <button className="mytask-btn-primary-01">
              Manage Notification
            </button>
          </div>
        </header>

        {/* Tabs + Buttons Right */}
        <div className="mytask-tabs-header-wrapper">
          <nav className="mytask-tabs-01">
            {tabs.map(({ label }, idx) => (
              <button
                key={idx}
                className={`mytask-tab-01 ${
                  activeTab === idx ? "mytask-tab-active-01" : ""
                } ${label === "Task assigned to me" ? "mytask-user-tab-01" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="mytask-tab-buttons-right">
            <button className="mytask-btn-outline-01">
              <img
                src="assets/filter.svg"
                alt="filter"
                className="mytask-btn-icon-01"
              />
              Filter
            </button>
            <button className="mytask-btn-outline-02">
              <img
                src="assets/sort.svg"
                alt="sort"
                className="mytask-btn-icon-01"
              />
              Sort: Newest
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <section className="mytask-tab-content-01">
          {renderTabContent()}
        </section>
      </main>
    </div>
  );
};

export default Inbox;