import React from "react";
import "../NewTaskPopup/NewTaskPopup.css";
import TeamForm from "../AllTeamOverview/AllteamForm";

const NewTeamPopup = ({ onClose, onAddTeam }) => {
  return (
    <div className="New-Task-Popup" onClick={onClose}>
      <div
        className="New-Task-Popup-container right-slide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="New-Task-Popup-header">
          <h2>Create All Team</h2>
          <button className="New-Task-Popup-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <TeamForm
          onAddTeam={(teamData) => {
            onAddTeam(teamData); 
            onClose();
          }}
        />
      </div>
    </div>
  );
};

export default NewTeamPopup;
