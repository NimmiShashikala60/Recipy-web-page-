import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content/Content";

export default class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="min-h-screen">
        <Content/>
      </div>
    );
  }
}

// export default App;
