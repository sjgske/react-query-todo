const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const setToken = (token: string) => localStorage.setItem("token", token);

export const isValid = (email: string, password: string) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 8;
  return isEmailValid && isPasswordValid;
};
