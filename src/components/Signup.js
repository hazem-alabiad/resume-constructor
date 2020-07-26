import { Link } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import LoginRegisterForm from "forms/LoginRegisterForm";
import validate from "forms/validate";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { Grid, Message } from "semantic-ui-react";
import LanguageSelector from "./LanguageSelector";

// ###################    Globals    ##################

// ###############    Main Component    ###############
const SignupForm = ({ handleSubmit, submitting, invalid }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <LanguageSelector />
      <Grid container className="mt-4" centered style={{ height: "100vh" }}>
        <Grid.Column mobile={14} tablet={10} computer={6}>
          <Grid.Column>
            <LoginRegisterForm
              formName="Signup"
              handleSubmit={handleSubmit}
              invalid={invalid}
              submitting={submitting}
            />
            <Message attached="bottom" warning className="text-center">
              {t("Already have an account")}
              {"? "}
              <Link to={ROUTE_NAMES.login}>{t("Login")}</Link>
            </Message>
          </Grid.Column>
        </Grid.Column>
      </Grid>
    </>
  );
};

// ###################    Types    ##################
SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

const Signup = reduxForm({
  form: "signup",
  validate,
})(SignupForm);

export default Signup;
