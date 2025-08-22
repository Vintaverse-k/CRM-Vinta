import React, { useState } from "react";
import "../../styles/AllTeam/AllTeam.css";
import { FiMoreVertical } from "react-icons/fi";

const taskData = {
  todo: [
    {
      name: "Product Team",
      icon: "assets/Omail.svg",
      startDate: "28/04/2025",
      dueDate: "@Developer Team",
      progress: 90,
      status: "On Track",
      assignedTo: 4,
    },
    {
      name: "Developer Team",
      icon: "assets/zepto.svg",
      startDate: "28/04/2025",
      dueDate: "@Ui Designer Team",
      progress: 30,
      status: "At Risk",
      assignedTo: 3,
    },
    {
      name: "Hr Team",
      icon: "assets/cognify.svg",
      startDate: "27/04/2025",
      dueDate: "@Marketing Team",
      progress: 40,
      status: "On Track",
      assignedTo: 3,
    },
    {
      name: "SEO Team",
      icon: "assets/dyser.svg",
      startDate: "27/04/2025",
      dueDate: "@Web Team",
      progress: 30,
      status: "On Track",
      assignedTo: 3,
    },
    {
      name: "Product Team",
      icon: "assets/Omail.svg",
      startDate: "28/04/2025",
      dueDate: "@Developer Team",
      progress: 90,
      status: "On Track",
      assignedTo: 4,
    },
    {
      name: "Developer Team",
      icon: "assets/zepto.svg",
      startDate: "28/04/2025",
      dueDate: "@Ui Designer Team",
      progress: 30,
      status: "At Risk",
      assignedTo: 3,
    },
    {
      name: "Hr Team",
      icon: "assets/cognify.svg",
      startDate: "27/04/2025",
      dueDate: "@Marketing Team",
      progress: 40,
      status: "On Track",
      assignedTo: 3,
    },
    {
      name: "SEO Team",
      icon: "assets/dyser.svg",
      startDate: "27/04/2025",
      dueDate: "@Web Team",
      progress: 30,
      status: "On Track",
      assignedTo: 3,
    },
  ],
};

const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <div className="task-row-team-container">
          <div className="team-name-row">
            <img
              src={task.icon}
              alt="project icon"
              className="team-icon"
            />
            <span style={{ fontWeight: "bold", fontSize:"14px" }}>{task.name}</span>
          </div>
          <span className="member-count-text">
            {task.assignedTo} Member{task.assignedTo > 1 ? "s" : ""}
          </span>
        </div>
      </td>
      <td>
        <div className="member-images-container">
          {[1, 2, 3].map((id) => (
            <img
              key={id}
              src={`assets/img${id}.png`}
              alt={`Member ${id}`}
              className="member-image"
              style={{ marginLeft: id === 1 ? 0 : undefined }}
            />
          ))}
        </div>
      </td>
      <td>{task.startDate}</td>
      <td>{task.dueDate}</td>
      <td>
        <FiMoreVertical className="allteam-icon-more" />
      </td>
    </tr>
  );
};

const TaskSection = ({ title, data, currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="allteam-section">
      <div className="allteam-section-title">
        <img
          src={title === "To do" ? "assets/todo.svg" : "assets/inprogress.svg"}
          alt={`${title} icon`}
          className="allteam-section-dot-img"
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
              Team Name <span style={{ fontSize: "12px" }}>↓</span>
            </th>
            <th>Members</th>
            <th>Created Date</th>
            <th>Alias</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, i) => (
            <TaskRow key={i} task={task} />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination-container">
        <span>Page {currentPage} of {totalPages}</span>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={onPrev} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={onNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const ListContent = () => {
  const repeatedTodoTasks = [...taskData.todo, ...taskData.todo];
  const tasksPerPage = 10;
  const totalPages = Math.ceil(repeatedTodoTasks.length / tasksPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = repeatedTodoTasks.slice(startIndex, startIndex + tasksPerPage);

  return (
    <div className="allteam-list-container">
      <div className="allteam-top-bar">
        <div className="allteam-left-controls">
          <button className="allteam-btn-filter-01">Memeber <img
              src="assets/downarrow.svg"
              alt="icon"
            /></button>
          <button className="allteam-btn-filter-01">Created
            <img
              src="assets/downarrow.svg"
              alt="icon"/>
          </button>
          <button className="allteam-btn-filter-01">Creator
            <img
              src="assets/downarrow.svg"
              alt="icon"/>
          </button>
          <button className="allteam-btn-filter-01">Short
            <img
              src="assets/downarrow.svg"
              alt="icon"/>
          </button>
        </div>
        <div className="allteam-right-controls">
          <button className="allteam-btn-filter">All Projects</button>
          <button className="allteam-icon-btn">
            <img
              src="assets/listbar.svg"
              alt="icon"
              className="allteam-btn-icon"
            />
          </button>
        </div>
      </div>

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
