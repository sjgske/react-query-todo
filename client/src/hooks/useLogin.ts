import { useMutation } from "@tanstack/react-query";
import api from "../api";

interface LoginData {
  message: string;
  token: string;
}

interface LoginVariable {
  email: string;
  password: string;
}

const useLogin = () => {
  return useMutation<LoginData, Error, LoginVariable, unknown>(async (body) => {
    const { data } = await api.post("/users/login", body);
    return data;
  });
};

export default useLogin;
