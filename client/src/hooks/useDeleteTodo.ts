import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

interface DeleteTodoData {
  data: null;
}

interface DeleteTodoVariable {
  id: string;
}

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteTodoData, Error, DeleteTodoVariable, unknown>(
    async ({ id }) => await api.delete(`/todos/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getTodos"]);
      },
    },
  );
};

export default useDeleteTodo;
