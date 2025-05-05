import { useTheme } from '@mui/material/styles';
import { 
  Box,
  Button,
  Container,
  Typography,
  Paper,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function ErrorPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: isMobile ? 3 : 6,
          borderRadius: 2,
          textAlign: 'center',
          backgroundColor: theme.palette.background.paper
        }}
      >
        <Box sx={{ color: theme.palette.error.main, mb: 3 }}>
          <ErrorOutlineIcon sx={{ fontSize: 80 }} />
        </Box>
        
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            mb: 2
          }}
        >
          Page Not Found
        </Typography>
        
        <Typography 
          variant="h5" 
          component="h2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4
          }}
        >
          Error 404 - The requested page doesn't exist
        </Typography>
        
        <Typography 
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4
          }}
        >
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate(ROUTES.HOME)}
            sx={{ px: 4 }}
          >
            Go to Home
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => window.history.back()}
            sx={{ px: 4 }}
          >
            Go Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}