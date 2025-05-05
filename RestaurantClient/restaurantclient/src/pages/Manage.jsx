import React from "react";
import { useTheme } from '@mui/material/styles';
import { Navigate, useNavigate } from "react-router-dom";
import { 
    Typography, 
    Paper,
    Button,
    Box,
  } from '@mui/material';
import {AutoFixHigh} from '@mui/icons-material'
import { useUser } from "../users/providers/UserProvider";
import ROUTES from "../routes/routesModel";

export default function Manage() {
  const theme = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  console.log("User object:", user);
  console.log("isAdmin type:", typeof user?.isAdmin);
  console.log("isAdmin value:", user?.isAdmin);
  
  if (!user || user?.isAdmin === 'False') return <Navigate replace to={ROUTES.HOME} />;
  return (

    <Box sx={{
        maxWidth: 1200,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        textAlign: 'center'
        }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Manager Dashboard
            </Typography>
        <Paper elevation={3} sx={{
        display: 'flex',
        flexDirection: 'row', 
        p: 3, 
        borderRadius: theme.shape.borderRadius,
        mb: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        }}>
            <Button
            variant="contained"
            size="large"
            onClick={() => navigate(ROUTES.MANAGE_RESERVATIONS)}
            startIcon={<AutoFixHigh/>}
            sx={{
              minWidth: 220,
              borderRadius: theme.shape.borderRadius,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            Manage Reservations
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(ROUTES.MANAGE_DISHES)}
            startIcon={<AutoFixHigh/>}
            sx={{
              minWidth: 220,
              borderRadius: theme.shape.borderRadius,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            Manage Dishes
          </Button>

        </Paper>

    </Box>
  );
}