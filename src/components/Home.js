import { navigate } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import { isAuthenticated } from "helpers/localStorageHelpers";
import PropTypes from "prop-types";
import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Login from "./Login";
import NotAuthorized from "./NotAuthorized";

const Home = ({ logout }) => {
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
  if (window.location.href.split("/")[3] !== ROUTE_NAMES.home) {
    navigate(ROUTE_NAMES.home);
  }

  return (
    <>
      <Header logout={logout} />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Home;

Home.propTypes = {
  logout: PropTypes.func.isRequired,
};
