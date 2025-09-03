import React, { useState, useEffect } from "react";
import "../../styles/Tabs/ListContent.css";
import { FiMoreVertical } from "react-icons/fi";

const PriorityTag = ({ level }) => {
  const iconSrc = "assets/cflag.svg";
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

  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percent) {
        setAnimatedPercent(start);
        requestAnimationFrame(step);
      }
    };
    step();
  }, [percent]);

  const offset = circumference - (animatedPercent / 100) * circumference;

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
      <div className="progress-circle-text">{animatedPercent}%</div>
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

    {/* Assigned User Image */}
    <td>
      {task.assignedImage ? (
        <img
          src={task.assignedImage}
          alt="Assigned User"
          width={40}
          height={40}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      ) : (
        <span>No User</span>
      )}
    </td>

    <td>{task.dueDate}</td>
    <td className="status-cell">
      <img src="assets/Stop.svg" alt="status icon" className="status-icon" />
      <span className="status-text">{task.status}</span>
    </td>
    <td>
      <ProgressBar percent={task.progress} />
    </td>
    <td>
      <FiMoreVertical className="icon-more" />
    </td>
  </tr>
);

const TaskSection = ({ title, data }) => (
  <div className="section">
    <div className="section-titles01">
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

const ListContent = ({ tasks }) => {
  return (
    <div className="list-container-09">
      <div className="dashboard-header">
        <div className="header-controls-group">
          <button className="header-btn-style">
            <img src="assets/group.svg" alt="group" /> Group: Status
          </button>
          <button className="header-btn-style">
            <img src="assets/colum.svg" alt="columns" /> Columns
          </button>
        </div>
        <div className="header-actions-group">
          <input
            type="text"
            className="header-search-field"
            placeholder="Search Task..."
          />
          <button className="view-toggle-button">
            <img src="assets/listbar.svg" alt="list" />
          </button>
        </div>
      </div>

      <TaskSection title="To do" data={tasks.todo} />
      <TaskSection title="In Progress" data={tasks.inProgress} />
    </div>
  );
};

export default ListContent;
