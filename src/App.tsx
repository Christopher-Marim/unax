import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import { HomeScreen } from "./screens/Home";
import { LoginScreen } from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<LoginScreen />} path="/" />
          <Route element={<HomeScreen />} path="/pages/home" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
