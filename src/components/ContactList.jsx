import React from "react";

function ContactList({ contacts,deleteContact }) {
  return (
    <div className=" p-[4%]">
      <h2 className=" text-[30px] text-white">Contact List</h2>

      <table className=" w-[70%] m-[3%] border-2 border-white"> 
        <thead className=" w-full border-b border-2 border-white">
          <tr className=" w-full text-white text-[20px]">
            <th className="">First Name</th>
            <th>Last Name</th>
            <th>Contact No 1</th>
            <th>Contact No 2</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className=" w-full text-white  text-[17px]">
          {contacts.map((contact, index) => (
            <tr className=" w-full mt-[3%]">
              <td className=" text-center">{contact.firstName}</td>
              <td className=" text-center">{contact.lastName}</td>
              <td className=" text-center">{contact.contactNo1}</td>
              <td className=" text-center">{contact.contactNo2 || "-"}</td>
              <td className=" text-center">
              <button onClick={() => deleteContact(index)}>Delete</button>
              </td><br/>
            </tr>
            
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ContactList;
