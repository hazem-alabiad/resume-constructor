import { Link } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import LoginRegisterForm from "forms/LoginRegisterForm";
import validate from "forms/validate";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { Grid, Message } from "semantic-ui-react";
import LanguageSelector from "./LanguageSelector";

// ###################    Globals    ##################

// ###############    Main Component    ###############
const LoginForm = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { handleSubmit, submitting, invalid } = props;
  const { t } = useTranslation();
  return (
    <>
      <LanguageSelector />
      <Grid className="mt-4" centered style={{ height: "100vh" }}>
        <Grid.Column mobile={14} tablet={10} computer={6}>
          <Grid.Column>
            <LoginRegisterForm
              formName="Login"
              handleSubmit={handleSubmit}
              invalid={invalid}
              submitting={submitting}
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
  form: "login",
  validate,
})(LoginForm);

export default Login;
