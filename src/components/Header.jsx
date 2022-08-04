import styled from "styled-components";
import Container from "./Container";

const Header = ({ children }) => {
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
  border-bottom: 1px solid #ddd;

  & > div > * {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: 0;
  }
`;

export default Header;
