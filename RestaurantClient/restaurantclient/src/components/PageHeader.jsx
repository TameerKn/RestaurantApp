import React from "react";
import { Box, Typography, } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export default function PageHeader({ title, subtitle, typograph, typograph2, action }) {

  const theme = useTheme();


  return (
   <Box sx={{padding: 1, textAlign: "center", backgroundColor: theme.palette.background.default }}>
      <Typography variant="h2" component="h1" fontWeight="bolder" color="secondary">
        {title}
      </Typography>
      <Typography variant="h5" component="h2" fontWeight="bold" color="secondary">
        {subtitle}
      </Typography>
      <Typography component="h3" color="secondary">
        {typograph}
      </Typography>
      <Typography variant= "h5" component="h4" color="secondary">
        {typograph2}
      </Typography>
      {action}
    </Box> 
  );
}