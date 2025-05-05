import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../users/providers/UserProvider";
import DishesFeedBack from "../components/DishesFeedback";
import useCards from "../hooks/useCards";
import { Typography, Link, Paper, Box, ToggleButton, ToggleButtonGroup, useTheme} from "@mui/material";

export default function MenuPage() {
  const {
    filterCards,
    error,
    isLoading,
    getAllCards,
  } = useCards();

  const { user } = useUser();
  const theme = useTheme();

  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const filteredCards = activeCategory 
    ? filterCards.filter(card => card.category.toLowerCase() === activeCategory.toLowerCase())
    : filterCards;



  if (!user) return  (
    <>
 


<Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      py: 4,
      px: { xs: 2, sm: 4 }
    }}>

      {/* Main Content Container */}
      <Box sx={{
        textAlign:'center',
        maxWidth: 1200,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
      <Typography> <Link fontWeight= "bold" href = "/signup">Not Registered?</Link> Please login to access our reservation!</Typography>


        {/* Reservations List */}
        <Paper elevation={1} sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: theme.shape.borderRadius
        }}>




             {/* Title remains centered above */}
  <Box textAlign={'center'} padding={1}>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Check Our Menu
    </Typography>
  </Box>

  {/* New container for search + toggle buttons */}
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on desktop
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    mb: 2
  }}>

    {/* Toggle buttons */}
    <ToggleButtonGroup 
      value={activeCategory}
      onChange={(event, newCategory) => setActiveCategory(newCategory)}
      sx={{ gap: 2 }}
      color={theme.palette.primary}
      exclusive
    >
      {['Starters', 'Breakfast', 'Lunch', 'Dinner'].map((category) => (
        <ToggleButton
          key={category}
          value={category}
          sx={{ 
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

  </Box>

      <DishesFeedBack
        cards={filteredCards || filterCards} 
        isLoading={isLoading}
        error={error}
      />
        </Paper>
      </Box>
    </Box>
    </>   
  );
  
  return (
    <>
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


        {/* Reservations List */}
        <Paper elevation={1} sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: theme.shape.borderRadius
        }}>




             {/* Title remains centered above */}
  <Box textAlign={'center'} padding={1}>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Check Our Menu
    </Typography>
  </Box>

  {/* New container for search + toggle buttons */}
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on desktop
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    mb: 2
  }}>

    {/* Toggle buttons */}
    <ToggleButtonGroup 
      value={activeCategory}
      onChange={(event, newCategory) => setActiveCategory(newCategory)}
      sx={{ gap: 2 }}
      color={theme.palette.primary}
      exclusive
    >
      {['Starters', 'Breakfast', 'Lunch', 'Dinner'].map((category) => (
        <ToggleButton
          key={category}
          value={category}
          sx={{ 
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

  </Box>

      <DishesFeedBack
        cards={filteredCards || filterCards} 
        isLoading={isLoading}
        error={error}
      />
        </Paper>
      </Box>
    </Box>
    </>
  );
}