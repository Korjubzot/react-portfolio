import React from "react";
import { Link } from "react-router-dom";

import imagePath from "../../img/PXL_20231109_010721339.PORTRAIT.jpg";

function Hero() {
  return (
    <div
      data-testid="hero"
      className="flex flex-col items-center justify-center p-2 pl-10 bg-inherit w-4/5"
    >
      {/* TODO surely this can be a prettier page
      Maybe a fun fade in? Some of the text could do that, at least. Especially h2 and h3
      TODO update the text with something that doesn't read like AI generated slop */}
      <h2 className="text-4xl text-blue-700 font-bold m-2">Hello handsome</h2>
      <h3 className="text-2xl text-blue-500 mb-4">Nice to meet you</h3>
      <div className="flex flex-col md:flex-row items-center">
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            I'm Will, a passionate software engineer who thrives on the
            challenges and creativity of web development. I'm constantly
            exploring new technologies and tools, pushing the boundaries of
            what's possible in the digital realm. Every line of code is a step
            towards building something amazing, and that's what keeps me excited
            every day.
          </p>
          <p className="leading-relaxed">
            My skillset includes technologies like React, Node.js, JavaScript,
            Firebase, PostgreSQL and more. I focus on the frontend, but I'm more
            than capable of picking up backend where required. When I'm not
            working hard, I'm working my Polish, hiking, or taking care of my
            plants and flowers.
          </p>
        </div>
        <img
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-500 ml-5"
          src={imagePath}
          alt="Billy's portrait"
        />
        {/* TODO this could look way nicer, probably squared and taking up a larger chunk of the page
         TODO find a good book on web design principles */}
      </div>
      <div className="flex space-x-4 mt-6">
        <Link
          to="/portfolio"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition duration-300 ease-in-out"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Hero;
