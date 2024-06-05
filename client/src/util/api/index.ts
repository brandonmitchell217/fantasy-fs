import axios from "axios";
import { Player } from "../types";

export const fetchAllPlayers = async () => {
  const response = await axios.get("http://localhost:3100/api/players");

  if (!response) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.data;

  return data;
};

export const fetchPlayersByPosition = async (position: string) => {
  const response = await axios.get(
    `http://localhost:3100/api/players/${position}`
  );

  if (!response) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.data;

  return data;
};

export const fetchPlayerById = async (id: number) => {
  const response = await axios.get(`http://localhost:3100/api/players/${id}`);

  if (!response) {
    throw new Error("Network response was not ok");
  }

  const data: Player = await response.data;

  return data;
};

export const fetchPlayersByTeam = async (team: string) => {
  const response = await axios.get(
    `http://localhost:3100/api/players/teams/${team}`
  );

  if (!response) {
    throw new Error("Network response was not ok");
  }

  const data: Player[] = await response.data;

  return data;
};
