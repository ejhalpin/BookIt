import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Save from "./components/pages/Save";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    location: "",
    connections: 0
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Save} />
        </div>
      </Router>
    );
  }
}

export default App;
