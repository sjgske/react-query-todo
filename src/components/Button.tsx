import React from "react";
import styled from "styled-components";

interface IButton {
  color?: string;
  width?: string;
  disabled?: boolean;
  children: JSX.Element | string;
  onClick?(e?: React.MouseEvent): void;
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
  color: #fff;
  transition: background-color 200ms ease-in;

  ${({ disabled, color }) =>
    disabled
      ? `
      background-color: #aaa;
      cursor: not-allowed;
    `
      : `
      background-color: ${color || "#191a20"};
      cursor: pointer;
    `}
`;

export default Button;
