import axios from "axios";

const apiUrl = "https://localhost:7227/Reservations";




export const getReservationCards = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  
  export const getReservationCard = async (cardId) => {
    try {
      const response = await axios.get(`${apiUrl}/${cardId}`);
      const data = response.data;

      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  

  export const getMyReservationCards = async () => {
    try {
      const response = await axios.get(`${apiUrl}/myreservations`);
      const data = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  };
  
  export const deleteReservationCard = async (cardId) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/${cardId}`);
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  };
  
  export const createReservationCard = async (normalizeReservationCard) => {
    try {
 
  
      // Optional: Format dates if server requires specific format
      if (normalizeReservationCard.date instanceof Date) {
        normalizeReservationCard.date = normalizeReservationCard.date.toISOString();
      }
  
      const { data } = await axios.post(apiUrl, normalizeReservationCard);
      return data;
  
    } catch (error) {
      // Enhanced error logging
      const errorDetails = {
        message: error.message,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          data: error.config?.data
        }
      };
  
      if (error.response) {
        errorDetails.response = {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers
        };
        console.error("Server responded with error:", errorDetails);
      } else if (error.request) {
        console.error("No response received:", errorDetails);
      } else {
        console.error("Request setup error:", errorDetails);
      }
  
      // Return a consistent error object
      return Promise.reject({
        userMessage: "Failed to create reservation",
        technicalMessage: error.message,
        details: error.response?.data || null
      });
    }
  };

  export const createReservationCard2 = async (card) => {
    try {
      const { data } = await axios.post(apiUrl, card);
      return data;
    } catch (error) {
      console.error("Error making request:", error.message); // Log error message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received for the request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      return Promise.reject(error.message);
    }
  };
  
  export const editReservationCard = async (cardId, normalaizedCard) => {
    try {
      const { data } = await axios.put(`${apiUrl}/${cardId}`, normalaizedCard);
      return data;
    } catch (error) {
      console.error("Error making request:", error.message); // Log error message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received for the request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      return Promise.reject(error.message);
    }
  };
  