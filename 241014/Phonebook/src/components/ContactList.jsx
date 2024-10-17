import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

const ContactList = () => {
  // const test = useSelector((state) => state);
  // console.log(test);
  const [filteredList, setFilteredList] = useState([]);

  const { contactList, keyword } = useSelector((state) => state);
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {/* {contactLists.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))} */}
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
