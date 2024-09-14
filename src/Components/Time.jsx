import React, { useState } from "react";

function Time() {
  const availableTimes = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];
  const [time, setTime] = useState("");

  return (
      <select 
      className="time"
      value={time} 
      onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((time) => (
          <option 
          key={time} 
          value={time}
          className="time-timepicker">
            {time}
          </option>
        ))}
      </select>
  );
}

export default Time;
