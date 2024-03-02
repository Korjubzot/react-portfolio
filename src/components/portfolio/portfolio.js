import React from "react";
import Cards from "../cards/cards";
import { Typography } from "@mui/material";
// todo fix the mobile layout of this page
// stack vertically?
import "./portfolio.css";

const cardData = [
  {
    title: "Weather Forecast",
    description:
      "React-based weather forecaster that pulls and displays data from an API.",
    link: "https://weather-app-bwalker.netlify.app/",
    liveSite: "https://weather-app-bwalker.netlify.app/",
    github: "https://github.com/Korjubzot/weather-app",
  },
  {
    title: "DLicious Recipe Database",
    description:
      "Full-stack recipe storage database, with user authentication and storage provided by Supabase.",
    link: "https://dlicious-redux.netlify.app/",
    liveSite: "https://dlicious-redux.netlify.app/",
    github: "https://github.com/Korjubzot/DLicious-Redux",
  },
  {
    title: "Bluesky Bot",
    description:
      "Node.js based bot that automatically posts images to the Bluesky social media platform via API.",
    link: "https://github.com/Korjubzot/bluesky-bot",
    github: "https://github.com/Korjubzot/bluesky-bot",
  },
];

function Portfolio() {
  return (
    <div className="container">
      <Typography variant="h2" mt={4} color="inherit" noWrap>
        Portfolio
      </Typography>
      {/* TODO slightly increase the mt value for mobile devices */}
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
        {cardData.map((card, index) => (
          <Cards
            className="card"
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
            liveSite={card.liveSite}
            github={card.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
