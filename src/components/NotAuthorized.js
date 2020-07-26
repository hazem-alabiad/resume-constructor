import React from "react";
import Loader from "react-loader-spinner";
import { Grid } from "semantic-ui-react";
import { DESIGN_SYSTEM } from "../designSystem";
import WithTrans from "./WithTrans";

// ###################    Globals    ##################
const { setTopMargin: setPageTopMargin } = DESIGN_SYSTEM;

// ###############    Main Component    ###############
const NotAuthorized = () => {
  return (
    <Grid container verticalAlign="middle" centered style={setPageTopMargin("100px")}>
      <Grid.Row>
        <Loader type="Plane" width={40} color="blue" />
      </Grid.Row>
      <Grid.Row>
        <h1>
          <WithTrans keyword="redirectToLogin" />
        </h1>
      </Grid.Row>
    </Grid>
  );
};

export default NotAuthorized;
