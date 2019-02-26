import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tiles from './components/Tiles';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          30 Days habit challanges
        </header>
        <Tiles />
        
      </div>
    );
  }
}

export default App;
