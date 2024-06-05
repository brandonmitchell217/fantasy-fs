import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Second from "./pages/Second.tsx";
import Login from "./pages/Login.tsx";
import "./index.css";
import Main from "./layouts/Main.tsx";
import AuthProvider from "./util/context/AuthContext.tsx";
import Profile from "./components/UI/Profile.tsx";
import Signup from "./pages/Signup.tsx";
import PlayersProvider from "./util/context/PlayersContext.tsx";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <PlayersProvider>
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/second" element={<Second />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {isAuthenticated() ? (
                <Route path="/profile" element={<Profile />} />
              ) : null}
            </Routes>
          </Suspense>
        </Main>
      </PlayersProvider>
    </AuthProvider>
  </BrowserRouter>
);
