import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";

const Logo = styled.img`
  height: 30px;
`;

const BtnItem = styled.span`
  color: #fff;
  transition: color 0.3s;
  &:hover {
    color: crimson;
  }
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  .inner-item {
    padding: 0 40px;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar bg="dark" variant="dark">
        <Container fluid className="inner-item">
          <Navbar.Brand href="#">
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <Link to="/">
                  <BtnItem>Home</BtnItem>
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link to="/movie">
                  <BtnItem>Movie</BtnItem>
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;