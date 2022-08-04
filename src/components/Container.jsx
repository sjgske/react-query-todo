import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;

  @media screen and (max-width: 1023px) {
    padding: 0 3rem;
  }
`;

export default Container;
