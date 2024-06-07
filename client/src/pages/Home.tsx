/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useContext } from "react";
import { fetchPlayersByPosition } from "../util/api";
import PlayerCard from "../components/Card/PlayerCard";
import { PlayersContext } from "../util/context/PlayersContext";
import PositionFilter from "../components/UI/PositionFilter";

function App() {
  const PlayerData = useContext(PlayersContext);
  const players = PlayerData?.players;
  const urlParams = new URLSearchParams(window.location.search);
  const option = urlParams.get("option");

  useEffect(() => {
    if (option && option != "All_Positions") {
      fetchPlayersByPosition(option).then((data) => {
        PlayerData?.setPosition(option);
        PlayerData?.setPlayers(data);
      });
    }
  }, [option, PlayerData]);

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
