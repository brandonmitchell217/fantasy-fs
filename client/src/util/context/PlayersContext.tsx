import React, { SetStateAction } from "react";
import axios from "axios";
import { Player } from "../types";

// TODO: Remove param if not needed

interface PlayersContextProps {
  players: Player[];
  param?: string | null;
  setParam?: (param: string) => void;
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
  //   const [param, setParam] = React.useState<string | null>(query || null);

  React.useEffect(() => {
    fetchPlayers();
  }, []);

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

  return (
    <PlayersContext.Provider value={{ players, fetchPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
