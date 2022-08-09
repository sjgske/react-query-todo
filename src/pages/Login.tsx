import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import Box from "../components/Box";
import TextBox from "../components/TextBox";
import Header from "../components/Header";
import { validateEmail } from "../utils";
import api from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };
      await api.post("/users/login", data).then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      });
    } catch (err: any) {
      alert(err.response.data.details);
    }
  };

  const handleButtonActive = useCallback(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 8;
    setDisabled(!isEmailValid || !isPasswordValid);
  }, [email, password]);

  useEffect(() => {
    handleButtonActive();
  }, [handleButtonActive]);

  const fieldContent = [
    {
      label: "이메일",
      type: "email",
      placeholder: "abc@abc.com",
      value: email,
      onChange: setEmail,
    },
    {
      label: "비밀번호",
      type: "password",
      placeholder: "8자 이상 입력해주세요.",
      value: password,
      onChange: setPassword,
    },
  ];

  return (
    <>
      <Header>
        <Link to="/">Home</Link>
      </Header>
      <Container>
        <Box padding="3rem">
          <Form>
            <Heading>로그인</Heading>
            {fieldContent.map((el) => (
              <Field key={el.type}>
                <FieldLabel htmlFor={el.type}>{el.label}</FieldLabel>
                <TextBox width="17rem" padding="0.9rem">
                  <FieldInput
                    type={el.type}
                    id={el.type}
                    placeholder={el.placeholder}
                    value={el.value}
                    onChange={(e) => el.onChange(e.target.value)}
                  />
                </TextBox>
              </Field>
            ))}

            <Button width="100%" disabled={disabled} onClick={handleLogin}>
              로그인
            </Button>
            <SmallLink to="/auth/signup">회원가입</SmallLink>
          </Form>
        </Box>
      </Container>
    </>
  );
};

const Form = styled.form``;

const Heading = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2.2rem;

  &:nth-child(3) {
    margin-bottom: 3rem;
  }
`;

const FieldLabel = styled.label``;

const FieldInput = styled.input``;

const SmallLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 1rem auto 0;
  font-size: 0.8rem;
  color: #555;
  text-decoration: underline;
`;

export default Login;
