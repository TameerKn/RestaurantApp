import React from "react";
import { 
  Box, 
  Typography, 
  Divider, 
  Paper,
  TextField,
  InputAdornment,
  FormControl,
  MenuItem,
  Select,
  useTheme, 
} from '@mui/material';
import { 
  Person, 
  Email, 
  People, 
  CalendarToday, 
  AccessTime, 
  Notes,
  Cancel,
  Check,
} from '@mui/icons-material';
import LoopIcon from "@mui/icons-material/Loop";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import FormButton from "../../forms/components/FormButton";
import { useUser } from "../../users/providers/UserProvider";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";

const ReservationForm = ({
  error,
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
  title,
}) => {
  const theme = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <Box sx={{
      maxWidth: '800px',
      margin: '0 auto',
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>


                      {user.isAdmin === "True" && (

                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    borderRadius: theme.shape.borderRadius,
                    mb: 2,
                    textAlign: 'center',
                  }}>
                    <Typography variant="h5" fontWeight={600} mb={2}>
                      Reservation Status
                    </Typography>
                    <FormControl sx={{ maxWidth: '50%' }}>
                      <Select
                        name="status"
                        value={data.status || ''}
                        onChange={onInputChange}
                        displayEmpty
                        renderValue={(selected) => !selected ? <em>Change Status</em> : selected}
                      >
                        <MenuItem disabled value=""><em>Change Status</em></MenuItem>
                        <MenuItem value="Awaiting Approval">Awaiting Approval</MenuItem>
                        <MenuItem value="Confirmed">Confirmed</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                      </Select>
                    </FormControl>
                  </Paper>
                )}


      {/* Main Form Section */}
      <Paper elevation={3} sx={{ 
        p: 3, 
        borderRadius: theme.shape.borderRadius,
        textAlign: 'center'
      }}>

          <Typography Typography variant="h4" fontWeight={700} textAlign='center' gutterBottom>
            Add Reservation
          </Typography>

        <Form
          onSubmit={onSubmit}
          onReset={onReset}
          errors={errors}
          validateForm={validateForm}
          title={title}
          to={ROUTES.ROOT}
          styles={{ p: 0 }}
        >

          {/* Customer Information */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2}}>

          <Divider sx={{ my: 2 }} />
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Customer Name */}
            <Box sx={{ display: 'flex', gap: 2,  }}>
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
                <Person />
              </Box>
              <Box sx={{ flex: 1,  }}>
                <Input
                  name={"customerName"}
                  label="Customer Name"
                  error={errors.customerName}
                  onChange={onInputChange}
                  data={data}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* Email */}
            <Box sx={{ display: 'flex', gap: 2 }}>
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
                <Email />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Input
                  name="phone"
                  label="phone"
                  type="phone"
                  error={errors.phone}
                  onChange={onInputChange}
                  data={data}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* Party Size */}
            <Box sx={{ display: 'flex', gap: 2,  }}>
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
                <People />
              </Box>
              <Box sx={{ flex: 1 }}>
                <TextField
                  label="Number of People"
                  name="partySize"
                  type="number"
                  value={data.partySize || ''}
                  onChange={(e) => onInputChange({
                    target: {
                      name: e.target.name,
                      value: parseInt(e.target.value) || 0 // Force number conversion
                    }
                  })}                  
                  error={!!errors.partySize}
                  helperText={errors.partySize}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <People />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2,}}>

            {/* Date */}
            <Box sx={{ display: 'flex', gap: 2 }}>
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
                <CalendarToday />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Input
                  name="date"
                  label="Date"
                  type="date"
                  error={errors.date}
                  onChange={onInputChange}
                  data={data}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarToday />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* Time */}
            <Box sx={{ display: 'flex', gap: 2 }}>
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
                <AccessTime />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Input
                  name="time"
                  label= "time"
                  type="time"
                  error={errors.time}
                  onChange={onInputChange}
                  data={data}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTime />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* Special Requests */}
            <Box sx={{ display: 'flex', gap: 2, }}>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'action.hover',
                color: 'primary.main',
                pt: 1
              }}>
                <Notes />
              </Box>
              <Box sx={{flex: 1}}>
                <Input
                  name="message"
                  label="Special Requests"
                  error={errors.specialRequests}
                  onChange={onInputChange}
                  data={data}
                  multiline
                  rows={4}
                  fullWidth
                />
              </Box>
            </Box>
          </Box>


          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex',
          gap: 2,
          }}>
     
            <FormButton
            node="Cancel"
            onClick={() => navigate(ROUTES.HOME)}
            color="error"
            component="div"
            variant="outlined"
            startIcon={<Cancel />}
          />
          <FormButton
            node="Reset"
            variant="outlined"
            component="div"
            onClick={onReset}
            startIcon={<LoopIcon/>}
          />
          <FormButton
            node= {data.reservationNumber ? 'Update Reservation' : 'Reserve'}
            onClick={onSubmit}
            disabled={!validateForm()}
            size="large"
            startIcon={<Check />}
          />
          </Box>

        

        </Form>
      </Paper>
    </Box>
  );
};

export default React.memo(ReservationForm);