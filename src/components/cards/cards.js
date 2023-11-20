import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

function Cards() {
  return (
    <Card
      sx={{ width: 300, maxHeight: 500, padding: 1, margin: 2, elevation: 5 }}
    >
      <CardActionArea
        component="a"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is some lorem ipsum text. Places: held. Gamers: offended.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
