import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import "./hero.css";

import imagePath from "../../img/PXL_20231109_010721339.PORTRAIT.jpg";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            height: "80%",
          }}
        >
          <Typography variant="body1">
            I'm Billy, a passionate software engineer who thrives on the
            challenges and creativity of web development. I'm constantly
            exploring new technologies and tools, pushing the boundaries of
            what's possible in the digital realm. Every line of code is a step
            towards building something amazing, and that's what keeps me excited
            every day.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 500,
              width: 375,
              maxHeight: { xs: 500, md: 375 },
              maxWidth: { xs: 350, md: 275 },
              borderTopLeftRadius: "2.5%",
              borderTopRightRadius: "5%",
              borderBottomRightRadius: "2.5%",
              borderBottomLeftRadius: "5%",
            }}
            alt="A placeholder image"
            src={imagePath}
          />
          <div className="hero-button-container">
            <Link to="/portfolio">
              <button className="hero-button">Portfolio</button>
            </Link>
            <Link to="/contact">
              <button className="hero-button">Contact</button>
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
