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
import { PlayersContext } from "../util/context/PlayersContext";
import PositionFilter from "../components/UI/PositionFilter";

function App() {
  // TODO: Set up dummy data
  const PlayerData = useContext(PlayersContext);
  const players = PlayerData?.players;

  return (
    <div className="min-h-screen">
      <div className="container flex flex-col gap-1.5">
        <PositionFilter />

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
