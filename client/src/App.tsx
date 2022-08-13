import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import ErrorPage from "./components/common/ErrorPage";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("token");
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
