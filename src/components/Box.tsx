import React from "react";
import styled from "styled-components";

interface IBox {
  padding: string;
  children: JSX.Element | JSX.Element[];
}

const Box = ({ padding, children }: IBox) => {
  return <StyledBox padding={padding}>{children}</StyledBox>;
};

const StyledBox = styled.div<IBox>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding};
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export default Box;
