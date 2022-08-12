import styled from "styled-components";
import Button from "../common/Button";
import Box from "../common/Box";
import TextBox from "../common/TextBox";
import theme from "../../styles/theme";

type Props = {
  addTodo: (e: React.FormEvent) => void;
};

const TodoForm = ({ addTodo }: Props) => {
  return (
    <Form onSubmit={addTodo}>
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
    </Form>
  );
};

const Form = styled.form``;

const TodoHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
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

export default TodoForm;
