import React from 'react';
import '../../styles/Dashboard.css';
import Sidebar from "../SideBar/Sidebar";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar/>
      <div className="main-content">
        <div className="dashboard-content">

          {/* Header Section */}
          <div className="header-section">
            <div>
              <h2>Dashboard</h2>
              <p>Tracking ongoing activities and evaluating performance trends</p>
            </div>
            <div className="header-actions">
              <button className="btn-outline">
                <img
                  src="src/assets/share.svg"
                  alt="Share Icon"
                  width={24}
                  height={24}
                />
                Share Tasks
              </button>
              <button className="btn-primary">+ Add Team</button>
            </div>
          </div>

          <div className="stats-and-workload-wrapper">

            <div className="stats-section">

              {/* Stat Cards */}
              <div className="stat-card light-blue">
                <div className="stat-header">
                  <img
                    src="src/assets/task.svg"
                    alt="Tasks Icon"
                    width={28}
                    height={28}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                    alt="Menu Icon"
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <h3>Total tasks</h3>
                <div className="stat-value">
                  86 <span className="percentage">↑ 20%</span>
                </div>
                <p>Tasks finished last month</p>
              </div>

              <div className="stat-card light-orange">
                <div className="stat-header">
                  <img
                    src="src/assets/complete.svg"
                    alt="Tasks Icon"
                    width={28}
                    height={28}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                    alt="Menu Icon"
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <h3>Completed Tasks</h3>
                <div className="stat-value">
                  22 <span className="percentage">↑ 20%</span>
                </div>
                <p>Tasks finished last month</p>
              </div>

              <div className="stat-card light-green">
                <div className="stat-header">
                  <img
                    src="src/assets/complete.svg"
                    alt="Tasks Icon"
                    width={28}
                    height={28}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                    alt="Menu Icon"
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <h3>Overdue Tasks</h3>
                <div className="stat-value">
                  25 <span className="percentage">↑ 20%</span>
                </div>
                <p>Tasks finished last month</p>
              </div>

              <div className="stat-card light-purple">
                <div className="stat-header">
                  <img
                    src="src/assets/opentask.svg"
                    alt="Tasks Icon"
                    width={28}
                    height={28}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                    alt="Menu Icon"
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <h3>Open Tasks</h3>
                <div className="stat-value">
                  40 <span className="percentage">↑ 20%</span>
                </div>
                <p>Tasks finished last month</p>
              </div>

            </div>

            {/* Right Side: Workload Wrapper */}
            <div className="workload-wrapper">
              <div className="workload-status-container">
                <h3 className="workload-title">
                  <img
                    src="src/assets/workload-icon.svg"
                    alt="Workload Icon"
                    className="workload-icon"
                  />
                  Workload by status
                </h3>

                <div className="workload-cards">
                  <div className="workload-card">
                    <h4>Work in Progress</h4>
                    <div className="percentage-label">44%</div>
                    <div className="progress-bar">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className={`bar ${i < 9 ? "filled" : ""}`}
                        />
                      ))}
                    </div>
                    <div className="days-label">28 Days</div>
                  </div>

                  <div className="workload-card">
                    <h4>Completed</h4>
                    <div className="percentage-label">46%</div>
                    <div className="progress-bar completed">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className={`bar ${i < 10 ? "filled" : ""}`}
                        />
                      ))}
                    </div>
                    <div className="days-label">28 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of your dashboard content (timeline, time tracker, task list etc) goes here */}
          {/* Middle Section */}
          <div className="middle-section">
            <div className="timeline-project">
              <div className="timeline-header">
                <h3 style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="src/assets/totaltask.svg"
                    alt="Calendar Icon"
                    width={20}
                    height={20}
                    style={{ marginRight: 8 }}
                  />
                  Timeline Project
                </h3>
                <button className="btn-filter">
                  <img
                    src="src/assets/timeline-2.svg"
                    alt="Settings Icon"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
              <div className="timeline-times">
                <span>07:00AM</span>
                <span>09:00AM</span>
                <span className="active-time">10:00AM</span>
                <span>12:00PM</span>
                <span>03:00PM</span>
              </div>
              <div className="timeline-tasks">
                <div className="task conduct-meeting">
                  <img
                    src="src/assets/complete.svg"
                    alt="Meeting Icon"
                    width={28}
                    height={28}
                    style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  />
                  Conduct team meeting
                </div>
                <div className="task clients-emails">
                  <img
                    src="src/assets/complete.svg"
                    alt="Email Icon"
                    width={28}
                    height={28}
                    style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  />
                  Finalize presentations
                </div>
                <div className="task finalize-presentations">
                  <img
                    src="src/assets/complete.svg"
                    alt="Presentation Icon"
                    width={28}
                    height={28}
                    style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  />
                  Clients Email
                </div>
                <div className="task design-research">
                  <img
                    src="src/assets/complete.svg"
                    alt="Research Icon"
                    width={28}
                    height={28}
                    style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  />
                  Design Research
                </div>
              </div>
            </div>
          </div>

          <div className="time-tracker-wrapper">
            <div className="time-tracker">
              <div className="tracker-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img
                    src="src/assets/timetracker.svg"
                    alt="Timer Icon"
                    width={28}
                    height={28}
                  />
                  Time Tracker
                </h3>
                <button className="btn-history">History</button>
              </div>
              <div className="tracker-current-task">
                <div className="task-name">
                  <img
                    src="src/assets/slack.svg"
                    alt="Slack"
                    className="slack-logo"
                  />
                  slack.com Redesign
                </div>
                <div className="timer-display">
                  <div className="date">
                    <img
                      src="src/assets/clock.svg"
                      alt="Calendar Icon"
                      width={18}
                      height={18}
                    />
                    Mon, 23 Apr 2025
                  </div>
                  <div className="time">
                    32:40:<span className="seconds">10</span>
                  </div>
                </div>
                <div className="tracker-buttons">
                  <button className="btn-pause">
                    <img
                      src="src/assets/pause.svg"
                      alt="Pause Icon"
                      width={16}
                      height={16}
                      style={{ marginRight: '8px', verticalAlign: 'middle' }}
                    />
                    Pause
                  </button>
                  <button className="btn-stop">
                    <img
                      src="src/assets/stop.svg"
                      alt="Stop Icon"
                      width={16}
                      height={16}
                      style={{ marginRight: '8px', verticalAlign: 'middle' }}
                    />
                    Stop
                  </button>
                </div>
              </div>

              <div className="previous-tasks">
                <img
                  src="src/assets/elephent.svg"
                  alt="Checkmark Icon"
                  width={40}
                  height={40}
                  className="prev-task-icon"
                />
                <div className="prev-task-info">
                  <div className="prev-task-name">Evernote App Redesign</div>
                  <div className="prev-task-time">3:14:26</div>
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                  alt="Menu Icon"
                  width={20}
                  height={20}
                  style={{ cursor: 'pointer' }}
                  className="menu-icon"
                />
              </div>
            </div>
          </div>

          {/* Task List Section */}
          <div className="task-list-section">
            <div className="task-list-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <img
                  src="src/assets/tasklist.svg"
                  alt="List Icon"
                  width={28}
                  height={28}
                />
                Task List
              </h3>
              <div className="task-list-controls">
                <input type="text" placeholder="Search Task..." className="task-search" />
                <select className="team-select">
                  <option>All Teams</option>
                </select>
                <button className="btn-filter">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2089/2089670.png"
                    alt="Settings Icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <table className="task-list-table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Task Name</th>
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
                  <td><input type="checkbox" /></td>
                  <td>Develop High-fidelities UI</td>
                  <td><span className="priority high">   
                     <img
                      src="src/assets/flag.svg"
                      alt="High Priority Icon"
                      width={14}
                      height={14}
                    />
                    High
                  </span></td>
                  <td>23/04/2025</td>
                  <td>
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className="assigned-user" />
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User 2" className="assigned-user" />
                    <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="User 3" className="assigned-user" />
                  </td>
                  <td>30/05/2025</td>
                  <td><span className="status review">In Review</span></td>
                  <td>⋮</td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>Netlify - SaaS Real Estate...</td>
                  <td><span className="priority medium">
                                   <img
                      src="src/assets/flag2.svg"
                      alt="High Priority Icon"
                      width={14}
                      height={14}
                    />
                    Medium</span></td>
                  <td>23/04/2025</td>
                  <td>
                    <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="User 4" className="assigned-user" />
                    <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="User 5" className="assigned-user" />
                  </td>
                  <td>23/05/2025</td>
                  <td><span className="status review">In Review</span></td>
                  <td>⋮</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
