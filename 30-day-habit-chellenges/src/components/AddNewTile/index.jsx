import React, { Component } from "react";
import "./style.css";

class AddNewTile extends Component {
  render() {
    return(
        <div className="add-new-tile" onClick={() => this.props.onClickAddTile()}>add habit</div>
    );
  }
}

export default AddNewTile;
