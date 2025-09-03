import React, { useState } from "react";

const OverViewForm = ({ onCreateTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    priority: "Low",
    startDate: "",
    dueDate: "",
    category: "To Do",
    status: "In Review",
    progress: 0,
    assignedImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, assignedImage: URL.createObjectURL(file) });
  };

  const handleSubmit = () => {
    onCreateTask({ ...formData, id: Date.now(), progress: Number(formData.progress) }, "list");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add Task from Dashboard</h3>
      <input name="name" placeholder="Task Name" value={formData.name} onChange={handleChange} />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option>To Do</option><option>In Progress</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>In Review</option><option>Progress</option><option>Completed</option>
      </select>
      <input type="number" name="progress" min="0" max="100" value={formData.progress} onChange={handleChange} />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>+ Add Task</button>
    </div>
  );
};

export default OverViewForm;
