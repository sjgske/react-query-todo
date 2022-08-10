import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Todo from "../components/Todo";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("로그인 해주세요.");
      navigate("/auth");
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
          <Link to="/auth">로그인</Link>
        )}
      </Header>
      <Todo />
    </>
  );
};

export default Home;
