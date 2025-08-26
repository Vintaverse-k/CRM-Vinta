import React, { useState, useEffect } from "react";
import "../../styles/Tabs/ListContent.css";
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
    {
      name: "Triply AI Travel planner UI Design",
      priority: "High",
      startDate: "Shubham",
      dueDate: "24/05/2025",
      progress: 30,
      status: "Reviewed",
      assignedTo: 3,
    },
    {
      name: "Tumo Productive Landing page",
      priority: "Low",
      startDate: "Harshit",
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
    <span className={`priority-tag ${level.toLowerCase()}`}>
      <img src={iconSrc} alt={`${level} icon`} className="priority-icon" />
      {level}
    </span>
  );
};

const AvatarGroup = ({ count, names }) => {
  return (
    <div className="avatar-group">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="avatar-item"
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <img
            src={userImages[names[i]] || "/assets/default.jpg"}
            alt={`User ${names[i]}`}
            className="avatar-28"
          />
          <span style={{ fontSize: "14px", color: "#625F6E" }}>
            {names[i]}
          </span>
        </div>
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
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        className="progress-circle-wrapper"
        style={{
          position: "relative",
          width: radius * 2,
          height: radius * 2,
        }}
      >
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

        {/* Text inside the circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#722ED1",
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* Text next to the circle */}
      <span style={{ fontSize: "14px", color: "#625F6E" }}>
        {Math.round(progress)}% Completed
      </span>
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
    <td>
      <AvatarGroup count={1} names={[task.startDate]} />
    </td>
    <td>{task.dueDate}</td>
    <td className="status-cell">
      <img
        src={"assets/Stop.svg"}
        alt="status icon"
        className="status-icon-01"
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
      <div className="section-titles01">
        <img
          src={title === "To do" ? "assets/inprogress.svg" : "assets/inprogress.svg"}
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
      <TaskSection title="To do" data={taskData.todo} />
      <TaskSection title="In Progress" data={taskData.inProgress} />
    </div>
  );
};

export default ListContent;
