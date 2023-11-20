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
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
    </div>
  );
}

export default Portfolio;
