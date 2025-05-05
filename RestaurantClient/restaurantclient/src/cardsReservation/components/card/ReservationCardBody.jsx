import { CardContent, CardHeader, Typography, Divider } from "@mui/material";
import React from "react";

export default function ReservationCardBody({
    name,
    phone,
    people,
    date,
}) {

    return (
      <>
      <CardHeader sx={{textAlign: "center"}} title={name}  />
                <Divider variant="middle" />
      
      <CardContent>        
            <Typography variant="body2" color="text.secondary">
                <strong>Phone: </strong>
                {phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Number of people: </strong>
                {people}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Date: </strong>
                {date}
              </Typography>
      </CardContent>             
      </>

    );
}