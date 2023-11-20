import React from "react";
import Cards from "../cards/cards";
import { Typography } from "@mui/material";

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
        GitHub repos available.
      </Typography>
      <div className="cards-container">
        <Cards
          title="Weather Forecast"
          description="Placeholder"
          link="https://www.google.com"
        ></Cards>
        <Cards
          title="DLicious Recipe Database"
          description="Placeholder"
          link="https://www.google.com"
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
