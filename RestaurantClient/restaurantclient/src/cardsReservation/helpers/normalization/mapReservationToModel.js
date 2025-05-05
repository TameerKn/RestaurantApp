const mapReservationCardToModel = (reservationCard) => {
    return {
        customerName: reservationCard.customerName,
        phone: reservationCard.phone,
        partySize: reservationCard.partySize,
        date: reservationCard.date,
        time: reservationCard.time,
        message: reservationCard.message,
        status: reservationCard.status
    };
  };
  
  export default mapReservationCardToModel;