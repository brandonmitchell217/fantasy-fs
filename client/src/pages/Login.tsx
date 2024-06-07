import React, { useContext, useState } from "react";
import { AuthContext } from "../util/context/AuthContext";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext) || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (login) {
      await login(email, password);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
