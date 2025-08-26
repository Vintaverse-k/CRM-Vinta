import React, { useState } from "react";
import "../../styles/ProductTeam/Timesheet.css"; 

const hoursData = {
  1: [7, 8, 7, 8, 9, 7, 6],
  2: [8, 8, 8, 8, 8, 8, 8],
  3: [6, 7, 6, 7, 6, 7, 7],
  4: [9, 9, 9, 10, 9, 9, 9],
  5: [7, 8, 7, 8, 7, 8, 7],
  6: [8, 7, 8, 7, 8, 7, 8],
  7: [7, 7, 7, 7, 7, 7, 7],
  8: [8, 8, 9, 9, 8, 8, 8],
  9: [7, 8, 7, 8, 7, 8, 7],
  10: [6, 7, 6, 7, 6, 7, 6],
};

const teamData = [
  { id: 1, name: "Leisha", nameAvatar: "assets/img2.png" },
  { id: 2, name: "Arjun", nameAvatar: "assets/img2.png" },
  { id: 3, name: "Sneha", nameAvatar: "assets/img3.png" },
  { id: 4, name: "Rahul", nameAvatar: "assets/img1.png" },
  { id: 5, name: "Neha", nameAvatar: "assets/img2.png" },
  { id: 6, name: "Karan", nameAvatar: "assets/img3.png" },
  { id: 7, name: "Ravi", nameAvatar: "assets/img1.png" },
  { id: 8, name: "Anita", nameAvatar: "assets/img2.png" },
  { id: 9, name: "Suresh", nameAvatar: "assets/img3.png" },
  { id: 10, name: "Manoj", nameAvatar: "assets/img1.png" },
];

function generateDates(startDate, days = 7) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  const dates = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    dates.push(d.toLocaleDateString("en-US", options));
  }
  return dates;
}

const Timesheet = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(teamData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = teamData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const dates = generateDates(new Date(2025, 3, 20)); // April 20, 2025

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
     <div className="allteam-top-bar__101">
        <div className="allteam-left-controls__101">
          <button className="allteam-btn-filter__101 width-small">
            Today <img src="assets/downarrow.svg" alt="icon" />
          </button>
          <button className="allteam-btn-filter__101 width-Medium">
            Time Estimate <img src="assets/downarrow.svg" alt="icon" />
          </button>
          <button className="allteam-btn-filter__101 width-medium">
            Day Schedule <img src="assets/downarrow.svg" alt="icon" />
          </button>
         
        </div>
         <div className="allteam-right-controls__101 ">
          <button className="allteam-btn-filter right-width-extra-medium-01"><img src="assets/groupteam.svg" alt="icon" />Group Assignee  <img src="assets/downarrow.svg" alt="icon" /></button>
          <button className="allteam-btn-filter right-width-extra-medium-02"><img src="assets/setting.svg" alt="icon" />Customize</button>
          <button className="allteam-btn-filter right-width-extra-medium-03"><img src="assets/filter.svg" alt="icon" />Filte By  <img src="assets/downarrow.svg" alt="icon" /></button>
        </div>
      </div>
    <div className="timesheet-container">
      <table className="timesheet-table">
        <thead>
          <tr>
            <th>People (1)</th>
            {dates.map((date, idx) => (
              <th key={idx}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((person) => (
            <tr key={person.id}>
              <td className="timesheet-person-cell">
                <img src={person.nameAvatar} alt={person.name} className="timesheet-avatar" />
                <span className="timesheet-person-name">{person.name}</span>
              </td>
              {hoursData[person.id]
                ? hoursData[person.id].map((hrs, i) => (
                    <td key={i} className="timesheet-hours-cell">{hrs} hrs</td>
                  ))
                : Array(7)
                    .fill(null)
                    .map((_, i) => (
                      <td key={i} className="timesheet-hours-cell">-</td>
                    ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="timesheet-pagination">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div>
          <button onClick={handlePrev} disabled={currentPage === 1} className="timesheet-btn">
            Previous
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages} className="timesheet-btn">
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Timesheet;
