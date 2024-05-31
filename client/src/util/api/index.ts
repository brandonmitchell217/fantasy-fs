import { Player } from "../types";

export const fetchAllPlayers = async () => {
  const response = await fetch("http://localhost:3100/api/players");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};

export const fetchQBPlayers = async () => {
  const response = await fetch("http://localhost:3100/api/players/qb");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};

export const fetchRBPlayers = async () => {
  const response = await fetch("http://localhost:3100/api/players/rb");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};

export const fetchWRPlayers = async () => {
  const response = await fetch("http://localhost:3100/api/players/wr");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.json();

  return data;
};

export const fetchTEPlayers = async () => {
  const response = await fetch("http://localhost:3100/api/players/te");

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
