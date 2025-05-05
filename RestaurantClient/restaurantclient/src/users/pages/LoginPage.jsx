import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import { Container, Box, Paper, Typography, Link, useTheme } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import FormButton from "../../forms/components/FormButton";
import useUsers from "../hooks/useUsers";

export default function LoginPage() {
  const theme = useTheme();
  const { handleLogin } = useUsers();
  const { user } = useUser();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <LockOutlined sx={{ 
          fontSize: 50,
          color: theme.palette.primary.main,
          mb: 2 
        }} />
        
        <Typography component="h1" variant="h4" fontWeight={600} gutterBottom>
          Sign in
        </Typography>
        
        <Typography variant="body1" color="text.secondary" mb={4}>
          Welcome back! Please enter your details
        </Typography>

        <Paper elevation={3} sx={{ 
          p: 4, 
          width: '100%',
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[3]
        }}>
          <Form
            onSubmit={onSubmit}
            onReset={handleReset}
            validateForm={validateForm}
          >
            <Input
              label="Email Address"
              name="email"
              type="email"
              error={errors.email}
              onChange={handleChange}
              data={data}
              autoComplete="email"
              autoFocus
              fullWidth
              margin="normal"
            />
            
            <Input
              label="Password"
              name="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              data={data}
              autoComplete="current-password"
              fullWidth
              margin="normal"
            />

            {/*<Box sx={{  //Forgot Password keeping for future update
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
              mb: 3
            }}>
              <Link 
                href="#" 
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Forgot password?
              </Link>
            </Box>*/}

            <FormButton
              node="Sign In"
              type="submit"
              onClick={onSubmit}
              fullWidth
              variant="contained"
              disabled={!validateForm()}
              sx={{ 
                mt: 1, 
                mb: 2,
                py: 1.5,
                fontSize: '1rem'
              }}
            />

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link 
                  href={ROUTES.SIGNUP} 
                  variant="body2"
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 500
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Form>
        </Paper>
      </Box>
    </Container>
  );
}