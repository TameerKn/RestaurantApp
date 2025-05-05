import React from 'react';
import useUser from '../hooks/useUsers';
import { useTheme } from '@mui/material/styles';
import { 
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  Paper,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

const ProfilePage = () => {
  const { user,  handleLogout } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, borderRadius: 2 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ 
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            mb: 4
          }}
        >
          My Profile
        </Typography>

        <Grid container spacing={4}>
          {/* Profile Picture Section */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">

              <Button 
                variant="contained" 
                color="primary"
                sx={{ mb: 2 }}
                onClick={() => navigate(ROUTES.EDIT_PROFILE)}
              >
                Edit Profile
              </Button>
              <Button 
                variant="outlined" 
                color="error"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Grid>

          {/* User Details Section */}
          <Grid item xs={12} md={8}>
            <Card variant="outlined" sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                  Personal Information
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Grid container spacing={2}>
                  <DetailItem 
                    label="First Name" 
                    value={user.name?.first} 
                    theme={theme} 
                  />
                  <DetailItem 
                    label="Middle Name" 
                    value={user.name?.middle} 
                    theme={theme} 
                  />
                  <DetailItem 
                    label="Last Name" 
                    value={user.name?.last} 
                    theme={theme} 
                  />
                  <DetailItem 
                    label="Email" 
                    value={user.email} 
                    theme={theme} 
                  />
                  <DetailItem 
                    label="Phone" 
                    value={user.phone} 
                    theme={theme} 
                  />
                </Grid>
              </CardContent>
            </Card>

            {/* Additional sections can be added here */}
            {/* For example: */}
            {/* <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Reservation History
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {user.reservations?.length > 0 ? (
                  // Render reservations list
                ) : (
                  <Typography>No reservations yet</Typography>
                )}
              </CardContent>
            </Card> */}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

// Helper component for consistent detail items
const DetailItem = ({ label, value, theme }) => (
  <Grid item xs={12} sm={6}>
    <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
      {label}
    </Typography>
    <Typography variant="body1" sx={{ mb: 1 }}>
      {value || 'Not provided'}
    </Typography>
  </Grid>
);

export default ProfilePage;