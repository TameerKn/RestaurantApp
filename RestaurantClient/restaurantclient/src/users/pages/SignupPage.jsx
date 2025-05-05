import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import { Container, Box,  Typography, useTheme } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import SignupForm from "../components/SignupForm";
import useUsers from "../hooks/useUsers";

export default function SignupPage() {
  const theme = useTheme();
  const { handleSignup } = useUsers();
  const { user } = useUser();

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialSignupForm, signupSchema, handleSignup);

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <PersonAdd sx={{ 
          fontSize: 50,
          color: theme.palette.primary.main,
          mb: 2 
        }} />
        
        <Typography component="h1" variant="h4" fontWeight={600} gutterBottom>
          Create Account
        </Typography>
        
        <Typography variant="body1" color="text.secondary" mb={4}>
          Join us today! Fill in your details to get started
        </Typography>

        <SignupForm
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
          errors={errors}
          data={data}
          onInputChange={handleChange}
        />
      </Box>
    </Container>
  );
}