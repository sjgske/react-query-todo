import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import Box from "./Box";
import TextBox from "./TextBox";

const Todo = () => {
  const todoItems = [1, 2];

  return (
    <Container>
      <Box color="transparent" padding="2.2rem">
        <TodoHeader>Todo List</TodoHeader>
        <TextGroup>
          <TextBox padding="0.7rem" width="15rem">
            <TodoInput type="text" placeholder="제목을 입력하세요." />
          </TextBox>
          <TextBox padding="0.7rem" width="15rem">
            <TodoTextarea type="text" placeholder="내용을 입력하세요." />
          </TextBox>
        </TextGroup>
        <Button color="#191a20" fontColor="#fff" width="100%">
          추가
        </Button>
      </Box>

      <TodoList>
        {todoItems.map((el) => (
          <TodoItem key={el.id}>
            <Box color="transparent" padding="2rem">
              <TextGroup>
                <TextBox padding="0.7rem">
                  <TodoInput type="text" placeholder="제목" disabled={true} />
                </TextBox>
                <TextBox padding="0.7rem">
                  <TodoInput type="text" placeholder="내용" disabled={true} />
                </TextBox>
              </TextGroup>
              <ButtonGroup>
                <Button color="#191a20" fontColor="#fff" width="100%">
                  수정
                </Button>
                <Button color="#191a20" fontColor="#fff" width="100%">
                  삭제
                </Button>
              </ButtonGroup>
            </Box>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default Todo;

const TodoHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

const TodoList = styled.ul`
  margin-bottom: 5rem;
`;

const TodoItem = styled.li`
  position: relative;
  margin-top: 3rem;
`;

const TodoInput = styled.input``;

const TodoTextarea = styled.textarea`
  width: 100%;
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
