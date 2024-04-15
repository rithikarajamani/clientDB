import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FontProvider } from "./components/fonts/fontContext";
import Login from "./components/login/login";
import Table from "./components/table/table";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <FontProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login"></Navigate>} />
            <Route path="/login" element={<Login />} />
            <Route path="/table" element={<Header />} />
          </Routes>
        </Router>

       
      </FontProvider>
    </>
  );
}

export default App;
