import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import Sidebar from "./components/sidebar/sidebar";

import "./App.css";

// TODO mobile styling needs to be fixed
// TODO accessibility also needs to be worked on

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
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
