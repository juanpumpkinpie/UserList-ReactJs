import React, { Component } from "react";
import Cabecera from "./Cabecera";
import Lista from "./Lista";

export default class ViewList extends Component {
  render() {
    return (
      <div>
        <Cabecera />
        <Lista />
      </div>
    );
  }
}
