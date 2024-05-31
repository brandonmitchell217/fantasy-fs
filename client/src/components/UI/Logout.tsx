import React, { useContext } from "react";
import { AuthContext } from "../../util/context/AuthContext";

const Logout: React.FC = () => {
  const { logout } = useContext(AuthContext) || {};

  const handleLogout = async () => {
    if (logout) {
      await logout();
    }
  };

  return (
    <button
      type="button"
      className="bg-slate-500 text-white px-4 py-2 rounded-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
