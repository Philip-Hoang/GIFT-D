import React, { Component } from "react";
import "./navbar.css";
import { withRouter } from "react-router-dom";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.goToLogo = this.goToLogo.bind(this);
    this.goToAboutUs = this.goToAboutUs.bind(this);
    this.goToReviews = this.goToReviews.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
  }

  goToLogo() {
    console.log("go to logo");
    // this.props.history.push("/");
    this.props.history.push({
      pathname: "/",
      state: { page: 1 },
    });
  }
  goToAboutUs() {
    console.log("go to About Us");
    this.props.history.push("/aboutus");
  }
  goToReviews() {
    console.log("go to Reviews");
    this.props.history.push("/reviews");
  }
  goToSignUp() {
    console.log("go to Sign Up");
    this.props.history.push("/signup");
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-white m-5">
          <span
            type="none"
            className="link-button logo"
            onClick={this.goToLogo}
          >
            GIFT'D
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
              <span
                type="none"
                className="link-button about-us"
                onClick={this.goToAboutUs}
              >
                About us
              </span>

              <span
                type="none"
                className="link-button reviews"
                onClick={this.goToReviews}
              >
                Reviews
              </span>

              <span
                type="none"
                className="link-button sign-up"
                onClick={this.goToSignUp}
              >
                Sign Up
              </span>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default withRouter(TopNavBar);
