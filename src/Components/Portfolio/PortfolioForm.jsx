import React, { useState } from "react";
import "../Portfolio/PortfolioForm.css";

const PortfolioForm = ({ onClose, onCreateTask }) => {
  const [task, setTask] = useState({
    name: "",
    icon: null,
    dueDate: "",
    progress: 0,
    status: "On Track",
    ownerName: "",
    ownerImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setTask((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCreateTask) onCreateTask(task);
    onClose();
  };

  return (
    <div className="New-Task-Popup">
      <div className="New-Task-Popup-container right-slide">
        <div className="New-Task-Popup-header">
          <h2>Create New Task</h2>
          <button className="New-Task-Popup-close-btn" onClick={onClose}>
            x
          </button>
        </div>

        <div className="New-Task-Popup-tab-content">
          <form onSubmit={handleSubmit} className="popup-form">
            <label>Task Name</label>
            <input
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
              placeholder="Enter task name"
              required
            />

            <label>Task Icon (Upload)</label>
            <input
              type="file"
              name="icon"
              accept="image/*"
              onChange={handleChange}
            />
            {task.icon && (
              <img
                src={URL.createObjectURL(task.icon)}
                alt="icon preview"
                className="icon-preview"
              />
            )}

            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              required
            />

            <label>Progress (%)</label>
            <input
              type="number"
              name="progress"
              value={task.progress}
              onChange={handleChange}
              min="0"
              max="100"
            />

            <label>Status</label>
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="On Track">On Track</option>
              <option value="At Risk">At Risk</option>
              <option value="On Hold">On Hold</option>
            </select>

            <label>Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={task.ownerName}
              onChange={handleChange}
              placeholder="Enter owner name"
              required
            />

            <label>Owner Image (Upload)</label>
            <input
              type="file"
              name="ownerImage"
              accept="image/*"
              onChange={handleChange}
            />
            {task.ownerImage && (
              <img
                src={URL.createObjectURL(task.ownerImage)}
                alt="owner preview"
                className="owner-preview"
              />
            )}

            <button type="submit" className="submit-btn">
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
