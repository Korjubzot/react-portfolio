import React from "react";

function Cards({ title, description, liveSite, github }) {
  return (
    <div className="w-72 h-72 p-4 m-4 bg-white shadow-lg rounded-md overflow-hidden">
      <div className="p-4 flex-grow">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex p-4 pt-0 space-x-4">
        {liveSite && (
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Live Site
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default Cards;
