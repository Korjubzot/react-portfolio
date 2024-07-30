import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div
      data-testid="sidebar"
      className="flex flex-col items-center justify-center h-lvh w-16 md:w-32 bg-gray-200"
    >
      <div className="space-y-4">
        <Link to="/" className="sidebar-item">
          <HomeIcon />
          <p className="hidden md:block"> Home</p>
        </Link>
        <Link to="/contact" className="sidebar-item">
          <EmailIcon />
          <p className="hidden md:block"> Contact</p>
        </Link>
        <Link to="/portfolio" className="sidebar-item">
          <WorkIcon />
          <p className="hidden md:block"> Portfolio</p>
        </Link>
        <Link to="/blog" className="sidebar-item">
          <DynamicFeedIcon />
          <p className="hidden md:block"> Blog</p>
        </Link>
        <a
          href="https://www.github.com/Korjubzot"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <GitHubIcon />
          <p className="hidden md:block"> GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/william-walker-ab0013278/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <LinkedIn />
          <p className="hidden md:block"> LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
