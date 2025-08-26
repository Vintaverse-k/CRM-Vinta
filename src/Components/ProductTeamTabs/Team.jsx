import React, { useState } from "react";
import "../../styles/ProductTeam/Team.css";

const teamData = [
  {
    id: 1,
    name: "Leisha",
    nameAvatar: "assets/img2.png",
    manager: "Manoj Kumar",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team1.png", alt: "Team Icon 1" },
      { src: "assets/team2.png", alt: "Team Icon 2" },
      { src: "assets/team3.png", alt: "Team Icon 3" },
    ],
    email: "leisha@example.com",
    directReport: { name: "Juyed Ahmed", avatar: "assets/img1.png" },
  },
  {
    id: 2,
    name: "Arjun",
    nameAvatar: "assets/img2.png",
    manager: "Ravi Kumar",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team1.png", alt: "Team Icon 1" },
      { src: "assets/team3.png", alt: "Team Icon 3" },
    ],
    email: "arjun@example.com",
    directReport: { name: "Sneha Patel", avatar: "assets/img2.png" },
  },
  {
    id: 3,
    name: "Sneha",
    nameAvatar: "assets/img3.png",
    manager: "Ramesh Singh",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team2.png", alt: "Team Icon 2" },
      { src: "assets/team4.png", alt: "Team Icon 3" },
    ],
    email: "sneha@example.com",
    directReport: { name: "Rahul Verma", avatar: "assets/img1.png" },
  },
  {
    id: 4,
    name: "Rahul",
    nameAvatar: "assets/img1.png",
    manager: "Anita Joshi",
    managerAvatar: "assets/img2.png",
    teams: [
      { src: "assets/team2.png", alt: "Team Icon 2" },
      { src: "assets/team3.png", alt: "Team Icon 3" },
      { src: "assets/team1.png", alt: "Team Icon 1" },
    ],
    email: "rahul@example.com",
    directReport: { name: "Neha Kapoor", avatar: "assets/img2.png" },
  },
  {
    id: 5,
    name: "Neha",
    nameAvatar: "assets/img2.png",
    manager: "Karan Mehta",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team3.png", alt: "Team Icon 3" },
      { src: "assets/team1.png", alt: "Team Icon 1" },
    ],
    email: "neha@example.com",
    directReport: { name: "Leisha", avatar: "assets/img2.png" },
  },
  {
    id: 6,
    name: "Karan",
    nameAvatar: "assets/img3.png",
    manager: "Suresh Nair",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team4.png", alt: "Team Icon 1" },
      { src: "assets/team2.png", alt: "Team Icon 3" },
    ],
    email: "karan@example.com",
    directReport: { name: "Arjun", avatar: "assets/img2.png" },
  },
  {
    id: 7,
    name: "Ravi",
    nameAvatar: "assets/img1.png",
    manager: "Manoj Kumar",
    managerAvatar: "assets/img2.png",
    teams: [
      { src: "assets/team2.png", alt: "Team Icon 2" },
      { src: "assets/team1.png", alt: "Team Icon 3" },
    ],
    email: "ravi@example.com",
    directReport: { name: "Sneha", avatar: "assets/img1.png" },
  },
  {
    id: 8,
    name: "Anita",
    nameAvatar: "assets/img2.png",
    manager: "Ramesh Singh",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team3.png", alt: "Team Icon 1" },
      { src: "assets/team4.png", alt: "Team Icon 3" },
    ],
    email: "anita@example.com",
    directReport: { name: "Rahul", avatar: "assets/img2.png" },
  },
  {
    id: 9,
    name: "Suresh",
    nameAvatar: "assets/img3.png",
    manager: "Karan Mehta",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team4.png", alt: "Team Icon 2" },
      { src: "assets/team2.png", alt: "Team Icon 1" },
    ],
    email: "suresh@example.com",
    directReport: { name: "Neha", avatar: "assets/img2.png" },
  },
  {
    id: 10,
    name: "Manoj",
    nameAvatar: "assets/img1.png",
    manager: "Suresh Nair",
    managerAvatar: "assets/img2.png",
    teams: [
      { src: "assets/team2.png", alt: "Team Icon 3" },
      { src: "assets/team4.png", alt: "Team Icon 1" },
    ],
    email: "manoj@example.com",
    directReport: { name: "Karan", avatar: "assets/img3.png" },
  },
  {
    id: 11,
    name: "Suresh",
    nameAvatar: "assets/img3.png",
    manager: "Karan Mehta",
    managerAvatar: "assets/img1.png",
    teams: [
      { src: "assets/team4.png", alt: "Team Icon 2" },
      { src: "assets/team2.png", alt: "Team Icon 1" },
    ],
    email: "suresh@example.com",
    directReport: { name: "Neha", avatar: "assets/img2.png" },
  },
  {
    id: 12,
    name: "Manoj",
    nameAvatar: "assets/img1.png",
    manager: "Suresh Nair",
    managerAvatar: "assets/img2.png",
    teams: [
      { src: "assets/team2.png", alt: "Team Icon 3" },
      { src: "assets/team4.png", alt: "Team Icon 1" },
    ],
    email: "manoj@example.com",
    directReport: { name: "Karan", avatar: "assets/img3.png" },
  },
];

const ITEMS_PER_PAGE = 10;

const Team = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(teamData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = teamData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="allteam-top-bar__01">
        <div className="allteam-left-controls__01">
          <button className="allteam-btn-filter__01 width-small">
            Status <img src="assets/downarrow.svg" alt="icon" />
          </button>
          <button className="allteam-btn-filter__01 width-Medium">
            Account Type <img src="assets/downarrow.svg" alt="icon" />
          </button>
          <button className="allteam-btn-filter__01 width-medium">
            Manager <img src="assets/downarrow.svg" alt="icon" />
          </button>
         
        </div>
         <div className="allteam-right-controls__01 width-extra-medium">
          <button className="allteam-btn-filter">
            <img src="assets/downarrow.svg" alt="icon" />Filter By</button>
          
        </div>
      </div>

      <div className="Team">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>People(1)</th>
              <th>Manager</th>
              <th>Teams</th>
              <th>Emails</th>
              <th>Direct Reports</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    src={item.nameAvatar}
                    alt={item.name}
                    className="avatar"
                  />
                  <span>{item.name}</span>
                </td>
                <td>
                  <img
                    src={item.managerAvatar}
                    alt={item.manager}
                    className="avatar"
                  />
                  <span>{item.manager}</span>
                </td>
                <td className="teams">
                  {item.teams.map((team, i) => (
                    <img key={i} src={team.src} alt={team.alt} />
                  ))}
                </td>
                <td>{item.email}</td>
                <td>
                  <img
                    src={item.directReport.avatar}
                    alt={item.directReport.name}
                    className="avatar"
                  />
                  <span>{item.directReport.name}</span>
                </td>
                <td>
                  <img
                    src="assets/3dot.svg"
                    alt="Options"
                    className="options-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="team-pagination">
          <div>Page {currentPage} of {totalPages}</div>
          <div>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Previews
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
