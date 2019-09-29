import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

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
          <Banner />
          <Route exact path="/" component={() => <Search with={"something"} />} />
          <Route exact path="/saved" component={Save} />
        </div>
      </Router>
    );
  }
}

export default App;
