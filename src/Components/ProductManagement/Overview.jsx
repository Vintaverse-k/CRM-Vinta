
import React from "react";
import "../../styles/Product/Product.css";

const ProjectOverview = () => {
  return (
    <div className="project-overview-container">
      {/* LEFT PANEL */}
      <div className="project-left">
        {/* Project Description */}
        <div className="project-card">
          <h3 className="section-title">Project Description</h3>
          <p className="section-subtitle">What’s this project about?</p>
        </div>

        {/* Project Roles */}
        <div className="project-card">
          <h3 className="section-title">Project Roles</h3>
          <div className="roles-list">
            <div className="role-item add-member">
              <img src="/assets/productplus.svg" alt="Add Member" className="icon-16" />
              <span>Add Member</span>
            </div>
            <div className="role-item">
              <img src="/assets/img2.png" alt="User" className="avatar-36" />
              <div>
                <h4>Juyed Ahmed</h4>
                <p>Project Owner</p>
              </div>
            </div>
            <div className="role-item">
              <img src="/assets/img1.png" alt="User" className="avatar-36" />
              <div>
                <h4>Istiyak Mahmud</h4>
                <p>Product Designer</p>
              </div>
            </div>
            <div className="role-item">
              <img src="/assets/img1.png" alt="User" className="avatar-36" />
              <div>
                <h4>Jisan Alam</h4>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Goals */}
        <div className="project-card">
          <h3 className="section-title">Connected goals</h3>
          <div className="goals-box">
            <p>Connect or create a goal to link this project<br /> to a larger purpose.</p>
            <button className="link-btn">
              <img src="/assets/stars.svg" alt="Goal" className="icon-16" />
              <span>Add Goals</span>
            </button>
          </div>
        </div>

        {/* Connected Portfolios */}
        <div className="project-card">
          <h3 className="section-title">Connected Portfolios</h3>
          <div className="portfolio-box">
            <img src="/assets/Folder.svg" alt="Portfolio" className="icon-18" />
            <span>My Portfolio</span>
            <span className="status on-track">On track</span>
          </div>
        </div>

        {/* Milestone */}
        <div className="project-card">
          <h3 className="section-title">Milestone</h3>
          <button className="link-btn">
            <img src="/assets/blackstars.svg" alt="Milestone" className="icon-16" />
            <span>Add Milestone</span>
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="project-right">
        <div className="status-header">
          <span className="on-track-label">On Track</span>
          <button className="update-status-btn">
            <img src="/assets/downarrow.svg" alt="update" className="icon-15" />
            <span>Update status</span>
          </button>
        </div>

        {/* Status Update Card */}
        <div className="status-card card-one">
          <div className="status-card-head">
            <div className="status-card-titlewrap">
              <h4 className="status-card-title">This project is kicked off!</h4>
            </div>
          </div>

          <p className="summary-title">Summary</p>
          <p className="summary-text">
            This is a sample project status update in Traskbito. Use status updates to
            communicate the progress of your project with your teammates, skip the…
          </p>

          <div className="status-footer">
            <img src="/assets/img1.png" alt="user" className="avatar-28" />
            <span>Juyed Ahmed <br/> 10 days ago</span>
          </div>

          {/* Moved icons to bottom right */}
          <div className="status-card-actions bottom-actions">
            <button className="icon-btn"><img src="/assets/like.svg" alt="Share" className="icon-18" /></button>
            <button className="icon-btn"><img src="/assets/link.svg" alt="Edit" className="icon-18" /></button>
            <button className="icon-btn"><img src="/assets/3dot.svg" alt="More" className="icon-18" /></button>
          </div>
        </div>

        {/* Project Summary */}
        <div className="status-card card-two">
          <div className="status-card-head">
            <div className="status-card-titlewrap">
              <h4 className="status-card-title01">Project Summary</h4>
            </div>
          </div>
          <p className="status-card-ptag">Use artificial intelligence to catch up on what’s happened in this project recently.</p>
          <div className="summary-actions">
            <button className="toggle-btn">
              <img src="/assets/Toggle.svg" alt="Subscribe" className="icon-16" />
              <span>Subscribe</span>
            </button>
            <button className="view-btn">
              <img src="/assets/downarrow.svg" alt="View" className="icon-15" />
              <span>View Summary</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="status-card card-three">
          <div className="status-card-head">
            <div className="status-card-titlewrap">
              <img src="/assets/Calendar.svg" alt="Calendar" className="icon-18" />
              <h4 className="status-card-title">Apr 21 – May 19</h4>
            </div>
            <div className="status-card-actions">
              <button className="icon-btn"><img src="/assets/Folder.svg" alt="Download" className="icon-18" /></button>
              <button className="icon-btn"><img src="/assets/filter.svg" alt="Filter" className="icon-18" /></button>
              <button className="icon-btn"><img src="/assets/Folder.svg" alt="More" className="icon-18" /></button>
            </div>
          </div>
          <p className="msg-row">
            <img src="/assets/messages.svg" alt="msg" className="icon-16" />
            <span>Send message to members</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
