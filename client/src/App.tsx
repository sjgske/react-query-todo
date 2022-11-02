import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/common/Header";
import useToken from "./hooks/common/useToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const token = useToken();
  const location = useLocation();
  return token ? children : <Navigate to="/auth" state={{ from: location }} replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer style={{ top: "80px" }} />
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
  );
};

export default App;
