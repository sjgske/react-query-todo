import styled from "styled-components";
import Container from "../components/common/Container";
import TodoForm from "../components/Todo/TodoForm";
import TodoItem from "../components/Todo/TodoItem";
import useGetTodos from "../hooks/useGetTodos";

const Home = () => {
  const { data: todos } = useGetTodos();

  return (
    <Container>
      <Wrapper>
        <TodoForm />
        <TodoList>
          {todos?.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} />
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
