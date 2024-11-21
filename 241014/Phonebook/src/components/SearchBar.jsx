import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "search", payload: { keyword } });
    //리듀서에게 값 보내기.2개를 보냄
    //payload: { keyword }  === payload: { keyword : keyword }
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={11}>
          <Form.Control
            type="text"
            placeholder="Search Name"
            onChange={(e) => setKeyword(e.target.value)}
          ></Form.Control>
        </Col>
        <Col lg={1}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
