import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import List from "../components/List";
import Management from "../components/Management";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/candidates" element={<List />} />
      <Route path="/management" element={<Management />} />
      <Route path="*" element={<List />} />
    </Routes>
  );
};
export default router;
