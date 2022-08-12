import api from "./api";

interface ITodo {
  title: string;
  content: string;
}

const TodoApi = {
  get: async () => {
    const { data } = await api.get("/todos");
    const sorted = data.data.reverse();
    return sorted;
  },
  add: async ({ title, content }: ITodo) => {
    const { data } = await api.post("/todos", { title, content });
    return data;
  },
  update: async ({ title, content }: ITodo, id: string) => {
    await api.put(`/todos/${id}`, { title, content });
  },
  delete: async (id: string) => {
    await api.delete(`/todos/${id}`);
  },
};

export default TodoApi;
