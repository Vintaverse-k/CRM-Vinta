import React from "react";
import "../../styles/Inbox/Activity.css";

const Activity = () => {
  return (
    <div className="task-dashboard">

      {/* Past 7 Days */}
      <div className="task-section">
        <h3 className="section-title01">
          <img src="assets/Folder.svg" alt="Folder" className="icon" />
          Past 7 Days
        </h3>
        <div className="task-subtitle">
          <img src="assets/Folder.svg" alt="Folder" className="icon" />
          Your overdue tasks between Apr 18 and Friday
        </div>
        <div className="task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="icon" />
            Client Management UI Kit
          </span>
          <span className="task-date">Apr 21 - 23</span>
        </div>
        <div className="task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="icon" />
            Task 2
          </span>
          <span className="task-date">Apr 21 - 23</span>
        </div>
      </div>

      {/* Tasks for Apr 25 */}
      <div className="task-section">
        <h3 className="section-title01">
          <img src="assets/Folder.svg" alt="Folder" className="icon" />
          Your tasks for Apr 25
        </h3>
        <div className="task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="icon" />
            It’s time to update your goal(s)
          </span>
          <span className="task-date">Apr 25</span>
        </div>
        <div className="task-card">
          <span>
            <img src="assets/Check.svg" alt="Check" className="icon" />
            Task 2
          </span>
          <span className="task-date">Apr 21 - 23</span>
        </div>
      </div>

      {/* Tools Section */}
      <div className="task-section">
        <h3 className="section-title">
  <span className="title-left">
    <img src="assets/messages.svg" alt="Messages" className="icon" />
    Hi Juyed Ahmed, your favorite tools are here
  </span>
  <img src="assets/BlueDot.svg" alt="More Options" className="icon-right" />
</h3>

        <div className="tool-card">
          <img
            src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
            alt="Slack"
            className="tool-icon"
          />
          <div className="tool-info">
            <h4>Slack</h4>
            <p>Integrate your top tools for Communications in a few clicks.</p>
          </div>
          <span className="task-date">6 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
