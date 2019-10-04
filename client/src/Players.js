import React from "react";
import useLocalStorage from "./hooks/useLocalStorage"

export default function Players(props) {
  const { players } = props;

  return (
    <div>
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

