import React from "react";
import { AuthContext } from "../util/context/AuthContext";
import { Player } from "../util/types";

export default function Like({ player }: { player: Player }) {
  const auth = React.useContext(AuthContext);

  const handleLike = async () => {
    if (auth?.user) {
      // try {
      //   await axios.post(
      //     `http://localhost:3100/api/users/${auth?.user._id}/like`,
      //     {
      //       userId: auth?.user._id,
      //       ...player,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      //       },
      //     }
      //   );
      //   //   console.log(response.data);
      // } catch (error) {
      //   console.log(error);
      // }
      auth.likePlayer(auth.user._id, player);
    }
  };

  return (
    <>
      <button
        type="button"
        className="text-green-500 text-xl font-bold"
        onClick={handleLike}
      >
        +
      </button>
    </>
  );
}
