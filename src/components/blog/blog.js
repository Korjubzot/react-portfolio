import React from "react";
import { Typography } from "@mui/material";

import "./blog.css";

function Blog() {
  return (
    <div className="page-container">
      <div className="blog-container">
        <Typography variant="h2">Pardon our dust</Typography>
        <Typography variant="h5">
          My blog is still under construction.
        </Typography>
        {/* TODO build this with Wordpress */}
      </div>
    </div>
  );
}

export default Blog;
