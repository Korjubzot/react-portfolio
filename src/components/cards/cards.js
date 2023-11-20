import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

import "./cards.css";
import buttonStyles from "./buttonStyles";

function Cards({ title, description, link, liveSite, github }) {
  return (
    <Card sx={{ width: 300, height: 300, padding: 1, margin: 2, elevation: 5 }}>
      <CardActionArea
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent>
          <Typography gutterBottom variant="h5" paragraph component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            disableElevation
            component="a"
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonStyles}
          >
            Live Site
          </Button>
          <Button
            variant="outlined"
            disableElevation
            component="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonStyles}
          >
            GitHub
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
