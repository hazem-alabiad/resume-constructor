import { DESIGN_SYSTEM } from "designSystem";
import React from "react";
import { Button, Grid, Icon, Label, Popup, Segment } from "semantic-ui-react";
import WithTrans from "./WithTrans";

// ###############   Helper Components    ##################
const Experience = () => {
  const {
    experienceRoleStyle,
    experienceCompanyStyle,
    experienceDateStyle,
  } = DESIGN_SYSTEM;

  return (
    <>
      <div className="mb-4">
        <Icon name="file alternate" size="large" className="mr-3" />
        <span className="text-secondary">
          {<WithTrans keyword="Experience" />}
        </span>
        <span className="ml-5">
          <Popup
            content="Add users to your feed"
            trigger={
              <Button icon size="mini" circular color="teal">
                <Icon name="plus" />
              </Button>
            }
          />
        </span>
      </div>
      <Grid>
        <Grid.Column floated="left" mobile="12" tablet="13" computer="14">
          {experienceRoleStyle("Software Engineer")}
          {experienceCompanyStyle("Microsoft")}
          {experienceDateStyle("June 2010 - September 2010 (4 months)")}
        </Grid.Column>
        <Grid.Column floated="right" mobile="4" tablet="3" computer="2">
          <Icon name="microsoft" floated="right" size="huge" />
        </Grid.Column>
      </Grid>
    </>
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
 */
const Background = () => {
  return (
    <Segment padded>
      <Label color="black" attached="top left">
        {<WithTrans keyword="Background" />}
      </Label>
      <Grid>
        <Grid.Column>
          <Experience />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Background;
