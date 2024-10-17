import React, { useState } from "react"; //사용자의 입력값을 담아야함
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"; // ui이 페이지에 액션을 전달해주는 함수
import { authenticateAction } from "../redux/actions/authenticateAction"; // 해당 액션 함수

const Wrapper = styled.div`
  width: 30px;
`;

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trueOk = useSelector((state) => state.auth.authenticate);

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(trueOk);
    navigate("/");
    dispatch(authenticateAction.login(id, pw));
  };
  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setId(e.target.value)}
          />{" "}
          //아이디 입력란
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          />{" "}
          //페스워드 입력란
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
