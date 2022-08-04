import styled from "styled-components";

const Button = ({ type, width, disabled, children, onClick }) => {
  return (
    <StyledButton type={type} width={width} disabled={disabled} onClick={onClick}>
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

  ${({ disabled }) =>
    disabled
      ? `
      background-color: #aaa;
      cursor: not-allowed;
    `
      : `
      background-color: #191a20;
      cursor: pointer;
    `}
`;

export default Button;
