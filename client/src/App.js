import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import io from "socket.io-client";
class App extends Component {
  state = {
    location: "",
    connections: 0,
    message: "",
    socket: io(window.location.href)
  };

  componentDidMount() {
    this.state.socket.on("connect", () => {
      this.state.socket.emit("visitor", "new user connected");
    });
    this.state.socket.on("visitor", msg => {
      this.setState({ message: msg });
    });
    this.state.socket.on("delete", msg => {
      this.setState({ message: msg });
    });
    this.state.socket.on("saved", msg => {
      this.setState({ message: msg });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar message={this.state.message} />
          <Banner />
          <Route exact path="/" component={() => <Search socket={this.state.socket} />} />
          <Route exact path="/saved" component={() => <Save socket={this.state.socket} />} />
        </div>
      </Router>
    );
  }
}

export default App;
