import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        placeholder="name"
        onChange={(e => setName(e.target.value))}
        required
      />
      <input 
        type="number"
        value={phone}
        placeholder="phone number"
        onChange={(e => setPhone(e.target.value))}
        pattern="[0-9]${11}"
        required
      />
      <input 
        type="email"
        value={email}
        placeholder="email"
        onChange={(e => setEmail(e.target.value))}
        required
      />
      <input type="submit"/>
    </form>
  );
};
