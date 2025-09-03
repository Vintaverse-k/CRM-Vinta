import React from "react";
import "../../styles/Inbox/Activity.css";

const Activity = () => {
  return (
    <div className="activity-inbox-01-dashboard">

      {/* Past 7 Days */}
      <div className="activity-inbox-01-task-section">
        <h3 className="activity-inbox-01-section-title01">
          Past 7 Days
        </h3>
        <div className="activity-inbox-01-task-subtitle">
          <img src="assets/Folder.svg" alt="Folder" className="activity-inbox-01-icon" />
          Your overdue tasks between Apr 18 and Friday
        </div>
        <div className="activity-inbox-01-task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="activity-inbox-01-icon" />
            Client Management UI Kit
          </span>
          <span className="activity-inbox-01-task-date">Apr 21 - 23</span>
        </div>
        <div className="activity-inbox-01-task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="activity-inbox-01-icon" />
            Task 2
          </span>
          <span className="activity-inbox-01-task-date">Apr 21 - 23</span>
        </div>
      </div>

      {/* Tasks for Apr 25 */}
      <div className="activity-inbox-01-task-section">
        <h3 className="activity-inbox-01-section-title01">
          <img src="assets/Folder.svg" alt="Folder" className="activity-inbox-01-icon" />
          Your tasks for Apr 25
        </h3>
        <div className="activity-inbox-01-task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="activity-inbox-01-icon" />
            It’s time to update your goal(s)
          </span>
          <span className="activity-inbox-01-task-date">Apr 25</span>
        </div>
        <div className="activity-inbox-01-task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="activity-inbox-01-icon" />
            Task 2
          </span>
          <span className="activity-inbox-01-task-date">Apr 21 - 23</span>
        </div>
      </div>

      {/* Tools Section */}
      <div className="activity-inbox-01-task-section">
        <h3 className="activity-inbox-01-section-title">
          <span className="activity-inbox-01-title-left">
            <img src="assets/messages.svg" alt="Messages" className="activity-inbox-01-icon" />
            Hi Juyed Ahmed, your favorite tools are here
          </span>
          <img src="assets/BlueDot.svg" alt="More Options" className="activity-inbox-01-icon-right" />
        </h3>

        <div className="activity-inbox-01-tool-card">
          <img
            src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
            alt="Slack"
            className="activity-inbox-01-tool-icon"
          />
          <div className="activity-inbox-01-tool-info">
            <h4>Slack</h4>
            <p>Integrate your top tools for Communications in a few clicks.</p>
          </div>
          <span className="activity-inbox-01-task-date">Apr 25</span>
        </div>
           <h3 className="activity-inbox-01-section-title">
          <span className="activity-inbox-01-title-left">
            <img src="assets/messages.svg" alt="Messages" className="activity-inbox-01-icon" />
            Hi Juyed Ahmed, your favorite tools are here
          </span>
          <img src="assets/BlueDot.svg" alt="More Options" className="activity-inbox-01-icon-right" />
        </h3>
        <div className="activity-inbox-01-tool-card">
          <img
            src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
            alt="Slack"
            className="activity-inbox-01-tool-icon"
          />
          <div className="activity-inbox-01-tool-info">
            <h4>Slack</h4>
            <p>Integrate your top tools for Communications in a few clicks.</p>
          </div>
          <span className="activity-inbox-01-task-date">Apr 25</span>
        </div>
        

      </div>
    </div>
  );
};

export default Activity;