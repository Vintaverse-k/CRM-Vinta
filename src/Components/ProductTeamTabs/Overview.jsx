import React from "react";
import "../../styles/ProductTeam/OverView.css";

const Overview = () => {
  return (
    <div className="overview">
      {/* Left Section */}
      <div className="overview-left">
        {/* Card 1 */}
        <div className="card card-left-1">
          <p className="card-title">This is a creative product team</p>
          
          <p className="card-subtitle">
            <img src="assets/graydot.svg" alt="profile"/> Product Design 

            <img src="assets/link.svg" alt="profile"/>
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
      <img src="assets/global.svg" alt="global" /> Task Management</p>
              <p className="bookmark-sub">Zoho Sprints is an Agile project manag…</p>
            </div>
            <div className="bookmark">
              <p className="bookmark-title"> 
      <img src="assets/global.svg" alt="global" />Task Management</p>
              <p className="bookmark-sub">Zoho Sprints is an Agile project manag…</p>
            </div>
          </div>
        </div>

<div className="utb-top-bar">
  <div className="utb-left-buttons">
    <button className="utb-btn">
      Today
      <img src="assets/downarrow.svg" alt="group" />
    </button>
  </div>
  <div className="utb-right-buttons">
    <button className="utb-btn">SubTask: Shown X
      <img src="assets/downarrow.svg" alt="group" /></button>
    <button className="utb-icon-btn">

      <img src="assets/filter.svg" alt="group" /> 
Filter by
 
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
            <img src="assets/graydot.svg" alt="profile"/> Product Design 

            <img src="assets/link.svg" alt="profile"/>
          </p>
  </div>

  {/* remaining content */}
  <p className="desc">You added the task to your priorities  <span className="time">11 mins</span></p>
 
</div>


        {/* Card 4 */}
<div className="card card-left-4">
  <div className="path-subtitle-box">
    <p className="path">Personal List / Projects / Project 1</p>
    <p className="card-subtitless">Client Management Web App UI Design 🔗</p>
  </div>
  <p className="desc">You added the task to your priorities 
  <span className="time">18 mins</span></p>
  <p className="desc">You set assigned to: You 
  <span className="time">18 mins</span></p>
  <p className="desc">
    You set priority to 
  <span className="time">18 mins</span><span className="priority">
      
      <img src="assets/normalflag.svg" alt="dot"/>
      Normal</span>
  </p>
</div>
</div>


      {/* Right Section */}
      <div className="overview-right">
        {/* Card 5 */}
        <div class="upc-card">
  <div class="upc-header">
    <span>Members</span>
    <span class="upc-close-icon">✕</span>
  </div>

  <div class="upc-member-list">
    <img class="upc-avatar" src="assets/img1.png" alt="Member 1" />
    <img class="upc-avatar" src="assets/img2.png" alt="Member 2" />
    <div class="upc-add-avatar">
      <img class="upc-avatar" src="assets/plussign.svg" alt="Add Member" />
    </div>
  </div>

  <div class="upc-priority-info">
    100% of people have Priorities set
  </div>
</div>

       {/* Card 6 */}
<div className="card card-right-2">
  <h4 className="member01">Member Online</h4>
  
  {/* Member 1 (Online - Green) */}
  <div className="member">
    <div className="profile-wrapper">
      <img src="assets/img1.png" alt="profile"/>
      <span className="status-dot online"></span>
    </div>
    <div>
      <p className="name">Robin Wauters</p>
      <p className="role">UI Designer</p>
    </div>
  </div>

  <div className="member">
    <div className="profile-wrapper">
      <img src="assets/img2.png" alt="profile"/>
      <span className="status-dot offline"></span>
    </div>
    <div>
      <p className="name">Allu Arjun</p>
      <p className="role">Product Designer</p>
    </div>
  </div>

  {/* Member 3 (Offline - Yellow) */}
  <div className="member">
    <div className="profile-wrapper">
      <img src="assets/img3.png" alt="profile"/>
      <span className="status-dot offline"></span>
    </div>
    <div>
      <p className="name">Nithes Rana</p>
      <p className="role">Product Designer</p>
    </div>
  </div>
</div>
</div>
</div>


  );
};

export default Overview;
