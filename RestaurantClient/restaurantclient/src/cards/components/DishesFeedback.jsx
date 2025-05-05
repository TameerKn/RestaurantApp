import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Dishes from "./Dishes";

export default function DishesFeedBack({
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
        Oops... it seems there are no dishes to display
      </Typography>
    );
  }
  if (cards) {
    return (
      <Box sx={{backgroundColor: theme.palette.background.default}}> 
      <Dishes
        cards={cards}
        handleCardDelete={handleDelete}
        handleCardLike={handleLike}
      />
      </Box>


    );
  }

  return null;
}