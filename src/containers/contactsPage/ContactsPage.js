import React, {useState, useEffect} from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isDuplicate, setIsDuplicate] = useState(false);

 const contactsList = props.contacts;
 const addContact = props.addContact;

 useEffect(() => {
  if(contactsList.filter(contact => contact.name === name).length > 0){
    setIsDuplicate(true);
  } else if (contactsList.filter(contact => contact.name === name).length === 0) {
    setIsDuplicate(false);
  }

 })

  /*
    Add contact info and clear data
    if the contact name is not a duplicate
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("name already exists")
    }
  };

  return (
    <div>
      <section>
        <ContactForm 
          name={name} 
          phone={phone} 
          email={email} 
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <TileList data={contactsList}/>
      </section>
    </div>
  );
};
