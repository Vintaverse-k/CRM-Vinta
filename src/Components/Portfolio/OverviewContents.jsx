import React, { useEffect, useState } from "react";
import "../../styles/Portfolio/Portfolio.css";
import { FiMoreVertical } from "react-icons/fi";

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
      if (elapsed < duration) animationFrameId = requestAnimationFrame(animate);
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
      <span className="status-dot-02" style={{ color: getColor(status), fontWeight: 600 }}>
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
    img: task.ownerImage ? URL.createObjectURL(task.ownerImage) : "assets/img1.png",
    name: task.ownerName || "User",
  };

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {task.icon && <img src={URL.createObjectURL(task.icon)} alt="icon" style={{ width: "20px", height: "20px" }} />}
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
          <img src={img} alt={name} style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
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
      <div className="portfolio-task-header">
        <div className="portfolio-task-controls-left">
          <input type="text" placeholder="Search Task..." className="portfolio-task-search-input" />
        </div>
      </div>

      <div className="section-titles-01">
        <img src="assets/todo.svg" alt={`${title} icon`} className="section-dot-img" />
        {title}
      </div>

      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Task Name <span style={{ fontSize: "12px" }}>↓</span></th>
            <th>Status</th>
            <th>Task Progress</th>
            <th>Due Date</th>
            <th>Owner</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, i) => <TaskRow key={i} task={task} />)}
        </tbody>
      </table>
    </div>
  );
};

const ListContent = ({ tasks }) => {
  return (
    <div className="portfolio-task-container">
      <TaskSection title="To do" data={tasks} />
    </div>
  );
};

export default ListContent;
