import React from "react";
import styled from "styled-components";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

const StyledContainer = styled.section<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;

  @media screen and (max-width: 1023px) {
    padding: 0 3rem;
  }
`;

export default Container;
