import React from "react";

function Cards({ title, description, liveSite, github }) {
  return (
    <div class="p-4 max-w-sm">
      <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-white dark:text-white text-lg font-medium">
            {title}
          </h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
          <p class="leading-relaxed text-base text-white dark:text-gray-300">
            {description}
          </p>
          <a
            href={liveSite}
            class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
          >
            Live Site
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <a
            href={github}
            class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
          >
            GitHub
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
