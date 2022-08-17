import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

interface Todo {
  id: string;
  title: string;
  content: string;
}

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, unknown>(
    async ({ title, content, id }) => await api.put(`/todos/${id}`, { title, content }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getTodos"]);
      },
    },
  );
};

export default useUpdateTodo;
