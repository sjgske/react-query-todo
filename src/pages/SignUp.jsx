import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import Box from "../components/Box";
import TextBox from "../components/TextBox";
import Header from "../components/Header";
import { validateEmail } from "../utils";
import api from "../api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };
      await api.post("/users/create", data).then((res) => {
        alert(res.data.message);
        navigate("/auth/login");
      });
    } catch (err) {
      const { response } = err;
      alert(response.data.details);
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
        <Flexbox>
          <Box color="#fff" padding="3rem">
            <Form>
              <Heading>회원가입</Heading>
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

              <Button type="submit" width="100%" disabled={disabled} onClick={handleSubmit}>
                회원가입
              </Button>
            </Form>
          </Box>
        </Flexbox>
      </Container>
    </>
  );
};

const Flexbox = styled.div`
  display: flex;
  gap: 8rem;
`;

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

export default SignUp;
