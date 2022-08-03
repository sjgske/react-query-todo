import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLink className="header__link" to="/auth">
          회원가입 / 로그인
        </StyledLink>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 0;
  border-bottom: 1px solid #ddd;
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: 0;
`;

export default Header;
