import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <Typography variant="h2">Hello Handsome</Typography>
      <Typography variant="h4">Let's get to work</Typography>
      <Typography variant="body1">
        Nice to meet you. I'm Billy, a software engineer with a newfound love of
        web development. I'm putting some generic boring filler in here to have
        something on paper, because that's where we all start, you know?
      </Typography>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="A placeholder image"
        src="https://placehold.co/600x400"
      />
      <div className="hero-button-container">
        <Link to="/portfolio">
          <button className="hero-button">Portfolio</button>
        </Link>
        <Link to="/contact">
          <button className="hero-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
