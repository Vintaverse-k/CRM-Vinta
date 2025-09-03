import React, { useState } from "react";
import "../Tabs/TaskForm.css"; 

const TaskAssignForm = ({ onCreateTask }) => {
  const [task, setTask] = useState({
    name: "",
    priority: "Low",
    due: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCreateClick = () => {
    if (!task.name.trim()) {
      alert("Enter task name");
      return;
    }

    const newTask = { ...task, id: Date.now() };
    if (onCreateTask) onCreateTask(newTask, "assigned");
    setTask({ name: "", priority: "Low", due: "" });
  };

  return (
    <div className="task-assign-container">
      <h3>Create Task</h3>

      <div className="task-assign-group">
        <label>Task Name</label>
        <input type="text" name="name" value={task.name} onChange={handleChange} placeholder="Task Name" />
      </div>

      <div className="task-assign-group">
        <label>Priority</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="task-assign-group">
        <label>Due Date</label>
        <input type="date" name="due" value={task.due} onChange={handleChange} />
      </div>

      <div className="task-assign-btn-container">
        <button onClick={handleCreateClick}>+ Add Task</button>
      </div>
    </div>
  );
};

export default TaskAssignForm;
