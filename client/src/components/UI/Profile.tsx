// Profile.tsx
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../util/context/AuthContext";

const Profile: React.FC = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth?.user) {
      console.log("User Info:", auth.user);
    }
  }, [auth?.user]);

  return (
    <>
      {auth?.user ? (
        <div>
          <p>Welcome, {auth.user.email}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </>
  );
};

export default Profile;
