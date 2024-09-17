import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../Components/Calendar";
import Time from "../Components/Time";
import Form from "../Components/Form";
import Place from "../Components/Place";
import People from "../Components/People";
import service from "../service/service.config";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shakeError, setShakeError] = useState(false);

  const navigate = useNavigate();

  const handleReservation = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(customerEmail)) {
        setErrorMessage("Please enter a valid email address.");
        setShakeError(true);
        return;
      }
      const formattedDate = selectedDate.toISOString().split("T")[0];
      
      const reservationData = {
        date: formattedDate,
        time: selectedTime,
        numGuests: numGuests,
        name: customerName,
        email: customerEmail,
        phone: phone,
        place: place,
      };
      if (!selectedTime || !place || !numGuests || !phone || !customerEmail || !customerName) {
        setErrorMessage("Please fill in all required fields.");
        setShakeError(true);
        return;
      }
      const response = await service.post("/reservation", reservationData);
      if (response.status === 201) {
        alert("Reservation created successfully! Now you can see our menu!");
        setErrorMessage("")
        navigate("/menu")
      }
    } catch (error) {
      // mensaje de error desde el backend
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Mostrar el mensaje de error
      } else {
        setErrorMessage("Failed to create the reservation. Please try again.");
        setShakeError(true);
      }
    }
  };
  
  useEffect(() => {
    if (shakeError) {
      const timer = setTimeout(() => setShakeError(false), 600); // Duración
      return () => clearTimeout(timer);
    }
  }, [shakeError]);

  return (
    <>
      <Header />
      <div className="reservations">
        <div className="reservations-poster">
          <span>RESERVATIONS</span>
          <div className="reservations-group">
          <People numGuests={numGuests} setNumGuests={setNumGuests} />
          <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
          <Time
            selectedDate={selectedDate}
            numGuests={numGuests}
            setSelectedTime={setSelectedTime}
            selectedTime={selectedTime}
          />
          <Place place={place} setPlace={setPlace}/>
          </div>
          <Form
            customerName={customerName}
            customerEmail={customerEmail}
            phone={phone}
            setCustomerName={setCustomerName}
            setCustomerEmail={setCustomerEmail}
            setPhone={setPhone}
          />
          {errorMessage && (
            <div className={`error-message ${shakeError ? "shake" : ""}`}>
              {errorMessage}
            </div>
          )}
          <button className="btn-filled" onClick={handleReservation}>
            Book!
          </button>
        </div>
        <div className="reservations-image"></div>
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
