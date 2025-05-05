import { Typography, Box, Button, Grid, Paper, Avatar, Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import { EmojiEvents, LocalDining, Group, Fastfood } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel';
import useCards from "../cards/hooks/useCards";

export default function HomePage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { filterCards, getAllCards } = useCards(); // Get cards data and fetch method
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    getAllCards(); // Fetch cards when component mounts
  }, [getAllCards]);

  useEffect(() => {
    if (filterCards && filterCards.length > 0) {
      // Get 3 random items when cards are loaded
      const shuffled = [...filterCards].sort(() => 0.5 - Math.random());
      setFeaturedItems(shuffled.slice(0, 3));
    }
  }, [filterCards]);

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(245, 245, 245, 0.9)',
        backgroundBlendMode: 'overlay',
        backgroundImage: 'url(assets/HomeDish.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: { xs: '4rem 0', md: '0' },
        color: theme.palette.text.primary
      }}>
        <Container maxWidth="lg" sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4
        }}>
          {/* Text Content */}
          <Box sx={{
            width: { xs: '100%', md: '50%' },
            textAlign: { xs: 'center', md: 'left' },
            zIndex: 1
          }}>
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
              color: theme.palette.text.primary
            }}>
              Enjoy Your Healthy<br />Delicious Food
            </Typography>
            
            <Typography variant="h2" sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
              mb: 2,
              color: theme.palette.text.secondary
            }}>
              The Best Dining Experience
            </Typography>
            
            <Typography sx={{
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: { xs: '0 auto', md: '0' },
              mb: 3,
              color: theme.palette.text.secondary
            }}>
              Browse a Collection of our very delicious meals!
            </Typography>
            
            <Box sx={{
              display: 'flex',
              gap: '1rem',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate(ROUTES.RESERVATION)}
                sx={{ 
                  borderRadius: '2px',
                  px: 4,
                  fontWeight: 600,
                  padding: '0.8rem 2rem',
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark
                  }
                }}
                startIcon={<LocalDining/>}
              >
                Reserve
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate(ROUTES.MENU)} 
                sx={{
                  padding: '0.8rem 2rem',
                  borderRadius: '2px',
                  border: `1.5px solid ${theme.palette.primary.main}`,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    color: theme.palette.primary.dark,
                    backgroundColor: theme.palette.action.hover
                  }
                }}
                startIcon={<Fastfood/>}
              >
                Our Menu
              </Button>
            </Box>
          </Box>
          
          {/* Spacer for desktop layout */}
          <Box sx={{ width: { xs: '0', md: '50%' } }} />
        </Container>
      </Box>

              {/* Values Section - Horizontal Layout */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography 
            variant="h2" 
            align="center" 
            fontWeight={700} 
            sx={{ 
              mb: 6,
              color: theme.palette.text.primary
            }}
          >
            Our Core Values
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            {[
              { 
                icon: <LocalDining fontSize="large" />, 
                title: "Quality Ingredients", 
                text: "We partner with local farmers to source the freshest seasonal ingredients." 
              },
              { 
                icon: <EmojiEvents fontSize="large" />, 
                title: "Culinary Excellence", 
                text: "Traditional techniques meet innovative approaches for memorable dining." 
              },
              { 
                icon: <Group fontSize="large" />, 
                title: "Warm Hospitality", 
                text: "We treat every guest like family with attentive, comfortable service." 
              }
            ].map((item, index) => (
              <Paper 
                key={index}
                elevation={2} 
                sx={{ 
                  flex: 1,
                  p: 4,
                  minWidth: { xs: '100%', md: 0 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: theme.shape.borderRadius,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.custom.glow,
                    borderTop: `4px solid ${theme.palette.primary.main}`
                  },
                  borderTop: '4px solid transparent'
                }}
              >
                <Avatar sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  color: theme.palette.primary.contrastText, 
                  width: 80, 
                  height: 80,
                  mb: 3,
                  '& .MuiSvgIcon-root': {
                    fontSize: '2.5rem'
                  }
                }}>
                  {item.icon}
                </Avatar>
                <Typography 
                  variant="h5" 
                  fontWeight={600} 
                  gutterBottom 
                  sx={{ 
                    color: theme.palette.text.primary,
                    textAlign: 'center'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {item.text}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>

      {/* Featured Menu Items Section */}
      {featuredItems.length > 0 && (
        <Box sx={{ 
          py: 8,
          backgroundColor: theme.palette.background.paper
        }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" sx={{ mb: 2, color: theme.palette.text.primary }}>
              Today's Specials
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              {featuredItems.map((dish) => (
                <Grid item xs={12} sm={6} md={4} key={dish._id}>
                  <Paper elevation={3} sx={{ 
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <Box sx={{ 
                      height: 200,
                      backgroundImage: `url(${dish.image?.url || 'assets/default-food.jpg'})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                    <Box sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {dish.title}
                        </Typography>
                        <Typography color="primary">
                          ${dish.price}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {dish.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {dish.category}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                variant="outlined"
                onClick={() => navigate(ROUTES.MENU)}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2
                  }
                }}
              >
                View Full Menu
              </Button>
            </Box>
          </Container>
        </Box>
      )}

    </Box>
  );
}