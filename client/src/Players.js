import React from "react";

export default function PLayers(props) {
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
