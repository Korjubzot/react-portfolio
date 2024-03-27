import React from "react";
import Cards from "../cards/cards";

// TODO fix an issue causing the sidebar not to extend down the length of this page

const cardData = [
  {
    title: "Weather Forecast",
    description:
      "React-based weather forecaster that pulls and displays data from an API.",
    liveSite: "https://weather-app-bwalker.netlify.app/",
    github: "https://github.com/Korjubzot/weather-app",
  },
  {
    title: "DLicious Recipe Database",
    description:
      "Full-stack recipe storage database, with user authentication and storage provided by Supabase.",
    liveSite: "https://dlicious-redux.netlify.app/",
    github: "https://github.com/Korjubzot/DLicious-Redux",
  },
  {
    title: "Bluesky Bot",
    description:
      "Node.js based bot that automatically posts images to the Bluesky social media platform via API.",
    github: "https://github.com/Korjubzot/bluesky-bot",
  },
  {
    title: "Pomodoro Timer",
    description:
      "A simple React-based Pomodoro timer that helps users stay focused and productive.",
    liveSite: "https://pomodoro-tailwind.netlify.app/",
    github: "https://github.com/Korjubzot/pomodoro-timer",
  },
];

function Portfolio() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl mt-16 text-center">Portfolio</h2>
      <p className="text-lg text-center my-8 mx-auto max-w-prose">
        Dive into my web development portfolio—where code meets creativity.
        Browse through a collection of clean, functional websites that showcase
        my passion for building seamless online experiences. Live sites and
        GitHub repos available. Check the repo for this portfolio{" "}
        <a
          href="https://github.com/Korjubzot/react-portfolio"
          className="text-blue-500 hover:underline"
        >
          here
        </a>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            liveSite={card.liveSite}
            github={card.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
