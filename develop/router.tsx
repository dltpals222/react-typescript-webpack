import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/app";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
