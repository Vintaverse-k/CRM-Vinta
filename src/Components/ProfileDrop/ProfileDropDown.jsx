import React, { useState, useRef, useEffect } from 'react';
import topbarData from '../../Data/topbarData';
import "../ProfileDrop/ProfileDrop.css"

const ProfileDropdown = ({ profileImage, profileArrow }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { title: 'Profile', icon: '/assets/profile-icon.png', isProfile: true },
    { title: 'Account Setting', icon: '/assets/account-setting.png' },
    { title: 'Plan & Billing', icon: '/assets/plan-billing.png' },
    { title: 'Workspace Setting', icon: '/assets/workspace.png' },
    { title: 'Help', icon: '/assets/help.png' },
    { title: 'Add Another Account', icon: '/assets/add-account.png' },
    { title: 'Logout', icon: '/assets/logout.png' },
  ];

  return (
    <div className="profile-drop-down" ref={dropdownRef}>
      <div className="profile-toggle" onClick={() => setOpen(!open)}>
        <img src={profileImage} alt="Profile" className="profile-img" />
        <img src={profileArrow} alt="Dropdown" className="profile-arrow" />
      </div>

      {open && (
        <ul className="dropdown-menu">
          {menuItems.map((item, idx) => (
            <li key={idx} className="dropdown-item">
              <img src={item.icon} alt={item.title} className="dropdown-item-icon" />
              <div className="dropdown-item-text">
                <span>{item.title}</span>
                {item.isProfile && (
                  <span className="dropdown-item-email">user@example.com</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
