import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function Players(props) {
  const { players } = props;
  const [topThree, setTopthree] = useLocalStorage("topThree", []);

  useEffect(() => {
    const topThreePlayers = players.filter(el => el.id <= 3);
    setTopthree(topThreePlayers);
  }, [players]);

  return (
    <div>
      <div>
        {topThree.map(el => (
          <div>
            <p>{el.name} </p>
            <p>{el.id} </p>
          </div>
        ))}
      </div>
      {players.map(el => (
        <div>
          {el.name}
          <p>{el.country}</p>
          <p>{el.searches}</p>
        </div>
      ))}
    </div>
  );
}
