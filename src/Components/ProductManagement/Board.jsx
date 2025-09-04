import React from "react";
import "../../styles/Productsmanage/Boards.css";

const Board = ({ boardTabTask }) => {
  const renderCard = (task, index) => (
    <div className="taskboard-card" key={task.title + index}>
      <div className="taskboard-status-priority">
        <span className={`taskboard-status ${task.status.replace(/\s/g, "").toLowerCase()}`}>
          {task.status}
        </span>
        <span className={`taskboard-priority ${task.priority.toLowerCase()}`}>
          <img
            src={task.priority === "High" ? "assets/flag.svg" : "assets/yellowflag.svg"}
            alt="priority-icon"
            className="taskboard-priority-icon"
          />
          {task.priority}
        </span>
      </div>
      <h4 className="taskboard-title">{task.title}</h4>
      <p className="taskboard-desc">{task.desc || "No description"}</p>
      <div className="taskboard-footer">
        <div className="taskboard-avatars">
          {task.avatars && task.avatars.length > 0 && (
            <img src={task.avatars[0]} alt="avatar" />
          )}
        </div>
        <div className="taskboard-icons">
          <img src="assets/fileicon.svg" alt="files" /> {task.files || 0}
          <img src="assets/messages.svg" alt="comments" /> {task.comments || 0}
        </div>
      </div>
    </div>
  );

  const renderColumnHeader = (title, count, iconSrc) => (
    <div className="taskboard-column-header">
      <div className="taskboard-left-header">
        <img src={iconSrc} alt="section-icon" />
        <h3>
          {title} <span>{count}</span>
        </h3>
      </div>
      <div className="taskboard-right-header">
        <img src="assets/plussign.svg" alt="add" />
        <img src="assets/3dot.svg" alt="menu" />
      </div>
    </div>
  );

  return (
    <div className="taskboard-wrapper">
      <div className="taskboard-top-bar">
        <div className="taskboard-top-left-buttons">
          <button className="taskboard-btn">
            <img src="assets/group.svg" alt="group" /> Group: Status
          </button>
          <button className="taskboard-btn">
            <img src="assets/colum.svg" alt="columns" /> Columns
          </button>
        </div>
        <div className="taskboard-top-right-buttons">
          <input
            type="text"
            className="taskboard-search-input"
            placeholder="Search Task..."
          />
          <button className="taskboard-btn">All Project</button>
          <button className="taskboard-icon-btn">
            <img src="assets/listbar.svg" alt="list" />
          </button>
        </div>
      </div>

      <div className="taskboard-container">
        {/* To Do Column */}
        <div className="taskboard-column">
          {renderColumnHeader("To Do", boardTabTask.todo.length, "assets/todoboard.svg")}
          {boardTabTask.todo.length > 0 ? boardTabTask.todo.map(renderCard) : <p className="taskboard-empty">No tasks</p>}
        </div>

        {/* In Progress Column */}
        <div className="taskboard-column">
          {renderColumnHeader("In Progress", boardTabTask.inProgress.length, "assets/inprogress.svg")}
          {boardTabTask.inProgress.length > 0 ? boardTabTask.inProgress.map(renderCard) : <p className="taskboard-empty">No tasks</p>}
        </div>

        {/* In Reviewed Column */}
        <div className="taskboard-column">
          {renderColumnHeader("In Reviewed", boardTabTask.inReviewed.length || 0, "assets/yellowdotstop.svg")}
          {boardTabTask.inReviewed && boardTabTask.inReviewed.length > 0
            ? boardTabTask.inReviewed.map(renderCard)
            : <p className="taskboard-empty">No tasks</p>
          }
        </div>

        {/* Completed Column */}
        <div className="taskboard-column">
          {renderColumnHeader("Completed", boardTabTask.completed.length || 0, "assets/greendot.svg")}
          {boardTabTask.completed && boardTabTask.completed.length > 0
            ? boardTabTask.completed.map(renderCard)
            : <p className="taskboard-empty">No tasks</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Board;
