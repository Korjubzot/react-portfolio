import React from "react";
import Cards from "../cards/cards";

const cardData = [
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
      "A React-based Pomodoro timer that helps users stay focused and productive.",
    liveSite: "https://pomodoro-tailwind.netlify.app/",
    github: "https://github.com/Korjubzot/pomodoro-timer",
  },
  {
    title: "Music Streaming Service",
    description:
      "Home-run server and client for a music streaming webapp similar to Spotify, designed to be self-hosted. Ongoing and in early stages.",
    github: "https://github.com/Korjubzot/music-streamer",
  },
  {
    title: "Weather Forecast",
    description:
      "React-based weather forecaster that pulls and displays data from an API.",
    liveSite: "https://weather-app-bwalker.netlify.app/",
    github: "https://github.com/Korjubzot/weather-app",
  },
];

function Portfolio() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl mt-16 text-center">Portfolio</h2>
      <p className="text-lg text-center my-8 mx-auto max-w-prose">
        Take a look at some of my work - tools, bots, and websites galore. The
        joy of programming is that I can now make some quirky, niche, or useful
        tools, hand-tuned to what I need, and I can do the same for you. Live
        sites and GitHub repos available. Find the repo for this portfolio{" "}
        <a
          href="https://github.com/Korjubzot/react-portfolio"
          className="text-blue-500 hover:underline"
        >
          here
        </a>
        . Spot any bugs? Pardon the dust and{" "}
        <a href="./contact" className="text-blue-500 hover:underline">
          let me know
        </a>{" "}
        - this site is a constant work in progress.
      </p>
      <div className="flex overflow-x-auto space-x-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            liveSite={card.liveSite}
            github={card.github}
            className="w-64 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
