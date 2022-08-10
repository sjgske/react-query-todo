import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Box from "./Box";
import TextBox from "./TextBox";
import api from "../api/api";
import theme from "../styles/theme";

interface ITodoItem {
  id: string;
  title: string;
  content: string;
  getTodos(): void;
}

const TodoItem = ({ id, title: t, content: c, getTodos }: ITodoItem) => {
  const [showModal, setShowModal] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [form, setForm] = useState({ title: t, content: c });

  const navigate = useNavigate();
  const history = createBrowserHistory();

  const { title, content } = form;

  useEffect(() => {
    const back = () => {
      history.listen(({ action }) => {
        if (action === "POP" && showModal) {
          setShowModal(false);
        }
      });
    };
    back();
  }, [history, showModal]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleUpdateButton = () => {
    setDisabledButton(false);
  };

  const handleCancelButton = () => {
    setDisabledButton(true);
  };

  const updateTodo = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await api.put(`/todos/${id}`, form);
      getTodos();
      setDisabledButton(true);
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

  const openModal = () => {
    setShowModal(true);
    navigate(`/todo/${id}`);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <StyledTodoItem key={id}>
      <Wrapper onClick={openModal}>
        <Box padding="1.4rem">
          <TodoTitle>{title}</TodoTitle>
        </Box>
      </Wrapper>

      <Wrapper className={!showModal ? "hidden" : ""}>
        <Modal padding="2.2rem">
          <TodoHeader>상세</TodoHeader>
          <FontAwesomeIcon
            icon={faX}
            style={{ position: "absolute", top: "2rem", right: "2rem" }}
            onClick={closeModal}
          />
          <TextGroup>
            <TextBox padding="0.7rem" width="15rem">
              <TodoInput
                type="text"
                name="title"
                value={title}
                onChange={onChange}
                disabled={disabledButton}
              />
            </TextBox>
            <TextBox padding="0.7rem" width="15rem">
              <TodoTextarea
                name="content"
                value={content}
                onChange={onChange}
                disabled={disabledButton}
              />
            </TextBox>
          </TextGroup>
          {disabledButton ? (
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
        </Modal>
        <Background />
      </Wrapper>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  margin-top: 1rem;
`;

const Wrapper = styled.div``;

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

const Modal = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  background-color: rgba(26, 26, 26, 0.5);
`;

const TodoHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0.5rem;
`;

export default TodoItem;
