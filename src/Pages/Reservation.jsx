import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Reservation() { 
    
    const [startDate, serStartDate] = useState(new Date())

    return (
    <>
      <Header />
      <div className='reservations'>
        <div className='reservations-poster'>
        <span >RESERVATIONS</span>
        <div className='reservations-instructions'>
        <p>Book a table:</p>
        <p>Choose a date and hour to join us</p>
        <p>Select how many people will come</p>
        <p>Write your name and email.</p>
        </div>
        <DatePicker selected={startDate} onChange={(date) => serStartDate} />
        </div>
            <div className='reservations-image'></div>
      </div>
      <Footer />
    </>
  )
}

export default Reservation
