import React from "react";
import { AuthContext } from "../util/context/AuthContext";
import { Player } from "../util/types";

export default function Like({ player }: { player: Player }) {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const auth = React.useContext(AuthContext);

  React.useEffect(() => {
    if (auth?.likedPlayers?.some((p) => p.PlayerId === player.PlayerId)) {
      setIsLiked(true);
    }

    if (!auth?.likedPlayers?.some((p) => p.PlayerId === player.PlayerId)) {
      setIsLiked(false);
    }
  }, [auth?.likedPlayers, player.PlayerId]);

  const handleLike = async () => {
    if (auth?.user && !isLiked) {
      auth.likePlayer(auth.user._id, player);
      console.log("Player Liked:", player);
    }

    if (auth?.user && isLiked) {
      auth.deletePlayer(auth.user._id, player);
      console.log("Player Unliked:", player);
    }

    if (!auth?.user) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }

    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 2500);
  };

  const messageClass =
    "absolute -top-5 -left-4 z-50 rounded-lg text-center p-1 text-[12px] leading-none w-24 text-black";

  const AddMessage = () => {
    return <div className={`${messageClass} bg-green-300`}>Player liked!</div>;
  };

  const DeleteMessage = () => {
    return <div className={`${messageClass} bg-red-300`}>Player unliked!</div>;
  };

  const LoginMessage = () => {
    return (
      <div className={`${messageClass} bg-red-300`}>Must login first!</div>
    );
  };

  return (
    <>
      {isLiked ? (
        <>
          <button
            type="button"
            className="text-red-500 text-xl font-bold p-1"
            onClick={handleLike}
          >
            -
          </button>
          {open && <AddMessage />}
        </>
      ) : (
        <>
          <button
            type="button"
            className="text-green-500 text-xl font-bold p-1"
            onClick={handleLike}
          >
            +
          </button>
          {open && <DeleteMessage />}
          {open && !auth?.user && <LoginMessage />}
        </>
      )}
    </>
  );
}
