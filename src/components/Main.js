import { Router } from "@reach/router";
import * as userInfoActions from "actions/userInfoActions";
import { apiLogin, apiSignup } from "api/apis";
import { logout } from "helpers/localStorageHelpers";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ROUTE_NAMES } from "../constants/routeNames";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

// ###################   Helpers    ####################
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  lastExperience: state.experiences && state.experiences[0],
  lastEducation: state.educations && state.educations[0],
  previousThreeExperiences: state.experiences && state.experiences.slice(1, 4),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserInfo: (userInfo) =>
    dispatch(userInfoActions.setCurrentUserInfo(userInfo)),
  userLogout: () => dispatch(userInfoActions.userLogout()),
});

/**
 * ################   Main Component    ################
 * @typedef {object} Props
 * @property {Function} setCurrentUserInfo
 * @property {Function} userLogout
 * @property {Object} userInfo
 * @property {string} userInfo.token
 * @property {object} lastExperience
 * @property {string} lastExperience.role
 * @property {string} lastExperience.company
 * @property {object} lastEducation
 * @property {string} lastEducation.startYear
 * @property {string} lastEducation.schoolName
 * @property {object[]} previousThreeExperiences
 * @extends {Component<Props>}
 */
class Main extends Component {
  handleSignupSubmit = (values) => {
    const { username, password, firstName, lastName } = values;
    apiSignup(username, password, firstName, lastName);
  };

  handleLoginSubmit = (values, reduxDevtoolCbFn, formProps) => {
    const { username, password } = values;
    apiLogin(username, password, this.props.setCurrentUserInfo);
  };

  onLogout = () => logout(this.props.userLogout);

  previousThreeCompanyNames = () => {
    if (!this.props.previousThreeExperiences) return [];
    return this.props.previousThreeExperiences.map(
      (experience) => experience.company
    );
  };

  render() {
    return (
      <Router>
        <Home
          path={ROUTE_NAMES.home}
          logout={this.onLogout}
          userInfo={this.props.userInfo}
          lastExperience={this.props.lastExperience}
          lastEducation={this.props.lastEducation}
          previousThreeCompanies={this.previousThreeCompanyNames()}
          default
        />
        <Home
          path={ROUTE_NAMES.editProfile}
          logout={this.onLogout}
          userInfo={this.props.userInfo}
          lastExperience={this.props.lastExperience}
          lastEducation={this.props.lastEducation}
          previousThreeCompanies={this.previousThreeCompanyNames()}
        />
        <Login path={ROUTE_NAMES.login} onSubmit={this.handleLoginSubmit} />
        <Signup
          path={ROUTE_NAMES.register}
          onSubmit={this.handleSignupSubmit}
        />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
