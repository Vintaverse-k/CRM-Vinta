import React from "react";
import "../../styles/Tabs/Calendar.css";

const CalendarContent = ({ tasks }) => {
  const rows = 6;
  const cols = 7; 
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const timeSlots = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","4 PM","5 PM"];

  const getMeetingForCell = (row, col) => {
    const day = days[col];
    const time = timeSlots[row];
    return tasks.find((t) => t.day === day && t.time === time);
  };

  return (
    <div className="dashboard__section">
      <div className="task__bar">
        <div className="task__btns">
          <div className="view__switcher">
            {["Day", "Week", "Month"].map((item) => (
              <button key={item} className={`view__btn ${item === "Week" ? "active" : ""}`}>{item}</button>
            ))}
          </div>

          <div className="task__actions">
            <div className="share__task__btn">
              <img src="assets/share.svg" alt="share" />
              <div className="btn__text">filter</div>
            </div>

            <button className="add__task__btn">
              <img src="assets/3dot.svg" alt="add" />
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

          {days.map((day,i)=>(
            <div key={i} className={`sunday ${i===0?"item1":""} ${i===6?"rounded-day":""}`}>{day}</div>
          ))}
        </div>

        <div className="main__container">
          <div className="calendar__sidebar1">
            {timeSlots.map((time,i)=>(
              <div key={i} className="time__list">{time}</div>
            ))}
          </div>

          <div className="calendar__main__content">
            {Array.from({ length: rows * cols }).map((_, index) => {
              const rowIndex = Math.floor(index / cols);
              const colIndex = index % cols;
              const task = getMeetingForCell(rowIndex, colIndex);

              return (
                <div className="meeting__holder" key={index}>
                  {task && (
                    <div className="meeting__card">
                      <div className="meeting__title">{task.title}</div>
                      <div className="meeting__time">
                        <img src="assets/cflag.svg" alt="flag" /> {task.time}
                      </div>
                      <div className="meeting__joiners">
                        {Array.from({ length: task.joiners }).map((_, i) => (
                          <img key={i} src="assets/img1.png" alt={`user-${i}`} className="joiner__avatar" />
                        ))}
                        {task.joiners > 3 && <div className="joiner__more">+</div>}
                      </div>
                      <div className={`meeting__priority ${task.priority.toLowerCase()}`}>{task.priority}</div>
                      <div className="meeting__agenda">{task.agenda}</div>
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
