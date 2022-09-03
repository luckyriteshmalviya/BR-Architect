import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Queries from "./Components/Queries/Queries";
import MembersDetails from "./Components/MainBody/Organisms/membersDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/people" element={<MembersDetails />}></Route>
        <Route path="/queries" element={<Queries />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
