import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/Portfolio/Portfolio.css";
import OverviewContent from "../Portfolio/OverviewContents";
import PortfolioForm from "../Portfolio/PortfolioForm";

const PortfolioTask = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tasks, setTasks] = useState([]); // Dynamic tasks

  // Callback to add new task
  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="mytask-container--01">
      <Sidebar />

      <main className="mytask-main-content--01">
        <header className="mytask-header--01">
          <div className="mytask-header-left--01">
            <h1 className="mytask-title--01">Portfolio</h1>
            <p className="mytask-subtitle--01">
              Track project health and progress across teams.
            </p>
          </div>

          <div className="dashboard-manage-task-header-actions">
            <button className="dashboard-manage-task-btn-outline">
              <img
                src="assets/share.svg"
                alt="Share Icon"
                width={24}
                height={24}
              />
              Share Tasks
            </button>
            <button
              className="dashboard-manage-task-btn-primary"
              onClick={() => setIsPopupOpen(true)}
            >
              + Add Team
            </button>
          </div>
        </header>

        <section className="mytask-tab-content--01">
          {/* Show dynamic tasks */}
          <OverviewContent tasks={tasks} />
        </section>

        {/* Popup Form */}
        {isPopupOpen && (
          <PortfolioForm
            onClose={() => setIsPopupOpen(false)}
            onCreateTask={handleCreateTask}
          />
        )}
      </main>
    </div>
  );
};

export default PortfolioTask;
