import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Reservations from "./Reservations";
import { Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function ReservationsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLike,
}) {
  const theme = useTheme();
  
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0) {
    return (
      <Typography textAlign={"center"}>
        it seems there are no reservations to display
      </Typography>
    );
  }
  if (cards) {
    return (
      <Box sx={{backgroundColor: theme.palette.background.default}}> 
      <Reservations
        cards={cards}
        handleCardDelete={handleDelete}
        handleCardLike={handleLike}
      />
      </Box>


    );
  }

  return null;
}