import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import imagePath from "../../img/PXL_20231109_010721339.PORTRAIT.jpg";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <Typography
        sx={{
          padding: "40px",
        }}
        variant="h2"
      >
        Hello Handsome
      </Typography>
      <Typography variant="h4">Nice to meet you</Typography>
      <div className="hero-content">
        <div>
          <Typography paragraph={true} variant="body1">
            I'm Billy, a passionate software engineer who thrives on the
            challenges and creativity of web development. I'm constantly
            exploring new technologies and tools, pushing the boundaries of
            what's possible in the digital realm. Every line of code is a step
            towards building something amazing, and that's what keeps me excited
            every day.
          </Typography>
          <br></br>
          <Typography paragraph={true} variant="body1">
            My skillset includes technologies like React, Node.js, JavaScript,
            Firebase, PostgreSQL and more. I focus on the frontend, but I'm more
            than capable of picking up backend where required. When I'm not
            working hard, I'm training for marathons, hiking, or studying
            Polish.
          </Typography>
        </div>
        <div>
          <img className="hero-image" src={imagePath} alt="Billy's portrait" />
        </div>
      </div>
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
