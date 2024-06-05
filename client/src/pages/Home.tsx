/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useContext } from "react";
import {
  fetchPlayersByPosition,
  fetchAllPlayers,
  fetchPlayerById,
  fetchPlayersByTeam,
} from "../util/api";
import { Player } from "../util/types";
import PlayerCard from "../components/Card/PlayerCard";
// import Profile from "../components/UI/Profile";

function App() {
  // TODO: Set up dummy data
  // const PlayerData = useContext(PlayersContext);
  // const players = PlayerData?.players;
  const [players, setPlayers] = useState<Player[] | undefined>(undefined);
  // const [player, setPlayer] = useState<Player | undefined>(undefined);
  fetchPlayersByTeam("KC")
    .then((data) => setPlayers(data))
    .catch(console.error);

  // useEffect(() => {
  //   fetchPlayersByPosition("wr")
  //     .then((data) => setPlayers(data))
  //     .catch(console.error);
  //   // fetchPlayerById(2563848)
  //   //   .then((data) => setPlayer(data))
  //   //   .catch(console.error);
  // }, []);

  return (
    <div className="min-h-screen">
      <div className="container flex flex-col gap-1.5">
        {/* <Profile /> */}

        {players &&
          players
            // .slice(0, 4)
            .map((player) => (
              <PlayerCard key={player.PlayerId} player={player} />
            ))}
        {/* {player && <PlayerCard player={player} />} */}
      </div>
    </div>
  );
}

export default App;
