import React from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/Portfolio/Portfolio.css";
import OverviewContent from "../Portfolio/OverViewContent";

const MyTask = () => {
  return (
    <div className="mytask-container--01">
      {/* Sidebar */}
      <Sidebar />

      <main className="mytask-main-content--01">
        {/* Header */}
        <header className="mytask-header--01">
          <div className="mytask-header-left--01">
            <h1 className="mytask-title--01">Portfolio</h1>
            <p className="mytask-subtitle--01">Track project health and progress across teams.
            </p>
          </div>
          <div className="mytask-header-buttons--01">
            <button className="mytask-btn-outline--001">Share Portfolio</button>
            <button className="mytask-btn-primary--001">+ Customize</button>
          </div>
        </header>

        <section className="mytask-tab-content--01">
          <OverviewContent />
        </section>
      </main>
    </div>
  );
};

export default MyTask;
