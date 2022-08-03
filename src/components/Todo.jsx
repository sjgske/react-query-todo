import styled from 'styled-components';
import Container from './Container';
import Box from './Box';
import TextBox from './TextBox';
import Button from './Button';

const Todo = () => {
  const todoItems = [
    {
      content: '청소하기',
    },
    {
      content: '코딩하기',
    },
  ];

  return (
    <Container>
      <Box color="transparent">
        <TodoHeader>Todo List</TodoHeader>

        <TodoList>
          {todoItems.map((el, idx) => (
            <TodoItem key={idx}>
              <TextBox width="16rem" padding="0.8rem">
                {el.content}
              </TextBox>
            </TodoItem>
          ))}
        </TodoList>

        <TodoControl>
          <TextBox padding="0.6rem">
            <TodoAddInput type="text" placeholder="할 일을 입력하세요." />
          </TextBox>
          <TodoAddButton width="2.5rem">+</TodoAddButton>
          {/* TODO: 수정, 삭제 버튼 */}
          {/* 목록, 상세 영역 ?? */}
        </TodoControl>
      </Box>
    </Container>
  );
};

export default Todo;

const TodoHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const TodoList = styled.ul`
  margin-bottom: 2rem;
`;

const TodoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const TodoControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoAddInput = styled.input``;

const TodoAddButton = styled(Button)`
  height: 2.3rem;
  font-size: 2rem;
`;
