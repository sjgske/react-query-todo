import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import Box from "./Box";
import TextBox from "./TextBox";
import TodoItem from "./TodoItem";
import api from "../api";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await api.get("/todos").then((res) => {
      setTodos(res.data.data);
    });
  };

  const createTodo = async (e) => {
    e.preventDefault();

    try {
      const { title, content } = e.target;
      if (!title.value || !content.value) return;
      const data = { title: title.value, content: content.value };
      await api.post("/todos", data);
      getTodos();
    } catch (err) {
      const { response } = err;
      alert(response.data.details);
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <Container>
      <Form onSubmit={createTodo}>
        <Box color="transparent" padding="2.2rem">
          <TodoHeader>Todo List</TodoHeader>
          <TextGroup>
            <TextBox padding="0.7rem" width="15rem">
              <TodoInput type="text" name="title" placeholder="제목을 입력하세요." />
            </TextBox>
            <TextBox padding="0.7rem" width="15rem">
              <TodoTextarea type="text" name="content" placeholder="내용을 입력하세요." />
            </TextBox>
          </TextGroup>
          <Button type="submit" color="#191a20" fontColor="#fff" width="100%">
            추가
          </Button>
        </Box>
      </Form>

      <TodoList>
        {todos.length &&
          todos.map(({ id, title, content }) => (
            <TodoItem id={id} title={title} content={content} getTodos={getTodos} />
          ))}
      </TodoList>
    </Container>
  );
};

const TodoHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

const Form = styled.form``;

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
