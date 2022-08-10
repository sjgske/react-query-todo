import api from "./api";

interface IAuth {
  email: string;
  password: string;
}

const AuthApi = {
  login: async ({ email, password }: IAuth) => {
    const { data } = await api.post("/users/login", { email, password });
    return data;
  },
  signup: async ({ email, password }: IAuth) => {
    const { data } = await api.post("/users/create", { email, password });
    return data;
  },
};

export default AuthApi;
