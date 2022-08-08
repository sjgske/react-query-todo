import React from "react";
import styled from "styled-components";

interface ITextBox {
  width?: string;
  padding: string;
  children: string | JSX.Element;
}

const TextBox = ({ width, padding, children }: ITextBox) => {
  return (
    <StyledTextBox width={width} padding={padding}>
      {children}
    </StyledTextBox>
  );
};

const StyledTextBox = styled.div<ITextBox>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: 6px;
  background-color: #f0f0f0;
`;

export default TextBox;
