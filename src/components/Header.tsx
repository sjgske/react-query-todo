import React from "react";
import styled from "styled-components";
import Container from "./Container";
import theme from "../styles/theme";

interface IHeader {
  children: JSX.Element | JSX.Element[];
}

const Header = ({ children }: IHeader) => {
  return (
    <StyledHeader>
      <Container>{children}</Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 0;
  border-bottom: 1px solid ${theme.borderGrey};
  z-index: 30;
  background-color: ${theme.white};

  & a {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: 0;
  }
`;

export default Header;
