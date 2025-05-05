import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import ReservationForm from "../components/ReservationForm";
import initialReservationCardForm from "../helpers/initialForms/initialReservationCardForm";
import mapReservationToModel from "../helpers/normalization/mapReservationToModel";
import useReservationsCards from "../hooks/UseReservationsCards";
import reservationSchema from "../models/reservationSchema";

export default function EditReservation() {
  const { id } = useParams();
  const { handleUpdateCard, getCardByIdEdit, card } = useReservationsCards();
  const { user } = useUser();

  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialReservationCardForm, reservationSchema, (newCard) =>
    handleUpdateCard(card._id, newCard)
  );
  console.log("Data before passing to form:", JSON.parse(JSON.stringify(data)));

  useEffect(() => {
    getCardByIdEdit(id).then((data) => {
      const modelCard = mapReservationToModel(data);
      setData(modelCard);
    });
  }, [getCardByIdEdit, setData, id]);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data && (
        <ReservationForm
          title="Edit Reservation"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      )}
    </Container>
  );
}