import React from "react";
import { useState } from "react";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";

function Home() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (indexToDelete) => {
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };


  return (
    <div className=" bg-[#4186ae] h-screen flex flex-col">
      <h1 className=" text-white text-[45px] p-[3%]">Phone Book Application</h1>
      <PhonebookForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default Home;
