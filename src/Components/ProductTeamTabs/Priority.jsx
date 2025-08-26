import React, { useState } from "react";
import "../../styles/ProductTeam/Priority.css";
import { FiMoreVertical } from "react-icons/fi";

const taskData = {
  todo: [
    { name: "Omail - Email Marketing website Design", icon: "assets/Omail.svg", startDate: "28/04/2025", dueDate: "23/05/2025", progress: 90, status: "High", assignedTo: 4 },
    { name: "Zepto - Fintech Website Design", icon: "assets/zepto.svg", startDate: "28/04/2025", dueDate: "26/05/2025", progress: 30, status: "Risk", assignedTo: 3 },
    { name: "Cognify - AI Hiring Website Design", icon: "assets/cognify.svg", startDate: "27/04/2025", dueDate: "25/05/2025", progress: 40, status: "Urgent", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Zepto - Fintech Website Design", icon: "assets/zepto.svg", startDate: "28/04/2025", dueDate: "26/05/2025", progress: 30, status: "Risk", assignedTo: 3 },
    { name: "Cognify - AI Hiring Website Design", icon: "assets/cognify.svg", startDate: "27/04/2025", dueDate: "25/05/2025", progress: 40, status: "Urgent", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
    { name: "Dyser - Fintech Webapp Design", icon: "assets/dyser.svg", startDate: "27/04/2025", dueDate: "24/05/2025", progress: 30, status: "Normal", assignedTo: 3 },
  ],
};

// StatusTag Component
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

// TaskRow Component
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

// TaskSection with Pagination
const TaskSection = ({ title, data, currentPage, totalPages, onPrev, onNext }) => (
  <div className="sectionss-101">
    <div className="section-titles-01">{title}</div>
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
        {data.map((task, i) => <TaskRow key={i} task={task} />)}
      </tbody>
    </table>
    <div className="pagination-container" style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span>Page {currentPage} of {totalPages}</span>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={onPrev} disabled={currentPage === 1}>Prev</button>
        <button onClick={onNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  </div>
);

const ListContent = () => {
  const repeatedTodoTasks = [...taskData.todo]; 
  const tasksPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(repeatedTodoTasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = repeatedTodoTasks.slice(startIndex, startIndex + tasksPerPage);

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="list-container__909">
      <TaskSection
        title="To do"
        data={currentTasks}
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default ListContent;
