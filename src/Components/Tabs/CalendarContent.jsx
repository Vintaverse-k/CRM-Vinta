import React, { useState } from "react";
import "../../styles/Tabs/Calendar.css";

const CalendarContent = () => {
  const [view, setView] = useState("Week");

  const rows = 4;
  const cols = 7;

  const meetings = [
    { row: 0, col: 0, title: "Develop API End...", time: "9:00 - 9:30 AM", joiners: 3, priority: "High", agenda: "Backend Developer" },
    { row: 0, col: 3, title: "Develop API End...", time: "9:00 - 9:30 AM", joiners: 2, priority: "High", agenda: "Backend Developer" },
    { row: 0, col: 5, title: "Ensure Responsi...", time: "10 AM - 11 AM", joiners: 3, priority: "Medium", agenda: "Product Design" },
    { row: 0, col: 6, title: "Develop API End...", time: "9:00 - 9:30 AM", joiners: 2, priority: "High", agenda: "Backend Developer" },
    { row: 1, col: 0, title: "Implement UI C...", time: "10 AM - 11 AM", joiners: 3, priority: "Medium", agenda: "Product Design" },
    { row: 1, col: 1, title: "Develop API End...", time: "9:00 - 9:30 AM", joiners: 2, priority: "High", agenda: "Backend Developer" },
    { row: 1, col: 4, title: "Develop API End...", time: "9:00 - 9:30 AM", joiners: 3, priority: "High", agenda: "Backend Developer" },
    { row: 1, col: 6, title: "Implement UI C...", time: "10 AM - 11 AM", joiners: 2, priority: "Medium", agenda: "Product Design" },
    { row: 2, col: 2, title: "Ensure Responsi...", time: "10 AM - 11 AM", joiners: 2, priority: "Medium", agenda: "Product Design" },
    { row: 2, col: 5, title: "Implement UI C...", time: "10 AM - 11 AM", joiners: 2, priority: "Medium", agenda: "Product Design" },
    { row: 3, col: 0, title: "Ensure Responsi...", time: "10 AM - 11 AM", joiners: 3, priority: "Medium", agenda: "Product Design" },
    { row: 3, col: 4, title: "Ensure Responsi...", time: "10 AM - 11 AM", joiners: 3, priority: "Medium", agenda: "Product Design" },
    { row: 3, col: 6, title: "Ensure Responsi...", time: "10 AM - 11 AM", joiners: 3, priority: "Medium", agenda: "Product Design" },
  ];

  const getMeetingForCell = (row, col) => {
    return meetings.find(m => m.row === row && m.col === col);
  };

  return (
    <div className="dashboard__section">
      <div className="task__bar">
        <div className="task__details__container">
          {/* Optional */}
        </div>

        <div className="task__btns">
  <div className="view__switcher">
    {["Day", "Week", "Month"].map(item => (
      <button
        key={item}
        className={`view__btn ${view === item ? "active" : ""}`}
        onClick={() => setView(item)}
      >
        {item}
      </button>
    ))}
  </div>

  <div className="task__actions">
    <div className="share__task__btn">
      <img src="assets/share.svg" alt="share" />
      <div className="btn__text">filter</div>
    </div>

    <button className="add__task__btn">
      <img src="assets/3dot.svg" alt="add" />
      <div className="btn__text"></div>
    </button>
  </div>
</div>
</div>


      <div className="calendar__section">
        <div className="calendar__days__container">
          <div className="backward__arrow rounded">
            <img src="assets/Left.svg" alt="left" />
          </div>
          <div className="backward__arrow">
            <img src="assets/Right.svg" alt="right" />
          </div>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, i) => (
            <div key={i} className={`sunday ${i === 0 ? "item1" : ""} ${i === 6 ? "rounded-day" : ""}`}>
              {day}
            </div>
          ))}
        </div>

        <div className="main__container">
          <div className="calendar__sidebar1">
            {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"].map((time, i) => (
              <div key={i} className="time__list">{time}</div>
            ))}
          </div>

          <div className="calendar__main__content">
            {Array.from({ length: rows * cols }).map((_, index) => {
              const rowIndex = Math.floor(index / cols);
              const colIndex = index % cols;
              const meeting = getMeetingForCell(rowIndex, colIndex);

              return (
                <div className="meeting__holder" key={index}>
                  {meeting && (
                    <div className="meeting__card">
                      <div className="meeting__title">{meeting.title}</div>
                      <div className="meeting__time">
                        <img src="assets/cflag.svg" alt="flag" /> {meeting.time}
                      </div>
                      <div className="meeting__joiners">
                        {Array.from({ length: meeting.joiners }).map((_, i) => (
                          <img key={i} src="assets/img1.png" alt={`user-${i}`} className="joiner__avatar" />
                        ))}
                        <div className="joiner__more">+</div>
                      </div>
                      <div className={`meeting__priority ${meeting.priority.toLowerCase()}`}>
                        {meeting.priority}
                      </div>
                      <div className="meeting__agenda">{meeting.agenda}</div>
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

export default CalendarContent;
