import React, { useState } from "react";
import "../../ProductTeamTabs/Tabs/PriorityTab.css";

const PriorityTab = ({ onAddTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    dueDate: "",
    status: "Normal",
    icon: "assets/default.svg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const iconURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        icon: iconURL,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddTask) onAddTask(formData);

    setFormData({
      name: "",
      dueDate: "",
      status: "Normal",
      icon: "assets/default.svg",
    });
  };

  return (
    <form className="priority-form-tab" onSubmit={handleSubmit}>
      <h3>Add New Task</h3>

      <div className="priority-form-group">
        <label>Task Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Task Name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="priority-form-group">
        <label>Task Icon</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {formData.icon && (
          <div className="icon-preview">
            <img src={formData.icon} alt="Task Icon Preview" />
          </div>
        )}
      </div>

      <div className="priority-form-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="priority-form-group">
        <label>Priority</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
          <option value="Risk">Risk</option>
        </select>
      </div>

      <div className="priority-form-btn-container">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default PriorityTab;
