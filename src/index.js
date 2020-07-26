import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Loader } from "semantic-ui-react";
import App from "./App";
// import i18n (needs to be bundled ;))
import "./i18n";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";

const loading = (
  <Grid container centered className="mt-5" verticalAlign="middle">
    <Grid.Row>
      <Grid.Column>
        <Loader active inline="centered">
          Loading
        </Loader>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

ReactDOM.render(
  <Suspense fallback={loading}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
