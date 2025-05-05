import React from "react";
import { Card, CardActionArea, useTheme } from "@mui/material";

import CardHeaderComponent from "./DishCardHeaderComponent";
import CardBody from "./DishCardBody";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function DishCardComponent({
  card,

}) {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Card elevation={4} sx={{ transition: "500ms", borderRadius: 0, width: 335,  m: 2, ':hover': {boxShadow: theme.palette.custom.glow, }, }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.DISH_INFO + "/" + card._id)}
      >
        <CardHeaderComponent image={card.image} />
        <CardBody
          name={card.name}
          price={card.price}
          tag={card.tag}
          description={card.description}
        />
      </CardActionArea>
    </Card>
  );
}