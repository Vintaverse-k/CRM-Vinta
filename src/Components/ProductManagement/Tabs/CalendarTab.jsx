import React, { useState } from "react";
import "../../ProductManagement/Tabs/CalendarTab.css"
const CalendarTab = ({ onCreateTask }) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"];

  const [formData, setFormData] = useState({
    title: "",
    day: days[0],
    time: times[0],
    priority: "Low",
    joiners: 1,
    agenda: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    const row = times.indexOf(formData.time);
    const col = days.indexOf(formData.day);

    const newTask = {
      ...formData,
      joiners: parseInt(formData.joiners, 10),
      row,
      col,
      imageUrl: formData.image ? URL.createObjectURL(formData.image) : null, // Generate temporary URL
    };

    if (onCreateTask) onCreateTask(newTask, "Calendar");

    // Reset form
    setFormData({
      title: "",
      day: days[0],
      time: times[0],
      priority: "Low",
      joiners: 1,
      agenda: "",
      image: null,
    });
  };

  return (
    <form className="calendar-tab-task-form" onSubmit={handleSubmit}>
      <h3>New Calendar Task</h3>

      <div className="calendar-tab-task-group">
        <label>Task Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="calendar-tab-task-group">
        <label>Day</label>
        <select name="day" value={formData.day} onChange={handleChange}>
          {days.map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select>
      </div>

      <div className="calendar-tab-task-group">
        <label>Time</label>
        <select name="time" value={formData.time} onChange={handleChange}>
          {times.map((t, i) => <option key={i} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="calendar-tab-task-group">
        <label>Priority</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="calendar-tab-task-group">
        <label>Joiners</label>
        <input
          type="number"
          name="joiners"
          min="1"
          value={formData.joiners}
          onChange={handleChange}
        />
      </div>

      <div className="calendar-tab-task-group">
        <label>Agenda</label>
        <input
          type="text"
          name="agenda"
          value={formData.agenda}
          onChange={handleChange}
          placeholder="Enter agenda"
        />
      </div>

      <div className="calendar-tab-task-group">
        <label>Upload Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <div className="calendar-tab-task-btn-container">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default CalendarTab;
