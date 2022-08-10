import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import Box from "./Box";
import TextBox from "./TextBox";
import TodoItem from "./TodoItem";
import api from "../api/api";
import theme from "../styles/theme";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await api.get("/todos").then((res) => {
      const sorted = res.data.data.reverse();
      setTodos(sorted);
    });
  };

  const createTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const target = e.target as HTMLFormElement & {
        title: { value: string };
        content: { value: string };
      };
      const title = target.title.value;
      const content = target.content.value;
      if (!title || !content) return;
      await api.post("/todos", { title, content });
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
        <TodoForm onSubmit={createTodo}>
          <Box padding="2.2rem">
            <TodoHeader>Todo List</TodoHeader>
            <TextGroup>
              <TextBox padding="0.7rem" width="15rem">
                <TodoInput type="text" name="title" placeholder="제목을 입력하세요." />
              </TextBox>
              <TextBox padding="0.7rem" width="15rem">
                <TodoTextarea name="content" placeholder="내용을 입력하세요." />
              </TextBox>
            </TextGroup>
            <Button color={theme.black} width="100%">
              추가
            </Button>
          </Box>
        </TodoForm>
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

const TodoHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

const Wrapper = styled.div`
  margin-top: 3rem;
`;

const TodoForm = styled.form``;

const TodoList = styled.ul`
  margin-bottom: 5rem;
`;

const TodoInput = styled.input``;

const TodoTextarea = styled.textarea`
  width: 100%;
  height: fit-content;
`;

const TextGroup = styled.div`
  & > div:first-child {
    margin-bottom: 1rem;
  }
  margin-bottom: 1.6rem;
  font-size: 0.9rem;
`;

export default Todo;
