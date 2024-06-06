import React from "react";
import { PlayersContext } from "../../util/context/PlayersContext";
import { Link } from "react-router-dom";

const options: string[] = ["All_Positions", "QB", "RB", "WR", "TE"];

export default function PositionFilter() {
  const playerProv = React.useContext(PlayersContext);

  return (
    <div className="py-2 flex justify-end">
      <ul className="flex items-center gap-2">
        {options.map((option) => (
          <li key={option}>
            <Link
              className={`py-2 px-4 rounded border ${
                playerProv?.position === option
                  ? "bg-lime-500 text-slate-800 border-lime-500"
                  : "text-gray-500 border-gray-500 hover:bg-lime-300 hover:text-slate-800"
              }`}
              to={`/?option=${option}`}
              onClick={() => playerProv?.setPosition(option)}
            >
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
