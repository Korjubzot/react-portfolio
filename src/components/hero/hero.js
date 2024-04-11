import React from "react";
import { Link } from "react-router-dom";

import imagePath from "../../img/PXL_20231109_010721339.PORTRAIT.jpg";

// TODO: fix the styling on this page
// There's something off about the layout and spacing

function Hero() {
  return (
    <div
      data-testid="hero"
      className="flex flex-col items-center justify-center p-2 pl-10 bg-inherit w-4/5"
    >
      <h2 className="text-4xl text-blue-700 font-bold m-2">Hello Handsome</h2>
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
            working hard, I'm training for marathons, hiking, or studying
            Polish.
          </p>
        </div>
        <img
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-500 ml-5"
          src={imagePath}
          alt="Billy's portrait"
        />
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
