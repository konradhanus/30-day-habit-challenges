import React, { Component } from "react";
import "./style.css";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true
    };
  }

  onChange(value) {
    this.props.onChangeTileText(value, this.props.id);
  }
  render() {
    return this.state.editMode ? (
      <div className="tile">
        <textarea
          value={this.props.habitName}
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
