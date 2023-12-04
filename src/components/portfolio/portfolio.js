import React from "react";
import Cards from "../cards/cards";
import { Typography } from "@mui/material";
// todo fix the mobile layout of this page
// stack vertically?
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="container">
      <Typography variant="h2" color="inherit" noWrap>
        Portfolio
      </Typography>
      <Typography
        variant="h5"
        align="center"
        paragraph
        color="inherit"
        sx={{ maxWidth: 500 }}
      >
        Dive into my web development portfolio—where code meets creativity.
        Browse through a collection of clean, functional websites that showcase
        my passion for building seamless online experiences. Live sites and
        GitHub repos available. Check the repo for this portfolio{" "}
        <a href="https://github.com/Korjubzot/react-portfolio">here</a>.
      </Typography>
      <div className="cards-container">
        <Cards
          title="Weather Forecast"
          description="React-based weather forecaster that pulls and displays data from an API."
          link="https://weather-app-bwalker.netlify.app/"
          liveSite="https://weather-app-bwalker.netlify.app/"
          github="https://github.com/Korjubzot/weather-app"
        ></Cards>
        <Cards
          title="DLicious Recipe Database"
          description="Full-stack recipe storage database, with user authentication provided by Firebase. Not yet live."
          link=""
          liveSite=""
          github="https://github.com/Korjubzot/DLicious-Recipe-App"
        ></Cards>
        <Cards
          title="Something Else"
          description="Placeholder"
          link="https://www.google.com"
        ></Cards>
      </div>
    </div>
  );
}

export default Portfolio;
