import styled from 'styled-components';

const TextBox = ({ width, padding, children }) => {
  return (
    <StyledTextBox width={width} padding={padding}>
      {children}
    </StyledTextBox>
  );
};

const StyledTextBox = styled.div`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: 6px;
  background-color: #f0f0f0;
`;

export default TextBox;
