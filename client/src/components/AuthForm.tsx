import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import TextBox from "./common/TextBox";
import theme from "../styles/theme";
import { setToken, isValid } from "../utils";
import useLogin from "../hooks/useLogin";
import useSignUp from "../hooks/useSignUp";
import { toast } from "react-toastify";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [formType, setFormType] = useState("login");
  const isLoginForm = formType === "login";
  const { mutate: loginMutate } = useLogin();
  const { mutate: signUpMutate } = useSignUp();
  const navigate = useNavigate();

  useEffect(() => {
    setDisabledButton(!isValid(email, password));
  }, [email, password]);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoginForm) {
      loginMutate(
        { email, password },
        {
          onSuccess: ({ message, token }) => {
            setToken(token);
            toast.success(message);
            navigate("/", { replace: true });
          },
        },
      );
    } else {
      signUpMutate(
        { email, password },
        {
          onSuccess: ({ message }) => {
            toast.success(message);
            setFormType("login");
          },
        },
      );
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
    <Form>
      <Box padding="3rem">
        <Heading>{isLoginForm ? "로그인" : "회원가입"}</Heading>
        <>
          {fieldContent.map((field) => (
            <Field key={field.type}>
              <FieldLabel>
                {field.label}
                <TextBox width="17rem" padding="0.9rem">
                  <FieldInput
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
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
          {isLoginForm ? (
            <SmallLink type="button" onClick={() => setFormType("signup")}>
              회원가입
            </SmallLink>
          ) : (
            <SmallLink type="button" onClick={() => setFormType("login")}>
              로그인
            </SmallLink>
          )}
        </>
      </Box>
    </Form>
  );
};

const Form = styled.form`
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

export default AuthForm;
