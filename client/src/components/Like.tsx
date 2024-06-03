import React from "react";
import { AuthContext } from "../util/context/AuthContext";
import { Player } from "../util/types";

export default function Like({ player }: { player: Player }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const auth = React.useContext(AuthContext);

  React.useEffect(() => {
    if (auth?.likedPlayers.some((p) => p.PlayerId === player.PlayerId)) {
      setIsLiked(true);
    }
  }, [auth?.likedPlayers, player.PlayerId]);

  const handleLike = async () => {
    if (auth?.user && !isLiked) {
      auth.likePlayer(auth.user._id, player);
      console.log("Player Liked:", player);
    }

    if (auth?.user && isLiked) {
      auth.deletePlayer(auth.user._id, player);
      // TODO: Maybe find way to refresh/update the UI
      console.log("Player Unliked:", player);
    }
  };

  return (
    <>
      {isLiked ? (
        <button
          type="button"
          className="text-red-500 text-xl font-bold"
          onClick={handleLike}
        >
          -
        </button>
      ) : (
        <button
          type="button"
          className="text-green-500 text-xl font-bold"
          onClick={handleLike}
        >
          +
        </button>
      )}
    </>
  );
}
