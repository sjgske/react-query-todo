import { useQuery } from "@tanstack/react-query";
import api from "../api";

interface Todo {
  id: string;
  title: string;
  content: string;
}

const useGetTodos = () => {
  return useQuery<Todo[], Error>(["getTodos"], async () => {
    const res = await api.get("/todos");
    return res.data.data.reverse();
  });
};
export default useGetTodos;
