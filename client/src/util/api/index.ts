import { Player } from "../types";

export const fetchAllPlayers = async () => {
  const response = await fetch("http://localhost:3100/api/players");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};

export const fetchPlayersByPosition = async (position: string) => {
  const response = await fetch(`http://localhost:3100/api/players/${position}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};

export const fetchPlayerById = async (id: number) => {
  const response = await fetch(`http://localhost:3100/api/players/${id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player = await response.json();

  return data;
};
