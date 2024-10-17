import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
//여기서 값을 받을 것이다. --> 값전달
import { useDispatch } from "react-redux";

const ContactForm = () => {
  // const [name, setName] = useState("");

  // const getName = (e) => {
  //   setName(e.target.value);
  // };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispath = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispath({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
    //인풋안에 값을 보낼 방법은 state뿐이다. 이 usestate로 payload으로 값 전달
    //payload: { name: name, phoneNumber: phoneNumber } 인데 키와 벨류가 같으면 줄여쓰기 가능
  };

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          // value={name}
          // onChange={getName}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default ContactForm;
