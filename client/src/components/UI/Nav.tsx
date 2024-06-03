import React, { useContext } from "react";
import Logout from "./Logout";
import { AuthContext } from "../../util/context/AuthContext";

export default function Nav() {
  const auth = useContext(AuthContext);

  // useEffect(() => {
  //   if (auth?.user) {
  //     console.log("User Info:", auth.user);
  //   }
  // }, [auth?.user]);

  return (
    <nav className="py-4">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-2xl">
          Logo
        </a>
        <ul className="flex gap-4 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/second">Second</a>
          </li>
          {auth?.user ? (
            <li className="flex flex-col gap-1">
              {auth.user.username}
              <Logout />
            </li>
          ) : (
            <a
              href="/login"
              className="bg-slate-500 text-white px-4 py-2 rounded-lg"
            >
              Login
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
}
