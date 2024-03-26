import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

// TODO: Make the sidebar collapsible
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-32 bg-gray-200">
      <div className="space-y-4">
        <Link to="/" className="sidebar-item">
          <HomeIcon />
          <p> Home</p>
        </Link>
        <Link to="/contact" className="sidebar-item">
          <EmailIcon />
          <p> Contact</p>
        </Link>
        <Link to="/portfolio" className="sidebar-item">
          <WorkIcon />
          <p> Portfolio</p>
        </Link>
        <Link to="/blog" className="sidebar-item">
          <DynamicFeedIcon />
          <p> Blog</p>
        </Link>
        <a
          href="https://www.github.com/Korjubzot"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <GitHubIcon />
          <p> GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/billy-walker-ab0013278/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <LinkedIn />
          <p> LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
