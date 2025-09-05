import React, { useState } from "react";
import "../../styles/ProductTeam/Team.css";

const ITEMS_PER_PAGE = 10;

const Team = ({ members }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(members.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = members.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <>
      <div className="allteam-top-bar__01">
        <div className="allteam-left-controls__01">
          <button className="allteam-btn-filter__01 width-small">
            Status <img src="assets/downarrow.svg" alt="" />
          </button>
          <button className="allteam-btn-filter__01 width-Medium">
            Account Type <img src="assets/downarrow.svg" alt="" />
          </button>
          <button className="allteam-btn-filter__01 width-medium">
            Manager <img src="assets/downarrow.svg" alt="" />
          </button>
        </div>
        <div className="allteam-right-controls__01 width-extra-medium">
          <button className="allteam-btnn-filters">
            <img src="assets/filter.svg" alt="" />
            Filter By
            <img src="assets/downarrow.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="Team">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>People(1)</th>
              <th>Manager</th>
              <th>Teams</th>
              <th>Emails</th>
              <th>Direct Reports</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, idx) => (
              <tr key={idx}>
                <td><input type="checkbox" /></td>
                <td>
                  <img src={item.nameAvatar} alt="" className="avatar" />
                  <span>{item.name}</span>
                </td>
                <td>
                  <img src={item.managerAvatar} alt="" className="avatar" />
                  <span>{item.manager}</span>
                </td>
                <td className="teams">
                  {item.teams.map((team, i) => (
                    <img key={i} src={team.src} alt="" />
                  ))}
                </td>
                <td>{item.email}</td>
                <td>
                  <img src={item.directReport.avatar} alt="" className="avatar" />
                  <span>{item.directReport.name}</span>
                </td>
                <td>
                  <img src="assets/3dot.svg" alt="" className="options-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="team-pagination">
          <div>Page {currentPage} of {totalPages}</div>
          <div>
            <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
