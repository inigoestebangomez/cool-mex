import React from 'react'
import { useState } from 'react'

function Place() {
    const availablePlaces = [
        "Terrace",
        "Indoor",
      ];
      const [place, setPlace] = useState("");
  return (
    <select 
      className="place"
      value={place} 
      onChange={(e) => setPlace(e.target.value)}>
        {availablePlaces.map((place) => (
          <option 
          key={place} 
          value={place}>
            {place}
          </option>
        ))}
      </select>
  );
}

export default Place
