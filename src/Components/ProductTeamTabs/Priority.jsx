import React, { useState } from "react";
import "../../styles/ProductTeam/Priority.css";
import { FiMoreVertical } from "react-icons/fi";

const StatusTag = ({ status }) => {
  const statusMap = {
    High: { icon: "assets/highflags.svg" },
    Risk: { icon: "assets/urgentflag.svg" },
    Urgent: { icon: "assets/urgentflag.svg" },
    Normal: { icon: "assets/normalflag.svg" },
    Hold: { icon: "assets/urgentflag.svg" },
  };
  const { icon } = statusMap[status] || { icon: "assets/status-default.svg" };
  return (
    <div className="status-cell" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <img src={icon} alt={`${status} icon`} style={{ width: "16px", height: "16px" }} />
      <span style={{ fontWeight: 600 }}>{status}</span>
    </div>
  );
};

const TaskRow = ({ task }) => (
  <tr>
    <td><input type="checkbox" /></td>
    <td>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={task.icon} alt="project icon" style={{ width: "20px", height: "20px" }} />
        {task.name}
      </div>
    </td>
    <td><StatusTag status={task.status} /></td>
    <td>{task.dueDate}</td>
    <td><FiMoreVertical className="icon-more" /></td>
  </tr>
);

const Priority = ({ tasks }) => {
  const tasksPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = tasks.slice(startIndex, startIndex + tasksPerPage);

  return (
    <div className="list-container__909">
      <div className="sectionss-101">
        <div className="section-titles-01">To do</div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name <span style={{ fontSize: "12px" }}>↓</span></th>
              <th>Priority</th>
              <th>Due Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map((task, i) => <TaskRow key={i} task={task} />)}
          </tbody>
        </table>
        <div className="pagination-container" style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Page {currentPage} of {totalPages}</span>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priority;
