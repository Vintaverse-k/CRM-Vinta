import React, { useState } from "react";
import "../Tabs/TaskTab.css";

const TaskTab = ({ onCreateTask }) => {
  const [task, setTask] = useState({
    name: "",
    priority: "Low",
    startDate: "",
    dueDate: "",
    progress: 0,
    category: "To Do",
    status: "In Review",
    assignedImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setTask({ ...task, assignedImage: imageURL });
    }
  };

  const handleCreateClick = () => {
    if (!task.name.trim()) {
      alert("Please enter task name");
      return;
    }

    const newTask = { ...task, id: Date.now(), progress: Number(task.progress) };
    onCreateTask(newTask, "list");
  };

  return (
    <div className="task-tabs-container">
      <div className="task-tabs-group">
        <input
          type="text"
          placeholder="Task Name"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
      </div>

      <div className="task-tabs-group">
        <label>Priority</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="task-tabs-group">
        <label>Start Date</label>
        <input type="date" name="startDate" value={task.startDate} onChange={handleChange} />
      </div>

      <div className="task-tabs-group">
        <label>Due Date</label>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      </div>

      <div className="task-tabs-group">
        <label>Category</label>
        <select name="category" value={task.category} onChange={handleChange}>
          <option>To Do</option>
          <option>In Progress</option>
        </select>
      </div>

      <div className="task-tabs-group">
        <label>Status</label>
        <select name="status" value={task.status} onChange={handleChange}>
          <option>In Review</option>
          <option>Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="task-tabs-group">
        <label>Progress (%)</label>
        <input
          type="number"
          name="progress"
          min="0"
          max="100"
          value={task.progress}
          onChange={handleChange}
        />
      </div>

      <div className="task-tabs-group">
        <label>Assigned User Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {task.assignedImage && (
          <div className="assigned-image-preview">
            <img src={task.assignedImage} alt="Assigned User" className="assigned-image" />
          </div>
        )}
      </div>

      <div className="task-tabs-bottom-btn">
        <button onClick={handleCreateClick}>+ Create Task</button>
      </div>
    </div>
  );
};

export default TaskTab;
