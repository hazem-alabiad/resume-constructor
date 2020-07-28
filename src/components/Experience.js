import { DESIGN_SYSTEM } from "designSystem";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Grid, Icon } from "semantic-ui-react";
import BackgroundSectionHeader from "./BackgroundSectionHeader";

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({});

/**
 * @typedef {object} Props
 * @property {Object} userInfo
 * @property {string} userInfo.token
 * @extends {Component<Props>}
 */
class Experience extends Component {
  render() {
    const {
      experienceRoleStyle,
      experienceCompanyStyle,
      experienceDateStyle,
    } = DESIGN_SYSTEM;

    return (
      <>
        <BackgroundSectionHeader
          sectionIcon="file alternate"
          sectionName="Experience"
          sectionAddHeader="experience.add"
        />
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
        <Divider className="my-5" />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
