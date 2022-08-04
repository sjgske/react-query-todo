import styled from "styled-components";
import Button from "./Button";
import Box from "./Box";
import TextBox from "./TextBox";
import api from "../api";
import { useState } from "react";

const TodoItem = ({ id, title, content, getTodos }) => {
  const [disabled, setDisabled] = useState(true);
  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);

  const handleUpdateButton = () => {
    setDisabled(false);
  };

  const handleCancleButton = () => {
    setDisabled(true);
  };

  const updateTodo = async (e) => {
    e.preventDefault();

    try {
      const data = { title: titleValue, content: contentValue };
      console.log(data);
      await api.put(`/todos/${id}`, data);
      alert("수정되었습니다.");
      getTodos();
      setDisabled(true);
    } catch (err) {
      const { response } = err;
      alert(response.data.details);
    }
  };

  const deleteTodo = async (e) => {
    e.preventDefault();

    try {
      await api.delete(`/todos/${id}`);
      alert("삭제되었습니다.");
      getTodos();
    } catch (err) {
      const { response } = err;
      alert(response.data.details);
    }
  };

  return (
    <StyledTodoItem key={id}>
      <Box color="transparent" padding="2rem">
        <TextGroup>
          <TextBox padding="0.7rem">
            <TodoInput
              type="text"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              disabled={disabled}
            />
          </TextBox>
          <TextBox padding="0.7rem">
            <TodoTextarea
              type="text"
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
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
            <Button color="#1e90ff" width="100%" onClick={updateTodo}>
              수정 완료
            </Button>
            <Button color="#aaa" width="100%" onClick={handleCancleButton}>
              취소
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  position: relative;
  margin-top: 3rem;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0.5rem;
`;

export default TodoItem;
