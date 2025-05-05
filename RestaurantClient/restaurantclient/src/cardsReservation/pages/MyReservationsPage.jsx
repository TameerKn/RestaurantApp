import React, { useEffect, useState } from "react";
import ReservationFeedback from "../components/ReservationsFeedback";
import { Button, Box, Paper, useTheme, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCards from "../hooks/UseReservationsCards";
import { AddBox} from '@mui/icons-material';
export default function MyReservationsPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useUser();

  const {
    filterCards,
    error,
    isLoading,
    getAllMyCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();


  useEffect(() => {
    getAllMyCards();
  }, [getAllMyCards]);



  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;

  return (
<Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      py: 4,
      px: { xs: 2, sm: 4 }
    }}>
      {/* Main Content Container */}
      <Box sx={{
        maxWidth: 1200,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        {/* Header Section */}
        <Paper elevation={2} sx={{
          p: 3,
          borderRadius: theme.shape.borderRadius,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              My Reservations
            </Typography>
            <Typography variant="body1" color="text.secondary">
              View and manage your upcoming bookings
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(ROUTES.RESERVATION)}
            sx={{
              minWidth: 220,
              borderRadius: theme.shape.borderRadius,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1rem'
            }}
            startIcon={<AddBox/>}
          >
            New Reservation
          </Button>
        </Paper>

        {/* Reservations List */}
        <Paper elevation={1} sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: theme.shape.borderRadius
        }}>

 {/* New container for search + toggle buttons */}
 <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on desktop
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    mb: 2
  }}>


  </Box>

      <ReservationFeedback
        cards={filterCards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
        </Paper>
      </Box>
    </Box>
  );
}