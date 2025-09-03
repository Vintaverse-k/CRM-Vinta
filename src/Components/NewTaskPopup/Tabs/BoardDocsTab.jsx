import React, { useState } from "react";
import "../Tabs/BoardDocs.css"; 

const BoardDocsTab = ({ onCreateTask }) => {
  const [task, setTask] = useState({
    title: "",
    desc: "",
    status: "To Do",
    priority: "Low",
    avatars: [],
    comments: 0,
    files: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAvatarUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    setTask({ ...task, avatars: files });
  };

  const handleCreateClick = () => {
    if (!task.title.trim()) {
      alert("Please enter task title");
      return;
    }

    let category = task.status === "To Do" ? "To Do" : task.status === "In Progress" ? "In Progress" : task.status;

    const newTask = { ...task, id: Date.now(), category };
    onCreateTask(newTask, "board");

    setTask({
      title: "",
      desc: "",
      status: "To Do",
      priority: "Low",
      avatars: [],
      comments: 0,
      files: 0,
    });
  };

  return (
    <div className="board-task-container">
      <h3>Create New Task</h3>

      <div className="board-task-group">
        <label>Title</label>
        <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" />
      </div>

      <div className="board-task-group">
        <label>Description</label>
        <textarea name="desc" value={task.desc} onChange={handleChange} placeholder="Task Description" />
      </div>

      <div className="board-task-group">
        <label>Status</label>
        <select name="status" value={task.status} onChange={handleChange}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>In Reviewed</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="board-task-group">
        <label>Priority</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="board-task-group">
        <label>Avatars (Upload Images)</label>
        <input type="file" multiple onChange={handleAvatarUpload} />
        <div className="avatar-preview">
          {task.avatars.map((avatar, i) => (
            <img key={i} src={avatar} alt="avatar" className="avatar-img" />
          ))}
        </div>
      </div>

      <div className="board-task-group">
        <label>Comments</label>
        <input type="number" name="comments" value={task.comments} onChange={handleChange} min="0" />
      </div>

      <div className="board-task-group">
        <label>Files</label>
        <input type="number" name="files" value={task.files} onChange={handleChange} min="0" />
      </div>

      <button className="board-task-submit-btn" onClick={handleCreateClick}>
        Submit Task
      </button>
    </div>
  );
};

export default BoardDocsTab;
