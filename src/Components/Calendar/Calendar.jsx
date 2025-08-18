import React from 'react'
import Sidebar from "../SideBar/Sidebar";
import Calendars from './Calendars';
const Calendar = () => {
  return (
        <div className="mytask-container">
      {/* Sidebar */}
      <Sidebar />
    <Calendars/>
    </div>
  )
}

export default Calendar
