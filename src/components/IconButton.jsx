import styled from "styled-components";

const IconButton = ({ color, fontColor, children, size }) => {
  return (
    <StyledIconButton color={color} fontColor={fontColor} size={size}>
      {children}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
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
