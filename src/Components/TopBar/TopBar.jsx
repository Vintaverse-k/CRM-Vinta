import React from 'react';
import topbarData from '../../Data/topbarData';
import '../../styles/TopBar.css';
import ProfileDropdown from '../ProfileDrop/ProfileDropDown';



const TopBar = () => {
  return (
    <div className="topbar">
      <div className="search-box">
        <img src={topbarData.searchIcon} alt="search" className="icon" />
        <input type="text" placeholder="Search" />
        <span className="shortcut">{topbarData.shortcutKey}</span>
      </div>

      <div className="topbar-actions">
        <button className="icon-btn" aria-label="Pin">
          <img src={topbarData.pinIcon} alt="pin" />
        </button>
        <button className="icon-btn" aria-label="Video">
          <img src={topbarData.videoIcon} alt="video" />
        </button>
        <button className="integrate-btn" aria-label="Integrate">
          <img src={topbarData.integrate} alt="integrate" />
          <span>Integrate</span>
          <img src={topbarData.integrateIcon} alt="integrate" />
        </button>

        {/* Profile Dropdown component */}
        <ProfileDropdown
          profileImage={topbarData.profileImage}
          profileArrow={topbarData.profileArrow} 
        />
      </div>
    </div>
  );
};

export default TopBar;
