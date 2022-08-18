import React from "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import AuthForm from "../components/AuthForm";

const Auth = () => {
  return (
    <Container>
      <Wrapper>
        <AuthForm />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  padding-top: 4rem;
  position: relative;
  width: 100%;
  height: calc(100vh - 4rem);
`;

export default Auth;
