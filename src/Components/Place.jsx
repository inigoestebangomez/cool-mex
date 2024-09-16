import React from 'react'
import { useState } from 'react'

function Place({place, setPlace}) {
    const availablePlaces = [
        "Terrace",
        "Indoor",
      ];
  return (
    <select 
      className="place"
      value={place} 
      onChange={(e) => setPlace(e.target.value)}>
        <option value="">Select Place</option>
        {availablePlaces.map((placeOption) => (
        <option 
          key={placeOption} 
          value={placeOption}
        >
          {placeOption}
        </option>
      ))}
    </select>
  );
}

export default Place
