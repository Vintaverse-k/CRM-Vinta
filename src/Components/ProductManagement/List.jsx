import React, { useState, useEffect } from "react";
import "../../styles/Productsmanage/Lists.css";
import { FiMoreVertical } from "react-icons/fi";

const userImages = {
  "Varun walia": "/assets/img1.png",
  "Leisha": "/assets/img2.png",
  "Manoj Kumar": "/assets/img1.png",
  "Shubham": "/assets/img1.png",
  "Harshit": "/assets/img1.png",
};

const ProgressCircle = ({ value }) => {
  const radius = 20; 
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [progress, setProgress] = useState(0);

  // Animate filling circle
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= value) {
        setProgress(start);
        requestAnimationFrame(step);
      }
    };
    step();
  }, [value]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <svg height={radius * 2} width={radius * 2}>
        {/* Background Circle */}
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Circle */}
        <circle
          stroke=" #7c3aed"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.3s linear" }}
        />
        {/* Percentage inside circle */}
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          fontSize="9"
          fill="#333"
        >
          {progress}%
        </text>
      </svg>
      {/* Text beside circle */}
      <span style={{ fontSize: "12px", color: "#555" }}>
        {progress}% completed
      </span>
    </div>
  );
};

const PriorityTag = ({ level, section }) => {
  const flagIcons = {
    Low: "assets/yellowflag.svg",
    Medium: "assets/yellowflag.svg",
    High: "assets/flag.svg",
  };

  const iconSrc = flagIcons[level] || "assets/flag-default.svg";
  let className = `product-manage-priority-tag ${level.toLowerCase()}`;

  if (level === "High") {
    if (section === "To do") className += " high-todo";
    else if (section === "In Progress") className += " high-inprogress";
    else if (section === "Done") className += " high-done";
  }

  return (
    <span className={className}>
      <img
        src={iconSrc}
        alt={`${level} icon`}
        className="product-manage-priority-icon"
      />
      {level}
    </span>
  );
};

const AvatarGroup = ({ names }) => (
  <div className="product-manage-assigned-group">
    {names.map((name, i) => (
      <div
        key={i}
        className="product-manage-assigned-item"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <img
          src={userImages[name] || "/assets/default.jpg"}
          alt={`User ${name}`}
          className="product-manage-assigned-avatar"
        />
        <span className="product-manage-assigned-name">{name}</span>
      </div>
    ))}
  </div>
);

const TaskRow = ({ task, section }) => (
  <tr className="product-manage-table-row">
    <td>
      <input type="checkbox" className="product-manage-checkbox" />
    </td>
    <td>{task.name}</td>
    <td>
      <PriorityTag level={task.priority} section={section} />
    </td>
    <td>
      <AvatarGroup names={[task.assignedTo]} />
    </td>
    <td>{task.dueDate}</td>
    <td className="product-manage-status-cell">
      <img
        src={"assets/Stop.svg"}
        alt="status icon"
        className="product-manage-status-icon"
      />
      <span className="product-manage-status-text">{task.status}</span>
    </td>
    <td>
      <ProgressCircle value={task.progress} />
    </td>
    <td>
      <FiMoreVertical className="product-manage-more-icon" />
    </td>
  </tr>
);

const sectionIcons = {
  "To do": "assets/bluestodot.svg",
  "In Progress": "assets/inprogress.svg",
  "Done": "assets/greendot.svg",
};

const TaskSection = ({ title, data }) => {
  const rightImageSrc = "assets/plussign.svg";

  return (
    <div className="product-manage-section">
      <div
        className="product-manage-section-title"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={sectionIcons[title] || "assets/defaultdot.svg"}
            alt={`${title} icon`}
            className="product-manage-section-icon"
          />
          <span>{title}</span>
        </div>
        <img
          src={rightImageSrc}
          alt="Right side icon"
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
        />
      </div>

      <table className="product-manage-table">
        <thead className="product-manage-table-header">
          <tr>
            <th>
              <input type="checkbox" className="product-manage-checkbox" />
            </th>
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
            <TaskRow key={i} task={task} section={title} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ListContent = ({ taskData }) => (
  <div className="list-product-manage-container">
    <TaskSection title="To do" data={taskData.todo} />
    <TaskSection title="In Progress" data={taskData.inProgress} />
    <TaskSection title="Done" data={taskData.done} />
  </div>
);

export default ListContent;
