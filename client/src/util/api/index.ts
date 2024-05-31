import { Player } from "../types";

export const fetchPlayers = async () => {
  const response = await fetch("http://localhost:3100/players");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};
