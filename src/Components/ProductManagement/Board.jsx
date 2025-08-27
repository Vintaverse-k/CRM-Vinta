import React from "react";
import "../../styles/ProductManagement/Board.css";



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
  <div className="taskboard-card" key={task.title + Math.random()}>
    <div className="taskboard-status-priority">
      <span className={`taskboard-status ${task.status.replace(/\s/g, '').toLowerCase()}`}>
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
    <p className="taskboard-desc">{task.desc}</p>
    <div className="taskboard-footer">
      <div className="taskboard-avatars">
        {task.avatars.map((avatar, i) => (
          <img key={i} src={avatar} alt="avatar" />
        ))}
      </div>
      <div className="taskboard-icons">
        <img src="assets/fileicon.svg" alt="files" /> {task.files}
        <img src="assets/messages.svg" alt="comments" /> {task.comments}
      </div>
    </div>
  </div>
);

  const renderColumnHeader = (title, count, iconSrc) => (
    <div className="taskboard-column-header">
      <div className="taskboard-left-header">
        <img src={iconSrc} alt="section-icon" />
        <h3>{title} <span>{count}</span></h3>
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
          <input type="text" className="taskboard-search-input" placeholder="Search Task..." />
          <button className="taskboard-btn">All Project</button>
          <button className="taskboard-icon-btn">
            <img src="assets/listbar.svg" alt="list" />
          </button>
        </div>
      </div>

      <div className="taskboard-container">
        <div className="taskboard-column">
          {renderColumnHeader("To do", tasks.todo.length, "assets/todoboard.svg")}
          {tasks.todo.map(renderCard)}
        </div>
        <div className="taskboard-column">
          {renderColumnHeader("In Progress", tasks.inProgress.length, "assets/inprogress.svg")}
          {tasks.inProgress.map(renderCard)}
        </div>
        <div className="taskboard-column">
          {renderColumnHeader("In Reviewed", tasks.inReviewed.length, "assets/yellowdotstop.svg")}
          {tasks.inReviewed.map(renderCard)}
        </div>
        <div className="taskboard-column">
          {renderColumnHeader("Completed", tasks.completed.length, "assets/greendot.svg")}
          {tasks.completed.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default BoardContent;
