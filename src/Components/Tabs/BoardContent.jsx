import React from "react";
import "../../styles/Tabs/Board.css";



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
    <div className="board-content-manage-card" key={task.title + Math.random()}>
      <div className="board-content-manage-status-priority">
        <span className={`board-content-manage-status ${task.status.replace(/\s/g, '').toLowerCase()}`}>{task.status}</span>
        <span className={`board-content-manage-priority ${task.priority.toLowerCase()}`}>
          <img src="assets/cflag.svg" alt="priority-icon" className="board-content-manage-priority-icon" />
          {task.priority}
        </span>
      </div>
      <h4 className="board-content-manage-title">{task.title}</h4>
      <p className="board-content-manage-desc">{task.desc}</p>
      <div className="board-content-manage-footer">
        <div className="board-content-manage-avatars">
          {task.avatars.map((avatar, i) => (
            <img key={i} src={avatar} alt="avatar" />
          ))}
        </div>
        <div className="board-content-manage-icons">
          <img src="assets/fileicon.svg" alt="files" /> {task.files}
          <img src="assets/messages.svg" alt="comments" /> {task.comments}
        </div>
      </div>
    </div>
  );

  const renderColumnHeader = (title, count, iconSrc) => (
    <div className="board-content-manage-column-header">
      <div className="board-content-manage-left-header">
        <img src={iconSrc} alt="section-icon" />
        <h3>{title} <span>{count}</span></h3>
      </div>
      <div className="board-content-manage-right-header">
        <img src="assets/plussign.svg" alt="add" />
        <img src="assets/3dot.svg" alt="menu" />
      </div>
    </div>
  );

  return (
    <div className="board-content-manage-wrapper">
      <div className="board-content-manage-top-bar">
        <div className="board-content-manage-top-left-buttons">
          <button className="board-content-manage-btn">
            <img src="assets/group.svg" alt="group" /> Group: Status
          </button>
          <button className="board-content-manage-btn">
            <img src="assets/colum.svg" alt="columns" /> Columns
          </button>
        </div>
        <div className="board-content-manage-top-right-buttons">
          <input type="text" className="board-content-manage-search-input" placeholder="Search Task..." />
          <button className="board-content-manage-btn">All Project</button>
          <button className="board-content-manage-icon-btn">
            <img src="assets/listbar.svg" alt="list" />
          </button>
        </div>
      </div>

      <div className="board-content-manage-container">
        <div className="board-content-manage-column">
          {renderColumnHeader("To do", tasks.todo.length, "assets/todoboard.svg")}
          {tasks.todo.map(renderCard)}
        </div>
        <div className="board-content-manage-column">
          {renderColumnHeader("In Progress", tasks.inProgress.length, "assets/todoboard.svg")}
          {tasks.inProgress.map(renderCard)}
        </div>
        <div className="board-content-manage-column">
          {renderColumnHeader("In Reviewed", tasks.inReviewed.length, "assets/todoboard.svg")}
          {tasks.inReviewed.map(renderCard)}
        </div>
        <div className="board-content-manage-column">
          {renderColumnHeader("Completed", tasks.completed.length, "assets/todoboard.svg")}
          {tasks.completed.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default BoardContent;