import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Hello Handsome</h1>
      <h2>Let's get to work</h2>
      <p>
        Nice to meet you. I'm Billy, a software engineer with a newfound love of
        web development. I'm putting some generic boring filler in here to have
        something on paper.
      </p>
      <img src="https://placehold.co/600x400" alt="filler" />
      <div className="hero-button-container">
        <Link to="/portfolio">
          <button>Portfolio</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
