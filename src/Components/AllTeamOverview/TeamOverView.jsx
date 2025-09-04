import React from "react";
import "../../styles/Allteam/AllTeam.css";

const TaskRow = ({ task }) => (
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>
      <div className="task-row-team-container">
        <img src={task.icon} alt="team icon" className="team-icon" />
        <div className="team-text-container">
          <div className="team-name-row">{task.name}</div>
          <div className="member-count-text">
            {task.assignedTo} Member{task.assignedTo > 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </td>
    <td>
      <div className="member-images-container">
        {task.memberImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Member ${idx + 1}`}
            className="member-image"
            style={{ marginLeft: idx === 0 ? 0 : undefined }}
          />
        ))}
      </div>
    </td>
    <td>{task.startDate}</td>
    <td>{task.dueDate}</td>
  </tr>
);

const TeamOverview = ({ tasks }) => {
  return (
    <div className="allteam-list-container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              Team Name <span style={{ fontSize: "12px" }}>↓</span>
            </th>
            <th>Members</th>
            <th>Created Date</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskRow key={index} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamOverview;
