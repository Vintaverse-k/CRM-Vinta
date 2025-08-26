import React from "react";
import "../../styles/Tabs/TaskAssignedContent.css";

const tasks = [
  { name: "Develop High-fidelities UI", priority: "High", due: "23/05/2025" },
  { name: "Real Estate website Design", priority: "Medium", due: "26/05/2025" },
  { name: "Matex AI Meting assistance", priority: "Low", due: "25/05/2025" },
  { name: "Triply AI Travel planner UI Design", priority: "High", due: "24/05/2025" },
  { name: "Arto Focus Landing Page", priority: "Medium", due: "23/04/2025" },
  { name: "Zuno Productivity Platform Design", priority: "High", due: "23/04/2025" },
  { name: "Mova Workhub Landing", priority: "Low", due: "23/04/2025" },
  { name: "Velo Productive UI Concept", priority: "Medium", due: "23/04/2025" },
  { name: "Bexo Landing Experience", priority: "Low", due: "23/04/2025" },
  { name: "Tumo Productive Landing page design", priority: "High", due: "23/04/2025" },
  { name: "Navo Smart Landing Page", priority: "Medium", due: "23/04/2025" },
];

const TaskAssignedContent = () => {
  return (
    <div className="task-manage-content-list-container">
      <div className="task-manage-content-list-header">
        <div className="task-manage-content-header-controls-left">
          <button className="task-manage-content-header-button">
            <img src="assets/group.svg" alt="group" /> Group: Status
          </button>
          <button className="task-manage-content-header-button">
            <img src="assets/colum.svg" alt="columns" /> Columns
          </button>
        </div>
        <div className="task-manage-content-header-actions-right">
          <input type="text" className="task-manage-content-header-search-input" placeholder="Search Task..." />
          <button className="task-manage-content-header-button">All Project</button>
          <button className="task-manage-content-view-toggle-button">
            <img src="assets/listbar.svg" alt="list" />
          </button>
        </div>
      </div>
    
      {/* Task Table Section */}
      <div className="task-manage-content-board-container">
        <div className="task-manage-content-board-column full-width">
          <div className="task-manage-content-column-header">
            <div className="task-manage-content-left-header">
              <img src="assets/todoicon.svg" alt="list" />
              <h3>To do</h3>
            </div>
            <div className="task-manage-content-right-header">
              <button className="task-manage-content-add-button">
                <img src="assets/plussign.svg" alt="list" />
              </button>
            </div>
          </div>

          <div className="task-manage-content-table-wrapper">
            <div className="task-manage-content-table-header">
              <div className="task-manage-content-checkbox-col"><input type="checkbox" /></div>
              <div className="task-manage-content-task-name-col">Task Name</div>
              <div className="task-manage-content-priority-col">Priority</div>
              <div className="task-manage-content-due-col">Due Date</div>
              <div className="task-manage-content-menu-col"></div>
            </div>

            {tasks.map((task, idx) => (
              <div className="task-manage-content-table-row" key={idx}>
                <div className="task-manage-content-checkbox-col"><input type="checkbox" /></div>
                <div className="task-manage-content-task-name-col">{task.name}</div>
                <div className={`task-manage-content-priority-col ${task.priority.toLowerCase()}`}>{task.priority}</div>
                <div className="task-manage-content-due-col">{task.due}</div>
                <div className="task-manage-content-menu-col">⋮</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAssignedContent;