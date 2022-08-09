import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import GlobalFonts from "./styles/GlobalFonts";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="/todos/:id" element={<ToDoDetail />} /> */}
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
