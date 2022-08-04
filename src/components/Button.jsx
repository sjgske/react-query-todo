import styled from "styled-components";

const Button = ({ type, color, width, disabled, children, onClick }) => {
  return (
    <StyledButton type={type} color={color} width={width} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
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
