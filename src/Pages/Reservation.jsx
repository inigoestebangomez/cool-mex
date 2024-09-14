import React, { forwardRef, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../Components/Calendar";
import Time from "../Components/Time";
import Form from "../Components/Form";
import Place from "../Components/Place";

function Reservation() {

  return (
    <>
      <Header />
      <div className="reservations">
        <div className="reservations-poster">
          <span>RESERVATIONS</span>
          <div className="reservations-instructions">
            <p>Book a table:</p>
            <p>Choose a date and hour to join us</p>
            <p>Select how many people will come</p>
            <p>Write your name and email.</p>
          </div>
          <Calendar />
          <Time />
          <Place />
          <Form />
          <button className="btn-filled">Book!</button>
        </div>
        <div className="reservations-image"></div>
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
