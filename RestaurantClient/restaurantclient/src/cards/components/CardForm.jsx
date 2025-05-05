import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import { Box, Paper, Typography, useTheme } from "@mui/material";


const CardForm = ({
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
  title,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 3,
      backgroundColor: theme.palette.background.default
    }}>
      <Paper elevation={3} sx={{
        width: '100%',
        maxWidth: 800,
        p: 4,
        borderRadius: theme.shape.borderRadius * 2,
        backgroundColor: theme.palette.background.paper
      }}>
        <Form
          onSubmit={onSubmit}
          onReset={onReset}
          errors={errors}
          validateForm={validateForm}
          styles={{ 
            maxWidth: "100%",
            padding: 0 
          }}
          title={title}
          to={ROUTES.ROOT}
        >
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mb: 4
          }}>
            {/* Personal Information Section */}
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Personal Information
              </Typography>
              <Input
                name="title"
                label="Full Name"
                error={errors.title}
                onChange={onInputChange}
                data={data}
                fullWidth
              />
              <Input
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                fullWidth
              />
              <Input
                name="phone"
                label="Phone Number"
                type="phone"
                error={errors.phone}
                onChange={onInputChange}
                data={data}
                fullWidth
              />
            </Paper>

            {/* Reservation Details Section */}
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Reservation Details
              </Typography>
              <Input
                name="subtitle"
                label="Occasion (Optional)"
                error={errors.subtitle}
                onChange={onInputChange}
                data={data}
                fullWidth
              />
              <Input
                name="description"
                label="Special Requests"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                multiline
                rows={3}
                fullWidth
              />
            </Paper>

            {/* Address Section */}
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default,
              gridColumn: '1 / -1'
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Location Information
              </Typography>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2
              }}>
                <Input
                  name="country"
                  label="Country"
                  error={errors.country}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="state"
                  label="State/Region"
                  error={errors.state}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="city"
                  label="City"
                  error={errors.city}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="street"
                  label="Street"
                  error={errors.street}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="houseNumber"
                  label="House Number"
                  type="number"
                  error={errors.houseNumber}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="zip"
                  label="ZIP Code"
                  type="number"
                  error={errors.zip}
                  onChange={onInputChange}
                  data={data}
                />
              </Box>
            </Paper>

            {/* Additional Info Section */}
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default,
              gridColumn: '1 / -1'
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Additional Information
              </Typography>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2
              }}>
                <Input
                  name="webUrl"
                  label="Website (Optional)"
                  error={errors.webUrl}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="imageUrl"
                  label="Image URL (Optional)"
                  error={errors.imageUrl}
                  onChange={onInputChange}
                  data={data}
                />
                <Input
                  name="imageAlt"
                  label="Image Description"
                  error={errors.imageAlt}
                  onChange={onInputChange}
                  data={data}
                />
              </Box>
            </Paper>
          </Box>
        </Form>
      </Paper>
    </Box>
  );
};

export default React.memo(CardForm);