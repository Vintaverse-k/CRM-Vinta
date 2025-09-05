import React, { useState } from "react";
import "../../styles/ProductTeam/TimeSheet.css";

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

const Timesheet = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const dates = generateDates(new Date(2025, 3, 20));

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

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
          <button className="allteam-btn-filter right-width-extra-medium-01">
            <img src="assets/groupteam.svg" alt="icon" />
            Group Assignee <img src="assets/downarrow.svg" alt="icon" />
          </button>
          <button className="allteam-btn-filter right-width-extra-medium-02">
            <img src="assets/settings-01.svg" alt="icon" />
            Customize
          </button>
          <button className="allteam-btn-filter right-width-extra-medium-03">
            <img src="assets/filter.svg" alt="icon" />
            Filte By <img src="assets/downarrow.svg" alt="icon" />
          </button>
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
            {currentData.map((person, idx) => (
              <tr key={idx}>
                <td className="timesheet-person-cell">
                  <img
                    src={person.nameAvatar || "assets/default-avatar.png"}
                    alt={person.name}
                    className="timesheet-avatar"
                  />
                  <span className="timesheet-person-name">{person.name}</span>
                </td>
                {person.hours
                  ? person.hours.map((hrs, i) => (
                      <td key={i} className="timesheet-hours-cell">
                        {hrs} hrs
                      </td>
                    ))
                  : Array(7)
                      .fill(null)
                      .map((_, i) => (
                        <td key={i} className="timesheet-hours-cell">
                          -
                        </td>
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
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="timesheet-btn"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="timesheet-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timesheet;
