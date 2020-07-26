import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Flag, Menu } from "semantic-ui-react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <Menu secondary size="tiny" className="m-5">
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
  );
};

export default LanguageSelector;
