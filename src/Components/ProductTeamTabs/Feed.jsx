import React from "react";

import "../../styles/ProductTeam/Feed.css"
const Feed = () => {
  return (
    <div className="feed-container">

      {/* First Card */}
      <div className="feed-card-1">
        <div className="feed-card-inner-1">
          <p className="feed-card-title-1">Team Space / Projects / Project 1</p>
          <p className="feed-card-subtitle-1">Product Design</p>
          <p className="feed-card-info-1">You added the task to your priorities</p>
          <p className="feed-card-time-1">11 mins</p>
        </div>
      </div>

      {/* Second Card */}
      <div className="feed-card-2">
        <div className="feed-card-inner-2">
          <p className="feed-card-title-2">Personal List / Projects / Project 1</p>
          <p className="feed-card-subtitle-2">Client Management Web App UI Design</p>
          <p className="feed-card-info-2">You added the task to your priorities</p>
          <p className="feed-card-info-2">You set assigned to: You</p>
          <p className="feed-card-info-2">You set priority to Normal</p>
          <p className="feed-card-info-2">You set the due date to Today</p>
          <p className="feed-card-time-2">11 mins</p>
        </div>
      </div>

      {/* Third Card */}
      <div className="feed-card-3">
        <div className="feed-card-inner-3">
          <p className="feed-card-title-3">Personal List / Projects / Project 1</p>
          <p className="feed-card-subtitle-3">Matex AI Meeting assistance webui</p>
          <p className="feed-card-info-3">You added the task to your priorities</p>
          <p className="feed-card-info-3">You set assigned to: You</p>
          <p className="feed-card-info-3">You set priority to Normal</p>
          <p className="feed-card-info-3">You set the due date to Today</p>
          <p className="feed-card-time-3">11 mins</p>
        </div>
      </div>

    </div>
  );
};

export default Feed;
