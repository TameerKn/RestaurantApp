import React from "react";
import { Box, Button, Typography } from "@mui/material";
import useCounter from "./hooks/useCounter";
export default function Counter1() {
  const { counter, increment, decrement } = useCounter(100);

  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h3">{counter}</Typography>
    </Box>
  );
}