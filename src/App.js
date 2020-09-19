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

//
//to add new code run the following line -- npm run deploy
// /https://medium.com/better-programming/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb
// https://philip-hoang.github.io/GIFT-D/
