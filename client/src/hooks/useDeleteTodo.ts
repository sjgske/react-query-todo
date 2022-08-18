import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../api";

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
        toast.success("할 일이 삭제되었습니다.");
      },
    },
  );
};

export default useDeleteTodo;
