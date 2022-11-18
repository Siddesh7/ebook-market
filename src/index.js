import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePage from "./components/CreatePage";
import NavbarComponent from "./components/Navbar";
import BookPage from "./components/BookPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
