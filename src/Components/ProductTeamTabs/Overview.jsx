import React from "react";
import "../../styles/ProductTeam/OverView.css";

const Overview = () => {
  return (
    <div className="overview-01">
      {/* Left Section */}
      <div className="overview-left">
        {/* Card 1 */}
        <div className="card card-left-1">
          <p className="card-title">This is a creative product team</p>
          <p className="card-subtitle">
            <img src="assets/graydot.svg" alt="profile" /> Product Design
            <img src="assets/link.svg" alt="profile" />
          </p>
        </div>

        {/* Card 2 */}
        <div className="card card-left-2">
          <div className="card-header">
            <h4>Bookmarks</h4>
            <button className="btn-subtasks">Subtasks: Shown ✕</button>
          </div>
          <div className="bookmarks">
            <div className="bookmark">
              <p className="bookmark-title">
                <img src="assets/global.svg" alt="global" /> Task Management
              </p>
              <p className="bookmark-sub">
                Zoho Sprints is an Agile project manag…
              </p>
            </div>
            <div className="bookmark">
              <p className="bookmark-title">
                <img src="assets/global.svg" alt="global" />Task Management
              </p>
              <p className="bookmark-sub">
                Zoho Sprints is an Agile project manag…
              </p>
            </div>
          </div>
        </div>

        <div className="utb-top-bar">
          <div className="utb-left-buttons">
            <button className="utb-btn101">
              <span>Today</span>
              <img src="assets/downarrow.svg" alt="group" />
            </button>
          </div>
          <div className="utb-right-buttons">
            <button className="utb-btn">SubTask: Shown X</button>
            <button className="utb-icon-btn">
              <span>
                <img src="assets/filter.svg" alt="group" />
                Filter by
              </span>
              <img src="assets/downarrow.svg" alt="group" />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card card-left-3">
          {/* mini-card */}
          <div className="mini-card">
            <p className="path">Team Space / Projects / Project 1</p>
            <p className="card-subtitles">
              <img src="assets/graydot.svg" alt="profile" /> Product Design
              <img src="assets/link.svg" alt="profile" />
            </p>
          </div>
          {/* remaining content */}
          <p className="desc">
            You added the task to your priorities <span className="time">11
            mins</span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="card card-left-4">
          <div className="path-subtitle-box">
            <p className="path">Personal List / Projects / Project 1</p>
            <p className="card-subtitless">Client Management Web App UI Design 🔗</p>
          </div>
          <p className="desc">
            You added the task to your priorities <span className="time">18
            mins</span>
          </p>
          <p className="desc">
            You set assigned to: You <span className="time">18 mins</span>
          </p>
          <p className="desc">
            You set priority to <span className="time">18 mins</span>
            <span className="priority">
              <img src="assets/normalflag.svg" alt="dot" /> Normal
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="overview-right">
        {/* Card 5 */}
        <div className="upc-card">
          <div className="upc-header">
            <span>Members</span>
            <span className="upc-close-icon">✕</span>
          </div>
          <div className="upc-member-list">
            <img className="upc-avatar" src="assets/img1.png" alt="Member 1" />
            <img className="upc-avatar" src="assets/img2.png" alt="Member 2" />
            <div className="upc-add-avatar">
              <img className="upc-avatar" src="assets/plussign.svg" alt="Add Member" />
            </div>
          </div>
          <div className="upc-priority-info">
            100% of people have Priorities set
          </div>
        </div>

        {/* Card 6 */}
        <div className="card card-right-2">
          {/* Header with title and cross */}
          <div className="member-header">
            <h4 className="member01">Member Online</h4>
            <span className="header-close-icon">✕</span>
          </div>

          {/* Member 1 (Online - Green) */}
          <div className="member">
            <div className="profile-wrapper">
              <img src="assets/img1.png" alt="profile" />
              <span className="status-dot online"></span>
            </div>
            <div className="member-info">
              <p className="name">Robin Wauters</p>
              <p className="role">UI Designer</p>
            </div>
            <img className="arrow-icon arrow-large" src="assets/downarrow.svg" alt="profile" />
          </div>

          <div className="member">
            <div className="profile-wrapper">
              <img src="assets/img2.png" alt="profile" />
              <span className="status-dot offline"></span>
            </div>
            <div className="member-info">
              <p className="name">Allu Arjun</p>
              <p className="role">Product Designer</p>
            </div>
            <img className="arrow-icon arrow-large" src="assets/downarrow.svg" alt="profile" />
          </div>

          {/* Member 3 (Offline - Yellow) */}
          <div className="member">
            <div className="profile-wrapper">
              <img src="assets/img3.png" alt="profile" />
              <span className="status-dot offline"></span>
            </div>
            <div className="member-info">
              <p className="name">Nithes Rana</p>
              <p className="role">Product Designer</p>
            </div>
            <img className="arrow-icon arrow-large" src="assets/downarrow.svg" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
