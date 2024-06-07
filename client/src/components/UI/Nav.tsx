import React from "react";
import Logout from "./Logout";
import { AuthContext } from "../../util/context/AuthContext";
import { Link } from "react-router-dom";

export default function Nav() {
  const auth = React.useContext(AuthContext);
  const userId = auth?.user?._id;

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

          {auth?.user ? (
            <li className="flex gap-3 items-center">
              <Logout />
              <Link to={`/user/${userId}/profile`} className="text-sm">
                {auth.user.username}
              </Link>
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
