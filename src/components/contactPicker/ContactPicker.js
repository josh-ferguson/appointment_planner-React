import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <div>
      <select onChange={onChange}>
        <option value="">Select a contact</option>
        {contacts.map((contact, index) => (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
};
