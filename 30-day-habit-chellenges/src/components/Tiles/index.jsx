import React, { Component } from "react";
import "./style.css";
import Tile from "../Tile";
import AddNewTile from "../AddNewTile";
class Tiles extends Component {
  render() {
    return (
      <div className="content">
        <Tile />
        <Tile />

        <Tile />
        <Tile />
        <Tile />

        <Tile />
        <Tile />
        <AddNewTile />
      </div>
    );
  }
}

export default Tiles;
