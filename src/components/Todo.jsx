import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";
import Box from "./Box";
import TextBox from "./TextBox";
import IconButton from "./IconButton";

const Todo = () => {
  const todoItems = [
    {
      id: 1,
      content: "청소하기",
    },
    {
      id: 2,
      content: "코딩하기",
    },
  ];

  return (
    <Container>
      <Box color="transparent">
        <TodoHeader>Todo List</TodoHeader>

        <TodoList>
          {todoItems.map((el) => (
            <TodoItem key={el.id}>
              <TextBox width="16rem" padding="0.8rem">
                {el.content}
              </TextBox>
              <IconButtonGroup>
                <IconButton fontColor="#555">
                  <FontAwesomeIcon icon={faPen} />
                </IconButton>
                <IconButton fontColor="#555">
                  <FontAwesomeIcon icon={faTrashCan} />
                </IconButton>
              </IconButtonGroup>
            </TodoItem>
          ))}
        </TodoList>

        <Border />

        <TodoControl>
          <TextBox padding="0.8rem">
            <TodoAddInput type="text" placeholder="할 일을 입력하세요." />
          </TextBox>
          <IconButton color="#191a20" fontColor="#fff" size="2.2rem">
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
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

const TodoList = styled.ul``;

const TodoItem = styled.li`
  position: relative;

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

const IconButtonGroup = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  gap: 0.8rem;
`;

const Border = styled.hr`
  border: 1px solid #eee;
  margin: 2rem 0;
`;
