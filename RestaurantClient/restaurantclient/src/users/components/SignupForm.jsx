import React from "react";
import { Grid, Box, Paper, Button, Link, Typography } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "@mui/material/styles";

export default function SignupForm({
  onSubmit,
  onReset,
  validateForm,
  errors,
  data,
  onInputChange,
}) {
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{ 
      p: 4, 
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3]
    }}>
      <Form
        onSubmit={onSubmit}
        onReset={onReset}
        validateForm={validateForm}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              name="first"
              label="First Name"
              error={errors.first}
              onChange={onInputChange}
              data={data}
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name="middle"
              label="Middle Name (Optional)"
              error={errors.middle}
              onChange={onInputChange}
              data={data}
              fullWidth
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name="last"
              label="Last Name"
              error={errors.last}
              onChange={onInputChange}
              data={data}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name="phone"
              label="Phone Number"
              type="tel"
              error={errors.phone}
              onChange={onInputChange}
              data={data}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="email"
              label="Email Address"
              type="email"
              error={errors.email}
              onChange={onInputChange}
              data={data}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name="password"
              label="Password"
              type="password"
              error={errors.password}
              onChange={onInputChange}
              data={data}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name="url"
              label="Profile Image URL (Optional)"
              error={errors.url}
              onChange={onInputChange}
              data={data}
              fullWidth
              required={false}
            />
          </Grid>
        </Grid>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4,
          gap: 2
        }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!validateForm()}
            sx={{ 
              py: 1.5,
              fontSize: '1rem'
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{' '}
            <Link 
              href={ROUTES.LOGIN} 
              variant="body2"
              sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 500
              }}
            >
              Log in
            </Link>
          </Typography>
        </Box>
      </Form>
    </Paper>
  );
}