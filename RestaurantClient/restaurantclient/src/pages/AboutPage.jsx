import React from "react";
import { Typography, Paper, Box, Grid, Avatar, useTheme, Button, FilledInput } from "@mui/material";
import { Restaurant, EmojiEvents, LocalDining, Group } from "@mui/icons-material";

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, py: 4 }}>


      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto', 
        px: { xs: 2, md: 3 },
      }}>
        {/* Our Story Section */}
        <Paper elevation={3} sx={{ mb: 2, p: 3, borderRadius: theme.shape.borderRadius, textAlign:'center' }}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Our Story
              </Typography>
              <Box sx={{
                height: 300,
                backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5)',
                backgroundSize: 'fill',
                backgroundPosition: 'center',
                borderRadius: theme.shape.borderRadius,
                mb: 2,
              }} />

              <Typography paragraph sx={{ mb: 1 }}>
                Founded in 2010, Savory & Spice began as a small family-owned bistro with a simple mission: to serve authentic, flavorful dishes made with locally-sourced ingredients.
              </Typography>
              <Typography paragraph>
                Our founder, Chef Marco, brings 25 years of international experience to our kitchen, blending traditional techniques with modern innovation.
              </Typography>
        </Paper>

        {/* Values Section */}
        <Paper elevation={3} sx={{ mb: 2, p: 4, borderRadius: theme.shape.borderRadius }}>
          <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 4 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: <LocalDining fontSize="large" />, title: "Quality Ingredients", 
                text: "We partner with local farmers to source the freshest seasonal ingredients." },
              { icon: <EmojiEvents fontSize="large" />, title: "Culinary Excellence", 
                text: "Traditional techniques meet innovative approaches for memorable dining." },
              { icon: <Group fontSize="large" />, title: "Warm Hospitality", 
                text: "We treat every guest like family with attentive, comfortable service." }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 3, maxWidth: 300, borderRadius: theme.shape.borderRadius }}>
                  <Avatar sx={{ 
                    bgcolor: theme.palette.primary.main, 
                    color: 'white', 
                    width: 80, 
                    height: 80,
                    mx: 'auto',
                    mb: 2
                  }}>
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom align="center">
                    {item.title}
                  </Typography>
                  <Typography align="center">
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
        {/* Team Section */}
        <Paper elevation={3} sx={{ mb: 2, p: 3, borderRadius: theme.shape.borderRadius, textAlign: 'center'}}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Meet Our Chef
              </Typography>
              <Typography paragraph sx={{ mb: 2 }}>
                Chef Marco brings decades of international experience to our kitchen. Trained in Paris and having worked in Michelin-starred restaurants across Europe.
              </Typography>
              <Typography paragraph fontStyle="italic">
                "Respect the ingredients, master the techniques, and cook with passion. Every dish should tell a story."
              </Typography>
              <Box sx={{
                height: 300,
                backgroundImage: 'url(https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: theme.shape.borderRadius,
              }} />
        </Paper>

        {/* CTA Section */}
        <Paper elevation={6} sx={{ 
          p: 4,
          textAlign: 'center',
          borderRadius: theme.shape.borderRadius,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0)',
          backgroundSize: 'cover',
          color: 'white'
        }}>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            Join Us for Dinner
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            Reserve your table today and discover why Savory & Spice has become the talk of the town
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ 
              px: 4,
              py: 1,
              borderRadius: theme.shape.borderRadius
            }}
          >
            Book a Table
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}