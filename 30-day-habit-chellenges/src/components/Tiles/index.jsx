import React, { Component } from "react";
import "./style.css";
import Tile from "../Tile";
import AddNewTile from "../AddNewTile";
class Tiles extends Component {
  constructor() {
    super();
    this.state = {
      tileNumber: []
    };
  }

  onClickAddTile() {
    const tileNumber = this.state.tileNumber;
    console.log("aaa");
    tileNumber.push({});
    this.setState({ tileNumber: tileNumber });
  }
  render() {
    return (
      <div className="content">
        {this.state.tileNumber.map((tile, i) => (
          <Tile key={i} />
        ))}

        {this.state.tileNumber.length !== 9 && (
          <AddNewTile onClickAddTile={() => this.onClickAddTile()} />
        )}
      </div>
    );
  }
}

export default Tiles;
