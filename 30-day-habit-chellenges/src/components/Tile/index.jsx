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

  onClickSave(){
    this.setState({editMode: false})
  }

  render() {
    return this.state.editMode ? (
      <div className="tile">
        <textarea
          value={this.props.habitName}
          onChange={e => this.onChange(e.target.value)}
          className="tile-edit-mode__textarea"
        />
        <button onClick={() => this.onClickSave()}>save</button>
      </div>
    ) : (
      <div className="tile">{this.props.habitName}</div>
    );
  }
}

export default Tile;
