import { Link } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import { FORM_NAMES } from "forms/formNames";
import LoginRegisterForm from "forms/LoginRegisterForm";
import loginSignupValidate from "forms/loginRegisterValidate";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { Grid, Message } from "semantic-ui-react";
import LanguageSelector from "./LanguageSelector";

// ###################    Globals    ##################

// ###############    Main Component    ###############
const LoginForm = ({ handleSubmit, submitting, invalid, submitSucceeded }) => {
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
              formName="Login"
              handleSubmit={handleSubmit}
              invalid={invalid}
              submitting={submitting}
              submitSucceeded={submitSucceeded}
            />
            <Message attached="bottom" warning className="text-center">
              {t("New to Oplog")}
              {"? "}
              <Link to={ROUTE_NAMES.register}>{t("Signup")}</Link>
            </Message>
          </Grid.Column>
        </Grid.Column>
      </Grid>
    </>
  );
};

const Login = reduxForm({
  form: FORM_NAMES.login,
  validate: loginSignupValidate,
  touchOnChange: true,
})(LoginForm);

export default Login;
