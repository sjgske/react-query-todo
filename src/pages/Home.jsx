import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Todo from "../components/Todo";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("로그인 해주세요.");
      navigate("/auth/login");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Header>
        {localStorage.getItem("token") ? (
          <Link to="/" onClick={handleLogout}>
            로그아웃
          </Link>
        ) : (
          <LinkGroup>
            <Link to="/auth/signup">회원가입</Link>
            <Link to="/auth/login">로그인</Link>
          </LinkGroup>
        )}
      </Header>
      <Todo />
    </>
  );
};

const LinkGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export default Home;
