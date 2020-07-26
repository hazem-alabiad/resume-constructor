import { Router } from "@reach/router";
import {
  clearCurrentUserInfo,
  setCurrentUserInfo
} from "actions/userInfoActions";
import { login, signup } from "api/apis";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ROUTE_NAMES } from "../constants/routeNames";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserInfo: (userInfo) => dispatch(setCurrentUserInfo(userInfo)),
  clearCurrentUserInfo: () => dispatch(clearCurrentUserInfo()),
});

/**
 * @typedef {object} Props
 * @property {Function} setCurrentUserInfo
 * @property {Function} clearCurrentUserInfo
 * @property {Object} userInfo
 * @property {string} userInfo.token
 * @extends {Component<Props>}
 */
class Main extends Component {
  signupSubmit = (values) => {
    const { username, password, firstName, lastName } = values;
    signup(username, password, firstName, lastName);
  };

  loginSubmit = (values) => {
    const { username, password } = values;
    login(username, password, this.props.setCurrentUserInfo);
  };

  render() {
    return (
      <Router>
        <Home path={ROUTE_NAMES.home} default />
        <Login path={ROUTE_NAMES.login} onSubmit={this.loginSubmit} />
        <Signup path={ROUTE_NAMES.register} onSubmit={this.signupSubmit} />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
