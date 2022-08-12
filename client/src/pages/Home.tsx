import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/common/Container";
import TodoForm from "../components/Todo/TodoForm";
import TodoItem from "../components/Todo/TodoItem";
import TodoApi from "../api/todo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("로그인 해주세요.");
      navigate("/auth");
    }
  });

  const getTodos = async () => {
    const data = await TodoApi.get();
    setTodos(data);
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const target = e.target as HTMLFormElement & {
        title: { value: string };
        content: { value: string };
      };
      const title = target.title.value;
      const content = target.content.value;
      if (!title || !content) return;
      await TodoApi.add({ title, content });
      getTodos();
    } catch (err: any) {
      alert(err.response.data.details);
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <Container>
      <Wrapper>
        <TodoForm addTodo={addTodo} />
        <TodoList>
          {Array.isArray(todos) &&
            todos.length > 0 &&
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

export default Todo;
