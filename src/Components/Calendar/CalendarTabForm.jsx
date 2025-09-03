import React, { useState } from "react";
import "../Calendar/CalendarTabForm.css"; 

const CalendarsTabForm = ({ onCreateTask }) => {
  const [task, setTask] = useState({
    title: "",
    time: "9 AM",
    joiners: 1,
    priority: "Low",
    agenda: "",
    day: "Sunday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCreateClick = () => {
    if (!task.title.trim()) {
      alert("Please enter task title");
      return;
    }

    const newTask = { ...task, id: Date.now(), joiners: Number(task.joiners) };
    onCreateTask(newTask, "calendar");

    setTask({
      title: "",
      time: "9 AM",
      joiners: 1,
      priority: "Low",
      agenda: "",
      day: "Sunday",
    });
  };

  const timeSlots = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return (
    <div className="calendars-tab-form-container">
      <h3>Create Calendar Task</h3>

      <div className="calendars-tab-form-group">
        <label>Title</label>
        <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" />
      </div>

      <div className="calendars-tab-form-group">
        <label>Day</label>
        <select name="day" value={task.day} onChange={handleChange}>
          {days.map((day) => <option key={day} value={day}>{day}</option>)}
        </select>
      </div>

      <div className="calendars-tab-form-group">
        <label>Time</label>
        <select name="time" value={task.time} onChange={handleChange}>
          {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="calendars-tab-form-group">
        <label>Joiners</label>
        <input type="number" name="joiners" value={task.joiners} onChange={handleChange} min="1" />
      </div>

      <div className="calendars-tab-form-group">
        <label>Priority</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="calendars-tab-form-group">
        <label>Agenda</label>
        <input type="text" name="agenda" value={task.agenda} onChange={handleChange} placeholder="Task Agenda" />
      </div>

      <div className="calendars-tab-form-btn">
        <button onClick={handleCreateClick}>+ Create Task</button>
      </div>
    </div>
  );
};

export default CalendarsTabForm;
