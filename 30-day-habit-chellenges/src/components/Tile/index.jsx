import React, { Component } from "react";
import "./style.css";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      hover: false, 
      edit: false,
      remove: false
    };
  }

  onChange(value) {
    this.props.onChangeTileText(value, this.props.id);
  }

  onClickSave() {
    this.setState({ editMode: false });
  }

  onClickEditMode() {
    this.setState({ editMode: true });
  }

  onMouseEnterTile() {
    this.setState({ hover: true });
  }

  onMouseLeaveTile() {
    this.setState({ hover: false });
  }

  onMouseEnterTileEdit() {
    this.setState({ edit: true });
  }

  onMouseLeaveTileEdit() {
    this.setState({ edit: false });
  }

  onMouseEnterTileRemove() {
    this.setState({ remove: true });
  }

  onMouseLeaveTileRemove() {
    this.setState({ remove: false });
  }

  render() {
    return this.state.editMode ? (
      <div className="tile tile-hover-edit">
        <textarea
          value={this.props.habitName}
          onChange={e => this.onChange(e.target.value)}
          className="tile-edit-mode__textarea"
        />
        <button onClick={() => this.onClickSave()}>save</button>
      </div>
    ) : (
      <React.Fragment>
        {this.state.hover ? (
          <div
            className={this.state.remove ? "tile-hover tile-hover-delete": this.state.edit ? "tile-hover tile-hover-edit": "tile-hover"}
            onMouseLeave={() => this.onMouseLeaveTile()}
          >
            <i className="fas fa-check fa-6x" /> <br />
            <i className="fas fa-edit fa-2x" 
            onClick={()=>this.onClickEditMode()}
            onMouseEnter={() => this.onMouseEnterTileEdit()}
            onMouseLeave={() => this.onMouseLeaveTileEdit()} /> | 
            
            <i className={"fas fa-times fa-2x"} 
            onClick={()=>this.props.onClickRemove(this.props.id)}
            onMouseEnter={() => this.onMouseEnterTileRemove()}
            onMouseLeave={() => this.onMouseLeaveTileRemove()} />
          </div>
        ) : (
          <div className="tile" 
          onMouseOver={() => this.onMouseEnterTile()}>
            {this.props.habitName}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Tile;
