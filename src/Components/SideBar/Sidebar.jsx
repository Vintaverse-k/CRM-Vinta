import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import '../../styles/Sidebar.css'; 
import sidebarData from '../../Data/sidebarData';
import TopBar from '../TopBar/TopBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {

    const currentPath = location.pathname;
    let activeName = 'Dashboard';
    const allItems = [
      ...sidebarData.main, 
      ...sidebarData.project.items, 
      ...sidebarData.team.items, 
      ...sidebarData.bottom
    ];
    const match = allItems.find(item => item.path === currentPath);
    if (match) activeName = match.name;
    return activeName;
  });

  const handleClick = (name) => {
    setActiveTab(name);
  };

  return (
    <div className="app-container-01">
      <div className="sidebar">
        <div className="logo">
          <img src="assets/dashlogo.svg" alt="logo" />
          <h2>Taskbito</h2>
          <span className="dropdown-icon">⌄</span>
        </div>

        {/* Main Menu */}
        <div className="menu-section">
          {sidebarData.main.map((item, i) => (
            <Link
              to={item.path}
              key={i}
              className={`sidebar-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => handleClick(item.name)}
            >
              <img src={item.icon} alt={item.name} className="icon" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Project Section */}
        <div className="section-label">
          <span>{sidebarData.project.label}</span>
          <img src={sidebarData.project.addIcon} alt="add" />
        </div>
        {sidebarData.project.items.map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className={`sidebar-item ${activeTab === item.name ? 'active' : ''}`}
            onClick={() => handleClick(item.name)}
          >
            {item.dotColor && <span className="dot" style={{ backgroundColor: item.dotColor }}></span>}
            {item.icon && <img src={item.icon} alt="folder" className="icon" />}
            <span>{item.name}</span>
            {item.arrow && <img src={item.arrow} alt="arrow" className="arrow" />}
          </Link>
        ))}

        {/* Team Section */}
        <div className="section-label">
          <span>{sidebarData.team.label}</span>
          <img src={sidebarData.team.addIcon} alt="add" />
        </div>
        {sidebarData.team.items.map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className={`sidebar-item ${activeTab === item.name ? 'active' : ''}`}
            onClick={() => handleClick(item.name)}
          >
            {item.dotColor && <span className="dot" style={{ backgroundColor: item.dotColor }}></span>}
            {item.icon && <img src={item.icon} alt="team" className="icon" />}
            <span>{item.name}</span>
            {item.arrow && <img src={item.arrow} alt="arrow" className="arrow" />}
          </Link>
        ))}

        {/* Bottom Menu */}
        <div className="menu-section bottom">
          {sidebarData.bottom.map((item, i) => (
            <Link
              to={item.path}
              key={i}
              className={`sidebar-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => handleClick(item.name)}
            >
              <img src={item.icon} alt={item.name} className="icon" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="main-content-01">
        <TopBar />
        <div className="page-content-01">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
