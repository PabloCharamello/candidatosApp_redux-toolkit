import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
