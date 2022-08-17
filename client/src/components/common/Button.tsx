import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

interface IButton {
  color?: string;
  width?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ color, width, disabled, children, onClick }: IButton) => {
  return (
    <StyledButton color={color} width={width} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<IButton>`
  width: ${({ width }) => width};
  padding: 0.9rem;
  border-radius: 100px;
  color: ${theme.white};
  transition: background-color 200ms ease-in;

  ${({ disabled, color }) =>
    disabled
      ? `
      background-color: ${theme.grey};
      cursor: not-allowed;
    `
      : `
      background-color: ${color || theme.black};
      cursor: pointer;
    `}
`;

export default Button;
