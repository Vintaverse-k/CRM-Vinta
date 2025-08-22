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
              <p className="bookmark-title">Task Management</p>
              <p className="bookmark-sub">Zoho Sprints is an Agile project manag…</p>
            </div>
            <div className="bookmark">
              <p className="bookmark-title">Task Management</p>
              <p className="bookmark-sub">Zoho Sprints is an Agile project manag…</p>
            </div>
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
  <p className="desc">You added the task to your priorities</p>
  <span className="time">11 mins</span>
</div>


        {/* Card 4 */}
<div className="card card-left-4">
  <div className="path-subtitle-box">
    <p className="path">Personal List / Projects / Project 1</p>
    <p className="card-subtitless">Client Management Web App UI Design 🔗</p>
  </div>
  <p className="desc">You added the task to your priorities</p>
  <p className="desc">You set assigned to: You</p>
  <p className="desc">
    You set priority to <span className="priority">Normal</span>
  </p>
  <span className="time">18 mins</span>
</div>
</div>


      {/* Right Section */}
      <div className="overview-right">
        {/* Card 5 */}
        <div className="card card-right-1">
          <h4>Members</h4>
          <div className="avatars"> 
            <img src="assets/img1.png" alt="profile"/>
            
            <img src="assets/img1.png" alt="profile"/>
            
            <img src="assets/plussign.svg" alt="profile"/></div>
          <p className="note">100% of people have Priorities set</p>
        </div>

        {/* Card 6 */}
        <div className="card card-right-2">
          <h4 className="member01">Member Online</h4>
          <div className="member">
            <img src="assets/img1.png" alt="profile"/>
            <div>
              <p className="name">Robin Wauters</p>
              <p className="role">UI Designer</p>
            </div>
          </div>
          <div className="member">
            <img src="assets/img2.png" alt="profile"/>
            <div>
              <p className="name">Allu Arjun</p>
              <p className="role">Product Designer</p>
            </div>
          </div>
          <div className="member">
            <img src="assets/img3.png" alt="profile"/>
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
