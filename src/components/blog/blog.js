import React from "react";

function Blog() {
  return (
    <div className="flex justify-center items-center text-center m-auto h-screen">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-6xl">Pardon our dust</h1>
        <h2 className="text-4xl">My blog is still under construction.</h2>
        <p className="text-2xl">
          Feel free to check out the rest of my portfolio, though.
        </p>
        {/* TODO build this with Wordpress */}
      </div>
    </div>
  );
}

export default Blog;
