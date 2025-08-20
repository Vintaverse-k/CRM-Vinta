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
    <div className="board-wrapper">
     <div className="top-bar">
  <div className="left-controls">
    <button className="btn-01">
      <img src="assets/group.svg" alt="icon" className="btn-icon-01" />
      Group: Status
    </button>
    <button className="btn-02">
      <img src="assets/colum.svg" alt="icon" className="btn-icon-02" />
      Columns
    </button>
  </div>
  <div className="right-controls">
    <input
      type="text"
      placeholder="Search Task..."
      className="search-input"
    />
    <button className="btn-03">All Project</button>
    <button className="icon-btn">
      <img src="assets/listbar.svg" alt="icon" className="btn-icon-02" />
    </button>
  </div>
</div>

      {/* Task Table Section */}
      <div className="board-container">
        <div className="board-column full-width">
          <div className="board-column-header-01">
            <div className="left-header">
              <img src="assets/todoicon.svg" alt="list" />
              <h3>To do</h3>
            </div>
            <div className="right-header">
              <button className="btnnn">
                <img src="assets/plussign.svg" alt="list" />
              </button>
            </div>
          </div>

          <div className="task-table-wrapper">
            <div className="task-table-header">
              <div className="checkbox-col"><input type="checkbox" /></div>
              <div className="task-name-col">Task Name</div>
              <div className="priority-col">Priority</div>
              <div className="due-col">Due Date</div>
              <div className="menu-col"></div>
            </div>

            {tasks.map((task, idx) => (
              <div className="task-table-row" key={idx}>
                <div className="checkbox-col"><input type="checkbox" /></div>
                <div className="task-name-col">{task.name}</div>
                <div className={`priority-col ${task.priority.toLowerCase()}`}>{task.priority}</div>
                <div className="due-col">{task.due}</div>
                <div className="menu-col">⋮</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAssignedContent;
