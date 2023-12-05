import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Registrations
       <ul>
        <a href='/student'><li>Student</li></a>
        <a href='/certificate'><li>Certificate</li></a>
       </ul>
       View
       <ul>
       <a href="/studentview"><li>Product View</li></a>
       <a href="/certificateview"><li>Category View</li></a>
      
      </ul>
      
    </div>
  );
};

export default Sidebar;
