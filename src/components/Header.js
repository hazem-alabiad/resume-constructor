import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Flag, Icon, Menu, Segment } from "semantic-ui-react";
import WithTrans from "./WithTrans";

const Header = ({ logout }) => {
  const { i18n } = useTranslation();

  return (
    <Segment className="rounded-0">
      <Menu secondary size="tiny">
        <Menu.Item>
          <Button
            color="red"
            onClick={() => {
              logout();
            }}
          >
            <Icon name="sign-out"></Icon> <WithTrans keyword="Logout" />
          </Button>
        </Menu.Item>
        <Menu.Menu position="right">
          <Button.Group size="tiny">
            <Button
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <Flag name="us" /> En
            </Button>
            <Button.Or />
            <Button onClick={() => i18n.changeLanguage("tr")}>
              <Flag name="tr" /> Tr
            </Button>
          </Button.Group>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Header;

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
