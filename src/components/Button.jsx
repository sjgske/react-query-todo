import styled from 'styled-components';

const Button = ({ type, width, padding, disabled, children }) => {
  return (
    <StyledButton type={type} width={width} padding={padding} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: 100px;
  color: #fff;

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
