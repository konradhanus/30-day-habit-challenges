import React, { Component } from "react";
import "./style.css";

class Tile extends Component {
  constructor() {
    super();
    this.state = {
      habitName: "Od Kiedy:\nCo będę robić:\nJak często:\nO której godzinie:\nJak to będę robić:\nDo kiedy będę to robić:\n",
      editMode: true
    };
  }

  onChange(value) {
    this.setState({ habitName: value });
  }
  render() {
    return this.state.editMode ? (
      <div className="tile">
        <textarea
          value={this.state.habitName}
          onChange={e => this.onChange(e.target.value)}
          className="tile-edit-mode__textarea"
        />
      </div>
    ) : (
      <div className="tile">{this.state.habitName}</div>
    );
  }
}

export default Tile;
