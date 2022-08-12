import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import theme from "../../styles/theme";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <StyledHeader>
      <Container>
        {localStorage.getItem("token") ? (
          <Link to="/auth" onClick={handleLogout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/">Home</Link>
        )}
      </Container>
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
