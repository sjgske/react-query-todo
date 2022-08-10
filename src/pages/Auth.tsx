import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setToken, isValid } from "../utils";
import Container from "../components/Container";
import Button from "../components/Button";
import Box from "../components/Box";
import TextBox from "../components/TextBox";
import Header from "../components/Header";
import theme from "../styles/theme";
import AuthApi from "../api/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [formType, setFormType] = useState("login");

  const navigate = useNavigate();
  const isLoginForm = formType === "login";

  useEffect(() => {
    localStorage.getItem("token") && navigate("/", { replace: true });
  });

  useEffect(() => {
    setDisabledButton(!isValid(email, password));
  }, [email, password]);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isLoginForm) {
      try {
        const data = await AuthApi.login({ email, password });
        setToken(data.token);
        alert(data.message);
        navigate("/");
      } catch (err: any) {
        alert(err.response.data.details);
      }
    } else {
      try {
        const data = await AuthApi.signup({ email, password });
        alert(data.message);
        setFormType("login");
      } catch (err: any) {
        alert(err.response.data.details);
      }
    }
  };

  const fieldContent = [
    {
      label: "이메일",
      type: "email",
      placeholder: "abc@abc.com",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      label: "비밀번호",
      type: "password",
      placeholder: "8자 이상 입력해주세요.",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
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
            <Heading>{isLoginForm ? "로그인" : "회원가입"}</Heading>
            {fieldContent.map((el) => (
              <Field key={el.type}>
                <FieldLabel>
                  {el.label}
                  <TextBox width="17rem" padding="0.9rem">
                    <FieldInput
                      type={el.type}
                      placeholder={el.placeholder}
                      value={el.value}
                      onChange={el.onChange}
                    />
                  </TextBox>
                </FieldLabel>
              </Field>
            ))}

            <Button width="100%" disabled={disabledButton} onClick={handleSubmit}>
              {isLoginForm ? "로그인" : "회원가입"}
            </Button>
            {isLoginForm && <SmallLink onClick={() => setFormType("signup")}>회원가입</SmallLink>}
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

const FieldInput = styled.input`
  width: 100%;
`;

const SmallLink = styled.button`
  display: block;
  width: fit-content;
  margin: 1rem auto 0;
  font-size: 0.8rem;
  color: ${theme.deepGrey};
  text-decoration: underline;
`;

export default Auth;
