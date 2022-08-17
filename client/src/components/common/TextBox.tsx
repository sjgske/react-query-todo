import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

interface ITextBox {
  width?: string;
  padding: string;
  children: React.ReactNode;
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
  background-color: ${theme.lightGrey};
`;

export default TextBox;
