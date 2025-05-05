import { Box, Typography, Divider, Chip, Button, Paper } from '@mui/material';
import { Person, Email, People, CalendarToday, AccessTime, Notes, AutoFixHigh, Cancel  } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Spinner from "../../components/Spinner";
import React, { useEffect } from "react";
import useReservationsCards from "../hooks/UseReservationsCards";
import ROUTES from '../../routes/routesModel';

export default function ReservationDetailsPage() {
  const theme = useTheme();
  const { id } = useParams();
  const { card,
          error,
          isLoading,
          getCardById,
          handleCardDelete,
           } = useReservationsCards();

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  const navigate = useNavigate();
  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_RESERVATION + "/" + id);
  };

  if (isLoading) return <Spinner/> 
  if (error) return <div>Error loading reservation: {error.message}</div>;
  if (!card) return <div>Reservation not found</div>;

  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: '0 auto',
      p: 4,
      display: 'column',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4
    }}>

            {/* Additional Info Section (Right Side) */}
            <Box sx={{mb: 2}}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: theme.shape.borderRadius }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Reservation Status
          </Typography>
        <Chip 
          label={card.status}
          sx={{ fontSize: '0.8rem', p: 1, mb: 1 }}
          color={
            card.status === "Confirmed" ? "success" :
            card.status === "Awaiting Approval" ? "warning":
            card.status === "Completed" ? "info" :
            "default"
          }
          />
        </Paper>
      </Box>

      {/* Header Section */}
      <Box>
        <Paper elevation={3} sx={{ p: 3, borderRadius: theme.shape.borderRadius }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Reservation Details:
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Reservation Number */}
          <DetailItem 
            icon={<Typography variant="h6">#</Typography>}
            label="Reservation Number"
            value={card.number} // Replace with actual reservation number
            sx={{ mb: 3 }}
          />

          {/* Customer Info */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <DetailItem 
              icon={<Person />}
              label="Customer Name"
              value={card.name} // Replace
            />

            <DetailItem 
              icon={<Email />}
              label="Email"
              value={card.phone} // Replace
            />

            <DetailItem 
              icon={<People />}
              label="Number of People"
              value={card.people} // Replace
            />

            <DetailItem 
              icon={<CalendarToday />}
              label="Date"
              value={card.date} // Replace
            />

            <DetailItem 
              icon={<AccessTime />}
              label="Time"
              value={card.time} // Replace
            />

            <DetailItem 
              icon={<Notes />}
              label="Special Requests"
              value={card.message} // Replace
              multiline
            />

            <DetailItem 
              icon={<Notes />}
              label="Status"
              value={card.status} // Replace
              multiline
            />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleCardEdit(id)}
              sx={{ borderRadius: theme.shape.borderRadius, px: 4 }}
              startIcon={<AutoFixHigh/>}
            >
              
              Modify Reservation
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
              Cancel Reservation
            </Button>
          </Box>
        </Paper>
      </Box>


    </Box>
  );
};

// Reusable detail row component
const DetailItem = ({ icon, label, value, multiline = false, sx = {} }) => (
  <Box sx={{ display: 'flex', gap: 2, ...sx }}>
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: '50%',
      bgcolor: 'action.hover',
      color: 'primary.main'
    }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1" sx={{ wordBreak: 'break-word', whiteSpace: multiline ? 'pre-wrap' : 'nowrap' }}>
        {value || 'Not specified'}
      </Typography>
    </Box>
  </Box>
);
