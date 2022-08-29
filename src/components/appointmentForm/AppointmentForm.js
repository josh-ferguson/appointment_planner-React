import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-UK")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        placeholder="title"
        onChange={(e => setTitle(e.target.value))}
        required
      />
      <input 
        type="date"
        value={date}
        placeholder="date"
        onChange={(e => setDate(e.target.value))}
        min={getTodayString()}
        required
      />
      <input 
        type="time"
        value={time}
        placeholder="time"
        onChange={(e => setTime(e.target.value))}
        required
      />
      <ContactPicker 
        contacts={contacts}
        contact={contact}
        onChange={(e => setContact(e.target.value))}
      />
      <input type="submit"/>
    </form>
  );
};
