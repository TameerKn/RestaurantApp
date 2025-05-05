import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useReservationsCards from "../hooks/UseReservationsCards";
import useReservationForm from "../../forms/hooks/useReservationForm";
import ReservationSchema from "../models/reservationSchema";
import { Container, Box, Typography } from "@mui/material";
import initialReservationCardForm from "../helpers/initialForms/initialReservationCardForm";
import ReservationForm from "../components/ReservationForm";

export default function Reservation() {
  const { user } = useUser();
  const { handleCreateCard } = useReservationsCards();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
  useReservationForm(initialReservationCardForm, ReservationSchema, handleCreateCard);



  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReservationForm
        title="Reservation Details"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        validateForm={validateForm}
        onInputChange={handleChange}
        data={data}
      />


    </Container>
  );
}