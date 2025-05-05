import { useCallback, useState, useEffect, } from "react";
import {
  createReservationCard,
  editReservationCard,
  deleteReservationCard,
  getReservationCard,
  getReservationCards,
  getMyReservationCards,
} from "../services/ReservationCardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import { useNavigate, useSearchParams  } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider"
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import normalizeReservationCard from "../helpers/normalization/normalizeReservationCard";

export default function useReservationsCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [filterCards, setFilterCards] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  const setSnack = useSnack();
  const {user} = useUser()
  useAxios();
 
    useEffect(() => {
      setQuery(searchParams.get("q") ?? "");
    }, [searchParams]);

    useEffect(() => {
      if (cards)
        setFilterCards(
        cards.filter(
          (card) =>
            card.name.includes(query) || card.phone.includes(query)
            
        )
        );
    }, [cards, query]);

const getAllMyCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getMyReservationCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getReservationCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (cardId) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getReservationCard(cardId);
      setCard(data);
      console.log("cardIdData:" + data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardByIdEdit = useCallback(async (cardId) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getReservationCard(cardId);
      setCard(data);
      return data;
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);


  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createReservationCard(normalizeReservationCard(cardFromClient));
        setCard(card);
        setSnack("success", "You've created a new business card!");
        setTimeout(() => {
          navigate(ROUTES.RESERVATION_INFO + "/"+card._id);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editReservationCard(cardId, normalizeReservationCard(cardFromClient));
        setCard(card);
        setSnack("success", "Your card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.RESERVATION_INFO + "/"+card._id);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback(
    async (cardId) => {
      try{
        const card = await deleteReservationCard(cardId);
        setCard(card)
        setSnack("success", "You've successfully deleted your card!");
        setTimeout(() => {
          navigate(ROUTES.MY_RESERVATIONS);
          getAllCards();
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
    }, 
    [setSnack, navigate, getAllCards]
  );

  
  const GetFavCards = useCallback(async () => {
    try {
      const cards = await getMyReservationCards();
      const favCards = cards.filter((card) => card.likes.includes(user._id));
      setCards(favCards);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [user]);

  return {
    cards,
    card,
    error,
    isLoading,
    filterCards,
    getAllCards,
    getCardByIdEdit,
    getCardById,
    handleCardDelete,
    handleCreateCard,
    handleUpdateCard,
    getAllMyCards,
    GetFavCards,
  };

}