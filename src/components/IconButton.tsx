import React from "react";
import styled from "styled-components";

interface IIconButton {
  color: string;
  fontColor: string;
  children: JSX.Element;
  size: string;
  onClick(e?: object): void;
}

const IconButton = ({ color, fontColor, children, size, onClick }: IIconButton) => {
  return (
    <StyledIconButton color={color} fontColor={fontColor} size={size} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<IIconButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  font-size: 0.9rem;
`;

export default IconButton;
