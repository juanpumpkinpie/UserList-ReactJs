import React, { Component } from "react";

export default class Lista extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            user 1 <button>Edit</button>{" "}
          </li>
          <li>
            user 2 <button>Edit</button>{" "}
          </li>
        </ul>
      </div>
    );
  }
}
