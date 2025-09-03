import React from "react";
import "../../styles/Dashboard.css";

const DashboardContent = () => {
  return (
    <div className="dashboard-manage-task-content">
      {/* Header Section */}
      <div className="dashboard-manage-task-header-section">
        <div>
          <h2>Dashboard</h2>
          <p>Tracking ongoing activities and evaluating performance trends</p>
        </div>
        <div className="dashboard-manage-task-header-actions">
          <button className="dashboard-manage-task-btn-outline">
            <img
              src="assets/share.svg"
              alt="Share Icon"
              width={24}
              height={24}
            />
            Share Tasks
          </button>
          <button className="dashboard-manage-task-btn-primary">
            + Add Team
          </button>
        </div>
      </div>

      <div className="dashboard-manage-task-stats-and-workload-wrapper">
        <div className="dashboard-manage-task-stats-section">
          {/* Stat Cards */}
          <div className="dashboard-manage-task-stat-card dashboard-manage-task-light-blue">
            <div className="dashboard-manage-task-stat-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="assets/complete.svg"
                  alt="Tasks Icon"
                  width={28}
                  height={28}
                />
                <h3>Total tasks</h3>
              </div>
              <img
                src="assets/3dot.svg"
                alt="Menu Icon"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="dashboard-manage-task-stat-value">
              86{" "}
              <span className="dashboard-manage-task-percentage">
                <img
                  src="assets/righttoparrow.svg"
                  alt="Tasks Icon"
                  width="15"
                  height="15"
                />
                20%
              </span>
            </div>
            <p>Tasks finished last month</p>
          </div>

          <div className="dashboard-manage-task-stat-card dashboard-manage-task-light-orange">
            <div className="dashboard-manage-task-stat-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="assets/overduedash.svg"
                  alt="Tasks Icon"
                  width={28}
                  height={28}
                />
                <h3>OverDue Task</h3>
              </div>
              <img
                src="assets/3dot.svg"
                alt="Menu Icon"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="dashboard-manage-task-stat-value">
              22{" "}
              <span className="dashboard-manage-task-percentage">
                <img
                  src="assets/righttoparrow.svg"
                  alt="Tasks Icon"
                  width="15"
                  height="15"
                />
                20%
              </span>
            </div>
            <p>Tasks finished last month</p>
          </div>

          <div className="dashboard-manage-task-stat-card dashboard-manage-task-light-green">
            <div className="dashboard-manage-task-stat-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="assets/opendash.svg"
                  alt="Tasks Icon"
                  width={28}
                  height={28}
                />
                <h3>Open Tasks</h3>
              </div>
              <img
                src="assets/3dot.svg"
                alt="Menu Icon"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="dashboard-manage-task-stat-value">
              25{" "}
              <span className="dashboard-manage-task-percentage">
                <img
                  src="assets/righttoparrow.svg"
                  alt="Tasks Icon"
                  width="15"
                  height="15"
                />
                20%
              </span>
            </div>
            <p>Tasks finished last month</p>
          </div>

          <div className="dashboard-manage-task-stat-card dashboard-manage-task-light-purple">
            <div className="dashboard-manage-task-stat-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="assets/compdash.svg"
                  alt="Tasks Icon"
                  width={28}
                  height={28}
                />
                <h3>Complete Task</h3>
              </div>
              <img
                src="assets/3dot.svg"
                alt="Menu Icon"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="dashboard-manage-task-stat-value">
              40{" "}
              <span className="dashboard-manage-task-percentage">
                <img
                  src="assets/righttoparrow.svg"
                  alt="Tasks Icon"
                  width="15"
                  height="15"
                />
                20%
              </span>
            </div>
            <p>Tasks finished last month</p>
          </div>
        </div>

        {/* Right Side: Workload Wrapper */}
        <div className="dashboard-manage-task-workload-wrapper">
          <div className="dashboard-manage-task-workload-status-container">
            <h3
              className="dashboard-manage-task-workload-title"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  paddingleft: "-16px",
                }}
              >
                <img
                  src="assets/timetracker.svg"
                  alt="Workload Icon"
                  className="dashboard-manage-task-workload-icon"
                />
                Workload by status
              </div>
              <img
                src="assets/3dot.svg"
                alt="Workload Icon00"
                style={{
                  paddingRight: "16px",
                }}
                className="dashboard-manage-task-workload-icon__00"
              />
            </h3>

            <div className="dashboard-manage-task-workload-cards">
              <div className="dashboard-manage-task-workload-card">
                <h4>Work in Progress</h4>
                <div className="dashboard-manage-task-percentage-label">
                  44%
                </div>

                <div className="dashboard-manage-task-days-label">28 Days</div>
                <div className="dashboard-manage-task-progress-bar">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`dashboard-manage-task-bar ${
                        i < 9 ? "filled" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="dashboard-manage-task-workload-card">
                <h4>Completed</h4>
                <div className="dashboard-manage-task-percentage-label">
                  46%
                </div>

                <div className="dashboard-manage-task-days-label">28 Days</div>
                <div className="dashboard-manage-task-progress-bar dashboard-manage-task-completed">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`dashboard-manage-task-bar ${
                        i < 10 ? "filled" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="dashboard-manage-task-middle-section">
        <div className="dashboard-manage-task-timeline-project">
          <div className="dashboard-manage-task-timeline-header">
            <h3 style={{ display: "flex", alignItems: "center" }}>
              <img
                src="assets/totaltask.svg"
                alt="Calendar Icon"
                width={28}
                height={28}
                style={{ marginRight: 8 }}
              />
              Timeline Project
            </h3>
            <button className="dashboard-manage-task-btn-filter">
              <img
                src="assets/timeline-2.svg"
                alt="Settings Icon"
                width={40}
                height={40}
              />
            </button>
          </div>
          <div className="dashboard-manage-task-timeline-times">
            <span>07:00AM</span>
            <span>09:00AM</span>
            <span className="dashboard-manage-task-active-time">10:00AM</span>
            <span>12:00PM</span>
            <span>03:00PM</span>
          </div>
          <div className="dashboard-manage-task-timeline-tasks">
            <div className="dashboard-manage-task-task dashboard-manage-task-conduct-meeting">
              <img
                src="assets/conductteam.svg"
                alt="Meeting Icon"
                width={28}
                height={28}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Conduct team meeting
            </div>
            <div className="dashboard-manage-task-task dashboard-manage-task-clients-emails">
              <img
                src="assets/finalteam.svg"
                alt="Email Icon"
                width={28}
                height={28}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Finalize presentations
            </div>
            <div className="dashboard-manage-task-task dashboard-manage-task-finalize-presentations">
              <img
                src="assets/complete.svg"
                alt="Presentation Icon"
                width={28}
                height={28}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Clients Email
            </div>
            <div className="dashboard-manage-task-task dashboard-manage-task-design-research">
              <img
                src="assets/complete.svg"
                alt="Research Icon"
                width={28}
                height={28}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Design Research
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-manage-task-time-tracker-wrapper">
        <div className="dashboard-manage-task-time-tracker">
          <div
            className="dashboard-manage-task-tracker-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src="assets/timetracker.svg"
                alt="Timer Icon"
                width={28}
                height={28}
              />
              Time Tracker
            </h3>
            <button className="dashboard-manage-task-btn-history">
              <img
                src="assets/clock.svg"
                alt="Slack"
                className="dashboard-manage-task-slack-logo2"
              />
              History
            </button>
          </div>
          <div className="dashboard-manage-task-tracker-current-task">
            <div className="dashboard-manage-task-task-name">
              <img
                src="assets/slack.svg"
                alt="Slack"
                className="dashboard-manage-task-slack-logo"
              />
              slack.com Redesign
            </div>
            <div className="dashboard-manage-task-timer-display">
              <div className="dashboard-manage-task-date">
                <img
                  src="assets/clock.svg"
                  alt="Calendar Icon"
                  width={18}
                  height={18}
                />
                Mon, 23 Apr 2025
              </div>
              <div className="dashboard-manage-task-time-01">
                32:40:
                <span className="dashboard-manage-task-seconds">10</span>
              </div>
            </div>
            <div className="dashboard-manage-task-tracker-buttons">
              <button className="dashboard-manage-task-btn-pause">
                <img
                  src="assets/pause.svg"
                  alt="Pause Icon"
                  width={16}
                  height={16}
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Pause
              </button>
              <button className="dashboard-manage-task-btn-stops">
                <img
                  src="assets/Stop.svg"
                  alt="Stop Icon"
                  width={16}
                  height={16}
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Stop
              </button>
            </div>
          </div>

          <div className="dashboard-manage-task-previous-tasks">
            <img
              src="assets/elephent.svg"
              alt="Checkmark Icon"
              width={40}
              height={40}
              className="dashboard-manage-task-prev-task-icon"
            />
            <div className="dashboard-manage-task-prev-task-info">
              <div className="dashboard-manage-task-prev-task-name">
                Evernote App Redesign
              </div>
              <div className="dashboard-manage-task-prev-task-time">
                3:14:26
              </div>
            </div>

            <img
              src="assets/3dot.svg"
              alt="Menu Icon"
              width={20}
              height={20}
              style={{ cursor: "pointer" }}
              className="dashboard-manage-task-menu-icon"
            />
          </div>
        </div>
      </div>

      {/* Task List Section */}
      <div className="dashboard-manage-task-task-list-section">
        <div
          className="dashboard-manage-task-list-header-0_1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ display: "flex", alignItems: "center", gap: " 8px" }}>
            <img
              src="assets/tasklist.svg"
              alt="List Icon"
              width={28}
              height={28}
            />
            Task List
          </h3>
          <div className="dashboard-manage-task-list-controls">
            <div className="dashboard-manage-task-search-wrapper">
              <img
                src="assets/search1.svg"
                alt="Search"
                className="dashboard-manage-task-search-icon"
              />
              <input
                type="text"
                placeholder="Search Task..."
                className="dashboard-manage-task-search"
              />
            </div>

            <select className="dashboard-manage-task-team-select">
              <option>All Teams</option>
              <img
                src="assets/downarrow.svg"
                alt="Settings Icon"
                width={40}
                height={40}
              />
            </select>
            <button className="dashboard-manage-task-btn-filter">
              <img
                src="assets/timeline-2.svg"
                alt="Settings Icon"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>

        <table className="dashboard-manage-task-list-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Task Name
                  <img
                    src="assets/dblarrow.svg"
                    alt="Settings Icon"
                    style={{ width: "12px", height: "12px" }}
                  />
                </div>
              </th>
              <th>Priority</th>
              <th>Started Date</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>More</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Develop High-fidelities UI</td>
              <td>
                <span className="dashboard-manage-task-priority high">
                  <img
                    src="assets/flag.svg"
                    alt="High Priority Icon"
                    width={14}
                    height={14}
                  />
                  High
                </span>
              </td>
              <td>23/04/2025</td>
              <td>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                  className="dashboard-manage-task-assigned-user"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  alt="User 2"
                  className="dashboard-manage-task-assigned-user"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="User 3"
                  className="dashboard-manage-task-assigned-user"
                />
              </td>
              <td>30/05/2025</td>
              <td>
                <span className="dashboard-manage-task-status review">
                  In Review
                </span>
              </td>
              <td>⋮</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Netlify - SaaS Real Estate...</td>
              <td>
                <span className="dashboard-manage-task-priority medium">
                  <img
                    src="assets/flag2.svg"
                    alt="High Priority Icon"
                    width={14}
                    height={14}
                  />
                  Medium
                </span>
              </td>
              <td>23/04/2025</td>
              <td>
                <img
                  src="https://randomuser.me/api/portraits/men/35.jpg"
                  alt="User 4"
                  className="dashboard-manage-task-assigned-user"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="User 5"
                  className="dashboard-manage-task-assigned-user"
                />
              </td>
              <td>23/05/2025</td>
              <td>
                <span className="dashboard-manage-task-status review">
                  In Review
                </span>
              </td>
              <td>⋮</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
