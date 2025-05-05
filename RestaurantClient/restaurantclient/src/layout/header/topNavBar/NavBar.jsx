import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Toolbar, useTheme } from "@mui/material";
import RightNavBar from "./rightNavigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";

export default function NavBar() {
  const theme = useTheme();



  return (
    <MenuProvider>
      <AppBar position="sticky" elevation={5}>
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <LeftNavBar />
          <RightNavBar/>
       </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}