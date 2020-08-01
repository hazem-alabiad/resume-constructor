import { DESIGN_SYSTEM } from "designSystem";
import { getRandomInt } from "helpers/numbers";
import { capitalizeFirstLetter } from "helpers/strings";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Grid,
  Icon,
  Image,
  Segment,
  Statistic
} from "semantic-ui-react";
import WithTrans from "./WithTrans";

// #####################   Globals    ######################
const {
  many,
  setHeaderStyle,
  setMetadataStyle,
  setExtraStyle,
  setSuperLightStyle,
  setFontSize,
} = DESIGN_SYSTEM;

// ################   Helper ComponentS    ###################
const MessageBtn = () => {
  let size = "mini";
  let color = "blue";
  return (
    <div className="mt-5 floated">
      <Button size={size} color={color} attached="left">
        {<WithTrans keyword="Send a message" />}
      </Button>
      <Button attached="right" className="pr-1" size={size} color={color}>
        <Icon name="caret down" />
      </Button>
    </div>
  );
};

const ConnectionsCounter = () => {
  return (
    <Statistic color="blue" size="tiny" className="flex">
      <Statistic.Value>{getRandomInt()}</Statistic.Value>
      <Statistic.Label className="gray">
        {<WithTrans keyword="Connections" />}
      </Statistic.Label>
    </Statistic>
  );
};

// const EmptyLines = () => (
//   <Placeholder>
//     <Placeholder.Line />
//     <Placeholder.Line />
//     <Placeholder.Line />
//     <Placeholder.Line />
//   </Placeholder>
// );

const ButtonAndConnections = () => (
  <div className="d-flex align-items-end">
    <div>
      <MessageBtn />
    </div>
    <div className="ml-auto">
      <ConnectionsCounter />
    </div>
  </div>
);

const LocationRole = () => {
  return (
    <div style={many(setExtraStyle(), setFontSize.extra)}>
      Seattle, Washington | Computer Software
    </div>
  );
};

/**
 * ##################   Main Component    ##################
 * @param {object} props
 * @param {object} props.userInfo
 * @param {number} props.userInfo.id
 * @param {string} props.userInfo.username
 * @param {string} props.userInfo.firstName
 * @param {string} props.userInfo.lastName
 * @param {object} props.lastExperience
 * @param {string} props.lastExperience.role
 * @param {string} props.lastExperience.company
 * @param {object} props.lastEducation
 * @param {string} props.lastEducation.startYear
 * @param {string} props.lastEducation.schoolName
 * @param {string[]} props.previousThreeCompanies
 */
const Bio = ({
  userInfo,
  lastExperience,
  lastEducation,
  previousThreeCompanies,
}) => {
  const { t } = useTranslation();
  const name = () => {
    let _firstName = t("Name");
    let _lastName = t("Surname");
    if (userInfo) {
      const { firstName, lastName } = userInfo;
      _firstName = capitalizeFirstLetter(firstName);
      _lastName = capitalizeFirstLetter(lastName);
    }
    return (
      <div style={many(setHeaderStyle(), setFontSize.header)} className="mb-4">
        {_firstName + " " + _lastName}
      </div>
    );
  };

  const highlight = () => {
    if (!lastExperience) return <></>;
    const { role, company } = lastExperience;
    return (
      <>
        <div
          style={many(setMetadataStyle(), setFontSize.metadata)}
          className="mb-3"
        >{`${role} at ${company}`}</div>
        {LocationRole()}
      </>
    );
  };
  const previous = () => {
    if (!previousThreeCompanies) return;
    return (
      <div className="mt-3">
        <span style={many(setSuperLightStyle())}>{t("Previous")}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {previousThreeCompanies.join(", ")}
      </div>
    );
  };
  const education = () => {
    if (!lastEducation) return;
    return (
      <div className="mt-3">
        <span style={many(setSuperLightStyle())}>{t("Education")}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`${lastEducation.startYear} Present ${lastEducation.schoolName}`}
      </div>
    );
  };

  return (
    <Segment>
      <Grid centered padded="vertically" verticalAlign="middle">
        <Grid.Column mobile="14" tablet="6" computer="5">
          <Image
            src="https://semantic-ui.com/images/avatar2/large/matthew.png"
            circular
            size="medium"
            centered
          />
        </Grid.Column>
        <Grid.Column mobile="15" tablet="10" computer="11">
          {name()}
          {highlight()}
          {previous()}
          {education()}
          <ButtonAndConnections />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Bio;

// ###################    Types   ###################
Bio.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  lastEducation: PropTypes.shape({
    schoolName: PropTypes.string,
    startYear: PropTypes.string,
  }),
  lastExperience: PropTypes.shape({
    role: PropTypes.string,
    company: PropTypes.string,
  }),
};
