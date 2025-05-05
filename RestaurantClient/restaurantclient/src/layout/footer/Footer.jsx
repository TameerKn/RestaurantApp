import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from '@mui/icons-material/Home';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Paper elevation={5} sx={{ position: "sticky", bottom: 0, boxShadow: 15 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate(ROUTES.HOME)}
          />
          <BottomNavigationAction
            label="Menu"
            icon={<MenuBookIcon />}
            onClick={() => navigate(ROUTES.MENU)}
          />
          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
            onClick={() => navigate(ROUTES.ABOUT)}
          />
        </BottomNavigation>  
      </Paper>
    );
  }

  if (user?.isAdmin === "True") {
    return (
      <Paper elevation={5} sx={{ position: "sticky", bottom: 0, boxShadow: 15 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate(ROUTES.HOME)}
          />
          <BottomNavigationAction
            label="My Reservations"
            icon={<TableRestaurantIcon />}
            onClick={() => navigate(ROUTES.MY_RESERVATIONS)}
          />
          <BottomNavigationAction
            label="Reserve"
            icon={<AddBoxIcon />}
            onClick={() => navigate(ROUTES.RESERVATION)}
          />
          <BottomNavigationAction
            label="Dashboard"
            icon={<MonitorHeartIcon />}
            onClick={() => navigate(ROUTES.MANAGER)}
          />
        </BottomNavigation>
      </Paper>
    );
  }

  // Regular logged-in user
  return (
    <Paper elevation={5} sx={{ position: "sticky", bottom: 0, boxShadow: 15 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate(ROUTES.HOME)}
        />
        <BottomNavigationAction
          label="My Reservations"
          icon={<TableRestaurantIcon />}
          onClick={() => navigate(ROUTES.MY_RESERVATIONS)}
        />
        <BottomNavigationAction
          label="Reserve"
          icon={<AddBoxIcon />}
          onClick={() => navigate(ROUTES.RESERVATION)}
        />
      </BottomNavigation>
    </Paper>
  );
}