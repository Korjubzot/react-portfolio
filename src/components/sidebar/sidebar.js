import React, { useState } from "react";
import "./sidebar.css";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
      >
        <MenuOutlinedIcon />
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-item">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="sidebar-item">
          <EmailIcon />
          <p>Contact</p>
        </div>
        <div className="sidebar-item">
          <WorkIcon />
          <p>Portfolio</p>
        </div>
        <div className="sidebar-item">
          <DynamicFeedIcon />
          <p>Blog</p>
        </div>
        <div className="sidebar-item">
          <GitHubIcon />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
