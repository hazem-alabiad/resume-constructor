import { navigate } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import { DESIGN_SYSTEM } from "designSystem";
import { isAuthenticated } from "helpers/localStorageHelpers";
import PropTypes from "prop-types";
import React from "react";
import { Grid } from "semantic-ui-react";
import Background from "./Background";
import Bio from "./Bio";
import Header from "./Header";
import Login from "./Login";
import NotAuthorized from "./NotAuthorized";

// #####################   Globals    ######################

/**
 * ##################   Main Component    ##################
 * @param {object} props
 * @param {Function} props.logout
 * @param {object} props.userInfo
 * @param {number} props.userInfo.id
 * @param {string} props.userInfo.username
 * @param {string} props.userInfo.firstName
 * @param {string} props.userInfo.lastName
 */
const Home = ({ logout, userInfo }) => {
  if (!isAuthenticated()) {
    // If not authenticated
    setTimeout(() => {
      navigate(ROUTE_NAMES.login, { replace: true });
      return <Login />;
    }, 1000);
  }

  // If not authorized yet, display a temporary message until
  // the user gets redirected
  if (!isAuthenticated()) {
    return <NotAuthorized />;
  }

  // Remove any mis-typed URL
  if (
    window.location.pathname !== ROUTE_NAMES.home &&
    window.location.pathname !== ROUTE_NAMES.editProfile
  ) {
    navigate(ROUTE_NAMES.home);
  } else {
    // If home, change body background color to "azure"
    DESIGN_SYSTEM.setAzureBgColor();
  }

  return (
    <>
      <Header logout={logout} />
      <Grid centered className="mx-1">
        <Grid.Column mobile="16" tablet="15" computer="14">
          <Bio userInfo={userInfo} />
        </Grid.Column>
        <Grid.Column mobile="16" tablet="15" computer="14">
          <Background />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Home;

// ###################    Types   ###################
Home.propTypes = {
  logout: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};
