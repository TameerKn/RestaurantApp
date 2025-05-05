import { CardMedia } from "@mui/material";
import React from "react";

export default function DishCardHeaderComponent({ image }) {
  return (
    <CardMedia component="img" height="270" image={image.url} alt={image.alt} />
  );
}