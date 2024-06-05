import React from "react";
import { Player } from "../../util/types";
import Like from "../Like";
import {
  determinePlayerColor,
  extractPlayerStats,
  shortenString,
} from "../../util/util";

export default function PlayerCard({ player }: { player: Player }) {
  const stats = extractPlayerStats(player);
  const handleClick = () => {
    console.log(player);
    console.log(stats);
  };
  return (
    <div
      className="relative w-full border-2 border-white pl-2 rounded-lg flex items-center"
      onClick={handleClick}
    >
      <Like player={player} />
      <div className="w-1/12 px-1 flex flex-col">
        <h6 className="text-xs font-bold">{player.PlayerName}</h6>
        <div
          className={`space-x-1 text-xs ${determinePlayerColor(player.Team)}`}
        >
          <span className="font-bold">{player.Pos}</span>
          <span>-</span>
          <span>{player.Team}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              {Object.entries(stats).map(([key]) => (
                <th
                  key={key}
                  className="border border-white px-2 py-1 text-[10px]"
                >
                  {shortenString(key, 12)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.entries(stats).map(([key, value]) => (
                <td
                  key={key}
                  className="border border-white px-2 py-1 text-center text-xs"
                >
                  {value ? value : "-"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
