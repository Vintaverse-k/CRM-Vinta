import React, { useState } from "react";
import "../../ProductManagement/Tabs/BoardTab.css";

const BoardTab = ({ onCreateTask, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    status: "To do",
    priority: "Low",
    avatar: null,
    comments: 0,
    files: 0,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask({
      title: formData.title,
      desc: formData.desc,
      status: formData.status,
      priority: formData.priority,
      avatars: formData.avatar ? [URL.createObjectURL(formData.avatar)] : [],
      comments: formData.comments,
      files: formData.files,
    }, "Board");
    onClose();
  };

  return (
    <div className="board-tab-manage-container">
      <h3>Board New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="board-tab-manage-group">
          <label>Task Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="board-tab-manage-group">
          <label>Description</label>
          <input type="text" name="desc" value={formData.desc} onChange={handleChange} required />
        </div>

        <div className="board-tab-manage-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="To do">To do</option>
            <option value="In Progress">In Progress</option>
            <option value="In Reviewed">In Reviewed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="board-tab-manage-group">
          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="board-tab-manage-group">
          <label>Assign To (Upload Image)</label>
          <input type="file" name="avatar" accept="image/*" onChange={handleChange} />
        </div>

        <div className="board-tab-manage-group">
          <label>Comments</label>
          <input type="number" name="comments" value={formData.comments} onChange={handleChange} />
        </div>

        <div className="board-tab-manage-group">
          <label>Files</label>
          <input type="number" name="files" value={formData.files} onChange={handleChange} />
        </div>

        <div className="board-tab-manage-btn-container">
          <button type="submit">Create Task</button>
          <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardTab;
