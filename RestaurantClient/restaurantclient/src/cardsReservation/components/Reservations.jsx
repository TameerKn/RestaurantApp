import React from "react";
import ReservationCardComponent from "./card/ReservationCardComponent";
import { Container, Typography } from "@mui/material";

export default function Reservations({ cards, handleCardDelete, handleCardLike }) {

  return cards.length === 0 ? (
    <Typography>
      Oops… it seems there are reservations cards to display
    </Typography>
  ) : (
    <Container sx={{display: "flex", flexWrap: "wrap", }}>
      {cards.map((card) => (
        <ReservationCardComponent
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}