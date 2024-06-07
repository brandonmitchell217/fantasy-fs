import React, { SetStateAction } from "react";
import axios from "axios";
import { Player } from "../types";

interface PlayersContextProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  position: string;
  setPosition: (position: string) => void;
  fetchPlayers: (
    query?: string,
    param?: string | number | undefined
  ) => Promise<void> | SetStateAction<Player | undefined>;
}

export const PlayersContext = React.createContext<
  PlayersContextProps | undefined
>(undefined);

const PlayersProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = React.useState<Player[]>([]);
  const [position, setPosition] = React.useState<string>("All_Positions");

  const fetchPlayers = async (
    query?: string,
    param?: string | number | undefined
  ) => {
    let response;
    if (query === "id") {
      response = await axios.get(`http://localhost:3100/api/players/${param}`);
    } else if (query === "pos") {
      response = await axios.get(`http://localhost:3100/api/players/${param}`);
    } else if (query === "team") {
      response = await axios.get(
        `http://localhost:3100/api/players/teams/${param}`
      );
    } else {
      response = await axios.get(`http://localhost:3100/api/players`);
    }

    if (!response) {
      throw new Error("Network response was not ok");
    }

    const data: Player[] = await response.data;

    setPlayers(data);
  };

  React.useEffect(() => {
    if (position === "All_Positions") {
      fetchPlayers();
    }
  }, [position]);

  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
        fetchPlayers,
        position,
        setPosition,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
