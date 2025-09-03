import React from 'react';
import Sidebar from '../Components/SideBar/Sidebar';
import TopBar from '../Components/TopBar/TopBar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
