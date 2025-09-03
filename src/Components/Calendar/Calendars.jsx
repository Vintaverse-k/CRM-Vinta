import React, { useState } from "react";
import "../../styles/Calendartab.css";
import CalendarTabForm from "../Calendar/CalendarTabForm";

const Calendar = () => {
  const [view, setView] = useState("Week");
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const rows = 4;
  const cols = 7;

  const dayIndex = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const timeIndex = {
    "9 AM": 0,
    "10 AM": 1,
    "11 AM": 2,
    "12 PM": 3,
    "1 PM": 4,
    "2 PM": 5,
  };

  const handleCreateTask = (task) => {
    const row = timeIndex[task.time] ?? 0;
    const col = dayIndex[task.day] ?? 0;
    const newTask = { ...task, row, col };
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const getMeetingForCell = (row, col) => {
    return tasks.find((m) => m.row === row && m.col === col);
  };

  return (
    <div className="dashboard__section--01">
      <header className="mytask-header__01">
        <div className="mytask-header-left__01">
          <h1 className="mytask-title__01">Calendar</h1>
          <p className="mytask-subtitle__01">
            Easily schedule and manage tasks by day, week, or month.
          </p>
        </div>
        <div className="dashboard-manage-task-header-actions">
          <button className="dashboard-manage-task-btn-outline">
            <img src="assets/share.svg" alt="Share Icon" width={24} height={24} />
            Share Tasks
          </button>
          <button
            className="dashboard-manage-task-btn-primary"
            onClick={() => setShowForm(true)}
          >
            + New Task
          </button>
        </div>
      </header>

      {/* 🔹 Slide Drawer Popup */}
      {showForm && (
        <div className="calendar-popup-overlay" onClick={() => setShowForm(false)}>
          <div
            className="calendar-popup-container right-slide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="calendar-popup-header">
              <h2>New Calendar Task</h2>
              <button
                className="calendar-popup-close-btn"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <div className="calendar-popup-content">
              <CalendarTabForm onCreateTask={handleCreateTask} />
            </div>
          </div>
        </div>
      )}

      <div className="calendar__section--01">
        <div className="calendar__days__container--01">
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day, i) => (
            <div key={i} className="sunday--01">
              {day}
            </div>
          ))}
        </div>

        <div className="main__container--01">
          <div className="calendar__sidebar1--01">
            {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"].map(
              (time, i) => (
                <div key={i} className="time__list--01">
                  {time}
                </div>
              )
            )}
          </div>

          <div className="calendar__main__content--01">
            {Array.from({ length: rows * cols }).map((_, index) => {
              const rowIndex = Math.floor(index / cols);
              const colIndex = index % cols;
              const meeting = getMeetingForCell(rowIndex, colIndex);

              return (
                <div className="meeting__holder--01" key={index}>
                  {meeting && (
                    <div className="meeting__card--01">
                      <div className="meeting__title--01">{meeting.title}</div>
                      <div className="meeting__time--01">{meeting.time}</div>
                      <div className="meeting__joiners--01">
                        {Array.from({ length: meeting.joiners }).map((_, i) => (
                          <img
                            key={i}
                            src="assets/img1.png"
                            alt={`user-${i}`}
                            className="joiner__avatar--01"
                          />
                        ))}
                      </div>
                      <div
                        className={`meeting__priority--01 ${meeting.priority.toLowerCase()}--01`}
                      >
                        {meeting.priority}
                      </div>
                      <div className="meeting__agenda--01">
                        {meeting.agenda}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
