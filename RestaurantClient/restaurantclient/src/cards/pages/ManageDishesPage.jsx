import React, { useEffect, useState } from "react";
import DishesFeedback from "../components/DishesFeedback";
import { Button, Box, Paper, useTheme, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCards from "../hooks/useCards";
import SearchBar from "../../layout/header/topNavBar/rightNavigation/SearchBar"
import { AddBox} from '@mui/icons-material';
export default function ManageDishesPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useUser();
  const [activeStatus, setActiveStatus] = useState(null);

  const {
    filterCards,
    error,
    isLoading,
    getAllCards,
  } = useCards();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const filteredCards = activeStatus 
    ? filterCards.filter(card => card.category.toLowerCase() === activeStatus.toLowerCase())
    : filterCards;

  if (!user || user?.isAdmin === 'False') return <Navigate replace to={ROUTES.HOME} />;


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
              Restaurant Menu
            </Typography>
            <Typography variant="body1" color="text.secondary">
              View and manage your menu
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(ROUTES.CREATE_DISH)}
            startIcon={<AddBox/>}       
            sx={{
              minWidth: 220,
              borderRadius: theme.shape.borderRadius,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Add Dish
          </Button>
        </Paper>

        {/* Reservations List */}
        <Paper elevation={1} sx={{
          p: { xs: 2, sm: 3, },
          borderRadius: theme.shape.borderRadius,
        }}>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on desktop
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            mb: 1
          }}>


    <ToggleButtonGroup 
      value={activeStatus}
      onChange={(event, newCategory) => setActiveStatus(newCategory)}
      sx={{ gap: 2,}}
      color={theme.palette.primary}
      exclusive
    >
    <Typography 
      variant="subtitle1" 
      sx={{ color: 'text.secondary', mt: 1.4 }}
      
    >
      Filter By Category:
    </Typography>
      {['Starters', 'Breakfast', 'Lunch', 'Dinner'].map((category) => (
        <ToggleButton
          key={category}
          value={category}
          size='small'
          sx={{
            fontSize: '0.8rem',
            borderBottom: 2,
            borderTop: 0,
            borderRight: 0,
            borderLeft: 0,
            '&.Mui-selected': {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.action.selected,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
            }
          }}
        >
          {category}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    <SearchBar/>
    </Box>


      <DishesFeedback
        cards={filteredCards || filterCards}
        isLoading={isLoading}
        error={error}
      />
        </Paper>

        
      </Box>


    </Box>
  );
}