import React from "react";

export default class Players extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const { players } = this.props;
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
}
