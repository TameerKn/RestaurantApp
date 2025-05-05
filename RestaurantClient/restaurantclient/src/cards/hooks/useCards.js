import { useCallback, useState, useEffect, useMemo } from "react";
import {
  createCard,
  editCard,
  deleteCard,
  changeLikeStatus,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import { useNavigate, useSearchParams  } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider"
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import normalizeCard from "../helpers/normalization/normalizeCard";

export default function useCards() {
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
             card.name.includes(query) || String(card.price).includes(query) ||
             card.category.includes(query) || card.description.includes(query)
          )
        );
    }, [cards, query]);

  const getAllMyCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getMyCards();
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
      const data = await getCards();
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
      const data = await getCard(cardId);
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardByIdEdit = useCallback(async (cardId) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(cardId);
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
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "You've created a new business card!");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
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
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "Your card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.MY_CARDS);
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
        const card = await deleteCard(cardId);
        setCard(card)
        setSnack("success", "You've successfully deleted your card!");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
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
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user._id));
      setCards(favCards);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [user]);

  const handleCardLike = useCallback(async (cardId,isLiked) => {
    try {
      await changeLikeStatus(cardId);
     if(isLiked){ 
      setSnack("error", "The business card has been unLiked")
    }else{
      setSnack("success", "The business card has been Liked")
  }
    } catch (error) {
      setError(error)
    }
    setIsLoading(false);
  },[setSnack]);

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
    handleCardLike,
    handleCreateCard,
    handleUpdateCard,
    getAllMyCards,
    GetFavCards,
  };
}