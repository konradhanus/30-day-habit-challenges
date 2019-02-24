import React, { Component } from "react";
import "./style.css";
import Tile from "../Tile";
import AddNewTile from "../AddNewTile";
class Tiles extends Component {
  constructor() {
    super();
    this.state = {
      habbits: [{ habitName: "" }]
    };
  }

  componentWillMount() {
    let habbits = localStorage.getItem("habits");
    if (!habbits) {
      habbits = [{ habitName: "" }];
      this.setState({ habbits: habbits });
    } else {
     // this.setState({ habbits: JSON.parse(habbits) });
    }
  }

  onClickAddTile() {
    const habbits = this.state.habbits;
    habbits.push({
      habitName:
        "Od Kiedy:\nCo będę robić:\nJak często:\nO której godzinie:\nJak to będę robić:\nDo kiedy będę to robić:\n"
    });
    this.setState({ habbits: habbits });
  }

  onChangeTileText = (text, id) => {
    const habbits = this.state.habbits;
    habbits[id].habitName = text;
    this.setState({ habbits: habbits });

    localStorage.setItem("habits", JSON.stringify(habbits));
  };

  onClickRemove = id => {
    const habbits = this.state.habbits;
    if (this.state.habbits.length !== 1) {
      delete habbits[id];
      
    }else{
      habbits[id].habitName = "";
    }
      this.setState({ habbits: habbits });
      localStorage.setItem("habits", JSON.stringify(habbits));
  };
  render() {
    return (
      <div className="content">
        {this.state.habbits.map((tile, i) => (
          <Tile
            key={i}
            onChangeTileText={this.onChangeTileText}
            id={i}
            habitName={tile.habitName}
            onClickRemove={this.onClickRemove}
          />
        ))}

        {this.state.habbits.length !== 9 && (
          <AddNewTile onClickAddTile={() => this.onClickAddTile()} />
        )}
      </div>
    );
  }
}

export default Tiles;
