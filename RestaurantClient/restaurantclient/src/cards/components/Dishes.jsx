import React from "react";
import CardComponent from "./card/DishCardComponent";
import { Container, Typography } from "@mui/material";

export default function Dishes({ cards, handleCardDelete, handleCardLike }) {

  return cards.length === 0 ? (
    <Typography>
      Oops… it seems there are no dishes to display
    </Typography>
  ) : (
    <Container sx={{display: "flex", flexWrap: "wrap", }}>
      {cards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}