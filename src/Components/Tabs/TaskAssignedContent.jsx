import React from "react";
import "../../styles/Tabs/TaskAssignedContent.css";

const TaskAssignedContent = ({ tasks }) => {
  if (!tasks || tasks.length === 0) return <p style={{ padding: "20px" }}>No tasks assigned yet.</p>;

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
              <div className="task-manage-content-table-row" key={task.id || idx}>
                <div className="task-manage-content-checkbox-col"><input type="checkbox" /></div>
                <div className="task-manage-content-task-name-col">{task.name}</div>
                <div className={`task-manage-content-priority-col ${task.priority.toLowerCase()}`}>{task.priority}</div>
                <div className="task-manage-content-due-col">{task.due || task.dueDate}</div>
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
