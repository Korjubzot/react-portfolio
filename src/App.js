import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";

import "./App.css";

function App() {
  const [isHomeHovered, setHomeHovered] = useState(false);
  const [isContactHovered, setContactHovered] = useState(false);
  const [isPortfolioHovered, setPortfolioHovered] = useState(false);
  const [isBlogHovered, setBlogHovered] = useState(false);

  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Menu
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              minHeight: "100vh",
              backgroundColor: "#85a86c",
              width: 175,
              overflow: "none",
              background: "#13395e",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MenuItem
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              component={<Link to="/" exact />}
            >
              <div style={{ width: "100px", textAlign: "center" }}>
                {isHomeHovered ? "Home" : <HomeIcon />}
              </div>
            </MenuItem>
            <MenuItem
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              component={<Link to="/contact" />}
            >
              <div style={{ width: "100px", textAlign: "center " }}>
                {" "}
                {isContactHovered ? "Contact" : <EmailIcon />}
              </div>
            </MenuItem>
            <MenuItem
              onMouseEnter={() => setPortfolioHovered(true)}
              onMouseLeave={() => setPortfolioHovered(false)}
              component={<Link to="/portfolio" />}
            >
              <div
                style={{
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {isPortfolioHovered ? "Portfolio" : <WorkIcon />}
              </div>
            </MenuItem>
            <MenuItem
              onMouseEnter={() => setBlogHovered(true)}
              onMouseLeave={() => setBlogHovered(false)}
              component={<Link to="/blog" />}
            >
              <div style={{ width: "100px", textAlign: "center " }}>
                {" "}
                {isBlogHovered ? "Blog" : <DynamicFeedIcon />}
              </div>
            </MenuItem>
          </Menu>
        </Sidebar>

        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
