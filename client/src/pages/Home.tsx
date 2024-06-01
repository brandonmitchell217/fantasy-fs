/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { fetchPlayersByPosition } from "../util/api";
import { Player } from "../util/types";
import Profile from "../components/UI/Profile";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetchPlayersByPosition("TE")
      .then((data) => setPlayers(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container flex flex-wrap gap-12">
        <Profile />
        {players.map((player) => (
          <div
            key={player.PlayerId}
            className="text-white text-2xl border border-white rounded-lg p-3"
          >
            <h2>{player.PlayerName}</h2>
            <p>{player.Pos}</p>
            <p>{player.Team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
