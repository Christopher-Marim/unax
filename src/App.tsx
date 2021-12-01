import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import { StateProvider } from "./hooks/state";
import { CurrentCompanyScreen } from "./screens/CurrentCompany";
import { CurrentEquipamentScreen } from "./screens/CurrentEquipament";
import { HomeScreen } from "./screens/Home";
import { LoginScreen } from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
        <Routes>
          <Route element={<LoginScreen />} path="/" />
          <Route element={<HomeScreen />} path="/pages/home" />
          <Route element={<CurrentCompanyScreen />} path="/pages/currentCompany" />
          <Route element={<CurrentEquipamentScreen />} path="/pages/currentEquipament" />
        </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
