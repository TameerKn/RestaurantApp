import React from "react";
import { Box } from "@mui/material";
import LogoIcon from "../logo/logoIcon";
import Logo from "../logo/logo";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";


export default function LeftNavBar() {

  const { user } = useUser();

  if (!user) return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.HOME} label={"Home"} />
      <NavItem to={ROUTES.MENU} label={"Menu"} />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
    </Box>
  )

  if(user) return (
    <Box >
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.HOME} label={"Home"} />
      <NavItem to={ROUTES.RESERVATION} label={"Reserve"} />
      <NavItem to={ROUTES.MENU} label={"Menu"} />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
    </Box>
  )

  return (
    <Box >
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.HOME} label={"Home"} />
      <NavItem to={ROUTES.RESERVATION} label={"Reserve"} />
      <NavItem to={ROUTES.MENU} label={"Menu"} />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
    </Box>
  );
}