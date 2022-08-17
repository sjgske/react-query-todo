import { useMutation } from "@tanstack/react-query";
import api from "../api/api";

interface SignUpData {
  message: string;
  token: string;
}

interface SignUpVariable {
  email: string;
  password: string;
}

const useSignUp = () => {
  return useMutation<SignUpData, Error, SignUpVariable, unknown>(async (body) => {
    const { data } = await api.post("/users/create", body);
    return data;
  });
};

export default useSignUp;
