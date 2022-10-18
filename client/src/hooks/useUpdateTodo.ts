import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../api";

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
        toast.success("할 일이 수정되었습니다.");
      },
    },
  );
};

export default useUpdateTodo;
