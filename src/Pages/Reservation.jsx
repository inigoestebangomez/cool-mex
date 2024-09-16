import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../Components/Calendar";
import Time from "../Components/Time";
import Form from "../Components/Form";
import Place from "../Components/Place";
import People from "../Components/People";
import service from "../service/service.config";

function Reservation() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("")
  console.log(selectedDate, selectedTime, numGuests, customerName, customerEmail,phone, place )

  const handleReservation = async () => {
    try {
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
      if (!selectedTime || !place || !numGuests) {
        alert("Please fill in all required fields.");
        return;
      }
      const response = await service.post("/reservation", reservationData);
      if (response.status === 201) {
        alert("Reservation created successfully!");
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("Failed to create the reservation. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="reservations">
        <div className="reservations-poster">
          <span>RESERVATIONS</span>
          <div className="reservations-instructions">
            <p>Booking a table:</p>
            <p>Select how many people will come</p>
            <p>Choose a date and hour to join us</p>
            <p>Write your name and email.</p>
          </div>
          <People numGuests={numGuests} setNumGuests={setNumGuests} />
          <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
          <Time
            selectedDate={selectedDate}
            numGuests={numGuests}
            setSelectedTime={setSelectedTime}
            selectedTime={selectedTime}
          />
          <Place place={place} setPlace={setPlace}/>
          <Form
            customerName={customerName}
            customerEmail={customerEmail}
            phone={phone}
            setCustomerName={setCustomerName}
            setCustomerEmail={setCustomerEmail}
            setPhone={setPhone}
          />
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
