import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, CardActions, Divider, IconButton, Typography } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from 'react-router-dom';

import ROUTES from '../../../routes/routesModel';

export default function ReservationCardActionBar({
    handleCardDelete,
    userId,
    cardId,
    card,

    }) {  
        
        const { user } = useUser();
        const navigate = useNavigate();
        const handleCardEdit = (id) => {
            navigate(ROUTES.EDIT_CARD + "/" + id);
          };


        return (
            <CardActions sx={{ textAlign:'center', paddingTop: 0, justifyContent: "space-between" }}>

      <Box>
        {user && (user.isAdmin) ? (
          
        <Typography variant="body2" color="text.secondary">
           <strong>Click on card to view and edit reservation!! </strong>               
        </Typography>
          
        ) :        
        <>
        <Typography variant="body2" color="text.secondary">
           <strong>Click on card to view and edit reservation! </strong>               
        </Typography>
      </>
        }
      </Box>

    </CardActions>
  )
}
