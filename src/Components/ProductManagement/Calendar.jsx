import React, { useState } from "react";
import "../../styles/Tabs/Calendar.css";

const CalendarContent = ({ tasks }) => {
  const [view, setView] = useState("Week");
  const rows = 6;  // Number of times
  const cols = 7;  // Number of days

  const times = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const getMeetingForCell = (row, col) => {
    return tasks?.find(t => t.row === row && t.col === col);
  };

  return (
    <div className="dashboard__section">
      <div className="task__bar">
        <div className="task__btns">
          <div className="view__switcher">
            {["Day","Week","Month"].map(v => (
              <button
                key={v}
                className={`view__btn ${view===v?"active":""}`}
                onClick={()=>setView(v)}
              >{v}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="calendar__section">
        <div className="calendar__days__container">
          <div className="backward__arrow rounded">
            <img src="assets/Left.svg" alt="left"/>
          </div>
          <div className="backward__arrow">
            <img src="assets/Right.svg" alt="right"/>
          </div>
          {days.map((d,i)=>(
            <div key={i} className={`sunday ${i===0?"item1":""} ${i===6?"rounded-day":""}`}>
              {d}
            </div>
          ))}
        </div>

        <div className="main__container">
          <div className="calendar__sidebar1">
            {times.map((time,i)=>(
              <div key={i} className="time__list">{time}</div>
            ))}
          </div>

          <div className="calendar__main__content">
            {Array.from({length: rows*cols}).map((_, index)=>{
              const row = Math.floor(index/cols);
              const col = index % cols;
              const meeting = getMeetingForCell(row,col);

              return (
                <div className="meeting__holder" key={index}>
                  {meeting && (
                    <div className="meeting__card">
                      <div className="meeting__title">{meeting.title}</div>
                      <div className="meeting__time">
                        <img src="assets/cflag.svg" alt="flag"/> {meeting.time}
                      </div>
                      <div className="meeting__joiners">
                        {meeting.imageUrl && (
                          <img src={meeting.imageUrl} alt="task" className="joiner__avatar"/>
                        )}
                        <div className="joiner__more">+</div>
                      </div>
                      <div className={`meeting__priority ${meeting.priority.toLowerCase()}`}>
                        {meeting.priority}
                      </div>
                      <div className="meeting__agenda">{meeting.agenda}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarContent;
