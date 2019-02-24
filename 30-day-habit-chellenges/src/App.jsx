import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./components/Tile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          30 Days habit challanges
        </header>
        <div className="wrapper">
          <div className="content">
            <Tile />
            <Tile />
            <Tile />

            <Tile />
            <Tile />
            <Tile />

            <Tile />
            <Tile />
            <Tile />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
