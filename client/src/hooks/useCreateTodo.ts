import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../api";

interface Todo {
  id: string;
  title: string;
  content: string;
}

interface TodoVariable {
  title: string;
  content: string;
}

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, TodoVariable, unknown>(
    async ({ title, content }) => {
      const { data } = await api.post("/todos", { title, content });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getTodos"]);
        toast.success("할 일이 등록되었습니다!");
      },
    },
  );
};

export default useCreateTodo;
