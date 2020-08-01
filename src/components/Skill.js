import * as setItemBeingEditedActions from "actions/itemBeingEditedActions";
import * as skillActions from "actions/skillActions";
import { apiAddItem, apiEditItem, apiFetchItems } from "api/apis";
import URLS from "api/urls";
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Message, Placeholder } from "semantic-ui-react";
import AddSkill from "./AddSkill";
import BackgroundItem from "./BackgroundItem";
import BackgroundSectionHeader from "./BackgroundSectionHeader";
import DeleteItemModal from "./DeleteItemModal";
import EditItemModalWrapper from "./EditItemModalWrapper";
import EditSkill from "./EditSkill";
import WithTrans from "./WithTrans";

// #################    Globals   #################
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  skills: state.skills,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: (skills) => dispatch(skillActions.fetchSkills(skills)),
  loadingSkills: () => dispatch(skillActions.loadingSkills()),
  addSkill: (skill) => dispatch(skillActions.addSkill(skill)),
  deleteSkill: (skillId) => dispatch(skillActions.deleteSkill(skillId)),
  setSkillBeingEdited: (skill) =>
    dispatch(setItemBeingEditedActions.setItemBeingEdited(skill)),
  editSkill: (updatedSkill) => dispatch(skillActions.editSkill(updatedSkill)),
});

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @property {Object} userInfo
 * @property {string} userInfo.token
 * @property {Object[]} skills
 * @property {Function} fetchSkills
 * @property {Function} addSkill
 * @property {Function} loadingSkills
 * @property {Function} deleteSkill
 * @property {Function} editSkill
 * @property {Function} setSkillBeingEdited
 * @extends {Component<Props>}
 */
class Skill extends Component {
  // ###############   Life-Cycle Methods    ###############
  componentDidMount() {
    this.props.loadingSkills();
    // Load skills by making an API call
    apiFetchItems(
      URLS.SKILLS,
      this.props.userInfo.token,
      this.props.fetchSkills,
      "skill.fetchError"
    );
  }

  handleAddSkill = (values, reduxDevtoolCbFn, formProps) => {
    const { closeOnSubmit } = formProps;
    apiAddItem(
      URLS.SKILLS,
      values,
      this.props.addSkill,
      closeOnSubmit,
      "skill.addSuccessMsg",
      "skill.addFailureMsg"
    );
  };

  handleEditSkill = (values, reduxDevtoolCbFn, formProps) => {
    const { closeOnSubmit } = formProps;
    apiEditItem(
      URLS.SKILLS,
      values,
      closeOnSubmit,
      this.props.editSkill,
      "skill.editSuccessMsg",
      "skill.editFailureMsg"
    );
  };

  renderSkills = () => {
    // If skills not loaded yet, return a Loader
    if (this.props.skills === null) {
      return (
        <Grid.Column>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Grid.Column>
      );
    } else if (!this.props.skills || !this.props.skills.length) {
      return (
        <Grid.Column>
          <Message info>
            <h3 className="mb-2">
              <WithTrans keyword="skill.noSkill" />
            </h3>
            <WithTrans keyword="skill.howToAddSkills" />
          </Message>
        </Grid.Column>
      );
    }

    return _.map(
      this.props.skills,
      /**
       * @param {object} skill
       * @param {number} skill.id
       * @param {string} skill.skillName
       */
      (skill, index) => {
        const { id, skillName } = skill;

        return (
          <Grid key={index}>
            <Grid.Column>
              <BackgroundItem
                header={skillName}
                isSkill={true}
                EditItemModal={
                  <EditItemModalWrapper
                    item={skill}
                    setItemBeingEdited={this.props.setSkillBeingEdited}
                    handleEditItem={this.handleEditSkill}
                    EditItemForm={EditSkill}
                  />
                }
                DeleteItemModal={
                  <DeleteItemModal
                    path={URLS.SKILLS}
                    deleteItemAction={this.props.deleteSkill}
                    itemId={id}
                    successMsg="skill.deleteSuccessMsg"
                    failureMsg="skill.deleteFailureMsg"
                  />
                }
              />
            </Grid.Column>
          </Grid>
        );
      }
    );
  };

  render() {
    return (
      <>
        <BackgroundSectionHeader
          sectionIcon="compass"
          sectionName="Skills"
          addItemModalHeader="skill.addItemHeader"
          onSubmit={this.handleAddSkill}
          AddItemForm={AddSkill}
        />
        {this.renderSkills()}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
