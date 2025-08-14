import React from "react";
import "../../styles/Tabs/Board.css";

// ✅ Don't remove this! — Task Data
const tasks = {
  todo: [
    {
      title: "Travel planner website design",
      desc: "Create page where there is...",
      status: "Not Started",
      priority: "High",
      avatars: ["assets/img1.png", "assets/img1.png", "assets/img1.png"],
      comments: 12,
      files: 3,
    },
    {
      title: "Full Website design for SaaS",
      desc: "Create page where there is...",
      status: "In Research",
      priority: "Low",
      avatars: ["assets/img1.png", "assets/img1.png", "assets/img1.png"],
      comments: 12,
      files: 3,
    },
  ],
  inProgress: [
    {
      title: "Travel planner website design",
      desc: "Create page where there is...",
      status: "In Research",
      priority: "High",
      avatars: ["assets/img1.png", "assets/img1.png", "assets/img1.png"],
      comments: 12,
      files: 3,
    },
    {
      title: "Full Website design for SaaS",
      desc: "Create page where there is...",
      status: "In Research",
      priority: "Low",
      avatars: ["assets/img1.png", "assets/img1.png", "assets/img1.png"],
      comments: 12,
      files: 3,
    },
  ],
  inReviewed: [
    {
      title: "Travel planner website design",
      desc: "Create page where there is...",
      status: "In Reviewed",
      priority: "High",
      avatars: ["assets/img2.png", "assets/img1.png", "assets/img2.png"],
      comments: 12,
      files: 3,
    },
  ],
  completed: [
    {
      title: "SaaS Landing Page UI",
      desc: "Build the landing page for SaaS...",
      status: "Completed",
      priority: "High",
      avatars: ["assets/img2.png", "assets/img1.png"],
      comments: 8,
      files: 2,
    },
  ],
};

const BoardContent = () => {
  const renderCard = (task) => (
    <div className="board-card" key={task.title + Math.random()}>
      <div className="card-status-priority">
        <span className={`status ${task.status.replace(/\s/g, '').toLowerCase()}`}>{task.status}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          <img src="assets/cflag.svg" alt="priority-icon" className="priority-icon" />
          {task.priority}
        </span>
      </div>
      <h4 className="card-title">{task.title}</h4>
      <p className="card-desc">{task.desc}</p>
      <div className="card-footer">
        <div className="avatars">
          {task.avatars.map((avatar, i) => (
            <img key={i} src={avatar} alt="avatar" />
          ))}
        </div>
        <div className="card-icons">
          <img src="assets/fileicon.svg" alt="files" /> {task.files}
          <img src="assets/messages.svg" alt="comments" /> {task.comments}
        </div>
      </div>
    </div>
  );

  const renderColumnHeader = (title, count, iconSrc) => (
    <div className="board-column-header">
      <div className="left-header">
        <img src={iconSrc} alt="section-icon" />
        <h3>{title} <span>{count}</span></h3>
      </div>
      <div className="right-header">
        <img src="assets/plussign.svg" alt="add" />
        <img src="assets/3dot.svg" alt="menu" />
      </div>
    </div>
  );

  return (
    <div className="board-wrapper">
      <div className="top-bar">
        <div className="top-left-buttons">
          <button className="btnn">
            <img src="assets/group.svg" alt="group" /> Group: Status
          </button>
          <button className="btnn">
            <img src="assets/colum.svg" alt="columns" /> Columns
          </button>
        </div>
        <div className="top-right-buttons">
          <input type="text" className="search-input" placeholder="Search Task..." />
          <button className="btnn">All Project</button>
          <button className="icon-btnn">
            <img src="assets/listbar.svg" alt="list" />
          </button>
        </div>
      </div>

      {/* 🧾 Board Content */}
      <div className="board-container">
        <div className="board-column">
          {renderColumnHeader("To do", tasks.todo.length, "assets/todoboard.svg")}
          {tasks.todo.map(renderCard)}
        </div>
        <div className="board-column">
          {renderColumnHeader("In Progress", tasks.inProgress.length, "assets/todoboard.svg")}
          {tasks.inProgress.map(renderCard)}
        </div>
        <div className="board-column">
          {renderColumnHeader("In Reviewed", tasks.inReviewed.length, "assets/todoboard.svg")}
          {tasks.inReviewed.map(renderCard)}
        </div>
        <div className="board-column">
          {renderColumnHeader("Completed", tasks.completed.length, "assets/todoboard.svg")}
          {tasks.completed.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default BoardContent;
