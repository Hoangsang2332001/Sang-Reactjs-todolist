import React, { Component } from "react";

import Sreach from "./Search";
import Sort from "./Sort";
class Control extends Component {
  render() {
    return (
      <div className="row mt-15">
        <Sreach onSearch={this.props.onSearch}></Sreach>
        <Sort 
            onSort={this.props.onSort}
            sortBy={this.props.sortBy}
            sortValue={this.props.sortValue}
          ></Sort>
      </div>
    );
  }
}

export default Control;
