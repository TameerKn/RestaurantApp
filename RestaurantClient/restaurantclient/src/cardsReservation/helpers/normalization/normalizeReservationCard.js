const normalizeReservationCard = (reservationCard) => {
    return {
      number: reservationCard.number || 0,
      name: reservationCard.customerName,
      phone: reservationCard.phone,
      people: reservationCard.partySize,
      date: reservationCard.date,
      time: reservationCard.time,
      message: reservationCard.message,
      status: reservationCard.status,
      };
    };


  export default normalizeReservationCard;