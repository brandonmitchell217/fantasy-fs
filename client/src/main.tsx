import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Second from "./pages/Second.tsx";
import "./index.css";
import Main from "./layouts/Main.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </Suspense>
    </Main>
  </BrowserRouter>
);
