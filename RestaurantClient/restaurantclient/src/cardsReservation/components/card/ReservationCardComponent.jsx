import React from "react";
import { Card, CardActionArea, Divider} from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";
import CardHeaderComponent from "./ReservationCardHeaderComponent";
import CardBody from "./ReservationCardBody";
import CardActionBar from "./ReservationCardActionBar";
import { useNavigate } from "react-router-dom";
import { Chip  } from '@mui/material'
import ROUTES from "../../../routes/routesModel";

export default function ReservationCardComponent({
    card,
    handleCardDelete,
}){
  const { user } = useUser();
  const navigate = useNavigate();

    return (
    <Card sx={{elevation: "3", transition: "500ms", borderRadius: 2, width: 233, m: 2, ':hover': {boxShadow: "3px 0px 20px 3px rgb(99, 129, 212)", width: 270, }, }}>
          <CardHeaderComponent    number={user && user.isAdmin === "True" ? `RN-${card.number}` : null} status={card.status} />
          <CardActionArea onClick={() =>  navigate(ROUTES.RESERVATION_INFO + "/" + card._id)}>
          <CardBody 
            textAlign = "start"
            number={card.number}
            name={card.name}
            phone={card.phone}
            people={card.people}
            date={card.date}
            time={card.time}
            message={card.message}
            status={card.status}
            Id = {card._id}
            />
          </CardActionArea>
          <Divider variant="middle" />
          <CardActionBar
          handleCardDelete={handleCardDelete}
          cardId={card._id}
          userId={card.user_id}
         />
     </Card>   
    )
}