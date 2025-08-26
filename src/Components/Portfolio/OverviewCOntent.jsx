import React, { useState, useEffect } from "react";
import "../../styles/Portfolio/Portfolio.css";
import { FiMoreVertical } from "react-icons/fi";

const taskData = {
  todo: [
    {
      name: "Omail - Email Marketing website Design",
      icon: "assets/Omail.svg",
      startDate: "28/04/2025",
      dueDate: "23/05/2025",
      progress: 90,
      status: "On Track",
      assignedTo: 4,
    },
    {
      name: "Zepto - Fintech Website Design",
      icon: "assets/zepto.svg",
      startDate: "28/04/2025",
      dueDate: "26/05/2025",
      progress: 30,
      status: "At Risk",
      assignedTo: 3,
    },
    {
      name: "Cognify - AI Hiring Website Design",
      icon: "assets/cognify.svg",
      startDate: "27/04/2025",
      dueDate: "25/05/2025",
      progress: 40,
      status: "On Track",
      assignedTo: 3,
    },
    {
      name: "Dyser - Fintech Webapp Design",
      icon: "assets/dyser.svg",
      startDate: "27/04/2025",
      dueDate: "24/05/2025",
      progress: 30,
      status: "On Track",
      assignedTo: 3,
    },
  ],
  inProgress: [
    {
      name: "Cliency - Business Management website design",
      icon: "assets/cliency.svg",
      startDate: "26/04/2025",
      dueDate: "23/04/2025",
      progress: 20,
      status: "On Hold",
      assignedTo: 2,
    },
    {
      name: "Orbit - web3 website design",
      icon: "assets/orbit.svg",
      startDate: "25/04/2025",
      dueDate: "25/05/2025",
      progress: 60,
      status: "On Track",
      assignedTo: 3,
    },
    {
      name: "Orbit - web3 website design",
      icon: "assets/orbit.svg",
      startDate: "25/04/2025",
      dueDate: "25/05/2025",
      progress: 60,
      status: "On Track",
      assignedTo: 3,
    },
    {
      name: "Orbit - web3 website design",
      icon: "assets/orbit.svg",
      startDate: "25/04/2025",
      dueDate: "25/05/2025",
      progress: 60,
      status: "On Track",
      assignedTo: 3,
    },
  ],
};

const PriorityTag = ({ level }) => {
  const iconSrc =
    level === "High"
      ? "assets/high.svg"
      : level === "Medium"
      ? "assets/medium.svg"
      : "assets/low.svg";

  return (
    <span className={`priority-tag ${level.toLowerCase()}`}>
      <img src={iconSrc} alt={`${level} icon`} className="priority-icon" />
      {level}
    </span>
  );
};

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
    <div className="progress-wrapper">
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
      <span className="progress-label">Completed</span>
    </div>
  );
};

const StatusTag = ({ status }) => {
  const getColor = (status) => {
    switch (status) {
      case "On Track":
        return "#fa541c";
      case "At Risk":
        return "#faad14";
      case "On Hold":
        return "#722ed1";
      default:
        return "#8c8c8c";
    }
  };

  return (
    <div className="status-cell">
      <span
        className="status-dot"
        style={{ color: getColor(status), fontWeight: 600 }}
      >
        ●
      </span>
      <span>{status}</span>
    </div>
  );
};

const TaskRow = ({ task }) => {
  const avatarData = {
    1: { img: "assets/img1.png", name: "Alice" },
    2: { img: "assets/img2.png", name: "Bob" },
    3: { img: "assets/img1.png", name: "Charlie" },
    4: { img: "assets/img2.png", name: "David" },
  };

  const { img, name } = avatarData[task.assignedTo] || {
    img: "assets/img1.png",
    name: "User",
  };

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={task.icon}
            alt="project icon"
            style={{ width: "20px", height: "20px" }}
          />
          {task.name}
        </div>
      </td>
      <td>
        
        <StatusTag status={task.status} />
      </td>
      <td>
        <ProgressBar percent={task.progress} />
      </td>
      <td>{task.dueDate}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={img}
            alt={name}
            style={{ width: "24px", height: "24px", borderRadius: "50%" }}
          />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <FiMoreVertical className="icon-more" />
      </td>
    </tr>
  );
};

const TaskSection = ({ title, data }) => {
  return (
    <div className="sections-01">
      <div className="section-titles-01">
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
            <th>
              Task Name <span style={{ fontSize: "12px" }}>↓</span>
            </th>
            <th>Priority</th>
            <th>Task Completed</th>
            <th>Due Date</th>
            <th>Assigned to</th>
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
  const repeatedTodoTasks = [...taskData.todo, ...taskData.todo]; 

  return (
    <div class="portfolio-task-container">
  <div class="portfolio-task-header">
    <div class="portfolio-task-controls-left">
      <input
        type="text"
        placeholder="Search Task..."
        class="portfolio-task-search-input"
      />
    </div>
    <div class="portfolio-task-actions-right">
      <button class="portfolio-task-project-button">All Projects</button>
      <button class="portfolio-task-view-toggle">
        <img src="assets/filter.svg" alt="icon" class="portfolio-task-view-icon" />
      </button>
    </div>
  </div>


      <TaskSection title="To do" data={repeatedTodoTasks} />
      {/* <TaskSection title="In Progress" data={taskData.inProgress} /> */}
    </div>
  );
};

export default ListContent;
