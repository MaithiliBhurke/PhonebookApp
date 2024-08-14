import React from "react";
import { useState } from "react";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";
import Header from "./Header";

function Home() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (indexToDelete) => {
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };


  return (
    <div className=" bg-[#4186ae] h-[400vh] flex flex-col">
     <Header/>
      <PhonebookForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default Home;
