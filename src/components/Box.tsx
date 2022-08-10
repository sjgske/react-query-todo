import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

interface IBox {
  padding: string;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

const Box = ({ padding, children, className }: IBox) => {
  return (
    <StyledBox className={className} padding={padding}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div<IBox>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding};
  border-radius: 8px;
  background-color: ${theme.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export default Box;
