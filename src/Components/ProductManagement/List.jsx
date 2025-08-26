import React, { useState, useEffect } from "react";
import "../../styles/Productmanagement/List.css"; 
import { FiMoreVertical } from "react-icons/fi";

const taskData = {
  todo: [
    {
      name: "Develop High-fidelities UI",
      priority: "Medium",
      startDate: "Varun walia",
      dueDate: "23/05/2025",
      progress: 90,
      status: "In Review",
      assignedTo: 4,
    },
    {
      name: "Real Estate website Design",
      priority: "Low",
      startDate: "Leisha",
      dueDate: "26/05/2025",
      progress: 30,
      status: "Reviewed",
      assignedTo: 3,
    },
    {
      name: "Matex AI Meting assistance",
      priority: "Medium",
      startDate: "Manoj Kumar",
      dueDate: "25/05/2025",
      progress: 40,
      status: "In Review",
      assignedTo: 3,
    },
    
  ],
  inProgress: [
    {
      name: "Taskito- Task management web",
      priority: "High",
      startDate: "Varun walia",
      dueDate: "26/05/2025",
      progress: 70,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Cliency client management web",
      priority: "High",
      startDate: "Manoj Kumar",
      dueDate: "25/05/2025",
      progress: 45,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Cognify - AI hiring management",
      priority: "High",
      startDate: "Leisha",
      dueDate: "24/05/2025",
      progress: 60,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Orbit - web3 website design",
      priority: "High",
      startDate: "Shubham",
      dueDate: "24/05/2025",
      progress: 40,
      status: "In Review",
      assignedTo: 3,
    },
  ],
  done: [
    {
      name: "Landing Page Completed",
      priority: "Low",
      startDate: "Varun walia",
      dueDate: "20/04/2025",
      progress: 100,
      status: "Done",
      assignedTo: 1,
    },
    {
      name: "Website Deployment",
      priority: "Medium",
      startDate: "Leisha",
      dueDate: "22/04/2025",
      progress: 100,
      status: "Done",
      assignedTo: 1,
    },
  ],
};

const userImages = {
  "Varun walia": "/assets/img1.png",
  "Leisha": "/assets/img2.png",
  "Manoj Kumar": "/assets/img1.png",
  "Shubham": "/assets/img1.png",
  "Harshit": "/assets/img1.png",
};

const PriorityTag = ({ level }) => {
  const iconSrc = "assets/cflag.svg";
  return (
    <span className={`product-manage-priority-tag ${level.toLowerCase()}`}>
      <img src={iconSrc} alt={`${level} icon`} className="product-manage-priority-icon" />
      {level}
    </span>
  );
};

const AvatarGroup = ({ count, names }) => (
  <div className="product-manage-assigned-group">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="product-manage-assigned-item"
        style={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        <img
          src={userImages[names[i]] || "/assets/default.jpg"}
          alt={`User ${names[i]}`}
          className="product-manage-assigned-avatar"
        />
        <span className="product-manage-assigned-name">
          {names[i]}
        </span>
      </div>
    ))}
  </div>
);

const ProgressBar = ({ percent }) => {
  const radius = 16;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const duration = 800;
      const progressPercent = Math.min((elapsed / duration) * percent, percent);
      setProgress(progressPercent);
      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [percent]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="product-manage-progress-container">
      <div className="product-manage-progress-circle-wrapper" style={{ width: radius * 2, height: radius * 2 }}>
        <svg className="product-manage-progress-svg" height={radius * 2} width={radius * 2}>
          <circle className="product-manage-progress-bg" r={normalizedRadius} cx={radius} cy={radius} />
          <circle
            className="product-manage-progress-fg"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="product-manage-progress-text">{Math.round(progress)}%</div>
      </div>
      <span className="product-manage-progress-label">{Math.round(progress)}% Completed</span>
    </div>
  );
};

const TaskRow = ({ task }) => (
  <tr className="product-manage-table-row">
    <td>
      <input type="checkbox" className="product-manage-checkbox" />
    </td>
    <td>{task.name}</td>
    <td><PriorityTag level={task.priority} /></td>
    <td><AvatarGroup count={1} names={[task.startDate]} /></td>
    <td>{task.dueDate}</td>
    <td className="product-manage-status-cell">
      <img src={"assets/Stop.svg"} alt="status icon" className="product-manage-status-icon" />
      <span className="product-manage-status-text">{task.status}</span>
    </td>
    <td><ProgressBar percent={task.progress} /></td>
    <td><FiMoreVertical className="product-manage-more-icon" /></td>
  </tr>
);

const TaskSection = ({ title, data }) => (
  <div className="product-manage-section">
    <div className="product-manage-section-title">
      <img
        src={"assets/inprogress.svg"}
        alt={`${title} icon`}
        className="product-manage-section-icon"
      />
      {title}
    </div>

    <table className="product-manage-table">
      <thead className="product-manage-table-header">
        <tr>
          <th><input type="checkbox" className="product-manage-checkbox" /></th>
          <th>Task Name</th>
          <th>Priority</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Progress</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((task, i) => (
          <TaskRow key={i} task={task} />
        ))}
      </tbody>
    </table>
  </div>
);

const ListContent = () => {
  return (
    <div className="list-product-manage-container">
      <TaskSection title="To do" data={taskData.todo} />
      <TaskSection title="In Progress" data={taskData.inProgress} />
      <TaskSection title="Done" data={taskData.done} />
    </div>
  );
};

export default ListContent;
