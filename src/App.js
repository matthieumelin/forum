import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/HomePage";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
