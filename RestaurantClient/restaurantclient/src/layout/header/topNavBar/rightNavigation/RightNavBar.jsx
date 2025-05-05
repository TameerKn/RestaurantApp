import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton } from "@mui/material";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import MoreButton from "./MoreButton";


export default function RightNavBar({}) {

  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>

      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
          
        }}
      >
        
         <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon color="secondary"/> : <DarkModeIcon color="secondary" />}
        </IconButton>

        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton />
    </>
  );
}
