import React from "react";
import { Box, Button, Typography } from "@mui/material";
import useCounter from "./hooks/useCounter";
export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter(50, 3);

  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h3">{counter}</Typography>
      <Button onClick={reset}>Reset</Button>
    </Box>
  );
}