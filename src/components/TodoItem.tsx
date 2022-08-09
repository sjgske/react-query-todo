import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Button from "./Button";
import Box from "./Box";
import TextBox from "./TextBox";
import api from "../api";
import theme from "../styles/theme";

interface ITodoItem {
  id: string;
  title: string;
  content: string;
  getTodos(): void;
}

const TodoItem = ({ id, title: t, content: c, getTodos }: ITodoItem) => {
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({ title: t, content: c });

  const { params } = useParams();

  const { title, content } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleUpdateButton = () => {
    setDisabled(false);
  };

  const handleCancelButton = () => {
    setDisabled(true);
  };

  const updateTodo = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await api.put(`/todos/${id}`, form);
      getTodos();
      setDisabled(true);
    } catch (err: any) {
      alert(err.response.data.details);
    }
  };

  const deleteTodo = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await api.delete(`/todos/${id}`);
      getTodos();
    } catch (err: any) {
      alert(err.response.data.details);
    }
  };

  return (
    <StyledTodoItem key={id} onClick={() => setShow(!show)}>
      <Box padding="1.4rem">
        <TodoTitle>{title}</TodoTitle>
        <FontAwesomeIcon icon={faAngleDown} className={show ? "hidden" : ""} />
        <Wrapper className={!show ? "hidden" : ""}>
          <TextGroup>
            <TextBox padding="0.7rem">
              <TodoInput
                type="text"
                name="title"
                value={title}
                onChange={onChange}
                disabled={disabled}
              />
            </TextBox>
            <TextBox padding="0.7rem">
              <TodoTextarea
                name="content"
                value={content}
                onChange={onChange}
                disabled={disabled}
              />
            </TextBox>
          </TextGroup>
          {disabled ? (
            <ButtonGroup>
              <Button width="100%" onClick={handleUpdateButton}>
                수정
              </Button>
              <Button width="100%" onClick={deleteTodo}>
                삭제
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Button color={theme.blue} width="100%" onClick={updateTodo}>
                수정 완료
              </Button>
              <Button color={theme.grey} width="100%" onClick={handleCancelButton}>
                취소
              </Button>
            </ButtonGroup>
          )}
        </Wrapper>
      </Box>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  position: relative;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const TodoTitle = styled.div``;

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0.5rem;
`;

export default TodoItem;
