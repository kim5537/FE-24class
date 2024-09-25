import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import {
  Wrapper,
  Form,
  Input,
  Title,
  Error,
  Switcher,
} from "../components/auth-components";
import GithubBtn from "../components/GithubBtn";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    // 중접구조할당
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || isLoading || password === "") return;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>Login😋</Title>
      <Form onSubmit={onsubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <Input type="submit" value={isLoading ? "Loaging..." : "Login"} />
      </Form>
      {error !== "" ? <Error> {error} </Error> : null}
      <Switcher>
        Don't You have an account?
        <Link to="/CreateAccount">Create On &rarr;</Link>
      </Switcher>
      <GithubBtn />
    </Wrapper>
  );
};

export default Login;
