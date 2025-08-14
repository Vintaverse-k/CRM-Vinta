import React from "react";

const OverviewContent = () => {
  return (
    <>
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
                <img src="assets/complete-2.svg" alt="Icon" className="mytask-priority-icon" />
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
              <img src="assets/totaltime.svg" alt="Icon" /> Priority Breakdown
            </h3>
            <button className="mytask-menu-btn">...</button>
          </div>
          <div className="mytask-priority-list">
            {Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="mytask-priority-item mytask-priority-high">
                <img src="assets/flag01.svg" alt="High Priority" className="mytask-priority-icon" />
                <div className="mytask-priority-text">
                  <span className="mytask-priority-count">721</span>
                  <span className="mytask-priority-label">High Priority</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mytask-chart-placeholder">Chart goes here</div>
        </div>

        {/* Status Overview */}
        <div className="mytask-card mytask-status-overview">
          <div className="mytask-card-header">
            <h3 className="mytask-card-title">
              <img src="assets/status.svg" alt="Icon" /> Status Overview
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
        {/* Total Time Worked */}
        <div className="mytask-card mytask-total-time-worked">
          <div className="mytask-card-header">
            <h3 className="mytask-card-title">
              <img src="assets/totaltime.svg" alt="Icon" /> Total Time Worked
            </h3>
            <button className="mytask-menu-btn">...</button>
          </div>
          <p className="mytask-time-count">
            13h 32m 09s <span className="mytask-increase">+1.5%</span>
          </p>
          <div className="mytask-chart-placeholder">Chart goes here</div>
        </div>

        {/* Task Completed */}
        <div className="mytask-card mytask-task-completed">
          <div className="mytask-card-header">
            <h3 className="mytask-card-title">
              <img src="assets/taskassign.svg" alt="Icon" /> Task completed by assignee
            </h3>
            <button className="mytask-menu-btn">...</button>
          </div>
          <div className="mytask-progress-ring-wrapper">
            <img src="assets/chart.png" alt="Progress ring" />
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
              <img src="assets/recent.svg" alt="Icon" /> Recent activity
            </h3>
            <button className="mytask-menu-btn">...</button>
          </div>
          <div className="mytask-activity-list">
            <div className="mytask-activity-group">
              <h4 className="mytask-activity-title">
                <img src="assets/list.svg" alt="Icon" /> Juyed Ahmed’s List
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
                <img src="assets/list.svg" alt="Icon" /> Pixem’s Project
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
    </>
  );
};

export default OverviewContent;
