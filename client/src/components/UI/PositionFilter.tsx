import React from "react";
import { PlayersContext } from "../../util/context/PlayersContext";
import { Link } from "react-router-dom";

const options: string[] = ["All_Positions", "QB", "RB", "WR", "TE"];

export default function PositionFilter() {
  const playerProv = React.useContext(PlayersContext);

  return (
    <div className="py-2 flex justify-end">
      <ul className="flex items-center gap-6">
        {options.map((option) => (
          <li key={option}>
            <Link
              to={`/?option=${option}`}
              onClick={() => {
                if (playerProv?.setPosition) {
                  playerProv.setPosition(option);
                }
              }}
            >
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
