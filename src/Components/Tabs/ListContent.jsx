import React, { useState, useEffect } from "react";
import "../../styles/Tabs/ListContent.css";
import { FiMoreVertical } from "react-icons/fi";

const taskData = {
  todo: [
    {
      name: "Develop High-fidelities UI",
      priority: "Medium",
      startDate: "28/04/2025",
      dueDate: "23/05/2025",
      progress: 90,
      status: "In Review",
      assignedTo: 4,
    },
    {
      name: "Real Estate website Design",
      priority: "Low",
      startDate: "28/04/2025",
      dueDate: "26/05/2025",
      progress: 30,
      status: "Reviewed",
      assignedTo: 3,
    },
    {
      name: "Matex AI Meting assistance",
      priority: "Medium",
      startDate: "27/04/2025",
      dueDate: "25/05/2025",
      progress: 40,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Triply AI Travel planner UI Design",
      priority: "High",
      startDate: "27/04/2025",
      dueDate: "24/05/2025",
      progress: 30,
      status: "Reviewed",
      assignedTo: 3,
    },
    {
      name: "Tumo Productive Landing page",
      priority: "Low",
      startDate: "26/04/2025",
      dueDate: "23/04/2025",
      progress: 20,
      status: "In Review",
      assignedTo: 3,
    },
  ],
  inProgress: [
    {
      name: "Taskito- Task management web",
      priority: "High",
      startDate: "26/04/2025",
      dueDate: "26/05/2025",
      progress: 70,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Cliency client management web",
      priority: "High",
      startDate: "25/04/2025",
      dueDate: "25/05/2025",
      progress: 45,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Cognify - AI hiring management",
      priority: "High",
      startDate: "24/04/2025",
      dueDate: "24/05/2025",
      progress: 60,
      status: "In Review",
      assignedTo: 3,
    },
    {
      name: "Orbit - web3 website design",
      priority: "High",
      startDate: "23/04/2025",
      dueDate: "24/05/2025",
      progress: 40,
      status: "In Review",
      assignedTo: 3,
    },
  ],
};

const PriorityTag = ({ level }) => {
  // You can customize icon per level if needed
  const iconSrc = "assets/cflag.svg"; // Same icon for all here

  return (
    <span className={`priority-tag ${level.toLowerCase()}`}>
      <img src={iconSrc} alt={`${level} icon`} className="priority-icon" />
      {level}
    </span>
  );
};

const AvatarGroup = ({ count }) => {
  return (
    <div className="avatar-group">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="avatar"></div>
      ))}
    </div>
  );
};

const ProgressBar = ({ percent }) => {
  const radius = 16;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress fill smoothly
    let animationFrameId;
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      // Duration 800ms for animation
      const duration = 800;
      const progressPercent = Math.min(
        (elapsed / duration) * percent,
        percent
      );
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
    <div className="progress-circle-wrapper">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#E6E6E6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#722ED1"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-ring"
        />
      </svg>
      <div className="progress-circle-text">{Math.round(progress)}%</div>
    </div>
  );
};

const TaskRow = ({ task }) => (
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>{task.name}</td>
    <td>
      <PriorityTag level={task.priority} />
    </td>
    <td>{task.startDate}</td>
    <td>
      <AvatarGroup count={task.assignedTo} />
    </td>
    <td>{task.dueDate}</td>
    <td className="status-cell">
      <img
        src={"assets/Stop.svg"}
        alt="status icon"
        className="status-icon"
      />
      <span className="status-dot">{task.status}</span>
    </td>

    <td>
      <ProgressBar percent={task.progress} />
    </td>
    <td>
      <FiMoreVertical className="icon-more" />
    </td>
  </tr>
);

const TaskSection = ({ title, data }) => {
  return (
    <div className="section">
      <div className="section-title">
        <img
          src={title === "To do" ? "assets/todo.svg" : "assets/inprogress.svg"}
          alt={`${title} icon`}
          className="section-dot-img"
        />
        {title}
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Started Date</th>
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
};

const ListContent = () => {
  return (
    <div className="list-container">
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

      <TaskSection title="To do" data={taskData.todo} />
      <TaskSection title="In Progress" data={taskData.inProgress} />
    </div>
  );
};

export default ListContent;
