import React from 'react'

function People({numGuests, setNumGuests}) {
  const options = [2, 3, 4, 5, 6, 7, 8];

  return (
    <select
      className="guests"
      id="guests"
      value={numGuests}
      onChange={(e) => setNumGuests(Number(e.target.value))}
    >
      <option value="">Select People</option>
      {options.map((num) => (
        <option key={num} value={num}>
          {num} {num === 1 ? 'guest' : 'people'}
        </option>
      ))}
    </select>
  );
}

export default People
