import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/MyTask.css";
import Overview from "../ProductManagement/Overview";
import List from "../ProductManagement/List";
import Board from "../ProductManagement/Board";
import Calendar from "../ProductManagement/Calendar";
import Workflow from "../ProductManagement/Workflow";
import NewTaskPopup from "../ProductManagement/Tabs/NewTaskPopup";

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [taskData, setTaskData] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const [boardTaskData, setBoardTaskData] = useState({
    todo: [],
    inProgress: [],
    inReviewed: [],
    completed: [],
  });
const [calendarTasks, setCalendarTasks] = useState([]);

  const tabs = [
    { label: "Overview", icon: "assets/portoverview.svg" },
    { label: "List", icon: "assets/portlist.svg" },
    { label: "Board", icon: "assets/portboard.svg" },
    { label: "Calendar", icon: "assets/portcalendar.svg" },
    { label: "Workflow", icon: "assets/portworkflow.svg" },
  ];
const handleCreateTask = (task, source) => {
  if (source === "Board") {
    let key = "todo";
    if (["Not Started", "To do"].includes(task.status)) key = "todo";
    else if (task.status === "In Progress") key = "inProgress";
    else if (task.status === "In Reviewed") key = "inReviewed";
    else if (task.status === "Completed") key = "completed";

    setBoardTaskData((prev) => ({
      ...prev,
      [key]: [...prev[key], task],
    }));
  } else if (source === "List") {
    let key = "todo";
    if (task.status === "To do") key = "todo";
    else if (task.status === "In Progress") key = "inProgress";
    else if (task.status === "Done") key = "done";

    setTaskData((prev) => ({
      ...prev,
      [key]: [...prev[key], task],
    }));
  } else if (source === "Calendar") {

    setCalendarTasks((prev) => [...prev, task]);
  }

  setIsPopupOpen(false);
};


  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Overview />;
      case 1:
        return <List taskData={taskData} />;
      case 2:
        return <Board boardTabTask={boardTaskData} />;
      case 3:
  return <Calendar tasks={calendarTasks} />;

      case 4:
        return <Workflow />;
      default:
        return null;
    }
  };

  return (
    <div className="mytask-container">
      <Sidebar />

      <main className="mytask-main-content">
        {/* Header */}
        <header className="mytask-header">
          <div className="mytask-header-left">
            <h1 className="mytask-title-101">
              <img
                src="/assets/productlogo.svg"
                alt="Product Logo"
                className="icon-09"
              />
              Project Management
              <img
                src="/assets/downarrow.svg"
                alt="Dropdown"
                className="icon-09"
              />
              <img
                src="/assets/productstar.svg"
                alt="Star"
                className="icon-09"
              />
              <span className="on-track-badge">
                <img
                  src="/assets/orangedot.svg"
                  alt="status"
                  className="on-track-icon"
                />
                On Track
              </span>
            </h1>
            <p className="mytask-subtitle">
              Coordinate tasks, teams, and timelines to successfully deliver
              projects.
            </p>
          </div>

          <div className="dashboard-manage-task-header-actions">
            <button className="dashboard-manage-task-btn-outline">
              <img src="assets/share.svg" alt="Share Icon" width={24} height={24} />
              Share Tasks
            </button>

            <button
              className="dashboard-manage-task-btn-primary"
              onClick={() => setIsPopupOpen(true)}
            >
              <img
                src="assets/plus-sign2.svg"
                alt="Plus Icon"
                width={16}
                height={16}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Add Team
            </button>
          </div>
        </header>

        {/* Tabs */}
        <nav className="mytask-tabs">
          {tabs.map(({ label, icon }, idx) => (
            <button
              key={idx}
              className={`mytask-tab ${
                activeTab === idx ? "mytask-tab-active" : ""
              }`}
              onClick={() => setActiveTab(idx)}
            >
              <img src={icon} alt={label} className="mytask-avatar" />
              {label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section className="mytask-tab-content01">{renderTabContent()}</section>

        {/* New Task Popup */}
        {isPopupOpen && (
          <NewTaskPopup
            onClose={() => setIsPopupOpen(false)}
            onCreateTask={handleCreateTask}
          />
        )}
      </main>
    </div>
  );
};

export default ProductManagement;
