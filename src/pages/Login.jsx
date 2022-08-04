import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import Box from "../components/Box";
import TextBox from "../components/TextBox";
import Header from "../components/Header";

const Login = () => {
  const fieldContent = [
    {
      label: "이메일",
      type: "email",
    },
    {
      label: "비밀번호",
      type: "password",
    },
  ];

  return (
    <>
      <Header url="/" linkName="Home" />
      <Container>
        <Box className="login__box" color="#fff">
          <LoginForm>
            <LoginHeader>로그인</LoginHeader>
            {/* 가입되지 않은 아이디입니다. 회원가입하시겠습니까? */}

            {fieldContent.map((el) => (
              <LoginField key={el.type}>
                <FieldLabel htmlFor={el.type}>{el.label}</FieldLabel>
                <TextBox width="17rem" padding="0.9rem">
                  <FieldInput
                    type={el.type}
                    id={el.type}
                    placeholder={el.type === "email" ? "abc@abc.com" : "8자 이상 입력해주세요."}
                  />
                </TextBox>
              </LoginField>
            ))}

            <Button className="login__button" type="button" width="100%" disabled={true}>
              확인
            </Button>
          </LoginForm>
        </Box>
      </Container>
    </>
  );
};

export default Login;

const LoginForm = styled.form``;

const LoginHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const LoginField = styled.div`
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
