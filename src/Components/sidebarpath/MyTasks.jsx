import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../styles/MyTask.css";
import OverviewContent from "../Tabs/OverviewContent";
import ListContent from "../Tabs/ListContent";
import BoardContent from "../Tabs/BoardContent";
import CalendarContent from "../Tabs/CalendarContent";
import TaskAssignedContent from "../Tabs/TaskAssignedContent";
import NewTaskPopup from "../NewTaskPopup/NewTaskPopup";

const MyTask = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [listTasks, setListTasks] = useState({
    todo: [],
    inProgress: [],
    inReviewed: [],
    completed: [],
  });

  const [boardTasks, setBoardTasks] = useState({
    todo: [],
    inProgress: [],
    inReviewed: [],
    completed: [],
  });

  const [calendarTasks, setCalendarTasks] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);

  // Handle create task based on source
  const handleCreateTask = (newTask, source) => {
    if (source === "list") {
      if (newTask.category === "To Do") setListTasks(prev => ({ ...prev, todo: [...prev.todo, newTask] }));
      else if (newTask.category === "In Progress") setListTasks(prev => ({ ...prev, inProgress: [...prev.inProgress, newTask] }));
      else if (newTask.status === "In Reviewed") setListTasks(prev => ({ ...prev, inReviewed: [...prev.inReviewed, newTask] }));
      else if (newTask.status === "Completed") setListTasks(prev => ({ ...prev, completed: [...prev.completed, newTask] }));
    } else if (source === "board") {
      if (newTask.category === "To Do") setBoardTasks(prev => ({ ...prev, todo: [...prev.todo, newTask] }));
      else if (newTask.category === "In Progress") setBoardTasks(prev => ({ ...prev, inProgress: [...prev.inProgress, newTask] }));
      else if (newTask.status === "In Reviewed") setBoardTasks(prev => ({ ...prev, inReviewed: [...prev.inReviewed, newTask] }));
      else if (newTask.status === "Completed") setBoardTasks(prev => ({ ...prev, completed: [...prev.completed, newTask] }));
    } else if (source === "calendar") {
      setCalendarTasks(prev => [...prev, newTask]);
    } else if (source === "assigned") {
      setAssignedTasks(prev => [...prev, newTask]); 
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OverviewContent />;
      case 1:
        return <ListContent tasks={listTasks} />;
      case 2:
        return <BoardContent tasks={boardTasks} />;
      case 3:
        return <CalendarContent tasks={calendarTasks} />;
      case 4:
        return <TaskAssignedContent tasks={assignedTasks} />;
      default:
        return null;
    }
  };

  return (
    <div className="mytask-container">
      <Sidebar />
      <main className="mytask-main-content">
        <header className="mytask-headers">
          <div className="mytask-header-left">
            <h1 className="mytask-title">My Tasks</h1>
            <p className="mytask-subtitle">Short description will be placed here</p>
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
              + New Task
            </button>
          </div>
        </header>

        <nav className="mytask-tabs">
          {[ 
            { label: "Overview", icon: "assets/overviewmytask.svg" },
            { label: "List", icon: "assets/list.svg" },
            { label: "Board", icon: "assets/boardmytask.svg" },
            { label: "Calendar", icon: "assets/Calendarmytask.svg" },
            { label: "Task assigned to me", icon: "https://randomuser.me/api/portraits/men/75.jpg" },
          ].map(({ label, icon }, idx) => (
            <button
              key={idx}
              className={`mytask-tab ${activeTab === idx ? "mytask-tab-active" : ""} ${label === "Task assigned to me" ? "mytask-user-tab" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <img src={icon} alt="Icon" className="mytask-avatar" />
              {label}
            </button>
          ))}
        </nav>

        <section className="mytask-tab-content">{renderTabContent()}</section>

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

export default MyTask;
