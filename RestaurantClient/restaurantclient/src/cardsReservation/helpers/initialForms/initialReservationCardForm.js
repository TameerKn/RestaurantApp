const initialReservationCardForm = {
    customerName: "",
    phone: "",
    partySize: 1,
    date: new Date().toISOString().split('T')[0],
    time: "12:00",
    message: "",
    status: "Awaiting Approval"
  };
  
  export default initialReservationCardForm;