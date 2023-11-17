import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  faHome,
  faEnvelopeSquare,
  faBriefcase,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <FontAwesomeIcon icon={faBlog} />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </Link>
        </li>
      </ul>
      <ul className="social-media">
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/billy-walker-ab0013278/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bsky.app/profile/billywalker.bsky.social"
          >
            Bluesky
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Korjubzot/"
          >
            Github
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
