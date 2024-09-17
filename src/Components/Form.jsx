import React, { useState } from "react";

function Form({ customerName, customerEmail, phone, setCustomerName, setCustomerEmail, setPhone }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="forms">
      <input
        className="form"
        type="text"
        placeholder="Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        className="form"
        type="email"
        placeholder="Email"
        autoComplete="current-email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
      <input
        className="form"
        type="number"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </form>
  );
}

export default Form;
