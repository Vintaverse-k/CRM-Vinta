import React from "react";
import "../../styles/ProductTeam/Feed.css";

const Feed = () => {
  return (
    <div className="feed-container">

      {/* First Card */}
      <div className="feed-card card-1">
        <div className="team-overview-left">
  {/* Team Intro Card */}
  <div className="info-card team-intro-card">
    <p className="info-title">This is a creative product team</p>

    <p className="info-subtext">
      <img src="assets/graydot.svg" alt="dot" /> Product Design
      <img src="assets/link.svg" alt="link" />
    </p>
  </div>
</div>

        <div className="feed-card-body">
          <div className="feed-card-item">
            <span className="feed-card-info">You added the task to your priorities</span>
            <span className="feed-card-time">11 mins</span>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="feed-card card-2">
          <div className="team-overview-left">
  {/* Team Intro Card */}
  <div className="info-card team-intro-card">
    <p className="info-title">This is a creative product team</p>

    <p className="info-subtext">
      <img src="assets/graydot.svg" alt="dot" /> Product Design
      <img src="assets/link.svg" alt="link" />
    </p>
  </div>
</div>
        <div className="feed-card-body">
          <div className="feed-card-item">
            <span className="feed-card-info">You added the task to your priorities</span>
            <span className="feed-card-time">11 mins</span>
          </div>
          <div className="feed-card-item">
            <span className="feed-card-info">You set assigned to: You</span>
            <span className="feed-card-time">14 mins</span>
          </div>
          <div className="feed-card-item">
            <span className="feed-card-info">You set priority to
              
      <img src="assets/normalflag.svg" alt="dot"/> Normal</span>
            <span className="feed-card-time">18 mins</span>
          </div>
          <div className="feed-card-item">
            <span className="feed-card-info">You set the due date to Today</span>
            <span className="feed-card-time">24 mins</span>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="feed-card card-3">
         <div className="team-overview-left">
  {/* Team Intro Card */}
  <div className="info-card team-intro-card">
    <p className="info-title">This is a creative product team</p>

    <p className="info-subtext">
      <img src="assets/graydot.svg" alt="dot" /> Product Design
      <img src="assets/link.svg" alt="link" />
    </p>
  </div>
</div>
        <div className="feed-card-body">
          <div className="feed-card-item">
            <span className="feed-card-info">You added the task to your priorities</span>
            <span className="feed-card-time">11 mins</span>
          </div>
          <div className="feed-card-item">
            <span className="feed-card-info">You set assigned to: You</span>
            <span className="feed-card-time">14 mins</span>
          </div>
          <div className="feed-card-item">
            <span className="feed-card-info">You set priority to
      <img src="assets/normalflag.svg" alt="dot" /> Normal</span>
            <span className="feed-card-time">18 mins</span>
          </div>
          <div className="feed-card-item">
            <span className="feed-card-info">You set the due date to Today</span>
            <span className="feed-card-time">24 mins</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Feed;
