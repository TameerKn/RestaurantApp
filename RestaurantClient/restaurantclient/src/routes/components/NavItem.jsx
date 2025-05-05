import React from "react";
import NavBarLink from "./NavBarLink";
import { Button, Typography } from "@mui/material";
export default function NavItem({ to, sx, label }) {

  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="secondary">
        <Typography sx={{fontSize: 20, fontWeight: 600}}>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}