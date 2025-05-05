import { Box, Typography, Divider, Chip, Button, Avatar, } from '@mui/material';
import {AutoFixHigh, Cancel} from '@mui/icons-material'
import { useTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import useCards from '../hooks/useCards';
import Spinner from "../../components/Spinner";
import TagChips from '../../components/ui/TagChips';
import ROUTES from '../../routes/routesModel';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../users/providers/UserProvider";

export default function DishDetailsPage() {
    const theme = useTheme();
  const { user } = useUser();
    const { id } = useParams();
    const { card,
            error,
            isLoading,
            getCardById,
            handleCardDelete,
             } = useCards();
    
    useEffect(() => {
      getCardById(id);
    }, [id, getCardById]);

      const navigate = useNavigate();
      const handleCardEdit = (id) => {
        navigate(ROUTES.EDIT_CARD + "/" + id);
      };
    
      if (isLoading) return <Spinner/> 
      if (error) return <div>Error loading reservation: {error.message}</div>;
      if (!card) return <div>Reservation not found</div>;
  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: '0 auto',
      p: 4,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4
    }}>
      {/* Image Section - Left Side */}
      <Box sx={{ flex: 1 }}>
        <Avatar
          variant="rounded"
          image={card.image}
          src={card.image.url} // Replace with your image path
          alt="Dish image"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            borderRadius: 2,
            boxShadow: theme.shadows[3]
          }}
        />
      </Box>

      {/* Details Section - Right Side */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Header */}
        <Box>
          <Chip 
            label={card.category} // e.g. "Main Course", "Dessert"
            color="primary"
            size="small"
            sx={{ mb: 1 }}
          />
          <Typography variant="h3" fontWeight={700}>
            {card.name}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Price */}
        <Typography variant="h5" color="primary" fontWeight={600}>
          {card.price}$
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>

<TagChips tagsString={card.tag} />
</Box>

        {/* Description */}
        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
          {card.description}
        </Typography>

          {/* Action Buttons */}

          {user.isAdmin === "True" && (

          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleCardEdit(id)}
              sx={{ borderRadius: theme.shape.borderRadius, px: 4 }}
              startIcon={<AutoFixHigh/>}
            >             
              Modify Dish
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleCardDelete(id)}
              sx={{ borderRadius: theme.shape.borderRadius, px: 4,
                backgroundColor: theme.palette.custom.delete,
                '&:hover': { backgroundColor: theme.palette.custom.deletehover }
               }}
               startIcon={<Cancel/>}
            >
              Remove Dish
            </Button>
          </Box>
          )}
        

      </Box>
    </Box>
  );
};

