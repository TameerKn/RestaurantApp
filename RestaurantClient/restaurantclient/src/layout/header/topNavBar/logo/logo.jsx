import React from "react";
import { Typography } from "@mui/material";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function Logo() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          variant="h4"
          sx={{
            fontSize: 35,
            fontWeight: "Bold",
            fontFamily: "fantasy",
            marginRight: 2,
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          Pastaraunt
        </Typography>
      </NavBarLink>
    </>
  );
}