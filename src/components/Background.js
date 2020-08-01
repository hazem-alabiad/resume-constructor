import React from "react";
import { Divider, Grid, Label, Segment } from "semantic-ui-react";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import WithTrans from "./WithTrans";

// ###############   Helper Components    ##################

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
          <Divider className="my-5" />
          <Education />
          <Divider className="my-5" />
          <Skill />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Background;
