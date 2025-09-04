import React, { useState } from "react";
import "../../ProductManagement/Tabs/ListTab.css";

const ListTab = ({ onCreateTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    priority: "Low",
    assignedTo: "",
    assignedImage: null,
    dueDate: "",
    progress: 0,
    status: "To do",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "assignedImage" && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        assignedImage: URL.createObjectURL(files[0]),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.assignedTo) return;
    if (onCreateTask) {
      onCreateTask(formData, "List");
    }
    setFormData({
      name: "",
      priority: "Low",
      assignedTo: "",
      assignedImage: null,
      dueDate: "",
      progress: 0,
      status: "To do",
    });
  };

  return (
    <form className="lits-tab-manage-container" onSubmit={handleSubmit}>
      <h3>List New Task</h3>

      {/* Task Name */}
      <div className="lits-tab-manage-group">
        <label>Task Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter task name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Priority */}
      <div className="lits-tab-manage-group">
        <label>Priority</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Assigned To */}
      <div className="lits-tab-manage-group">
        <label>Assigned To</label>
        <input
          type="text"
          name="assignedTo"
          placeholder="Enter assignee name"
          value={formData.assignedTo}
          onChange={handleChange}
          required
        />
      </div>

      {/* Upload Image */}
      <div className="lits-tab-manage-group">
        <label>Upload Avatar</label>
        <input
          type="file"
          name="assignedImage"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {/* Due Date */}
      <div className="lits-tab-manage-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      {/* Progress */}
      <div className="lits-tab-manage-group">
        <label>Progress %</label>
        <input
          type="number"
          name="progress"
          placeholder="Enter progress %"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />
      </div>

      {/* Status */}
      <div className="lits-tab-manage-group">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="To do">To do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Submit */}
      <div className="lits-tab-manage-btn-container">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default ListTab;
