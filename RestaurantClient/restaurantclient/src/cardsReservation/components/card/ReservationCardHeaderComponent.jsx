import { Typography, Box, Chip, Divider  } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import React from 'react'

export default function ReservationCardHeaderComponent( { number, status} ) {
    const theme = useTheme();
  
  return (

    <Box sx={{textAlign:'center',}}>
          <Typography component="number" fontSize="30" fontWeight="Bold">
          {number}
        </Typography>
        <br/>
        <Chip 
          label={status}
          sx={{ mt:1, fontSize: '0.8rem', p: 1, mb: 1 }}
          color={
            status === "Confirmed" ? "success" :
            status === "Awaiting Approval" ? "warning":
            status === "Completed" ? "info" :
            "default"
          }
          />
          <Divider variant="middle" />

    </Box>
  )
}
