import React from "react";
import { useState } from "react";

function PhonebookForm({ addContact }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo1, setcontactNo1] = useState("");
  const [contactNo2, setcontactNo2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !contactNo1) {
      alert("Please fill in all required fields");
      return;
    }

    const newContact = { firstName, lastName, contactNo1, contactNo2 };
    addContact(newContact);
    setFirstName("");
    setLastName("");
    setcontactNo1("");
    setcontactNo2("");
  };

  return (
    <div className=" px-[5%] pt-[4%]">
      <h1 className=" text-white text-[35px] ">Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className=" py-[1%]">
          <label className=" text-white text-[20px] p-[1%] mr-[1%]" htmlFor="">First Name:</label>
          <input className=" bg-transparent border-b-2 border-white text-white w-[25%]"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className=" py-[1%]">
          <label className=" text-white text-[20px] p-[1%] mr-[1%]" htmlFor="">Last Name:</label>
          <input className=" bg-transparent border-b-2 border-white text-white w-[25%]"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className=" py-[1%]">
          <label className=" text-white text-[20px] p-[1%]" htmlFor="">Contact No 1:</label>
          <input className=" bg-transparent border-b-2 border-white text-white w-[25%]"
            type="text"
            value={contactNo1}
            onChange={(e) => setcontactNo1(e.target.value)}
          />
        </div>

        <div className=" py-[1%]">
          <label className=" text-white text-[20px] p-[1%]" htmlFor="">Contact No 2:</label>
          <input className=" bg-transparent border-b-2 border-white text-white w-[25%]"
            type="text"
            value={contactNo2}
            onChange={(e) => setcontactNo2(e.target.value)}
          />
        </div>

        <button className=" m-[1%] border-white w-[35%] border-2 p-[10px] text-white rounded-lg hover:text-[#4186ae] hover:bg-white" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhonebookForm;
