import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { api : [ ] };
  }


  componentDidMount(){
      axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({api: res.data})
      })
  }


  render() {
    return (
      <div className="App">
         
      </div>
    );
  }
}

export default App;
