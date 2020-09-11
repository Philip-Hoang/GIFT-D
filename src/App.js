import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import LandingPage from "./Components/LandingPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
  }
}

export default App;
