import React, { Component, Suspense } from "react";
import TopNavBar from "./NavBar/TopNavBar";
import { Switch, Route } from "react-router-dom";
import LoadSpinner from "./Commons/LoadSpinner";
import allRoutes from "../allRoutes";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  allRoutes = () => {
    return (
      <Suspense fallback={<LoadSpinner />}>
        <Switch>
          {allRoutes.map((route, idx) => (
            <Route key={idx + 1} {...route} />
          ))}
        </Switch>
      </Suspense>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="ml-5 mr-5">
          <TopNavBar />
          {this.allRoutes()}
        </div>
      </React.Fragment>
    );
  }
}
export default LandingPage;
