import React from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/Allteam/AllTeam.css";
import OverviewContent from "../AllTeamOverview/TeamOverView";

const AllTeam = () => {
  return (
    <div className="allteam-container">
      {/* Sidebar */}
      <Sidebar />

      <main className="allteam-main-content">
        {/* Header */}
        <header className="allteam-header">
          <div className="allteam-header-left">
            <h1 className="allteam-title">Portfolio</h1>
            <p className="allteam-subtitle">
                View and manage all team members in one place.
            </p>
          </div>
          <div className="allteam-header-buttons">
            <button className="allteam-btn-primary">+ Create Team</button>
          </div>
        </header>

        <section className="allteam-tab-content">
          <OverviewContent />
        </section>
      </main>
    </div>
  );
};

export default AllTeam;
