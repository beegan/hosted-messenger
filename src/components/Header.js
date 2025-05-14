import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1>Dashboard</h1>
        <div className="breadcrumbs">
          <span>Analytics</span> / <span>Overview</span>
        </div>
      </div>
      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="notification-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#707683"/>
          </svg>
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="avatar" />
          <span className="user-name">Sarah Chen</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
