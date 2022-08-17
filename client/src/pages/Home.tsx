import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import styled from "styled-components";
import Container from "../components/common/Container";
import TodoForm from "../components/Todo/TodoForm";
import TodoItem from "../components/Todo/TodoItem";
import TodoApi from "../api/todo";

const Home = () => {
  const [todos, setTodos] = useState([{ id: "", title: "", content: "" }]);

  const getTodos = async () => {
    try {
      const data = await TodoApi.get();
      setTodos(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.message);
      }
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <Container>
      <Wrapper>
        <TodoForm getTodos={getTodos} />
        {/* 추상화 */}
        <TodoList>
          {todos.length > 0 &&
            todos.map(({ id, title, content }) => (
              <TodoItem key={id} id={id} title={title} content={content} getTodos={getTodos} />
            ))}
        </TodoList>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const TodoList = styled.ul``;

export default Home;
