import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import styled from "styled-components";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import TextBox from "../components/common/TextBox";
import AuthApi from "../api/auth";
import { setToken, isValid } from "../utils";
import theme from "../styles/theme";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [formType, setFormType] = useState("login");

  const navigate = useNavigate();
  const isLoginForm = formType === "login";

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
      } catch (err) {
        if (err instanceof AxiosError) {
          alert(err.message);
        }
      }
    } else {
      try {
        const data = await AuthApi.signup({ email, password });
        alert(data.message);
        setFormType("login");
      } catch (err) {
        if (err instanceof AxiosError) {
          alert(err.message);
        }
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
      <Container>
        <Wrapper>
          <AuthForm>
            <Box padding="3rem">
              <Heading>{isLoginForm ? "로그인" : "회원가입"}</Heading>
              <>
                {fieldContent.map(({ label, type, placeholder, value, onChange }) => (
                  <Field key={type}>
                    <FieldLabel>
                      {label}
                      <TextBox width="17rem" padding="0.9rem">
                        <FieldInput
                          type={type}
                          placeholder={placeholder}
                          value={value}
                          onChange={onChange}
                        />
                      </TextBox>
                    </FieldLabel>
                  </Field>
                ))}
              </>
              <Button width="100%" disabled={disabledButton} onClick={handleSubmit}>
                {isLoginForm ? "로그인" : "회원가입"}
              </Button>
              <>
                {isLoginForm && (
                  <SmallLink onClick={() => setFormType("signup")}>회원가입</SmallLink>
                )}
              </>
            </Box>
          </AuthForm>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 4rem;
  position: relative;
  width: 100%;
  height: calc(100vh - 4rem);
`;

const AuthForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Heading = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const Field = styled.div`
  margin-bottom: 2.2rem;

  &:nth-child(3) {
    margin-bottom: 3rem;
  }
`;

const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

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
