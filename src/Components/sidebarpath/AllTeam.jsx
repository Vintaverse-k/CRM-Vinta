import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/Allteam/AllTeam.css";
import TeamOverview from "../AllTeamOverview/TeamOverView";
import NewTeamPopup from "../AllTeamOverview/NewTeamPopup";

const AllTeam = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleAddTeam = (newTeam) => {
    setTasks((prev) => [...prev, newTeam]);
  };

  return (
    <div className="allteam-container">
      {/* Sidebar */}
      <Sidebar />

      <main className="allteam-main-content">
        {/* Header */}
        <header className="allteam-header">
          <div className="allteam-header-left">
            <h1 className="allteam-title">All Team</h1>
            <p className="allteam-subtitle">
              View and manage all team members in one place.
            </p>
          </div>
          <div className="allteam-header-buttons">
            <button className="allteam-btn-primary" onClick={handleOpenPopup}>
              + Create Team
            </button>
          </div>
        </header>

        <section className="allteam-tab-content">
          <TeamOverview tasks={tasks} />
        </section>
      </main>

      {/* Popup */}
      {isPopupOpen && (
        <NewTeamPopup
          onClose={handleClosePopup}
          onAddTeam={handleAddTeam}
        />
      )}
    </div>
  );
};

export default AllTeam;
