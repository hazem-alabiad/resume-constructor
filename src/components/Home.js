import { navigate } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import { DESIGN_SYSTEM } from "designSystem";
import { isAuthenticated } from "helpers/localStorageHelpers";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Segment } from "semantic-ui-react";
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
  const { t } = useTranslation();

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
  if (window.location.pathname !== ROUTE_NAMES.home) {
    navigate(ROUTE_NAMES.home);
  } else {
    // If home, change body background color to "azure"
    DESIGN_SYSTEM.setAzureBgColor();
  }

  return (
    <>
      <Header logout={logout} />
      <Grid container centered>
        <Grid.Column mobile="16" tablet="14" computer="12">
          <Segment>
            <Grid container centered padded="vertically" verticalAlign="middle">
              <Bio userInfo={userInfo} />
            </Grid>
          </Segment>
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
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
