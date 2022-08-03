import styled from 'styled-components';

const Box = ({ color, children, className }) => {
  return <StyledBox className={className}>{children}</StyledBox>;
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export default Box;
