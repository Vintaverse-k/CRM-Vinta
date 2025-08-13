import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/MyTask.css";

// Dummy content components for tabs (replace with your real imports)
const OverviewContent = () => <div></div>;
const ListsContent = () => <div>Lists Content here</div>;
const BoardContent = () => <div>Board Content here</div>;
const CalendarContent = () => <div>Calendar Content here</div>;
const TaskAssignedContent = () => <div>Task assigned to me Content here</div>;

const MyTask = () => {
  // State for active tab index (0 = Overview, 1 = Lists, etc)
  const [activeTab, setActiveTab] = useState(0);

  // Tab labels and icons info, to keep code clean
  const tabs = [
    { label: "Overview", icon: "src/assets/recent.svg" },
    { label: "Lists", icon: "src/assets/recent.svg" },
    { label: "Board", icon: "src/assets/recent.svg" },
    { label: "Calendar", icon: "src/assets/calendar.svg" },
    { label: "Task assigned to me", icon: "https://randomuser.me/api/portraits/men/75.jpg" },
  ];

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OverviewContent />;
      case 1:
        return <ListsContent />;
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
      <Sidebar />

      <main className="mytask-main-content">
        {/* Header Section */}
        <header className="mytask-header">
          <div className="mytask-header-left">
            <h1 className="mytask-title">My Tasks</h1>
            <p className="mytask-subtitle">Short description will be placed here</p>
          </div>
          <div className="mytask-header-buttons">
            <button className="mytask-btn-outline">Share Tasks</button>
            <button className="mytask-btn-primary">+ New Task</button>
          </div>
        </header>

        {/* Tabs */}
        <nav className="mytask-tabs">
          {tabs.map(({ label, icon }, idx) => (
            <button
              key={idx}
              className={`mytask-tab ${activeTab === idx ? "mytask-tab-active" : ""} ${label === "Task assigned to me" ? "mytask-user-tab" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <img src={icon} alt="Icon" className="mytask-avatar" />
              {label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section className="mytask-tab-content">
          {renderTabContent()}
        </section>

        {/* Rest of your page content stays exactly the same */}

        {/* Summary Cards */}
        <section className="mytask-summary-cards">
          {[
            { title: "Completed", bgClass: "bg-purple-light", iconColor: "purple" },
            { title: "Updated", bgClass: "bg-purple-lightest", iconColor: "purple" },
            { title: "Created", bgClass: "bg-cyan-light", iconColor: "cyan" },
            { title: "Due soon", bgClass: "bg-orange-light", iconColor: "orange" },
          ].map(({ title, bgClass, iconColor }, idx) => (
            <div key={idx} className={`mytask-card ${bgClass}`}>
              <div className="mytask-card-header">
                <div className={`mytask-icon-circle mytask-icon-${iconColor}`}>
                  <img src="src/assets/complete-2.svg" alt="High Priority" className="mytask-priority-icon" />
                </div>
                <h3 className="mytask-card-title">{title}</h3>
                <button className="mytask-menu-btn">...</button>
              </div>

              <div className="mytask-card-content">
                <h2 className="mytask-card-number">12</h2>
                <span className={`mytask-card-percent mytask-percent-${iconColor}`}>20%</span>
                <span className="mytask-card-desc">In the last 7 days</span>
              </div>
            </div>
          ))}
        </section>

        {/* Lower Grid */}
        <section className="mytask-lower-grid">
          {/* Priority Breakdown */}
          <div className="mytask-card mytask-priority-breakdown">
            <div className="mytask-card-header">
              <h3 className="mytask-card-title">
                <img src="src/assets/totaltime.svg" alt="Icon" />
                Priority Breakdown
              </h3>
              <button className="mytask-menu-btn">...</button>
            </div>
            <div className="mytask-priority-list">
              <div className="mytask-priority-item mytask-priority-high">
                <img src="src/assets/flag01.svg" alt="High Priority" className="mytask-priority-icon" />
                <div className="mytask-priority-text">
                  <span className="mytask-priority-count">721</span>
                  <span className="mytask-priority-label">High Priority</span>
                </div>
              </div>
              <div className="mytask-priority-item mytask-priority-high">
                <img src="src/assets/flag01.svg" alt="High Priority" className="mytask-priority-icon" />
                <div className="mytask-priority-text">
                  <span className="mytask-priority-count">721</span>
                  <span className="mytask-priority-label">High Priority</span>
                </div>
              </div>
              <div className="mytask-priority-item mytask-priority-high">
                <img src="src/assets/flag01.svg" alt="High Priority" className="mytask-priority-icon" />
                <div className="mytask-priority-text">
                  <span className="mytask-priority-count">721</span>
                  <span className="mytask-priority-label">High Priority</span>
                </div>
              </div>
            </div>
            <div className="mytask-chart-placeholder">Chart goes here</div>
          </div>

          {/* Status Overview */}
          <div className="mytask-card mytask-status-overview">
            <div className="mytask-card-header">
              <h3 className="mytask-card-title">
                <img src="src/assets/status.svg" alt="Icon" />
                Status Overview
              </h3>
              <button className="mytask-menu-btn">...</button>
            </div>
            <div className="mytask-status-list">
              {[
                { label: "To Do", work: 4, color: "purple", percent: 60 },
                { label: "In Progress", work: 2, color: "purple-light", percent: 30 },
                { label: "Done", work: 3, color: "orange", percent: 40 },
              ].map(({ label, work, color, percent }, idx) => (
                <div key={idx} className="mytask-status-item">
                  <div className={`mytask-status-dot mytask-dot-${color}`}></div>
                  <p className="mytask-status-label">
                    {label}: <span className="mytask-work-count">{work} Work</span>
                  </p>
                  <div className="mytask-progress-circle">
                    <svg viewBox="0 0 36 36" className="mytask-circle-svg">
                      <circle className="mytask-circle-bg" cx="18" cy="18" r="16" />
                      <circle
                        className={`mytask-circle-progress mytask-circle-${color}`}
                        cx="18"
                        cy="18"
                        r="16"
                        strokeDasharray={`${percent}, 100`}
                      />
                    </svg>
                    <div className="mytask-percent-text">{percent}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Grid */}
        <section className="mytask-bottom-grid">
          <div className="mytask-card mytask-total-time-worked">
            <div className="mytask-card-header">
              <h3 className="mytask-card-title">
                <img src="src/assets/totaltime.svg" alt="Icon" />
                Total Time Worked
              </h3>

              <button className="mytask-menu-btn">...</button>
            </div>
            <p className="mytask-time-count">
              13h 32m 09s <span className="mytask-increase">+1.5%</span>
            </p>
            <div className="mytask-chart-placeholder">Chart goes here</div>
          </div>
          <div className="mytask-card mytask-task-completed">
            <div className="mytask-card-header">
              <h3 className="mytask-card-title">
                <img src="src/assets/taskassign.svg" alt="Icon" />
                Task completed by assignee
              </h3>
              <button className="mytask-menu-btn">...</button>
            </div>
            <div className="mytask-progress-ring-wrapper">
              <img src="src/assets/chart.png" alt="Progress ring showing 78% work done" />
              <div className="mytask-progress-text"></div>
            </div>
            <div className="mytask-progress-breakdown">
              <span>34%</span>
              <span>28%</span>
              <span>22%</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mytask-card mytask-recent-activity">
            <div className="mytask-card-header">
              <h3 className="mytask-card-title">
                <img src="src/assets/recent.svg" alt="Icon" />
                Recent activity
              </h3>
              <button className="mytask-menu-btn">...</button>
            </div>
            <div className="mytask-activity-list">
              <div className="mytask-activity-group">
                <h4 className="mytask-activity-title">
                  <img src="src/assets/list.svg" alt="Icon" />
                  Juyed Ahmed’s List
                </h4>
                <ul className="mytask-activity-items">
                  <li className="mytask-activity-item">
                    <span className="mytask-dot mytask-dot-orange"></span>
                    Netify SaaS Real estate
                    <small>In Juyed Ahmed’s List</small>
                  </li>
                </ul>
              </div>

              <div className="mytask-activity-group">
                <h4 className="mytask-activity-title">
                  <img src="src/assets/list.svg" alt="Icon" />
                  Pixem’s Project
                </h4>
                <ul className="mytask-activity-items">
                  <li className="mytask-activity-item">
                    <span className="mytask-dot mytask-dot-orange"></span>
                    MatexAI Meeting Assistance
                    <small>in Project 11</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyTask;
