import React, { useState } from "react";
import "../../styles/Calendartab.css";
// import Sidebar from "../SideBar/Sidebar";

const Calendar = () => {
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
    <div className="dashboard__section--01">
      {/* <Sidebar /> */}

 <header className="mytask-header__01">
          <div className="mytask-header-left__01">
            <h1 className="mytask-title__01">Calendar</h1>
            <p className="mytask-subtitle__01">Easily schedule and manage tasks by day, week, or month.
            </p>
          </div>
          <div className="mytask-header-buttons__01">
            <button className="mytask-btn-outline__01">Share Tasks</button>
            <button className="mytask-btn-primary__01">+ New Task</button>
          </div>
        </header>




      <div className="task__bar--001">
        <div className="task__details__container--01">
          {/* Optional details */}
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


      <div className="calendar__section--01">
        <div className="calendar__days__container--01">
          <div className="backward__arrow--01 rounded--01">
            <img src="assets/Left.svg" alt="left" />
          </div>
         
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, i) => (
            <div key={i} className={`sunday--01 ${i === 0 ? "item1--01" : ""} ${i === 6 ? "rounded-day--01" : ""}`}>
              {day}
            </div>
          ))}
        </div>

        <div className="main__container--01">
          <div className="custom__left__column--01">
    {/* Yahan jo bhi content chahiye, wo daal sakte ho */}
  </div>

          <div className="calendar__sidebar1--01">
            {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"].map((time, i) => (
              <div key={i} className="time__list--01">{time}</div>
            ))}
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
                      <div className="meeting__time--01">
                        {/* <img src="assets/cflag.svg" alt="flag" /> */}
                         {meeting.time}
                      </div>
                      <div className="meeting__joiners--01">
                        {Array.from({ length: meeting.joiners }).map((_, i) => (
                          <img key={i} src="assets/img1.png" alt={`user-${i}`} className="joiner__avatar--01" />
                        ))}
                        <div className="joiner__more--01">+</div>
                      </div>
                      <div className={`meeting__priority--01 ${meeting.priority.toLowerCase()}--01`}>
                        {meeting.priority}
                      </div>
                      <div className="meeting__agenda--01">{meeting.agenda}</div>
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
