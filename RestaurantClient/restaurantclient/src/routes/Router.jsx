import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import MenuPage from "../cards/pages/MenuPage";
import MyReservationsPage from "../cardsReservation/pages/MyReservationsPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import DishDetailsPage from "../cards/pages/DishDetailsPage";
import Reservation from "../cardsReservation/pages/Reservation";
import ErrorPage from "../pages/ErrorPage";

import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";

import EditCardPage from "../cards/pages/EditDishPage";
import ReservationDetailsPage from "../cardsReservation/pages/ReservationDetailsPage";
import EditReservation from "../cardsReservation/pages/EditReservation";
import ManageDishesPage from "../cards/pages/ManageDishesPage";
import ManageReservationsPage from "../cardsReservation/pages/ManageReservationsPage";
import AddDishPage from "../cards/pages/AddDishPage";
import Manage from "../pages/Manage";
import ProfilePage from "../users/pages/ProfilePage";
export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.MANAGE_DISHES} element={<ManageDishesPage />} />
      <Route path={ROUTES.MANAGE_RESERVATIONS} element={<ManageReservationsPage />} />
      <Route path={ROUTES.DISH_INFO + "/:id"} element={<DishDetailsPage />} />
      <Route path={ROUTES.RESERVATION_INFO + "/:id"} element={<ReservationDetailsPage />} />
      <Route path={ROUTES.EDIT_RESERVATION + "/:id"} element={<EditReservation />} />
      <Route path={ROUTES.MENU} element={<MenuPage />} />
      <Route path={ROUTES.MY_RESERVATIONS} element={<MyReservationsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.RESERVATION} element={<Reservation />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATE_DISH} element={<AddDishPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />  
      <Route path={ROUTES.MANAGER} element={<Manage/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}