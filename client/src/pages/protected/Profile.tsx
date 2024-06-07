import React from "react";
import { AuthContext } from "../../util/context/AuthContext";
// import { fetchUserLikes } from "../../util/api";
import { Link } from "react-router-dom";
// import { Player } from "../../util/types";
import PlayerCard from "../../components/Card/PlayerCard";

export default function Profile() {
  const auth = React.useContext(AuthContext);
  const email = auth?.user?.email;
  // const userId = auth?.user?._id;
  const likedPlayers = auth?.likedPlayers;

  //   React.useEffect(() => {
  //     if (email && userId) {
  //       console.log("User Info:", auth.user);
  //       fetchUserLikes(userId || "").then((data) => auth.setLikedPlayers(data));
  //     }

  //   }, [auth?.user, email, userId]);

  if (!auth?.user) {
    return (
      <div className="min-h-screen">
        <h1>Please Login to view this page</h1>
        <Link to="/login" className="btn">
          Login Page
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {email && (
        <div className="container space-y-8">
          <div>
            <h1>
              Welcome
              <span className="text-yellow-500"> {email}</span>!
            </h1>
            <h2>Your Liked Players</h2>
          </div>
          <div className="container flex flex-wrap gap-4">
            {likedPlayers &&
              likedPlayers.map((player) => (
                <PlayerCard key={player.PlayerId} player={player} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
