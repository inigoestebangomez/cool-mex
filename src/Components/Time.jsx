import React, { useEffect, useState } from "react";
import service from "../service/service.config";


function Time({ selectedDate, numGuests, setSelectedTime, selectedTime }) {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const formattedDate = new Date(selectedDate).toISOString().split('T')[0]; // Formato YYYY-MM-DD
        const response = await service.get(`/reservation/availability/${formattedDate}/${numGuests}`);

        setAvailableTimes(response.data.availableTimes || []);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };

    if (selectedDate && numGuests) {
      fetchAvailableTimes();
    } else {
      console.log("Date or number of guests is missing");
    }
  }, [selectedDate, numGuests]);

  return (
    <select 
      className="time"
      value={selectedTime}
      onChange={(e) => setSelectedTime(e.target.value)}
    >
      {availableTimes.length > 0 ? (
        availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))
      ) : (
        <option>No available times</option>
      )}
    </select>
  );
}

export default Time;
