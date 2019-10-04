import React from "react";
import "./App.css";
import axios from "axios";
import Players from "./Players";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { api: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      this.setState({ api: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Players players={this.state.users} />
      </div>
    );
  }
}

export default App;
