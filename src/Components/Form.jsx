import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ name, email, number });
  };

  return (
    <form onSubmit={handleSubmit} className="forms">
      <input
        className="form"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="form"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form"
        type="number"
        placeholder="Phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </form>
  );
}

export default Form;
